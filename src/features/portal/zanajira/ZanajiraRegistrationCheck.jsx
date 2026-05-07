import { useState, useEffect } from "react";

export default function ZanajiraRegistrationCheck({ setRegistrationScore }) {
  const [email, setEmail]           = useState("");
  const [password, setPassword]     = useState("");
  const [zanId, setZanId]           = useState("");
  const [emailAccess, setEmailAccess] = useState(false);
  const [score, setScore]           = useState(0);

  const emailValid    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password);
  const zanIdValid    = /^\d{9}$/.test(zanId);

  useEffect(() => {
    let newScore = 0;
    if (emailValid)    newScore += 25;
    if (passwordValid) newScore += 25;
    if (zanIdValid)    newScore += 25;
    if (emailAccess)   newScore += 25;
    setScore(newScore);
    if (setRegistrationScore) setRegistrationScore(newScore);
  }, [emailValid, passwordValid, zanIdValid, emailAccess, setRegistrationScore]);

  return (
    <div className="space-y-6">

      <div>
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
          Hatua 1 — Usajili
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Maandalizi ya Usajili wa ZanAjira
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Jaza taarifa zifuatazo ili tuone kama uko tayari kusajili.
        </p>
      </div>

      {/* Score bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-slate-600">Utayari wa Usajili</span>
          <span className={`text-sm font-bold ${score >= 75 ? "text-green-600" : score >= 50 ? "text-amber-600" : "text-slate-500"}`}>
            {score}%
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              score >= 75 ? "bg-green-500" : score >= 50 ? "bg-amber-500" : "bg-teal-500"
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
        {score === 100 && (
          <p className="text-green-600 text-sm font-semibold">
            ✅ Uko tayari kabisa kusajili ZanAjira!
          </p>
        )}
      </div>

      {/* Form */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-sm">

        {/* Email */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Barua Pepe (Email)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mfano@gmail.com"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
          />
          {email.length > 0 && (
            <p className={`text-xs mt-1.5 font-semibold ${emailValid ? "text-green-600" : "text-red-500"}`}>
              {emailValid ? "✓ Email iko sahihi" : "✗ Umbizo la email si sahihi"}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Neno la Siri (Password)
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Angalau herufi 8, namba na alama"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
          />
          {password.length > 0 && (
            <p className={`text-xs mt-1.5 font-semibold ${passwordValid ? "text-green-600" : "text-red-500"}`}>
              {passwordValid ? "✓ Password ni imara" : "✗ Lazima iwe na herufi 8+, namba na alama (!@#)"}
            </p>
          )}
        </div>

        {/* Zan ID */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">
            Zan ID (Namba 9)
          </label>
          <input
            type="text"
            value={zanId}
            onChange={(e) => setZanId(e.target.value)}
            placeholder="Mfano: 957453624"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
          />
          {zanId.length > 0 && (
            <p className={`text-xs mt-1.5 font-semibold ${zanIdValid ? "text-green-600" : "text-red-500"}`}>
              {zanIdValid ? "✓ Zan ID iko sahihi" : "✗ Zan ID lazima iwe tarakimu 9 tu"}
            </p>
          )}
        </div>

        {/* Email access */}
        <div
          onClick={() => setEmailAccess(!emailAccess)}
          className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition ${
            emailAccess ? "bg-teal-50 border-teal-200" : "bg-slate-50 border-slate-200 hover:bg-slate-100"
          }`}
        >
          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition ${
            emailAccess ? "bg-teal-600 border-teal-600" : "border-slate-300"
          }`}>
            {emailAccess && <span className="text-white text-xs font-bold">✓</span>}
          </div>
          <span className="text-sm font-semibold text-slate-700">
            Ninaweza kufikia email yangu (inbox na spam)
          </span>
        </div>

      </div>
    </div>
  );
}