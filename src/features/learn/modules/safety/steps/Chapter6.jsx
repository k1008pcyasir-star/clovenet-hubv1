import React from "react";

const Chapter6 = ({ lang }) => {
  const isSw = lang === "sw";

  const twoFAAccounts = [
    { app: "Gmail",     how: "myaccount.google.com → Security → 2-Step Verification", time: "3-5 dak" },
    { app: "WhatsApp",  how: "Settings → Account → Two-step verification → Enable",    time: "2 dak" },
    { app: "Facebook",  how: "Settings → Security and Login → Two-Factor Authentication", time: "3-5 dak" },
    { app: "Instagram", how: "Settings → Account → Two-Factor Authentication",           time: "2-3 dak" },
  ];

  const checkSessions = [
    { app: "Gmail",     path: "myaccount.google.com → Security → Your Devices" },
    { app: "WhatsApp",  path: "Settings → Linked Devices" },
    { app: "Facebook",  path: "Settings → Security and Login → Where You're Logged In" },
    { app: "Instagram", path: "Settings → Security → Login Activity" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold border border-purple-100">
          🔐 {isSw ? "Sura 6" : "Chapter 6"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-700 leading-tight">
          {isSw ? "Account Safety — Kulinda Akaunti Zako" : "Account Safety — Protecting Your Accounts"}
        </h2>
        <p className="text-slate-500 text-sm italic">
          {isSw ? "Akaunti yako ni mlango wako wa kidigitali — ilinde vizuri." : "Your account is your digital gateway — guard it well."}
        </p>
      </div>

      {/* 2FA explanation */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "6.1 Two-Factor Authentication (2FA)" : "6.1 Two-Factor Authentication (2FA)"}
        </h3>
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5 space-y-3">
          <p className="text-sm text-teal-800 font-bold leading-relaxed">
            💡 {isSw
              ? "2FA inahitaji uthibitisho wa pande mbili kabla ya kuingia kwenye akaunti yako. Hata mtu akijua password yako — bado ataombwa nambari ya pili kutoka kwenye simu yako. Hii inafanya udukuzi kuwa vigumu mara elfu zaidi."
              : "2FA requires verification from two sides before accessing your account. Even if someone knows your password — they'll still need a second code from your phone. This makes hacking thousands of times harder."}
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5">
            <span>{isSw ? "Akaunti" : "Account"}</span>
            <span className="text-center">{isSw ? "Jinsi ya Kuweka" : "How to Enable"}</span>
            <span className="text-right">{isSw ? "Muda" : "Time"}</span>
          </div>
          {twoFAAccounts.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 items-start gap-2 px-4 py-3 border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <span className="text-sm font-extrabold text-teal-700">{row.app}</span>
              <span className="text-xs text-slate-600 text-center leading-relaxed">{row.how}</span>
              <span className="text-xs font-bold text-green-600 text-right">{row.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Password management */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "6.2 Usimamizi Bora wa Passwords" : "6.2 Best Password Practices"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(isSw
            ? [
                { icon: "🔑", ok: true,  t: "Password tofauti kwa kila akaunti — Gmail moja, WhatsApp nyingine" },
                { icon: "💬", ok: true,  t: '"Passphrase": "NinapendaChaiBariidi2025!" — rahisi kukumbuka lakini imara' },
                { icon: "🔄", ok: true,  t: "Badili passwords mara kwa mara — angalau kila miezi sita" },
                { icon: "📝", ok: false, t: "Usihifadhi passwords kwenye notes wazi za simu" },
                { icon: "👥", ok: false, t: "Usishiriki passwords na mtu yeyote — hata unaomwamini" },
              ]
            : [
                { icon: "🔑", ok: true,  t: "Different password for each account — one for Gmail, another for WhatsApp" },
                { icon: "💬", ok: true,  t: "Passphrase: \"ILoveColdTea2025!\" — easy to remember but strong" },
                { icon: "🔄", ok: true,  t: "Change passwords regularly — at least every six months" },
                { icon: "📝", ok: false, t: "Don't save passwords in plain notes on your phone" },
                { icon: "👥", ok: false, t: "Don't share passwords with anyone — even people you trust" },
              ]
          ).map((item, i) => (
            <div key={i} className={`flex items-start gap-3 rounded-xl p-4 border ${item.ok ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
              <span className="text-xl shrink-0">{item.icon}</span>
              <div className="flex items-start gap-2">
                <span className={`font-bold text-sm shrink-0 ${item.ok ? "text-green-600" : "text-red-500"}`}>{item.ok ? "✓" : "✗"}</span>
                <p className={`text-sm font-semibold leading-relaxed ${item.ok ? "text-green-800" : "text-red-800"}`}>{item.t}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Check sessions */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "6.3 Angalia Sessions na Devices" : "6.3 Check Sessions and Devices"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Mara kwa mara, angalia devices na sessions zilizoingia kwenye akaunti zako. Hii inakusaidia kutambua udukuzi mapema."
            : "Regularly check which devices and sessions are logged into your accounts. This helps you detect hacking early."}
        </p>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {checkSessions.map((row, i) => (
            <div key={i} className={`flex items-start gap-4 px-5 py-3 border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <span className="text-sm font-extrabold text-teal-700 w-20 shrink-0 pt-0.5">{row.app}</span>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed">{row.path}</p>
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
              ? ["Weka 2FA kwenye akaunti zako zote — Gmail, WhatsApp, Facebook, Instagram", "Tumia passwords tofauti na imara kwa kila akaunti", "Angalia sessions mara kwa mara na toa devices usizozijua", "Badili passwords kila miezi sita angalau"]
              : ["Enable 2FA on all your accounts — Gmail, WhatsApp, Facebook, Instagram", "Use different strong passwords for each account", "Check sessions regularly and remove unknown devices", "Change passwords at least every six months"]
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

export default Chapter6;