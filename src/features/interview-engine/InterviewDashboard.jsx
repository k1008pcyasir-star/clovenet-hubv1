import { Link, useLocation, useNavigate } from "react-router-dom";
import { interviewCategories } from "./data";
import { useT } from "../../i18n/useT";

export default function InterviewDashboard() {
  const location = useLocation();
  const navigate  = useNavigate();
  const { t }     = useT();

  const handleBack = () => {
    if (location.state?.from === "tools") navigate("/tools");
    else navigate("/");
  };

  return (
    <div className="space-y-8 sm:space-y-10">

      {/* Back */}
      <button
        onClick={handleBack}
        className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1.5"
      >
        ← {t("interviewDashboard.back")}
      </button>

      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
          🗣️ {t("interviewDashboard.title")}
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t("interviewDashboard.title")}
        </h1>
        <p className="text-slate-500 mt-2 text-sm sm:text-base leading-relaxed max-w-2xl">
          {t("interviewDashboard.subtitle")}
        </p>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {interviewCategories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.id}
              to={`/interview/${category.id}`}
              state={location.state}
              className="group bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:border-teal-200 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200"
            >
              <div className="w-12 h-12 bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-4 transition-colors">
                <Icon size={24} />
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 group-hover:text-teal-700 transition-colors leading-snug">
                {category.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {t("interviewDashboard.cardPrefix")} {category.title}.
              </p>

              <div className="mt-4 text-xs font-bold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                {t("common.start")} →
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}