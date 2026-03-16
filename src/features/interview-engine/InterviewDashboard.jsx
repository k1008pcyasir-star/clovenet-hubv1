import { Link, useLocation, useNavigate } from "react-router-dom";
import { interviewCategories } from "./data";
import { useT } from "../../i18n/useT";

export default function InterviewDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useT();

  const handleBack = () => {
    if (location.state?.from === "launch") {
      navigate("/");
    } else if (location.state?.from === "tools") {
      navigate("/tools");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      <div>
        <button
          onClick={handleBack}
          className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition cursor-pointer"
        >
          ← {t("interviewDashboard.back")}
        </button>
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
          {t("interviewDashboard.title")}
        </h1>

        <p className="text-slate-500 mt-3 text-base max-w-2xl leading-relaxed">
          {t("interviewDashboard.subtitle")}
        </p>
      </div>

      <div
        className="grid gap-6 sm:gap-8
                   grid-cols-1
                   md:grid-cols-2
                   lg:grid-cols-3
                   xl:grid-cols-4"
      >
        {interviewCategories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              key={category.id}
              to={`/interview/${category.id}`}
              state={location.state}
              className="group bg-white rounded-2xl p-8 sm:p-10 border border-slate-200
                         hover:shadow-xl hover:border-emerald-400
                         transition-all duration-200"
            >
              <div
                className="w-16 h-16 bg-slate-100 rounded-xl
                           flex items-center justify-center
                           text-slate-700 mb-6
                           group-hover:bg-emerald-100
                           group-hover:text-emerald-600
                           transition-colors"
              >
                <Icon size={28} />
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {category.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed">
                {t("interviewDashboard.cardPrefix")} {category.title}.
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}