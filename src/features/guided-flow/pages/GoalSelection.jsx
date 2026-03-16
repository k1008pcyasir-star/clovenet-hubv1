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
    <div className="max-w-2xl mx-auto space-y-10">
      {/* ================= BACK BUTTON ================= */}
      <button
        onClick={() => navigate("/")}
        className="text-sm text-slate-600 hover:text-teal-600 transition cursor-pointer flex items-center gap-1"
      >
        ← {t("goalSelection.back")}
      </button>

      {/* ================= TITLE ================= */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          {t("goalSelection.badge")}
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t("goalSelection.title")}
        </h2>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          {t("goalSelection.subtitle")}
        </p>
      </div>

      {/* ================= OPTIONS ================= */}
      <div className="space-y-5">
        {/* Government */}
        <button
          onClick={() => handleSelect("government")}
          className="group w-full rounded-2xl p-6 text-left
          bg-teal-600 text-white hover:bg-teal-700
          transition-all duration-200 shadow-md hover:shadow-xl
          cursor-pointer"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Building2 size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {t("goalSelection.governmentTitle")}
                </h3>

                <p className="text-sm text-teal-100 leading-relaxed">
                  {t("goalSelection.governmentDesc")}
                </p>
              </div>
            </div>

            <ArrowRight className="shrink-0 group-hover:translate-x-1 transition" />
          </div>
        </button>

        {/* Private */}
        <button
          onClick={() => handleSelect("private")}
          className="group w-full bg-white border border-slate-200
          rounded-2xl p-6 text-left hover:border-slate-300
          hover:shadow-lg transition cursor-pointer"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                <Briefcase size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {t("goalSelection.privateTitle")}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {t("goalSelection.privateDesc")}
                </p>
              </div>
            </div>

            <ArrowRight className="text-slate-400 shrink-0 group-hover:translate-x-1 transition" />
          </div>
        </button>
      </div>
    </div>
  );
}