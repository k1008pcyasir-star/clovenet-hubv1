import { useState } from "react";
import AjiraRegistrationCheck from "./AjiraRegistrationCheck";
import AjiraProfileSimulator from "./AjiraProfileSimulator";
import AjiraFinalResult from "./AjiraFinalResult";

export default function AjiraPortalFlow() {
  const [step, setStep] = useState(1);
  const [registrationScore, setRegistrationScore] = useState(0);
  const [profileScore, setProfileScore] = useState(0);

  return (
    <div className="space-y-10">

      <div className="text-sm text-gray-500">
        Step {step} of 3
      </div>

      {step === 1 && (
        <>
          <AjiraRegistrationCheck
            setRegistrationScore={setRegistrationScore}
          />
          <div className="flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg"
            >
              Endelea
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <AjiraProfileSimulator
            setProfileScore={setProfileScore}
          />
          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-2 border rounded-lg"
            >
              Rudi
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg"
            >
              Endelea
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <AjiraFinalResult
          registrationScore={registrationScore}
          profileScore={profileScore}
        />
      )}

    </div>
  );
}