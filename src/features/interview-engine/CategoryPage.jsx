import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { interviewCategories } from "./data";
import { ArrowRight, Layers3 } from "lucide-react";
import { useT } from "../../i18n/useT";

export default function CategoryPage() {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useT();

  const currentCategory = interviewCategories.find(
    (cat) => cat.id === category
  );

  useEffect(() => {
    if (
      currentCategory &&
      (!currentCategory.subcategories ||
        currentCategory.subcategories.length === 0)
    ) {
      navigate(`/interview/${currentCategory.id}`);
    }
  }, [currentCategory, navigate]);

  if (!currentCategory) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center space-y-3">
          <div className="text-4xl">📂</div>
          <h1 className="text-xl font-semibold text-slate-700">
            {t("categoryPage.notFound")}
          </h1>
        </div>
      </div>
    );
  }

  if (
    !currentCategory.subcategories ||
    currentCategory.subcategories.length === 0
  ) {
    return null;
  }

  const handleBack = () => {
    navigate("/interview", {
      state: location.state,
    });
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      <div>
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition cursor-pointer"
        >
          ← {t("categoryPage.back")}
        </button>
      </div>

      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          <Layers3 size={14} />
          {t("categoryPage.badge")}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          {currentCategory.title}
        </h1>

        <p className="text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed">
          {t("categoryPage.subtitle")}
        </p>
      </div>

      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {currentCategory.subcategories.map((sub, index) => (
          <button
            key={sub.id}
            onClick={() =>
              navigate(`/interview/${category}/${sub.id}`, {
                state: location.state,
              })
            }
            className="group bg-white p-6 sm:p-7 rounded-2xl border border-slate-200
            hover:shadow-xl hover:border-teal-300 hover:-translate-y-1
            transition-all duration-300 text-left cursor-pointer
            animate-[fadeInUp_0.4s_ease_forwards]"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition">
              <ArrowRight
                size={20}
                className="group-hover:translate-x-0.5 transition"
              />
            </div>

            <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-teal-700 transition-colors">
              {sub.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              {t("categoryPage.cardPrefix")} {sub.title}.
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}