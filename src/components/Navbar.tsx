import React from 'react';
import { Search, MapPin, Award, BookOpen, Layers, Compass, HelpCircle } from 'lucide-react';
import { DIVISIONS } from '../data/divisions';
import { DivisionId } from '../types';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDivision: DivisionId | 'all';
  onDivisionChange: (div: DivisionId | 'all') => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onOpenQuiz: () => void;
  onResetView: () => void;
  mapTileLayer: 'osm' | 'carto_voyager' | 'carto_dark';
  onTileLayerChange: (tile: 'osm' | 'carto_voyager' | 'carto_dark') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  selectedDivision,
  onDivisionChange,
  activeFilter,
  onFilterChange,
  onOpenQuiz,
  onResetView,
  mapTileLayer,
  onTileLayerChange
}) => {
  const filterCategories = [
    { id: 'all', label: 'সব ৬৪ জেলা', icon: '🇧🇩' },
    { id: 'infra', label: 'মেগা অবকাঠামো ও কারখানা', icon: '🏭' },
    { id: 'wetlands', label: 'হাওর, সুন্দরবন ও জলাশয়', icon: '🌿' },
    { id: 'war', label: 'মুক্তিযুদ্ধ ও ৭ বীরশ্রেষ্ঠ', icon: '🎖️' },
    { id: 'heritage', label: 'প্রাচীন ঐতিহ্য ও জনপদ', icon: '🏛️' },
    { id: 'agri', label: 'শীর্ষ কৃষি ও জিআই পণ্য', icon: '🌾' },
    { id: 'chhitmahal', label: 'ছিটমহল ও সীমান্ত', icon: '🧩' },
    { id: 'ports', label: 'বিমানবন্দর ও বন্দর', icon: '✈️' },
    { id: 'medical', label: 'মেডিকেল কলেজ ও শিক্ষা', icon: '🏥' },
  ];

  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl text-slate-100">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onResetView}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-lg flex items-center justify-center">
            <span className="text-xl">🗺️</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg text-emerald-400 tracking-tight leading-tight">
                বাংলাদেশ সাধারণ জ্ঞান মানচিত্র
              </h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                BCS & Medical Admission
              </span>
            </div>
            <p className="text-xs text-slate-400">
              ৬৪ জেলা • ৮ বিভাগ • ১১ সেক্টর • ৭ বীরশ্রেষ্ঠ • প্রাচীন জনপদ ও মেগা অবকাঠামো
            </p>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md min-w-[220px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="জেলা বা স্থান খুঁজুন (উদাঃ নীলফামারী, টাঙ্গুয়ার হাওর, সুন্দরবন)..."
              className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl pl-9 pr-8 py-1.5 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Right action buttons */}
        <div className="flex items-center gap-2">
          {/* Tile Layer Selector */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs text-slate-300">
            <Layers className="w-3.5 h-3.5 text-slate-400 ml-1" />
            <button
              onClick={() => onTileLayerChange('osm')}
              className={`px-2 py-1 rounded text-xs transition ${
                mapTileLayer === 'osm' ? 'bg-emerald-600 text-white font-medium shadow' : 'hover:text-white'
              }`}
              title="OpenStreetMap বাংলা"
            >
              OSM বাংলা
            </button>
            <button
              onClick={() => onTileLayerChange('carto_voyager')}
              className={`px-2 py-1 rounded text-xs transition ${
                mapTileLayer === 'carto_voyager' ? 'bg-emerald-600 text-white font-medium shadow' : 'hover:text-white'
              }`}
              title="পরিষ্কার মানচিত্র"
            >
              ভয়েজার
            </button>
            <button
              onClick={() => onTileLayerChange('carto_dark')}
              className={`px-2 py-1 rounded text-xs transition ${
                mapTileLayer === 'carto_dark' ? 'bg-emerald-600 text-white font-medium shadow' : 'hover:text-white'
              }`}
              title="ডার্ক মানচিত্র"
            >
              ডার্ক
            </button>
          </div>

          {/* Reset View */}
          <button
            onClick={onResetView}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            title="সমগ্র বাংলাদেশ মানচিত্রে ফিরে যান"
          >
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden md:inline">রিসেট ভিউ</span>
          </button>

          {/* Practice Quiz Button */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-semibold shadow-md shadow-amber-500/20 transition cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>বিসিএস/মেডিকেল কুইজ</span>
          </button>
        </div>
      </div>

      {/* Division & Category Filter Scroll */}
      <div className="bg-slate-950/70 border-t border-slate-800/80 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2">
          {/* Divisions Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <span className="text-slate-400 font-medium whitespace-nowrap mr-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" /> বিভাগ:
            </span>
            <button
              onClick={() => onDivisionChange('all')}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap transition cursor-pointer font-medium ${
                selectedDivision === 'all'
                  ? 'bg-slate-200 text-slate-900 font-semibold shadow'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
              }`}
            >
              সকল বিভাগ
            </button>
            {Object.entries(DIVISIONS).map(([key, info]) => {
              const isActive = selectedDivision === key;
              return (
                <button
                  key={key}
                  onClick={() => onDivisionChange(key as DivisionId)}
                  style={{
                    backgroundColor: isActive ? info.color : undefined,
                    color: isActive ? '#ffffff' : undefined,
                  }}
                  className={`px-2.5 py-1 rounded-md whitespace-nowrap transition cursor-pointer font-medium ${
                    isActive
                      ? 'shadow font-semibold'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {info.nameBn.replace(' বিভাগ', '')}
                </button>
              );
            })}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
            <span className="text-slate-400 font-medium whitespace-nowrap mr-1 flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-400" /> বিষয়ভিত্তিক:
            </span>
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onFilterChange(cat.id)}
                  className={`px-2 py-0.5 rounded-full whitespace-nowrap transition cursor-pointer border ${
                    isActive
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold shadow-sm'
                      : 'bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-600'
                  }`}
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};
