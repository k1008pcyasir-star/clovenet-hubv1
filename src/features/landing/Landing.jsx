import { useNavigate } from "react-router-dom";
import { useT } from "../../i18n/useT";

export default function LandingPage() {
  const navigate = useNavigate();
  const { t } = useT();

  return (
    <div className="w-full space-y-20 sm:space-y-24">
      {/* ================= HERO ================= */}
      <section className="text-center max-w-5xl mx-auto pt-4 sm:pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-6 border border-teal-100">
          {t("landing.badge")}
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          {t("landing.heroTitle")}
        </h1>

        <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          {t("landing.heroSubtitle")}
        </p>

        <button
          onClick={() => navigate("/guided-flow")}
          className="mt-8 px-8 py-3.5 bg-teal-600 text-white rounded-xl text-base sm:text-lg font-semibold
          hover:bg-teal-700 hover:-translate-y-0.5 active:scale-[0.98] transition duration-200
          shadow-lg shadow-teal-100 cursor-pointer"
        >
          {t("landing.startCareerPreparation")}
        </button>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
        <div
          onClick={() => navigate("/guided-flow")}
          className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:-translate-y-1
          cursor-pointer transition duration-200"
        >
          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-2xl mb-4">
            🎯
          </div>

          <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-teal-700 transition-colors">
            {t("landing.careerPreparationTitle")}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {t("landing.careerPreparationDesc")}
          </p>
        </div>

        <div
          onClick={() => navigate("/interview")}
          className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:-translate-y-1
          cursor-pointer transition duration-200"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4">
            🗣️
          </div>

          <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-blue-700 transition-colors">
            {t("landing.interviewPracticeTitle")}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {t("landing.interviewPracticeDesc")}
          </p>
        </div>

        <div
          onClick={() => navigate("/tools")}
          className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:-translate-y-1
          cursor-pointer transition duration-200"
        >
          <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl mb-4">
            🛠️
          </div>

          <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-amber-700 transition-colors">
            {t("landing.digitalToolsTitle")}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {t("landing.digitalToolsDesc")}
          </p>
        </div>

        <div
          onClick={() => navigate("/learn")}
          className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:-translate-y-1
          cursor-pointer transition duration-200"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl mb-4">
            📚
          </div>

          <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-emerald-700 transition-colors">
            {t("landing.learnSkillsTitle")}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {t("landing.learnSkillsDesc")}
          </p>
        </div>
      </section>

      {/* ================= WHY CLOVE NET ================= */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          {t("landing.whyTitle")}
        </h2>

        <p className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg">
          {t("landing.whyDesc")}
        </p>
      </section>
    </div>
  );
}