import React from "react";

const SafetyDashboard = ({ onStart, lang, setLang }) => {
  const isSw = lang === "sw";

  const chapters = [
    { icon: "📱", title: isSw ? "Simu Mpya — Hatua za Kwanza" : "New Phone — First Steps" },
    { icon: "📧", title: isSw ? "Email, IMEI & Taarifa za Simu" : "Email, IMEI & Phone Info" },
    { icon: "🆘", title: isSw ? "Simu Ikiibwa au Ikipotea" : "Stolen or Lost Phone" },
    { icon: "🔄", title: isSw ? "Hatari ya Kurenew Line" : "Risks After Renewing Line" },
    { icon: "🎣", title: isSw ? "Fake Links & Online Scams" : "Fake Links & Online Scams" },
    { icon: "🔐", title: isSw ? "Kulinda Akaunti Zako" : "Protecting Your Accounts" },
    { icon: "🛠️", title: isSw ? "Akaunti Ikidukuliwa" : "Hacked Account Recovery" },
  ];

  return (
    <div className="space-y-10 sm:space-y-12">

      {/* Language switcher */}
      <div className="flex justify-end">
        <button
          onClick={() => setLang(lang === "sw" ? "en" : "sw")}
          className="text-xs font-bold px-4 py-2 border border-slate-200 rounded-full hover:border-teal-400 hover:text-teal-600 transition uppercase tracking-wider bg-white shadow-sm cursor-pointer"
        >
          {isSw ? "Switch to English" : "Badili kwenda Kiswahili"}
        </button>
      </div>

      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-2">
          🛡️ {isSw ? "Usalama wa Kidigitali" : "Digital Safety"}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {isSw ? (
            <>Jilinde Kwenye <span className="text-teal-600">Ulimwengu wa Kidigitali</span></>
          ) : (
            <>Stay Safe in the <span className="text-teal-600">Digital World</span></>
          )}
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {isSw
            ? "Mwongozo kamili wa usalama wa kidigitali na utayari wa smartphone kwa vijana na watumiaji wa kawaida Tanzania."
            : "A complete digital safety and smartphone readiness guide for Tanzanian youth and everyday users."}
        </p>
      </div>

      {/* Goal card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <p className="text-teal-600 text-xs font-bold uppercase tracking-widest">
              {isSw ? "Lengo la Mwongozo" : "Guidebook Goal"}
            </p>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
              {isSw
                ? "Ujuzi si nguvu tu — ni usalama."
                : "Knowledge isn't just power — it's safety."}
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              {isSw
                ? "Mtu anayejua cha kufanya simu ikiibwa ana nguvu zaidi ya yule anayemiliki simu ya bei ghali lakini hana elimu."
                : "A person who knows what to do when their phone is stolen is more powerful than one who owns an expensive phone but lacks knowledge."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "7", l: isSw ? "Sura" : "Chapters" },
              { v: "5", l: isSw ? "Viambatisho" : "Appendices" },
              { v: "3", l: isSw ? "Case Studies" : "Case Studies" },
              { v: "8", l: isSw ? "Maswali ya FAQ" : "FAQ Questions" },
            ].map((s, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                <div className="text-xl font-extrabold text-teal-600">{s.v}</div>
                <div className="text-xs text-slate-400 font-semibold mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chapters list */}
      <div>
        <div className="border-l-4 border-teal-600 pl-4 mb-6">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-800">
            {isSw ? "Utakachojifunza" : "What You Will Learn"}
          </h2>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-1">
            {isSw ? "Sura 7 za kina" : "7 in-depth chapters"}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {chapters.map((ch, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4 hover:border-teal-200 hover:bg-teal-50/30 transition">
              <span className="text-2xl shrink-0">{ch.icon}</span>
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Sura {i + 1}</span>
                <p className="text-sm font-bold text-slate-800 leading-snug">{ch.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pb-4">
        <button
          onClick={onStart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-sm sm:text-base transition cursor-pointer active:scale-[0.98] shadow-lg shadow-teal-100"
        >
          🛡️ <span>{isSw ? "Anza Mwongozo" : "Start the Guide"}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default SafetyDashboard;