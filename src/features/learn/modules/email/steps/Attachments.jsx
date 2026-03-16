import React, { useState } from "react";

/* ─── File Name Checker ─── */
const FileNameChecker = ({ isSw }) => {
  const [name, setName] = useState("");
  const clean = name.trim();
  const hasSpace = /\s/.test(clean);
  const hasSpecial = /[^a-zA-Z0-9._\-]/.test(clean);
  const hasExt = /\.(pdf|docx|jpg|jpeg|png)$/i.test(clean);
  const isPdf = /\.pdf$/i.test(clean);
  const tooShort = clean.replace(/\.[^.]+$/, "").length < 5;
  const hasRealName = /[a-z]{2,}/i.test(clean.replace(/\.[^.]+$/, ""));
  const isGood =
    !hasSpace &&
    !hasSpecial &&
    hasExt &&
    isPdf &&
    !tooShort &&
    hasRealName;

  const issues = [];
  if (hasSpace)
    issues.push(
      isSw
        ? "Ina nafasi — tumia (-) au (_) badala yake"
        : "Has spaces — use (-) or (_) instead"
    );
  if (hasSpecial)
    issues.push(
      isSw
        ? "Ina herufi/alama zisizoruhusiwa"
        : "Contains invalid characters or symbols"
    );
  if (!hasExt)
    issues.push(
      isSw
        ? "Hakuna kiendelezi (.pdf, .docx...)"
        : "Missing file extension (.pdf, .docx...)"
    );
  if (hasExt && !isPdf)
    issues.push(
      isSw
        ? "Tumia .pdf — ni bora zaidi kwa maombi ya kazi"
        : "Use .pdf — it is best for job applications"
    );
  if (tooShort && clean.length > 0)
    issues.push(isSw ? "Jina ni fupi sana" : "Name is too short");

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 space-y-4">
      <h4 className="font-black text-slate-800">
        {isSw ? "🔍 Angalia Jina la Faili Lako" : "🔍 Check Your File Name"}
      </h4>

      <p className="text-slate-500 text-sm leading-relaxed">
        {isSw
          ? "Andika jina la faili lako hapa uone kama ni sahihi:"
          : "Type your file name below to see if it is correct:"}
      </p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={
          isSw ? "mfano: CV-Rashid-Juma.pdf" : "e.g. CV-Rashid-Juma.pdf"
        }
        className="w-full border-2 border-slate-200 focus:border-teal-600 rounded-2xl px-4 py-3 text-slate-800 font-mono font-bold outline-none transition-colors bg-white text-sm"
      />

      {clean.length > 0 && (
        <div
          className={`rounded-2xl p-4 space-y-3 border-2 ${
            isGood
              ? "bg-green-50 border-green-300"
              : "bg-red-50 border-red-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">{isGood ? "✅" : "❌"}</span>
            <p
              className={`font-black text-sm ${
                isGood ? "text-green-700" : "text-red-700"
              }`}
            >
              {isGood
                ? isSw
                  ? "Jina zuri! Faili hili linaweza kutumwa salama."
                  : "Great name! This file can be sent safely."
                : isSw
                ? "Jina lina matatizo — rekebisha hapa chini:"
                : "Name has issues — fix them below:"}
            </p>
          </div>

          {issues.length > 0 && (
            <ul className="space-y-1.5">
              {issues.map((iss, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-red-700"
                >
                  <span className="flex-shrink-0 mt-0.5">⚠️</span>
                  <span className="font-semibold">{iss}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

/* ─── File Type Card ─── */
const FileTypeCard = ({ icon, ext, label, good, desc, color }) => (
  <div
    className={`rounded-[20px] border-2 p-4 sm:p-5 space-y-2 ${
      good
        ? "border-green-200 bg-green-50"
        : "border-red-100 bg-red-50"
    }`}
  >
    <div className="flex items-center justify-between">
      <div className={`text-xs font-black px-2 py-1 rounded-full ${color}`}>
        {ext}
      </div>
      <span>{good ? "✅" : "❌"}</span>
    </div>

    <div className="text-2xl">{icon}</div>
    <p className="font-black text-slate-800 text-sm">{label}</p>
    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

/* ─── Naming Simulator ─── */
const NamingSimulator = ({ isSw }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [docType, setDocType] = useState("cv");

  const f = first.trim().replace(/\s+/g, "-");
  const l = last.trim().replace(/\s+/g, "-");

  const docLabels = isSw
    ? {
        cv: "CV",
        cert: "Cheti",
        degree: "Shahada",
        transcript: "Matokeo",
        cover: "Barua-Maombi",
      }
    : {
        cv: "CV",
        cert: "Certificate",
        degree: "Degree",
        transcript: "Transcript",
        cover: "Cover-Letter",
      };

  const examples =
    f && l
      ? [
          {
            name: `${docLabels[docType]}-${f}-${l}.pdf`,
            good: true,
            label: isSw ? "Bora zaidi ✨" : "Best ✨",
          },
          {
            name: `${f}-${l}-${docLabels[docType]}.pdf`,
            good: true,
            label: isSw ? "Nzuri" : "Good",
          },
          {
            name: `${f.toLowerCase()}.${l.toLowerCase()}.${docType}.pdf`,
            good: true,
            label: isSw ? "Inakubalika" : "Acceptable",
          },
          {
            name: `${docType}1.pdf`,
            good: false,
            label: isSw ? "EPUKA" : "AVOID",
          },
          {
            name: `my ${docType}.pdf`,
            good: false,
            label: isSw ? "EPUKA" : "AVOID",
          },
          {
            name: `${docType} final final2.pdf`,
            good: false,
            label: isSw ? "EPUKA" : "AVOID",
          },
        ]
      : [];

  return (
    <div className="bg-teal-50 border border-teal-100 rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 space-y-5">
      <h4 className="font-black text-slate-800">
        {isSw
          ? "🏗️ Jenga Jina Sahihi la Faili Lako"
          : "🏗️ Build the Right File Name"}
      </h4>

      <p className="text-slate-500 text-sm leading-relaxed">
        {isSw
          ? "Weka jina lako na chagua aina ya hati upate mifano halisi:"
          : "Enter your name and choose document type to get real examples:"}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-black text-slate-600 uppercase tracking-wider block mb-1">
            {isSw ? "Jina la Kwanza" : "First Name"}
          </label>
          <input
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            placeholder={isSw ? "mfano: Rashid" : "e.g. Rashid"}
            className="w-full border-2 border-teal-200 focus:border-teal-600 rounded-xl px-3 py-2 text-slate-800 font-bold text-sm outline-none bg-white"
          />
        </div>

        <div>
          <label className="text-xs font-black text-slate-600 uppercase tracking-wider block mb-1">
            {isSw ? "Jina la Ukoo" : "Last Name"}
          </label>
          <input
            value={last}
            onChange={(e) => setLast(e.target.value)}
            placeholder={isSw ? "mfano: Juma" : "e.g. Juma"}
            className="w-full border-2 border-teal-200 focus:border-teal-600 rounded-xl px-3 py-2 text-slate-800 font-bold text-sm outline-none bg-white"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-black text-slate-600 uppercase tracking-wider block mb-2">
          {isSw ? "Aina ya Hati" : "Document Type"}
        </label>

        <div className="flex flex-wrap gap-2">
          {Object.entries(docLabels).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setDocType(key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                docType === key
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-white border border-teal-200 text-slate-600 hover:bg-teal-50"
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      {examples.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-black text-slate-600 uppercase tracking-wider">
            {isSw ? "Mifano ya Majina:" : "Name Examples:"}
          </p>

          {examples.map((ex, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-2xl border ${
                ex.good
                  ? "bg-white border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <span
                className={`font-black text-xs md:text-sm font-mono break-all ${
                  ex.good ? "text-slate-700" : "text-red-500 line-through"
                }`}
              >
                {ex.name}
              </span>

              <span
                className={`text-xs font-black px-2 py-0.5 rounded-full flex-shrink-0 ${
                  ex.good
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {ex.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Android Screens ─── */
const AttachScreen0 = ({ isSw }) => (
  <div className="h-full bg-white flex flex-col">
    <div className="bg-white px-4 pt-2 pb-2 flex items-center gap-3 border-b border-slate-100 shadow-sm">
      <span className="text-lg">☰</span>
      <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5 text-[10px] text-slate-400 font-bold">
        Search in mail
      </div>
      <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-[10px] font-black">
        R
      </div>
    </div>

    <div className="flex-1 overflow-hidden">
      {[
        {
          from: "Google",
          subj: isSw ? "Karibu Gmail!" : "Welcome to Gmail!",
          time: "10:23",
          unread: true,
          avatar: "G",
          color: "bg-blue-600",
        },
        {
          from: "Kampuni Ltd",
          subj: isSw ? "Nafasi ya Kazi — Afisa IT" : "Job Opening — IT Officer",
          time: "9:05",
          unread: true,
          avatar: "K",
          color: "bg-red-600",
        },
        {
          from: "Amina Hassan",
          subj: isSw ? "CV yangu imetumwa!" : "My CV is sent!",
          time: "Mon",
          unread: false,
          avatar: "A",
          color: "bg-green-600",
        },
      ].map((m, i) => (
        <div
          key={i}
          className={`flex gap-3 px-4 py-3 border-b border-slate-50 ${
            m.unread ? "bg-teal-50/40" : ""
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black text-white flex-shrink-0 ${m.color}`}
          >
            {m.avatar}
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
              <span className="text-[9px] text-slate-400 flex-shrink-0">
                {m.time}
              </span>
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
  </div>
);

const AttachScreen1 = ({ isSw }) => (
  <div className="h-full bg-white flex flex-col">
    <div className="bg-white px-4 pt-2 pb-2 flex items-center gap-3 border-b border-slate-100">
      <span className="text-slate-500 text-sm">✕</span>
      <span className="flex-1 text-[11px] font-black text-slate-800">
        {isSw ? "Ujumbe Mpya" : "New Message"}
      </span>
      <span className="text-slate-400 text-xs">💾</span>
    </div>

    <div className="flex-1 px-4 py-2 space-y-0 text-[10px]">
      <div className="py-2 border-b border-slate-100 flex gap-2">
        <span className="text-slate-400 font-black w-8">From</span>
        <span className="text-slate-600 font-bold">rashid.juma@gmail.com</span>
      </div>
      <div className="py-2 border-b border-slate-100 flex gap-2 items-center">
        <span className="text-slate-400 font-black w-8">To</span>
        <div className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full text-[9px] font-bold">
          hr@kampuni.co.tz
        </div>
      </div>
      <div className="py-2 border-b border-slate-100 flex gap-2">
        <span className="text-slate-400 font-black w-8">Subj</span>
        <span className="font-black text-slate-800">
          {isSw ? "Ombi la Internship — IT" : "Internship Application — IT"}
        </span>
      </div>
      <div className="py-3 text-[9px] text-slate-500 leading-relaxed whitespace-pre-line">
        {isSw
          ? "Ndugu Msimamizi,\n\nNaomba nafasi ya internship..."
          : "Dear Manager,\n\nI wish to apply for the internship..."}
      </div>
    </div>

    <div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between">
      <div className="flex gap-3 text-base">
        <span className="text-teal-600 text-lg font-black">📎</span>
        <span className="text-slate-400">📷</span>
        <span className="text-slate-400">🔗</span>
      </div>
      <div className="bg-slate-200 rounded-full px-4 py-2 opacity-50">
        <span className="text-slate-500 text-[10px] font-black">
          {isSw ? "▶ TUMA" : "▶ SEND"}
        </span>
      </div>
    </div>
  </div>
);

const AttachScreen2 = ({ isSw }) => (
  <div className="h-full bg-white flex flex-col">
    <div className="bg-slate-800 px-4 pt-2 pb-3 flex items-center gap-3">
      <span className="text-white text-sm">✕</span>
      <span className="text-white text-[11px] font-black flex-1">
        {isSw ? "Chagua Faili" : "Select File"}
      </span>
    </div>

    <div className="px-4 py-2 border-b border-slate-100">
      <div className="text-[9px] text-slate-400 font-black uppercase tracking-wider mb-2">
        {isSw ? "Hifadhi ya Simu" : "Phone Storage"}
      </div>
      <div className="flex gap-2 pb-1">
        {[
          isSw ? "Hati Zangu" : "My Documents",
          isSw ? "Upakuaji" : "Downloads",
          "Drive",
        ].map((f, i) => (
          <div
            key={i}
            className={`px-3 py-1.5 rounded-full text-[9px] font-black whitespace-nowrap flex-shrink-0 ${
              i === 0 ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {f}
          </div>
        ))}
      </div>
    </div>

    <div className="flex-1 px-4 py-2 space-y-1 overflow-hidden">
      {[
        { name: "CV-Rashid-Juma.pdf", size: "245 KB", selected: true },
        { name: "Cheti-Kompyuta.pdf", size: "1.2 MB", selected: false },
        { name: "Picha_ya_kitambulisho.jpg", size: "3.4 MB", selected: false },
        { name: "Transcript-2024.pdf", size: "890 KB", selected: false },
      ].map((f, i) => (
        <div
          key={i}
          className={`flex items-center gap-3 px-3 py-2 rounded-xl ${
            f.selected ? "bg-teal-50 border border-teal-200" : "bg-slate-50"
          }`}
        >
          <span className="text-base">{f.name.endsWith(".pdf") ? "📄" : "🖼️"}</span>
          <div className="flex-1 min-w-0">
            <p
              className={`text-[9px] font-black truncate ${
                f.selected ? "text-teal-700" : "text-slate-700"
              }`}
            >
              {f.name}
            </p>
            <p className="text-[8px] text-slate-400">{f.size}</p>
          </div>
          {f.selected && <span className="text-teal-500 text-xs">✓</span>}
        </div>
      ))}
    </div>

    <div className="px-4 pb-4">
      <div className="bg-teal-600 rounded-2xl py-2.5 text-center">
        <span className="text-white text-[11px] font-black">
          {isSw ? "Ambatisha Faili Hili" : "Attach This File"}
        </span>
      </div>
    </div>
  </div>
);

const AttachScreen3 = ({ isSw }) => (
  <div className="h-full bg-white flex flex-col">
    <div className="bg-white px-4 pt-2 pb-2 flex items-center gap-3 border-b border-slate-100">
      <span className="text-slate-500 text-sm">✕</span>
      <span className="flex-1 text-[11px] font-black text-slate-800">
        {isSw ? "Ujumbe Mpya" : "New Message"}
      </span>
    </div>

    <div className="flex-1 px-4 py-2 text-[10px]">
      <div className="py-2 border-b border-slate-100 flex gap-2 items-center">
        <span className="text-slate-400 font-black w-8">To</span>
        <div className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full text-[9px] font-bold">
          hr@kampuni.co.tz
        </div>
      </div>

      <div className="py-2 border-b border-slate-100 flex gap-2">
        <span className="text-slate-400 font-black w-8">Subj</span>
        <span className="font-black text-slate-800">
          {isSw ? "Ombi la Internship — IT" : "Internship Application — IT"}
        </span>
      </div>

      <div className="py-3 text-[9px] text-slate-500 leading-relaxed whitespace-pre-line">
        {isSw
          ? "Ndugu Msimamizi,\n\nNaomba nafasi ya internship..."
          : "Dear Manager,\n\nI wish to apply for the internship..."}
      </div>

      <div className="mt-1 bg-teal-50 border border-teal-200 rounded-xl p-2 flex items-center gap-2">
        <span className="text-base">📄</span>
        <div className="flex-1 min-w-0">
          <p className="text-[9px] font-black text-teal-700 truncate">
            CV-Rashid-Juma.pdf
          </p>
          <p className="text-[8px] text-slate-400">245 KB • PDF</p>
        </div>
        <span className="text-slate-300 text-xs">✕</span>
      </div>
    </div>

    <div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between">
      <div className="flex gap-3 text-slate-400 text-base">
        <span>📎</span>
        <span>📷</span>
      </div>
      <div className="bg-teal-600 rounded-full px-5 py-2 shadow-lg">
        <span className="text-white text-[11px] font-black">
          {isSw ? "▶ TUMA" : "▶ SEND"}
        </span>
      </div>
    </div>
  </div>
);

const AttachScreen4 = ({ isSw }) => (
  <div className="h-full bg-white flex flex-col items-center justify-center gap-4 p-5">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl">
      📤
    </div>

    <div className="text-center space-y-1">
      <p className="text-[12px] font-black text-slate-800">
        {isSw ? "Barua na Faili Vimetumwa!" : "Email with Attachment Sent!"}
      </p>
      <p className="text-[9px] text-slate-400">
        {isSw
          ? "Mpokeaji atapata CV yako hivi karibuni"
          : "Recipient will receive your CV shortly"}
      </p>
    </div>

    <div className="w-full space-y-2">
      <div className="bg-slate-50 rounded-xl p-2.5">
        <p className="text-[8px] text-slate-400 font-black uppercase">To</p>
        <p className="text-[10px] font-bold text-slate-700">hr@kampuni.co.tz</p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-2.5 flex items-center gap-2">
        <span className="text-sm">📄</span>
        <div>
          <p className="text-[9px] font-black text-green-700">
            CV-Rashid-Juma.pdf
          </p>
          <p className="text-[8px] text-slate-400">
            245 KB {isSw ? "imetumwa" : "sent"}
          </p>
        </div>
        <span className="ml-auto text-green-500 text-sm">✓</span>
      </div>
    </div>
  </div>
);

/* ─── Phone Mockup ─── */
const PhoneMockup = ({ children, label }) => (
  <div className="flex-shrink-0 flex flex-col items-center gap-3 mx-auto">
    <div className="w-[210px] sm:w-[220px] bg-slate-900 rounded-[36px] sm:rounded-[40px] border-[7px] border-slate-800 shadow-2xl overflow-hidden h-[420px] sm:h-[440px]">
      <div className="bg-white flex items-center justify-between px-4 py-1">
        <span className="text-[9px] font-black text-slate-700">9:41</span>
        <div className="w-12 h-2.5 bg-slate-800 rounded-full" />
        <span className="text-[8px] text-slate-600">🔋 100%</span>
      </div>
      <div className="h-[calc(100%-24px)] overflow-hidden">{children}</div>
    </div>

    {label && (
      <p className="text-xs font-black text-slate-500 uppercase tracking-widest text-center">
        {label}
      </p>
    )}
  </div>
);

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const Attachments = ({ lang }) => {
  const isSw = lang === "sw";
  const [phoneStep, setPhoneStep] = useState(0);

  const phoneSteps = isSw
    ? [
        {
          label: "1. Inbox ya Gmail",
          desc: "Fungua Gmail. Angalia kitufe cha Compose (✏️) chini kulia. Bonyeza ili uanze kuandika.",
        },
        {
          label: "2. Tunga Barua",
          desc: "Jaza To, Subject, na ujumbe. Kisha bonyeza ikoni ya 📎 (paperclip) chini kuambatisha faili.",
        },
        {
          label: "3. Chagua Faili",
          desc: "Dirisha la kuchagua faili linafunguka. Nenda Documents au Downloads. Chagua PDF yako.",
        },
        {
          label: "4. Faili Limeambatishwa",
          desc: "Faili linaonekana chini ya ujumbe. Thibitisha jina lake ni sahihi kisha utume.",
        },
        {
          label: "5. Imetumwa!",
          desc: "Barua pepe na faili lako la CV vimefika kwa mwajiri. Unaweza kuangalia folda ya Sent.",
        },
      ]
    : [
        {
          label: "1. Gmail Inbox",
          desc: "Open Gmail. Find the Compose button (✏️) at the bottom right. Tap to start writing.",
        },
        {
          label: "2. Compose Email",
          desc: "Fill in To, Subject, and message body. Then tap the 📎 paperclip icon at the bottom to attach.",
        },
        {
          label: "3. Choose File",
          desc: "A file picker opens. Navigate to Documents or Downloads. Select your PDF file.",
        },
        {
          label: "4. File Attached",
          desc: "The file appears below your message. Confirm the name is correct then you can send.",
        },
        {
          label: "5. Sent!",
          desc: "Your email and CV attachment have been delivered to the employer. Check the Sent folder.",
        },
      ];

  const phoneScreens = [
    <AttachScreen0 isSw={isSw} />,
    <AttachScreen1 isSw={isSw} />,
    <AttachScreen2 isSw={isSw} />,
    <AttachScreen3 isSw={isSw} />,
    <AttachScreen4 isSw={isSw} />,
  ];

  const fileTypes = isSw
    ? [
        {
          icon: "📄",
          ext: "PDF",
          label: "PDF Document",
          good: true,
          color: "bg-green-100 text-green-700",
          desc: "Bora kabisa. Muundo hauvurugiki kwenye simu yoyote au kompyuta yoyote.",
        },
        {
          icon: "📝",
          ext: "DOCX",
          label: "Word Document",
          good: true,
          color: "bg-blue-100 text-blue-700",
          desc: "Inakubalika lakini inaweza kuonekana tofauti kwenye kompyuta nyingine. Badilisha PDF ikiwezekana.",
        },
        {
          icon: "🖼️",
          ext: "JPG/PNG",
          label: "Picha ya Kawaida",
          good: false,
          color: "bg-red-100 text-red-700",
          desc: "Epuka kwa CV na vyeti. Mwajiri hawezi kukopya maandishi. Tumia PDF scan badala yake.",
        },
        {
          icon: "📊",
          ext: "XLSX",
          label: "Excel File",
          good: false,
          color: "bg-red-100 text-red-700",
          desc: "Si sahihi kwa CV au cheti. Tumia PDF au Word.",
        },
      ]
    : [
        {
          icon: "📄",
          ext: "PDF",
          label: "PDF Document",
          good: true,
          color: "bg-green-100 text-green-700",
          desc: "Best option. Layout never breaks on any phone or computer the employer uses.",
        },
        {
          icon: "📝",
          ext: "DOCX",
          label: "Word Document",
          good: true,
          color: "bg-blue-100 text-blue-700",
          desc: "Acceptable but may look different on other computers. Convert to PDF when possible.",
        },
        {
          icon: "🖼️",
          ext: "JPG/PNG",
          label: "Regular Photo",
          good: false,
          color: "bg-red-100 text-red-700",
          desc: "Avoid for CVs and certificates. Employer cannot copy text. Use a PDF scan instead.",
        },
        {
          icon: "📊",
          ext: "XLSX",
          label: "Excel File",
          good: false,
          color: "bg-red-100 text-red-700",
          desc: "Not appropriate for a CV or certificate. Use PDF or Word instead.",
        },
      ];

  const namingRules = isSw
    ? [
        { ok: true, rule: "Anza na aina ya hati: CV-, Cheti-, Shahada-" },
        { ok: true, rule: "Fuatisha jina lako kamili: CV-Rashid-Juma" },
        {
          ok: true,
          rule: "Tumia kistari (-) au kishoro (_) kati ya maneno — si nafasi",
        },
        {
          ok: true,
          rule: "Malizia na .pdf kama PDF: CV-Rashid-Juma.pdf",
        },
        {
          ok: false,
          rule: 'Usitumie nafasi: "CV Rashid Juma.pdf" — hatarishi',
        },
        {
          ok: false,
          rule: "Usitumie herufi za Kiswahili au alama: #, ?, &, %, !",
        },
        {
          ok: false,
          rule: "Usitumie majina yasiyoeleweka: file1.pdf, document.pdf, final.pdf",
        },
        {
          ok: false,
          rule: 'Usitumie neno "final" mara nyingi: CV-final-final2.pdf',
        },
      ]
    : [
        { ok: true, rule: "Start with document type: CV-, Certificate-, Degree-" },
        { ok: true, rule: "Follow with your full name: CV-Rashid-Juma" },
        {
          ok: true,
          rule: "Use dashes (-) or underscores (_) between words — no spaces",
        },
        {
          ok: true,
          rule: "End with .pdf if it is a PDF: CV-Rashid-Juma.pdf",
        },
        {
          ok: false,
          rule: 'Do not use spaces: "CV Rashid Juma.pdf" — risky',
        },
        {
          ok: false,
          rule: "Do not use special characters: #, ?, &, %, !, accented letters",
        },
        {
          ok: false,
          rule: "Do not use vague names: file1.pdf, document.pdf, final.pdf",
        },
        {
          ok: false,
          rule: 'Do not repeat "final": CV-final-final2.pdf — looks careless',
        },
      ];

  const goodNames = isSw
    ? [
        {
          name: "CV-Rashid-Juma.pdf",
          type: "CV ya Kawaida",
          badge: "bg-blue-100 text-blue-700",
        },
        {
          name: "Cheti-Kompyuta-Amina-Hassan.pdf",
          type: "Cheti cha Kozi",
          badge: "bg-emerald-100 text-emerald-700",
        },
        {
          name: "Shahada-Uhandisi-IT-John-Mwangi.pdf",
          type: "Shahada ya Chuo",
          badge: "bg-purple-100 text-purple-700",
        },
        {
          name: "Barua-Maombi-Internship-Fatuma-Ali.pdf",
          type: "Cover Letter",
          badge: "bg-amber-100 text-amber-700",
        },
        {
          name: "Matokeo-Darasa-la-12-Juma-Said.pdf",
          type: "Transcript / Matokeo",
          badge: "bg-pink-100 text-pink-700",
        },
      ]
    : [
        {
          name: "CV-Rashid-Juma.pdf",
          type: "Standard CV",
          badge: "bg-blue-100 text-blue-700",
        },
        {
          name: "Certificate-Computer-Amina-Hassan.pdf",
          type: "Course Certificate",
          badge: "bg-emerald-100 text-emerald-700",
        },
        {
          name: "Degree-IT-Engineering-John-Mwangi.pdf",
          type: "University Degree",
          badge: "bg-purple-100 text-purple-700",
        },
        {
          name: "Cover-Letter-Internship-Fatuma-Ali.pdf",
          type: "Cover Letter",
          badge: "bg-amber-100 text-amber-700",
        },
        {
          name: "Transcript-Form6-Juma-Said.pdf",
          type: "Transcript / Results",
          badge: "bg-pink-100 text-pink-700",
        },
      ];

  const sendChecklist = isSw
    ? [
        { icon: "📄", text: "Faili ni PDF — si picha wala Word tu" },
        {
          icon: "✏️",
          text: "Jina la faili linaonyesha jina lako kamili na aina ya hati",
        },
        { icon: "📏", text: "Ukubwa wa faili hauzidi MB 25" },
        {
          icon: "👁️",
          text: "Umefungua faili mwenyewe na kuona linaonekana vizuri",
        },
        { icon: "📧", text: "Anwani ya mpokeaji imeandikwa bila makosa" },
        {
          icon: "📝",
          text: "Umesema ndani ya ujumbe kuwa unaambatisha faili",
        },
      ]
    : [
        { icon: "📄", text: "File is PDF — not just a photo or Word document" },
        {
          icon: "✏️",
          text: "File name shows your full name and document type",
        },
        { icon: "📏", text: "File size does not exceed 25 MB" },
        {
          icon: "👁️",
          text: "You have opened the file yourself and confirmed it looks correct",
        },
        { icon: "📧", text: "Recipient address is typed without any mistakes" },
        {
          icon: "📝",
          text: "You have mentioned the attachment inside your message body",
        },
      ];

  const stepTips = isSw
    ? [
        [
          "Kitufe cha Compose kiko chini kulia — rangi ya bluu na kalamu",
          "Kama hukuona bonyeza Gmail icon kwenye simu yako",
        ],
        [
          "To: ni anwani ya mwajiri — si yako",
          "Bonyeza 📎 kabla ya kutuma ili uambatishe faili",
        ],
        [
          'Faili zako ziko kwenye "Documents" au "Downloads"',
          "Tafuta faili lenye jina sahihi la PDF",
        ],
        [
          "Angalia jina la faili limeonyeshwa vizuri",
          "Kama lipo vibaya bonyeza X kulizuia na ujaribu tena",
        ],
        [
          "Angalia folda ya Sent kuthibitisha barua ilitumwa",
          "Unaweza kutuma maombi mengi lakini kila moja itumie wakati wake",
        ],
      ]
    : [
        [
          "Compose button is bottom right — blue with a pencil",
          "If you cannot find it tap the Gmail icon on your phone",
        ],
        [
          "To: is the employer address — not yours",
          "Tap 📎 before sending to attach your file",
        ],
        [
          'Your files are in "Documents" or "Downloads"',
          "Look for the file with the correct PDF name",
        ],
        [
          "Check the file name is displayed correctly",
          "If wrong tap X to remove it and try again",
        ],
        [
          "Check the Sent folder to confirm the email was sent",
          "You can send multiple applications but take time with each one",
        ],
      ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-8 sm:space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          📎 {isSw ? "Somo la Gmail" : "Gmail Lesson"}
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-teal-700 leading-tight">
          {isSw ? "Kuambatisha Faili (Attachments)" : "Attaching Files to Gmail"}
        </h2>

        <p className="text-slate-500 font-medium text-base leading-relaxed">
          {isSw
            ? "Jinsi ya kutuma CV na vyeti vyako kwa mwajiri hatua kwa hatua"
            : "How to send your CV and certificates to an employer step by step"}
        </p>
      </div>

      <div className="relative p-5 sm:p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-[24px] sm:rounded-[28px] shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-10 rounded-full -translate-y-8 translate-x-8" />
        <div className="relative flex items-center gap-4 sm:gap-5">
          <div className="text-4xl sm:text-5xl font-black text-red-500 italic shrink-0">
            PDF
          </div>
          <div>
            <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">
              ⭐ {isSw ? "Kanuni ya Dhahabu" : "The Golden Rule"}
            </p>
            <p className="text-slate-200 text-sm leading-relaxed">
              {isSw
                ? "Daima badilisha CV na Vyeti vyako kuwa PDF kabla ya kutuma. PDF inahakikisha mpangilio wako hauvurugiki kwenye simu yoyote au kompyuta yoyote ya mwajiri."
                : "Always convert your CV and Certificates to PDF before sending. PDF ensures your layout stays perfect on any employer phone or computer."}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-black text-slate-800">
          {isSw
            ? "📱 Skrini Halisi — Simu ya Android Hatua kwa Hatua"
            : "📱 Real Screens — Android Phone Step by Step"}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Bonyeza kila hatua uone jinsi skrini ya simu inavyoonekana:"
            : "Tap each step to see exactly what your phone screen looks like:"}
        </p>

        <div className="bg-slate-900 rounded-[26px] sm:rounded-[32px] p-5 sm:p-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            {phoneSteps.map((s, i) => (
              <button
                key={i}
                onClick={() => setPhoneStep(i)}
                className={`px-3 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                  phoneStep === i
                    ? "bg-teal-600 text-white shadow-lg scale-105"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="flex justify-center w-full lg:w-auto">
              <PhoneMockup label={phoneSteps[phoneStep].label}>
                {phoneScreens[phoneStep]}
              </PhoneMockup>
            </div>

            <div className="flex-1 space-y-4 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                  {phoneStep + 1}
                </div>
                <h4 className="text-white font-black text-base leading-tight">
                  {phoneSteps[phoneStep].label}
                </h4>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {phoneSteps[phoneStep].desc}
              </p>

              <div className="bg-slate-800 rounded-2xl p-4 space-y-2">
                <p className="text-slate-400 text-xs font-black uppercase tracking-wider">
                  {isSw ? "Kumbuka:" : "Remember:"}
                </p>

                {stepTips[phoneStep].map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="text-teal-400 font-black flex-shrink-0 mt-0.5">
                      →
                    </span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setPhoneStep(Math.max(0, phoneStep - 1))}
                  disabled={phoneStep === 0}
                  className="px-4 py-2 bg-slate-700 disabled:opacity-30 hover:bg-slate-600 text-white font-black text-xs rounded-xl transition-colors"
                >
                  ← {isSw ? "Nyuma" : "Back"}
                </button>

                <div className="flex gap-1 flex-1 justify-center">
                  {phoneSteps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === phoneStep ? "w-6 bg-teal-400" : "w-1.5 bg-slate-600"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setPhoneStep(Math.min(phoneSteps.length - 1, phoneStep + 1))
                  }
                  disabled={phoneStep === phoneSteps.length - 1}
                  className="px-4 py-2 bg-teal-600 disabled:opacity-30 hover:bg-teal-500 text-white font-black text-xs rounded-xl transition-colors"
                >
                  {isSw ? "Mbele" : "Next"} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "📂 Aina za Faili — Ipi Itumie?" : "📂 File Types — Which Should You Use?"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Si aina zote za faili zinafaa kwa maombi ya kazi. Jifunze tofauti:"
            : "Not all file types work well for job applications. Learn the difference:"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {fileTypes.map((ft, i) => (
            <FileTypeCard key={i} {...ft} />
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 space-y-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative z-10 space-y-4">
          <h3 className="text-white font-black text-lg">
            {isSw
              ? "🔄 Jinsi ya Kubadilisha Hati kuwa PDF"
              : "🔄 How to Convert Documents to PDF"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {(isSw
              ? [
                  {
                    icon: "📱",
                    title: "Kwenye Simu (Android)",
                    steps: [
                      "Fungua hati yako kwenye app ya Office au WPS",
                      'Bonyeza dots 3 au File',
                      'Chagua "Export" au "Save as PDF"',
                      "Hifadhi kwenye Documents",
                    ],
                  },
                  {
                    icon: "🌐",
                    title: "Mtandaoni (Bure)",
                    steps: [
                      "Nenda ilovepdf.com au smallpdf.com",
                      'Bonyeza "Word to PDF"',
                      "Pakia faili lako la Word",
                      "Pakua PDF iliyotengenezwa",
                    ],
                  },
                  {
                    icon: "📸",
                    title: "Kutoka Picha ya Simu",
                    steps: [
                      "Piga picha ya wazi ya hati",
                      "Tumia app ya CamScanner au Adobe Scan",
                      "App itabadilisha picha kuwa PDF",
                      "Pakua na uhifadhi PDF",
                    ],
                  },
                ]
              : [
                  {
                    icon: "📱",
                    title: "On Phone (Android)",
                    steps: [
                      "Open your document in Office or WPS app",
                      "Tap the 3 dots or File menu",
                      'Choose "Export" or "Save as PDF"',
                      "Save it to your Documents folder",
                    ],
                  },
                  {
                    icon: "🌐",
                    title: "Online (Free)",
                    steps: [
                      "Go to ilovepdf.com or smallpdf.com",
                      'Click "Word to PDF"',
                      "Upload your Word file",
                      "Download the converted PDF",
                    ],
                  },
                  {
                    icon: "📸",
                    title: "From a Phone Photo",
                    steps: [
                      "Take a clear photo of the document",
                      "Use CamScanner or Adobe Scan app",
                      "The app converts the photo to PDF",
                      "Download and save the PDF file",
                    ],
                  },
                ]
            ).map((method, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-2xl p-4 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{method.icon}</span>
                  <p className="text-white font-black text-sm">{method.title}</p>
                </div>

                <ol className="space-y-1.5">
                  {method.steps.map((s, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-slate-300 text-xs"
                    >
                      <span className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center font-black flex-shrink-0 text-[9px]">
                        {j + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "✏️ Kanuni za Kuipa Jina Faili Lako" : "✏️ Rules for Naming Your Files"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Jina la faili linasema mengi kwa mwajiri kabla hata hajafungua. Fuata kanuni hizi:"
            : "The file name says a lot to the employer before they even open it. Follow these rules:"}
        </p>

        <div className="bg-white border border-slate-200 rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 space-y-3">
          {namingRules.map((r, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 text-sm ${
                r.ok ? "text-green-700" : "text-red-600"
              }`}
            >
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black mt-0.5 ${
                  r.ok ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {r.ok ? "✓" : "✕"}
              </span>
              <span className="font-semibold">{r.rule}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "📋 Mifano ya Majina Mazuri — Nakili Utumie" : "📋 Good Name Examples — Copy and Use"}
        </h3>

        <div className="space-y-3">
          {goodNames.map((ex, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row lg:items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 sm:px-5 py-4 hover:border-teal-200 transition-colors"
            >
              <span
                className={`text-xs font-black px-3 py-1 rounded-full flex-shrink-0 ${ex.badge}`}
              >
                {ex.type}
              </span>

              <span className="font-mono text-sm font-black text-slate-700 flex-1 break-all">
                {ex.name}
              </span>

              <span className="text-green-500 text-sm flex-shrink-0">✅</span>
            </div>
          ))}
        </div>
      </div>

      <NamingSimulator isSw={isSw} />
      <FileNameChecker isSw={isSw} />

      <div className="space-y-4">
        <h3 className="text-xl font-black text-slate-800">
          {isSw ? "✅ Orodha ya Kukagua Kabla ya Kutuma" : "✅ Final Checklist Before Sending"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Kagua kila kipengele hiki kabla ya kubonyeza SEND:"
            : "Check every item here before hitting SEND:"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sendChecklist.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white border border-slate-200 rounded-2xl p-4 hover:border-green-200 transition-colors"
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <p className="text-slate-700 font-semibold text-sm leading-relaxed">
                {item.text}
              </p>
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
                  "Daima tumia PDF — inaonyesha utaalamu na mpangilio hauvurugiki",
                  "Jina la faili lazima liwe na jina lako kamili na aina ya hati: CV-Rashid-Juma.pdf",
                  "Usitumie nafasi katika jina — tumia kistari (-) au kishoro (_)",
                  "Sema ndani ya ujumbe kuwa unaambatisha faili — usimwacha mwajiri akishangaa",
                  "Faili isizide MB 25 — Gmail itakataa na barua haitafika",
                ]
              : [
                  "Always use PDF — it shows professionalism and the layout never breaks",
                  "File name must contain your full name and document type: CV-Rashid-Juma.pdf",
                  "Never use spaces in file names — use dashes (-) or underscores (_)",
                  "Mention the attachment inside your message — do not leave the employer guessing",
                  "File must not exceed 25 MB — Gmail will reject it and the email will not arrive",
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

export default Attachments;