import { useParams, useNavigate, useLocation } from "react-router-dom";
import { CheckCircle2, BookOpen, Sparkles } from "lucide-react";
import PracticeEngine from "./components/PracticeEngine";
import { getPracticeData } from "./data/practiceLoader";
import { useT } from "../../i18n/useT";

export default function PracticePage() {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useT();

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
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      {/* Back */}
      <div>
        <button
          onClick={() =>
            navigate(`/interview/${category}`, { state: location.state })
          }
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 cursor-pointer transition"
        >
          ← {t("practicePage.back")}
        </button>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
          <BookOpen size={14} />
          Interview Practice
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
          {data.title}
        </h1>

        <p className="text-slate-500 max-w-3xl leading-relaxed text-sm sm:text-base lg:text-lg">
          {data.description}
        </p>
      </div>

      {/* Etiquette / Interview Tips */}
      {etiquette.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-sm space-y-5">
          <div className="flex items-center gap-2 text-slate-800">
            <Sparkles size={18} className="text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-bold">
              Interview Etiquette Tips
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {etiquette.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <h3 className="font-semibold text-slate-800">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
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