import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { interviewCategories } from "./data";
import { useT } from "../../i18n/useT";

export default function CategoryPage() {
  const { category } = useParams();
  const location     = useLocation();
  const navigate     = useNavigate();
  const { t }        = useT();

  const currentCategory = interviewCategories.find((cat) => cat.id === category);

  useEffect(() => {
    if (currentCategory && (!currentCategory.subcategories || currentCategory.subcategories.length === 0)) {
      navigate(`/interview/${currentCategory.id}`);
    }
  }, [currentCategory, navigate]);

  if (!currentCategory) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center space-y-3">
          <div className="text-4xl">📂</div>
          <h1 className="text-xl font-semibold text-slate-700">{t("categoryPage.notFound")}</h1>
        </div>
      </div>
    );
  }

  if (!currentCategory.subcategories || currentCategory.subcategories.length === 0) return null;

  const Icon = currentCategory.icon;

  return (
    <div className="space-y-8 sm:space-y-10">

      {/* Back */}
      <button
        onClick={() => navigate("/interview", { state: location.state })}
        className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1.5"
      >
        ← {t("categoryPage.back")}
      </button>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
        <div className="w-14 h-14 rounded-2xl bg-teal-600 flex items-center justify-center shrink-0 shadow-lg shadow-teal-100">
          <Icon size={26} className="text-white" />
        </div>
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-2">
            {t("categoryPage.badge")}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {currentCategory.title}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-1 leading-relaxed">
            {t("categoryPage.subtitle")}
          </p>
        </div>
      </div>

      {/* Subcategory cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {currentCategory.subcategories.map((sub, index) => (
          <button
            key={sub.id}
            onClick={() => navigate(`/interview/${category}/${sub.id}`, { state: location.state })}
            className="group bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 text-left hover:shadow-lg hover:border-teal-200 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            {/* Number + arrow */}
            <div className="flex items-center justify-between mb-4">
              <span className="w-8 h-8 rounded-lg bg-teal-50 group-hover:bg-teal-100 text-teal-600 text-xs font-extrabold flex items-center justify-center transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-300 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all text-base">
                →
              </span>
            </div>

            <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5 group-hover:text-teal-700 transition-colors leading-snug">
              {sub.title}
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t("categoryPage.cardPrefix")} {sub.title}.
            </p>
          </button>
        ))}
      </div>

    </div>
  );
}