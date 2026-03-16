import { useState, useEffect } from "react";

export default function AjiraRegistrationCheck({ setRegistrationScore }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nida, setNida] = useState("");
  const [emailAccess, setEmailAccess] = useState(false);
  const [score, setScore] = useState(0);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordValid =
    password.length >= 8 &&
    /[A-Za-z]/.test(password) &&
    /\d/.test(password) &&
    /[^A-Za-z0-9]/.test(password);

  const nidaValid = /^\d{8,20}$/.test(nida);

  useEffect(() => {
    let newScore = 0;

    if (emailValid) newScore += 25;
    if (passwordValid) newScore += 25;
    if (nidaValid) newScore += 25;
    if (emailAccess) newScore += 25;

    setScore(newScore);

    if (setRegistrationScore) {
      setRegistrationScore(newScore);
    }
  }, [emailValid, passwordValid, nidaValid, emailAccess, setRegistrationScore]);

  return (
    <div className="space-y-8">

      <h2 className="text-2xl font-bold">
        Ajira Portal Registration Readiness
      </h2>

      <div className="border rounded-2xl p-5 space-y-3">
        <div className="flex justify-between">
          <span>Registration Readiness</span>
          <span className="font-semibold">{score}%</span>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-teal-600 h-2 rounded-full"
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      <div className="border rounded-2xl p-6 space-y-5">

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="NIDA Number"
          className="w-full border rounded-lg px-4 py-2"
          value={nida}
          onChange={(e) => setNida(e.target.value)}
        />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={emailAccess}
            onChange={() => setEmailAccess(!emailAccess)}
          />
          Ninaweza kufikia email yangu
        </label>

      </div>

    </div>
  );
}