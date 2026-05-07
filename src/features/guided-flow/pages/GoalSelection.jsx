import { useNavigate } from "react-router-dom";
import { useGuidedFlow } from "../../../context/GuidedFlowContext";
import { useT } from "../../../i18n/useT";
import { Briefcase, Building2, ArrowRight } from "lucide-react";

export default function GoalSelection() {
  const navigate = useNavigate();
  const { setGoal } = useGuidedFlow();
  const { t } = useT();

  const handleSelect = (type) => {
    setGoal(type);
    navigate("/guided-flow/details");
  };

  return (
    <div className="max-w-xl mx-auto space-y-8 sm:space-y-10">

      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1.5"
      >
        ← {t("goalSelection.back")}
      </button>

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          {t("goalSelection.badge")}
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t("goalSelection.title")}
        </h2>

        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          {t("goalSelection.subtitle")}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-4">

        {/* Government — primary/featured */}
        <button
          onClick={() => handleSelect("government")}
          className="group w-full rounded-2xl p-5 sm:p-6 text-left bg-teal-600 hover:bg-teal-700 active:scale-[0.99] transition-all duration-200 shadow-lg shadow-teal-100 cursor-pointer"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Building2 size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {t("goalSelection.governmentTitle")}
                </h3>
                <p className="text-xs sm:text-sm text-teal-100 mt-0.5 leading-relaxed">
                  {t("goalSelection.governmentDesc")}
                </p>
              </div>
            </div>
            <ArrowRight
              size={20}
              className="text-white/70 shrink-0 group-hover:translate-x-1 group-hover:text-white transition-all"
            />
          </div>
        </button>

        {/* Private */}
        <button
          onClick={() => handleSelect("private")}
          className="group w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 text-left hover:border-teal-200 hover:shadow-lg active:scale-[0.99] transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-100 group-hover:bg-teal-50 flex items-center justify-center text-slate-500 group-hover:text-teal-600 shrink-0 transition-colors">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {t("goalSelection.privateTitle")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                  {t("goalSelection.privateDesc")}
                </p>
              </div>
            </div>
            <ArrowRight
              size={20}
              className="text-slate-300 shrink-0 group-hover:translate-x-1 group-hover:text-teal-500 transition-all"
            />
          </div>
        </button>

      </div>
    </div>
  );
}