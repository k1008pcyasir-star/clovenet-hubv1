import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useT } from "../../i18n/useT";
import { interviewCategories } from "./data";

export default function SubCategoryPage() {
  const { category, subcategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useT();

  const currentCategory = interviewCategories.find(
    (cat) => cat.id === category
  );

  const currentSub = currentCategory?.subcategories?.find(
    (sub) => sub.id === subcategory
  );

  if (!currentCategory || !currentSub) {
    return (
      <div className="flex items-center justify-center py-20">
        <h1 className="text-xl font-semibold text-slate-600">
          {t("subCategoryPage.notFound")}
        </h1>
      </div>
    );
  }

  const handleBack = () => {
    navigate(`/interview/${category}`, {
      state: location.state,
    });
  };

  const handleStart = () => {
    navigate(`/interview/${category}/${subcategory}/practice`, {
      state: location.state,
    });
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      <div>
        <button
          onClick={handleBack}
          className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition cursor-pointer"
        >
          ← {t("subCategoryPage.backPrefix")} {currentCategory.title}
        </button>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
          {currentSub.title}
        </h1>

        <p className="text-slate-500 max-w-2xl leading-relaxed">
          {t("subCategoryPage.subtitlePrefix")} {currentSub.title}.{" "}
          {t("subCategoryPage.subtitleSuffix")}
        </p>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            {t("subCategoryPage.readyTitle")}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            {t("subCategoryPage.readyDescPrefix")} {currentSub.title}.
          </p>
        </div>

        <button
          onClick={handleStart}
          className="px-8 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition cursor-pointer active:scale-[0.98] font-semibold"
        >
          {t("subCategoryPage.start")}
        </button>
      </div>
    </div>
  );
}