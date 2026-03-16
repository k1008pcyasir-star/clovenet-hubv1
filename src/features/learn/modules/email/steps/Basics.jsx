import React from "react";

const GmailIcon = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M6 40h6V23.8L4 18v18c0 2.2 1.8 4 4 4z" />
    <path fill="#34A853" d="M36 40h6c2.2 0 4-1.8 4-4V18l-8 5.8z" />
    <path fill="#FBBC05" d="M36 10l-12 8.7L12 10H6l18 13 18-13z" />
    <path fill="#4285F4" d="M4 18l8 5.8V10H6c-1.1 0-2 .9-2 2v6z" />
    <path fill="#C5221F" d="M36 10v13.8l8-5.8v-6c0-1.1-.9-2-2-2h-6z" />
  </svg>
);

const YahooIcon = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#6001D2" />
    <text
      x="50%"
      y="56%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="white"
      fontSize="13"
      fontWeight="bold"
      fontFamily="Arial, sans-serif"
    >
      Yahoo!
    </text>
  </svg>
);

const OutlookIcon = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#0078D4" />
    <rect x="6" y="13" width="14" height="22" rx="1" fill="white" />
    <rect x="22" y="13" width="20" height="10" rx="1" fill="#50D9FF" />
    <rect x="22" y="25" width="20" height="10" rx="1" fill="#28A8E8" />
    <polyline points="6,13 20,22 34,13" fill="none" stroke="white" strokeWidth="1.5" />
  </svg>
);

const ProtonIcon = () => (
  <svg viewBox="0 0 48 48" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#6D4AFF" />
    <path fill="white" d="M10 13h11c5.5 0 9 3.4 9 8s-3.5 8-9 8h-5v8h-6V13zm6 11h4c1.8 0 3-1.2 3-3s-1.2-3-3-3h-4v6z" />
  </svg>
);

const ServiceCard = ({ icon, name, color, tagline, features }) => (
  <div
    className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    style={{ borderTop: `4px solid ${color}` }}
  >
    <div
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm"
      style={{ background: `${color}18` }}
    >
      {icon}
    </div>

    <div className="text-center">
      <p className="font-black text-slate-800 text-sm sm:text-base">{name}</p>
      <p className="text-[11px] sm:text-xs text-slate-400 mt-1 italic leading-relaxed">
        {tagline}
      </p>
    </div>

    <ul className="w-full space-y-1.5 mt-1">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
            style={{ background: color }}
          />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Step = ({ icon, title, desc }) => (
  <div className="flex gap-3 sm:gap-4 items-start">
    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-100 text-teal-700 font-black flex items-center justify-center text-sm shadow-sm">
      {icon}
    </div>
    <div>
      <p className="font-bold text-slate-800 text-sm sm:text-base">{title}</p>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Basics = ({ lang }) => {
  const isSw = lang === "sw";

  const services = [
    {
      icon: <GmailIcon />,
      name: "Gmail",
      color: "#EA4335",
      tagline: isSw ? "Bora kwa Android & Google" : "Best for Android & Google",
      features: isSw
        ? ["Hifadhi 15GB bure", "Inaunganika na Google Drive", "Maarufu zaidi duniani"]
        : ["15GB free storage", "Links with Google Drive", "Most popular worldwide"],
    },
    {
      icon: <YahooIcon />,
      name: "Yahoo Mail",
      color: "#6001D2",
      tagline: isSw ? "Zamani lakini imara" : "Classic and reliable",
      features: isSw
        ? ["Hifadhi 1TB bure", "Rahisi kutumia", "Habari na burudani ndani"]
        : ["1TB free storage", "Simple to use", "News and entertainment built-in"],
    },
    {
      icon: <OutlookIcon />,
      name: "Outlook / Hotmail",
      color: "#0078D4",
      tagline: isSw ? "Bora kwa biashara" : "Best for business",
      features: isSw
        ? ["Inaunganika na Microsoft", "Word na Excel moja kwa moja", "Mazingira ya ofisi"]
        : ["Integrates with Microsoft", "Word and Excel built-in", "Professional workspace"],
    },
    {
      icon: <ProtonIcon />,
      name: "ProtonMail",
      color: "#6D4AFF",
      tagline: isSw ? "Usalama wa hali ya juu" : "Top-level privacy",
      features: isSw
        ? ["Usimbaji fiche kamili", "Hakuna kufuatiliwa", "Bora kwa faragha"]
        : ["End-to-end encryption", "No tracking at all", "Best for privacy"],
    },
  ];

  const steps = isSw
    ? [
        {
          icon: "✍️",
          title: "Unaandika ujumbe",
          desc: "Unajaza anwani ya mpokeaji, kichwa cha ujumbe (Subject), kisha uandike ujumbe wako.",
        },
        {
          icon: "🌐",
          title: "Intaneti inabeba ujumbe",
          desc: "Seva inagawanya ujumbe katika pakiti ndogo na kuzisafirisha haraka duniani kote.",
        },
        {
          icon: "📬",
          title: "Ujumbe unafika",
          desc: "Pakiti zinakusanywa upya na kuwekwa kwenye kisanduku cha mpokeaji ndani ya sekunde chache.",
        },
      ]
    : [
        {
          icon: "✍️",
          title: "You write a message",
          desc: "Fill in the recipient address, a subject line, then type your message body.",
        },
        {
          icon: "🌐",
          title: "The internet carries it",
          desc: "Servers split the message into small packets and transmit them across the globe instantly.",
        },
        {
          icon: "📬",
          title: "Message arrives",
          desc: "Packets are reassembled and delivered to the inbox within seconds.",
        },
      ];

  const summary = isSw
    ? [
        "Barua pepe ni anwani yako rasmi ya kidijitali",
        "Inatumika kwa kazi, biashara, na mawasiliano ya kila aina",
        "Gmail, Yahoo, na Outlook ni huduma bure unazoweza kuchagua",
        "Anwani ina sehemu tatu: jina, @, na huduma — mfano: juma@gmail.com",
      ]
    : [
        "Email is your official digital address",
        "Used for jobs, business, and all kinds of communication",
        "Gmail, Yahoo, and Outlook are free services anyone can use",
        "An address has 3 parts: name, @, and service — e.g. john@gmail.com",
      ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-8 sm:space-y-10">
      {/* Heading */}
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-black text-teal-700 leading-tight">
          {isSw ? "Misingi ya Barua Pepe" : "Email Basics"}
        </h2>
        <p className="text-slate-500 font-medium text-sm sm:text-base">
          {isSw ? "Mwanzo wa safari yako ya kidijitali" : "The start of your digital journey"}
        </p>
      </div>

      {/* Intro */}
      <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
        <p className="border-l-4 border-teal-200 pl-4 italic bg-slate-50 py-3 rounded-r-xl">
          {isSw
            ? "Barua pepe ni mfumo wa kutuma na kupokea ujumbe kupitia intaneti — kama barua za kawaida, lakini zinafika ndani ya sekunde chache, popote duniani, bila stempu wala bahasha."
            : "Email is a system for sending and receiving messages over the internet — like regular letters, but arriving in seconds, anywhere in the world, with no stamps or envelopes needed."}
        </p>

        <p>
          {isSw
            ? "Katika ulimwengu wa leo, barua pepe ni kitambulisho chako rasmi. Unahitaji akaunti ya barua pepe kuomba kazi, kufungua akaunti ya benki, kusajili biashara, au hata kupakua programu kwenye simu yako."
            : "In today's world, an email address is your official digital identity. You need one to apply for jobs, open a bank account, register a business, or even download apps on your phone."}
        </p>
      </div>

      {/* Smartphone secret */}
      <div className="p-5 sm:p-6 bg-teal-50 rounded-[24px] sm:rounded-[28px] border-l-[8px] border-teal-600 relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="font-black text-teal-700 uppercase text-xs mb-2 tracking-widest">
            {isSw ? "💡 Siri ya Smartphone Yako" : "💡 Your Smartphone Secret"}
          </h4>
          <p className="text-slate-700 font-medium italic text-sm sm:text-base leading-relaxed">
            {isSw
              ? "Watu wengi wanamiliki barua pepe bila kujua! Unaponunua simu ya Android, muuzaji anakuwekea akaunti ya Gmail ili uweze kutumia Play Store na YouTube. Hiyo ndiyo barua pepe yako — na ni muhimu sana uijue na kuisimamia mwenyewe."
              : "Many people already own an email without knowing it! When you buy an Android phone, the seller creates a Gmail account so you can use the Play Store and YouTube. That is your email — and it is very important to know and control it yourself."}
          </p>
        </div>
        <div className="absolute -right-2 -bottom-2 opacity-10 text-6xl sm:text-7xl select-none">
          📱
        </div>
      </div>

      {/* How it works */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "⚙️ Jinsi Barua Pepe Inavyofanya Kazi" : "⚙️ How Email Actually Works"}
        </h3>

        <div className="bg-slate-50 rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 space-y-5 border border-slate-100">
          {steps.map((s, i) => (
            <Step key={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "📧 Huduma Maarufu za Barua Pepe" : "📧 Popular Email Services"}
        </h3>

        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          {isSw
            ? "Kuna huduma nyingi za barua pepe duniani. Hizi ndizo zinazotumika sana — kila moja ina nguvu zake:"
            : "There are many email providers worldwide. These are the most widely used — each with its own strengths:"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              icon={s.icon}
              name={s.name}
              color={s.color}
              tagline={s.tagline}
              features={s.features}
            />
          ))}
        </div>
      </div>

      {/* Email anatomy */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "🔍 Sehemu za Anwani ya Barua Pepe" : "🔍 Parts of an Email Address"}
        </h3>

        <div className="bg-white border border-slate-200 rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 space-y-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-0 text-lg sm:text-2xl font-black rounded-xl overflow-hidden select-none">
            <span className="bg-green-100 text-green-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-none">
              juma
            </span>
            <span className="bg-amber-100 text-amber-700 px-3 py-2.5 sm:py-3 rounded-lg sm:rounded-none">
              @
            </span>
            <span className="bg-teal-100 text-teal-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-none">
              gmail
            </span>
            <span className="bg-slate-100 text-slate-500 px-3 py-2.5 sm:py-3 rounded-lg sm:rounded-none">
              .
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-none">
              com
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-slate-700">
                  {isSw ? "Jina lako" : "Your name"}
                </p>
                <p className="text-slate-500">
                  {isSw ? "Unachagua wewe mwenyewe" : "You choose this yourself"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-slate-700">
                  {isSw ? "Alama ya @" : "The @ symbol"}
                </p>
                <p className="text-slate-500">
                  {isSw ? "Inatenganisha jina na huduma" : "Separates name from service"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-teal-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-slate-700">
                  {isSw ? "Huduma unayotumia" : "Your email service"}
                </p>
                <p className="text-slate-500">Gmail, Yahoo, Outlook</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-[24px] sm:rounded-[28px] text-white shadow-lg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 space-y-3">
          <h4 className="font-black text-lg sm:text-xl">
            {isSw ? "✅ Unachohitaji Kukumbuka" : "✅ Key Takeaways"}
          </h4>

          <ul className="space-y-2 text-teal-50 text-sm sm:text-base">
            {summary.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-teal-200 font-black mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Basics;