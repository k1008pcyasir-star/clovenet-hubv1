import React, { useState } from "react";

/* ── Icons ── */
const CheckCircle = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#22c55e" />
    <path
      d="M6 11l3.5 3.5L16 7.5"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const XCircle = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#ef4444" />
    <path
      d="M7 7l8 8M15 7l-8 8"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

const AlertTriangle = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L2 17h16L10 2z" fill="#f59e0b" />
    <path
      d="M10 8v4M10 14.5v.5"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

/* ── HR Simulator ── */
const HRSimulator = ({ isSw }) => {
  const emails = [
    { address: "kingboy@gmail.com", formal: false },
    { address: "rashid.juma@gmail.com", formal: true },
    { address: "sweetgirl254@yahoo.com", formal: false },
    { address: "amina.hassan@outlook.com", formal: true },
    { address: "dragonmaster99@gmail.com", formal: false },
    { address: "john.mwangi@gmail.com", formal: true },
    { address: "coolbro_tz@yahoo.com", formal: false },
    { address: "f.mbeki@gmail.com", formal: true },
  ];

  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [done, setDone] = useState(false);

  const item = emails[current];

  const handleChoice = (chosenFormal) => {
    const correct = chosenFormal === item.formal;
    const newScore = {
      correct: score.correct + (correct ? 1 : 0),
      total: score.total + 1,
    };
    setScore(newScore);
    setResult({ correct, expected: item.formal });

    setTimeout(() => {
      setResult(null);
      if (current + 1 >= emails.length) {
        setDone(true);
      } else {
        setCurrent(current + 1);
      }
    }, 1800);
  };

  const reset = () => {
    setCurrent(0);
    setResult(null);
    setScore({ correct: 0, total: 0 });
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score.correct / score.total) * 100);

    return (
      <div className="bg-slate-900 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 text-center space-y-4">
        <div className="text-5xl">{pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "📚"}</div>

        <h4 className="text-white font-black text-2xl">
          {score.correct}/{score.total}
          <span className="text-slate-400 text-base font-medium ml-2">
            ({pct}%)
          </span>
        </h4>

        <p className="text-slate-300 text-sm leading-relaxed">
          {pct >= 80
            ? isSw
              ? "Hongera! Unaelewa vizuri tofauti ya email rasmi na isiyorasmi."
              : "Excellent! You clearly understand professional vs unprofessional emails."
            : pct >= 50
            ? isSw
              ? "Vizuri! Jaribu tena ili uimarike zaidi."
              : "Good effort! Try again to strengthen your understanding."
            : isSw
            ? "Endelea kujifunza — soma maelezo hapo juu kisha jaribu tena."
            : "Keep studying — review the explanations above then try again."}
        </p>

        <button
          onClick={reset}
          className="mt-2 bg-teal-600 hover:bg-teal-500 text-white font-black px-6 py-3 rounded-2xl transition-colors"
        >
          {isSw ? "🔄 Jaribu Tena" : "🔄 Try Again"}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 rounded-[24px] sm:rounded-[28px] overflow-hidden">
      <div className="bg-slate-800 px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-black text-sm shrink-0">
            HR
          </div>

          <div className="min-w-0">
            <p className="text-white font-bold text-sm truncate">
              {isSw ? "Msimamizi wa Ajira" : "Hiring Manager"}
            </p>
            <p className="text-slate-400 text-xs truncate">
              {isSw ? "Anachunguza CV..." : "Reviewing applications..."}
            </p>
          </div>
        </div>

        <div className="text-slate-400 text-xs font-mono shrink-0">
          {current + 1}/{emails.length}
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        <p className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-widest font-black">
          {isSw ? "Email iliyopokelewa:" : "Email received:"}
        </p>

        <div
          className={`rounded-2xl p-4 sm:p-5 text-center font-mono text-base sm:text-xl font-black transition-all duration-300 break-all ${
            result
              ? result.correct
                ? "bg-green-900 text-green-300"
                : "bg-red-900 text-red-300"
              : "bg-slate-700 text-white"
          }`}
        >
          {item.address}
          {result && (
            <div className="text-sm font-medium mt-2 leading-relaxed">
              {result.correct
                ? isSw
                  ? "✅ Sahihi!"
                  : "✅ Correct!"
                : result.expected
                ? isSw
                  ? "❌ Hii ni rasmi — ilikuwa ya kukubali"
                  : "❌ This is professional — should accept"
                : isSw
                ? "❌ Hii sio rasmi — ilikuwa ya kukataa"
                : "❌ This is unprofessional — should reject"}
            </div>
          )}
        </div>

        {!result && (
          <p className="text-slate-400 text-sm text-center">
            {isSw ? "Je, ungekubali ombi hili?" : "Would you accept this application?"}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => handleChoice(true)}
            disabled={!!result}
            className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 disabled:opacity-40 text-white font-black py-3 rounded-2xl transition-all"
          >
            <span>✅</span>
            <span>{isSw ? "Kubali" : "Accept"}</span>
          </button>

          <button
            onClick={() => handleChoice(false)}
            disabled={!!result}
            className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 disabled:opacity-40 text-white font-black py-3 rounded-2xl transition-all"
          >
            <span>❌</span>
            <span>{isSw ? "Kataa" : "Reject"}</span>
          </button>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-1.5">
          <div
            className="bg-teal-500 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(current / emails.length) * 100}%` }}
          />
        </div>

        <p className="text-slate-500 text-xs text-center">
          {isSw ? "Sahihi: " : "Correct: "}
          {score.correct}/{score.total}
        </p>
      </div>
    </div>
  );
};

/* ── Email Anatomy Card ── */
const AnatomyCard = ({ email, formal, reasons, isSw }) => {
  const [expanded, setExpanded] = useState(false);
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];

  return (
    <div
      className={`rounded-[22px] sm:rounded-[24px] border-2 overflow-hidden transition-all duration-300 cursor-pointer ${
        formal ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div
        className={`px-4 sm:px-5 py-3 flex items-center justify-between ${
          formal ? "bg-green-600" : "bg-red-600"
        }`}
      >
        <span className="text-white font-black text-[10px] sm:text-xs uppercase tracking-widest">
          {formal
            ? isSw
              ? "✅ RASMI"
              : "✅ PROFESSIONAL"
            : isSw
            ? "❌ SIO RASMI"
            : "❌ UNPROFESSIONAL"}
        </span>
        <span className="text-white text-base sm:text-lg">{expanded ? "▲" : "▼"}</span>
      </div>

      <div className="px-4 sm:px-5 py-4 flex flex-wrap items-center justify-center gap-0 font-mono font-black text-sm sm:text-base lg:text-lg break-all">
        <span
          className={`px-2 py-1 rounded-l-lg ${
            formal ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          }`}
        >
          {username}
        </span>
        <span className="bg-slate-200 text-slate-600 px-1 py-1">@</span>
        <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-r-lg">
          {domain}
        </span>
      </div>

      {!expanded && (
        <p
          className={`text-[11px] sm:text-xs text-center pb-3 font-medium ${
            formal ? "text-green-600" : "text-red-500"
          }`}
        >
          {isSw ? "👆 Gusa kuona maelezo" : "👆 Tap to see explanation"}
        </p>
      )}

      {expanded && (
        <div className="px-4 sm:px-5 pb-5 space-y-2">
          <div className={`h-px w-full ${formal ? "bg-green-200" : "bg-red-200"} mb-3`} />
          {reasons.map((r, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              {formal ? <CheckCircle /> : <XCircle />}
              <span className="text-slate-700 leading-relaxed">{r}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ── Scenario Table Row ── */
const ScenarioRow = ({ icon, label, formal, informal }) => (
  <div className="grid grid-cols-[1fr_56px_1fr] items-center gap-1 py-3 border-b border-slate-100 last:border-0 text-xs">
    <div
      className={`flex items-center justify-end gap-1.5 font-semibold ${
        formal.ok ? "text-green-700" : "text-red-500"
      }`}
    >
      <span className="text-right leading-tight">{formal.label}</span>
      {formal.ok ? <CheckCircle /> : <XCircle />}
    </div>

    <div className="flex flex-col items-center gap-0.5 px-1">
      <span className="text-lg sm:text-xl">{icon}</span>
      <span className="text-slate-400 font-bold text-center leading-tight text-[9px] sm:text-[10px]">
        {label}
      </span>
    </div>

    <div
      className={`flex items-center gap-1.5 font-semibold ${
        informal.ok ? "text-green-700" : "text-red-500"
      }`}
    >
      {informal.ok ? <CheckCircle /> : <XCircle />}
      <span className="leading-tight">{informal.label}</span>
    </div>
  </div>
);

/* ════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════ */
const Structure = ({ lang }) => {
  const isSw = lang === "sw";

  const informalReasons = isSw
    ? [
        '"kingboy" ni lakabu tu — haioneshi jina lako halisi kabisa',
        "Mwajiri anapopata email hii kwenye CV, hatajua unaitwa nani",
        "Inaonyesha wewe si mtu wa kuchukuliwa serious katika mazingira ya kazi",
        "Mengi ya mifumo ya kuomba kazi inaweza kuikataa moja kwa moja",
        "Inafaa tu kwa mazungumzo ya marafiki au burudani mtandaoni",
      ]
    : [
        '"kingboy" is a nickname — it does not show your real name at all',
        "An employer seeing this on a CV will not know who you are",
        "It signals you are not serious about professional environments",
        "Many job application systems may auto-reject it immediately",
        "Fine only for chatting with friends or online entertainment",
      ];

  const formalReasons = isSw
    ? [
        '"rashid.juma" inaonyesha jina kamili na ukoo wa kweli',
        "Mwajiri anajua mara moja ni nani anaandika bila kuuliza",
        "Inafaa CV, maombi ya kazi, akaunti ya benki, usajili wa chuo",
        "Inaonyesha umakini, uzoefu, na kuheshimu mazingira ya kitaalamu",
        "Inabaki nzuri na ya kuheshimiwa hata miaka mingi ijayo",
      ]
    : [
        '"rashid.juma" shows a real full name and surname clearly',
        "An employer instantly knows who is writing without asking",
        "Works for CVs, job applications, bank accounts, university registration",
        "Shows maturity, experience, and respect for professional settings",
        "Remains appropriate and respected for many years to come",
      ];

  const moreExamples = [
    {
      email: "sweetgirl254@yahoo.com",
      formal: false,
      reasons: isSw
        ? [
            '"sweetgirl" ni lakabu inayoonekana kama akaunti ya burudani',
            'Nambari "254" haiongezi urasmi — inasababisha mkanganyiko',
            "Mtu yeyote wa biashara hataitumia kwa makusudi",
          ]
        : [
            '"sweetgirl" reads as a casual entertainment account nickname',
            'The number "254" adds no professionalism — causes confusion',
            "No business contact would use this address intentionally",
          ],
    },
    {
      email: "amina.hassan@outlook.com",
      formal: true,
      reasons: isSw
        ? [
            '"amina.hassan" ni jina kamili la kweli linaloweza kuthibitishwa',
            "Outlook ni huduma ya Microsoft inayoheshimika sana biashara",
            "Inafaa katika mazingira yoyote ya kitaalamu au ya kimataifa",
          ]
        : [
            '"amina.hassan" is a real verifiable full name',
            "Outlook is a Microsoft service highly respected in business",
            "Suitable in any professional or international context",
          ],
    },
    {
      email: "dragonmaster99@gmail.com",
      formal: false,
      reasons: isSw
        ? [
            '"dragonmaster" inaonyesha mtu anayependa michezo ya video — si mfanyakazi',
            'Nambari "99" inaonekana kama iliundwa bila kufikiria',
            "Kampuni nyingi zinakataa CV zenye emails za aina hii moja kwa moja",
          ]
        : [
            '"dragonmaster" suggests a gamer, not a professional worker',
            'The number "99" looks like it was created without any thought',
            "Many companies reject CVs with emails like this automatically",
          ],
    },
    {
      email: "f.mbeki@gmail.com",
      formal: true,
      reasons: isSw
        ? [
            'Herufi "f." ni njia nzuri ya kubana jina la kwanza — inatambuliwa',
            '"mbeki" ni ukoo wazi unaoweza kuthibitishwa na mtu yeyote',
            "Ni fupi, rahisi kukumbuka, na ya kitaalamu kabisa",
          ]
        : [
            'The initial "f." is a recognized shorthand for a first name',
            '"mbeki" is a clear surname anyone can verify and remember',
            "Short, easy to remember, and completely professional",
          ],
    },
  ];

  const scenarios = isSw
    ? [
        {
          icon: "💼",
          label: "Ombi la Kazi",
          formal: { ok: true, label: "Inakubaliwa" },
          informal: { ok: false, label: "Inakataliwa" },
        },
        {
          icon: "🏦",
          label: "Akaunti Benki",
          formal: { ok: true, label: "Salama" },
          informal: { ok: false, label: "Haioneshi uaminifu" },
        },
        {
          icon: "🎓",
          label: "Usajili Chuo",
          formal: { ok: true, label: "Inakubaliwa" },
          informal: { ok: false, label: "Inaweza tatizo" },
        },
        {
          icon: "🤝",
          label: "Biashara",
          formal: { ok: true, label: "Inaheshimika" },
          informal: { ok: false, label: "Haichukuliwi serious" },
        },
        {
          icon: "🏛️",
          label: "Serikali/Wizara",
          formal: { ok: true, label: "Inakubaliwa" },
          informal: { ok: false, label: "Inakataliwa" },
        },
        {
          icon: "📱",
          label: "Marafiki tu",
          formal: { ok: true, label: "Inafanya kazi" },
          informal: { ok: true, label: "Inafanya kazi" },
        },
      ]
    : [
        {
          icon: "💼",
          label: "Job Application",
          formal: { ok: true, label: "Accepted" },
          informal: { ok: false, label: "Rejected" },
        },
        {
          icon: "🏦",
          label: "Bank Account",
          formal: { ok: true, label: "Safe" },
          informal: { ok: false, label: "Untrustworthy" },
        },
        {
          icon: "🎓",
          label: "University",
          formal: { ok: true, label: "Accepted" },
          informal: { ok: false, label: "May cause issues" },
        },
        {
          icon: "🤝",
          label: "Business",
          formal: { ok: true, label: "Respected" },
          informal: { ok: false, label: "Not serious" },
        },
        {
          icon: "🏛️",
          label: "Government",
          formal: { ok: true, label: "Accepted" },
          informal: { ok: false, label: "Rejected" },
        },
        {
          icon: "📱",
          label: "Friends only",
          formal: { ok: true, label: "Works fine" },
          informal: { ok: true, label: "Works fine" },
        },
      ];

  const rules = isSw
    ? [
        { ok: true, text: "Tumia jina lako la kweli na ukoo: rashid.juma, amina.hassan" },
        { ok: true, text: "Unaweza kutumia herufi ya kwanza tu: f.mbeki, a.hassan" },
        { ok: true, text: "Nambari inakubalika kama jina lako linashughulikiwa tayari: rashid.juma2" },
        { ok: false, text: "Epuka lakabu: kingboy, sweetgirl, dragonmaster, coolkid" },
        { ok: false, text: "Epuka nambari za nasibu zisizohusiana nawe: john254, mary99" },
        { ok: false, text: "Epuka maneno ya kuelezea tabia au hobby: bestguy, ninja, princess" },
      ]
    : [
        { ok: true, text: "Use your real first name and surname: rashid.juma, amina.hassan" },
        { ok: true, text: "An initial for your first name is fine: f.mbeki, a.hassan" },
        { ok: true, text: "A number is acceptable if your name is already taken: rashid.juma2" },
        { ok: false, text: "Avoid nicknames: kingboy, sweetgirl, dragonmaster, coolkid" },
        { ok: false, text: "Avoid random unrelated numbers: john254, mary99, ali2000" },
        { ok: false, text: "Avoid personality or hobby descriptors: bestguy, ninja, princess" },
      ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-8 sm:space-y-10">
      {/* Heading */}
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-black text-teal-700 leading-tight">
          {isSw ? "Barua Pepe Rasmi na Isioraasmi" : "Official Emails and Non-Official Email"}
        </h2>
        <p className="text-slate-500 font-medium italic text-sm sm:text-base">
          {isSw
            ? "Anwani yako ndiyo itatoa utambulisho wako wa kwanza"
            : "Your address is your first impression"}
        </p>
      </div>

      {/* Warning intro */}
      <div className="bg-amber-50 border border-amber-200 rounded-[22px] sm:rounded-[24px] p-4 sm:p-5 flex gap-3 items-start">
        <div className="shrink-0 mt-0.5">
          <AlertTriangle />
        </div>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {isSw
            ? "Waajiri wengi hukutazama kwanza kupitia anwani ya email kabla hata hawajasoma CV yako. Hivyo email nzuri ni sehemu ya picha yako ya kitaalamu."
            : "Many employers judge you first through your email address before they even read your CV. A good email is therefore part of your professional image."}
        </p>
      </div>

      {/* Anatomy */}
      <div className="text-center py-8 sm:py-10 bg-slate-900 rounded-[28px] sm:rounded-[40px] shadow-2xl border-4 border-slate-800 space-y-4 px-4">
        <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-[4px] font-black">
          {isSw ? "Anwani Rasmi ya Email" : "Professional Email Address"}
        </p>

        <div className="text-lg sm:text-2xl md:text-4xl font-mono tracking-tight break-all">
          <span className="text-teal-400">rashid.juma</span>
          <span className="text-white mx-1">@</span>
          <span className="text-emerald-400">gmail.com</span>
        </div>

        <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto px-2 sm:px-4 text-[10px] sm:text-xs font-bold mt-2">
          <div className="text-teal-400 text-center">
            <div className="text-lg mb-0.5">👤</div>
            <div>{isSw ? "Jina Halisi" : "Real Name"}</div>
          </div>
          <div className="text-slate-400 text-center">
            <div className="text-lg mb-0.5">🔗</div>
            <div>{isSw ? "Kiungo" : "Connector"}</div>
          </div>
          <div className="text-emerald-400 text-center">
            <div className="text-lg mb-0.5">🌐</div>
            <div>{isSw ? "Huduma" : "Service"}</div>
          </div>
        </div>

        <div className="text-[10px] text-slate-600 font-black uppercase tracking-[4px] sm:tracking-[5px]">
          {isSw ? "Mfumo wa Anwani Rasmi" : "Professional Address Format"}
        </div>
      </div>

      {/* Good vs Bad */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        <div className="p-5 sm:p-6 bg-emerald-50 rounded-[24px] sm:rounded-[32px] border-2 border-emerald-100 relative overflow-hidden">
          <div className="text-3xl mb-4">💼</div>
          <h4 className="font-black text-emerald-700 mb-2">
            {isSw ? "✅ NZURI (Rasmi)" : "✅ GOOD (Professional)"}
          </h4>
          <p className="text-xs text-emerald-600 font-bold mb-4 italic">
            {isSw ? "Inavutia waajiri mara moja" : "Attracts employers immediately"}
          </p>
          <div className="p-3 bg-white/60 rounded-xl font-mono text-xs sm:text-sm text-slate-700 break-all">
            rashid.omar@gmail.com
          </div>
        </div>

        <div className="p-5 sm:p-6 bg-red-50 rounded-[24px] sm:rounded-[32px] border-2 border-red-100 relative overflow-hidden">
          <div className="text-3xl mb-4">🙄</div>
          <h4 className="font-black text-red-700 mb-2">
            {isSw ? "❌ MBAYA (Siyo Rasmi)" : "❌ BAD (Unprofessional)"}
          </h4>
          <p className="text-xs text-red-600 font-bold mb-4 italic">
            {isSw ? "Mwajiri hawezi kukuamini" : "Employers will not trust you"}
          </p>
          <div className="p-3 bg-white/60 rounded-xl font-mono text-xs sm:text-sm text-slate-700 break-all">
            kingboy99@gmail.com
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest whitespace-nowrap">
          {isSw ? "Kwa nini hii inahesabiwa?" : "Why does this matter?"}
        </span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Deep analysis */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "🔬 Uchambuzi wa Kina — Kwa Nini?" : "🔬 Deep Analysis — Why?"}
        </h3>
        <p className="text-slate-500 text-sm">
          {isSw
            ? "Gusa kila kadi hapa chini uone maelezo kamili:"
            : "Tap each card below to reveal the full explanation:"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnatomyCard
            email="kingboy@gmail.com"
            formal={false}
            reasons={informalReasons}
            isSw={isSw}
          />
          <AnatomyCard
            email="rashid.juma@gmail.com"
            formal={true}
            reasons={formalReasons}
            isSw={isSw}
          />
        </div>
      </div>

      {/* Employer mindset */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative z-10 space-y-4">
          <h3 className="text-white font-black text-base sm:text-lg">
            {isSw ? "👔 Kinachopita Akilini mwa Mwajiri" : "👔 What Goes Through an Employer Mind"}
          </h3>

          <div className="space-y-3">
            {[
              {
                from: "kingboy@gmail.com",
                subject: isSw ? "Ombi la Kazi - Mhasibu" : "Job Application - Accountant",
                reject: true,
              },
              {
                from: "rashid.juma@gmail.com",
                subject: isSw ? "Ombi la Kazi - Mhasibu" : "Job Application - Accountant",
                reject: false,
              },
              {
                from: "sweetgirl254@yahoo.com",
                subject: isSw ? "Ombi la Kazi - Meneja" : "Job Application - Manager",
                reject: true,
              },
              {
                from: "amina.hassan@outlook.com",
                subject: isSw ? "Ombi la Kazi - Meneja" : "Job Application - Manager",
                reject: false,
              },
            ].map((msg, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-xl border ${
                  msg.reject
                    ? "bg-red-950 border-red-800 opacity-70"
                    : "bg-green-950 border-green-800"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${
                    msg.reject ? "bg-red-700 text-white" : "bg-green-600 text-white"
                  }`}
                >
                  {msg.reject ? "✗" : "✓"}
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className={`font-mono text-xs font-bold truncate ${
                      msg.reject ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    {msg.from}
                  </p>
                  <p className="text-slate-400 text-xs truncate">{msg.subject}</p>
                </div>

                <span
                  className={`text-xs font-black flex-shrink-0 ${
                    msg.reject ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {msg.reject ? "SKIP" : "OPEN"}
                </span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-xs italic text-center leading-relaxed">
            {isSw
              ? "Mwajiri anachunguza inbox yake — emails zisizo rasmi zinapigwa skip kabla ya kusomwa"
              : "An employer scanning their inbox — unprofessional emails get skipped before being read"}
          </p>
        </div>
      </div>

      {/* More examples */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "📋 Mifano Zaidi — Gusa Uone Maelezo" : "📋 More Examples — Tap to See Explanation"}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {moreExamples.map((ex, i) => (
            <AnatomyCard
              key={i}
              email={ex.email}
              formal={ex.formal}
              reasons={ex.reasons}
              isSw={isSw}
            />
          ))}
        </div>
      </div>

      {/* Usage table */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "📊 Inatumika Wapi Kila Moja?" : "📊 Where Does Each Type Work?"}
        </h3>

        <div className="bg-white border border-slate-200 rounded-[22px] sm:rounded-[24px] p-4 sm:p-5 shadow-sm overflow-x-auto">
          <div className="min-w-[320px]">
            <div className="grid grid-cols-[1fr_56px_1fr] text-center mb-3">
              <p className="text-green-700 font-black text-[10px] sm:text-xs uppercase tracking-wide text-right pr-3">
                rashid.juma
              </p>
              <p className="text-slate-400 font-bold text-[10px] sm:text-xs">vs</p>
              <p className="text-red-500 font-black text-[10px] sm:text-xs uppercase tracking-wide text-left pl-3">
                kingboy
              </p>
            </div>

            {scenarios.map((s, i) => (
              <ScenarioRow key={i} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* HR simulator */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "🎮 Jaribu Wewe Mwenyewe — Kuwa HR Manager!" : "🎮 Try It Yourself — Be the HR Manager!"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Emails 8 zitakuonyeshwa. Amua kila moja ni rasmi au la. Je, unaweza kupata zote sahihi?"
            : "8 emails will be shown. Decide if each is professional or not. Can you get them all right?"}
        </p>

        <HRSimulator isSw={isSw} />
      </div>

      {/* Rules */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "📐 Sheria za Kuunda Email ya Kitaalamu" : "📐 Rules for Creating a Professional Email"}
        </h3>

        <div className="bg-slate-900 rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 space-y-3">
          {rules.map((r, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 text-sm ${
                r.ok ? "text-green-300" : "text-red-300"
              }`}
            >
              <span className="flex-shrink-0 mt-0.5">
                {r.ok ? <CheckCircle /> : <XCircle />}
              </span>
              <span className="leading-relaxed">{r.text}</span>
            </div>
          ))}

          <div className="mt-4 bg-slate-800 rounded-2xl p-4 space-y-3">
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest">
              {isSw ? "💡 Formula ya Email Nzuri" : "💡 Good Email Formula"}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-sm font-black">
              <span className="bg-green-600 text-white px-3 py-1.5 rounded-xl">
                {isSw ? "jina" : "firstname"}
              </span>
              <span className="text-slate-500">+</span>
              <span className="bg-teal-600 text-white px-3 py-1.5 rounded-xl">
                {isSw ? ".ukoo" : ".lastname"}
              </span>
              <span className="text-slate-500">+</span>
              <span className="bg-amber-600 text-white px-3 py-1.5 rounded-xl">
                @gmail.com
              </span>
            </div>

            <div className="text-center break-all">
              <span className="text-slate-500 text-sm">=</span>
              <span className="text-green-400 font-mono font-black text-sm sm:text-base ml-2">
                rashid.juma@gmail.com
              </span>
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
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 space-y-3">
          <h4 className="font-black text-lg sm:text-xl">
            {isSw ? "✅ Unachohitaji Kukumbuka" : "✅ Key Takeaways"}
          </h4>

          <ul className="space-y-2 text-teal-50 text-sm sm:text-base">
            {(isSw
              ? [
                  "Email yako ni sura yako ya kwanza kwa mwajiri, benki, na chuo",
                  'Lakabu kama "kingboy" zinakataliwa mara moja katika mazingira ya kitaalamu',
                  "Tumia jina lako halisi: rashid.juma, amina.hassan, f.mbeki",
                  "Email moja nzuri inafungua milango mingi — biashara, kazi, elimu, na zaidi",
                ]
              : [
                  "Your email is your first impression for employers, banks, and universities",
                  'Nicknames like "kingboy" are rejected instantly in professional settings',
                  "Use your real name: rashid.juma, amina.hassan, f.mbeki",
                  "One good email opens many doors — business, jobs, education, and more",
                ]
            ).map((item, i) => (
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

export default Structure;