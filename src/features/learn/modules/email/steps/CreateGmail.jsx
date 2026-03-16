import React, { useState } from "react";

/* Phone screen simulations */
const ScreenStep1 = ({ isSw }) => (
  <div className="space-y-3">
    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
      <div className="text-[10px] font-black text-slate-400 mb-1">
        accounts.google.com
      </div>
      <div className="text-[13px] font-black text-slate-800">
        {isSw ? "Karibu Google" : "Welcome to Google"}
      </div>
    </div>

    <div className="bg-teal-600 rounded-2xl p-3 text-white text-[11px] font-black text-center shadow-lg">
      {isSw ? "Unda Akaunti" : "Create account"}
    </div>

    <div className="border border-slate-200 rounded-2xl p-3 text-center">
      <div className="text-[10px] text-slate-500 font-bold">
        {isSw ? "Au ingia ikiwa una akaunti" : "Or sign in if you have one"}
      </div>
    </div>

    <div className="flex justify-center gap-1 mt-2">
      {["🔵", "🔴", "🟡", "🟢"].map((c, i) => (
        <span key={i} className="text-xs">
          {c}
        </span>
      ))}
    </div>

    <div className="text-center text-[9px] font-black text-slate-400">Google</div>
  </div>
);

const ScreenStep2 = ({ isSw }) => (
  <div className="space-y-3">
    <div className="text-[11px] font-black text-slate-700 text-center">
      {isSw ? "Jina lako ni nani?" : "What is your name?"}
    </div>

    <div className="space-y-2">
      <div>
        <div className="text-[8px] text-slate-400 font-bold mb-0.5">
          {isSw ? "Jina la kwanza" : "First name"}
        </div>
        <div className="bg-slate-50 border-b-2 border-teal-600 rounded-t-lg px-2 py-1.5 text-[10px] font-black text-slate-800">
          Rashid
        </div>
      </div>

      <div>
        <div className="text-[8px] text-slate-400 font-bold mb-0.5">
          {isSw ? "Jina la ukoo" : "Last name"}
        </div>
        <div className="bg-slate-50 border-b-2 border-teal-600 rounded-t-lg px-2 py-1.5 text-[10px] font-black text-slate-800">
          Juma
        </div>
      </div>
    </div>

    <div className="bg-teal-600 rounded-xl p-2 text-white text-[10px] font-black text-center">
      {isSw ? "Endelea" : "Next"}
    </div>
  </div>
);

const ScreenStep3 = ({ isSw }) => (
  <div className="space-y-3">
    <div className="text-[11px] font-black text-slate-700 text-center">
      {isSw ? "Chagua anwani yako" : "Choose your address"}
    </div>

    <div>
      <div className="text-[8px] text-slate-400 font-bold mb-0.5">Username</div>
      <div className="bg-slate-50 border-b-2 border-teal-600 rounded-t-lg px-2 py-1.5 text-[10px] font-black text-teal-700">
        rashid.juma
      </div>
    </div>

    <div className="flex items-center gap-1 bg-green-50 rounded-lg p-2">
      <span className="text-green-500 text-xs">✓</span>
      <span className="text-[9px] text-green-600 font-bold">
        rashid.juma@gmail.com {isSw ? "inapatikana!" : "is available!"}
      </span>
    </div>

    <div className="space-y-1">
      {["rashid.j", "r.juma2", "rashidjuma"].map((u, i) => (
        <div key={i} className="flex items-center gap-1 bg-slate-50 rounded-lg p-1.5">
          <span className="text-slate-400 text-[8px]">○</span>
          <span className="text-[9px] text-slate-500 font-mono">{u}@gmail.com</span>
        </div>
      ))}
    </div>
  </div>
);

const ScreenStep4 = ({ isSw }) => (
  <div className="space-y-3">
    <div className="text-[11px] font-black text-slate-700 text-center">
      {isSw ? "Unda nenosiri" : "Create password"}
    </div>

    <div>
      <div className="text-[8px] text-slate-400 font-bold mb-0.5">
        {isSw ? "Nenosiri" : "Password"}
      </div>
      <div className="bg-slate-50 border-b-2 border-teal-600 rounded-t-lg px-2 py-1.5 text-[10px] font-black text-slate-800 tracking-widest">
        ••••••••••
      </div>
    </div>

    <div className="space-y-1">
      {[
        { ok: true, label: isSw ? "Herufi 8 au zaidi" : "8+ characters" },
        { ok: true, label: isSw ? "Nambari" : "Numbers" },
        { ok: true, label: isSw ? "Alama maalum" : "Special symbol" },
        { ok: false, label: isSw ? "Herufi KUBWA" : "Uppercase letter" },
      ].map((r, i) => (
        <div
          key={i}
          className={`flex items-center gap-1.5 text-[9px] font-bold ${
            r.ok ? "text-green-600" : "text-slate-400"
          }`}
        >
          <span>{r.ok ? "✓" : "○"}</span>
          {r.label}
        </div>
      ))}
    </div>

    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-yellow-400 rounded-full" style={{ width: "70%" }} />
    </div>

    <div className="text-[9px] text-center text-yellow-600 font-black">
      {isSw ? "Wastani — ongeza herufi kubwa" : "Medium — add uppercase"}
    </div>
  </div>
);

const ScreenStep5 = ({ isSw }) => (
  <div className="space-y-3">
    <div className="text-[11px] font-black text-slate-700 text-center">
      {isSw ? "Ongeza namba ya simu" : "Add phone number"}
    </div>

    <div className="bg-blue-50 rounded-xl p-2 text-[9px] text-blue-700 font-bold text-center">
      {isSw
        ? "Namba hii inakusaidia kupata akaunti yako ukisahau nenosiri"
        : "This number helps recover your account if you forget your password"}
    </div>

    <div>
      <div className="text-[8px] text-slate-400 font-bold mb-0.5">
        {isSw ? "Namba ya simu" : "Phone number"}
      </div>
      <div className="flex gap-1">
        <div className="bg-slate-50 border-b-2 border-slate-200 rounded-t-lg px-2 py-1.5 text-[10px] font-black text-slate-600 whitespace-nowrap">
          +255
        </div>
        <div className="flex-1 bg-slate-50 border-b-2 border-teal-600 rounded-t-lg px-2 py-1.5 text-[10px] font-black text-slate-800">
          712 345 678
        </div>
      </div>
    </div>

    <div className="text-[8px] text-slate-400 text-center">
      {isSw ? "Au ruka hatua hii (haipendekezi)" : "Or skip (not recommended)"}
    </div>
  </div>
);

const ScreenStep6 = ({ isSw }) => (
  <div className="space-y-3">
    <div className="text-[11px] font-black text-slate-700 text-center">
      {isSw ? "Thibitisha namba yako" : "Verify your number"}
    </div>

    <div className="bg-slate-50 rounded-xl p-3 text-center">
      <div className="text-[9px] text-slate-500 mb-1">
        {isSw ? "Kodi imetumwa kwa" : "Code sent to"}
      </div>
      <div className="text-[11px] font-black text-slate-800">+255 712 345 678</div>
    </div>

    <div>
      <div className="text-[8px] text-slate-400 font-bold mb-1 text-center">
        {isSw ? "Weka kodi ya SMS" : "Enter SMS code"}
      </div>
      <div className="flex gap-2 justify-center">
        {["G", "_", "_", "_", "_", "_"].map((d, i) => (
          <div
            key={i}
            className={`w-7 h-8 rounded-lg border-2 flex items-center justify-center text-[11px] font-black ${
              i === 0
                ? "border-teal-600 text-teal-700 bg-teal-50"
                : "border-slate-200 text-slate-300 bg-slate-50"
            }`}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ScreenStep7 = ({ isSw }) => (
  <div className="space-y-3">
    <div className="text-center">
      <div className="text-3xl mb-1">🎉</div>
      <div className="text-[12px] font-black text-slate-800">
        {isSw ? "Akaunti Imefanikiwa!" : "Account Created!"}
      </div>
      <div className="text-[9px] text-slate-500 font-bold mt-1">
        rashid.juma@gmail.com
      </div>
    </div>

    <div className="space-y-1">
      {[
        { icon: "📥", label: isSw ? "Inbox yako iko tayari" : "Your inbox is ready" },
        { icon: "📤", label: isSw ? "Unaweza kutuma sasa" : "You can send now" },
        { icon: "🔒", label: isSw ? "Akaunti inalindwa" : "Account is protected" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 bg-green-50 rounded-xl p-2">
          <span className="text-sm">{item.icon}</span>
          <span className="text-[9px] text-green-700 font-black">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

/* Laptop screens */
const LaptopScreen1 = ({ isSw }) => (
  <div className="w-full h-full bg-white flex flex-col items-center justify-center p-4 space-y-3">
    <div className="flex gap-1 mb-1">
      {["🔵", "🔴", "🟡", "🟢"].map((c, i) => (
        <span key={i} className="text-sm">
          {c}
        </span>
      ))}
    </div>
    <div className="text-base font-black text-slate-800">
      {isSw ? "Karibu Google" : "Welcome to Google"}
    </div>
    <div className="text-xs text-slate-500">
      {isSw ? "Ingia au unda akaunti" : "Sign in or create account"}
    </div>
    <div className="bg-teal-600 text-white text-xs font-black px-6 py-2 rounded-full">
      {isSw ? "Unda Akaunti" : "Create account"}
    </div>
    <div className="text-xs text-teal-700 underline cursor-pointer">
      {isSw ? "Ingia" : "Sign in"}
    </div>
  </div>
);

const LaptopScreen3 = ({ isSw }) => (
  <div className="w-full h-full bg-white flex flex-col justify-center p-5 space-y-3">
    <div className="text-sm font-black text-slate-700">
      {isSw ? "Chagua Anwani yako ya Gmail" : "Choose your Gmail address"}
    </div>

    <div className="relative">
      <div className="w-full border-b-2 border-teal-600 text-sm font-mono font-black text-slate-800 pb-1">
        rashid.juma
      </div>
      <span className="absolute right-0 bottom-1 text-xs text-slate-400 font-mono">
        @gmail.com
      </span>
    </div>

    <div className="flex items-center gap-1 text-xs text-green-600 font-bold">
      <span>✓</span> {isSw ? "Inapatikana!" : "Available!"}
    </div>

    <div className="text-xs text-slate-500 font-bold">
      {isSw ? "Mapendekezo:" : "Suggestions:"}
    </div>

    <div className="flex flex-wrap gap-2">
      {["rashid.j", "r.juma", "rashid2025"].map((u, i) => (
        <span
          key={i}
          className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-mono"
        >
          {u}
        </span>
      ))}
    </div>
  </div>
);

const LaptopScreen4 = ({ isSw }) => (
  <div className="w-full h-full bg-white flex flex-col justify-center p-5 space-y-3">
    <div className="text-sm font-black text-slate-700">
      {isSw ? "Unda Nenosiri" : "Create a strong password"}
    </div>

    <div className="space-y-2">
      <div>
        <div className="text-xs text-slate-400">{isSw ? "Nenosiri" : "Password"}</div>
        <div className="border-b-2 border-teal-600 py-1 text-sm tracking-widest font-black text-slate-800">
          ••••••••••••
        </div>
      </div>

      <div>
        <div className="text-xs text-slate-400">
          {isSw ? "Thibitisha nenosiri" : "Confirm password"}
        </div>
        <div className="border-b-2 border-slate-200 py-1 text-sm tracking-widest font-black text-slate-300">
          ••••••••••••
        </div>
      </div>
    </div>

    <div className="flex gap-1">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`flex-1 h-1.5 rounded-full ${i <= 3 ? "bg-yellow-400" : "bg-slate-100"}`}
        />
      ))}
    </div>

    <div className="text-xs text-yellow-600 font-bold">
      {isSw ? "Nguvu ya wastani" : "Medium strength"}
    </div>
  </div>
);

const LaptopScreenFinal = ({ isSw }) => (
  <div className="w-full h-full bg-white flex flex-col items-center justify-center p-5 space-y-3">
    <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-2xl">
      🎉
    </div>
    <div className="text-sm font-black text-slate-800 text-center">
      {isSw ? "Akaunti yako iko tayari" : "Your account is ready"}
    </div>
    <div className="bg-slate-100 rounded-xl px-4 py-2 font-mono text-xs text-teal-700 font-black">
      rashid.juma@gmail.com
    </div>
    <div className="grid grid-cols-3 gap-2 w-full">
      {["📥 Gmail", "📁 Drive", "📅 Calendar"].map((app, i) => (
        <div
          key={i}
          className="bg-slate-50 rounded-xl p-2 text-center text-[10px] font-black text-slate-600"
        >
          {app}
        </div>
      ))}
    </div>
  </div>
);

/* Password Simulator */
const PasswordSimulator = ({ isSw }) => {
  const [pw, setPw] = useState("");
  const hasLen = pw.length >= 8;
  const hasNum = /\d/.test(pw);
  const hasUpper = /[A-Z]/.test(pw);
  const hasLower = /[a-z]/.test(pw);
  const hasSymbol = /[^a-zA-Z0-9]/.test(pw);
  const score = [hasLen, hasNum, hasUpper, hasLower, hasSymbol].filter(Boolean).length;

  const levels = isSw
    ? ["Dhaifu Sana", "Dhaifu", "Wastani", "Nzuri", "Imara Sana!"]
    : ["Very Weak", "Weak", "Medium", "Strong", "Very Strong!"];

  const colors = ["bg-red-500", "bg-orange-400", "bg-yellow-400", "bg-blue-500", "bg-green-500"];
  const textColors = ["text-red-600", "text-orange-500", "text-yellow-600", "text-blue-600", "text-green-600"];

  const checks = isSw
    ? [
        { ok: hasLen, label: "Herufi 8 au zaidi" },
        { ok: hasNum, label: "Ina nambari (0-9)" },
        { ok: hasUpper, label: "Herufi KUBWA (A-Z)" },
        { ok: hasLower, label: "Herufi ndogo (a-z)" },
        { ok: hasSymbol, label: "Alama maalum (!@#$)" },
      ]
    : [
        { ok: hasLen, label: "8 or more characters" },
        { ok: hasNum, label: "Contains numbers (0-9)" },
        { ok: hasUpper, label: "Uppercase letters (A-Z)" },
        { ok: hasLower, label: "Lowercase letters (a-z)" },
        { ok: hasSymbol, label: "Special symbols (!@#$)" },
      ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 space-y-4">
      <h4 className="font-black text-slate-800">
        {isSw ? "🔐 Jaribu Nguvu ya Nenosiri Lako" : "🔐 Test Your Password Strength"}
      </h4>

      <p className="text-slate-500 text-sm leading-relaxed">
        {isSw
          ? "Andika nenosiri hapa chini uone nguvu yake mara moja:"
          : "Type a password below to see its strength instantly:"}
      </p>

      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder={isSw ? "Andika nenosiri hapa..." : "Type a password here..."}
        className="w-full border-2 border-slate-200 focus:border-teal-600 rounded-2xl px-4 py-3 text-slate-800 font-mono font-bold outline-none transition-colors bg-white"
      />

      {pw.length > 0 && (
        <div className="space-y-3">
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                  i < score ? colors[score - 1] : "bg-slate-200"
                }`}
              />
            ))}
          </div>

          <div className={`text-sm font-black ${score > 0 ? textColors[score - 1] : "text-slate-400"}`}>
            {score > 0 ? levels[score - 1] : ""}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {checks.map((c, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 text-xs font-semibold ${
                  c.ok ? "text-green-700" : "text-slate-400"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-black flex-shrink-0 ${
                    c.ok ? "bg-green-500" : "bg-slate-200"
                  }`}
                >
                  {c.ok ? "✓" : ""}
                </span>
                {c.label}
              </div>
            ))}
          </div>

          {score === 5 && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-3 text-sm text-green-700 font-bold text-center">
              {isSw
                ? "🏆 Nenosiri bora! Hii ndiyo kiwango unahohitaji."
                : "🏆 Perfect password! This is exactly the level you need."}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* Username Builder */
const UsernameBuilder = ({ isSw }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const clean = (s) => s.toLowerCase().replace(/[^a-z]/g, "").trim();
  const f = clean(first);
  const l = clean(last);

  const suggestions =
    f && l
      ? [
          { email: `${f}.${l}@gmail.com`, label: isSw ? "Bora zaidi" : "Best", good: true },
          { email: `${f[0]}.${l}@gmail.com`, label: isSw ? "Nzuri" : "Good", good: true },
          { email: `${f}.${l[0]}@gmail.com`, label: isSw ? "Inakubalika" : "Acceptable", good: true },
          { email: `${f}${l}@gmail.com`, label: isSw ? "Inafanya kazi" : "Works", good: true },
          { email: `${f}boy@gmail.com`, label: isSw ? "EPUKA" : "AVOID", good: false },
          { email: `cool${f}@gmail.com`, label: isSw ? "EPUKA" : "AVOID", good: false },
        ]
      : [];

  return (
    <div className="bg-teal-50 border border-teal-100 rounded-[22px] sm:rounded-[24px] p-5 sm:p-6 space-y-4">
      <h4 className="font-black text-slate-800">
        {isSw ? "🏗️ Jenga Email Yako Rasmi" : "🏗️ Build Your Professional Email"}
      </h4>

      <p className="text-slate-500 text-sm leading-relaxed">
        {isSw
          ? "Weka jina lako hapa upate mapendekezo ya email ya kitaalamu:"
          : "Enter your name below to get professional email suggestions:"}
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
            className="w-full border-2 border-teal-200 focus:border-teal-600 rounded-xl px-3 py-2 text-slate-800 font-bold text-sm outline-none transition-colors bg-white"
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
            className="w-full border-2 border-teal-200 focus:border-teal-600 rounded-xl px-3 py-2 text-slate-800 font-bold text-sm outline-none transition-colors bg-white"
          />
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-black text-slate-600 uppercase tracking-wider">
            {isSw ? "Mapendekezo:" : "Suggestions:"}
          </p>

          {suggestions.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-2xl border ${
                s.good ? "bg-white border-green-200" : "bg-red-50 border-red-200 opacity-75"
              }`}
            >
              <span
                className={`font-mono text-xs sm:text-sm font-black break-all ${
                  s.good ? "text-slate-700" : "text-red-500 line-through"
                }`}
              >
                {s.email}
              </span>

              <span
                className={`text-xs font-black px-2 py-0.5 rounded-full w-fit ${
                  s.good ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* Phone Mockup */
const PhoneMockup = ({ children, badge }) => (
  <div className="flex-shrink-0 relative mx-auto">
    <div className="w-[220px] h-[450px] sm:w-[240px] sm:h-[480px] bg-slate-900 rounded-[40px] sm:rounded-[44px] border-[8px] border-slate-800 shadow-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-white">
        <div className="bg-slate-900 flex items-center justify-between px-5 py-1">
          <span className="text-white text-[9px] font-bold">9:41</span>
          <div className="w-16 h-3 bg-slate-800 rounded-full" />
          <span className="text-white text-[9px] font-bold">100%</span>
        </div>
        <div className="p-4 h-[calc(100%-28px)] overflow-hidden">{children}</div>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-600 rounded-full" />
    </div>

    {badge && (
      <div className="absolute -top-3 -right-2 bg-emerald-500 text-white px-3 py-1.5 rounded-full shadow-xl font-black text-xs">
        {badge}
      </div>
    )}
  </div>
);

/* Laptop Mockup */
const LaptopMockup = ({ children }) => (
  <div className="flex-shrink-0 w-full lg:w-auto">
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="w-full h-[220px] bg-slate-800 rounded-t-2xl border-[6px] border-slate-700 overflow-hidden shadow-2xl">
        <div className="w-full h-5 bg-slate-700 flex items-center gap-1.5 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-2 bg-slate-600 rounded h-3 flex items-center px-2">
            <span className="text-[8px] text-slate-400 font-mono">accounts.google.com</span>
          </div>
        </div>
        <div className="h-[calc(100%-20px)]">{children}</div>
      </div>
      <div className="w-[96%] h-3 bg-slate-700 rounded-b-xl mx-auto -mt-0.5 shadow-xl" />
      <div className="w-[28%] h-2 bg-slate-600 rounded-b-xl mx-auto shadow" />
    </div>
  </div>
);

/* MAIN COMPONENT */
const CreateGmail = ({ lang }) => {
  const isSw = lang === "sw";
  const [device, setDevice] = useState("phone");
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { n: 1, sw: "Ingia gmail.com na ubonyeze 'Create Account'", en: "Go to gmail.com and click 'Create Account'" },
    { n: 2, sw: "Weka Jina lako kamili la kitambulisho", en: "Enter your full legal name" },
    { n: 3, sw: "Chagua Username rasmi (mfano: jina.lako)", en: "Choose a professional username" },
    { n: 4, sw: "Weka Password imara yenye namba na alama", en: "Set a strong password with numbers and symbols" },
    { n: 5, sw: "Weka namba ya simu kwa usalama", en: "Add your phone number for security" },
    { n: 6, sw: "Thibitisha namba yako kwa kodi ya SMS", en: "Verify your number with the SMS code" },
    { n: 7, sw: "Kubali vigezo na uanze kutumia!", en: "Agree to terms and start using!" },
  ];

  const stepDetails = isSw
    ? [
        {
          title: "Fungua Tovuti ya Gmail",
          desc: "Kwenye simu yako, fungua kivinjari (Chrome au nyingine) na andika gmail.com. Bonyeza kitufe cha \"Unda akaunti\" ambacho kiko chini ya kurasa.",
          tips: [
            "Unaweza pia tumia app ya Gmail moja kwa moja",
            "Unahitaji intaneti ili ukamilishe usajili",
            "WiFi ya bure inafanya kazi vizuri",
          ],
          warning: null,
        },
        {
          title: "Weka Jina Lako Kamili",
          desc: "Weka jina lako la kwanza na la ukoo kama vinavyoonekana kwenye kitambulisho chako. Hii ndiyo itakayoonekana kwa watu wanaopokea barua pepe zako.",
          tips: [
            "Tumia jina lako halisi — si lakabu",
            "Jina hili litaonekana kwenye kila barua pepe unayotuma",
            "Unaweza kubadilisha jina baadaye",
          ],
          warning:
            "Jina unaloweka hapa litaonekana kwa kila mtu anayepokea barua pepe yako.",
        },
        {
          title: "Chagua Username wa Kitaalamu",
          desc: "Username ndiyo sehemu ya kwanza ya anwani yako kabla ya @gmail.com. Inakuwa sehemu yako ya kudumu — chagua kwa makini sana.",
          tips: [
            "Tumia mfumo wa jina.ukoo mfano: rashid.juma",
            "Unaweza tumia herufi ya kwanza tu: r.juma",
            "Epuka nambari za nasibu kama rashid99",
          ],
          warning:
            "Username una mara moja tu ya kuchagua vizuri — baadaye ni ngumu kubadilisha.",
        },
        {
          title: "Unda Nenosiri Imara",
          desc: "Nenosiri lazima liwe na herufi 8 au zaidi, nambari, herufi kubwa, na alama maalum kama !@#$. Nenosiri nzuri linakuzuia watu wabaya kuingia akaunti yako.",
          tips: [
            'Tumia sentensi ya kukumbuka: mfano "Mji!wa2024Dar"',
            "Usiandike nenosiri kwenye ujumbe wala karatasi wazi",
            "Tumia nenosiri tofauti kwa kila akaunti",
          ],
          warning:
            "Usitumie jina lako, tarehe ya kuzaliwa, au 12345 kama nenosiri.",
        },
        {
          title: "Ongeza Namba ya Simu",
          desc: "Namba ya simu inakusaidia kupata akaunti yako ukisahau nenosiri. Ni hatua muhimu sana ya usalama.",
          tips: [
            "Tumia namba yako halisi ya Tanzania +255",
            "Kama huna namba unaweza ruka lakini si salama",
            "Namba hii inatumika tu kwa usalama",
          ],
          warning: null,
        },
        {
          title: "Thibitisha kwa SMS",
          desc: "Google itatuma ujumbe mfupi wenye nambari 6 kwenye simu yako. Weka nambari hizo kwenye kisanduku kilichoonyeshwa.",
          tips: [
            "SMS inafika ndani ya dakika 1-2",
            "Kama haikufika bonyeza Resend kupata nyingine",
            "Hakikisha una nguvu za mtandao",
          ],
          warning: null,
        },
        {
          title: "Kubali na Uanze!",
          desc: 'Soma vigezo vya Google kwa ufupi kisha bonyeza "Nakubaliana". Akaunti yako ya Gmail itakuwa tayari kutumika mara moja!',
          tips: [
            "Baada ya kukubali utaona inbox yako tupu",
            "Tuma barua pepe ya majaribio kwa mwenzako",
            "Pakua app ya Gmail kupata taarifa mara moja",
          ],
          warning: null,
        },
      ]
    : [
        {
          title: "Open the Gmail Website",
          desc: 'On your phone or computer, open your browser (Chrome or any other) and type gmail.com in the address bar. Click "Create account" near the bottom of the page.',
          tips: [
            "You can also use the Gmail app directly on Android",
            "You need an internet connection to complete registration",
            "Free WiFi works perfectly fine",
          ],
          warning: null,
        },
        {
          title: "Enter Your Full Name",
          desc: "Type your first and last name exactly as they appear on your ID. This is the name people will see when they receive your emails.",
          tips: [
            "Use your real name — not a nickname",
            "This name appears on every email you send",
            "You can change it later in account settings",
          ],
          warning:
            "The name you enter here will be visible to everyone who receives your emails.",
        },
        {
          title: "Choose a Professional Username",
          desc: "The username is the first part of your address before @gmail.com. It becomes your permanent email identity — choose very carefully.",
          tips: [
            "Use firstname.lastname format e.g. rashid.juma",
            "An initial also works: r.juma or rashid.j",
            "Avoid random numbers like rashid99 or juma2023",
          ],
          warning:
            "You only get one chance to choose a good username — it is very difficult to change later.",
        },
        {
          title: "Create a Strong Password",
          desc: "Your password must have at least 8 characters, numbers, uppercase letters, and special symbols like !@#$. A strong password protects your account from unauthorized access.",
          tips: [
            'Use a memorable phrase: e.g. "Mji!wa2024Dar"',
            "Never write your password in a message or on open paper",
            "Use a different password for every account",
          ],
          warning: "Never use your name, birth date, or 12345 as a password.",
        },
        {
          title: "Add Your Phone Number",
          desc: "Your phone number helps you recover your account if you forget your password. This is a very important security step.",
          tips: [
            "Use your real Tanzania number +255",
            "You can skip this but it is not recommended",
            "This number is only used for security — not ads",
          ],
          warning: null,
        },
        {
          title: "Verify with SMS",
          desc: "Google will send a short text message with a 6-digit code to your phone. Enter those digits in the box shown to confirm the number is yours.",
          tips: [
            "The SMS arrives within 1-2 minutes",
            "If it does not arrive click Resend",
            "Make sure you have mobile signal",
          ],
          warning: null,
        },
        {
          title: "Agree and Start Using!",
          desc: 'Briefly read the Google terms then click "I agree". Your Gmail account is now ready to use immediately!',
          tips: [
            "After agreeing you will see your empty inbox",
            "Send a test email to a friend to try it out",
            "Download the Gmail app for instant notifications",
          ],
          warning: null,
        },
      ];

  const phoneScreens = [
    <ScreenStep1 isSw={isSw} />,
    <ScreenStep2 isSw={isSw} />,
    <ScreenStep3 isSw={isSw} />,
    <ScreenStep4 isSw={isSw} />,
    <ScreenStep5 isSw={isSw} />,
    <ScreenStep6 isSw={isSw} />,
    <ScreenStep7 isSw={isSw} />,
  ];

  const laptopScreens = [
    <LaptopScreen1 isSw={isSw} />,
    <LaptopScreen1 isSw={isSw} />,
    <LaptopScreen3 isSw={isSw} />,
    <LaptopScreen4 isSw={isSw} />,
    <LaptopScreen1 isSw={isSw} />,
    <LaptopScreen1 isSw={isSw} />,
    <LaptopScreenFinal isSw={isSw} />,
  ];

  const afterCreate = isSw
    ? [
        { icon: "✉️", title: "Tuma barua pepe ya kwanza", desc: "Jaribu kutuma ujumbe kwa mwenzako ili uhakikishe inafanya kazi vizuri." },
        { icon: "🖼️", title: "Ongeza picha ya wasifu", desc: 'Bonyeza herufi yako juu kulia, chagua "Manage your Google Account" ili ongeza picha yako.' },
        { icon: "📱", title: "Pakua app ya Gmail", desc: "Pakua app kutoka Play Store ili upate taarifa za barua pepe mara zinapofika." },
        { icon: "🔑", title: "Hifadhi nenosiri salama", desc: "Andika nenosiri lako katika daftari salama au tumia app ya kuhifadhi manenosiri." },
        { icon: "👥", title: "Waambie watu email yako", desc: "Tuma email yako mpya kwa familia, marafiki, au mwajiri wako." },
        { icon: "🔒", title: "Washa uthibitishaji wa hatua mbili", desc: "Nenda Settings, Security, uwashe 2-Step Verification kwa usalama zaidi." },
      ]
    : [
        { icon: "✉️", title: "Send your first email", desc: "Try sending a message to a friend to confirm everything works correctly." },
        { icon: "🖼️", title: "Add a profile photo", desc: 'Click your initial top right, then "Manage your Google Account" to add your photo.' },
        { icon: "📱", title: "Download the Gmail app", desc: "Get the app from Play Store so you receive email notifications instantly." },
        { icon: "🔑", title: "Save your password safely", desc: "Write your password in a secure notebook or use a password manager app." },
        { icon: "👥", title: "Share your email address", desc: "Send your new address to family, friends, or your employer." },
        { icon: "🔒", title: "Enable two-step verification", desc: "Go to Settings, Security, and enable 2-Step Verification for extra protection." },
      ];

  const mistakes = isSw
    ? [
        { bad: "coolboy@gmail.com", good: "john.mwangi@gmail.com", reason: "Lakabu haioneshi utambulisho wa kweli" },
        { bad: "Nenosiri: 123456", good: "Nenosiri: Dar!2024Juma", reason: "Nambari tu ni rahisi sana kuvunjwa" },
        { bad: "Kuruka namba ya simu", good: "Kuongeza namba ya kweli", reason: "Bila namba hutaweza kurejesha akaunti" },
        { bad: "Email moja kwa kila kitu", good: "Rasmi + burudani kwa makusudi", reason: "Changanya rasmi na burudani ni tatizo" },
      ]
    : [
        { bad: "coolboy@gmail.com", good: "john.mwangi@gmail.com", reason: "Nickname does not show real identity" },
        { bad: "Password: 123456", good: "Password: Dar!2024Juma", reason: "Numbers only are too easy to guess" },
        { bad: "Skip phone number", good: "Add your real number", reason: "Without a number you cannot recover your account" },
        { bad: "One email for everything", good: "Professional + casual email", reason: "Mixing professional and casual creates confusion" },
      ];

  const current = stepDetails[activeStep];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-8 sm:space-y-10">
      {/* Heading */}
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-black text-teal-700 leading-tight">
          {isSw ? "Jinsi ya Kuunda Gmail" : "How to Create Gmail"}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-slate-400 text-xs font-black uppercase tracking-widest whitespace-nowrap px-2">
          {isSw ? "Mwongozo wa Kina" : "Detailed Walkthrough"}
        </span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Device tabs + stepper */}
      <div className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "📱💻 Chagua Kifaa Chako" : "📱💻 Choose Your Device"}
        </h3>

        <div className="flex flex-col sm:flex-row gap-3">
          {[
            { key: "phone", icon: "📱", sw: "Simu ya Mkononi", en: "Mobile Phone" },
            { key: "laptop", icon: "💻", sw: "Kompyuta / Laptop", en: "Computer / Laptop" },
          ].map((d) => (
            <button
              key={d.key}
              onClick={() => setDevice(d.key)}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-black text-sm transition-all duration-200 ${
                device === d.key
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-200"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span>{d.icon}</span>
              <span>{isSw ? d.sw : d.en}</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 space-y-6">
          <p className="text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest leading-relaxed">
            {isSw
              ? "Bonyeza hatua yoyote kuona maelezo na mfano wa skrini:"
              : "Click any step to see details and a screen simulation:"}
          </p>

          <div className="flex flex-wrap gap-2">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-10 h-10 rounded-2xl font-black text-sm transition-all duration-200 ${
                  activeStep === i
                    ? "bg-teal-600 text-white scale-110 shadow-lg"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {s.n}
              </button>
            ))}
          </div>

          <div className="flex flex-col xl:flex-row gap-8 items-start">
            <div className="flex justify-center w-full xl:w-auto">
              {device === "phone" ? (
                <PhoneMockup badge={activeStep === 6 ? (isSw ? "TAYARI!" : "DONE!") : null}>
                  {phoneScreens[activeStep]}
                </PhoneMockup>
              ) : (
                <LaptopMockup>{laptopScreens[activeStep]}</LaptopMockup>
              )}
            </div>

            <div className="flex-1 space-y-4 w-full">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                  {activeStep + 1}
                </div>
                <h4 className="text-white font-black text-lg leading-tight">
                  {current.title}
                </h4>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">{current.desc}</p>

              <div className="space-y-2">
                <p className="text-slate-500 text-xs font-black uppercase tracking-wider">
                  {isSw ? "Vidokezo:" : "Tips:"}
                </p>
                {current.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-teal-400 font-black flex-shrink-0 mt-0.5">→</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              {current.warning && (
                <div className="bg-amber-900 border border-amber-700 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-amber-400 text-lg flex-shrink-0">⚠️</span>
                  <p className="text-amber-200 text-sm font-semibold leading-relaxed">
                    {current.warning}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700 disabled:opacity-30 hover:bg-slate-600 text-white font-black text-sm rounded-xl transition-colors"
            >
              ← {isSw ? "Nyuma" : "Back"}
            </button>

            <div className="flex gap-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeStep ? "w-6 bg-teal-400" : "w-1.5 bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-teal-600 disabled:opacity-30 hover:bg-teal-500 text-white font-black text-sm rounded-xl transition-colors"
            >
              {isSw ? "Mbele" : "Next"} →
            </button>
          </div>
        </div>
      </div>

      {/* Username Builder */}
      <UsernameBuilder isSw={isSw} />

      {/* Password Simulator */}
      <PasswordSimulator isSw={isSw} />

      {/* After creating */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "🚀 Baada ya Kuunda — Hatua za Mara Moja" : "🚀 After Creating — Do These Right Away"}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? "Akaunti yako ipo — sasa ifanye iwe salama na tayari kutumika:"
            : "Your account exists — now make it secure and ready to use:"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {afterCreate.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-[22px] sm:rounded-[24px] p-5 space-y-2 hover:border-teal-200 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl">{item.icon}</div>
              <p className="font-black text-slate-800 text-sm">{item.title}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mistakes */}
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-800">
          {isSw ? "🚫 Makosa ya Kawaida — Epuka Haya" : "🚫 Common Mistakes — Avoid These"}
        </h3>

        <div className="space-y-3">
          {mistakes.map((m, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-center">
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-4">
                <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                <span className="font-mono text-xs sm:text-sm font-black text-red-700 break-all">
                  {m.bad}
                </span>
              </div>

              <div className="hidden sm:flex flex-col items-center gap-1">
                <div className="text-slate-400 text-xs font-bold text-center leading-tight px-1">
                  {m.reason}
                </div>
                <div className="text-slate-400 text-lg">→</div>
              </div>

              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4">
                <span className="text-green-500 text-xl flex-shrink-0">✅</span>
                <span className="font-mono text-xs sm:text-sm font-black text-green-700 break-all">
                  {m.good}
                </span>
              </div>

              <div className="sm:hidden text-center text-xs text-slate-400 font-bold px-2">
                {m.reason}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Gmail */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 space-y-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="relative z-10 space-y-4">
          <h3 className="text-white font-black text-lg sm:text-xl">
            {isSw ? "🌟 Kwa Nini Gmail Ndiyo Chaguo Bora?" : "🌟 Why Is Gmail the Best Choice?"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(isSw
              ? [
                  { icon: "🆓", title: "Bure Kabisa", desc: "Hifadhi 15GB ya data bila kulipa chochote" },
                  { icon: "🌍", title: "Inajulikana Duniani", desc: "Kampuni zote, vyuo, na mabenki wanaijua" },
                  { icon: "🔒", title: "Salama Sana", desc: "Google ina mfumo bora wa usalama duniani" },
                  { icon: "📱", title: "Inafanya Kazi Kila Mahali", desc: "Simu, laptop, kompyuta — popote unapotaka" },
                  { icon: "🔗", title: "Inaunganika na Google Zote", desc: "Maps, YouTube, Drive, Meet — akaunti moja tu" },
                  { icon: "⚡", title: "Haraka na Kuaminika", desc: "Gmail karibu haizimiki na inafanya kazi haraka" },
                ]
              : [
                  { icon: "🆓", title: "Completely Free", desc: "15GB of storage without paying anything" },
                  { icon: "🌍", title: "Recognized Worldwide", desc: "All companies, universities, and banks know it" },
                  { icon: "🔒", title: "Very Secure", desc: "Google has the best security system in the world" },
                  { icon: "📱", title: "Works Everywhere", desc: "Phone, laptop, computer — wherever you want" },
                  { icon: "🔗", title: "Connects All Google Apps", desc: "Maps, YouTube, Drive, Meet — one account only" },
                  { icon: "⚡", title: "Fast and Reliable", desc: "Gmail almost never goes down and works fast" },
                ]
            ).map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/5 rounded-2xl p-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-white font-black text-sm">{item.title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
                  "Tumia jina.ukoo@gmail.com kama mfumo wa email yako rasmi",
                  "Nenosiri lazima liwe na herufi, nambari, na alama maalum",
                  "Ongeza namba ya simu — inakusaidia kupata akaunti yako ukisahau nenosiri",
                  "Baada ya kuunda, washa 2-Step Verification kwa usalama zaidi",
                  "Gmail inatoa huduma 15GB bure na inaunganika na programu zote za Google",
                ]
              : [
                  "Use firstname.lastname@gmail.com as your professional email format",
                  "Password must have letters, numbers, and special symbols",
                  "Add your phone number — it helps you recover your account if you forget your password",
                  "After creating, enable 2-Step Verification for extra security",
                  "Gmail offers 15GB free and connects with all Google apps",
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

export default CreateGmail;