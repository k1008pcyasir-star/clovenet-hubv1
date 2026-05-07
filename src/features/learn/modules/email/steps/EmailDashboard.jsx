import React from "react";

const EmailDashboard = ({ onStart, lang, setLang }) => {
  const isSw = lang === "sw";

  const modules = [
    {
      id: "basics",   icon: "📧",
      title: isSw ? "Email Basics"      : "Email Basics",
      desc:  isSw ? "Maana ya email, muundo rasmi, na mifano ya anwani sahihi."
                  : "Meaning of email, official structure and address examples.",
    },
    {
      id: "create",   icon: "🧾",
      title: isSw ? "Create Gmail"      : "Create Gmail",
      desc:  isSw ? "Mwongozo wa hatua kwa hatua wa kufungua akaunti ya Gmail."
                  : "Step-by-step guide to opening a Gmail account.",
    },
    {
      id: "read",     icon: "📥",
      title: isSw ? "Read Email"        : "Read Email",
      desc:  isSw ? "Kuelewa Inbox, Primary, Social, Spam, na Outbox."
                  : "Understanding Inbox, Primary, Social, Spam, and Outbox.",
    },
    {
      id: "writing",  icon: "✍️",
      title: isSw ? "Writing Guide"     : "Writing Guide",
      desc:  isSw ? "Greeting, Introduction, Body, Closing, na Signature."
                  : "Greeting, Introduction, Body, Closing, and Signature.",
    },
    {
      id: "attach",   icon: "📎",
      title: isSw ? "Attach Files"      : "Attach Files",
      desc:  isSw ? "Jinsi ya kuunganisha CV, vyeti, na nyaraka za PDF."
                  : "How to attach CVs, certificates, and PDF documents.",
    },
    {
      id: "practice", icon: "🛠️",
      title: isSw ? "Practice & Quiz"   : "Practice & Quiz",
      desc:  isSw ? "Mazoezi ya kuandika email na chemsha bongo."
                  : "Writing practice and skills quiz.",
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-12">

      {/* Language switcher */}
      <div className="flex justify-end">
        <button
          onClick={() => setLang(lang === "sw" ? "en" : "sw")}
          className="text-xs font-bold px-4 py-2 border border-slate-200 rounded-full hover:border-teal-400 hover:text-teal-600 transition uppercase tracking-wider bg-white shadow-sm active:scale-95 cursor-pointer"
        >
          {isSw ? "Switch to English" : "Badili kwenda Kiswahili"}
        </button>
      </div>

      {/* Hero heading */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-2">
          📚 {isSw ? "Kozi ya Barua Pepe" : "Email Course"}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {isSw ? (
            <>Jifunze Kutumia <span className="text-teal-600">Barua Pepe</span></>
          ) : (
            <>Learn How to Use <span className="text-teal-600">Email</span></>
          )}
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {isSw
            ? "Mfumo wa kujifunza hatua kwa hatua unaomsaidia mwanafunzi kuelewa namna ya kutuma barua pepe za kazi na kuandika kwa ufasaha."
            : "A step-by-step learning system helping students understand how to send professional emails and write fluently."}
        </p>
      </div>

      {/* Goal card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="space-y-3">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-widest">
              {isSw ? "Lengo la Mfumo" : "System Goal"}
            </p>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
              {isSw
                ? "Kusaidia vijana na wanafunzi kutumia barua pepe kitaalamu kwa ajili ya fursa za ajira."
                : "Helping youth and students use email professionally for career opportunities."}
            </p>
          </div>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed sm:border-l sm:border-slate-200 sm:pl-8">
            {isSw
              ? "Umeandaliwa kwa ajili ya watu wenye low digital literacy. Tunatumia Kiswahili rahisi huku tukifundisha maneno muhimu ya kiofisi."
              : "Designed for individuals with low digital literacy. We use simple Swahili while teaching essential professional terms."}
          </p>
        </div>
      </div>

      {/* Modules section */}
      <div>
        <div className="border-l-4 border-teal-600 pl-4 mb-6">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-snug">
            {isSw
              ? "Modules utakazojifunza kupitia mfumo huu"
              : "Modules you will learn through this system"}
          </h2>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
            {isSw ? "Masomo 11 ya kina" : "11 in-depth lessons"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div
              key={m.id}
              className="group p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-md hover:border-teal-200 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center text-2xl mb-4 transition-colors">
                {m.icon}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-1.5 group-hover:text-teal-700 transition-colors">
                {m.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div className="text-center pb-4">
        <button
          onClick={onStart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-sm sm:text-base transition cursor-pointer active:scale-[0.98] shadow-lg shadow-teal-100"
        >
          <span>{isSw ? "Anza Safari ya Mafanikio" : "Start Your Success Journey"}</span>
          <span className="text-lg">→</span>
        </button>
      </div>

    </div>
  );
};

export default EmailDashboard;