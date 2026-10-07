/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MapComponent } from './components/MapComponent';
import { DistrictDashboardModal } from './components/DistrictDashboardModal';
import { SpotDetailModal } from './components/SpotDetailModal';
import { DistrictsSidebar } from './components/DistrictsSidebar';
import { QuizModal } from './components/QuizModal';
import { SpotExplorerModal } from './components/SpotExplorerModal';
import { DistrictGK, LandmarkPOI } from './types';
import { ALL_DISTRICTS, DISTRICTS_BY_BN } from './data/districtsData';

export default function App() {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictGK | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<LandmarkPOI | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isSpotsExplorerOpen, setIsSpotsExplorerOpen] = useState<boolean>(false);
  const [mapTileLayer, setMapTileLayer] = useState<'osm' | 'carto_voyager' | 'carto_dark'>('osm');

  // Handle spot selection from either map marker or spots explorer modal
  const handleSpotSelect = (spot: LandmarkPOI) => {
    // Shows details of the spot ONLY (not the whole district)
    setSelectedSpot(spot);
  };

  const handleSelectDistrictByName = (nameBn: string) => {
    const dist = DISTRICTS_BY_BN[nameBn] || ALL_DISTRICTS.find(d => d.nameBn.includes(nameBn));
    if (dist) {
      setSelectedDistrict(dist);
    }
  };

  const handleResetView = () => {
    setSelectedDistrict(null);
    setSelectedSpot(null);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Hind_Siliguri',sans-serif] select-none">
      {/* Clean Top Navigation without cluttering filters */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenSpotsExplorer={() => setIsSpotsExplorerOpen(true)}
        onResetView={handleResetView}
        mapTileLayer={mapTileLayer}
        onTileLayerChange={setMapTileLayer}
      />

      {/* Main Map View Area */}
      <main className="relative flex-1 w-full overflow-hidden">
        {/* The Interactive Map */}
        <MapComponent
          onSelectDistrict={setSelectedDistrict}
          onSelectSpot={handleSpotSelect}
          searchQuery={searchQuery}
          mapTileLayer={mapTileLayer}
          highlightedDistrict={selectedDistrict}
        />

        {/* 64 Districts Drawer Sidebar */}
        <DistrictsSidebar
          onSelectDistrict={setSelectedDistrict}
          selectedDivision="all"
          onDivisionChange={() => {}}
          selectedDistrict={selectedDistrict}
        />
      </main>

      {/* Pop-up Details for Selected Spot ONLY */}
      {selectedSpot && (
        <SpotDetailModal
          spot={selectedSpot}
          onClose={() => setSelectedSpot(null)}
          onViewParentDistrict={setSelectedDistrict}
        />
      )}

      {/* Pop-up Dashboard for Selected District */}
      {selectedDistrict && (
        <DistrictDashboardModal
          district={selectedDistrict}
          onClose={() => setSelectedDistrict(null)}
        />
      )}

      {/* General Knowledge Practice Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectDistrictByName={handleSelectDistrictByName}
      />

      {/* 200 Special Spots Explorer Modal */}
      <SpotExplorerModal
        isOpen={isSpotsExplorerOpen}
        onClose={() => setIsSpotsExplorerOpen(false)}
        onSelectSpot={handleSpotSelect}
      />
    </div>
  );
}
