import React from "react";

const Chapter7 = ({ lang }) => {
  const isSw = lang === "sw";

  const signs = isSw
    ? ["Huwezi kuingia kwenye akaunti yako — password haifanyi kazi", "Marafiki wanasema wanapokea ujumbe wa ajabu kutoka akaunti yako", "Unaona ujumbe, picha, au machapisho usiyoyatuma", "Taarifa za akaunti zimebadilishwa — email ya recovery, namba ya simu", "Unapata SMS za OTP ambazo hukuomba"]
    : ["You can't log into your account — password doesn't work", "Friends say they're receiving strange messages from your account", "You see messages, photos, or posts you didn't send", "Account information was changed — recovery email, phone number", "You're receiving OTP SMS messages you didn't request"];

  const recoverySteps = isSw
    ? [
        { n: "1", t: 'Jaribu "Forgot Password" — tumia recovery email au recovery phone' },
        { n: "2", t: "Badili password mpya imara mara ukiingia — usitumie passwords za zamani" },
        { n: "3", t: "Logout kwenye sessions zote — Gmail: Security → Manage Devices" },
        { n: "4", t: "Angalia na rejesha mabadiliko — email ya recovery, namba iliyobadilishwa" },
        { n: "5", t: "Ripoti akaunti: Gmail: support.google.com — Facebook: facebook.com/hacked" },
        { n: "6", t: 'Wajulishe marafiki haraka — "Akaunti yangu ilidukuliwa, msikubali ombi la pesa"' },
        { n: "7", t: "Weka 2FA MARA MOJA baada ya kupata akaunti yako" },
      ]
    : [
        { n: "1", t: 'Try "Forgot Password" — use your recovery email or phone' },
        { n: "2", t: "Set a new strong password immediately — don't reuse old passwords" },
        { n: "3", t: "Log out of all sessions — Gmail: Security → Manage Devices" },
        { n: "4", t: "Review and revert any changes — recovery email, changed phone number" },
        { n: "5", t: "Report the account: Gmail: support.google.com — Facebook: facebook.com/hacked" },
        { n: "6", t: 'Notify friends immediately — "My account was hacked, don\'t accept money requests from it"' },
        { n: "7", t: "Enable 2FA IMMEDIATELY after recovering your account" },
      ];

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
          🛠️ {isSw ? "Sura 7" : "Chapter 7"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-red-700 leading-tight">
          {isSw ? "Account Ikidukuliwa — Ufanye Nini?" : "Account Hacked — What Should You Do?"}
        </h2>
        <p className="text-slate-500 text-sm italic">
          {isSw ? "Hatua za haraka za kurejesha udhibiti wa akaunti yako." : "Quick steps to regain control of your account."}
        </p>
      </div>

      {/* Warning */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
        <p className="text-sm text-red-800 font-bold leading-relaxed">
          ⚡ {isSw
            ? "Kila dakika unayochelewesha ni dakika inayompa mdukuzi nafasi zaidi ya kutumia akaunti yako, kudanganya marafiki zako, au kuiba taarifa zako."
            : "Every minute you delay gives the hacker more time to use your account, deceive your friends, or steal your information."}
        </p>
      </div>

      {/* Signs of hacking */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          🔍 {isSw ? "7.1 Dalili za Udukuzi wa Akaunti" : "7.1 Signs Your Account Has Been Hacked"}
        </h3>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {signs.map((s, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-3.5 border-b border-slate-100 last:border-b-0">
              <span className="text-red-500 font-extrabold text-sm shrink-0 pt-0.5">⚠</span>
              <p className="text-sm text-slate-700 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recovery steps */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          🔄 {isSw ? "7.2 Hatua za Kurejesha Akaunti" : "7.2 Steps to Recover Your Account"}
        </h3>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {recoverySteps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4 border-b border-slate-100 last:border-b-0">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                {s.n}
              </div>
              <p className="text-sm text-slate-700 font-semibold leading-relaxed pt-1">{s.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* If you can't recover */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          ❓ {isSw ? "7.3 Kama Huwezi Kupata Akaunti Yako" : "7.3 If You Can't Recover Your Account"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(isSw
            ? ["Tumia Identity Verification — Google, Facebook, Instagram wana mchakato huu", "Wasiliana na support ya platform kupitia tovuti rasmi — eleza hali yako", "Onyesha ushahidi wa umiliki: tarehe ya kufungua akaunti, nambari ya zamani", "Subiri na uendelee kujaribu — wakati mwingine inachukua siku chache"]
            : ["Use Identity Verification — Google, Facebook, Instagram all have this process", "Contact the platform's support through the official website — explain your situation", "Show proof of ownership: account creation date, old phone number", "Be patient and keep trying — sometimes it takes a few days"]
          ).map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-teal-600 font-extrabold shrink-0 text-sm">{i + 1}.</span>
              <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)",backgroundSize:"20px 20px"}} />
        <div className="relative z-10 space-y-2">
          <h4 className="font-extrabold text-base sm:text-lg">✅ {isSw ? "Muhtasari" : "Summary"}</h4>
          <ul className="space-y-1.5 text-teal-100 text-sm">
            {(isSw
              ? ["Badili password haraka kwa njia ya 'Forgot Password'", "Logout sessions zote mara moja", "Ripoti akaunti kwenye platform", "Wajulishe marafiki na familia haraka", "Weka 2FA baada ya kupata akaunti yako"]
              : ["Change password quickly using 'Forgot Password'", "Log out of all sessions immediately", "Report the account to the platform", "Notify friends and family quickly", "Enable 2FA after recovering your account"]
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

export default Chapter7;