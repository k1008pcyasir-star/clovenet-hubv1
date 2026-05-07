import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ZanajiraRegistrationCheck from "./ZanajiraRegistrationCheck";
import ZanajiraProfileSimulator from "./ZanajiraProfileSimulator";
import ZanajiraFinalResult from "./ZanajiraFinalResult";

const STEPS = [
  { num: 1, label: "Usajili" },
  { num: 2, label: "Profile" },
  { num: 3, label: "Matokeo" },
];

export default function ZanajiraPortalFlow() {
  const [step, setStep] = useState(1);
  const [registrationScore, setRegistrationScore] = useState(0);
  const [profileScore, setProfileScore] = useState(0);
  const navigate = useNavigate();

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-3xl mx-auto space-y-8">

      {/* Back to portal selection */}
      <button
        onClick={() => navigate("/portal")}
        className="text-sm font-medium text-teal-600 hover:text-teal-700 transition cursor-pointer flex items-center gap-1"
      >
        ← Rudi kwenye Portal Selection
      </button>

      {/* Step indicator */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            ZanAjira Portal
          </span>
          <span className="text-xs font-bold text-teal-600">
            Hatua {step} kati ya 3
          </span>
        </div>
        <div className="flex gap-2">
          {STEPS.map((s) => (
            <div key={s.num} className="flex-1">
              <div className={`h-2 rounded-full transition-all duration-500 ${
                step >= s.num ? "bg-teal-600" : "bg-slate-200"
              }`} />
              <p className={`text-xs mt-1.5 font-semibold text-center ${
                step >= s.num ? "text-teal-600" : "text-slate-400"
              }`}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      {step === 1 && (
        <>
          <ZanajiraRegistrationCheck setRegistrationScore={setRegistrationScore} />
          <div className="flex justify-end">
            <button
              onClick={next}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition active:scale-[0.98] shadow-sm"
            >
              Endelea →
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <ZanajiraProfileSimulator setProfileScore={setProfileScore} />
          <div className="flex justify-between gap-3">
            <button
              onClick={back}
              className="px-5 py-3 border border-slate-300 bg-white text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition active:scale-[0.98]"
            >
              ← Rudi
            </button>
            <button
              onClick={next}
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-semibold transition active:scale-[0.98] shadow-sm"
            >
              Endelea →
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <ZanajiraFinalResult
          registrationScore={registrationScore}
          profileScore={profileScore}
        />
      )}

    </div>
  );
}