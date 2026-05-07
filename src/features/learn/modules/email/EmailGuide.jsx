import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmailContent from "./EmailContent";

const EmailGuide = () => {
  // ── Tatizo 1: Hifadhi step kwenye sessionStorage ili refresh isirudi step 1
  const [step, setStep] = useState(() => {
    const saved = sessionStorage.getItem("emailGuideStep");
    return saved ? parseInt(saved, 10) : 1;
  });

  const [lang, setLang] = useState(() => {
    return sessionStorage.getItem("emailGuideLang") || "sw";
  });

  const totalSteps = 12;
  const navigate   = useNavigate();
  const isSw       = lang === "sw";

  // Hifadhi step na lang kila zinapobadilika
  useEffect(() => {
    sessionStorage.setItem("emailGuideStep", step);
  }, [step]);

  useEffect(() => {
    sessionStorage.setItem("emailGuideLang", lang);
  }, [lang]);

  // ── Tatizo 2: Scroll juu kila step inabadilika
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  // Futa sessionStorage mtu akiondoka kwenye email guide kabisa
  const handleBackToLearn = () => {
    sessionStorage.removeItem("emailGuideStep");
    sessionStorage.removeItem("emailGuideLang");
    navigate("/learn");
  };

  // Progress percentage (excluding dashboard step 1)
  const progress = step > 1 ? Math.round(((step - 1) / (totalSteps - 1)) * 100) : 0;

  return (
    <div className="w-full max-w-5xl mx-auto">

      {/* ── Top bar (Step 2+) ── */}
      {step > 1 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6">
          {/* Back + lesson label */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setStep(step - 1)}
              className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1"
            >
              ← {isSw ? "Rudi" : "Back"}
            </button>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {isSw ? `Somo ${step - 1} / ${totalSteps - 1}` : `Lesson ${step - 1} / ${totalSteps - 1}`}
            </span>
          </div>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "sw" ? "en" : "sw")}
            className="w-full sm:w-auto text-xs font-bold px-4 py-2 border border-slate-200 rounded-full hover:border-teal-400 hover:text-teal-600 transition uppercase tracking-wider bg-white cursor-pointer"
          >
            {isSw ? "English Version" : "Badili kwenda Kiswahili"}
          </button>
        </div>
      )}

      {/* ── Progress bar (Step 2+) ── */}
      {step > 1 && (
        <div className="mb-5 sm:mb-6">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-xs text-slate-400 font-medium">
              {isSw ? "Maendeleo" : "Progress"}
            </span>
            <span className="text-xs font-bold text-teal-600">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* ── Main content card ── */}
      <div className={`w-full transition-all duration-500 ${
        step === 1
          ? ""
          : "bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
      }`}>
        <div className={step === 1 ? "p-0" : "p-5 sm:p-7 lg:p-10"}>
          <EmailContent
            step={step}
            setStep={setStep}
            lang={lang}
            setLang={setLang}
          />
        </div>

        {/* ── Navigation footer (Step 2+) ── */}
        {step > 1 && (
          <div className="px-5 sm:px-7 lg:px-10 py-4 sm:py-5 bg-slate-50 border-t border-slate-100">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm font-semibold text-slate-400 hover:text-teal-600 transition cursor-pointer"
              >
                ← {isSw ? "Rudi" : "Back"}
              </button>

              {step < totalSteps ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-6 sm:px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm transition cursor-pointer active:scale-[0.98] shadow-sm shadow-teal-100"
                >
                  {isSw ? "Endelea →" : "Next →"}
                </button>
              ) : (
                <div /> // Last step — Conclusion handles its own finish button
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Back to Learn (Step 1 only) ── */}
      {step === 1 && (
        <div className="mt-6 text-center">
          <button
            onClick={handleBackToLearn}
            className="text-sm font-medium text-slate-400 hover:text-teal-600 transition cursor-pointer"
          >
            ← {isSw ? "Rudi kwenye Mafunzo" : "Back to Learning"}
          </button>
        </div>
      )}

    </div>
  );
};

export default EmailGuide;