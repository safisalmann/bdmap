import React from 'react';
import { X, MapPin, ExternalLink, Sparkles, Navigation, Layers, CheckCircle2, BookOpen } from 'lucide-react';
import { LandmarkPOI, DistrictGK } from '../types';
import { getDistrictByAdm2 } from '../data/districtsData';

function toEnDigits(val: string | number | undefined | null): string {
  if (val === undefined || val === null) return '';
  const str = String(val);
  const bnToEn: Record<string, string> = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
    '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
  };
  return str.replace(/[০-৯]/g, (char) => bnToEn[char] || char);
}

interface SpotDetailModalProps {
  spot: LandmarkPOI | null;
  onClose: () => void;
  onViewParentDistrict?: (district: DistrictGK) => void;
}

export const SpotDetailModal: React.FC<SpotDetailModalProps> = ({
  spot,
  onClose,
  onViewParentDistrict
}) => {
  if (!spot) return null;

  const parentDistrict = getDistrictByAdm2(spot.districtId);

  // Icon & Theme mapping based on category
  const getCategoryMeta = (category: string) => {
    switch (category) {
      case 'mountain':
        return {
          icon: '🏔️',
          label: 'পর্বত ও পাহাড়',
          gradient: 'from-amber-600 to-stone-700',
          badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
        };
      case 'factory':
        return {
          icon: '🏭',
          label: 'শিল্প ও কারখানা',
          gradient: 'from-orange-600 to-amber-700',
          badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40'
        };
      case 'power_plant':
        return {
          icon: '⚡',
          label: 'বিদ্যুৎ কেন্দ্র',
          gradient: 'from-yellow-500 to-amber-600',
          badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40'
        };
      case 'bridge':
        return {
          icon: '🌉',
          label: 'সেতু ও সংযোগ',
          gradient: 'from-blue-600 to-cyan-700',
          badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
        };
      case 'river_confluence':
        return {
          icon: '🌊',
          label: 'নদী মিলনস্থল ও মোহনা',
          gradient: 'from-sky-500 to-blue-700',
          badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
        };
      case 'river':
        return {
          icon: '🌊',
          label: 'নদী',
          gradient: 'from-sky-600 to-indigo-700',
          badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
        };
      case 'wetland_forest':
        return {
          icon: '🌿',
          label: 'হাওর, বন ও জলাভূমি',
          gradient: 'from-emerald-600 to-teal-700',
          badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
        };
      case 'beach_sea':
        return {
          icon: '🏖️',
          label: 'সৈকত ও দ্বীপ',
          gradient: 'from-teal-500 to-cyan-600',
          badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40'
        };
      case 'heritage':
        return {
          icon: '🏛️',
          label: 'ঐতিহাসিক স্থাপত্য ও প্রত্নতত্ত্ব',
          gradient: 'from-purple-600 to-indigo-700',
          badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
        };
      case 'port_airport':
        return {
          icon: spot.nameBn.includes('বন্দর') && !spot.nameBn.includes('বিমান') ? '🚢' : '✈️',
          label: 'বন্দর ও বিমানবন্দর',
          gradient: 'from-blue-700 to-slate-800',
          badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40'
        };
      case 'medicine_park':
        return {
          icon: '💊',
          label: 'ঔষধ ও প্রযুক্তি পার্ক',
          gradient: 'from-rose-600 to-pink-700',
          badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
        };
      case 'liberation_war':
        return {
          icon: '🎖️',
          label: 'মুক্তিযুদ্ধ ও স্মৃতিসৌধ',
          gradient: 'from-red-600 to-rose-700',
          badgeColor: 'bg-red-500/20 text-red-300 border-red-500/40'
        };
      default:
        return {
          icon: '📍',
          label: 'গুরুত্বপূর্ণ স্থান',
          gradient: 'from-teal-600 to-emerald-700',
          badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40'
        };
    }
  };

  const meta = getCategoryMeta(spot.category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative p-5 sm:p-6 bg-gradient-to-r ${meta.gradient} text-white`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-950/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl shadow-inner flex-shrink-0">
                {meta.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${meta.badgeColor} bg-slate-900/60`}>
                    {meta.label}
                  </span>
                  {spot.spotNumber && (
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/40 text-amber-300 border border-amber-400/30">
                      #{toEnDigits(spot.spotNumber)}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                  {toEnDigits(spot.nameBn)}
                </h3>
                <p className="text-xs text-white/80 font-medium mt-0.5">
                  {toEnDigits(spot.nameEn)}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition cursor-pointer flex-shrink-0"
              title="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Key Record Badge */}
          {spot.badgeBn && (
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/35 backdrop-blur-sm border border-white/20 text-xs font-semibold text-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{toEnDigits(spot.badgeBn)}</span>
            </div>
          )}
        </div>

        {/* Location Info Banner */}
        <div className="bg-slate-950 px-5 py-2.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>অবস্থান:</span>
            <strong className="text-white font-bold">{toEnDigits(spot.districtBn)}</strong>
            {parentDistrict && (
              <span className="text-slate-400">({parentDistrict.divisionBn} বিভাগ)</span>
            )}
          </div>
          <div className="text-[11px] text-slate-400 font-mono">
            স্থানাঙ্ক: {spot.lat.toFixed(4)}°N, {spot.lng.toFixed(4)}°E
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>📖</span> বিস্তারিত তথ্য
            </h4>
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/60 text-sm sm:text-base leading-relaxed text-slate-200">
              {toEnDigits(spot.description)}
            </div>
          </div>

          {/* Key Facts Bullets */}
          {spot.keyFacts && spot.keyFacts.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>📌</span> গুরুত্বপূর্ণ সাধারণ জ্ঞান তথ্য
              </h4>
              <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/40 space-y-2">
                {spot.keyFacts.map((fact, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{toEnDigits(fact)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related GK Question if any */}
          {spot.bcsQuestion && (
            <div className="bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/30 rounded-xl p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-purple-300 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> সাধারণ জ্ঞান প্রশ্ন
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-200 border border-purple-500/30 font-semibold font-mono">
                  {toEnDigits(spot.bcsQuestion.examTag)}
                </span>
              </div>
              <p className="font-semibold text-sm text-white mb-2">
                {toEnDigits(spot.bcsQuestion.question)}
              </p>
              <div className="text-xs text-emerald-300 font-bold bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2.5">
                সঠিক উত্তর: {toEnDigits(spot.bcsQuestion.options[spot.bcsQuestion.answerIndex])}
                {spot.bcsQuestion.explanation && (
                  <div className="font-normal text-slate-300 mt-1 text-[11px]">
                    ব্যাখ্যা: {toEnDigits(spot.bcsQuestion.explanation)}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
          <div>
            {parentDistrict && onViewParentDistrict && (
              <button
                onClick={() => {
                  onClose();
                  onViewParentDistrict(parentDistrict);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white border border-teal-500/30 font-semibold transition cursor-pointer flex items-center gap-1.5"
              >
                <span>🏛️ {parentDistrict.nameBn} জেলার সম্পূর্ণ তথ্য</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md transition cursor-pointer"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};
