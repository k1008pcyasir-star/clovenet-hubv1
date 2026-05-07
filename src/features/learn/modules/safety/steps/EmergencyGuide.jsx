import React from "react";

const EmergencyGuide = ({ lang }) => {
  const isSw = lang === "sw";

  const scenarios = [
    {
      title: isSw ? "🆘 SIMU IMEIBWA AU IMEPOTEA" : "🆘 PHONE STOLEN OR LOST",
      color: "bg-red-900 border-red-700",
      steps: isSw
        ? ["Badili PASSWORD ya Gmail — kwa simu au kompyuta ya mtu mwingine", "Simamisha Mobile Money — piga simu M-Pesa, Airtel Money, au Tigo Pesa", "Tumia Find My Device — android.com/find au appleid.apple.com", "Simamisha SIM card — piga simu mtoa huduma wako", "Badili passwords — WhatsApp, Facebook, Instagram, benki", "Toa taarifa polisi — lete IMEI na risiti ya simu"]
        : ["Change Gmail PASSWORD — using someone else's phone or computer", "Freeze Mobile Money — call M-Pesa, Airtel Money, or Tigo Pesa", "Use Find My Device — android.com/find or appleid.apple.com", "Suspend SIM card — call your mobile carrier", "Change passwords — WhatsApp, Facebook, Instagram, bank", "Report to police — bring IMEI and phone receipt"],
    },
    {
      title: isSw ? "🔓 ACCOUNT IMEDUKULIWA" : "🔓 ACCOUNT HACKED",
      color: "bg-purple-900 border-purple-700",
      steps: isSw
        ? ['Jaribu "Forgot Password" na recovery options mara moja', "Badili password mpya imara ukiingia", "Logout kwenye sessions na devices zote", "Ripoti akaunti: support.google.com / facebook.com/hacked", "Wajulishe marafiki na familia haraka", "Weka 2FA mara baada ya kupata akaunti yako"]
        : ['Try "Forgot Password" with recovery options immediately', "Set a new strong password when you get in", "Log out of all sessions and devices", "Report account: support.google.com / facebook.com/hacked", "Notify friends and family quickly", "Enable 2FA immediately after recovering your account"],
    },
    {
      title: isSw ? "🎣 ULIBONYEZA FAKE LINK" : "🎣 YOU CLICKED A FAKE LINK",
      color: "bg-amber-900 border-amber-700",
      steps: isSw
        ? ["Badili passwords za akaunti zote muhimu — Gmail kwanza", "Toa sessions zisizojulikana kwenye akaunti zako", "Kagua apps za simu — futa yoyote isiyotarajiwa", "Angalia Mobile Money na benki — wasiliana nao kama kuna shida", "Ripoti link ile kwa Google au platform iliyotumiwa"]
        : ["Change passwords for all important accounts — Gmail first", "Remove unknown sessions from your accounts", "Check phone apps — delete any unexpected ones", "Check Mobile Money and bank — contact them if there's a problem", "Report the link to Google or the platform where it was sent"],
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
          📋 {isSw ? "Kiambatisho A" : "Appendix A"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          {isSw ? "Emergency Guide — Msaada wa Haraka" : "Emergency Guide — Quick Help"}
        </h2>
        <p className="text-slate-500 text-sm italic">
          {isSw ? "Kata ukurasa huu au piga picha yake na uuhifadhi mahali rahisi kufikia." : "Screenshot this page and save it somewhere easily accessible."}
        </p>
      </div>

      {/* Screenshot tip */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 flex items-start gap-3">
        <span className="text-2xl shrink-0">📸</span>
        <p className="text-sm text-teal-800 font-bold leading-relaxed">
          {isSw
            ? "USHAURI: Piga screenshot ya ukurasa huu sasa hivi na uihifadhi kwenye simu yako. Ukipata tatizo, utahitaji msaada huu hata kama huna intaneti."
            : "TIP: Take a screenshot of this page right now and save it on your phone. When trouble strikes, you'll need this help even without internet."}
        </p>
      </div>

      {/* Emergency scenarios */}
      <div className="space-y-5">
        {scenarios.map((s, i) => (
          <div key={i} className={`rounded-2xl border overflow-hidden ${s.color}`}>
            <div className="px-5 py-3.5">
              <h3 className="text-base font-extrabold text-white">{s.title}</h3>
            </div>
            <div className="bg-slate-950 px-5 pb-5 pt-3 space-y-2">
              {s.steps.map((step, j) => (
                <div key={j} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-white/10 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {j + 1}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key contacts */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
        <h3 className="font-extrabold text-slate-800 text-base">
          📞 {isSw ? "Nambari Muhimu za Dharura" : "Important Emergency Numbers"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "M-Pesa", num: "*150*00#" },
            { name: "Airtel Money", num: "*150*60#" },
            { name: "android.com/find", num: isSw ? "Tovuti ya Find My Device" : "Find My Device website" },
            { name: "CloveNet Hub", num: "+255 776 378 529" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
              <span className="text-teal-600 font-bold text-sm w-28 shrink-0">{item.name}</span>
              <span className="text-slate-700 font-mono text-xs font-bold">{item.num}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default EmergencyGuide;