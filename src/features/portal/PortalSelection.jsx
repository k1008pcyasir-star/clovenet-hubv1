import { useNavigate } from "react-router-dom";
import { useT } from "../../i18n/useT";

export default function PortalSelection() {
  const navigate = useNavigate();
  const { t } = useT();

  const portals = [
    {
      name: "ZanAjira",
      description: "Mfumo rasmi wa ajira wa Serikali ya Mapinduzi Zanzibar. Jifunze jinsi ya kusajili, kupakia hati, na kuwasilisha maombi ya kazi kwa usahihi.",
      path: "/portal/zanajira",
      badge: "Zanzibar",
      emoji: "🏝️",
      steps: ["Usajili", "Profile", "Matokeo"],
    },
    {
      name: "Ajira Portal",
      description: "Jukwaa kuu la ajira za utumishi wa umma Tanzania. Elewa mchakato mzima wa maombi kutoka kutengeneza wasifu hadi kuwasilisha maombi.",
      path: "/portal/ajira",
      badge: "Tanzania Bara",
      emoji: "🇹🇿",
      steps: ["Usajili", "Profile", "Matokeo"],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">

      {/* Back button */}
      <button
        onClick={() => navigate("/tools")}
        className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1.5"
      >
        ← {t("common.back")}
      </button>

      {/* Header */}
      <div>
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
          🏛️ {t("toolsDashboard.portalTitle")}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Chagua Mfumo wa Ajira
        </h2>
        <p className="text-slate-500 mt-2 text-sm sm:text-base leading-relaxed">
          Chagua portal unayotaka kujiandaa nayo. Tutakupitisha hatua zote kabla ya siku ya usajili.
        </p>
      </div>

      {/* Portal cards */}
      <div className="grid sm:grid-cols-2 gap-5">
        {portals.map((portal) => (
          <div
            key={portal.name}
            onClick={() => navigate(portal.path)}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 active:scale-[0.99] transition-all duration-200 cursor-pointer"
          >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-teal-600" />

            <div className="p-5 sm:p-6 space-y-4">
              {/* Name + badge */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{portal.emoji}</span>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {portal.name}
                  </h3>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100 shrink-0">
                  {portal.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {portal.description}
              </p>

              {/* Steps preview */}
              <div className="flex items-center gap-1.5">
                {portal.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                      {i + 1}. {step}
                    </span>
                    {i < portal.steps.length - 1 && (
                      <span className="text-slate-300 text-xs">→</span>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={(e) => { e.stopPropagation(); navigate(portal.path); }}
                className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold transition active:scale-[0.98]"
              >
                Anza Maandalizi →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info note */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 flex items-start gap-3">
        <span className="text-lg shrink-0">💡</span>
        <p className="text-sm text-slate-600 leading-relaxed">
          Huhitaji akaunti ya kweli kufanya mazoezi haya. Tunakusaidia kujiandaa <strong>kabla</strong> ya kwenda kwenye portal halisi.
        </p>
      </div>

    </div>
  );
}