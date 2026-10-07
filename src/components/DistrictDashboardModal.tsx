import React, { useState } from 'react';
import { 
  X, MapPin, Award, BookOpen, Layers, Shield, 
  Trees, Factory, Landmark, Anchor, Stethoscope, 
  CheckCircle2, ChevronRight, HelpCircle, ExternalLink,
  Sparkles
} from 'lucide-react';
import { DistrictGK } from '../types';
import { DIVISIONS } from '../data/divisions';

interface DistrictDashboardModalProps {
  district: DistrictGK | null;
  onClose: () => void;
}

export const DistrictDashboardModal: React.FC<DistrictDashboardModalProps> = ({
  district,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'war' | 'infra' | 'heritage' | 'questions'>('overview');
  const [revealedQuestions, setRevealedQuestions] = useState<Record<number, boolean>>({});

  if (!district) return null;

  const divInfo = DIVISIONS[district.divisionId];

  const toggleQuestion = (idx: number) => {
    setRevealedQuestions(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          className="relative p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4"
          style={{
            background: `linear-gradient(135deg, ${divInfo.color}15 0%, rgba(15, 23, 42, 0.95) 100%)`
          }}
        >
          <div className="flex items-start gap-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg border"
              style={{
                backgroundColor: `${divInfo.color}25`,
                borderColor: `${divInfo.color}50`,
                color: divInfo.fillColor
              }}
            >
              {district.nameBn.slice(0, 2)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
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
                {district.chhitmahal.count > 0 && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    🧩 {district.chhitmahal.count}টি ছিটমহল
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                {district.speciality}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-400 font-mono">
                <span>📐 আয়তন: <strong className="text-slate-200">{district.areaKm2.toLocaleString('bn-BD')}</strong> বর্গ কিমি</span>
                <span>•</span>
                <span>🧭 স্থানাঙ্ক: {district.lat.toFixed(3)}°N, {district.lng.toFixed(3)}°E</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center px-4 bg-slate-950/80 border-b border-slate-800 overflow-x-auto scrollbar-none text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-3 font-medium border-b-2 flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-emerald-400 text-emerald-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>📌 মূল পরিচিতি ও কৃষি</span>
          </button>

          <button
            onClick={() => setActiveTab('war')}
            className={`px-3 py-3 font-medium border-b-2 flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'war'
                ? 'border-rose-400 text-rose-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>মুক্তিযুদ্ধ ও বীরশ্রেষ্ঠ</span>
          </button>

          <button
            onClick={() => setActiveTab('infra')}
            className={`px-3 py-3 font-medium border-b-2 flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'infra'
                ? 'border-cyan-400 text-cyan-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Factory className="w-4 h-4" />
            <span>মেগা অবকাঠামো ও শিল্প</span>
          </button>

          <button
            onClick={() => setActiveTab('heritage')}
            className={`px-3 py-3 font-medium border-b-2 flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'heritage'
                ? 'border-amber-400 text-amber-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>ঐতিহ্য ও নদ-নদী</span>
          </button>

          <button
            onClick={() => setActiveTab('questions')}
            className={`px-3 py-3 font-medium border-b-2 flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap ${
              activeTab === 'questions'
                ? 'border-purple-400 text-purple-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>বিসিএস/মেডিকেল প্রশ্ন ({district.bcsQuestions.length})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* TAB 1: OVERVIEW & AGRICULTURE */}
          {activeTab === 'overview' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Old Names & Geographical Nicknames */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold mb-2">
                    <span className="text-base">📜</span>
                    <h4>পূর্বনাম ও প্রাচীন পরিচয়</h4>
                  </div>
                  {district.oldNames && district.oldNames.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {district.oldNames.map((name, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-medium">
                          {name}
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
                    <h4>ভৌগোলিক উপনাম</h4>
                  </div>
                  {district.nicknames && district.nicknames.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {district.nicknames.map((nick, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-medium">
                          {nick}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400">সাধারণ জেলা পরিচয়।</p>
                  )}
                </div>
              </div>

              {/* Agriculture Impact */}
              <div className="bg-gradient-to-r from-emerald-950/40 to-slate-800/80 border border-emerald-500/30 rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <span className="text-xl">🌾</span>
                    <h3>কৃষি প্রভাব ও বিশেষ ফসল/খাদ্য</h3>
                  </div>
                  {district.agricultureImpact.isTopProducer && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-500 text-slate-950">
                      ★ বাংলাদেশে ১ম স্থান
                    </span>
                  )}
                </div>
                <div className="bg-slate-900/80 rounded-lg p-3 border border-emerald-500/20 mb-2">
                  <p className="text-sm font-semibold text-emerald-300">
                    প্রধান ফসল / খাদ্য: <span className="text-white">{district.agricultureImpact.topCrop}</span>
                  </p>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {district.agricultureImpact.description}
                  </p>
                </div>
                {district.agricultureImpact.giProduct && (
                  <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                    <span>🎖️ <strong>জিআই (GI) পণ্য:</strong> {district.agricultureImpact.giProduct}</span>
                  </div>
                )}
              </div>

              {/* Chhitmahal & Border */}
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sky-400 font-semibold mb-2">
                  <span className="text-base">🧩</span>
                  <h4>ছিটমহল ও সীমান্ত তথ্য</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {district.chhitmahal.details}
                </p>
                {district.chhitmahal.hasCorridor && (
                  <div className="mt-2 text-xs bg-sky-500/10 text-sky-300 border border-sky-500/30 px-3 py-1.5 rounded-lg font-medium">
                    📍 তিন বিঘা করিডোর ও দহগ্রাম-আঙ্গরপোতার সরাসরি সংযোগ স্থল!
                  </div>
                )}
              </div>

              {/* July Movement */}
              {district.julyMovement && (
                <div className="bg-rose-950/30 border border-rose-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-rose-400 font-bold mb-1">
                    <span>✊</span>
                    <h4>জুলাই গণঅভ্যুত্থান ২০২৪</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200">
                    <strong>শহীদ:</strong> {district.julyMovement.martyrName}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    {district.julyMovement.significance}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LIBERATION WAR & BIR SRESHTHO */}
          {activeTab === 'war' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Sector details */}
              <div className="bg-gradient-to-r from-rose-950/40 to-slate-800/80 border border-rose-500/30 rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-rose-400 font-bold">
                    <Shield className="w-5 h-5" />
                    <h3>১৯৭১ মুক্তিযুদ্ধ: সেক্টর ও সদর দফতর</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    {district.liberationWar.sector}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/60">
                    <span className="text-slate-400 block text-xs">সেক্টর কমান্ডার:</span>
                    <strong className="text-slate-100">{district.liberationWar.sectorCommander}</strong>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/60">
                    <span className="text-slate-400 block text-xs">সেক্টর সদর দফতর (HQ):</span>
                    <strong className="text-slate-100">{district.liberationWar.sectorHQ}</strong>
                  </div>
                </div>
              </div>

              {/* Bir Sreshtho Details */}
              {district.liberationWar.birSreshthoInfo && district.liberationWar.birSreshthoInfo.length > 0 && (
                <div className="bg-amber-950/30 border border-amber-500/40 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold mb-3">
                    <Award className="w-5 h-5" />
                    <h3>বীরশ্রেষ্ঠ তথ্য (জন্ম / সমাধি)</h3>
                  </div>
                  <div className="space-y-2.5">
                    {district.liberationWar.birSreshthoInfo.map((bs, i) => (
                      <div key={i} className="bg-slate-900/90 p-3 rounded-lg border border-amber-500/20 flex items-start gap-3">
                        <span className="text-xl">🎖️</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-amber-300 text-sm">{bs.name}</h4>
                            <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-500/30 font-medium">
                              {bs.role === 'birth' ? 'জন্মস্থান' : bs.role === 'burial' ? 'সমাধিস্থল' : 'জন্ম ও সমাধি'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed">{bs.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Historic Events / Genocides */}
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
                  <span>⚔️</span> ঐতিহাসিক ঘটনাবলী ও অপারেশন
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  {district.liberationWar.events.map((ev, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 mt-1">•</span>
                      <span>{ev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: INFRASTRUCTURE & INDUSTRY */}
          {activeTab === 'infra' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                  <Factory className="w-4 h-4" />
                  বৃহত্তম ও উল্লেখযোগ্য মেগা অবকাঠামো ({district.infrastructure.length})
                </h3>
              </div>

              {district.infrastructure.length > 0 ? (
                <div className="grid grid-cols-1 gap-3">
                  {district.infrastructure.map((inf, i) => (
                    <div key={i} className="bg-slate-800/70 border border-slate-700/70 rounded-xl p-4 hover:border-cyan-500/50 transition">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">
                            {inf.type === 'railway' ? '🚆' :
                             inf.type === 'bridge' ? '🌉' :
                             inf.type === 'energy' ? '⚡' :
                             inf.type === 'port' ? '⚓' :
                             inf.type === 'airport' ? '✈️' :
                             inf.type === 'industrial' ? '🏭' : '🏢'}
                          </span>
                          <h4 className="font-bold text-white text-sm sm:text-base">{inf.title}</h4>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                          {inf.type}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        {inf.details}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400">এই জেলায় কোনো বৃহৎ জাতীয় অবকাঠামো তালিকাভুক্ত নেই।</p>
              )}

              {/* Education & Healthcare Institutes */}
              {district.medicalAndEducation && (
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                    <Stethoscope className="w-4 h-4" />
                    <h4>স্বাস্থ্য ও শীর্ষ বিদ্যাপীঠ</h4>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {district.medicalAndEducation.medicalCollege && (
                      <p>
                        🏥 <strong>মেডিকেল কলেজ:</strong> {district.medicalAndEducation.medicalCollege}
                        {district.medicalAndEducation.establishedYear && ` (প্রতিষ্ঠা: ${district.medicalAndEducation.establishedYear})`}
                      </p>
                    )}
                    {district.medicalAndEducation.universityOrInstitute && (
                      <p>
                        🎓 <strong>বিশ্ববিদ্যালয় / গবেষণা প্রতিষ্ঠান:</strong> {district.medicalAndEducation.universityOrInstitute}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: HERITAGE, ARCHAEOLOGY & WETLANDS */}
          {activeTab === 'heritage' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Heritage sites */}
              <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-3">
                  <Landmark className="w-5 h-5" />
                  <h3>ঐতিহ্য ও প্রত্নতাত্ত্বিক নিদর্শন ({district.heritageAndArchaeology.length})</h3>
                </div>
                {district.heritageAndArchaeology.length > 0 ? (
                  <div className="space-y-2.5">
                    {district.heritageAndArchaeology.map((her, i) => (
                      <div key={i} className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-amber-300 text-sm">{her.name}</h4>
                          {her.unescoYear && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                              ইউনেস্কো বিশ্ব ঐতিহ্য ({her.unescoYear})
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {her.periodOrSignificance}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">কোনো বিশেষ প্রত্নতাত্ত্বিক স্থান তালিকাভুক্ত নেই।</p>
                )}
              </div>

              {/* Wetlands, Haor, Sundarban */}
              {district.wetlandsAndForests && district.wetlandsAndForests.length > 0 && (
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-teal-400 font-bold mb-3">
                    <Trees className="w-5 h-5" />
                    <h3>হাওর, নদ-নদী ও বনভূমি</h3>
                  </div>
                  <div className="space-y-2.5">
                    {district.wetlandsAndForests.map((wet, i) => (
                      <div key={i} className="bg-slate-900/80 p-3 rounded-lg border border-teal-500/20">
                        <h4 className="font-bold text-teal-300 text-sm">{wet.name}</h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {wet.significance}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: BCS & MEDICAL QUESTIONS */}
          {activeTab === 'questions' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <BookOpen className="w-5 h-5" />
                  <h3>বিসিএস ও মেডিকেল ভর্তি পরীক্ষার বিগত প্রশ্ন</h3>
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
                            <span className="text-purple-400 mr-1.5 font-bold">প্রশ্ন {idx + 1}:</span>
                            {q.question}
                          </p>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 whitespace-nowrap">
                            {q.examTag}
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
                              {opt}
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
                              সঠিক উত্তর: {q.options[q.answerIndex]}
                            </p>
                            <p className="text-slate-300 mt-1 leading-relaxed">
                              {q.explanation}
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
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>মানচিত্রে যেকোনো জেলায় ক্লিক করে বিস্তারিত ড্যাশবোর্ড দেখুন</span>
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
