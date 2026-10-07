/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MapComponent } from './components/MapComponent';
import { DistrictDashboardModal } from './components/DistrictDashboardModal';
import { DistrictsSidebar } from './components/DistrictsSidebar';
import { QuizModal } from './components/QuizModal';
import { DistrictGK, DivisionId } from './types';
import { ALL_DISTRICTS, DISTRICTS_BY_BN, getDistrictByAdm2 } from './data/districtsData';
import { SPECIAL_LANDMARKS } from './data/specialLandmarks';
import { 
  Compass, Award, BookOpen, Layers, Sparkles, 
  MapPin, CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictGK | null>(null);
  const [selectedDivision, setSelectedDivision] = useState<DivisionId | 'all'>('all');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [mapTileLayer, setMapTileLayer] = useState<'osm' | 'carto_voyager' | 'carto_dark'>('osm');

  // Handle Quick Jumps to Hotspots
  const handleQuickJump = (landmarkId: string) => {
    const lm = SPECIAL_LANDMARKS.find(l => l.id === landmarkId);
    if (lm) {
      const dist = getDistrictByAdm2(lm.districtId);
      if (dist) {
        setSelectedDistrict(dist);
      }
    }
  };

  const handleSelectDistrictByName = (nameBn: string) => {
    const dist = DISTRICTS_BY_BN[nameBn] || ALL_DISTRICTS.find(d => d.nameBn.includes(nameBn));
    if (dist) {
      setSelectedDistrict(dist);
    }
  };

  const handleResetView = () => {
    setSelectedDistrict(null);
    setSelectedDivision('all');
    setActiveFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Hind_Siliguri',sans-serif] select-none">
      {/* Top Navigation */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedDivision={selectedDivision}
        onDivisionChange={setSelectedDivision}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onResetView={handleResetView}
        mapTileLayer={mapTileLayer}
        onTileLayerChange={setMapTileLayer}
      />

      {/* Main Map View Area */}
      <main className="relative flex-1 w-full overflow-hidden">
        {/* Quick Hotspot Pills Bar (Floating on top of map) */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 max-w-4xl w-[94%] pointer-events-none hidden sm:flex items-center justify-center">
          <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-full px-3 py-1 shadow-2xl flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
            <span className="text-amber-400 font-bold whitespace-nowrap flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> হটস্পট জাম্প:
            </span>
            <button
              onClick={() => handleQuickJump('tanguar-haor')}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/30 whitespace-nowrap transition cursor-pointer font-medium"
            >
              🌿 টাঙ্গুয়ার হাওর
            </button>
            <button
              onClick={() => handleQuickJump('sundarbans')}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 whitespace-nowrap transition cursor-pointer font-medium"
            >
              🐅 সুন্দরবন
            </button>
            <button
              onClick={() => handleQuickJump('medicine-park')}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-blue-300 border border-blue-500/30 whitespace-nowrap transition cursor-pointer font-medium"
            >
              💊 ঔষধ শিল্প পার্ক (মুন্সীগঞ্জ)
            </button>
            <button
              onClick={() => handleQuickJump('saidpur-rail-workshop')}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-500/30 whitespace-nowrap transition cursor-pointer font-medium"
            >
              🚆 সৈয়দপুর রেল কারখানা
            </button>
            <button
              onClick={() => handleQuickJump('tin-bigha-corridor')}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-rose-300 border border-rose-500/30 whitespace-nowrap transition cursor-pointer font-medium"
            >
              🧩 তিন বিঘা করিডোর (লালমনিরহাট)
            </button>
            <button
              onClick={() => handleQuickJump('padma-bridge')}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 whitespace-nowrap transition cursor-pointer font-medium"
            >
              🌉 পদ্মা বহুমুখী সেতু
            </button>
            <button
              onClick={() => handleQuickJump('rooppur-npp')}
              className="px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 whitespace-nowrap transition cursor-pointer font-medium"
            >
              ⚛️ রূপপুর পারমাণবিক প্রকল্প
            </button>
          </div>
        </div>

        {/* The Interactive Map */}
        <MapComponent
          onSelectDistrict={setSelectedDistrict}
          selectedDivision={selectedDivision}
          activeFilter={activeFilter}
          searchQuery={searchQuery}
          mapTileLayer={mapTileLayer}
          highlightedDistrict={selectedDistrict}
        />

        {/* 64 Districts Drawer Sidebar */}
        <DistrictsSidebar
          onSelectDistrict={setSelectedDistrict}
          selectedDivision={selectedDivision}
          onDivisionChange={setSelectedDivision}
          selectedDistrict={selectedDistrict}
        />
      </main>

      {/* Pop-up Dashboard for Selected District */}
      {selectedDistrict && (
        <DistrictDashboardModal
          district={selectedDistrict}
          onClose={() => setSelectedDistrict(null)}
        />
      )}

      {/* Practice Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectDistrictByName={handleSelectDistrictByName}
      />
    </div>
  );
}
