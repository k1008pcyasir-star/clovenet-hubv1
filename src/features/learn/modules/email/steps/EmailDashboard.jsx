import React from "react";

const EmailDashboard = ({ onStart, lang, setLang }) => {
  const isSw = lang === "sw";

  const modules = [
    {
      id: "basics",
      icon: "📧",
      title: isSw ? "Email Basics" : "Email Basics",
      desc: isSw
        ? "Maana ya email, muundo rasmi, na mifano ya anwani sahihi."
        : "Meaning of email, official structure and address examples.",
    },
    {
      id: "create",
      icon: "🧾",
      title: isSw ? "Create Gmail" : "Create Gmail",
      desc: isSw
        ? "Mwongozo wa hatua kwa hatua wa kufungua akaunti ya Gmail."
        : "Step-by-step guide to opening a Gmail account.",
    },
    {
      id: "read",
      icon: "📥",
      title: isSw ? "Read Email" : "Read Email",
      desc: isSw
        ? "Kuelewa Inbox, Primary, Social, Spam, na Outbox."
        : "Understanding Inbox, Primary, Social, Spam, and Outbox.",
    },
    {
      id: "writing",
      icon: "✍️",
      title: isSw ? "Writing Guide" : "Writing Guide",
      desc: isSw
        ? "Greeting, Introduction, Body, Closing, na Signature."
        : "Greeting, Introduction, Body, Closing, and Signature.",
    },
    {
      id: "attach",
      icon: "📎",
      title: isSw ? "Attach Files" : "Attach Files",
      desc: isSw
        ? "Jinsi ya kuunganisha CV, vyeti, na nyaraka za PDF."
        : "How to attach CVs, certificates, and PDF documents.",
    },
    {
      id: "practice",
      icon: "🛠️",
      title: isSw ? "Practice & Quiz" : "Practice & Quiz",
      desc: isSw
        ? "Mazoezi ya kuandika email na chemsha bongo."
        : "Writing practice and skills quiz.",
    },
  ];

  return (
    <div className="animate-in fade-in duration-1000 max-w-6xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 font-rubik">
      {/* Language Switcher */}
      <div className="flex justify-end mb-6 sm:mb-8 lg:mb-10">
        <button
          onClick={() => {
            const nextLang = lang === "sw" ? "en" : "sw";
            setLang(nextLang);
          }}
          className="text-[10px] sm:text-xs font-black px-4 sm:px-6 py-2 border-2 border-slate-200 rounded-full hover:border-[#1a73e8] hover:text-[#1a73e8] transition-all uppercase tracking-[0.18em] bg-white shadow-sm active:scale-95"
        >
          {isSw ? "Switch to English" : "Badili kwenda Kiswahili"}
        </button>
      </div>

      {/* Heading Section */}
      <div className="text-center mb-12 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
          {isSw ? (
            <>
              JIFUNZE KUTUMIA{" "}
              <span className="text-[#1a73e8]">BARUA PEPE (EMAIL)</span>
            </>
          ) : (
            <>
              LEARN HOW TO USE{" "}
              <span className="text-[#1a73e8]">EMAIL SERVICES</span>
            </>
          )}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium px-2 sm:px-4">
          {isSw
            ? "Mfumo wa kujifunza hatua kwa hatua unaomsaidia mwanafunzi kuelewa namna ya kutuma barua pepe za kazi na kuandika kwa ufasaha."
            : "A step-by-step learning system helping students understand how to send professional emails and write fluently."}
        </p>
      </div>

      {/* System Goal Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-14 lg:mb-16 shadow-sm">
        <div className="relative z-10 grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-[#1a73e8] text-[10px] sm:text-xs font-black uppercase tracking-[0.28em]">
              {isSw ? "Lengo la Mfumo" : "System Goal"}
            </h3>

            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
              {isSw
                ? "Kusaidia vijana na wanafunzi kutumia barua pepe kitaalamu kwa ajili ya fursa za ajira."
                : "Helping youth and students use email professionally for career opportunities."}
            </p>
          </div>

          <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base md:border-l border-slate-300 md:pl-8 lg:pl-10">
            {isSw
              ? "Umeandaliwa kwa ajili ya watu wenye low digital literacy. Tunatumia Kiswahili rahisi huku tukifundisha maneno muhimu ya kiofisi yanayotumika kimataifa."
              : "Designed for individuals with low digital literacy. We use simple Swahili while teaching essential international professional terms."}
          </p>
        </div>
      </div>

      {/* Modules Intro */}
      <div className="mb-6 sm:mb-8 pl-4 border-l-4 border-[#1a73e8]">
        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight leading-snug">
          {isSw
            ? "Hapa chini ni modules kuu utakazojifunza kupitia mfumo huu"
            : "Below are the main modules you will learn through this system"}
        </h2>

        <p className="text-slate-500 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mt-2">
          {isSw ? "Gundua kila hatua hapa" : "Explore every step here"}
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-16 lg:mb-20">
        {modules.map((m) => (
          <div
            key={m.id}
            className="p-6 sm:p-7 lg:p-8 bg-white border border-slate-100 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-5 sm:mb-6 group-hover:bg-[#1a73e8] group-hover:text-white transition-all">
              {m.icon}
            </div>

            <h4 className="text-base sm:text-lg font-black text-slate-800 mb-2 uppercase tracking-wide leading-snug">
              {m.title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
              {m.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Main Action Button */}
      <div className="text-center pb-8 sm:pb-12 lg:pb-16">
        <button
          onClick={onStart}
          className="w-full sm:w-auto bg-[#1a73e8] text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-5 rounded-[20px] sm:rounded-[24px] font-black text-sm sm:text-base lg:text-lg shadow-2xl shadow-blue-200 hover:bg-[#1557b0] active:scale-95 transition-all uppercase tracking-[0.14em] inline-flex items-center justify-center gap-3 sm:gap-4"
        >
          <span>
            {isSw ? "Anza Safari ya Mafanikio" : "Start Your Success Journey"}
          </span>
          <span className="text-xl sm:text-2xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default EmailDashboard;