import React, { useState } from "react";

const SafetyChecklist = ({ lang }) => {
  const isSw = lang === "sw";

  const items = [
    {
      id: "email",
      icon: "📧",
      title: isSw ? "Nina email ninayoijua na ninakumbuka password yake" : "I know my email and remember its password",
      desc: isSw ? "Msingi wa kila kitu. Bila email unayoijua, usalama wako ni mdogo sana." : "The foundation of everything. Without an email you know, your security is very weak.",
    },
    {
      id: "pin",
      icon: "🔒",
      title: isSw ? "Nimeweka PIN au fingerprint kwenye simu yangu" : "I have set a PIN or fingerprint on my phone",
      desc: isSw ? "Screen lock inazuia mtu asipate simu yako bila ruhusa yako." : "Screen lock prevents anyone from accessing your phone without permission.",
    },
    {
      id: "imei",
      icon: "📱",
      title: isSw ? "Nimehifadhi IMEI namba ya simu yangu mahali salama" : "I have saved my phone's IMEI number somewhere safe",
      desc: isSw ? "Piga *#06# sasa hivi na uandike namba. Pia piga picha." : "Dial *#06# right now and write down the number. Also take a photo.",
    },
    {
      id: "box",
      icon: "📦",
      title: isSw ? "Nimehifadhi box na risiti ya simu yangu" : "I have kept my phone box and purchase receipt",
      desc: isSw ? "Ushahidi wa umiliki wako — weka mahali salama bila kutupa." : "Proof of your ownership — keep safe, never throw away.",
    },
    {
      id: "findmy",
      icon: "🔍",
      title: isSw ? "Nimewasha Find My Device kwenye simu yangu" : "I have turned on Find My Device on my phone",
      desc: isSw ? "Android: Settings → Google → Find My Device → Washa." : "Android: Settings → Google → Find My Device → Turn On.",
    },
    {
      id: "recovery",
      icon: "🔄",
      title: isSw ? "Nimeweka recovery phone/email kwenye akaunti zangu muhimu" : "I have set recovery phone/email on my important accounts",
      desc: isSw ? "Njia ya kupata akaunti yako ukidukuliwa au ukisahau password." : "Your way back in if you're hacked or forget your password.",
    },
    {
      id: "links",
      icon: "🛑",
      title: isSw ? "Sina tabia ya kubonyeza links bila kuzihakikisha kwanza" : "I don't click links without verifying them first",
      desc: isSw ? "Simama, fikiri, thibitisha — kisha bonyeza au usibonyeze." : "Stop, think, verify — then click or don't click.",
    },
    {
      id: "2fa",
      icon: "🔐",
      title: isSw ? "Nimeweka 2FA kwenye Gmail, WhatsApp, na Facebook" : "I have enabled 2FA on Gmail, WhatsApp, and Facebook",
      desc: isSw ? "Safu ya pili ya ulinzi — inafanya udukuzi kuwa vigumu sana." : "Second layer of protection — makes hacking extremely difficult.",
    },
    {
      id: "emergency",
      icon: "📚",
      title: isSw ? "Najua hatua za kuchukua simu ikiibwa au akaunti ikidukuliwa" : "I know what steps to take if my phone is stolen or account is hacked",
      desc: isSw ? "Soma Sura 3, 7, na Emergency Guide tena mpaka unajua kwa moyo." : "Review Chapters 3, 7, and the Emergency Guide until you know them by heart.",
    },
  ];

  const [checked, setChecked] = useState({});
  const total     = items.length;
  const completed = Object.values(checked).filter(Boolean).length;
  const pct       = Math.round((completed / total) * 100);

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          ✅ {isSw ? "Kiambatisho B" : "Appendix B"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          Digital Safety Checklist
        </h2>
        <p className="text-slate-500 text-sm">
          {isSw
            ? "Tumia orodha hii kujua uko wapi katika usalama wako wa kidigitali. Weka alama kwenye kila ulichokifanya."
            : "Use this checklist to know where you stand in your digital safety. Check off everything you've done."}
        </p>
      </div>

      {/* Progress */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-slate-700">
            {isSw ? "Maendeleo Yako" : "Your Progress"}
          </span>
          <span className={`text-lg font-extrabold ${pct === 100 ? "text-green-600" : pct >= 50 ? "text-amber-600" : "text-slate-500"}`}>
            {completed}/{total}
          </span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${pct === 100 ? "bg-green-500" : pct >= 50 ? "bg-amber-500" : "bg-teal-500"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <p className="text-green-600 text-sm font-bold mt-3 text-center">
            🎉 {isSw ? "Hongera! Umekamilisha orodha nzima — uko salama!" : "Congratulations! You've completed the full checklist — you're well protected!"}
          </p>
        )}
      </div>

      {/* Checklist items */}
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggle(item.id)}
            className={`flex items-start gap-4 rounded-2xl border p-4 sm:p-5 cursor-pointer transition-all duration-200 ${
              checked[item.id] ? "bg-teal-50 border-teal-200" : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition ${
              checked[item.id] ? "bg-teal-600 border-teal-600" : "border-slate-300"
            }`}>
              {checked[item.id] && <span className="text-white text-xs font-bold">✓</span>}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2">
                <span className="text-xl shrink-0">{item.icon}</span>
                <p className={`text-sm font-bold leading-snug ${checked[item.id] ? "text-teal-800" : "text-slate-800"}`}>
                  {item.title}
                </p>
              </div>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed ml-8">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Share tip */}
      <div className="bg-teal-600 rounded-2xl p-5 text-white">
        <p className="text-sm font-bold leading-relaxed">
          🤝 {isSw
            ? "Ukikamilisha items zote — Shiriki orodha hii na marafiki na familia yako ili wao pia wawe salama."
            : "Once you complete all items — Share this checklist with your friends and family so they can be safe too."}
        </p>
      </div>

    </div>
  );
};

export default SafetyChecklist;