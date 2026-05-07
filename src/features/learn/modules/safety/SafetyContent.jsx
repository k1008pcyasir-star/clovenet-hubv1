import React from "react";
import SafetyDashboard from "./steps/SafetyDashboard";
import Chapter1 from "./steps/Chapter1";
import Chapter2 from "./steps/Chapter2";
import Chapter3 from "./steps/Chapter3";
import Chapter4 from "./steps/Chapter4";
import Chapter5 from "./steps/Chapter5";
import Chapter6 from "./steps/Chapter6";
import Chapter7 from "./steps/Chapter7";
import EmergencyGuide from "./steps/EmergencyGuide";
import SafetyChecklist from "./steps/SafetyChecklist";
import CaseStudies from "./steps/CaseStudies";
import SafetyConclusion from "./steps/SafetyConclusion";

const SafetyContent = ({ step, setStep, lang, setLang }) => {
  switch (step) {
    case 1:  return <SafetyDashboard onStart={() => setStep(2)} lang={lang} setLang={setLang} />;
    case 2:  return <Chapter1 lang={lang} />;
    case 3:  return <Chapter2 lang={lang} />;
    case 4:  return <Chapter3 lang={lang} />;
    case 5:  return <Chapter4 lang={lang} />;
    case 6:  return <Chapter5 lang={lang} />;
    case 7:  return <Chapter6 lang={lang} />;
    case 8:  return <Chapter7 lang={lang} />;
    case 9:  return <EmergencyGuide lang={lang} />;
    case 10: return <SafetyChecklist lang={lang} />;
    case 11: return <CaseStudies lang={lang} />;
    case 12: return <SafetyConclusion lang={lang} setStep={setStep} />;
    default: return <div className="py-20 text-center text-slate-400 text-sm">Inapakia...</div>;
  }
};

export default SafetyContent;