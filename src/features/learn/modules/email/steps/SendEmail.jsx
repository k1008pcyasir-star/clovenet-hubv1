import React, { useState } from "react";

/* ── Compose Simulator ── */
const ComposeSimulator = ({ isSw }) => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sent, setSent] = useState(false);

  const toOk = to.includes("@") && to.includes(".");
  const subjectOk = subject.trim().length >= 5;
  const bodyOk = body.trim().length >= 20;
  const allOk = toOk && subjectOk && bodyOk;

  const handleSend = () => {
    if (allOk) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setTo("");
      setSubject("");
      setBody("");
    }
  };

  const checks = isSw
    ? [
        { ok: toOk, label: "Anwani ya mpokeaji iko sahihi" },
        { ok: subjectOk, label: "Kichwa kina maneno ya kutosha" },
        { ok: bodyOk, label: "Ujumbe una maneno ya kutosha" },
      ]
    : [
        { ok: toOk, label: "Recipient address is valid" },
        { ok: subjectOk, label: "Subject has enough content" },
        { ok: bodyOk, label: "Message body has enough content" },
      ];

  if (sent) {
    return (
      <div className="bg-green-900 rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 text-center space-y-3">
        <div className="text-5xl">🚀</div>
        <p className="text-green-300 font-black text-xl">
          {isSw ? "Barua Pepe Imetumwa!" : "Email Sent!"}
        </p>
        <p className="text-green-400 text-sm leading-relaxed">
          {isSw
            ? "Mpokeaji atapokea barua yako hivi karibuni."
            : "The recipient will receive your email shortly."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] sm:rounded-[28px] border-4 border-slate-900 overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-teal-50">
      <div className="bg-slate-900 px-4 sm:px-5 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>

        <span className="text-white text-[10px] font-black uppercase tracking-[3px] opacity-70">
          {isSw ? "Ujumbe Mpya" : "New Message"}
        </span>

        <div className="w-4" />
      </div>

      <div>
        <div
          className={`px-4 sm:px-6 py-3 border-b flex items-center gap-3 transition-colors ${
            toOk ? "border-green-100 bg-green-50/30" : "border-slate-100"
          }`}
        >
          <span className="text-slate-400 font-black text-xs w-12 sm:w-16 flex-shrink-0">
            To:
          </span>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder={isSw ? "mfano: hr@kampuni.co.tz" : "e.g. hr@company.com"}
            className="flex-1 outline-none text-sm font-bold text-slate-800 bg-transparent placeholder-slate-300 min-w-0"
          />
          {toOk && <span className="text-green-500 text-xs font-black">✓</span>}
        </div>

        <div
          className={`px-4 sm:px-6 py-3 border-b flex items-center gap-3 transition-colors ${
            subjectOk ? "border-green-100 bg-green-50/30" : "border-slate-100"
          }`}
        >
          <span className="text-slate-400 font-black text-xs w-12 sm:w-16 flex-shrink-0">
            {isSw ? "Kichwa:" : "Subject:"}
          </span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={
              isSw
                ? "mfano: Ombi la Kazi - Afisa Hesabu"
                : "e.g. Job Application - Accounts Officer"
            }
            className="flex-1 outline-none text-sm font-bold text-slate-800 bg-transparent placeholder-slate-300 min-w-0"
          />
          {subjectOk && (
            <span className="text-green-500 text-xs font-black">✓</span>
          )}
        </div>

        <div className={`px-4 sm:px-6 py-3 transition-colors ${bodyOk ? "bg-green-50/20" : ""}`}>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            placeholder={isSw ? "Andika ujumbe wako hapa..." : "Write your message here..."}
            className="w-full outline-none text-sm text-slate-700 bg-transparent resize-none placeholder-slate-300 leading-relaxed"
          />
        </div>
      </div>

      <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-100 space-y-1">
        {checks.map((c, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 text-xs font-semibold ${
              c.ok ? "text-green-600" : "text-slate-400"
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-black flex-shrink-0 transition-colors ${
                c.ok ? "bg-green-500" : "bg-slate-200"
              }`}
            >
              {c.ok ? "✓" : ""}
            </span>
            {c.label}
          </div>
        ))}
      </div>

      <div className="px-4 sm:px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
        <div className="flex gap-4 text-slate-400 text-base sm:text-lg">
          <span className="cursor-pointer hover:text-teal-600 transition-colors text-base">
            📎
          </span>
          <span className="cursor-pointer hover:text-teal-600 transition-colors text-base">
            🔗
          </span>
          <span className="cursor-pointer hover:text-teal-600 transition-colors text-base">
            😊
          </span>
        </div>

        <button
          onClick={handleSend}
          disabled={!allOk}
          className={`px-6 sm:px-8 py-2.5 rounded-full font-black text-xs shadow-md transition-all duration-300 ${
            allOk
              ? "bg-teal-600 text-white hover:bg-teal-700 scale-[1.02]"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          {isSw ? "📤 TUMA" : "📤 SEND"}
        </button>
      </div>
    </div>
  );
};

/* ── Android Phone Compose Screen ── */
const AndroidComposeScreen = ({ isSw, step }) => {
  const screens = [
    <div className="h-full bg-white flex flex-col">
      <div className="bg-white px-4 pt-3 pb-2 flex items-center gap-3 border-b border-slate-100">
        <span className="text-lg">☰</span>
        <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[10px] text-slate-400 font-bold">
          Search in mail
        </div>
        <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-black">
          R
        </div>
      </div>

      <div className="px-3 py-2 flex items-center justify-between">
        <span className="text-[11px] font-black text-slate-700">Primary</span>
        <span className="text-[9px] text-slate-400">{isSw ? "3 mpya" : "3 new"}</span>
      </div>

      <div className="flex-1 space-y-0 overflow-hidden">
        {[
          {
            from: "Google",
            subj: isSw ? "Karibu Gmail!" : "Welcome to Gmail!",
            time: "10:23",
            unread: true,
          },
          {
            from: "hr@kampuni.co.tz",
            subj: isSw ? "RE: Ombi la Kazi" : "RE: Job Application",
            time: "9:15",
            unread: true,
          },
          {
            from: "Amina",
            subj: isSw ? "Habari za familia" : "Family news",
            time: "Mon",
            unread: false,
          },
        ].map((m, i) => (
          <div
            key={i}
            className={`flex gap-3 px-4 py-3 border-b border-slate-50 ${
              m.unread ? "bg-teal-50/40" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black text-white flex-shrink-0 ${
                ["bg-blue-500", "bg-red-500", "bg-green-500"][i]
              }`}
            >
              {m.from[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between gap-2">
                <span
                  className={`text-[10px] truncate ${
                    m.unread ? "font-black text-slate-800" : "font-bold text-slate-500"
                  }`}
                >
                  {m.from}
                </span>
                <span className="text-[9px] text-slate-400 flex-shrink-0">{m.time}</span>
              </div>
              <span
                className={`text-[9px] truncate block ${
                  m.unread ? "font-bold text-slate-700" : "text-slate-400"
                }`}
              >
                {m.subj}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end px-4 pb-4 pt-2">
        <div className="bg-teal-600 rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg">
          <span className="text-white text-sm">✏️</span>
          <span className="text-white text-[10px] font-black">
            {isSw ? "Tunga" : "Compose"}
          </span>
        </div>
      </div>
    </div>,

    <div className="h-full bg-white flex flex-col">
      <div className="bg-white px-4 pt-3 pb-2 flex items-center gap-3 border-b border-slate-100">
        <span className="text-slate-500 text-sm">✕</span>
        <span className="flex-1 text-[11px] font-black text-slate-800">
          {isSw ? "Ujumbe Mpya" : "New Message"}
        </span>
        <span className="text-slate-400 text-xs">💾</span>
        <span className="text-slate-400 text-xs">⋮</span>
      </div>

      <div className="flex-1 px-4 py-2 space-y-0">
        <div className="py-2 border-b border-slate-100 flex gap-2 items-center">
          <span className="text-[9px] text-slate-400 font-black w-10">From</span>
          <span className="text-[10px] text-slate-600 font-bold">
            rashid.juma@gmail.com
          </span>
        </div>

        <div className="py-2 border-b border-slate-100 flex gap-2 items-center">
          <span className="text-[9px] text-slate-400 font-black w-10">To</span>
          <div className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full text-[9px] font-bold">
            hr@kampuni.co.tz
          </div>
        </div>

        <div className="py-2 border-b border-slate-100 flex gap-2 items-center">
          <span className="text-[9px] text-slate-400 font-black w-10">
            Subj
          </span>
          <span className="text-[10px] font-black text-slate-800">
            {isSw ? "Ombi la Kazi - Afisa Hesabu" : "Job Application - Accounts Officer"}
          </span>
        </div>

        <div className="py-3 text-[10px] text-slate-700 leading-relaxed whitespace-pre-line">
          {isSw
            ? "Ndugu Msimamizi wa Rasilimali Watu,\n\nNaomba nafasi ya kazi..."
            : "Dear HR Manager,\n\nI wish to apply for the position..."}
        </div>
      </div>

      <div className="px-4 pb-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex gap-4 text-slate-400 text-sm">
          <span>📎</span>
          <span>📷</span>
          <span>🔗</span>
        </div>
        <div className="bg-teal-600 rounded-full px-5 py-2 shadow-lg">
          <span className="text-white text-[11px] font-black">
            {isSw ? "▶ TUMA" : "▶ SEND"}
          </span>
        </div>
      </div>
    </div>,

    <div className="h-full bg-white flex flex-col items-center justify-center gap-4 p-6">
      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-3xl">
        📤
      </div>

      <div className="text-center space-y-1">
        <p className="text-[12px] font-black text-slate-800">
          {isSw ? "Barua Imetumwa!" : "Email Sent!"}
        </p>
        <p className="text-[9px] text-slate-500">
          {isSw ? "Imewekwa katika Sent" : "Saved in Sent folder"}
        </p>
      </div>

      <div className="w-full space-y-2">
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-[8px] text-slate-400 font-black uppercase">To</p>
          <p className="text-[10px] font-bold text-slate-700">hr@kampuni.co.tz</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-[8px] text-slate-400 font-black uppercase">
            {isSw ? "Kichwa" : "Subject"}
          </p>
          <p className="text-[10px] font-bold text-slate-700">
            {isSw ? "Ombi la Kazi - Afisa Hesabu" : "Job Application - Accounts Officer"}
          </p>
        </div>
      </div>

      <div className="bg-teal-50 rounded-xl p-3 w-full text-center">
        <p className="text-[9px] text-teal-700 font-bold">
          {isSw ? "Tazama barua iliyotumwa kwenye Sent" : "View sent email in Sent folder"}
        </p>
      </div>
    </div>,
  ];

  return screens[step] || screens[0];
};

/* ── Android Mockup Wrapper ── */
const AndroidMockup = ({ children, stepLabel }) => (
  <div className="relative flex-shrink-0 mx-auto">
    <div className="w-[220px] sm:w-[240px] bg-slate-900 rounded-[38px] sm:rounded-[42px] border-[7px] border-slate-800 shadow-2xl overflow-hidden h-[460px] sm:h-[490px]">
      <div className="bg-white flex items-center justify-between px-4 py-1.5">
        <span className="text-[9px] font-black text-slate-700">9:41</span>
        <div className="w-12 h-2.5 bg-slate-800 rounded-full" />
        <div className="flex items-center gap-1">
          <span className="text-[8px] text-slate-700">📶</span>
          <span className="text-[8px] text-slate-700">🔋</span>
        </div>
      </div>

      <div className="h-[calc(100%-28px)] overflow-hidden">{children}</div>
    </div>

    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-14 h-1 bg-slate-600 rounded-full" />

    {stepLabel && (
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-black text-slate-500 uppercase tracking-widest">
        {stepLabel}
      </div>
    )}
  </div>
);

/* ── Sample Email Templates ── */
const EmailTemplate = ({ title, lines, color, isSw }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className={`rounded-[22px] sm:rounded-[24px] border-2 overflow-hidden ${color}`}>
      <div className="px-4 sm:px-5 py-3 flex items-center justify-between gap-3">
        <span className="font-black text-sm text-white">{title}</span>
        <button
          onClick={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="text-white/70 hover:text-white text-xs font-bold transition-colors shrink-0"
        >
          {copied ? (isSw ? "✓ Imenakiliwa" : "✓ Copied") : isSw ? "📋 Nakili" : "📋 Copy"}
        </button>
      </div>

      <div className="bg-white px-4 sm:px-5 py-4 space-y-1">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`font-mono text-xs break-words ${
              line === "" ? "h-3" : "text-slate-700"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

/* ── Bad vs Good Example ── */
const SubjectRow = ({ bad, good }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
      <span className="text-red-500 flex-shrink-0">❌</span>
      <span className="font-mono text-xs font-black text-red-700 break-all">{bad}</span>
    </div>
    <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-2xl px-4 py-3">
      <span className="text-green-500 flex-shrink-0">✅</span>
      <span className="font-mono text-xs font-black text-green-700 break-all">{good}</span>
    </div>
  </div>
);

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const SendEmail = ({ lang }) => {
  const isSw = lang === "sw";
  const [phoneStep, setPhoneStep] = useState(0);

  const fields = isSw
    ? [
        {
          n: "1",
          key: "To (Kwa)",
          desc: "Hapa unaweka anwani ya mtu unayemtumia barua. Hakikisha herufi zote ziko sahihi — kosa moja ndogo linaweza kupeleka barua kwa mtu asiye sahihi au kushindwa kutumwa kabisa.",
        },
        {
          n: "2",
          key: "Subject (Kichwa)",
          desc: "Hiki ni kichwa cha habari. Mwajiri anasoma hapa kwanza ili ajue barua inahusu nini. Kichwa kizuri kinaongeza nafasi ya barua yako kusomwa.",
        },
        {
          n: "3",
          key: "Body (Ujumbe)",
          desc: "Hapa ndiyo unaandika ujumbe wako kamili. Anza na salamu, eleza kusudi lako, na malizia kwa shukrani na jina lako.",
        },
        {
          n: "4",
          key: "Attachment (Kiambatisho)",
          desc: "Unaweza kuambatisha faili kama CV, picha, au hati nyingine. Bonyeza ikoni ya paperclip ili uchague faili kutoka simu yako.",
        },
      ]
    : [
        {
          n: "1",
          key: "To (Recipient)",
          desc: "Here you put the address of the person you are emailing. Make sure every letter is correct — one small mistake can send your email to the wrong person or cause it to fail entirely.",
        },
        {
          n: "2",
          key: "Subject (Title)",
          desc: "This is the headline. Employers read this first to know what the email is about. A good subject increases the chance your email will actually be opened.",
        },
        {
          n: "3",
          key: "Body (Message)",
          desc: "Here you write your full message. Start with a greeting, explain your purpose, and end with thanks and your name.",
        },
        {
          n: "4",
          key: "Attachment",
          desc: "You can attach files like a CV, photo, or other documents. Click the paperclip icon to select a file from your phone.",
        },
      ];

  const subjectExamples = isSw
    ? [
        { bad: "kazi", good: "Ombi la Kazi - Afisa Hesabu" },
        { bad: "habari", good: "Swali Kuhusu Akaunti Namba 12345" },
        { bad: "heeey nisaidie", good: "Ombi la Msaada - Usajili wa Chuo" },
        { bad: "CV yangu", good: "CV - Rashid Juma - Mhandisi wa IT" },
      ]
    : [
        { bad: "job", good: "Job Application - Accounts Officer" },
        { bad: "hi there", good: "Inquiry About Account Number 12345" },
        { bad: "plz help me", good: "Request for Assistance - University Registration" },
        { bad: "my CV", good: "CV - Rashid Juma - IT Engineer" },
      ];

  const etiquette = isSw
    ? [
        {
          icon: "🙏",
          title: "Anza na Salamu Rasmi",
          desc: 'Anza na "Ndugu [Jina]," au "Kwa Heshima," — si "Hey" au "Yo".',
        },
        {
          icon: "🎯",
          title: "Kichwa Kiwe Wazi na Mfupi",
          desc: "Subject isizidi maneno 10. Lazima mtu ajue barua inahusu nini kwa sekunde moja.",
        },
        {
          icon: "✍️",
          title: "Jitambulishe Mwanzo",
          desc: "Mwanzo wa ujumbe wako, sema jina lako na unafanya nini. Mpokeaji hawezi kukujua.",
        },
        {
          icon: "📏",
          title: "Ujumbe Uwe Mfupi na Wazi",
          desc: "Andika tu muhimu. Barua ndefu sana hazisomwi. Aya 2-4 zinatosha kwa barua nyingi.",
        },
        {
          icon: "👁️",
          title: "Soma Tena Kabla Kutuma",
          desc: "Angalia makosa ya tahajia na sarufi. Soma mara moja kama wewe ni mpokeaji — je inaeleweka?",
        },
        {
          icon: "📎",
          title: "Tangaza Kiambatisho Ndani",
          desc: 'Kama unaambatisha faili, sema ndani ya ujumbe: "Naambatisha CV yangu kwa rejea yako."',
        },
        {
          icon: "🔚",
          title: "Malizia kwa Heshima",
          desc: 'Malizia na "Kwa heshima," au "Wako mwaminifu," kisha jina lako kamili na namba ya simu.',
        },
        {
          icon: "⏰",
          title: "Jibu Haraka",
          desc: "Jaribu kujibu barua pepe ndani ya masaa 24. Kuchelewa kujibu kunaonyesha kutokuwa serious.",
        },
      ]
    : [
        {
          icon: "🙏",
          title: "Start with a Formal Greeting",
          desc: 'Begin with "Dear [Name]," or "To Whom It May Concern," — not "Hey" or "Yo".',
        },
        {
          icon: "🎯",
          title: "Keep the Subject Clear and Short",
          desc: "Subject should not exceed 10 words. The reader must understand the topic in one second.",
        },
        {
          icon: "✍️",
          title: "Introduce Yourself First",
          desc: "At the start of your message, state your name and who you are. The recipient may not know you.",
        },
        {
          icon: "📏",
          title: "Keep the Message Short and Clear",
          desc: "Write only what matters. Very long emails are rarely read. 2-4 paragraphs is enough for most emails.",
        },
        {
          icon: "👁️",
          title: "Re-read Before Sending",
          desc: "Check for spelling and grammar mistakes. Read it once as if you are the recipient — does it make sense?",
        },
        {
          icon: "📎",
          title: "Mention Attachments in the Body",
          desc: 'If you attach a file, state it inside the message: "Please find my CV attached for your reference."',
        },
        {
          icon: "🔚",
          title: "Close Respectfully",
          desc: 'End with "Yours faithfully," or "Kind regards," followed by your full name and phone number.',
        },
        {
          icon: "⏰",
          title: "Reply Promptly",
          desc: "Try to reply to emails within 24 hours. Delayed replies show a lack of professionalism.",
        },
      ];

  const jobTemplate = isSw
    ? [
        "Ndugu Msimamizi wa Rasilimali Watu,",
        "",
        "Ninaandika kuomba nafasi ya kazi ya [CHEO] iliyotangazwa",
        "tarehe [TAREHE] katika [CHANZO].",
        "",
        "Nina uzoefu wa [MIAKA] katika [ENEO]. Ninaamini",
        "ujuzi wangu unaweza kuchangia kampuni yako.",
        "",
        "Naambatisha CV yangu kwa rejea yako.",
        "",
        "Kwa heshima,",
        "[JINA LAKO KAMILI]",
        "[NAMBA YA SIMU]",
      ]
    : [
        "Dear HR Manager,",
        "",
        "I am writing to apply for the position of [JOB TITLE]",
        "advertised on [DATE] via [SOURCE].",
        "",
        "I have [YEARS] years of experience in [FIELD]. I believe",
        "my skills would be a great contribution to your team.",
        "",
        "Please find my CV attached for your reference.",
        "",
        "Yours faithfully,",
        "[YOUR FULL NAME]",
        "[PHONE NUMBER]",
      ];

  const inquiryTemplate = isSw
    ? [
        "Ndugu [JINA],",
        "",
        "Ninataka kupata taarifa kuhusu [MADA].",
        "",
        "Je, mnaweza kunieleza [SWALI LAKO HAPA]?",
        "",
        "Nitashukuru sana kwa jibu lako la haraka.",
        "",
        "Kwa heshima,",
        "[JINA LAKO KAMILI]",
        "[NAMBA YA SIMU]",
      ]
    : [
        "Dear [NAME],",
        "",
        "I would like to inquire about [TOPIC].",
        "",
        "Could you please clarify [YOUR QUESTION HERE]?",
        "",
        "I would greatly appreciate a prompt response.",
        "",
        "Kind regards,",
        "[YOUR FULL NAME]",
        "[PHONE NUMBER]",
      ];

  const phoneStepLabels = isSw
    ? ["1. Fungua Inbox", "2. Tunga Barua", "3. Barua Imetumwa"]
    : ["1. Open Inbox", "2. Compose Email", "3. Email Sent"];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-8 sm:space-y-10">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-black text-teal-700 leading-tight">
          {isSw ? "Jinsi ya Kutuma Barua" : "How to Send an Email"}
        </h2>
        <p className="text-slate-500 font-medium italic">
          {isSw ? "Kuelewa kila sehemu ya barua pepe" : "Understanding every part of an email"}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "🗂️ Sehemu Zote za Barua Pepe — Maelezo ya Kina" : "🗂️ All Email Parts — Full Explanation"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-[22px] sm:rounded-[24px] p-5 space-y-2 hover:border-teal-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                  {f.n}
                </div>
                <p className="font-black text-slate-800 text-sm">{f.key}</p>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "📱 Hatua kwa Hatua — Kwenye Simu ya Android" : "📱 Step by Step — On Your Android Phone"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Bonyeza kitufe hapa chini uone kila hatua kwenye skrini halisi ya simu:"
            : "Click the buttons below to see each step on a real phone screen:"}
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <div className="flex justify-center pb-10">
            <AndroidMockup stepLabel={phoneStepLabels[phoneStep]}>
              <AndroidComposeScreen isSw={isSw} step={phoneStep} />
            </AndroidMockup>
          </div>

          <div className="flex-1 space-y-4 w-full">
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setPhoneStep(i)}
                  className={`py-3 rounded-2xl font-black text-[11px] sm:text-xs transition-all duration-200 ${
                    phoneStep === i
                      ? "bg-teal-600 text-white shadow-lg"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {i + 1}. {[
                    isSw ? "Inbox" : "Inbox",
                    isSw ? "Tunga" : "Compose",
                    isSw ? "Tuma" : "Send",
                  ][i]}
                </button>
              ))}
            </div>

            {[
              {
                steps: isSw
                  ? [
                      "Bonyeza app ya Gmail (icon nyekundu na M nyeupe)",
                      "Utaona inbox yako na barua pepe zote zilizopita",
                      'Angalia kitufe cha "Tunga" (Compose) chini kulia — kina penseli',
                      "Bonyeza kitufe hicho kuanza kuandika barua pepe mpya",
                    ]
                  : [
                      "Tap the Gmail app (red icon with white M)",
                      "You will see your inbox with all previous emails",
                      'Find the "Compose" button at the bottom right — it has a pencil',
                      "Tap it to start writing a new email",
                    ],
              },
              {
                steps: isSw
                  ? [
                      "To: Weka anwani kamili ya mpokeaji kwa uangalifu",
                      "Subject: Andika kichwa kifupi chenye maana — maneno 5-8",
                      "Body: Anza na salamu, eleza kusudi lako, malizia na jina lako",
                      "Kiambatisho: Kama unataka kuongeza faili bonyeza ikoni ya 📎",
                    ]
                  : [
                      "To: Enter the full recipient address carefully",
                      "Subject: Write a short meaningful title — 5-8 words",
                      "Body: Start with a greeting, state your purpose, end with your name",
                      "Attachment: To add a file tap the 📎 paperclip icon",
                    ],
              },
              {
                steps: isSw
                  ? [
                      "Soma ujumbe wako tena kuhakikisha hakuna makosa",
                      'Bonyeza kitufe cha "TUMA" (Send) chenye rangi ya bluu',
                      'Utaona taarifa "Sent" ikithibitisha barua imetumwa',
                      'Unaweza kuona barua uliyotuma katika folda ya "Sent"',
                    ]
                  : [
                      "Read your message again to check for any mistakes",
                      'Tap the blue "SEND" button',
                      'You will see a "Sent" notification confirming delivery',
                      'You can view the sent email in the "Sent" folder',
                    ],
              },
            ][phoneStep].steps.map((s, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-2xl p-4">
                <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "🎯 Kichwa Kizuri vs Kibaya — Mifano Halisi" : "🎯 Good vs Bad Subject Lines — Real Examples"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Kichwa cha barua ndicho kinachofanya mpokeaji aamue kusoma au kupuuza barua yako:"
            : "The subject line is what makes the recipient decide to open or ignore your email:"}
        </p>
        <div className="space-y-3">
          {subjectExamples.map((s, i) => (
            <SubjectRow key={i} bad={s.bad} good={s.good} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "🎮 Jaribu Wewe Mwenyewe — Tunga Barua Pepe" : "🎮 Try It Yourself — Compose an Email"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Jaza sehemu zote hapa chini. Kitufe cha kutuma kitawaka tu barua yako ikiwa na taarifa sahihi:"
            : "Fill in all fields below. The send button only activates when your email has correct information:"}
        </p>
        <ComposeSimulator isSw={isSw} />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "🤝 Adabu za Barua Pepe — Unapaswa Kujua Hizi" : "🤝 Email Etiquette — You Must Know These"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Barua pepe nzuri si tu kuandika maneno — kuna njia sahihi ya kujibu na kutuma:"
            : "A good email is not just about writing words — there is a right way to communicate:"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {etiquette.map((e, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white border border-slate-200 rounded-[22px] p-5 hover:border-teal-200 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-2xl flex-shrink-0">{e.icon}</span>
              <div>
                <p className="font-black text-slate-800 text-sm">{e.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed mt-1">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "📝 Violezo vya Barua — Nakili Utumie Mara Moja" : "📝 Email Templates — Copy and Use Immediately"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Tumia violezo hivi kama mwanzo wa barua zako. Badilisha sehemu zilizomo kwenye [MABANO]:"
            : "Use these templates as a starting point. Replace the parts in [BRACKETS] with your information:"}
        </p>
        <div className="space-y-4">
          <EmailTemplate
            title={isSw ? "💼 Barua ya Ombi la Kazi" : "💼 Job Application Email"}
            lines={jobTemplate}
            color="bg-teal-600 border-teal-700"
            isSw={isSw}
          />
          <EmailTemplate
            title={isSw ? "❓ Barua ya Kuuliza Swali" : "❓ Inquiry Email"}
            lines={inquiryTemplate}
            color="bg-slate-700 border-slate-800"
            isSw={isSw}
          />
        </div>
      </div>

      <div className="bg-red-50 border-2 border-red-200 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 space-y-4">
        <h3 className="text-lg font-black text-red-800">
          {isSw ? "🚫 Mambo ya Kuepuka Kabisa" : "🚫 Things to Absolutely Avoid"}
        </h3>
        <div className="space-y-3">
          {(isSw
            ? [
                {
                  icon: "😡",
                  text: "Kutuma barua ukiwa na hasira — subiri, poa, kisha soma tena kabla kutuma",
                },
                {
                  icon: "🔡",
                  text: "Kutumia HERUFI KUBWA ZOTE — inaonekana kama kupiga kelele, ni kukosa adabu",
                },
                {
                  icon: "😂",
                  text: "Kutumia emoji nyingi sana katika barua rasmi — inakufanya usionekane serious",
                },
                {
                  icon: "📧",
                  text: "Kutuma barua bila kusoma tena — makosa ya tahajia yanakuaibisha",
                },
                {
                  icon: "📁",
                  text: "Kuambatisha faili kubwa sana (zaidi ya 25MB) — Gmail haikubali na barua itashindwa kutumwa",
                },
                {
                  icon: "🕐",
                  text: "Kuchelewa kujibu barua muhimu — jibu ndani ya masaa 24",
                },
              ]
            : [
                {
                  icon: "😡",
                  text: "Sending emails when angry — wait, calm down, then re-read before sending",
                },
                {
                  icon: "🔡",
                  text: "Using ALL CAPS — it looks like shouting and is considered rude",
                },
                {
                  icon: "😂",
                  text: "Using too many emojis in professional emails — it makes you look unserious",
                },
                {
                  icon: "📧",
                  text: "Sending without proofreading — spelling mistakes are embarrassing",
                },
                {
                  icon: "📁",
                  text: "Attaching files larger than 25MB — Gmail will not accept them and the email will fail",
                },
                {
                  icon: "🕐",
                  text: "Delaying replies to important emails — respond within 24 hours",
                },
              ]
          ).map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <p className="text-sm text-red-800 font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-[24px] sm:rounded-[28px] text-white shadow-lg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 space-y-3">
          <h4 className="font-black text-lg">
            {isSw ? "✅ Unachohitaji Kukumbuka" : "✅ Key Takeaways"}
          </h4>
          <ul className="space-y-2 text-teal-50 text-sm">
            {(isSw
              ? [
                  "Kila barua pepe ina sehemu 4: To, Subject, Body, na Attachment",
                  "Kichwa cha barua kiwe wazi, mfupi, na chenye maana — maneno 5-8 tu",
                  "Anza ujumbe na salamu rasmi na umalizie na jina lako kamili na simu",
                  "Soma tena kabla kutuma — kosa moja linaweza kubadilisha ujumbe wote",
                  "Jibu barua muhimu ndani ya masaa 24 kuonyesha uwajibikaji",
                ]
              : [
                  "Every email has 4 parts: To, Subject, Body, and Attachment",
                  "Subject must be clear, short, and meaningful — only 5-8 words",
                  "Start with a formal greeting and end with your full name and phone number",
                  "Proofread before sending — one mistake can change the entire message",
                  "Reply to important emails within 24 hours to show professionalism",
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

export default SendEmail;