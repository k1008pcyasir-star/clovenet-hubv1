import { useState, useEffect } from "react";

const CHECKLIST = [
  { key: "personal",     label: "Nimejaza Maelezo ya Kibinafsi (Personal Details)" },
  { key: "academic",     label: "Nimeweka Vyeti vya Elimu (Academic Qualifications)" },
  { key: "professional", label: "Nimejaza Taaluma na Ujuzi (Professional Details)" },
  { key: "experience",   label: "Nimejaza Historia ya Kazi (Work Experience)" },
  { key: "referees",     label: "Nimeweka Watoa Mapendekezo (Referees)" },
  { key: "documents",    label: "Nimepakia Nyaraka Zote (Documents Upload)" },
];

export default function AjiraProfileSimulator({ setProfileScore }) {
  const [profile, setProfile] = useState({
    personal: false, academic: false, professional: false,
    experience: false, referees: false, documents: false,
  });
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const completed = Object.values(profile).filter(Boolean).length;
    const percent   = Math.round((completed / CHECKLIST.length) * 100);
    setCompletion(percent);
    if (setProfileScore) setProfileScore(percent);
  }, [profile, setProfileScore]);

  const toggle = (key) => setProfile((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="space-y-6">

      <div>
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
          Hatua 2 — Profile
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Ukamilishaji wa Ajira Portal Profile
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Weka alama kwenye kila sehemu uliyokwisha ijaza kwenye portal ya Ajira.
        </p>
      </div>

      {/* Progress */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-slate-600">Ukamilishaji wa Profile</span>
          <span className={`text-sm font-bold ${completion >= 70 ? "text-green-600" : "text-amber-600"}`}>
            {completion}%
          </span>
        </div>
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              completion >= 70 ? "bg-green-500" : "bg-amber-500"
            }`}
            style={{ width: `${completion}%` }}
          />
        </div>
        {completion >= 70 ? (
          <p className="text-green-600 text-sm font-semibold">
            ✅ Profile yako imekamilika — uko tayari ku-apply!
          </p>
        ) : (
          <p className="text-amber-600 text-sm font-semibold">
            ⚠️ Kamilisha angalau 70% kabla ya ku-apply ({CHECKLIST.length - Object.values(profile).filter(Boolean).length} bado)
          </p>
        )}
      </div>

      {/* Checklist */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        {CHECKLIST.map((item, index) => (
          <div
            key={item.key}
            onClick={() => toggle(item.key)}
            className={`flex items-center gap-4 px-5 py-4 cursor-pointer transition border-b last:border-b-0 border-slate-100 ${
              profile[item.key] ? "bg-teal-50" : "hover:bg-slate-50"
            }`}
          >
            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition ${
              profile[item.key] ? "bg-teal-600 border-teal-600" : "border-slate-300"
            }`}>
              {profile[item.key] && <span className="text-white text-xs font-bold">✓</span>}
            </div>
            <span className={`text-sm font-semibold flex-1 leading-relaxed ${
              profile[item.key] ? "text-teal-800 line-through decoration-teal-400" : "text-slate-700"
            }`}>
              {item.label}
            </span>
            <span className="text-xs text-slate-400 shrink-0">{index + 1}/{CHECKLIST.length}</span>
          </div>
        ))}
      </div>

    </div>
  );
}