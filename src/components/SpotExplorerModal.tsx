import React, { useState } from 'react';
import { X, Search, MapPin, Compass, Sparkles, Filter, ChevronRight, Layers } from 'lucide-react';
import { LandmarkPOI } from '../types';
import { SPECIAL_LANDMARKS } from '../data/specialLandmarks';

interface SpotExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSpot: (spot: LandmarkPOI) => void;
}

export const SpotExplorerModal: React.FC<SpotExplorerModalProps> = ({
  isOpen,
  onClose,
  onSelectSpot
}) => {
  const [activeGroup, setActiveGroup] = useState<1 | 2 | 3 | 4 | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const groups = [
    { id: 'all' as const, label: 'সব ২০০টি স্পট', icon: '🇧🇩', count: 200 },
    { id: 1 as const, label: '১. বৃহত্তম, দীর্ঘতম ও সর্বোচ্চ (১–৫০)', icon: '🏆', count: 50 },
    { id: 2 as const, label: '২. বিশেষ পরিচিতি ও প্রথমসমূহ (৫১–১০০)', icon: '🥇', count: 50 },
    { id: 3 as const, label: '৩. ঐতিহাসিক স্থাপত্য ও ঐতিহ্য (১০১–১৫০)', icon: '🏛️', count: 50 },
    { id: 4 as const, label: '৪. ভৌগোলিক অবস্থান ও সীমান্ত (১৫১–২০০)', icon: '🌐', count: 50 },
  ];

  const filteredSpots = SPECIAL_LANDMARKS.filter(spot => {
    if (activeGroup !== 'all' && spot.group !== activeGroup) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        spot.nameBn.includes(q) ||
        spot.nameEn.toLowerCase().includes(q) ||
        spot.districtBn.includes(q) ||
        spot.badgeBn.includes(q) ||
        spot.description.includes(q)
      );
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-xl shadow-lg">
              ✨
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-lg sm:text-xl text-white">
                  বাংলাদেশ ২০০টি বিশেষ জিকে স্পট ও রেকর্ড
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  ২০০টি স্পট
                </span>
              </div>
              <p className="text-xs text-slate-400">
                বাংলাদেশের শীর্ষ সাধারণ জ্ঞান স্থান, মেগা অবকাঠামো ও ভৌগোলিক রেকর্ডের সংকলন
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Group Filter Tabs */}
        <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-2 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
          {groups.map(g => {
            const isActive = activeGroup === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition cursor-pointer font-medium flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-emerald-600 text-white font-bold shadow-md'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>{g.icon}</span>
                <span>{g.label}</span>
                <span className="text-[10px] opacity-75">({g.count})</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-slate-800 bg-slate-900/90">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="২০০টি স্পটের মধ্যে খুঁজুন (উদাঃ সুন্দরবন, হাকালুকি, তিস্তা সোলার, তাজিংডং, বাঘা মসজিদ, সোয়াচ অব নো গ্রাউন্ড)..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Spots Grid */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-3.5 hover:border-emerald-500/60 transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-900 border border-slate-700 text-amber-400 text-xs font-mono font-bold flex items-center justify-center">
                      #{spot.spotNumber}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-emerald-300 transition">
                      {spot.nameBn}
                    </h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700 whitespace-nowrap">
                    {spot.districtBn}
                  </span>
                </div>

                <div className="mt-2 text-xs text-amber-300 font-semibold flex items-center gap-1">
                  <span>★</span>
                  <span>{spot.badgeBn}</span>
                </div>

                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-3">
                  {spot.description}
                </p>

                {spot.keyFacts && spot.keyFacts.length > 0 && (
                  <div className="mt-2 text-[11px] text-slate-400 space-y-0.5">
                    {spot.keyFacts.slice(0, 2).map((kf, i) => (
                      <div key={i} className="flex items-start gap-1">
                        <span className="text-emerald-400">•</span>
                        <span className="line-clamp-1">{kf}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">
                  {spot.groupTitle}
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onSelectSpot(spot);
                  }}
                  className="px-3 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white border border-emerald-500/40 text-xs font-semibold transition cursor-pointer flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>মানচিত্রে দেখুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>মোট স্পট প্রদর্শিত: <strong className="text-emerald-400">{filteredSpots.length}টি</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
