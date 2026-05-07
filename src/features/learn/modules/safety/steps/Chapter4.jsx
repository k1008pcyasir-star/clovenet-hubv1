import React from "react";

const Chapter4 = ({ lang }) => {
  const isSw = lang === "sw";

  const renewSteps = isSw
    ? [
        "Badili PIN ya SIM card yako mpya mara moja — usitumie PIN ya default",
        "Badili password ya Gmail — hata kama hujafanya bado",
        "Badili password ya WhatsApp na washa Two-Step Verification",
        "Badili passwords za Facebook, Instagram, na akaunti zote muhimu",
        "Wasiliana na M-Pesa/Airtel Money — omba historia ya miamala",
        "Piga simu benki yako — waambie hali na omba angalizo maalum",
        "Angalia akaunti zako zote kwa mabadiliko yoyote ya taarifa",
      ]
    : [
        "Change your new SIM card PIN immediately — don't use the default PIN",
        "Change your Gmail password — even if you haven't done it yet",
        "Change your WhatsApp password and enable Two-Step Verification",
        "Change passwords for Facebook, Instagram, and all important accounts",
        "Contact M-Pesa/Airtel Money — request transaction history",
        "Call your bank — inform them of the situation and request extra monitoring",
        "Check all your accounts for any changes to personal information",
      ];

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-100">
          🔄 {isSw ? "Sura 4" : "Chapter 4"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-700 leading-tight">
          {isSw ? "Hatari ya Kurenew Line Bila Tahadhari" : "The Danger of Renewing Your Line Without Caution"}
        </h2>
        <p className="text-slate-500 text-sm italic">
          {isSw ? "Line ikirudi kwako — bado kuna kazi ya kufanya." : "Getting your line back is just the beginning."}
        </p>
      </div>

      {/* Key truth */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
        <h4 className="font-extrabold text-red-800 text-sm mb-2">💡 {isSw ? "Ukweli Muhimu" : "Key Truth"}</h4>
        <p className="text-sm text-red-700 leading-relaxed font-semibold">
          {isSw
            ? "Mwizi aliyekuwa na simu yako kwa dakika 30 tu anaweza kuwa ameshapokea OTP za benki, kubadili passwords, au kuhamisha pesa. Kurenew line haikufuta hatua hizo."
            : "A thief who had your phone for just 30 minutes may have already received bank OTPs, changed passwords, or transferred money. Renewing your line does not undo those actions."}
        </p>
      </div>

      {/* Why renewing isn't enough */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "4.1 Kwa Nini Line Ikirudi Si Maana Uko Salama" : "4.1 Why Getting Your Line Back Doesn't Mean You're Safe"}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(isSw
            ? [
                { icon: "🔓", t: "Akaunti zilizobadilishwa bado ziko hatarini — mwizi anaweza bado ana udhibiti" },
                { icon: "💬", t: "SMS za OTP zilizopita zinaweza kuwa zilitumika kubadili passwords" },
                { icon: "💳", t: "Huduma za kifedha zilizosajiliwa bado zinaendelea kufanya kazi" },
                { icon: "📂", t: "Data iliyopakuliwa haiwezi kurudishwa — picha, nambari, taarifa za kibinafsi" },
              ]
            : [
                { icon: "🔓", t: "Changed accounts are still at risk — the thief may still have control" },
                { icon: "💬", t: "Past OTP messages may have been used to change passwords" },
                { icon: "💳", t: "Registered financial services continue to work" },
                { icon: "📂", t: "Downloaded data cannot be returned — photos, contacts, personal info" },
              ]
          ).map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm text-slate-700 leading-relaxed">{item.t}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Steps after renewing */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
          {isSw ? "4.2 Hatua za Lazima Baada ya Kurenew Line" : "4.2 Mandatory Steps After Renewing Your Line"}
        </h3>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {renewSteps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4 border-b border-slate-100 last:border-b-0">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                {i + 1}
              </div>
              <p className="text-sm text-slate-700 font-semibold leading-relaxed pt-1">{s}</p>
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
              ? "Kurenew line ni hatua ya kwanza — si ya mwisho. Baada ya kupata line yako, bado kuna kazi kubwa ya usalama inayokungojea. Usiishie hapo."
              : "Renewing your line is the first step — not the last. After getting your line back, there's still important security work ahead. Don't stop there."}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Chapter4;