import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SafetyConclusion = ({ lang, setStep }) => {
  const navigate = useNavigate();

  const isSw = lang === "sw";

  const [done, setDone] = useState(() => {
    return localStorage.getItem("digitalSafetyCompleted") === "true";
  });

  useEffect(() => {
    localStorage.setItem("digitalSafetyCompleted", done);
  }, [done]);

  const nextSteps = isSw
    ? [
        { icon: "📸", t: "Piga screenshot ya Emergency Guide (Sehemu 9) na ihifadhi" },
        { icon: "✅", t: "Kamilisha Digital Safety Checklist (Sehemu 10) — fanya kila kitu" },
        { icon: "🔐", t: "Weka 2FA kwenye Gmail, WhatsApp, na Facebook leo hii" },
        { icon: "📦", t: "Tafuta box na risiti ya simu yako na viweke mahali salama" },
        { icon: "👥", t: "Shiriki mwongozo huu na marafiki na familia yako" },
      ]
    : [
        { icon: "📸", t: "Screenshot the Emergency Guide (Part 9) and save it" },
        { icon: "✅", t: "Complete the Digital Safety Checklist (Part 10) — do every item" },
        { icon: "🔐", t: "Enable 2FA on Gmail, WhatsApp, and Facebook today" },
        { icon: "📦", t: "Find your phone box and receipt and store them safely" },
        { icon: "👥", t: "Share this guide with your friends and family" },
      ];

  if (done) {
    return (
      <div className="space-y-6 text-center py-8 sm:py-12 animate-in fade-in duration-300">

        <div className="text-6xl">🛡️</div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isSw ? "Asante kwa Kukamilisha!" : "Thank You for Completing This!"}
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            {isSw
              ? "Sasa una msingi imara wa usalama wa kidigitali. Tenda — fanya hatua zote ulizojifunza leo hii."
              : "You now have a solid foundation of digital safety. Act — take all the steps you learned today."}
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-slate-900 rounded-2xl p-5 sm:p-6 text-left">
          <p className="text-sm sm:text-base text-slate-200 font-bold italic leading-relaxed">
            {isSw
              ? '"Usalama wa kidigitali si tukio moja — ni safari inayoendelea. Ujuzi ulioupata leo ni msingi imara wa kukabiliana na changamoto zozote mpya."'
              : '"Digital safety is not a one-time event — it\'s an ongoing journey. The knowledge you gained today is a solid foundation for facing any new challenges."'}
          </p>

          <p className="text-slate-500 text-xs font-bold mt-3">
            — CloveNet Hub, 2025
          </p>
        </div>

        <div className="text-4xl tracking-widest">
          🌟🌟🌟🌟🌟
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">

          <button
            onClick={() => {
              setDone(false);
              setStep(1);
            }}
            className="px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition font-semibold cursor-pointer"
          >
            {isSw ? "🔄 Rudia Mwongozo" : "🔄 Restart Guide"}
          </button>

          <button
            onClick={() => navigate("/learn")}
            className="px-5 py-3 rounded-xl bg-teal-600 text-white hover:bg-teal-700 transition font-semibold cursor-pointer"
          >
            {isSw ? "📚 Rudi Learn Dashboard" : "📚 Back to Learn Dashboard"}
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="space-y-8 sm:space-y-10 animate-in fade-in duration-300">

      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 px-5 sm:px-8 py-8 sm:py-10 text-center">

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative z-10">
          <div className="text-5xl sm:text-6xl mb-3">🛡️</div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {isSw ? "Hongera Sana!" : "Congratulations!"}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-white/85 font-semibold max-w-lg mx-auto leading-relaxed">
            {isSw
              ? "Umekamilisha Mwongozo wa Usalama wa Kidigitali"
              : "You've Completed the Digital Safety Guide"}
          </p>

          <div className="inline-block mt-5 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5">
            <p className="text-xs text-white/70 font-bold uppercase tracking-wider">
              🏅 {isSw ? "Umestahili" : "Certified"}
            </p>

            <p className="text-sm font-extrabold text-white mt-0.5">
              Digital Safety Champion
            </p>
          </div>
        </div>
      </div>

      {/* What you covered */}
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-3">
          {isSw ? "Ulichojifunza" : "What You Covered"}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { v: "7", l: isSw ? "Sura" : "Chapters" },
            { v: "3", l: "Case Studies" },
            { v: "9", l: isSw ? "Hatua za Dharura" : "Emergency Steps" },
            { v: "9", l: isSw ? "Checklist Items" : "Checklist Items" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-extrabold text-teal-600">
                {s.v}
              </div>

              <div className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 sm:p-6">

        <h4 className="text-sm font-bold text-teal-800 mb-4">
          🚀 {isSw ? "Hatua Zako Zifuatazo" : "Your Next Steps"}
        </h4>

        <div className="space-y-3">
          {nextSteps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">

              <div className="w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-base shrink-0">{s.icon}</span>

                <span className="text-sm text-slate-700 font-semibold leading-relaxed">
                  {s.t}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="bg-slate-900 rounded-2xl p-5 sm:p-6">
        <p className="text-sm sm:text-base text-slate-200 font-semibold italic leading-relaxed">
          {isSw
            ? '"Usalama wa kidigitali si tukio moja — ni safari inayoendelea. Shiriki maarifa haya na familia yako, marafiki, na jamii yako. Usalama wa kweli si wa mtu mmoja — ni wa jamii nzima."'
            : '"Digital safety is not a one-time event — it\'s an ongoing journey. Share this knowledge with your family, friends, and community. Real safety isn\'t individual — it\'s communal."'}
        </p>

        <p className="text-slate-500 text-xs font-bold mt-2">
          — CloveNet Hub, 2025
        </p>
      </div>

      {/* Finish */}
      <button
        onClick={() => setDone(true)}
        className="w-full rounded-2xl bg-teal-600 hover:bg-teal-700 text-white px-4 py-4 sm:py-5 text-sm sm:text-base font-bold shadow-lg shadow-teal-100 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        <span>🛡️</span>

        <span>
          {isSw
            ? "Maliza Mwongozo — Niko Tayari!"
            : "Complete Guide — I'm Ready!"}
        </span>
      </button>

    </div>
  );
};

export default SafetyConclusion;