import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useT } from "../../i18n/useT";
import { interviewCategories } from "./data";
import { BookOpen, ArrowRight } from "lucide-react";

export default function SubCategoryPage() {
  const { category, subcategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t }    = useT();

  const currentCategory = interviewCategories.find((cat) => cat.id === category);
  const currentSub      = currentCategory?.subcategories?.find((sub) => sub.id === subcategory);

  if (!currentCategory || !currentSub) {
    return (
      <div className="flex items-center justify-center py-20">
        <h1 className="text-xl font-semibold text-slate-600">{t("subCategoryPage.notFound")}</h1>
      </div>
    );
  }

  const CategoryIcon = currentCategory.icon;

  const handleStart = () => {
    navigate(`/interview/${category}/${subcategory}/practice`, { state: location.state });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 sm:space-y-10">

      {/* Back */}
      <button
        onClick={() => navigate(`/interview/${category}`, { state: location.state })}
        className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1.5"
      >
        ← {t("subCategoryPage.backPrefix")} {currentCategory.title}
      </button>

      {/* Header */}
      <div className="space-y-3">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <CategoryIcon size={13} />
          <span>{currentCategory.title}</span>
          <span>›</span>
          <span className="text-teal-600 font-semibold">{currentSub.title}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {currentSub.title}
        </h1>

        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          {t("subCategoryPage.subtitlePrefix")} {currentSub.title}.{" "}
          {t("subCategoryPage.subtitleSuffix")}
        </p>
      </div>

      {/* What to expect */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 space-y-3">
        <h3 className="text-sm font-bold text-teal-800 flex items-center gap-2">
          <BookOpen size={15} />
          {t("subCategoryPage.readyTitle")}
        </h3>
        <ul className="space-y-1.5">
          {[
            t("subCategoryPage.readyDescPrefix") + " " + currentSub.title + ".",
            t("subCategoryPage.subtitleSuffix"),
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-teal-700">
              <span className="text-teal-400 mt-0.5 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <button
        onClick={handleStart}
        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-base transition cursor-pointer active:scale-[0.98] shadow-lg shadow-teal-100"
      >
        {t("subCategoryPage.start")}
        <ArrowRight size={20} />
      </button>

    </div>
  );
}