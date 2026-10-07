import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, MapPin, Search, 
  Award, Shield, Factory, Landmark, Sparkles, Filter 
} from 'lucide-react';
import { DistrictGK, DivisionId } from '../types';
import { ALL_DISTRICTS } from '../data/districtsData';
import { DIVISIONS } from '../data/divisions';

interface DistrictsSidebarProps {
  onSelectDistrict: (district: DistrictGK) => void;
  selectedDivision: DivisionId | 'all';
  onDivisionChange: (div: DivisionId | 'all') => void;
  selectedDistrict: DistrictGK | null;
}

export const DistrictsSidebar: React.FC<DistrictsSidebarProps> = ({
  onSelectDistrict,
  selectedDivision,
  onDivisionChange,
  selectedDistrict
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState('');

  const filteredDistricts = ALL_DISTRICTS.filter(d => {
    if (selectedDivision !== 'all' && d.divisionId !== selectedDivision) return false;
    if (filterText.trim()) {
      const q = filterText.toLowerCase().trim();
      return (
        d.nameBn.includes(q) ||
        d.nameEn.toLowerCase().includes(q) ||
        d.speciality.toLowerCase().includes(q) ||
        d.agricultureImpact.topCrop.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <>
      {/* Toggle button on the right edge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-36 right-0 z-20 bg-slate-800 hover:bg-slate-700 text-slate-100 border-l border-t border-b border-slate-600 rounded-l-xl px-2.5 py-3 shadow-xl transition flex items-center gap-1.5 cursor-pointer"
        title="৬৪ জেলার তালিকা দেখুন"
      >
        {isOpen ? <ChevronRight className="w-4 h-4 text-emerald-400" /> : <ChevronLeft className="w-4 h-4 text-emerald-400" />}
        <span className="[writing-mode:vertical-rl] text-xs font-bold tracking-wider py-1 text-slate-200">
          ৬৪ জেলা তালিকা
        </span>
      </button>

      {/* Slide-over panel */}
      {isOpen && (
        <div className="fixed top-28 right-0 bottom-0 z-30 w-80 sm:w-96 bg-slate-900/98 backdrop-blur-xl border-l border-slate-700 shadow-2xl flex flex-col text-slate-100 animate-slideLeft">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-white flex items-center gap-1.5">
                <span>📋</span> বাংলাদেশ ৬৪ জেলা ডিরেক্টরি
              </h3>
              <p className="text-xs text-slate-400">
                দেখাচ্ছে: <strong className="text-emerald-400">{filteredDistricts.length}টি জেলা</strong>
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Quick filter input */}
          <div className="p-3 border-b border-slate-800 bg-slate-950/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                placeholder="তালিকায় খুঁজুন..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* List items */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filteredDistricts.map((d) => {
              const divInfo = DIVISIONS[d.divisionId];
              const isSelected = selectedDistrict?.id === d.id;

              return (
                <div
                  key={d.id}
                  onClick={() => {
                    onSelectDistrict(d);
                    // On mobile, close drawer so user sees map & dashboard
                    if (window.innerWidth < 768) {
                      setIsOpen(false);
                    }
                  }}
                  className={`p-3 rounded-xl border transition cursor-pointer flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-slate-800 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: divInfo.color }}
                      />
                      <h4 className="font-bold text-sm text-white">
                        {d.nameBn}
                      </h4>
                      <span className="text-xs text-slate-400">
                        ({d.nameEn})
                      </span>
                    </div>
                    <span 
                      className="text-[10px] px-2 py-0.5 rounded-full border font-semibold"
                      style={{
                        backgroundColor: `${divInfo.color}15`,
                        borderColor: `${divInfo.color}40`,
                        color: divInfo.fillColor
                      }}
                    >
                      {d.divisionBn}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 line-clamp-1">
                    {d.speciality}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                    <span className="bg-slate-800 px-2 py-0.5 rounded text-emerald-300 border border-slate-700">
                      🌾 {d.agricultureImpact.topCrop}
                    </span>
                    <span className="bg-slate-800 px-2 py-0.5 rounded text-rose-300 border border-slate-700">
                      🎖️ {d.liberationWar.sector}
                    </span>
                    {d.chhitmahal.count > 0 && (
                      <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-bold border border-rose-500/30">
                        🧩 {d.chhitmahal.count} ছিটমহল
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
