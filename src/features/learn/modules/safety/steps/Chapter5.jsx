import React from "react";

const Chapter5 = ({ lang }) => {
  const isSw = lang === "sw";

  const redFlags = isSw
    ? [
        { icon: "⏰", flag: "Maneno ya haraka", desc: '"HARAKA!", "LEO TU!", "SAA MOJA TU!" — udanganyifu wa wakati' },
        { icon: "💸", flag: "Pesa nyingi rahisi", desc: '"Tuma 50,000 upate 500,000 kesho" — haiwezekani' },
        { icon: "🤫", flag: "Siri", desc: '"Usimwambie mtu yeyote" — watu wa kweli hawataki siri ya aina hii' },
        { icon: "🔑", flag: "Ombi la OTP au password", desc: "Hakuna mtu halali anayehitaji hizi kutoka kwako" },
        { icon: "🏆", flag: "Zawadi kubwa bila sababu", desc: '"Umeshinda" kwa kitu usichokumbuka kushiriki' },
      ]
    : [
        { icon: "⏰", flag: "Urgency words", desc: '"HURRY!", "TODAY ONLY!", "ONE HOUR LEFT!" — time-pressure fraud' },
        { icon: "💸", flag: "Easy big money", desc: '"Send 50,000 get 500,000 tomorrow" — impossible' },
        { icon: "🤫", flag: "Secrecy", desc: '"Don\'t tell anyone" — real people don\'t need this kind of secrecy' },
        { icon: "🔑", flag: "OTP or password request", desc: "No legitimate person needs these from you" },
        { icon: "🏆", flag: "Big prize for no reason", desc: '"You\'ve won" for something you don\'t remember entering' },
      ];

  const rules = isSw
    ? [
        { icon: "🛑", t: "Simama, fikiri, kisha bonyeza — pumzika sekunde 30 kabla ya kufanya lolote" },
        { icon: "📞", t: "Thibitisha kwa njia nyingine — rafiki akikutumia link, mpigie simu kwanza" },
        { icon: "🚫", t: "Kamwe usitoe OTP — hata 'mtumishi wa benki' akiomba, kataa" },
        { icon: "🧠", t: "Tumia common sense — kama kinakuonekana kizuri sana, ni kwa sababu si kweli" },
        { icon: "🚨", t: "Ripoti scams unazozipata kwa WhatsApp, Facebook, au polisi" },
      ]
    : [
        { icon: "🛑", t: "Stop, think, then tap — pause 30 seconds before doing anything" },
        { icon: "📞", t: "Verify through another channel — if a friend sends a link, call them first" },
        { icon: "🚫", t: "Never share OTPs — even if a 'bank official' asks, refuse" },
        { icon: "🧠", t: "Use common sense — if it seems too good to be true, it is" },
        { icon: "🚨", t: "Report scams you encounter on WhatsApp, Facebook, or to police" },
      ];

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold border border-orange-100">
          🎣 {isSw ? "Sura 5" : "Chapter 5"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-700 leading-tight">
          {isSw ? "Kujilinda Dhidi ya Fake Links na Online Scams" : "Protecting Yourself From Fake Links and Online Scams"}
        </h2>
        <p className="text-slate-500 text-sm italic">
          {isSw ? "Tambua hatari kabla haijakugusa." : "Recognize danger before it touches you."}
        </p>
      </div>

      {/* Stats */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
        <p className="text-sm text-red-800 font-bold leading-relaxed">
          ⚠️ {isSw
            ? "Utapeli wa mtandaoni umeongezeka kwa zaidi ya 300% Afrika Mashariki katika miaka mitano iliyopita. Sehemu kubwa ya waathirika ni vijana wenye smartphone lakini hawakuwa na elimu ya kutosha."
            : "Online scams have increased by over 300% in East Africa in the past five years. The majority of victims are young smartphone users who lacked sufficient digital safety education."}
        </p>
      </div>

      {/* How fake links work */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "5.1 Jinsi Fake Links Zinavyofanya Kazi" : "5.1 How Fake Links Work"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(isSw
            ? [
                { icon: "🔤", t: '"fac3book.com" badala ya "facebook.com" — herufi moja tofauti inaweza kukudanganya' },
                { icon: "🌐", t: '"whatsapp-security.com" — kampuni halali hazitumii domain bandia kama hizi' },
                { icon: "🔗", t: '"bit.ly/win5000000" — URL fupi ndefu na ngumu kawaida ni za udanganyifu' },
                { icon: "💥", t: "Pop-up links: Matangazo ghafla yakidai umeshinda zawadi — KAMWE usibonyeze" },
              ]
            : [
                { icon: "🔤", t: '"fac3book.com" instead of "facebook.com" — one different character can fool you' },
                { icon: "🌐", t: '"whatsapp-security.com" — legitimate companies don\'t use fake domains like this' },
                { icon: "🔗", t: '"bit.ly/win5000000" — shortened or complex URLs are usually scams' },
                { icon: "💥", t: "Pop-up links: Sudden ads claiming you've won a prize — NEVER click" },
              ]
          ).map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm text-slate-700 leading-relaxed">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scam types */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "5.2 Aina za Scams Zinazojulikana" : "5.2 Known Types of Scams"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-green-900 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <h4 className="font-bold text-white text-sm">WhatsApp Scams</h4>
            </div>
            <ul className="space-y-2">
              {(isSw
                ? ['"Msaada! Nimekwama nje ya nchi, tuma pesa" — hata ikionekana kwa rafiki', '"Bonyeza link hii uone video ya ajabu" — link inaweza kuiba akaunti yako', '"WhatsApp itafungwa — thibitisha akaunti hapa" — WhatsApp haifanyi hivi']
                : ['"Help! I\'m stuck abroad, send money" — even if it appears to be from a friend', '"Click this link to see an amazing video" — the link can steal your account', '"WhatsApp will close — verify your account here" — WhatsApp never does this']
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-green-200">
                  <span className="text-red-400 shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-900 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <h4 className="font-bold text-white text-sm">SMS Scams</h4>
            </div>
            <ul className="space-y-2">
              {(isSw
                ? ['"Umeshinda! Tembelea link hii kudai zawadi yako" — ni uongo tu', '"Benki yako imefunga akaunti — ingia hapa mara moja" — ni udanganyifu', '"Tuma OTP yako hapa" — KAMWE usitume OTP kwa mtu yeyote']
                : ['"You\'ve won! Visit this link to claim your prize" — it\'s all lies', '"Your bank has frozen your account — log in here immediately" — it\'s fraud', '"Send your OTP here" — NEVER send your OTP to anyone']
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-blue-200">
                  <span className="text-red-400 shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Red flags */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          🚩 {isSw ? "5.3 Red Flags — Ishara za Tahadhari" : "5.3 Red Flags — Warning Signs"}
        </h3>
        <div className="space-y-3">
          {redFlags.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white border border-red-100 rounded-xl p-4 shadow-sm">
              <span className="text-2xl shrink-0">{item.icon}</span>
              <div>
                <p className="text-sm font-extrabold text-red-700 mb-0.5">{item.flag}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protection rules */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          🛡️ {isSw ? "5.4 Kanuni Kuu za Kujilinda" : "5.4 Key Self-Protection Rules"}
        </h3>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {rules.map((item, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4 border-b border-slate-100 last:border-b-0">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm text-slate-700 font-semibold leading-relaxed">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle, white 1px, transparent 1px)",backgroundSize:"20px 20px"}} />
        <div className="relative z-10 space-y-2">
          <h4 className="font-extrabold text-base sm:text-lg">✅ {isSw ? "Muhtasari" : "Summary"}</h4>
          <p className="text-teal-100 text-sm leading-relaxed">
            {isSw
              ? "Usibonyeze link yoyote bila kuithibitisha. Tambua red flags: haraka, pesa nyingi, siri, OTP. Thibitisha daima kwa njia nyingine. Ripoti scams."
              : "Don't click any link without verifying it. Recognize red flags: urgency, big money, secrecy, OTP requests. Always verify through another channel. Report scams."}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Chapter5;