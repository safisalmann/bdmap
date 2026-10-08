import React, { useState } from 'react';
import { 
  X, MapPin, Award, BookOpen, Shield, 
  Trees, Factory, Landmark, Stethoscope, 
  CheckCircle2, HelpCircle, Sparkles, Building2
} from 'lucide-react';
import { DistrictGK } from '../types';
import { DIVISIONS } from '../data/divisions';
import { DISTRICT_SPECIAL_FACTS } from '../data/districtSpecialFacts';

interface DistrictDashboardModalProps {
  district: DistrictGK | null;
  onClose: () => void;
}

// Convert all Bengali digits and months to English
function toEnDatesAndDigits(val: string | number | undefined | null): string {
  if (val === undefined || val === null) return '';
  let str = String(val);
  const bnToEn: Record<string, string> = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
    '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
  };
  str = str.replace(/[০-৯]/g, (char) => bnToEn[char] || char);

  const months: Record<string, string> = {
    'জানুয়ারি': 'January',
    'ফেব্রুয়ারি': 'February',
    'মার্চ': 'March',
    'এপ্রিল': 'April',
    'মে': 'May',
    'জুন': 'June',
    'জুলাই': 'July',
    'আগস্ট': 'August',
    'সেপ্টেম্বর': 'September',
    'অক্টোবর': 'October',
    'নভেম্বর': 'November',
    'ডিসেম্বর': 'December'
  };

  for (const [bnM, enM] of Object.entries(months)) {
    str = str.split(bnM).join(enM);
  }

  return str;
}

const toEnDigits = toEnDatesAndDigits;

export const DistrictDashboardModal: React.FC<DistrictDashboardModalProps> = ({
  district,
  onClose
}) => {
  // Only two tabs: Information and BCS/Medical questions
  const [activeTab, setActiveTab] = useState<'information' | 'questions'>('information');
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});

  if (!district) return null;

  const divInfo = DIVISIONS[district.divisionId];
  const specialMeta = DISTRICT_SPECIAL_FACTS[district.id] || DISTRICT_SPECIAL_FACTS[district.adm2En.toLowerCase()];

  const toggleQuestion = (idx: number) => {
    setRevealedQuestions(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Check if district has any chhitmahal (only show if count > 0)
  const hasChhitmahal = district.chhitmahal && district.chhitmahal.count > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header without axis position and total area */}
        <div 
          className="relative p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4"
          style={{
            background: `linear-gradient(135deg, ${divInfo.color}18 0%, rgba(15, 23, 42, 0.96) 100%)`
          }}
        >
          <div className="flex items-start gap-4">
            <div 
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg border flex-shrink-0"
              style={{
                backgroundColor: `${divInfo.color}25`,
                borderColor: `${divInfo.color}50`,
                color: divInfo.fillColor
              }}
            >
              {district.nameBn.slice(0, 2)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {district.nameBn} জেলা
                </h2>
                <span className="text-sm font-medium text-slate-400">
                  ({district.nameEn})
                </span>
                <span 
                  className="px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-sm border"
                  style={{
                    backgroundColor: `${divInfo.color}20`,
                    borderColor: `${divInfo.color}60`,
                    color: divInfo.fillColor
                  }}
                >
                  {district.divisionBn} বিভাগ
                </span>
                {specialMeta?.parliamentSeats && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    <span>সংসদীয় আসন: {toEnDigits(specialMeta.parliamentSeats)}টি</span>
                  </span>
                )}
                {hasChhitmahal && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    🧩 {toEnDigits(district.chhitmahal.count)}টি ছিটমহল
                  </span>
                )}
              </div>

              {/* Speciality text from preview */}
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {toEnDigits(district.speciality)}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer flex-shrink-0"
            title="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation: Exactly 2 tabs (Information & BCS/Medical questions) */}
        <div className="flex items-center px-4 sm:px-6 bg-slate-950/90 border-b border-slate-800 gap-2">
          <button
            onClick={() => setActiveTab('information')}
            className={`px-4 py-3 font-bold border-b-2 flex items-center gap-2 transition cursor-pointer text-sm ${
              activeTab === 'information'
                ? 'border-emerald-400 text-emerald-400 font-extrabold shadow-sm'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Information</span>
          </button>

          <button
            onClick={() => setActiveTab('questions')}
            className={`px-4 py-3 font-bold border-b-2 flex items-center gap-2 transition cursor-pointer text-sm ${
              activeTab === 'questions'
                ? 'border-purple-400 text-purple-400 font-extrabold shadow-sm'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>BCS/Medical questions ({toEnDigits(district.bcsQuestions.length)})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* TAB 1: ALL INFORMATION MERGED IN ONE SECTION */}
          {activeTab === 'information' && (
            <div className="space-y-6 animate-fadeIn">
              {/* 0. DISTRICT OVERVIEW & PREVIEW HIGHLIGHTS (Merged into Information) */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                  <span className="text-base">📌</span>
                  <h3 className="text-sm sm:text-base">জেলা পরিচিতি ও মূল সাধারণ জ্ঞান (Overview)</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {toEnDatesAndDigits(district.speciality)}
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-700/60">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-emerald-400 font-semibold">🌾 শীর্ষ কৃষি:</span>
                    <span className="font-medium text-white">{toEnDatesAndDigits(district.agricultureImpact.topCrop)}</span>
                    {district.agricultureImpact.giProduct && (
                      <span className="text-amber-300 font-bold">★ জিআই: {toEnDatesAndDigits(district.agricultureImpact.giProduct)}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="text-cyan-400 font-semibold">🏭 প্রধান স্থাপনা:</span>
                    <span className="font-medium text-white truncate">{toEnDatesAndDigits(district.infrastructure[0]?.title || district.heritageAndArchaeology[0]?.name || 'তথ্যসমৃদ্ধ অঞ্চল')}</span>
                  </div>
                </div>
              </div>

              {/* 1. SPECIAL INFORMATION & UNIQUE GEOGRAPHICAL HIGHLIGHTS */}
              {specialMeta?.specialInformation && specialMeta.specialInformation.length > 0 && (
                <div className="bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 rounded-2xl p-4 sm:p-5 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                      <h3>বিশেষ তথ্য ও ভৌগোলিক রেকর্ড (Special Information)</h3>
                    </div>
                    {specialMeta.parliamentSeats && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 font-mono">
                        সংসদীয় আসন: {toEnDatesAndDigits(specialMeta.parliamentSeats)}টি
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    {specialMeta.specialInformation.map((info, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{toEnDatesAndDigits(info)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. OLD NAMES & GEOGRAPHICAL NICKNAMES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold mb-2">
                    <span className="text-base">📜</span>
                    <h4 className="text-sm font-bold">পূর্বনাম ও প্রাচীন পরিচয়</h4>
                  </div>
                  {district.oldNames && district.oldNames.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {district.oldNames.map((name, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-semibold">
                          {toEnDigits(name)}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400">কোনো বিশেষ পূর্বনাম লিপিবদ্ধ নেই।</p>
                  )}
                </div>

                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-teal-400 font-semibold mb-2">
                    <span className="text-base">🏷️</span>
                    <h4 className="text-sm font-bold">ভৌগোলিক উপনাম</h4>
                  </div>
                  {district.nicknames && district.nicknames.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {district.nicknames.map((nick, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-semibold">
                          {toEnDigits(nick)}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400">সাধারণ জেলা পরিচয়।</p>
                  )}
                </div>
              </div>

              {/* 3. AGRICULTURE IMPACT & GI PRODUCTS */}
              <div className="bg-gradient-to-r from-emerald-950/40 to-slate-800/80 border border-emerald-500/30 rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span className="text-xl">🌾</span>
                    <h3 className="text-sm sm:text-base font-bold">কৃষি প্রভাব, শীর্ষ ফসল ও খাদ্য</h3>
                  </div>
                  {district.agricultureImpact.isTopProducer && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500 text-slate-950">
                      ★ বাংলাদেশে ১ম স্থান
                    </span>
                  )}
                </div>
                <div className="bg-slate-900/80 rounded-lg p-3 border border-emerald-500/20 mb-2">
                  <p className="text-sm font-semibold text-emerald-300">
                    প্রধান ফসল / খাদ্য: <span className="text-white">{toEnDigits(district.agricultureImpact.topCrop)}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {toEnDigits(district.agricultureImpact.description)}
                  </p>
                </div>
                {district.agricultureImpact.giProduct && (
                  <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                    <span>🎖️ <strong>জিআই (GI) পণ্য:</strong> {toEnDigits(district.agricultureImpact.giProduct)}</span>
                  </div>
                )}
              </div>

              {/* 4. MEGA INFRASTRUCTURE & INDUSTRY */}
              <div className="bg-slate-800/50 border border-slate-700/70 rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm sm:text-base font-bold text-cyan-400 flex items-center gap-2">
                    <Factory className="w-4 h-4" />
                    <span>মেগা অবকাঠামো ও শিল্প কারখানা ({toEnDigits(district.infrastructure.length)})</span>
                  </h3>
                </div>

                {district.infrastructure.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {district.infrastructure.map((inf, i) => (
                      <div key={i} className="bg-slate-900/80 border border-slate-700/70 rounded-xl p-3.5 hover:border-cyan-500/40 transition">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-base">
                              {inf.type === 'railway' ? '🚆' :
                               inf.type === 'bridge' ? '🌉' :
                               inf.type === 'energy' ? '⚡' :
                               inf.type === 'port' ? '⚓' :
                               inf.type === 'airport' ? '✈️' :
                               inf.type === 'industrial' ? '🏭' : '🏢'}
                            </span>
                            <h4 className="font-bold text-white text-xs sm:text-sm">{toEnDigits(inf.title)}</h4>
                          </div>
                          <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                            {inf.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                          {toEnDigits(inf.details)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">এই জেলায় কোনো বৃহৎ জাতীয় অবকাঠামো তালিকাভুক্ত নেই।</p>
                )}
              </div>

              {/* 5. HERITAGE & ARCHAEOLOGICAL MONUMENTS */}
              <div className="bg-slate-800/50 border border-slate-700/70 rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-3">
                  <Landmark className="w-4 h-4" />
                  <h3 className="text-sm sm:text-base">ঐতিহাসিক স্থাপত্য ও প্রত্নতাত্ত্বিক নিদর্শন ({toEnDigits(district.heritageAndArchaeology.length)})</h3>
                </div>
                {district.heritageAndArchaeology.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {district.heritageAndArchaeology.map((her, i) => (
                      <div key={i} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700/50">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-amber-300 text-xs sm:text-sm">{toEnDigits(her.name)}</h4>
                          {her.unescoYear && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-bold">
                              UNESCO {toEnDigits(her.unescoYear)}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {toEnDigits(her.periodOrSignificance)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">কোনো বিশেষ প্রত্নতাত্ত্বিক স্থান তালিকাভুক্ত নেই।</p>
                )}
              </div>

              {/* 6. WETLANDS, RIVERS, HAOR & FORESTS */}
              {district.wetlandsAndForests && district.wetlandsAndForests.length > 0 && (
                <div className="bg-slate-800/50 border border-slate-700/70 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-teal-400 font-bold mb-3">
                    <Trees className="w-4 h-4" />
                    <h3 className="text-sm sm:text-base">হাওর, নদ-নদী ও বনভূমি</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {district.wetlandsAndForests.map((wet, i) => (
                      <div key={i} className="bg-slate-900/80 p-3.5 rounded-xl border border-teal-500/20">
                        <h4 className="font-bold text-teal-300 text-xs sm:text-sm mb-1">{toEnDigits(wet.name)}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {toEnDigits(wet.significance)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. LIBERATION WAR 1971 & BIR SRESHTHO (WITHOUT SECTOR HQ) */}
              <div className="bg-gradient-to-r from-rose-950/30 to-slate-900 border border-rose-500/30 rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold">
                    <Shield className="w-4 h-4" />
                    <h3 className="text-sm sm:text-base">১৯৭১ মুক্তিযুদ্ধ: সেক্টর ও বীরশ্রেষ্ঠ</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 font-mono">
                    {toEnDigits(district.liberationWar.sector)}
                  </span>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/60 mb-3">
                  <span className="text-slate-400 block text-xs">সেক্টর কমান্ডার:</span>
                  <strong className="text-slate-100 text-xs sm:text-sm">{toEnDigits(district.liberationWar.sectorCommander)}</strong>
                </div>

                {/* Bir Sreshtho Details */}
                {district.liberationWar.birSreshthoInfo && district.liberationWar.birSreshthoInfo.length > 0 && (
                  <div className="mb-3 space-y-2">
                    {district.liberationWar.birSreshthoInfo.map((bs, i) => (
                      <div key={i} className="bg-slate-900/90 p-3 rounded-lg border border-amber-500/30 flex items-start gap-3">
                        <span className="text-lg">🎖️</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-amber-300 text-xs sm:text-sm">{toEnDigits(bs.name)}</h4>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-500/30 font-semibold">
                              {bs.role === 'birth' ? 'জন্মস্থান' : bs.role === 'burial' ? 'সমাধিস্থল' : 'জন্ম ও সমাধি'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed">{toEnDigits(bs.details)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Historical Events */}
                {district.liberationWar.events && district.liberationWar.events.length > 0 && (
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-800">
                    <h4 className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <span>⚔️</span> ঐতিহাসিক ঘটনাবলী ও অপারেশন:
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {district.liberationWar.events.map((ev, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-400 mt-0.5">•</span>
                          <span>{toEnDigits(ev)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 8. CHHITMAHAL BOX (ONLY IF DISTRICT HAS CHHITMAHAL) */}
              {hasChhitmahal && (
                <div className="bg-slate-800/60 border border-rose-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-rose-400 font-semibold mb-2">
                    <span className="text-base">🧩</span>
                    <h4 className="text-sm font-bold">ছিটমহল ও সীমান্ত তথ্য ({toEnDigits(district.chhitmahal.count)}টি ছিটমহল)</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {toEnDigits(district.chhitmahal.details)}
                  </p>
                  {district.chhitmahal.hasCorridor && (
                    <div className="mt-2 text-xs bg-rose-500/10 text-rose-300 border border-rose-500/30 px-3 py-1.5 rounded-lg font-medium">
                      📍 তিন বিঘা করিডোর ও দহগ্রাম-আঙ্গরপোতার সরাসরি সংযোগ স্থল!
                    </div>
                  )}
                </div>
              )}

              {/* 9. HEALTHCARE & HIGHER EDUCATION */}
              {district.medicalAndEducation && (
                <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                    <Stethoscope className="w-4 h-4" />
                    <h4 className="text-sm font-bold">স্বাস্থ্য ও শীর্ষ বিদ্যাপীঠ</h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {district.medicalAndEducation.medicalCollege && (
                      <p>
                        🏥 <strong>মেডিকেল কলেজ:</strong> {toEnDigits(district.medicalAndEducation.medicalCollege)}
                        {district.medicalAndEducation.establishedYear && ` (প্রতিষ্ঠা: ${toEnDigits(district.medicalAndEducation.establishedYear)})`}
                      </p>
                    )}
                    {district.medicalAndEducation.universityOrInstitute && (
                      <p>
                        🎓 <strong>বিশ্ববিদ্যালয় / গবেষণা প্রতিষ্ঠান:</strong> {toEnDigits(district.medicalAndEducation.universityOrInstitute)}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* 10. JULY MOVEMENT (IF PRESENT) */}
              {district.julyMovement && (
                <div className="bg-rose-950/30 border border-rose-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-rose-400 font-bold mb-1">
                    <span>✊</span>
                    <h4 className="text-sm">জুলাই গণঅভ্যুত্থান ২০২৪</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200">
                    <strong>শহীদ:</strong> {toEnDigits(district.julyMovement.martyrName)}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    {toEnDigits(district.julyMovement.significance)}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: BCS & MEDICAL QUESTIONS */}
          {activeTab === 'questions' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <BookOpen className="w-5 h-5" />
                  <h3 className="text-sm sm:text-base">বিসিএস ও মেডিকেল ভর্তি পরীক্ষার বিগত প্রশ্নাবলী</h3>
                </div>
                <span className="text-xs text-slate-400">
                  ক্লিক করে উত্তর ও ব্যাখ্যা দেখুন
                </span>
              </div>

              {district.bcsQuestions.length > 0 ? (
                <div className="space-y-3">
                  {district.bcsQuestions.map((q, idx) => {
                    const isRevealed = !!revealedQuestions[idx];
                    return (
                      <div key={idx} className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-semibold text-white leading-snug">
                            <span className="text-purple-400 mr-1.5 font-bold">প্রশ্ন {toEnDigits(idx + 1)}:</span>
                            {toEnDigits(q.question)}
                          </p>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                            {toEnDigits(q.examTag)}
                          </span>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options.map((opt, oIdx) => (
                            <div 
                              key={oIdx}
                              className={`p-2.5 rounded-lg border transition ${
                                isRevealed && oIdx === q.answerIndex
                                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold'
                                  : 'bg-slate-900/60 border-slate-800 text-slate-300'
                              }`}
                            >
                              <span className="text-slate-400 mr-1.5 font-mono">
                                {oIdx === 0 ? 'ক.' : oIdx === 1 ? 'খ.' : oIdx === 2 ? 'গ.' : 'ঘ.'}
                              </span>
                              {toEnDigits(opt)}
                            </div>
                          ))}
                        </div>

                        {/* Toggle button */}
                        <div className="pt-1">
                          <button
                            onClick={() => toggleQuestion(idx)}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 transition cursor-pointer flex items-center gap-1.5"
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>{isRevealed ? 'ব্যাখ্যা লুকান' : 'সঠিক উত্তর ও ব্যাখ্যা দেখুন'}</span>
                          </button>
                        </div>

                        {/* Explanation box */}
                        {isRevealed && (
                          <div className="mt-2 bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-3 text-xs animate-fadeIn">
                            <p className="font-bold text-emerald-300 flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              সঠিক উত্তর: {toEnDigits(q.options[q.answerIndex])}
                            </p>
                            <p className="text-slate-300 mt-1 leading-relaxed">
                              {toEnDigits(q.explanation)}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-400 text-sm">
                  এই জেলার সাথে সম্পর্কিত প্রশ্নাবলী শীঘ্রই সংযোজিত হচ্ছে।
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{district.nameBn} জেলার সাধারণ জ্ঞান ও পরীক্ষা প্রস্তুতি তথ্য</span>
          </div>
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
