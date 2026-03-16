import { createContext, useContext, useState, useEffect } from "react";

const GuidedFlowContext = createContext();

export const GuidedFlowProvider = ({ children }) => {
  /* =====================================================
     INITIAL STATES
  ===================================================== */

  const initialReadiness = {
    hasNida: null,
    hasCV: null,
    hasCertificates: null,
    hasEmail: null,
    usedPortalBefore: null,
  };

  const initialDigitalSkills = {
    canUpload: null,
    canConvertPDF: null,
    canResetPassword: null,
  };

  const initialCompletedTools = {
    pdfConverter: false,
    resizePhoto: false,
    mergePdf: false,
    compressPdf: false,
  };

  /* =====================================================
     STATE
  ===================================================== */

  const [goal, setGoal] = useState("");
  const [readiness, setReadiness] = useState(initialReadiness);
  const [digitalSkills, setDigitalSkills] = useState(initialDigitalSkills);
  const [completedTools, setCompletedTools] = useState(initialCompletedTools);
  const [score, setScore] = useState(0);

  /* =====================================================
     RESTORE FROM SESSION
  ===================================================== */

  useEffect(() => {
    const savedData = sessionStorage.getItem("guidedFlowData");

    if (savedData) {
      const parsed = JSON.parse(savedData);

      setGoal(parsed.goal || "");
      setReadiness(parsed.readiness || initialReadiness);
      setDigitalSkills(parsed.digitalSkills || initialDigitalSkills);
      setCompletedTools(parsed.completedTools || initialCompletedTools);
      setScore(parsed.score || 0);
    }
  }, []);

  /* =====================================================
     PERSIST TO SESSION
  ===================================================== */

  useEffect(() => {
    const data = {
      goal,
      readiness,
      digitalSkills,
      completedTools,
      score,
    };

    sessionStorage.setItem("guidedFlowData", JSON.stringify(data));
  }, [goal, readiness, digitalSkills, completedTools, score]);

  /* =====================================================
     SCORE INTELLIGENCE ENGINE (UPGRADED)
  ===================================================== */

  useEffect(() => {

    // 🔥 Intelligence Override Layer
    const adjustedSkills = {
      ...digitalSkills,

      // If user used PDF Converter → skill acquired
      canConvertPDF:
        completedTools.pdfConverter === true
          ? true
          : digitalSkills.canConvertPDF,

      // If user used ANY preparation tool → upload skill acquired
      canUpload:
        completedTools.mergePdf === true ||
        completedTools.compressPdf === true ||
        completedTools.resizePhoto === true
          ? true
          : digitalSkills.canUpload,
    };

    const allValues = [
      ...Object.values(readiness),
      ...Object.values(adjustedSkills),
    ];

    const answered = allValues.filter((v) => v !== null);
    const yesAnswers = answered.filter((v) => v === true);

    if (answered.length > 0) {
      const calculatedScore = Math.round(
        (yesAnswers.length / allValues.length) * 100
      );
      setScore(calculatedScore);
    } else {
      setScore(0);
    }

  }, [readiness, digitalSkills, completedTools]);

  /* =====================================================
     TOOL COMPLETION MARKER
  ===================================================== */

  const markToolComplete = (toolName) => {
    setCompletedTools((prev) => ({
      ...prev,
      [toolName]: true,
    }));
  };

  /* =====================================================
     RESET FLOW
  ===================================================== */

  const resetFlow = () => {
    sessionStorage.removeItem("guidedFlowData");

    setGoal("");
    setReadiness(initialReadiness);
    setDigitalSkills(initialDigitalSkills);
    setCompletedTools(initialCompletedTools);
    setScore(0);
  };

  /* =====================================================
     PROVIDER
  ===================================================== */

  return (
    <GuidedFlowContext.Provider
      value={{
        goal,
        setGoal,
        readiness,
        setReadiness,
        digitalSkills,
        setDigitalSkills,
        completedTools,
        markToolComplete,
        score,
        resetFlow,
      }}
    >
      {children}
    </GuidedFlowContext.Provider>
  );
};

export const useGuidedFlow = () => useContext(GuidedFlowContext);