import { useState, useEffect, useRef } from "react";

const EmailSimulator = ({ lang }) => {
  const isSw = lang === "sw";

  const [screen, setScreen] = useState("inbox"); // inbox | compose | read | drafts | sent | spam
  const [composeTo, setComposeTo] = useState("");
  const [composeSubject, setComposeSubject] = useState("");
  const [composeBody, setComposeBody] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [sentAnim, setSentAnim] = useState(false);
  const [readEmail, setReadEmail] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [notification, setNotification] = useState(null);
  const [time, setTime] = useState("");
  const bodyRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  const [emails, setEmails] = useState({
    inbox: [
      {
        id: "i1",
        from: "HR Karibu Company",
        addr: "hr@karibu.co.tz",
        subject: isSw
          ? "Hongera! Umechaguliwa kwa Interview"
          : "Congratulations! You've been selected for interview",
        body: isSw
          ? "Habari,\n\nTunafurahi kukuarifu kwamba umechaguliwa kwa hatua inayofuata ya mahojiano kwa nafasi ya Sales Manager.\n\nTafadhali jibu barua hii kuthibitisha uwepo wako.\n\nKwa heshima,\nMary Akinyi\nHR Manager, Karibu Company"
          : "Dear Applicant,\n\nWe are pleased to inform you that you have been shortlisted for an interview for the Sales Manager position.\n\nPlease reply to confirm your availability.\n\nKind regards,\nMary Akinyi\nHR Manager, Karibu Company",
        time: "9:41 AM",
        unread: true,
        avatar: "HC",
        color: "#1a73e8",
        starred: false,
      },
      {
        id: "i2",
        from: "JobsKenya Portal",
        addr: "noreply@jobskenya.com",
        subject: isSw
          ? "Maombi yako yamepokewa"
          : "Your application has been received",
        body: isSw
          ? "Habari,\n\nTunakushukuri kwa kutuma maombi yako. Tutakuwasiliana nawe baadaye.\n\nJobsKenya Team"
          : "Hello,\n\nThank you for submitting your application. We will be in touch.\n\nJobsKenya Team",
        time: "8:05 AM",
        unread: true,
        avatar: "JK",
        color: "#34a853",
        starred: true,
      },
      {
        id: "i3",
        from: "LinkedIn",
        addr: "notifications@linkedin.com",
        subject: isSw
          ? "Watu 5 walitazama profile yako"
          : "5 people viewed your profile this week",
        body: isSw
          ? "Watu 5 walitazama profile yako wiki hii. Angalia ni nani.\n\nLinkedIn"
          : "5 people viewed your LinkedIn profile this week. See who.\n\nLinkedIn",
        time: "Jana",
        unread: false,
        avatar: "Li",
        color: "#0077b5",
        starred: false,
      },
    ],
    sent: [],
    drafts: [],
    spam: [
      {
        id: "s1",
        from: "prize@winner999.net",
        addr: "prize@winner999.net",
        subject: "🎉 UMESHINDA TSH 5,000,000! Bonyeza sasa!",
        body: "Umechaguliwa kupata tuzo ya shilingi milioni tano. Tuma nambari yako ya simu sasa.",
        time: "7:14 AM",
        unread: true,
        avatar: "⚠️",
        color: "#ef4444",
        isSpam: true,
      },
      {
        id: "s2",
        from: "Bright Future HR",
        addr: "hr@brightfuture.co.tz",
        subject: isSw
          ? "Tunapenda kukuandikia kuhusu nafasi ya kazi"
          : "We'd love to speak with you about a role",
        body: isSw
          ? "Habari,\n\nTuna nafasi nzuri ya kazi inayokufaa. Tafadhali wasiliana nasi.\n\nBright Future Team"
          : "Hello,\n\nWe have an exciting opportunity that matches your profile. Please get in touch.\n\nBright Future Team",
        time: "Jana",
        unread: true,
        avatar: "BF",
        color: "#8b5cf6",
        isLegit: true,
      },
    ],
  });

  const notify = (msg, color = "#1a73e8") => {
    setNotification({ msg, color });
    setTimeout(() => setNotification(null), 3000);
  };

  const validateAndSend = () => {
    const issues = [];
    const slang = [
      "mambo",
      "plz",
      "thx",
      "lol",
      "xaxa",
      "habar",
      "sup",
      "hey",
      "😂",
      "🔥",
      "😊",
    ];

    const foundSlang = slang.filter(
      (w) =>
        composeBody.toLowerCase().includes(w) ||
        composeSubject.toLowerCase().includes(w)
    );

    if (!composeTo.includes("@") || !composeTo.includes(".")) {
      issues.push({
        type: "error",
        msg: isSw
          ? "❌ Anwani ya email si sahihi — lazima iwe na @ na (.com, .tz, n.k.)"
          : "❌ Invalid email address — must include @ and a domain (.com, .tz, etc.)",
      });
    }

    if (composeSubject.trim().length < 5) {
      issues.push({
        type: "warn",
        msg: isSw
          ? "⚠️ Subject ni fupi mno — andika zaidi ya maneno 2"
          : "⚠️ Subject too short — write at least a few words",
      });
    }

    if (composeBody.trim().length < 30) {
      issues.push({
        type: "warn",
        msg: isSw
          ? "⚠️ Mwili wa barua ni mfupi mno — ongeza maelezo zaidi"
          : "⚠️ Email body is too short — add more content",
      });
    }

    if (foundSlang.length > 0) {
      issues.push({
        type: "error",
        msg: isSw
          ? `❌ Lugha ya mtaani imepatikana: "${foundSlang[0]}" — hii si barua rasmi`
          : `❌ Informal language detected: "${foundSlang[0]}" — keep it professional`,
      });
    }

    if (!composeBody.toLowerCase().includes("dear")) {
      issues.push({
        type: "warn",
        msg: isSw
          ? '💡 Kidokezo: Anza na salamu rasmi kama "Dear Sir/Madam,"'
          : '💡 Tip: Start with a formal greeting like "Dear Sir/Madam,"',
      });
    }

    setFeedback(issues);

    const hardErrors = issues.filter((i) => i.type === "error");

    if (
      hardErrors.length === 0 &&
      composeBody.trim().length >= 30 &&
      composeSubject.trim().length >= 5
    ) {
      const newEmail = {
        id: "sent_" + Date.now(),
        from: isSw ? "Mimi" : "Me",
        addr: "me@gmail.com",
        to: composeTo,
        subject: composeSubject,
        body: composeBody,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        unread: false,
        avatar: "📤",
        color: "#10b981",
      };

      setEmails((prev) => ({
        ...prev,
        sent: [newEmail, ...prev.sent],
      }));

      setSentAnim(true);

      setTimeout(() => {
        setSentAnim(false);
        setScreen("inbox");
        setComposeTo("");
        setComposeSubject("");
        setComposeBody("");
        setFeedback([]);
        notify(
          isSw ? "✅ Barua imetumwa!" : "✅ Email sent successfully!",
          "#10b981"
        );
      }, 2200);
    }
  };

  const saveDraft = () => {
    if (!composeSubject && !composeBody) return;

    const draft = {
      id: "draft_" + Date.now(),
      from: isSw ? "Mimi (Rasimu)" : "Me (Draft)",
      addr: "me@gmail.com",
      to: composeTo,
      subject: composeSubject || (isSw ? "(Bila kichwa)" : "(No subject)"),
      body: composeBody,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      unread: false,
      avatar: "✏️",
      color: "#f59e0b",
      isDraft: true,
    };

    setEmails((prev) => ({
      ...prev,
      drafts: [draft, ...prev.drafts],
    }));

    setScreen("inbox");
    setComposeTo("");
    setComposeSubject("");
    setComposeBody("");
    setFeedback([]);
    notify(isSw ? "📝 Imehifadhiwa kama Rasimu" : "📝 Saved as Draft", "#f59e0b");
  };

  const markNotSpam = (email) => {
    setEmails((prev) => ({
      ...prev,
      spam: prev.spam.filter((e) => e.id !== email.id),
      inbox: [{ ...email, isSpam: false, isLegit: false }, ...prev.inbox],
    }));
    setScreen("spam");
    setReadEmail(null);
    notify(isSw ? "✅ Imehamishiwa Inbox" : "✅ Moved to Inbox", "#10b981");
  };

  const openEmail = (email, folder) => {
    setReadEmail({ ...email, folder });

    setEmails((prev) => ({
      ...prev,
      [folder]: prev[folder].map((e) =>
        e.id === email.id ? { ...e, unread: false } : e
      ),
    }));

    setScreen("read");
    setShowSidebar(false);
  };

  const unreadCount = (folder) =>
    (emails[folder] || []).filter((e) => e.unread).length;

  const folders = [
    { id: "inbox", icon: "📥", label: isSw ? "Inbox" : "Inbox", color: "#1a73e8" },
    { id: "drafts", icon: "📝", label: isSw ? "Rasimu" : "Drafts", color: "#f59e0b" },
    { id: "sent", icon: "📤", label: isSw ? "Zilizotumwa" : "Sent", color: "#10b981" },
    { id: "spam", icon: "🚫", label: "Spam", color: "#ef4444" },
  ];

  const folderColor = {
    inbox: "#1a73e8",
    drafts: "#f59e0b",
    sent: "#10b981",
    spam: "#ef4444",
  };

  const activeColor = folderColor[screen] || "#1a73e8";
  const activeList = emails[screen] || [];

  const Avatar = ({ email, size = "normal" }) => {
    const dimension = size === "large" ? "w-11 h-11" : "w-10 h-10";
    const fontSize =
      String(email.avatar).length > 2
        ? size === "large"
          ? "text-lg"
          : "text-base"
        : size === "large"
        ? "text-sm"
        : "text-xs";

    return (
      <div
        className={`shrink-0 rounded-full flex items-center justify-center font-black ${dimension} ${fontSize}`}
        style={{
          background: email.isSpam ? "#fee2e2" : `${email.color}22`,
          color: email.color,
          border: email.isLegit ? "2px solid #8b5cf6" : "none",
        }}
      >
        {email.avatar}
      </div>
    );
  };

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4 sm:p-5 flex gap-3 items-start shadow-sm">
        <span className="text-2xl shrink-0">📱</span>
        <div>
          <div className="font-black text-blue-700 text-sm sm:text-base leading-snug">
            {isSw ? "Simulator ya Gmail — Zoezi la Kweli" : "Gmail Simulator — Real Practice"}
          </div>
          <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1 leading-relaxed">
            {isSw
              ? "Hii ni mfano wa Gmail kwenye simu. Andika barua, itume, angalia Spam, Drafts na Sent — kama Gmail ya kweli!"
              : "This is a real Gmail simulation on a phone. Compose, send, check Spam, Drafts, Sent — just like real Gmail!"}
          </div>
        </div>
      </div>

      {/* Phone frame wrapper */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[380px] sm:max-w-[400px] lg:max-w-[420px]">
          {/* Device shell */}
          <div className="relative rounded-[42px] sm:rounded-[48px] bg-neutral-950 p-2.5 sm:p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] border border-white/10">
            {/* Side buttons */}
            <div className="absolute -left-[3px] top-20 h-10 w-[3px] rounded-l bg-neutral-700" />
            <div className="absolute -left-[3px] top-32 h-14 w-[3px] rounded-l bg-neutral-700" />
            <div className="absolute -left-[3px] top-48 h-14 w-[3px] rounded-l bg-neutral-700" />
            <div className="absolute -right-[3px] top-36 h-16 w-[3px] rounded-r bg-neutral-700" />

            {/* Notch */}
            <div className="h-8 flex items-center justify-center mb-1">
              <div className="w-28 h-6 bg-black rounded-b-2xl flex items-center justify-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
                <div className="w-10 h-1.5 rounded-full bg-neutral-900" />
              </div>
            </div>

            {/* Screen */}
            <div className="relative min-h-[620px] bg-white rounded-[30px] sm:rounded-[34px] overflow-hidden flex flex-col">
              {/* Notification */}
              {notification && (
                <div
                  className="absolute top-14 left-4 right-4 z-[100] rounded-2xl px-4 py-3 text-white text-xs font-black shadow-lg"
                  style={{ background: notification.color }}
                >
                  {notification.msg}
                </div>
              )}

              {/* Sidebar */}
              {showSidebar && (
                <div className="absolute inset-0 z-50 flex">
                  <div className="w-[250px] max-w-[78%] h-full bg-white shadow-2xl rounded-l-[30px] flex flex-col">
                    <div className="pt-12 px-5 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_32dp.png"
                          className="w-7 h-7"
                          alt="Gmail"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        <span className="text-lg font-black text-slate-700">Gmail</span>
                      </div>
                    </div>

                    <div className="py-2">
                      {folders.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => {
                            setScreen(f.id);
                            setShowSidebar(false);
                          }}
                          className="w-full flex items-center gap-3 px-5 py-3 text-left transition-colors"
                          style={{
                            background: screen === f.id ? `${f.color}18` : "transparent",
                            borderRight:
                              screen === f.id ? `3px solid ${f.color}` : "3px solid transparent",
                          }}
                        >
                          <span className="text-lg shrink-0">{f.icon}</span>
                          <span
                            className="flex-1 text-sm font-extrabold"
                            style={{ color: screen === f.id ? f.color : "#3c4043" }}
                          >
                            {f.label}
                          </span>
                          {unreadCount(f.id) > 0 && (
                            <span
                              className="text-[10px] font-black text-white rounded-full px-2 py-0.5"
                              style={{ background: f.color }}
                            >
                              {unreadCount(f.id)}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="flex-1" onClick={() => setShowSidebar(false)} />
                  </div>

                  <div className="flex-1 bg-black/20" onClick={() => setShowSidebar(false)} />
                </div>
              )}

              {/* Status bar */}
              <div className="px-5 pt-2 pb-1 flex items-center justify-between text-[11px] font-black text-slate-900 shrink-0">
                <span>{time || "9:41"}</span>
                <span className="tracking-wider">▲▲▲ 🔋</span>
              </div>

              {/* Top bar */}
              {screen !== "compose" && screen !== "read" && (
                <div className="px-3 sm:px-4 py-2 flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setShowSidebar(true)}
                    className="text-xl p-1 text-slate-700"
                  >
                    ☰
                  </button>

                  <div className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-xs text-slate-500 font-bold">
                    {isSw ? "Tafuta kwenye barua..." : "Search in mail..."}
                  </div>

                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-black shrink-0">
                    U
                  </div>
                </div>
              )}

              {/* Folder bar */}
              {screen !== "compose" && screen !== "read" && (
                <div className="px-4 pb-3 border-b border-slate-100 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{folders.find((f) => f.id === screen)?.icon}</span>
                    <span className="text-sm font-black text-slate-800">
                      {folders.find((f) => f.id === screen)?.label}
                    </span>
                    {unreadCount(screen) > 0 && (
                      <span className="text-[11px] font-bold" style={{ color: activeColor }}>
                        ({unreadCount(screen)} {isSw ? "mpya" : "new"})
                      </span>
                    )}
                  </div>

                  {screen === "spam" && (
                    <div className="mt-1 text-[10px] font-bold text-red-500 leading-relaxed">
                      ⚠️{" "}
                      {isSw
                        ? "Angalia hapa kila siku — barua nzuri inaweza kukuja hapa!"
                        : "Check here daily — real emails can land here by mistake!"}
                    </div>
                  )}
                </div>
              )}

              {/* List screens */}
              {["inbox", "drafts", "sent", "spam"].includes(screen) && (
                <div className="flex-1 overflow-y-auto">
                  {activeList.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center px-6 py-12 text-center opacity-60">
                      <span className="text-5xl mb-2">{folders.find((f) => f.id === screen)?.icon}</span>
                      <span className="text-sm font-bold text-slate-500">
                        {isSw ? "Hakuna barua hapa" : "Nothing here yet"}
                      </span>
                    </div>
                  ) : (
                    activeList.map((email) => (
                      <button
                        key={email.id}
                        onClick={() => openEmail(email, screen)}
                        className={`w-full text-left px-4 py-3 border-b border-slate-100 flex items-start gap-3 relative transition-colors ${
                          email.unread ? "bg-white" : "bg-slate-50/70"
                        }`}
                      >
                        {email.unread && (
                          <div
                            className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                            style={{ background: activeColor }}
                          />
                        )}

                        <Avatar email={email} />

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between gap-3 mb-1">
                            <span
                              className={`text-xs truncate ${
                                email.unread ? "font-black text-slate-900" : "font-bold text-slate-700"
                              }`}
                            >
                              {email.from}
                            </span>
                            <span className="text-[10px] text-slate-400 whitespace-nowrap shrink-0">
                              {email.time}
                            </span>
                          </div>

                          <div
                            className={`text-xs truncate ${
                              email.unread ? "font-extrabold" : "font-semibold"
                            }`}
                            style={{ color: email.isSpam ? "#ef4444" : "#202124" }}
                          >
                            {email.subject}
                          </div>

                          <div className="text-[10px] text-slate-400 truncate mt-0.5">
                            {email.body.slice(0, 55)}...
                          </div>

                          {email.isLegit && (
                            <div className="mt-2 inline-block rounded-md bg-amber-100 text-amber-800 text-[9px] font-black px-2 py-1">
                              ⚠️ {isSw ? "Barua nzuri iliingia Spam!" : "Real email ended up in Spam!"}
                            </div>
                          )}

                          {email.isDraft && (
                            <div className="mt-2 inline-block rounded-md bg-amber-100 text-amber-800 text-[9px] font-black px-2 py-1">
                              ✏️ {isSw ? "Bado hujatuma" : "Not sent yet"}
                            </div>
                          )}
                        </div>

                        {email.starred && <span className="text-base text-amber-500 shrink-0">★</span>}
                      </button>
                    ))
                  )}
                </div>
              )}

              {/* Read screen */}
              {screen === "read" && readEmail && (
                <div className="flex-1 overflow-y-auto flex flex-col">
                  <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => {
                        setScreen(readEmail.folder);
                        setReadEmail(null);
                      }}
                      className="text-lg text-slate-500 px-1"
                    >
                      ←
                    </button>

                    <span className="text-sm font-black text-slate-800 truncate flex-1">
                      {readEmail.subject}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar email={readEmail} size="large" />
                      <div className="min-w-0">
                        <div className="text-sm font-black text-slate-900 truncate">
                          {readEmail.from}
                        </div>
                        <div className="text-[11px] text-slate-400 break-all">
                          {readEmail.addr} • {readEmail.time}
                        </div>
                      </div>
                    </div>

                    <div className="text-[13px] text-slate-800 leading-7 whitespace-pre-wrap font-serif">
                      {readEmail.body}
                    </div>

                    {readEmail.folder === "spam" && (
                      <div className="mt-6 flex gap-3">
                        {readEmail.isLegit && (
                          <button
                            onClick={() => markNotSpam(readEmail)}
                            className="flex-1 rounded-xl bg-emerald-100 text-emerald-800 py-2.5 text-xs font-black"
                          >
                            ✅ {isSw ? "Si Spam — Hamisha Inbox" : "Not Spam — Move to Inbox"}
                          </button>
                        )}

                        <button
                          onClick={() => {
                            setEmails((prev) => ({
                              ...prev,
                              spam: prev.spam.filter((e) => e.id !== readEmail.id),
                            }));
                            setScreen("spam");
                            setReadEmail(null);
                            notify(isSw ? "🗑️ Imefutwa" : "🗑️ Deleted", "#ef4444");
                          }}
                          className="flex-1 rounded-xl bg-red-100 text-red-700 py-2.5 text-xs font-black"
                        >
                          🗑️ {isSw ? "Futa" : "Delete"}
                        </button>
                      </div>
                    )}

                    {readEmail.isDraft && (
                      <button
                        onClick={() => {
                          setComposeTo(readEmail.to || "");
                          setComposeSubject(readEmail.subject || "");
                          setComposeBody(readEmail.body || "");
                          setEmails((prev) => ({
                            ...prev,
                            drafts: prev.drafts.filter((e) => e.id !== readEmail.id),
                          }));
                          setScreen("compose");
                          setReadEmail(null);
                        }}
                        className="mt-5 w-full rounded-xl bg-amber-100 text-amber-800 py-2.5 text-xs font-black"
                      >
                        ✏️ {isSw ? "Endelea Kuandika" : "Continue Writing"}
                      </button>
                    )}

                    {readEmail.folder === "inbox" && !readEmail.isDraft && (
                      <button
                        onClick={() => {
                          setComposeTo(readEmail.addr);
                          setComposeSubject("Re: " + readEmail.subject);
                          setComposeBody("");
                          setScreen("compose");
                          setReadEmail(null);
                        }}
                        className="mt-5 w-full rounded-xl bg-blue-100 text-blue-700 py-2.5 text-xs font-black"
                      >
                        ↩️ {isSw ? "Jibu Barua Hii" : "Reply to this Email"}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Compose screen */}
              {screen === "compose" && (
                <div className="flex-1 flex flex-col overflow-y-auto relative">
                  {sentAnim && (
                    <div className="absolute inset-0 z-[99] bg-white rounded-[30px] flex flex-col items-center justify-center gap-4">
                      <div className="text-6xl animate-bounce">📨</div>
                      <div className="text-base font-black text-emerald-600">
                        {isSw ? "Inatumwa..." : "Sending..."}
                      </div>
                      <div className="w-52 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full animate-[progress_2s_linear_forwards]" />
                      </div>
                      <style>{`
                        @keyframes progress {
                          from { width: 0 }
                          to { width: 100% }
                        }
                      `}</style>
                    </div>
                  )}

                  <div className="px-4 py-3 bg-blue-600 flex items-center justify-between shrink-0">
                    <button
                      onClick={saveDraft}
                      className="rounded-lg bg-white/15 text-white px-3 py-1.5 text-[11px] font-black"
                    >
                      {isSw ? "💾 Hifadhi" : "💾 Save Draft"}
                    </button>

                    <span className="text-white text-sm font-black">
                      {isSw ? "Barua Mpya" : "New Message"}
                    </span>

                    <button
                      onClick={() => {
                        setScreen("inbox");
                        setFeedback([]);
                      }}
                      className="rounded-lg bg-white/15 text-white px-3 py-1.5 text-[11px] font-black"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                    <span className="text-[11px] font-black text-slate-400 w-14 shrink-0">
                      Kwa/To:
                    </span>
                    <input
                      value={composeTo}
                      onChange={(e) => setComposeTo(e.target.value)}
                      className="flex-1 outline-none text-sm font-semibold text-slate-800 bg-transparent"
                      placeholder="hr@company.co.tz"
                    />
                  </div>

                  <div className="border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                    <span className="text-[11px] font-black text-slate-400 w-14 shrink-0">
                      Subject:
                    </span>
                    <input
                      value={composeSubject}
                      onChange={(e) => setComposeSubject(e.target.value)}
                      className="flex-1 outline-none text-sm font-bold text-slate-800 bg-transparent"
                      placeholder={
                        isSw ? "Ombi la Kazi – Jina lako" : "Job Application – Your Name"
                      }
                    />
                  </div>

                  <textarea
                    ref={bodyRef}
                    value={composeBody}
                    onChange={(e) => setComposeBody(e.target.value)}
                    className="flex-1 min-h-[240px] resize-none outline-none px-4 py-4 text-[13px] leading-7 text-slate-800 font-serif"
                    placeholder={
                      isSw
                        ? "Dear Sir/Madam,\n\n(Anza barua yako hapa...)"
                        : "Dear Sir/Madam,\n\n(Start your email here...)"
                    }
                  />

                  {feedback.length > 0 && (
                    <div className="px-4 py-3 bg-rose-50 border-t border-rose-100">
                      {feedback.map((f, i) => (
                        <div
                          key={i}
                          className={`text-[11px] font-bold rounded-lg px-3 py-2 mb-2 last:mb-0 ${
                            f.type === "error"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {f.msg}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="px-4 py-3 border-t border-slate-100 bg-white flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4 text-slate-400 text-lg">
                      <span className="cursor-pointer">📎</span>
                      <span className="cursor-pointer">🖼️</span>
                      <span className="cursor-pointer">🔗</span>
                    </div>

                    <button
                      onClick={validateAndSend}
                      className="rounded-full bg-blue-600 text-white px-5 py-2.5 text-sm font-black shadow-lg flex items-center gap-2"
                    >
                      📤 {isSw ? "TUMA" : "SEND"}
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom nav */}
              {screen !== "compose" && screen !== "read" && (
                <div className="border-t border-slate-100 px-2 py-2.5 flex items-center justify-around shrink-0">
                  {folders.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setScreen(f.id)}
                      className="relative flex flex-col items-center gap-1 px-3 py-1"
                    >
                      <span className="text-xl">{f.icon}</span>
                      <span
                        className="text-[9px] font-black"
                        style={{ color: screen === f.id ? f.color : "#9aa0a6" }}
                      >
                        {f.label}
                      </span>

                      {unreadCount(f.id) > 0 && (
                        <div
                          className="absolute -top-0.5 right-1 w-4 h-4 rounded-full text-white text-[8px] font-black flex items-center justify-center"
                          style={{ background: f.color }}
                        >
                          {unreadCount(f.id)}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* FAB */}
          {screen !== "compose" && screen !== "read" && (
            <div className="flex justify-end px-4 pt-3 pb-1">
              <button
                onClick={() => {
                  setScreen("compose");
                  setFeedback([]);
                }}
                className="rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-black shadow-[0_8px_24px_rgba(26,115,232,0.35)] flex items-center gap-2"
              >
                ✏️ {isSw ? "Andika Barua" : "Compose"}
              </button>
            </div>
          )}

          {/* Home indicator */}
          <div className="flex justify-center pt-2 pb-2">
            <div className="w-28 h-1 bg-neutral-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          {
            icon: "✏️",
            color: "#1a73e8",
            bg: "#e8f0fe",
            title: isSw ? "Andika Barua" : "Compose",
            desc: isSw
              ? 'Bonyeza "Andika Barua" uandike barua yako ya kwanza'
              : 'Tap "Compose" and write your first real email',
          },
          {
            icon: "🚫",
            color: "#ef4444",
            bg: "#fee2e2",
            title: "Spam",
            desc: isSw
              ? "Angalia Spam — kuna barua nzuri ya kazi iliyoingia huko kwa makosa!"
              : "Check Spam — there's a real job email stuck there by mistake!",
          },
          {
            icon: "📝",
            color: "#f59e0b",
            bg: "#fef3c7",
            title: isSw ? "Rasimu" : "Drafts",
            desc: isSw
              ? 'Bonyeza "Hifadhi" kupitia kuandika bila kutuma'
              : 'Tap "Save Draft" to store unfinished emails',
          },
          {
            icon: "📤",
            color: "#10b981",
            bg: "#d1fae5",
            title: isSw ? "Zilizotumwa" : "Sent",
            desc: isSw
              ? "Baada ya kutuma, angalia Sent kuthibitisha barua yako ilifika"
              : "After sending, check Sent to confirm delivery",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="rounded-2xl p-4 border border-black/5 shadow-sm"
            style={{ background: t.bg }}
          >
            <div className="text-xl mb-2">{t.icon}</div>
            <div className="text-xs sm:text-sm font-black mb-1" style={{ color: t.color }}>
              {t.title}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-700 font-semibold leading-relaxed">
              {t.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailSimulator;