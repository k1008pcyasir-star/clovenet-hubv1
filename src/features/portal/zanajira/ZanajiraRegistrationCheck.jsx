import { useState, useEffect } from "react";

export default function ZanajiraRegistrationCheck({ setRegistrationScore }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zanId, setZanId] = useState("");
  const [emailAccess, setEmailAccess] = useState(false);
  const [score, setScore] = useState(0);

  /* ================= EMAIL VALIDATION ================= */
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* ================= PASSWORD VALIDATION ================= */
  const passwordValid =
    password.length >= 8 &&
    /[A-Za-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password);

  /* ================= ZAN ID VALIDATION ================= */
  const zanIdValid = /^\d{9}$/.test(zanId);

  /* ================= SCORE ENGINE ================= */
  useEffect(() => {
    let newScore = 0;

    if (emailValid) newScore += 25;
    if (passwordValid) newScore += 25;
    if (zanIdValid) newScore += 25;
    if (emailAccess) newScore += 25;

    setScore(newScore);

    // 👇 Send score to parent (PortalFlow)
    if (setRegistrationScore) {
      setRegistrationScore(newScore);
    }
  }, [emailValid, passwordValid, zanIdValid, emailAccess, setRegistrationScore]);

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          ZanAjira Registration Readiness
        </h2>
        <p className="text-gray-500 mt-1">
          Hakikisha uko tayari kusajili kabla ya kuanza.
        </p>
      </div>

      {/* SCORE BAR */}
      <div className="border rounded-2xl p-5 space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">
            Registration Readiness
          </span>
          <span className="font-semibold">{score}%</span>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-teal-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      {/* FORM */}
      <div className="border rounded-2xl p-6 space-y-5">

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Barua Pepe (Email)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="mfano@gmail.com"
          />
          {email.length > 0 && (
            <p className={`text-sm mt-1 ${emailValid ? "text-green-600" : "text-red-600"}`}>
              {emailValid ? "Email iko sahihi." : "Email si sahihi."}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Neno la Siri (Password)
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Angalau herufi 8"
          />
          {password.length > 0 && (
            <p className={`text-sm mt-1 ${passwordValid ? "text-green-600" : "text-red-600"}`}>
              {passwordValid
                ? "Password ni imara."
                : "Lazima iwe na herufi 8+, namba na alama (!@#)."}
            </p>
          )}
        </div>

        {/* ZAN ID */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Zan ID
          </label>
          <input
            type="text"
            value={zanId}
            onChange={(e) => setZanId(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
            placeholder="Mfano: 957453624"
          />
          {zanId.length > 0 && (
            <p className={`text-sm mt-1 ${zanIdValid ? "text-green-600" : "text-red-600"}`}>
              {zanIdValid
                ? "Zan ID iko sahihi."
                : "Zan ID lazima iwe tarakimu 9."}
            </p>
          )}
        </div>

        {/* EMAIL ACCESS */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={emailAccess}
            onChange={() => setEmailAccess(!emailAccess)}
          />
          <span className="text-sm">
            Ninaweza kufikia email yangu (inbox/spam)
          </span>
        </div>

      </div>
    </div>
  );
}