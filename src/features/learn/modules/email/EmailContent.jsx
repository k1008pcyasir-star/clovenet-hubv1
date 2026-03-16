import React from "react";
import EmailDashboard from "./steps/EmailDashboard";
import Basics from "./steps/Basics";
import Structure from "./steps/Structure";
import CreateGmail from "./steps/CreateGmail";
import SendEmail from "./steps/SendEmail";
import Attachments from "./steps/Attachments";
import CcBcc from "./steps/CcBcc";
import InboxSections from "./steps/InboxSections";
import ProfessionalWriting from "./steps/ProfessionalWriting";
import EmailSimulator from "./EmailSimulator";
import QuizModule from "./steps/QuizModule";
import Conclusion from "./steps/Conclusion";

const EmailContent = ({ step, setStep, lang, setLang }) => {
  switch (step) {
    case 1:
      return (
        <EmailDashboard
          onStart={() => setStep(2)}
          lang={lang}
          setLang={setLang}
        />
      );

    case 2:
      return <Basics lang={lang} />;

    case 3:
      return <Structure lang={lang} />;

    case 4:
      return <CreateGmail lang={lang} />;

    case 5:
      return <SendEmail lang={lang} />;

    case 6:
      return <Attachments lang={lang} />;

    case 7:
      return <CcBcc lang={lang} />;

    case 8:
      return <InboxSections lang={lang} />;

    case 9:
      return <ProfessionalWriting lang={lang} />;

    case 10:
      return <EmailSimulator lang={lang} />;

    case 11:
      return <QuizModule lang={lang} />;

    case 12:
      return <Conclusion lang={lang} />;

    default:
      return (
        <div className="py-20 text-center">
          <p className="font-black text-slate-300 uppercase tracking-[0.2em] text-xs sm:text-sm">
            Inapakia...
          </p>
        </div>
      );
  }
};

export default EmailContent;