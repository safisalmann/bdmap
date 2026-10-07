import React, { useState } from 'react';
import { X, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, HelpCircle } from 'lucide-react';
import { BCS_MEDICAL_QUESTION_BANK } from '../data/bcsQuestionsData';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDistrictByName?: (districtBn: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  onSelectDistrictByName
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = BCS_MEDICAL_QUESTION_BANK[currentIndex];
  const totalQuestions = BCS_MEDICAL_QUESTION_BANK.length;

  const handleSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQ.answerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">বাংলাদেশ সাধারণ জ্ঞান প্রস্তুতি কুইজ</h3>
              <p className="text-xs text-slate-400">
                বাংলাদেশ বিষয়াবলীর গুরুত্বপূর্ণ প্রশ্ন ও উত্তর অনুশীলন
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {!completed ? (
            <>
              {/* Progress & Category */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                  প্রশ্ন: {currentIndex + 1} / {totalQuestions}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
                  {currentQ.category} • {currentQ.examTag}
                </span>
                <span className="text-amber-400 font-bold">
                  স্কোর: {score}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Question text */}
              <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700/70">
                <p className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  let optionClass = 'bg-slate-800/80 border-slate-700 hover:border-slate-500 text-slate-200';
                  
                  if (isSubmitted) {
                    if (idx === currentQ.answerIndex) {
                      optionClass = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
                    } else if (idx === selectedOption) {
                      optionClass = 'bg-rose-500/20 border-rose-500 text-rose-200';
                    }
                  } else if (selectedOption === idx) {
                    optionClass = 'bg-amber-500/20 border-amber-500 text-amber-200 font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isSubmitted}
                      onClick={() => handleSelect(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition flex items-center justify-between cursor-pointer ${optionClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 text-xs flex items-center justify-center font-bold">
                          {idx === 0 ? 'ক' : idx === 1 ? 'খ' : idx === 2 ? 'গ' : 'ঘ'}
                        </span>
                        <span className="text-sm font-medium">{option}</span>
                      </div>
                      {isSubmitted && idx === currentQ.answerIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      )}
                      {isSubmitted && idx === selectedOption && idx !== currentQ.answerIndex && (
                        <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation on submit */}
              {isSubmitted && (
                <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs sm:text-sm text-slate-300 space-y-1.5 animate-fadeIn">
                  <p className="font-bold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    সঠিক উত্তর: {currentQ.options[currentQ.answerIndex]}
                  </p>
                  <p className="leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  {currentQ.districtNameBn && onSelectDistrictByName && (
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectDistrictByName(currentQ.districtNameBn!);
                        }}
                        className="text-xs text-sky-400 hover:text-sky-300 font-semibold underline flex items-center gap-1 cursor-pointer"
                      >
                        মানচিত্রে {currentQ.districtNameBn} জেলা দেখুন →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            /* Result Screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 mx-auto flex items-center justify-center text-3xl">
                🏆
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white">কুইজ সমাপ্ত!</h4>
                <p className="text-sm text-slate-400 mt-1">
                  আপনি {totalQuestions}টির মধ্যে <strong className="text-emerald-400 text-lg">{score}টি</strong> সঠিক উত্তর দিয়েছেন।
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 max-w-md mx-auto text-xs text-slate-300">
                {score >= totalQuestions * 0.8
                  ? '🌟 চমৎকার প্রস্তুতি! বাংলাদেশ সাধারণ জ্ঞানে আপনি দারুণ অবস্থানে আছেন।'
                  : score >= totalQuestions * 0.5
                  ? '👍 বেশ ভালো! মানচিত্রের বিভিন্ন জেলায় ক্লিক করে আরো নিখুঁতভাবে রিভিশন দিন।'
                  : '💡 আরো অনুশীলন প্রয়োজন! মানচিত্রে প্রতিটি জেলা ও বিশেষ অবকাঠামো ভালোভাবে লক্ষ্য করুন।'}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          {!completed ? (
            <>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer"
              >
                বাতিল করুন
              </button>
              {!isSubmitted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmit}
                  className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    selectedOption !== null
                      ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  উত্তর যাচাই করুন
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>{currentIndex + 1 < totalQuestions ? 'পরবর্তী প্রশ্ন' : 'ফলাফল দেখুন'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </>
          ) : (
            <div className="w-full flex items-center justify-between">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>পুনরায় শুরু করুন</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer"
              >
                মানচিত্রে ফিরুন
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
