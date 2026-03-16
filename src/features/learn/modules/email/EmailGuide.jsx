import React, { useState } from "react";
import EmailContent from "./EmailContent";

const EmailGuide = () => {
  const [step, setStep] = useState(1);
  const [lang, setLang] = useState("sw");
  const totalSteps = 12;

  const isSw = lang === "sw";

  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 font-rubik">
      {/* Header - Inaonekana kuanzia Step 2 */}
      {step > 1 && (
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8 animate-in fade-in duration-500">
          <button
            onClick={() => setLang(lang === "sw" ? "en" : "sw")}
            className="w-full sm:w-auto text-[10px] sm:text-xs font-black px-4 sm:px-6 py-2.5 border-2 border-slate-100 rounded-full hover:bg-white transition uppercase tracking-[0.18em] text-[#1a73e8]"
          >
            {isSw ? "English Version" : "Version ya Kiswahili"}
          </button>

          <div className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.22em] text-center sm:text-right">
            {isSw ? `Somo la ${step - 1}` : `Lesson ${step - 1}`}
          </div>
        </div>
      )}

      {/* Main Container */}
      <div
        className={`w-full transition-all duration-700 ${
          step === 1
            ? ""
            : "bg-white rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] border border-slate-100 shadow-2xl shadow-blue-900/5 overflow-hidden"
        }`}
      >
        <div className={step === 1 ? "p-0" : "p-5 sm:p-8 md:p-10 lg:p-12"}>
          <EmailContent
            step={step}
            setStep={setStep}
            lang={lang}
            setLang={setLang}
          />
        </div>

        {/* Navigation Controls */}
        {step > 1 && (
          <div className="px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 bg-slate-50/70 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <button
                onClick={() => setStep(step - 1)}
                className="w-full sm:w-auto font-black text-slate-400 text-xs sm:text-sm hover:text-blue-600 transition tracking-[0.18em] uppercase text-left"
              >
                {isSw ? "← Rudi" : "← Back"}
              </button>

              {step < totalSteps && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="w-full sm:w-auto bg-[#1a73e8] text-white px-6 sm:px-10 lg:px-12 py-3.5 sm:py-4 rounded-2xl font-black text-xs sm:text-sm shadow-xl shadow-blue-200 hover:brightness-110 active:scale-95 transition tracking-[0.14em] uppercase"
                >
                  {isSw ? "Endelea →" : "Next →"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailGuide;