import React from "react";

const Chapter2 = ({ lang }) => {
  const isSw = lang === "sw";

  const passwordTable = [
    { type: isSw ? "Jina lako" : "Your name", ex: "amina", status: isSw ? "HATARI SANA" : "VERY DANGEROUS", color: "bg-red-50 text-red-700" },
    { type: isSw ? "Tarehe ya kuzaliwa" : "Date of birth", ex: "01012000", status: isSw ? "HATARI SANA" : "VERY DANGEROUS", color: "bg-red-50 text-red-700" },
    { type: isSw ? "Maneno rahisi" : "Simple words", ex: "password123", status: isSw ? "HATARI SANA" : "VERY DANGEROUS", color: "bg-red-50 text-red-700" },
    { type: isSw ? "Mchanganyiko imara" : "Strong mix", ex: "MyDog@Moshi!9", status: isSw ? "SALAMA SANA" : "VERY SAFE", color: "bg-green-50 text-green-700" },
    { type: isSw ? "Sentensi fupi" : "Short sentence", ex: "Ninapenda$Kahawa2025", status: isSw ? "SALAMA SANA" : "VERY SAFE", color: "bg-green-50 text-green-700" },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          📧 {isSw ? "Sura 2" : "Chapter 2"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-700 leading-tight">
          {isSw ? "Umuhimu wa Email, IMEI, na Taarifa za Simu" : "Importance of Email, IMEI, and Phone Info"}
        </h2>
        <p className="text-slate-500 text-sm italic">
          {isSw ? "Kuelewa vitambulisho vya kidigitali vya simu yako." : "Understanding your phone's digital identity."}
        </p>
      </div>

      {/* Email section */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "2.1 Email — Roho ya Simu ya Kisasa" : "2.1 Email — The Soul of a Modern Phone"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Email si barua pepe tu. Kwenye simu ya kisasa ya Android, email ndiyo 'akili' ya simu — inaunganisha kila kitu."
            : "Email is more than messages. On a modern Android phone, email is the 'brain' — it connects everything."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: "🛒", t: isSw ? "Google Play Store — Huwezi kupakua programu bila email" : "Google Play Store — Can't download apps without email" },
            { icon: "💬", t: isSw ? "WhatsApp backup — Mazungumzo yako yanahifadhiwa kupitia email" : "WhatsApp backup — Your chats are saved through your email" },
            { icon: "📸", t: isSw ? "Google Photos — Picha zako zote zinahifadhiwa kupitia email" : "Google Photos — All your photos backed up through email" },
            { icon: "🔍", t: isSw ? "Find My Device — Kutafuta simu iliyopotea kunafanywa kupitia email" : "Find My Device — Locating a lost phone goes through email" },
            { icon: "🔑", t: isSw ? "Account recovery — Akaunti yoyote ikidukuliwa, email ndiyo njia ya kurejesha" : "Account recovery — If any account is hacked, email is the recovery path" },
            { icon: "⚠️", t: isSw ? "Tatizo kubwa: Watu wengi hawajui email iliyowekwa kwenye simu yao!" : "Big problem: Many people don't know the email on their own phone!" },
          ].map((item, i) => (
            <div key={i} className={`flex items-start gap-3 rounded-xl p-4 ${i === 5 ? "bg-red-50 border border-red-200 sm:col-span-2" : "bg-white border border-slate-200 shadow-sm"}`}>
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className={`text-sm font-semibold leading-relaxed ${i === 5 ? "text-red-800" : "text-slate-700"}`}>{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Password table */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "2.2 Password Imara — Ngome ya Akaunti Yako" : "2.2 Strong Password — Your Account's Fortress"}
        </h3>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5">
            <span>{isSw ? "Aina" : "Type"}</span>
            <span className="text-center">{isSw ? "Mfano" : "Example"}</span>
            <span className="text-right">{isSw ? "Hali" : "Status"}</span>
          </div>
          {passwordTable.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 items-center px-4 py-3 border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <span className="text-xs font-bold text-slate-700">{row.type}</span>
              <span className="text-center font-mono text-xs text-slate-600 break-all">{row.ex}</span>
              <span className={`text-right text-[10px] font-bold px-2 py-1 rounded-full ${row.color}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMEI deep dive */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "2.3 IMEI kwa Kina" : "2.3 IMEI In Depth"}
        </h3>
        <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            {isSw
              ? "IMEI ya tarakimu 15 inatambua simu yako peke yake duniani. Mtandao wa simu unaona IMEI hii na inaweza kutumika kuzuia simu iliyoibiwa isifanye kazi."
              : "The 15-digit IMEI uniquely identifies your phone worldwide. Mobile networks see this IMEI and can use it to block a stolen phone from working."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "📞", t: isSw ? "Piga *#06# — namba itaonekana mara moja" : "Dial *#06# — number appears immediately" },
              { icon: "🔢", t: isSw ? "Simu nyingi za kisasa zina IMEI mbili (dual SIM) — hifadhi zote mbili" : "Modern phones often have two IMEIs (dual SIM) — save both" },
              { icon: "🚔", t: isSw ? "Polisi wanaweza omba mtandao kuzuia simu kwa kutumia IMEI" : "Police can ask carriers to block a phone using the IMEI" },
              { icon: "💾", t: isSw ? "Hifadhi IMEI: kwenye karatasi, picha, na email yako mwenyewe" : "Save IMEI: on paper, in a photo, and emailed to yourself" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <p className="text-sm text-slate-300 leading-relaxed">{item.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)",backgroundSize:"20px 20px"}} />
        <div className="relative z-10 space-y-3">
          <h4 className="font-extrabold text-base sm:text-lg">✅ {isSw ? "Muhtasari wa Sura 2" : "Chapter 2 Summary"}</h4>
          <ul className="space-y-1.5 text-teal-100 text-sm">
            {(isSw
              ? ["Jua email yako na password yake — hii ni msingi wa kila kitu", "Hifadhi IMEI katika maeneo matatu tofauti", "Weka box na risiti mahali salama daima", "Tumia password imara — si jina wala tarehe ya kuzaliwa"]
              : ["Know your email and password — this is the foundation of everything", "Save your IMEI in three different places", "Store box and receipt in a safe place", "Use a strong password — not your name or date of birth"]
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

export default Chapter2;