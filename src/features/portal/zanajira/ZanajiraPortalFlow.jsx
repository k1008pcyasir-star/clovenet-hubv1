import { useState } from "react";
import ZanajiraRegistrationCheck from "./ZanajiraRegistrationCheck";
import ZanajiraProfileSimulator from "./ZanajiraProfileSimulator";
import ZanajiraFinalResult from "./ZanajiraFinalResult";

export default function ZanajiraPortalFlow() {
  const [step, setStep] = useState(1);
  const [registrationScore, setRegistrationScore] = useState(0);
  const [profileScore, setProfileScore] = useState(0);

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  return (
    <div className="space-y-10">

      {/* STEP INDICATOR */}
      <div className="text-sm text-gray-500">
        Step {step} of 3
      </div>

      {step === 1 && (
        <>
          <ZanajiraRegistrationCheck
            setRegistrationScore={setRegistrationScore}
          />
          <div className="flex justify-end">
            <button
              onClick={next}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg"
            >
              Endelea
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <ZanajiraProfileSimulator
            setProfileScore={setProfileScore}
          />
          <div className="flex justify-between">
            <button
              onClick={back}
              className="px-6 py-2 border rounded-lg"
            >
              Rudi
            </button>
            <button
              onClick={next}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg"
            >
              Endelea
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