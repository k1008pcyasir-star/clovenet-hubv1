import { useState } from "react";

const ProfessionalWriting = ({ lang }) => {
  const isSw = lang === "sw";
  const [activeType, setActiveType] = useState("job");
  const [activeSection, setActiveSection] = useState(null);

  const templates = {
    job: {
      label: isSw ? "💼 Barua ya Kazi" : "💼 Job Application",
      color: "bg-blue-600",
      lightBg: "bg-blue-50",
      border: "border-blue-200",
      accent: "text-blue-600",
      subject: "Application for Sales Manager Position – Yasir Hassan",
      parts: [
        {
          id: "to",
          label: isSw ? "Kwa (To)" : "To",
          tag: "TO",
          tagColor: "text-slate-600 bg-slate-100",
          content: "hr@companyname.co.tz",
          tip: isSw
            ? "Tumia anwani rasmi ya email ya kampuni — siyo ya kibinafsi kama info@ au gmail ya mtu binafsi ikiwa hujui."
            : "Use the official company email — not a personal one unless specified in the listing.",
          icon: "📧",
        },
        {
          id: "subject",
          label: isSw ? "Kichwa (Subject)" : "Subject Line",
          tag: "SUBJECT",
          tagColor: "text-violet-700 bg-violet-100",
          content: "Application for Sales Manager Position – Yasir Hassan",
          tip: isSw
            ? 'Subject lazima iwe wazi na isisababishe mwajiri kukuuliza maswali. Andika: "Application for [Nafasi] – [Jina lako]".'
            : 'Subject must be clear. Write: "Application for [Position] – [Your Name]".',
          icon: "📌",
        },
        {
          id: "greeting",
          label: isSw ? "Salamu (Greeting)" : "Greeting",
          tag: "SALAMU",
          tagColor: "text-emerald-700 bg-emerald-100",
          content: "Dear Hiring Manager,",
          tip: isSw
            ? 'Ikiwa hujui jina la mtu, andika "Dear Hiring Manager," au "Dear Sir/Madam,". Kamwe usiseme "Hey" au "Mambo".'
            : 'If you don’t know their name, write "Dear Hiring Manager," or "Dear Sir/Madam,". Never say "Hey" or "Hi".',
          icon: "👋",
        },
        {
          id: "opening",
          label: isSw ? "Ufunguzi (Opening)" : "Opening Paragraph",
          tag: "UFUNGUZI",
          tagColor: "text-blue-700 bg-blue-100",
          content:
            "I am writing to apply for the Sales Manager position advertised on your website. I am a motivated and experienced professional with 3 years of experience in sales and customer relations.",
          tip: isSw
            ? 'Sema moja kwa moja unaowasiliana nini na kwa nini. Epuka maneno mapana kama "I hope this email finds you well" — inafufuliwa na watu wengi na inachekesha.'
            : 'Say directly what you’re applying for and why. Avoid filler phrases like "I hope this email finds you well."',
          icon: "✍️",
        },
        {
          id: "body",
          label: isSw ? "Mwili (Body)" : "Main Body",
          tag: "MWILI",
          tagColor: "text-amber-700 bg-amber-100",
          content:
            "In my previous role at XYZ Company, I successfully managed a team of 5 sales representatives and exceeded quarterly targets by 20%. I am confident that my skills in communication, negotiation, and team leadership make me a strong candidate for this role.",
          tip: isSw
            ? 'Toa mfano mmoja au mawili wa kweli wa kazi uliyofanya na matokeo yake. Nambari zinaongeza nguvu — "nilipandisha mauzo kwa 20%".'
            : 'Give 1-2 real examples of your work and results. Numbers add power — "I increased sales by 20%".',
          icon: "📋",
        },
        {
          id: "closing",
          label: isSw ? "Kufunga (Closing)" : "Closing Paragraph",
          tag: "HITIMISHO",
          tagColor: "text-violet-700 bg-violet-100",
          content:
            "I have attached my CV and certificates for your review. I would welcome the opportunity to discuss my application further at your convenience. Thank you for your time and consideration.",
          tip: isSw
            ? "Taja viambatisho (CV, vyeti). Omba mahojiano kwa heshima. Shukuru muda wao."
            : "Mention attachments (CV, certificates). Politely request an interview. Thank them for their time.",
          icon: "🎯",
        },
        {
          id: "sign",
          label: isSw ? "Sahihi (Signature)" : "Signature",
          tag: "SAHIHI",
          tagColor: "text-emerald-700 bg-emerald-100",
          content: "Yours sincerely,\nYasir Hassan\n+255 7XX XXX XXX\nZanzibar, Tanzania",
          tip: isSw
            ? 'Tumia "Yours sincerely" ukijua jina la mtu, au "Yours faithfully" usipojua. Kisha jina lako kamili, simu, na mahali.'
            : 'Use "Yours sincerely" if you know their name, "Yours faithfully" if not. Then full name, phone, and location.',
          icon: "✒️",
        },
      ],
    },
    internship: {
      label: "🎓 Internship",
      color: "bg-violet-600",
      lightBg: "bg-violet-50",
      border: "border-violet-200",
      accent: "text-violet-600",
      subject: "Application for Marketing Internship – Fatuma Ali (University Student)",
      parts: [
        {
          id: "to",
          label: isSw ? "Kwa (To)" : "To",
          tag: "TO",
          tagColor: "text-slate-600 bg-slate-100",
          content: "internship@organization.co.tz",
          tip: isSw
            ? 'Tuma kwa anwani rasmi. Ikiwa hujui, tuma kwa info@ na andika "Attn: HR Department" ndani ya barua.'
            : 'Send to the official address. If unknown, send to info@ and write "Attn: HR Department" inside.',
          icon: "📧",
        },
        {
          id: "subject",
          label: isSw ? "Kichwa (Subject)" : "Subject",
          tag: "SUBJECT",
          tagColor: "text-violet-700 bg-violet-100",
          content: "Application for Marketing Internship – Fatuma Ali (University Student)",
          tip: isSw
            ? 'Kwa internship, ongeza "(University Student)" au "(College Student)" kwenye subject — inasaidia HR wakujua haraka.'
            : 'For internships, add "(University Student)" to subject — helps HR identify you quickly.',
          icon: "📌",
        },
        {
          id: "greeting",
          label: isSw ? "Salamu" : "Greeting",
          tag: "SALAMU",
          tagColor: "text-emerald-700 bg-emerald-100",
          content: "Dear Sir/Madam,",
          tip: isSw
            ? 'Kwa barua ya internship, "Dear Sir/Madam," ni salama na ya heshima.'
            : '"Dear Sir/Madam," is safe and respectful for internship applications.',
          icon: "👋",
        },
        {
          id: "opening",
          label: isSw ? "Ufunguzi" : "Opening",
          tag: "UFUNGUZI",
          tagColor: "text-violet-700 bg-violet-100",
          content:
            "I am a third-year student at the University of Dar es Salaam, pursuing a Bachelor of Commerce (Marketing). I am writing to apply for the Marketing Internship position at your esteemed organization.",
          tip: isSw
            ? "Taja chuo, mwaka wa masomo, na kozi unayosomea. Hii inakupa uaminifu mbele ya mwajiri."
            : "State your university, year of study, and course. This gives you credibility right away.",
          icon: "✍️",
        },
        {
          id: "body",
          label: isSw ? "Mwili" : "Body",
          tag: "MWILI",
          tagColor: "text-amber-700 bg-amber-100",
          content:
            "Through my coursework, I have developed strong skills in market research, digital marketing, and consumer behavior analysis. I am eager to apply these skills in a real-world environment and contribute meaningfully to your team.",
          tip: isSw
            ? "Hakuna uzoefu? Eleza ujuzi uliopata darasani na masomo yako. Pia unaweza kutaja miradi ya shule, mashindano, au kazi za kujitolea."
            : "No experience? Describe skills from coursework and projects. Mention school projects, competitions, or volunteer work.",
          icon: "📋",
        },
        {
          id: "closing",
          label: isSw ? "Hitimisho" : "Closing",
          tag: "HITIMISHO",
          tagColor: "text-violet-700 bg-violet-100",
          content:
            "Please find attached my CV, academic transcripts, and a letter of recommendation from my department. I am available to start immediately and am flexible with working hours. I look forward to hearing from you.",
          tip: isSw
            ? 'Kwa internship, onyesha ubunifu wako — "available to start immediately" na "flexible with hours" kunafurahisha waajiri.'
            : 'Show flexibility — "available immediately" and "flexible hours" are music to internship coordinators’ ears.',
          icon: "🎯",
        },
        {
          id: "sign",
          label: isSw ? "Sahihi" : "Signature",
          tag: "SAHIHI",
          tagColor: "text-emerald-700 bg-emerald-100",
          content: "Yours faithfully,\nFatuma Ali\n+255 6XX XXX XXX\nDar es Salaam, Tanzania",
          tip: isSw
            ? '"Yours faithfully" inatumika ukitumia "Dear Sir/Madam" badala ya jina. Hii ni kanuni ya lugha ya Kiingereza rasmi.'
            : '"Yours faithfully" is used when you wrote "Dear Sir/Madam" instead of their name — formal English rule.',
          icon: "✒️",
        },
      ],
    },
    followup: {
      label: isSw ? "🔄 Follow-Up" : "🔄 Follow-Up",
      color: "bg-emerald-600",
      lightBg: "bg-emerald-50",
      border: "border-emerald-200",
      accent: "text-emerald-600",
      subject: "Follow-Up: Sales Manager Application – Yasir Hassan",
      parts: [
        {
          id: "subject",
          label: isSw ? "Kichwa" : "Subject",
          tag: "SUBJECT",
          tagColor: "text-violet-700 bg-violet-100",
          content: "Follow-Up: Sales Manager Application – Yasir Hassan",
          tip: isSw
            ? 'Andika "Follow-Up:" mwanzoni mwa subject — inasaidia mwajiri kukumbuka barua yako ya awali.'
            : 'Write "Follow-Up:" at the start of subject — helps them connect it to your original email.',
          icon: "📌",
        },
        {
          id: "greeting",
          label: isSw ? "Salamu" : "Greeting",
          tag: "SALAMU",
          tagColor: "text-emerald-700 bg-emerald-100",
          content: "Dear Hiring Manager,",
          tip: isSw
            ? 'Ikiwa tayari unajua jina la mtu kutoka mawasiliano ya awali, tumia jina lake: "Dear Mr. Kamau,".'
            : 'If you now know their name from earlier communication, use it: "Dear Mr. Kamau,".',
          icon: "👋",
        },
        {
          id: "opening",
          label: isSw ? "Ukumbusho" : "Reminder",
          tag: "UKUMBUSHO",
          tagColor: "text-emerald-700 bg-emerald-100",
          content:
            "I hope this message finds you well. I am writing to follow up on my application for the Sales Manager position, which I submitted on [Date]. I remain very interested in this opportunity.",
          tip: isSw
            ? "Taja tarehe ulipotuma barua ya kwanza. Onyesha bado una nia — lakini usionyeshe haraka wala hasira."
            : "Mention when you applied. Show continued interest — but don’t sound desperate or pushy.",
          icon: "✍️",
        },
        {
          id: "closing",
          label: isSw ? "Ombi" : "Request",
          tag: "OMBI",
          tagColor: "text-emerald-700 bg-emerald-100",
          content:
            "Please let me know if you require any additional information or documents. I am available for an interview at your earliest convenience. Thank you for your time.",
          tip: isSw
            ? "Omba hatua inayofuata kwa heshima. Toa msaada (nyaraka zaidi) badala ya tu kuuliza."
            : "Politely request next steps. Offer help (more docs) rather than just asking.",
          icon: "🎯",
        },
        {
          id: "sign",
          label: isSw ? "Sahihi" : "Signature",
          tag: "SAHIHI",
          tagColor: "text-emerald-700 bg-emerald-100",
          content: "Yours sincerely,\nYasir Hassan\n+255 7XX XXX XXX",
          tip: isSw
            ? "Follow-up barua iwe fupi na ya moja kwa moja. Usiandike barua ndefu kama ya kwanza."
            : "Keep follow-up short and direct. Don’t rewrite your whole original email.",
          icon: "✒️",
        },
      ],
    },
    thankyou: {
      label: isSw ? "🙏 Shukrani" : "🙏 Thank You",
      color: "bg-amber-500",
      lightBg: "bg-amber-50",
      border: "border-amber-200",
      accent: "text-amber-600",
      subject: "Thank You – Interview for Sales Manager Position",
      parts: [
        {
          id: "subject",
          label: isSw ? "Kichwa" : "Subject",
          tag: "SUBJECT",
          tagColor: "text-violet-700 bg-violet-100",
          content: "Thank You – Interview for Sales Manager Position",
          tip: isSw
            ? "Tuma barua hii ndani ya masaa 24 baada ya mahojiano. Hii inakufanya ujitofautishe na waombaji wengine."
            : "Send this within 24 hours after your interview. This sets you apart from other candidates.",
          icon: "📌",
        },
        {
          id: "greeting",
          label: isSw ? "Salamu" : "Greeting",
          tag: "SALAMU",
          tagColor: "text-emerald-700 bg-emerald-100",
          content: "Dear Mr. Kamau,",
          tip: isSw
            ? "Hapa sasa unatumia jina la mtu uliyemkutana naye kwenye mahojiano. Hii inaonyesha umakini na heshima."
            : "Now use the interviewer’s name. It shows attention to detail and respect.",
          icon: "👋",
        },
        {
          id: "body",
          label: isSw ? "Shukrani na Thamani" : "Thanks & Value",
          tag: "SHUKRANI",
          tagColor: "text-amber-700 bg-amber-100",
          content:
            "Thank you for taking the time to meet with me today to discuss the Sales Manager position. I greatly enjoyed our conversation, particularly your insights about the company’s expansion plans into new markets.",
          tip: isSw
            ? "Taja kitu kimoja mahususi ulichozungumzwa kwenye mahojiano. Hii inaonyesha ulikuwa makini na unasikiliza."
            : "Mention one specific thing discussed. Shows you were truly engaged and listening.",
          icon: "✍️",
        },
        {
          id: "closing",
          label: isSw ? "Hitimisho" : "Closing",
          tag: "HITIMISHO",
          tagColor: "text-amber-700 bg-amber-100",
          content:
            "I remain very enthusiastic about the opportunity to contribute to your team. Please do not hesitate to contact me if you need any further information. I look forward to hearing from you.",
          tip: isSw
            ? "Onyesha hamasa yako bado ipo, lakini usiwe wa kutaka sana. Shukrani hii peke yake inakufanya kuonekana tofauti."
            : "Reaffirm your interest but don’t sound desperate. This email alone makes you stand out.",
          icon: "🎯",
        },
        {
          id: "sign",
          label: isSw ? "Sahihi" : "Signature",
          tag: "SAHIHI",
          tagColor: "text-emerald-700 bg-emerald-100",
          content: "Yours sincerely,\nYasir Hassan\n+255 7XX XXX XXX",
          tip: isSw
            ? '"Yours sincerely" kwa sababu unatumia jina la mtu (Dear Mr. Kamau). Ni kanuni ya Kiingereza rasmi.'
            : '"Yours sincerely" because you used their name. Standard formal English rule.',
          icon: "✒️",
        },
      ],
    },
  };

  const rules = [
    {
      icon: "🚫",
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      title: isSw ? "Epuka Emoji" : "No Emojis",
      desc: isSw
        ? "Usiongeze 😊🔥💯 kwenye barua ya kazi. Barua pepe si WhatsApp."
        : "No 😊🔥💯 in job emails. Email ≠ WhatsApp.",
    },
    {
      icon: "✅",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      title: isSw ? "Maneno Kamili" : "Full Words",
      desc: isSw
        ? 'Andika "please" si "plz", "you" si "u", "thank you" si "thx".'
        : 'Write "please" not "plz", "you" not "u", "thank you" not "thx".',
    },
    {
      icon: "📎",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      title: isSw ? "Taja Viambatisho" : "Mention Attachments",
      desc: isSw
        ? 'Sema "Please find attached my CV" ndani ya barua. Usisahau kuambatisha!'
        : 'Say "Please find attached my CV" in the email. Don’t forget to attach!',
    },
    {
      icon: "🔡",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-200",
      title: isSw ? "Herufi Ndogo/Kubwa" : "Capitalization",
      desc: isSw
        ? "Anza sentensi kwa herufi kubwa. Majina ya watu na kampuni pia."
        : "Capitalize sentence starts. Also proper nouns — names, companies.",
    },
    {
      icon: "⏱️",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      title: isSw ? "Jibu Haraka" : "Reply Promptly",
      desc: isSw
        ? "Ukipata jibu la mwajiri, jibu ndani ya masaa 24. Kuchelewa kunaonyesha kutokuwa makini."
        : "If an employer replies, respond within 24 hours. Delays signal disinterest.",
    },
    {
      icon: "📖",
      color: "text-slate-600",
      bg: "bg-slate-50",
      border: "border-slate-200",
      title: isSw ? "Soma Kabla Kutuma" : "Proofread First",
      desc: isSw
        ? "Soma barua yako mara mbili kabla kutuma. Makosa ya tahajia yanakudharau."
        : "Read your email twice before sending. Spelling errors look unprofessional.",
    },
  ];

  const mistakes = [
    {
      bad: isSw ? '"Dear Sir, Am interested for the job..."' : '"Dear Sir, Am interested for the job..."',
      fix: isSw ? 'Sahihi: "I am writing to apply for..."' : 'Correct: "I am writing to apply for..."',
    },
    {
      bad: isSw ? 'Kusahau kuambatisha CV lakini ukasema "see attached"' : 'Forgetting to attach CV but writing "see attached"',
      fix: isSw ? "Ambatisha kwanza, kisha andika barua" : "Attach first, then compose the email",
    },
    {
      bad: isSw ? '"plz send me the job details asap"' : '"plz send me the job details asap"',
      fix: isSw
        ? 'Sahihi: "Could you please share more details about the role?"'
        : 'Correct: "Could you please share more details about the role?"',
    },
  ];

  const active = templates[activeType];

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Header */}
      <div className="border-l-4 border-blue-600 pl-4 sm:pl-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
          {isSw ? "Uandishi Rasmi wa Barua Pepe" : "Professional Email Writing"}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500 italic font-semibold leading-relaxed">
          {isSw
            ? "Chagua aina ya barua hapa chini, kisha bonyeza kila sehemu kujifunza"
            : "Choose an email type below, then tap each section to learn more"}
        </p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {Object.entries(templates).map(([key, t]) => {
          const isActive = activeType === key;
          return (
            <button
              key={key}
              onClick={() => {
                setActiveType(key);
                setActiveSection(null);
              }}
              className={`rounded-2xl px-3 sm:px-4 py-3 text-xs sm:text-sm font-extrabold transition-all duration-200 border-2 shadow-sm hover:shadow-md ${
                isActive
                  ? `${t.color} text-white border-transparent scale-[1.02]`
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span className="block leading-snug">{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Email Composer */}
      <div className="rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
        <div className={`px-4 sm:px-6 py-4 ${active.color} flex items-center gap-2 sm:gap-3 flex-wrap`}>
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
          </div>
          <span className="text-white/90 text-[11px] sm:text-sm font-bold leading-relaxed">
            {active.label} — {isSw ? "Bonyeza sehemu yoyote kujifunza" : "Tap any section to learn"}
          </span>
        </div>

        <div className="py-2">
          {active.parts.map((part) => {
            const open = activeSection === part.id;

            return (
              <div
                key={part.id}
                onClick={() => setActiveSection(open ? null : part.id)}
                className={`cursor-pointer border-b border-slate-100 transition-all duration-200 ${
                  open ? `${active.lightBg} border-l-4` : "bg-transparent border-l-4 border-l-transparent"
                }`}
                style={open ? { borderLeftColor: "currentColor" } : undefined}
              >
                <div className={`px-4 sm:px-6 py-4 ${open ? active.accent : ""}`}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className={`shrink-0 mt-0.5 rounded-md px-2 py-1 text-[9px] sm:text-[10px] font-black tracking-wider ${part.tagColor}`}
                    >
                      {part.tag}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] sm:text-[15px] text-slate-900 leading-7 whitespace-pre-line break-words font-medium">
                        {part.content}
                      </p>

                      {open && (
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex items-start gap-3 shadow-sm">
                          <span className="text-xl shrink-0">{part.icon}</span>
                          <div>
                            <p className="text-xs sm:text-sm font-black text-slate-800 mb-1">
                              {part.label}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                              {part.tip}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <span
                      className={`shrink-0 text-sm sm:text-base font-black transition-transform duration-200 ${
                        open ? "rotate-90" : "rotate-0"
                      } ${active.accent}`}
                    >
                      ▶
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rules */}
      <div>
        <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <span>⚖️</span>
          <span>{isSw ? "Kanuni 6 za Dhahabu" : "6 Golden Rules"}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {rules.map((r, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-4 sm:p-5 ${r.bg} ${r.border} shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl shrink-0">{r.icon}</span>
                <span className={`text-xs sm:text-sm font-black uppercase tracking-wide ${r.color}`}>
                  {r.title}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sincerely vs Faithfully */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-slate-950 p-5 sm:p-6 lg:p-7">
        <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-blue-500/10" />
        <div className="relative z-10">
          <h4 className="text-sm sm:text-base font-black text-slate-100 mb-4 flex items-center gap-2">
            <span>✒️</span>
            <span>
              {isSw
                ? "Sincerely vs Faithfully — Tofauti Gani?"
                : "Sincerely vs Faithfully — What's the Difference?"}
            </span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="text-blue-300 text-sm sm:text-base font-black mb-2">
                "Yours sincerely,"
              </div>
              <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
                {isSw
                  ? 'Tumia ukimjua jina la mtu: "Dear Mr. Kamau,"'
                  : 'Use when you know their name: "Dear Mr. Kamau,"'}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="text-emerald-300 text-sm sm:text-base font-black mb-2">
                "Yours faithfully,"
              </div>
              <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
                {isSw
                  ? 'Tumia usipojua jina: "Dear Sir/Madam,"'
                  : 'Use when you don’t know name: "Dear Sir/Madam,"'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="rounded-[22px] sm:rounded-[24px] border-2 border-dashed border-orange-200 bg-orange-50 p-5 sm:p-6">
        <h4 className="text-sm sm:text-base font-black text-orange-700 mb-4">
          ⚠️{" "}
          {isSw
            ? "Makosa ya Kawaida Yanayoumiza Maombi Yako"
            : "Common Mistakes That Hurt Your Application"}
        </h4>

        <div className="space-y-4">
          {mistakes.map((m, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-lg shrink-0">❌</span>
              <div className="min-w-0">
                <p className="text-sm text-red-600 font-bold italic break-words leading-relaxed">
                  {m.bad}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-green-700 font-bold leading-relaxed">
                  ✅ {m.fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalWriting;