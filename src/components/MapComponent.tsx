import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DistrictGK, LandmarkPOI } from '../types';
import { ALL_DISTRICTS, getDistrictByAdm2 } from '../data/districtsData';
import { SPECIAL_LANDMARKS } from '../data/specialLandmarks';
import { DIVISIONS } from '../data/divisions';
import { MAJOR_RIVERS, riverToPOI } from '../data/riverData';
import simplifiedGeoJson from '../data/bangladesh-districts-simplified.json';
import { 
  Eye, EyeOff, Waves, MapPin, Sparkles, 
  Building, Mountain, Zap, Factory 
} from 'lucide-react';

interface MapComponentProps {
  onSelectDistrict: (district: DistrictGK) => void;
  onSelectSpot: (spot: LandmarkPOI) => void;
  searchQuery: string;
  mapTileLayer: 'osm' | 'carto_voyager' | 'carto_dark';
  highlightedDistrict: DistrictGK | null;
}

export const MapComponent: React.FC<MapComponentProps> = ({
  onSelectDistrict,
  onSelectSpot,
  searchQuery,
  mapTileLayer,
  highlightedDistrict
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);
  const districtLabelsLayerRef = useRef<L.LayerGroup | null>(null);
  const riversLayerRef = useRef<L.LayerGroup | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictGK | null>(null);
  const [showDistrictNames, setShowDistrictNames] = useState<boolean>(true);
  const [showRivers, setShowRivers] = useState<boolean>(true);
  const [showSpots, setShowSpots] = useState<boolean>(true);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Center of Bangladesh ~ [23.85, 90.35], Zoom level 7.2
    const map = L.map(mapContainerRef.current, {
      center: [23.85, 90.35],
      zoom: 7.2,
      minZoom: 6,
      maxZoom: 15,
      zoomControl: false,
    });

    // Custom zoom control in bottom-right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Initial Tile Layer
    const tileUrls: Record<string, { url: string; attr: string }> = {
      osm: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}.png',
        attr: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      },
      carto_voyager: {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}{r}.png',
        attr: '&copy; OpenStreetMap &copy; CARTO'
      },
      carto_dark: {
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}{r}.png',
        attr: '&copy; OpenStreetMap &copy; CARTO'
      }
    };

    const initialTiles = tileUrls[mapTileLayer] || tileUrls.osm;
    const tiles = L.tileLayer(initialTiles.url, {
      attribution: initialTiles.attr,
      subdomains: 'abc',
      maxZoom: 18,
    }).addTo(map);
    tileLayerRef.current = tiles;

    // Layer group for rivers (rendered under spots)
    const riversGroup = L.layerGroup().addTo(map);
    riversLayerRef.current = riversGroup;

    // Layer group for district Bangla name text labels
    const labelsGroup = L.layerGroup().addTo(map);
    districtLabelsLayerRef.current = labelsGroup;

    // Layer group for spot markers (rendered on top)
    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer if changed
  useEffect(() => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    mapInstanceRef.current.removeLayer(tileLayerRef.current);

    const tileConfigs = {
      osm: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}.png',
        attr: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      },
      carto_voyager: {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}{r}.png',
        attr: '&copy; OpenStreetMap &copy; CARTO'
      },
      carto_dark: {
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}{r}.png',
        attr: '&copy; OpenStreetMap &copy; CARTO'
      }
    };

    const cfg = tileConfigs[mapTileLayer] || tileConfigs.osm;
    const newTiles = L.tileLayer(cfg.url, {
      attribution: cfg.attr,
      subdomains: 'abc',
      maxZoom: 18
    }).addTo(mapInstanceRef.current);
    tileLayerRef.current = newTiles;
  }, [mapTileLayer]);

  // Check if a district matches search
  const doesDistrictMatch = (d: DistrictGK) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      d.nameBn.includes(q) ||
      d.nameEn.toLowerCase().includes(q) ||
      d.oldNames?.some(n => n.toLowerCase().includes(q)) ||
      d.agricultureImpact?.topCrop?.toLowerCase().includes(q) ||
      d.infrastructure?.some(i => i.title.toLowerCase().includes(q) || i.details.toLowerCase().includes(q)) ||
      d.heritageAndArchaeology?.some(h => h.name.toLowerCase().includes(q)) ||
      d.speciality.toLowerCase().includes(q)
    );
  };

  // Render & Update GeoJSON Boundaries
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    if (geoJsonLayerRef.current) {
      map.removeLayer(geoJsonLayerRef.current);
      geoJsonLayerRef.current = null;
    }

    const geoJsonLayer = L.geoJSON(simplifiedGeoJson as any, {
      style: (feature) => {
        const adm2Name = feature?.properties?.ADM2_EN || '';
        const district = getDistrictByAdm2(adm2Name);
        const divInfo = district ? DIVISIONS[district.divisionId] : null;

        const isMatch = district ? doesDistrictMatch(district) : true;
        const isHighlighted = highlightedDistrict && district && highlightedDistrict.id === district.id;
        const baseColor = divInfo ? divInfo.color : '#3b82f6';

        return {
          fillColor: baseColor,
          fillOpacity: isHighlighted ? 0.88 : isMatch ? 0.62 : 0.15,
          weight: isHighlighted ? 3 : isMatch ? 1.4 : 0.8,
          color: isHighlighted ? '#ffffff' : isMatch ? '#0f172a' : '#334155',
          dashArray: isMatch ? '' : '2, 4',
        };
      },
      onEachFeature: (feature, layer) => {
        const adm2Name = feature?.properties?.ADM2_EN || '';
        const district = getDistrictByAdm2(adm2Name);
        if (!district) return;

        layer.on({
          mouseover: (e) => {
            const target = e.target;
            target.setStyle({
              weight: 3,
              color: '#ffffff',
              fillOpacity: 0.88,
            });
            target.bringToFront();
            setHoveredDistrict(district);
          },
          mouseout: (e) => {
            geoJsonLayer.resetStyle(e.target);
            setHoveredDistrict(null);
          },
          click: () => {
            onSelectDistrict(district);
            map.flyTo([district.lat, district.lng], Math.max(map.getZoom(), 8.8), {
              duration: 0.7
            });
          }
        });
      }
    }).addTo(map);

    geoJsonLayerRef.current = geoJsonLayer;
  }, [searchQuery, highlightedDistrict]);

  // Render Permanent District Bangla Names on the Map
  useEffect(() => {
    if (!mapInstanceRef.current || !districtLabelsLayerRef.current) return;
    const labelsGroup = districtLabelsLayerRef.current;
    labelsGroup.clearLayers();

    if (!showDistrictNames) return;

    ALL_DISTRICTS.forEach((d) => {
      const isMatch = doesDistrictMatch(d);
      const isHighlighted = highlightedDistrict && highlightedDistrict.id === d.id;

      // Create high-contrast Bangla label marker
      const labelIcon = L.divIcon({
        className: 'district-name-marker',
        html: `
          <div class="district-name-pill ${isHighlighted ? 'ring-2 ring-white scale-110' : ''}" style="${!isMatch ? 'opacity: 0.35;' : ''}">
            ${d.nameBn}
          </div>
        `,
        iconSize: [60, 20],
        iconAnchor: [30, 10]
      });

      const labelMarker = L.marker([d.lat, d.lng], {
        icon: labelIcon,
        interactive: false
      });

      labelsGroup.addLayer(labelMarker);
    });
  }, [showDistrictNames, searchQuery, highlightedDistrict]);

  // Render Major Rivers
  useEffect(() => {
    if (!mapInstanceRef.current || !riversLayerRef.current) return;
    const riversGroup = riversLayerRef.current;
    riversGroup.clearLayers();

    if (!showRivers) return;

    MAJOR_RIVERS.forEach((river) => {
      // Polyline for river course
      const polyline = L.polyline(river.coordinates, {
        color: river.color,
        weight: river.width,
        opacity: 0.85,
        lineCap: 'round',
        lineJoin: 'round',
      });

      // River tooltip
      polyline.bindTooltip(`
        <div style="font-family: 'Hind Siliguri', sans-serif;" class="p-1">
          <div class="font-bold text-xs text-sky-400">🌊 ${river.nameBn}</div>
          <div class="text-[11px] text-slate-300">দৈর্ঘ্য: ${river.lengthKm} কিমি • ${river.origin}</div>
          <div class="text-[10px] text-teal-300 font-semibold mt-0.5">👉 ক্লিক করে নদীটির তথ্য দেখুন</div>
        </div>
      `, {
        sticky: true,
        direction: 'top',
        className: 'custom-leaflet-tooltip'
      });

      // Mouse events
      polyline.on('mouseover', () => {
        polyline.setStyle({
          weight: river.width + 3,
          opacity: 1,
          color: '#38bdf8'
        });
      });

      polyline.on('mouseout', () => {
        polyline.setStyle({
          weight: river.width,
          opacity: 0.85,
          color: river.color
        });
      });

      polyline.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
        onSelectSpot(riverToPOI(river));
      });

      riversGroup.addLayer(polyline);

      // Add small label pill at river midpoint
      const midCoord = river.coordinates[Math.floor(river.coordinates.length / 2)];
      if (midCoord) {
        const riverLabelIcon = L.divIcon({
          className: 'river-label-marker',
          html: `
            <div class="river-label-pill">
              🌊 ${river.nameBn}
            </div>
          `,
          iconSize: [60, 20],
          iconAnchor: [30, 10]
        });

        const riverLabelMarker = L.marker(midCoord, {
          icon: riverLabelIcon,
          interactive: false
        });
        riversGroup.addLayer(riverLabelMarker);
      }
    });
  }, [showRivers]);

  // Render Landmark POI Markers with category-specific icons
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;
    const markersGroup = markersLayerRef.current;
    markersGroup.clearLayers();

    if (!showSpots) return;

    // Filter spots by search query
    const filteredSpots = SPECIAL_LANDMARKS.filter(spot => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        spot.nameBn.includes(q) ||
        spot.nameEn.toLowerCase().includes(q) ||
        spot.districtBn.includes(q) ||
        spot.description.includes(q) ||
        spot.badgeBn.includes(q)
      );
    });

    filteredSpots.forEach((spot) => {
      // Pick icon & styling based on category
      let iconEmoji = '📍';
      let borderStyle = 'border-amber-400';
      let bgStyle = 'bg-slate-900';

      switch (spot.category) {
        case 'mountain':
          iconEmoji = '🏔️';
          borderStyle = 'border-stone-300';
          bgStyle = 'bg-stone-900';
          break;
        case 'factory':
          iconEmoji = '🏭';
          borderStyle = 'border-orange-400';
          bgStyle = 'bg-orange-950';
          break;
        case 'power_plant':
          iconEmoji = '⚡';
          borderStyle = 'border-yellow-400';
          bgStyle = 'bg-yellow-950';
          break;
        case 'bridge':
          iconEmoji = '🌉';
          borderStyle = 'border-cyan-400';
          bgStyle = 'bg-cyan-950';
          break;
        case 'river_confluence':
          iconEmoji = '🌊';
          borderStyle = 'border-sky-400';
          bgStyle = 'bg-sky-950';
          break;
        case 'river':
          iconEmoji = '🌊';
          borderStyle = 'border-sky-300';
          bgStyle = 'bg-sky-900';
          break;
        case 'wetland_forest':
          iconEmoji = '🌿';
          borderStyle = 'border-emerald-400';
          bgStyle = 'bg-emerald-950';
          break;
        case 'beach_sea':
          iconEmoji = '🏖️';
          borderStyle = 'border-teal-400';
          bgStyle = 'bg-teal-950';
          break;
        case 'heritage':
          iconEmoji = '🏛️';
          borderStyle = 'border-purple-400';
          bgStyle = 'bg-purple-950';
          break;
        case 'port_airport':
          iconEmoji = spot.nameBn.includes('বন্দর') && !spot.nameBn.includes('বিমান') ? '🚢' : '✈️';
          borderStyle = 'border-blue-400';
          bgStyle = 'bg-blue-950';
          break;
        case 'medicine_park':
          iconEmoji = '💊';
          borderStyle = 'border-rose-400';
          bgStyle = 'bg-rose-950';
          break;
        case 'liberation_war':
          iconEmoji = '🎖️';
          borderStyle = 'border-rose-500';
          bgStyle = 'bg-rose-950';
          break;
        case 'education_research':
          iconEmoji = '🎓';
          borderStyle = 'border-indigo-400';
          bgStyle = 'bg-indigo-950';
          break;
        default:
          iconEmoji = '📍';
          borderStyle = 'border-amber-400';
          bgStyle = 'bg-slate-900';
      }

      const isConfluence = spot.category === 'river_confluence';

      const customIcon = L.divIcon({
        className: 'custom-poi-marker',
        html: `
          <div class="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2">
            ${isConfluence ? '<div class="absolute inset-0 rounded-full bg-sky-400/30 confluence-pulse pointer-events-none -m-1"></div>' : ''}
            <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full ${bgStyle} border-2 ${borderStyle} shadow-xl flex items-center justify-center text-xs sm:text-sm transform transition duration-150 group-hover:scale-125 group-hover:border-white">
              ${iconEmoji}
            </div>
            ${spot.spotNumber ? `
              <span class="absolute -top-1.5 -right-1.5 bg-amber-500 text-slate-950 text-[8px] font-black px-1 rounded-full shadow">
                #${spot.spotNumber}
              </span>
            ` : ''}
            <div class="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 bg-slate-950/95 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap border border-slate-700 pointer-events-none group-hover:border-white">
              ${spot.nameBn.length > 20 ? spot.nameBn.slice(0, 19) + '..' : spot.nameBn}
            </div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([spot.lat, spot.lng], { icon: customIcon });

      // Click on spot -> give details of the spot ONLY (do not open district modal)
      marker.on('click', (e) => {
        L.DomEvent.stopPropagation(e);
        onSelectSpot(spot);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.flyTo([spot.lat, spot.lng], Math.max(mapInstanceRef.current.getZoom(), 9.5), {
            duration: 0.6
          });
        }
      });

      // Tooltip on hover
      marker.bindTooltip(`
        <div style="font-family: 'Hind Siliguri', sans-serif;" class="p-1 max-w-xs">
          <div class="font-bold text-[10px] text-amber-400">${spot.badgeBn}</div>
          <div class="font-bold text-sm text-white flex items-center gap-1">
            <span>${iconEmoji}</span>
            <span>${spot.nameBn}</span>
          </div>
          <div class="text-[11px] text-slate-300 mt-0.5">${spot.districtBn}</div>
          <div class="text-[10px] text-teal-300 font-semibold mt-1">
            👉 ক্লিক করে এই স্পটের বিস্তারিত তথ্য দেখুন
          </div>
        </div>
      `, {
        direction: 'top',
        className: 'custom-leaflet-tooltip'
      });

      markersGroup.addLayer(marker);
    });
  }, [showSpots, searchQuery]);

  return (
    <div className="relative w-full h-[calc(100vh-65px)] bg-slate-950 overflow-hidden">
      {/* Map Canvas */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* Map Control Switches (Top Right Floating) */}
      <div className="absolute top-3 right-3 z-20 flex flex-col sm:flex-row items-end sm:items-center gap-1.5 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-1.5 shadow-xl text-xs">
        <button
          onClick={() => setShowDistrictNames(!showDistrictNames)}
          className={`px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 font-medium ${
            showDistrictNames 
              ? 'bg-emerald-600 text-white font-bold shadow-sm' 
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
          title="মানচিত্রে জেলার বাংলা নাম টগল করুন"
        >
          {showDistrictNames ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          <span>জেলার নাম ({showDistrictNames ? 'অন' : 'অফ'})</span>
        </button>

        <button
          onClick={() => setShowRivers(!showRivers)}
          className={`px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 font-medium ${
            showRivers 
              ? 'bg-sky-600 text-white font-bold shadow-sm' 
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
          title="মানচিত্রে নদ-নদী ও মোহনা টগল করুন"
        >
          <Waves className="w-3.5 h-3.5" />
          <span>নদ-নদী ({showRivers ? 'অন' : 'অফ'})</span>
        </button>

        <button
          onClick={() => setShowSpots(!showSpots)}
          className={`px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5 font-medium ${
            showSpots 
              ? 'bg-amber-600 text-white font-bold shadow-sm' 
              : 'bg-slate-800 text-slate-400 hover:text-slate-200'
          }`}
          title="গুরুত্বপূর্ণ স্পট ও সেতু টগল করুন"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>স্পট ও সেতু ({showSpots ? 'অন' : 'অফ'})</span>
        </button>
      </div>

      {/* Rich All-in-One Hover Card (Bottom Left Floating) */}
      {hoveredDistrict && (
        <div className="absolute bottom-4 left-4 z-20 w-[92%] sm:w-[420px] max-w-md bg-slate-900/95 backdrop-blur-md border border-slate-700/90 rounded-2xl p-4 shadow-2xl text-slate-100 animate-slideUp pointer-events-none">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span 
                className="w-3.5 h-3.5 rounded-full ring-2 ring-white/30"
                style={{ backgroundColor: DIVISIONS[hoveredDistrict.divisionId].color }}
              />
              <h3 className="font-black text-xl text-white">
                {hoveredDistrict.nameBn} জেলা
              </h3>
              <span className="text-xs text-slate-400 font-medium">
                ({hoveredDistrict.nameEn})
              </span>
            </div>
            <span 
              className="text-[11px] px-2.5 py-0.5 rounded-full font-bold border"
              style={{
                backgroundColor: `${DIVISIONS[hoveredDistrict.divisionId].color}20`,
                borderColor: `${DIVISIONS[hoveredDistrict.divisionId].color}50`,
                color: DIVISIONS[hoveredDistrict.divisionId].color
              }}
            >
              {hoveredDistrict.divisionBn} বিভাগ
            </span>
          </div>

          {/* Quick Stats Banner */}
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>📐 আয়তন: <strong className="text-slate-200">{hoveredDistrict.areaKm2.toLocaleString('bn-BD')}</strong> বর্গ কিমি</span>
            {hoveredDistrict.chhitmahal && hoveredDistrict.chhitmahal.count > 0 && (
              <span className="text-rose-400 font-bold">🧩 {hoveredDistrict.chhitmahal.count}টি ছিটমহল</span>
            )}
            <span className="text-emerald-400 font-bold">সেক্টর: {hoveredDistrict.liberationWar.sector}</span>
          </div>

          {/* Old Names & Nicknames */}
          {(hoveredDistrict.oldNames.length > 0 || hoveredDistrict.nicknames.length > 0) && (
            <div className="mt-2 text-xs bg-slate-800/60 rounded-lg px-2.5 py-1.5 border border-slate-700/50">
              {hoveredDistrict.oldNames.length > 0 && (
                <div className="line-clamp-1">
                  <span className="text-slate-400 font-medium">📜 পূর্বনাম:</span>{' '}
                  <strong className="text-amber-300">{hoveredDistrict.oldNames.join(', ')}</strong>
                </div>
              )}
              {hoveredDistrict.nicknames.length > 0 && (
                <div className="line-clamp-1 text-[11px] text-slate-300 mt-0.5">
                  <span className="text-slate-400">🏷️ উপনাম:</span> {hoveredDistrict.nicknames.join(', ')}
                </div>
              )}
            </div>
          )}

          {/* Speciality Overview */}
          <p className="mt-2 text-xs text-slate-200 line-clamp-2 leading-relaxed">
            {hoveredDistrict.speciality}
          </p>

          {/* Core GK Grid */}
          <div className="mt-2.5 pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
            {/* Top Crop & GI */}
            <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400 block mb-0.5">🌾 শীর্ষ কৃষি / ফসল:</span>
              <strong className="text-emerald-300 block line-clamp-1">
                {hoveredDistrict.agricultureImpact.topCrop}
              </strong>
              {hoveredDistrict.agricultureImpact.giProduct && (
                <span className="text-[10px] text-amber-400 block line-clamp-1">
                  ★ জিআই: {hoveredDistrict.agricultureImpact.giProduct}
                </span>
              )}
            </div>

            {/* Infrastructure or Heritage */}
            <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400 block mb-0.5">🏭 প্রধান স্থাপনা / ঐতিহ্য:</span>
              <strong className="text-cyan-300 block line-clamp-1">
                {hoveredDistrict.infrastructure[0]?.title || hoveredDistrict.heritageAndArchaeology[0]?.name || 'তথ্যসমৃদ্ধ অঞ্চল'}
              </strong>
              <span className="text-[10px] text-slate-400 block line-clamp-1">
                {hoveredDistrict.heritageAndArchaeology[0]?.name || hoveredDistrict.infrastructure[0]?.details?.slice(0, 25) || ''}
              </span>
            </div>
          </div>

          {/* Bottom Action Prompt */}
          <div className="mt-2.5 pt-1.5 border-t border-slate-800/70 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">৬৪ জেলা সাধারণ জ্ঞান</span>
            <span className="text-teal-400 font-bold flex items-center gap-1">
              ক্লিক করে পূর্ণাঙ্গ জেলা ড্যাশবোর্ড দেখুন ➔
            </span>
          </div>
        </div>
      )}

      {/* Floating Legend / Guide (Top Left) */}
      <div className="absolute top-3 left-3 z-20 hidden md:block bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl text-xs text-slate-300 max-w-xs">
        <h4 className="font-bold text-slate-100 mb-1.5 flex items-center gap-1.5">
          <span>🎨</span> বিভাগ অনুযায়ী কালার কোড
        </h4>
        <div className="grid grid-cols-2 gap-1 text-[11px]">
          {Object.entries(DIVISIONS).map(([key, info]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span 
                className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                style={{ backgroundColor: info.color }}
              />
              <span className="truncate">{info.nameBn.replace(' বিভাগ', '')} ({info.districtsCount})</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-1.5 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
          <span>স্পট আইকন: 🏔️ পাহাড় • 🏭 কারখানা • ⚡ বিদ্যুৎ • 🌉 সেতু</span>
        </div>
      </div>
    </div>
  );
};
