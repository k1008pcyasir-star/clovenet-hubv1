import { useNavigate } from "react-router-dom";
import { useGuidedFlow } from "../../../context/GuidedFlowContext";
import { useT } from "../../../i18n/useT";

export default function Skills() {
  const navigate = useNavigate();
  const { digitalSkills, setDigitalSkills } = useGuidedFlow();
  const { t } = useT();

  const handleChange = (field, value) => {
    setDigitalSkills((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const questions = [
    { key: "canUpload", label: t("skills.canUpload") },
    { key: "canConvertPDF", label: t("skills.canConvertPDF") },
    { key: "canResetPassword", label: t("skills.canResetPassword") },
    { key: "canSendEmail", label: t("skills.canSendEmail") },
  ];

  return (
    <div className="min-h-screen bg-clovenet-bg py-6 sm:py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">

        <div className="text-center sm:text-left">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-4">
            {t("skills.badge")}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t("skills.title")}
          </h2>

          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="space-y-5">
          {questions.map((q) => (
            <div
              key={q.key}
              className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col gap-5">

                <span className="text-slate-800 font-semibold text-base sm:text-lg">
                  {q.label}
                </span>

                <div className="grid grid-cols-2 gap-3">

                  <button
                    onClick={() => handleChange(q.key, true)}
                    className={`py-4 rounded-xl font-bold cursor-pointer transition active:scale-[0.98] ${
                      digitalSkills[q.key] === true
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-800 hover:bg-green-50 hover:text-green-700"
                    }`}
                  >
                    {t("skills.yes")}
                  </button>

                  <button
                    onClick={() => handleChange(q.key, false)}
                    className={`py-4 rounded-xl font-bold cursor-pointer transition active:scale-[0.98] ${
                      digitalSkills[q.key] === false
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-red-700"
                    }`}
                  >
                    {t("skills.no")}
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2">

          <button
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto px-5 py-3 border border-slate-300 bg-white text-slate-700 rounded-xl
            hover:bg-slate-50 hover:border-slate-400 transition cursor-pointer active:scale-[0.98] font-medium"
          >
            {t("skills.back")}
          </button>

          <button
            onClick={() => navigate("/guided-flow/result")}
            className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white rounded-xl
            hover:bg-teal-700 transition cursor-pointer active:scale-[0.98] font-semibold shadow-md"
          >
            {t("skills.continue")}
          </button>

        </div>

      </div>
    </div>
  );
}