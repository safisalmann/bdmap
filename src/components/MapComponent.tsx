import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DistrictGK, LandmarkPOI, DivisionId } from '../types';
import { ALL_DISTRICTS, getDistrictByAdm2 } from '../data/districtsData';
import { SPECIAL_LANDMARKS } from '../data/specialLandmarks';
import { DIVISIONS } from '../data/divisions';
import simplifiedGeoJson from '../data/bangladesh-districts-simplified.json';

interface MapComponentProps {
  onSelectDistrict: (district: DistrictGK) => void;
  selectedDivision: DivisionId | 'all';
  activeFilter: string;
  searchQuery: string;
  mapTileLayer: 'osm' | 'carto_voyager' | 'carto_dark';
  highlightedDistrict: DistrictGK | null;
}

export const MapComponent: React.FC<MapComponentProps> = ({
  onSelectDistrict,
  selectedDivision,
  activeFilter,
  searchQuery,
  mapTileLayer,
  highlightedDistrict
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictGK | null>(null);
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkPOI | null>(null);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Center of Bangladesh ~ [23.85, 90.35], Zoom level 7
    const map = L.map(mapContainerRef.current, {
      center: [23.85, 90.35],
      zoom: 7.2,
      minZoom: 6,
      maxZoom: 14,
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

    // Layer group for landmarks
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

  // Check if a district matches search & active filters
  const doesDistrictMatch = (d: DistrictGK) => {
    // Division filter
    if (selectedDivision !== 'all' && d.divisionId !== selectedDivision) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = d.nameBn.includes(q) || d.nameEn.toLowerCase().includes(q);
      const matchOld = d.oldNames?.some(n => n.toLowerCase().includes(q));
      const matchCrop = d.agricultureImpact?.topCrop?.toLowerCase().includes(q) || d.agricultureImpact?.description?.toLowerCase().includes(q);
      const matchInfra = d.infrastructure?.some(i => i.title.toLowerCase().includes(q) || i.details.toLowerCase().includes(q));
      const matchHeritage = d.heritageAndArchaeology?.some(h => h.name.toLowerCase().includes(q));
      const matchSpeciality = d.speciality.toLowerCase().includes(q);
      
      if (!matchName && !matchOld && !matchCrop && !matchInfra && !matchHeritage && !matchSpeciality) {
        return false;
      }
    }

    // Category Filter
    if (activeFilter === 'infra') {
      return d.infrastructure.length > 0;
    }
    if (activeFilter === 'wetlands') {
      return (d.wetlandsAndForests && d.wetlandsAndForests.length > 0) || d.id === 'sunamganj' || d.id === 'bagerhat' || d.id === 'khulna';
    }
    if (activeFilter === 'war') {
      return !!d.liberationWar.birSreshthoInfo?.length || d.id === 'meherpur' || d.id === 'jashore' || d.id === 'chittagong' || d.id === 'dhaka';
    }
    if (activeFilter === 'heritage') {
      return d.heritageAndArchaeology.length > 0;
    }
    if (activeFilter === 'agri') {
      return d.agricultureImpact.isTopProducer || !!d.agricultureImpact.giProduct;
    }
    if (activeFilter === 'chhitmahal') {
      return d.chhitmahal.count > 0;
    }
    if (activeFilter === 'ports') {
      return d.infrastructure.some(i => i.type === 'port' || i.type === 'airport');
    }
    if (activeFilter === 'medical') {
      return !!d.medicalAndEducation.medicalCollege;
    }

    return true;
  };

  // Render & Update GeoJSON Boundaries
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    // Remove existing GeoJSON layer
    if (geoJsonLayerRef.current) {
      map.removeLayer(geoJsonLayerRef.current);
      geoJsonLayerRef.current = null;
    }

    // Create GeoJSON layer
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
          fillOpacity: isHighlighted ? 0.85 : isMatch ? 0.6 : 0.15,
          weight: isHighlighted ? 3 : isMatch ? 1.5 : 0.8,
          color: isHighlighted ? '#ffffff' : isMatch ? '#0f172a' : '#334155',
          dashArray: isMatch ? '' : '2, 4',
        };
      },
      onEachFeature: (feature, layer) => {
        const adm2Name = feature?.properties?.ADM2_EN || '';
        const district = getDistrictByAdm2(adm2Name);

        if (!district) return;

        // Custom Tooltip
        const divInfo = DIVISIONS[district.divisionId];
        const tooltipContent = `
          <div style="font-family: 'Hind Siliguri', sans-serif;" class="p-1 text-slate-900 leading-tight">
            <div class="flex items-center gap-1.5 font-bold text-sm">
              <span style="color: ${divInfo.color}">●</span>
              <span>${district.nameBn}</span>
              <span class="text-xs font-normal text-slate-500">(${district.nameEn})</span>
            </div>
            <div class="text-[11px] text-slate-600 mt-0.5">
              ${district.divisionBn} বিভাগ • ${district.speciality.slice(0, 48)}...
            </div>
            <div class="text-[10px] text-emerald-700 font-semibold mt-1">
              👉 ক্লিক করে বিস্তারিত জিকে দেখুন
            </div>
          </div>
        `;

        layer.bindTooltip(tooltipContent, {
          sticky: true,
          direction: 'top',
          className: 'custom-leaflet-tooltip shadow-xl border border-slate-200 rounded-lg'
        });

        // Mouse interactions
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
            // Smoothly pan map slightly to district
            map.flyTo([district.lat, district.lng], Math.max(map.getZoom(), 8.5), {
              duration: 0.8
            });
          }
        });
      }
    }).addTo(map);

    geoJsonLayerRef.current = geoJsonLayer;
  }, [selectedDivision, activeFilter, searchQuery, highlightedDistrict]);

  // Render Landmark Markers
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;
    const markersGroup = markersLayerRef.current;
    markersGroup.clearLayers();

    // Filter landmarks based on category or search
    const filteredLandmarks = SPECIAL_LANDMARKS.filter(lm => {
      if (activeFilter === 'wetlands' && lm.category !== 'wetland_forest') return false;
      if (activeFilter === 'infra' && lm.category !== 'mega_infra') return false;
      if (activeFilter === 'war' && lm.category !== 'liberation_war') return false;
      if (activeFilter === 'heritage' && lm.category !== 'heritage') return false;
      if (activeFilter === 'ports' && lm.category !== 'port_airport') return false;
      if (activeFilter === 'agri' && lm.category !== 'agriculture_park') return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return (
          lm.nameBn.includes(q) ||
          lm.nameEn.toLowerCase().includes(q) ||
          lm.districtBn.includes(q) ||
          lm.description.includes(q)
        );
      }
      return true;
    });

    filteredLandmarks.forEach((lm) => {
      // Pick icon emoji based on category
      const emojiMap = {
        wetland_forest: '🌿',
        mega_infra: '🏭',
        liberation_war: '🎖️',
        heritage: '🏛️',
        port_airport: '✈️',
        agriculture_park: '💊'
      };

      const iconEmoji = emojiMap[lm.category] || '📍';

      // Create Custom DivIcon
      const customIcon = L.divIcon({
        className: 'custom-poi-marker',
        html: `
          <div class="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2">
            <div class="w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-400 shadow-xl flex items-center justify-center text-sm transform transition group-hover:scale-125 group-hover:border-emerald-400">
              ${iconEmoji}
            </div>
            <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-slate-950/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap border border-slate-700 pointer-events-none">
              ${lm.nameBn}
            </div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([lm.lat, lm.lng], { icon: customIcon });

      // Click on landmark
      marker.on('click', () => {
        setSelectedLandmark(lm);
        const dist = getDistrictByAdm2(lm.districtId);
        if (dist) {
          onSelectDistrict(dist);
        }
      });

      // Tooltip
      marker.bindTooltip(`
        <div style="font-family: 'Hind Siliguri', sans-serif;" class="p-1">
          <div class="font-bold text-xs text-amber-600">${lm.badgeBn}</div>
          <div class="font-bold text-sm text-slate-900">${lm.nameBn}</div>
          <div class="text-[11px] text-slate-600">${lm.districtBn} • ${lm.description.slice(0, 60)}...</div>
        </div>
      `, {
        direction: 'top',
        className: 'custom-leaflet-tooltip shadow-lg'
      });

      markersGroup.addLayer(marker);
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="relative w-full h-[calc(100vh-108px)] bg-slate-950 overflow-hidden">
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* Floating Hover Card (Bottom Left) */}
      {hoveredDistrict && (
        <div className="absolute bottom-4 left-4 z-20 max-w-sm w-full bg-slate-900/95 backdrop-blur-md border border-slate-700/90 rounded-2xl p-4 shadow-2xl text-slate-100 animate-slideUp pointer-events-none">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: DIVISIONS[hoveredDistrict.divisionId].color }}
              />
              <h3 className="font-extrabold text-lg text-white">
                {hoveredDistrict.nameBn}
              </h3>
              <span className="text-xs text-slate-400">
                ({hoveredDistrict.nameEn})
              </span>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold">
              {hoveredDistrict.divisionBn}
            </span>
          </div>

          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
            {hoveredDistrict.speciality}
          </p>

          <div className="mt-2.5 pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-slate-400">🌾 শীর্ষ ফসল:</span>{' '}
              <strong className="text-emerald-400">{hoveredDistrict.agricultureImpact.topCrop}</strong>
            </div>
            <div>
              <span className="text-slate-400">🎖️ সেক্টর:</span>{' '}
              <strong className="text-rose-400">{hoveredDistrict.liberationWar.sector}</strong>
            </div>
          </div>

          <div className="mt-2 text-[10px] text-teal-400 font-semibold text-right">
            ক্লিক করে বিস্তারিত ড্যাশবোর্ড খুলুন ➔
          </div>
        </div>
      )}

      {/* Floating Map Legend / Guide (Top Left) */}
      <div className="absolute top-4 left-4 z-20 hidden md:block bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-3 shadow-xl text-xs text-slate-300 max-w-xs">
        <h4 className="font-bold text-slate-100 mb-2 flex items-center gap-1.5">
          <span>🎨</span> বিভাগ অনুযায়ী কালার কোড
        </h4>
        <div className="grid grid-cols-2 gap-1.5 text-[11px]">
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
        <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
          <span>📍 গুরুত্বপূর্ণ স্থান চিহ্নিত</span>
          <span className="text-amber-400 font-mono">{SPECIAL_LANDMARKS.length}টি স্পট</span>
        </div>
      </div>
    </div>
  );
};
