import { useParams, useNavigate, useLocation } from "react-router-dom";
import { CheckCircle2, BookOpen, Sparkles } from "lucide-react";
import PracticeEngine from "./components/PracticeEngine";
import { getPracticeData } from "./data/practiceLoader";
import { useT } from "../../i18n/useT";

export default function PracticePage() {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t }    = useT();

  const data = getPracticeData(category, subcategory);

  if (!data) {
    return (
      <div className="flex items-center justify-center py-20">
        <h1 className="text-xl font-semibold text-slate-600">
          {t("practicePage.notFound")}
        </h1>
      </div>
    );
  }

  const etiquette = Array.isArray(data.etiquette) ? data.etiquette : [];

  return (
    <div className="space-y-8 sm:space-y-10">

      {/* Back */}
      <button
        onClick={() => navigate(`/interview/${category}`, { state: location.state })}
        className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1.5"
      >
        ← {t("practicePage.back")}
      </button>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          <BookOpen size={13} />
          {t("categoryPage.badge")}
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {data.title}
        </h1>

        <p className="text-slate-500 max-w-3xl leading-relaxed text-sm sm:text-base">
          {data.description}
        </p>
      </div>

      {/* Etiquette tips */}
      {etiquette.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-teal-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-800">
              Interview Etiquette Tips
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {etiquette.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="bg-teal-50 border border-teal-100 rounded-xl p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                  <h3 className="font-bold text-slate-800 text-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Practice Engine */}
      <PracticeEngine questions={data.questions} />

    </div>
  );
}