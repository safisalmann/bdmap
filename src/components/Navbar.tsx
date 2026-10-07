import React from 'react';
import { Search, Compass, BookOpen, Layers, Sparkles } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenQuiz: () => void;
  onOpenSpotsExplorer: () => void;
  onResetView: () => void;
  mapTileLayer: 'osm' | 'carto_voyager' | 'carto_dark';
  onTileLayerChange: (tile: 'osm' | 'carto_voyager' | 'carto_dark') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  onOpenQuiz,
  onOpenSpotsExplorer,
  onResetView,
  mapTileLayer,
  onTileLayerChange
}) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl text-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onResetView}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-lg flex items-center justify-center">
            <span className="text-xl">🗺️</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-base sm:text-lg text-emerald-400 tracking-tight leading-tight">
                বাংলাদেশ সাধারণ জ্ঞান মানচিত্র
              </h1>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold hidden sm:inline">
                GK Interactive Atlas
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden xs:block">
              ৬৪ জেলা • নদ-নদী ও মোহনা • গুরুত্বপূর্ণ সেতু • পাহাড় ও কারখানা
            </p>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md min-w-[200px] order-3 md:order-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="জেলা, নদী, সেতু বা স্থান খুঁজুন (উদাঃ পদ্মা সেতু, চলন বিল, সুন্দরবন)..."
              className="w-full bg-slate-800/90 border border-slate-700/80 rounded-xl pl-9 pr-8 py-1.5 text-xs sm:text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/50 transition-all"
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

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 order-2 md:order-3">
          {/* Tile Layer Selector */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs text-slate-300">
            <Layers className="w-3.5 h-3.5 text-slate-400 ml-1" />
            <button
              onClick={() => onTileLayerChange('osm')}
              className={`px-2 py-0.5 rounded text-xs transition cursor-pointer ${
                mapTileLayer === 'osm' ? 'bg-emerald-600 text-white font-medium shadow' : 'hover:text-white'
              }`}
              title="OpenStreetMap বাংলা মানচিত্র"
            >
              OSM বাংলা
            </button>
            <button
              onClick={() => onTileLayerChange('carto_voyager')}
              className={`px-2 py-0.5 rounded text-xs transition cursor-pointer ${
                mapTileLayer === 'carto_voyager' ? 'bg-emerald-600 text-white font-medium shadow' : 'hover:text-white'
              }`}
              title="পরিষ্কার কার্টো মানচিত্র"
            >
              ভয়েজার
            </button>
            <button
              onClick={() => onTileLayerChange('carto_dark')}
              className={`px-2 py-0.5 rounded text-xs transition cursor-pointer ${
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
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition cursor-pointer"
            title="সমগ্র বাংলাদেশ মানচিত্রে ফিরে যান"
          >
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span className="hidden lg:inline">রিসেট ভিউ</span>
          </button>

          {/* Practice Quiz Button */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold shadow-md shadow-amber-500/20 transition cursor-pointer"
            title="সাধারণ জ্ঞান অনুশীলন কুইজ"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>জিকে কুইজ</span>
          </button>

          {/* 200 Spots Explorer Button */}
          <button
            onClick={onOpenSpotsExplorer}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-xs font-bold shadow-md shadow-emerald-600/25 transition cursor-pointer"
            title="২০০টি বিশেষ স্থান ও রেকর্ড তালিকা"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">২০০টি স্পট তালিকা</span>
            <span className="sm:hidden">স্পট তালিকা</span>
          </button>
        </div>
      </div>
    </header>
  );
};
