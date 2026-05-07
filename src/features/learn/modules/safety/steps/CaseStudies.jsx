import React, { useState } from "react";

const CaseStudies = ({ lang }) => {
  const isSw = lang === "sw";
  const [open, setOpen] = useState(null);

  const cases = [
    {
      id: 1,
      icon: "💰",
      color: "border-red-200 bg-red-50",
      headerColor: "bg-red-600",
      name: isSw ? "John — Alirenew Line, Akashangaa" : "John — Renewed His Line, Then Was Shocked",
      subtitle: isSw ? "Mfanyabiashara, miaka 28, Dar es Salaam" : "Small business owner, 28, Dar es Salaam",
      story: isSw
        ? "John alibiwa simu yake usiku mmoja. Asubuhi yake, badala ya kufuata hatua za usalama, alienda tu kwa Vodacom kurenew line yake. Alipofurahi kupata line tena, akafikiri tatizo limekwisha. Hakujua kwamba mwizi alikuwa tayari amepokea OTP za M-Pesa na akabadilisha PIN. Siku tatu baadaye, John aligundua kwamba shilingi 450,000 zimekwisha."
        : "John had his phone stolen one night. The next morning, instead of following security steps, he just went to Vodacom to renew his line. Happy to have his line back, he thought the problem was over. He didn't know the thief had already received his M-Pesa OTPs and changed his PIN. Three days later, John discovered that 450,000 shillings were gone.",
      lesson: isSw
        ? "Kurenew line ni hatua ya kwanza tu — si ya mwisho. Lazima ubadili PIN, passwords zote, na uwasiliane na huduma za kifedha KABLA hujatulia."
        : "Renewing your line is only the first step — not the last. You must change your PIN, all passwords, and contact financial services BEFORE you relax.",
    },
    {
      id: 2,
      icon: "💬",
      color: "border-amber-200 bg-amber-50",
      headerColor: "bg-amber-600",
      name: isSw ? "Fatuma — Alibonyeza Link, WhatsApp Ikachukuliwa" : "Fatuma — Clicked a Link, WhatsApp Was Taken",
      subtitle: isSw ? "Mwanafunzi, miaka 22" : "University student, 22",
      story: isSw
        ? 'Fatuma alipokea ujumbe wa WhatsApp kutoka kwa "rafiki yake": "Tazama video hii ya ajabu!" Alifuata link bila kufikiria — na ghafla WhatsApp yake ilifungwa. Mdukuzi alimtumia bibi yake: "Niko hospitalini, tuma 200,000 haraka." Bibi alituma pesa bila kuthibitisha. Fatuma alipata WhatsApp yake baada ya wiki mbili, lakini pesa zilishaenda.'
        : 'Fatuma received a WhatsApp message from her "friend": "Watch this amazing video!" She followed the link without thinking — and suddenly her WhatsApp was locked. The hacker messaged her grandmother: "I\'m in the hospital, send 200,000 urgently." Grandmother sent the money without verifying. Fatuma got her WhatsApp back after two weeks, but the money was gone.',
      lesson: isSw
        ? "Kamwe usibonyeze link ya ajabu hata kutoka kwa rafiki. Washa Two-Step Verification kwenye WhatsApp leo. Ombi la pesa la dharura — thibitisha kwanza."
        : "Never click a suspicious link even from a friend. Enable Two-Step Verification on WhatsApp today. Any urgent money request — verify first.",
    },
    {
      id: 3,
      icon: "📸",
      color: "border-blue-200 bg-blue-50",
      headerColor: "bg-blue-700",
      name: isSw ? "Hassan — Hakuwa na Email Yake" : "Hassan — Didn't Have His Own Email",
      subtitle: isSw ? "Dereva wa bodaboda, miaka 35" : "Motorcycle taxi driver, 35",
      story: isSw
        ? "Hassan aliomba jirani kumwekea simu mpya. Jirani, kwa nia njema, aliweka email yake mwenyewe. Miaka miwili baadaye, Hassan alipoteza simu na akataka kurudisha data yake — picha za watoto wake, contacts za biashara. Data ilikuwa chini ya email ya jirani aliyesogea mji mwingine. Hassan alipoteza kumbukumbu za miaka miwili na contacts zote za biashara."
        : "Hassan asked a neighbour to set up his new phone. The neighbour, with good intentions, put his own email on the phone. Two years later, Hassan lost his phone and wanted to restore his data — photos of his children, business contacts. The data was under the neighbour's email who had moved to another city. Hassan lost two years of memories and all his business contacts.",
      lesson: isSw
        ? "Weka EMAIL YAKO MWENYEWE kwenye simu yako — kamwe usimruhusu mtu mwingine. Email yako ni mlango wa data yako yote."
        : "Set up YOUR OWN EMAIL on your phone — never let anyone else do it. Your email is the gateway to all your data.",
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">

      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          📖 {isSw ? "Kiambatisho C" : "Appendix C"}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          {isSw ? "Mifano ya Kweli — Case Studies" : "Real Life Examples — Case Studies"}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Mifano hii imetokana na hali za kweli. Majina yamebadilishwa kulinda faragha. Lengo si kuwatia watu hofu — bali ni kutoa elimu inayotokana na uzoefu."
            : "These examples are based on real situations. Names have been changed for privacy. The goal isn't to scare people — but to provide education from real experience."}
        </p>
      </div>

      {cases.map((c) => (
        <div key={c.id} className={`rounded-2xl border overflow-hidden ${c.color}`}>
          <div
            className={`px-5 py-4 cursor-pointer flex items-center justify-between ${c.headerColor}`}
            onClick={() => setOpen(open === c.id ? null : c.id)}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <p className="text-white font-extrabold text-sm leading-snug">{c.name}</p>
                <p className="text-white/70 text-xs">{c.subtitle}</p>
              </div>
            </div>
            <span className="text-white text-lg">{open === c.id ? "▲" : "▼"}</span>
          </div>

          {open === c.id && (
            <div className="p-5 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">{c.story}</p>
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
                  💡 {isSw ? "SOMO" : "LESSON"}
                </p>
                <p className="text-sm text-slate-800 font-semibold leading-relaxed">{c.lesson}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5">
        <p className="text-sm text-teal-800 font-bold leading-relaxed">
          📢 {isSw
            ? "Shiriki hadithi hizi na marafiki na familia yako. Elimu inayotokana na uzoefu wa wengine ni ya bei ghali — na inaweza kuokoa mali yako."
            : "Share these stories with your friends and family. Education from others' experiences is invaluable — and it can protect your assets."}
        </p>
      </div>

    </div>
  );
};

export default CaseStudies;