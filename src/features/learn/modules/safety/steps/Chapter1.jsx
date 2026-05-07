import React from "react";

const Chapter1 = ({ lang }) => {
  const isSw = lang === "sw";

  const steps = isSw
    ? [
        { n: "1", t: "Nenda Settings → Google → Add Account → Create new Google Account" },
        { n: "2", t: "Weka jina lako la kweli — litakusaidia kurejesha akaunti" },
        { n: "3", t: "Chagua anwani ya email inayokukumbushwa nawe kwa urahisi" },
        { n: "4", t: "Weka password imara — mchanganyiko wa herufi, nambari, na alama" },
        { n: "5", t: "ANDIKA email na password mahali salama KABLA hujaendelea" },
      ]
    : [
        { n: "1", t: "Go to Settings → Google → Add Account → Create new Google Account" },
        { n: "2", t: "Use your real name — it will help you recover the account" },
        { n: "3", t: "Choose an email address you can easily remember" },
        { n: "4", t: "Set a strong password — mix of letters, numbers, and symbols" },
        { n: "5", t: "WRITE DOWN email and password somewhere safe BEFORE continuing" },
      ];

  const lockTypes = [
    { type: "Fingerprint", level: isSw ? "Bora Sana" : "Excellent", color: "text-green-700 bg-green-50", rec: true },
    { type: "Password (12+)", level: isSw ? "Bora Sana" : "Excellent", color: "text-green-700 bg-green-50", rec: true },
    { type: "PIN (6 digits)", level: isSw ? "Nzuri" : "Good", color: "text-teal-700 bg-teal-50", rec: true },
    { type: "Pattern", level: isSw ? "Ya Wastani" : "Average", color: "text-amber-700 bg-amber-50", rec: false },
    { type: isSw ? "Hakuna Lock" : "No Lock", level: isSw ? "HATARI KABISA" : "VERY DANGEROUS", color: "text-red-700 bg-red-50", rec: false },
  ];

  const summary = isSw
    ? ["Email yako mwenyewe", "PIN/fingerprint imewekwa", "IMEI imehifadhiwa", "Box na risiti ziko salama", "Find My Device imewashwa", "Backup inaendelea", "Line imesajiliwa jina lako"]
    : ["Your own email set", "PIN/fingerprint set", "IMEI saved", "Box and receipt stored safely", "Find My Device turned on", "Backup running", "Line registered in your name"];

  return (
    <div className="space-y-8 sm:space-y-10">

      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          📱 {isSw ? "Sura 1" : "Chapter 1"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-700 leading-tight">
          {isSw ? "Ukishanunua Simu Mpya Ufanye Nini?" : "What to Do When You Buy a New Phone"}
        </h2>
        <p className="text-slate-500 text-sm sm:text-base italic">
          {isSw ? "Hatua muhimu za siku ya kwanza — zisizoweza kuachwa." : "Critical first-day steps — never skip these."}
        </p>
      </div>

      {/* Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <span className="text-xl shrink-0">⚠️</span>
        <p className="text-sm text-amber-800 font-semibold leading-relaxed">
          {isSw
            ? "Hatua zote katika sura hii zifanywe SIKU YA KWANZA ukinunua simu. Ukikawia, unasahau — na usalama wako unakuwa hatarini."
            : "All steps in this chapter must be done on DAY ONE of buying your phone. Delay means forgetting — and your security suffers."}
        </p>
      </div>

      {/* 1.1 Email */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "1.1 Weka Email Yako Mwenyewe" : "1.1 Set Up Your Own Email"}
        </h3>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-xl shrink-0">🚫</span>
          <p className="text-sm text-red-800 font-bold leading-relaxed">
            {isSw
              ? "ONYO: Kamwe usimwache mtu mwingine — hata ndugu yako — aweke EMAIL YAKE kwenye simu yako. Ukifanya hivyo, simu yako na data yako yote vitakuwa chini ya udhibiti wake."
              : "WARNING: Never let anyone else — even a sibling — put THEIR email on your phone. If you do, your phone and all your data will be under their control."}
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4 border-b border-slate-100 last:border-b-0">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                {s.n}
              </div>
              <p className="text-sm text-slate-700 font-semibold leading-relaxed pt-1">{s.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.2 Screen Lock */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "1.2 PIN, Fingerprint, na Screen Lock" : "1.2 PIN, Fingerprint, and Screen Lock"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Screen lock ni mlango wa kwanza wa usalama wa simu yako. Simu isiyo na ufungaji ni kama nyumba isiyo na mlango."
            : "Screen lock is your phone's first line of defense. A phone with no lock is like a house with no door."}
        </p>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5">
            <span>{isSw ? "Aina" : "Type"}</span>
            <span className="text-center">{isSw ? "Kiwango" : "Level"}</span>
            <span className="text-right">{isSw ? "Ushauri" : "Advice"}</span>
          </div>
          {lockTypes.map((l, i) => (
            <div key={i} className={`grid grid-cols-3 items-center px-4 py-3 border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
              <span className="text-sm font-bold text-slate-800">{l.type}</span>
              <span className={`text-center text-xs font-bold px-2 py-1 rounded-full mx-auto ${l.color}`}>{l.level}</span>
              <span className="text-right text-base">{l.rec ? "✅" : l.type.includes("Hakuna") || l.type.includes("No Lock") ? "🚫" : "⚠️"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 1.3 IMEI */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "1.3 IMEI — Namba ya Kitambulisho cha Simu" : "1.3 IMEI — Your Phone's Identity Number"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "IMEI ni namba ya kipekee ya simu yako — kama nambari ya pasipoti. Kila simu duniani ina IMEI tofauti. Inasaidia polisi na mtandao kuzuia simu iliyoibiwa."
            : "IMEI is your phone's unique number — like a passport number. Every phone worldwide has a different IMEI. Police and carriers use it to block stolen phones."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: "📞", t: isSw ? "Piga *#06# — IMEI itaonekana mara moja" : "Dial *#06# — IMEI appears immediately" },
            { icon: "⚙️", t: isSw ? "Settings → About Phone → IMEI Information" : "Settings → About Phone → IMEI Information" },
            { icon: "📦", t: isSw ? "Angalia kwenye box la simu — ipo hapo pia" : "Check your phone box — it's there too" },
            { icon: "💾", t: isSw ? "Hifadhi: iandike, piga picha, tuma kwenye email yako" : "Save it: write it, photo it, email it to yourself" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-teal-50 border border-teal-100 rounded-xl p-4">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm font-semibold text-teal-800 leading-relaxed">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.4 Box & Receipt */}
      <div className="space-y-3">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "1.4 Box la Simu na Risiti — Usizitupe!" : "1.4 Phone Box and Receipt — Don't Throw Them Away!"}
        </h3>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm">
          {[
            { icon: "📦", t: isSw ? "Box la simu: IMEI, model number, serial number, na taarifa za guarantee" : "Phone box: IMEI, model number, serial number, and warranty info" },
            { icon: "🧾", t: isSw ? "Risiti ya ununuzi: Inathibitisha umiliki kwa polisi, duka, na mtandao" : "Purchase receipt: Proves ownership to police, shop, and carrier" },
            { icon: "📁", t: isSw ? "Hifadhi pamoja: Weka box na risiti katika bahasha moja mahali salama" : "Store together: Keep box and receipt in one envelope in a safe place" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm text-slate-700 leading-relaxed">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 1.5 Find My Device */}
      <div className="space-y-3">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "1.5 Find My Device na Backup" : "1.5 Find My Device and Backup"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: "🤖", t: "Android: Settings → Google → Find My Device → ON" },
            { icon: "🍎", t: "iPhone: Settings → [Jina lako] → iCloud → Find My iPhone → ON" },
            { icon: "📸", t: isSw ? "Google Photos: Backup & sync washa — picha zitahifadhiwa otomatiki" : "Google Photos: Enable Backup & sync — photos save automatically" },
            { icon: "💬", t: "WhatsApp: Settings → Chats → Chat Backup → Back Up Now" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)",backgroundSize:"20px 20px"}} />
        <div className="relative z-10 space-y-3">
          <h4 className="font-extrabold text-base sm:text-lg">✅ {isSw ? "Muhtasari wa Sura 1" : "Chapter 1 Summary"}</h4>
          <ul className="space-y-1.5">
            {summary.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-teal-100">
                <span className="text-teal-300 shrink-0 font-bold">({i + 1})</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Chapter1;