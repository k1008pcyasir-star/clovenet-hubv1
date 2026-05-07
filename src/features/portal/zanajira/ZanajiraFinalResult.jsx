import { useNavigate } from "react-router-dom";

function ScoreRow({ label, score }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-slate-600">{label}</span>
        <span className={`text-sm font-bold ${score >= 70 ? "text-green-600" : "text-red-500"}`}>
          {score}%
        </span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${score >= 70 ? "bg-green-500" : "bg-red-400"}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export default function ZanajiraFinalResult({ registrationScore, profileScore }) {
  const navigate  = useNavigate();
  const overall   = Math.round((registrationScore + profileScore) / 2);
  const isReady   = overall >= 70;

  const status = isReady
    ? { label: "Uko Tayari Ku-apply", color: "text-green-600", bg: "bg-green-50", border: "border-green-200" }
    : { label: "Unahitaji Maandalizi Zaidi", color: "text-red-600", bg: "bg-red-50", border: "border-red-200" };

  return (
    <div className="space-y-6">

      <div>
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
          Hatua 3 — Matokeo
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Tathmini ya Mwisho — ZanAjira
        </h2>
        <p className="text-slate-500 mt-1 text-sm">
          Hapa chini ni muhtasari wa utayari wako wa kusajili ZanAjira.
        </p>
      </div>

      {/* Overall score */}
      <div className={`border rounded-2xl p-6 space-y-4 ${status.bg} ${status.border}`}>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800">Kiwango cha Jumla</h3>
          <span className="text-3xl font-black text-slate-900">{overall}%</span>
        </div>
        <div className="w-full bg-white/70 h-3 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${isReady ? "bg-green-500" : "bg-red-400"}`}
            style={{ width: `${overall}%` }}
          />
        </div>
        <p className={`font-bold text-sm ${status.color}`}>
          Hali: {status.label}
        </p>
      </div>

      {/* Score breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 shadow-sm">
        <h3 className="font-bold text-slate-800">Maelezo ya Alama</h3>
        <ScoreRow label="Utayari wa Usajili" score={registrationScore} />
        <ScoreRow label="Ukamilishaji wa Profile" score={profileScore} />
      </div>

      {/* Actions */}
      {isReady ? (
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 space-y-3">
          <p className="font-bold text-blue-800">🎉 Hongera! Uko tayari kusajili ZanAjira.</p>
          <p className="text-blue-700 text-sm leading-relaxed">
            Nenda kwenye portal ya ZanAjira na uanze mchakato wa usajili sasa hivi.
          </p>
          <a
            href="https://portal.zanajira.go.tz/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition active:scale-[0.98]"
          >
            Fungua ZanAjira Portal →
          </a>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 space-y-3">
          <p className="font-bold text-amber-800">⚠️ Rudi na ukamilishe maandalizi yako kwanza.</p>
          <p className="text-amber-700 text-sm leading-relaxed">
            Hakikisha umejaza taarifa zote na profile yako imekamilika angalau 70%.
          </p>
        </div>
      )}

      {/* Restart */}
      <button
        onClick={() => navigate("/portal")}
        className="w-full px-5 py-3 border border-slate-300 bg-white text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition active:scale-[0.98] text-sm"
      >
        ← Rudi kwenye Portal Selection
      </button>

    </div>
  );
}