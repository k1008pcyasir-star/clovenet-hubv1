import React from "react";

const Chapter3 = ({ lang }) => {
  const isSw = lang === "sw";

  const urgentSteps = isSw
    ? [
        { icon: "🔑", t: "Badili password ya Gmail — Nenda accounts.google.com → Security → Password" },
        { icon: "💰", t: "Simamisha Mobile Money — Piga simu M-Pesa, Airtel Money, au Tigo Pesa" },
        { icon: "🔍", t: "Tumia Find My Device — android.com/find au appleid.apple.com" },
        { icon: "📵", t: "Simamisha SIM card — Piga simu mtoa huduma wako wa simu" },
        { icon: "🔐", t: "Badili passwords za akaunti muhimu — WhatsApp, Facebook, Instagram, benki" },
      ]
    : [
        { icon: "🔑", t: "Change Gmail password — Go to accounts.google.com → Security → Password" },
        { icon: "💰", t: "Freeze Mobile Money — Call M-Pesa, Airtel Money, or Tigo Pesa" },
        { icon: "🔍", t: "Use Find My Device — android.com/find or appleid.apple.com" },
        { icon: "📵", t: "Suspend SIM card — Call your mobile carrier" },
        { icon: "🔐", t: "Change passwords for important accounts — WhatsApp, Facebook, Instagram, bank" },
      ];

  const findMyActions = [
    {
      action: "Play Sound",
      desc: isSw ? "Simu igome kwa dakika 5 hata ikiwa kimya" : "Phone rings for 5 mins even on silent",
      when: isSw ? "Ukifikiri simu iko karibu" : "When you think phone is nearby",
      safe: true,
    },
    {
      action: "Secure Device",
      desc: isSw ? "Funga simu kwa PIN mpya" : "Lock phone with a new PIN",
      when: isSw ? "Kabla simu haitumiki vibaya" : "Before phone is misused",
      safe: true,
    },
    {
      action: "Erase Device",
      desc: isSw ? "Futa DATA YOTE kwa mbali — haiwezi kurudishwa" : "Wipe ALL DATA remotely — cannot be undone",
      when: isSw ? "Simu haiwezekani kupatikana" : "Phone is unrecoverable",
      safe: false,
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
          🆘 {isSw ? "Sura 3" : "Chapter 3"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-red-700 leading-tight">
          {isSw ? "Simu Ikiibwa au Ikipotea" : "Stolen or Lost Phone — Act Now"}
        </h2>
        <p className="text-slate-500 text-sm italic">
          {isSw ? "Kila dakika inahesabu — chukua hatua sasa hivi." : "Every minute counts — take action immediately."}
        </p>
      </div>

      {/* Golden rule */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5">
        <h4 className="font-extrabold text-amber-800 text-sm mb-2">⚡ {isSw ? "KANUNI YA DHAHABU" : "GOLDEN RULE"}</h4>
        <p className="text-sm text-amber-700 leading-relaxed font-semibold">
          {isSw
            ? "Simu ikiibwa, usifikirie kwanza kwenda dukani kununua simu mpya. Fikiria kwanza kulinda pesa zako, akaunti zako, na data yako. Mambo ya nyenzo yanaweza kubadilishwa."
            : "When your phone is stolen, don't think about buying a replacement first. Think first about protecting your money, accounts, and data. Physical things can be replaced."}
        </p>
      </div>

      {/* Urgent steps */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          🚨 {isSw ? "Hatua za Haraka (Ndani ya Dakika 15 za Kwanza)" : "Urgent Steps (Within First 15 Minutes)"}
        </h3>
        <p className="text-slate-500 text-sm">{isSw ? "Fanya hivi HARAKA kwa simu au kompyuta ya mtu mwingine:" : "Do this IMMEDIATELY using someone else's phone or computer:"}</p>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {urgentSteps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4 border-b border-slate-100 last:border-b-0">
              <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <div className="flex items-start gap-2 flex-1">
                <span className="text-xl shrink-0">{s.icon}</span>
                <p className="text-sm text-slate-700 font-semibold leading-relaxed">{s.t}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Later steps */}
      <div className="space-y-3">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          🕐 {isSw ? "Hatua za Kati (Baada ya Saa Chache)" : "Later Steps (After a Few Hours)"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(isSw
            ? ["Toa taarifa polisi — lete IMEI number, risiti, na taarifa za simu", "Angalia miamala ya M-Pesa na benki — kagua historia yako", "Angalia Gmail kwa shughuli za ajabu — Security → Recent Security Activity", "Jibu maswali ya usalama upya kwenye akaunti zako"]
            : ["Report to police — bring IMEI, receipt, and phone details", "Check M-Pesa and bank transactions — review your history", "Check Gmail for suspicious activity — Security → Recent Security Activity", "Update security questions on all your accounts"]
          ).map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-teal-600 font-extrabold text-sm shrink-0">{i + 1}.</span>
              <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Find My Device table */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          🔍 {isSw ? "Jinsi ya Kutumia Find My Device" : "How to Use Find My Device"}
        </h3>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5">
            <span>{isSw ? "Kitendo" : "Action"}</span>
            <span className="text-center">{isSw ? "Maelezo" : "Description"}</span>
            <span className="text-right">{isSw ? "Lini" : "When"}</span>
          </div>
          {findMyActions.map((a, i) => (
            <div key={i} className={`grid grid-cols-3 items-start gap-2 px-4 py-3 border-b border-slate-100 last:border-b-0 ${!a.safe ? "bg-red-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <span className={`text-xs font-extrabold ${!a.safe ? "text-red-700" : "text-teal-700"}`}>{a.action}</span>
              <span className="text-xs text-slate-600 text-center leading-relaxed">{a.desc}</span>
              <span className="text-xs text-slate-500 text-right leading-relaxed">{a.when}</span>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-red-800 font-bold">
            ⚠️ {isSw ? '"Erase Device" inafuta data YOTE — haiwezi kurudishwa. Fanya hivi tu ukiwa uhakika kwamba simu haiwezekani kupatikana.' : '"Erase Device" wipes ALL data — cannot be undone. Only do this if you are certain the phone is unrecoverable.'}
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)",backgroundSize:"20px 20px"}} />
        <div className="relative z-10 space-y-3">
          <h4 className="font-extrabold text-base sm:text-lg">✅ {isSw ? "Muhtasari wa Sura 3" : "Chapter 3 Summary"}</h4>
          <ul className="space-y-1.5 text-teal-100 text-sm">
            {(isSw
              ? ["Kila dakika inahesabu — usikawie", "Badili email password KWANZA — kabla ya chochote", "Simamisha mobile money HARAKA", "Tumia Find My Device kupiga sauti au kufunga simu", "Toa taarifa polisi na lete IMEI"]
              : ["Every minute counts — don't delay", "Change email password FIRST — before anything else", "Freeze mobile money IMMEDIATELY", "Use Find My Device to ring or lock the phone", "Report to police and bring your IMEI"]
            ).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-teal-300 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Chapter3;