import { useNavigate } from "react-router-dom";
import { useGuidedFlow } from "../../../context/GuidedFlowContext";
import { useT } from "../../../i18n/useT";

export default function Result() {
  const navigate = useNavigate();
  const { t } = useT();
  const {
    score,
    readiness,
    digitalSkills,
    completedTools,
    resetFlow,
  } = useGuidedFlow();

  const adjustedSkills = {
    ...digitalSkills,
    canConvertPDF:
      completedTools.pdfConverter === true
        ? true
        : digitalSkills.canConvertPDF,

    canUpload:
      completedTools.mergePdf === true ||
      completedTools.compressPdf === true ||
      completedTools.resizePhoto === true
        ? true
        : digitalSkills.canUpload,
  };

  const getStatus = () => {
    if (score >= 80) {
      return {
        label: t("result.readyToApply"),
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200",
      };
    }

    if (score >= 50) {
      return {
        label: t("result.almostReady"),
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        border: "border-yellow-200",
      };
    }

    return {
      label: t("result.needsPreparation"),
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
    };
  };

  const status = getStatus();

  const formatLabel = (key) => {
    const labels = {
      hasNida: t("details.hasNida"),
      hasCertificates: t("details.hasCertificates"),
      hasCV: t("details.hasCV"),
      hasEmail: t("details.hasEmail"),
      usedPortalBefore: t("details.usedPortalBefore"),
      canUpload: t("skills.canUpload"),
      canConvertPDF: t("skills.canConvertPDF"),
      canResetPassword: t("skills.canResetPassword"),
      canSendEmail: t("skills.canSendEmail"),
    };

    return labels[key] || key;
  };

  const renderChecklist = (data) =>
    Object.entries(data).map(([key, value]) => (
      <div
        key={key}
        className="flex items-center justify-between gap-4 py-3 border-b border-slate-100 text-sm"
      >
        <span className="text-slate-700 font-medium">{formatLabel(key)}</span>

        <span
          className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full ${
            value === true
              ? "bg-green-50 text-green-700"
              : value === false
              ? "bg-red-50 text-red-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {value === true
            ? t("result.available")
            : value === false
            ? t("result.missing")
            : t("result.notAnswered")}
        </span>
      </div>
    ));

  const generateRecommendations = () => {
    const critical = [];
    const important = [];
    const minor = [];

    if (readiness.hasCV === false)
      critical.push(t("result.createCV"));

    if (readiness.hasNida === false)
      critical.push(t("result.obtainNida"));

    if (readiness.hasCertificates === false)
      critical.push(t("result.prepareCertificates"));

    if (readiness.hasEmail === false)
      critical.push(t("result.createEmail"));

    if (readiness.usedPortalBefore === false)
      important.push({
        text: t("result.portalFamiliarity"),
        action: "/portal",
      });

    if (adjustedSkills.canUpload === false)
      important.push({
        text: t("result.learnUpload"),
        action: "/tools",
      });

    if (adjustedSkills.canConvertPDF === false)
      important.push({
        text: t("result.learnPdf"),
        action: "/tools",
      });

    if (adjustedSkills.canResetPassword === false)
      minor.push(t("result.resetPassword"));

    return { critical, important, minor };
  };

  const { critical, important, minor } = generateRecommendations();

  return (
    <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-4">
          {t("result.badge")}
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t("result.title")}
        </h2>

        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          {t("result.subtitle")}
        </p>
      </div>

      <div className={`border rounded-2xl p-6 sm:p-7 ${status.bg} ${status.border}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-800 text-base sm:text-lg">
            {t("result.overallReadinessScore")}
          </h3>

          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {score}%
          </span>
        </div>

        <div className="w-full bg-white/70 h-3 rounded-full overflow-hidden">
          <div
            className="bg-teal-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${score}%` }}
          />
        </div>

        <p className={`mt-4 font-semibold ${status.color}`}>
          {t("result.status")}: {status.label}
        </p>
      </div>

      <div className="border-2 border-blue-200 bg-blue-50 rounded-2xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xl font-bold text-blue-800">
          {t("result.nextStepTitle")}
        </h3>

        <p className="text-sm sm:text-base text-blue-700 leading-relaxed">
          {t("result.nextStepDesc")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => navigate("/portal/zanajira")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700
            transition cursor-pointer active:scale-[0.98] font-semibold shadow-sm"
          >
            {t("result.zanajiraPreparation")}
          </button>

          <button
            onClick={() => navigate("/portal/ajira")}
            className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700
            transition cursor-pointer active:scale-[0.98] font-semibold shadow-sm"
          >
            {t("result.ajiraPreparation")}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-4 text-lg">
            {t("result.documentReadinessReview")}
          </h3>
          {renderChecklist(readiness)}
        </div>

        <div className="border border-slate-200 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-slate-800 mb-4 text-lg">
            {t("result.digitalSkillsReview")}
          </h3>
          {renderChecklist(adjustedSkills)}
        </div>
      </div>

      <div className="border border-slate-200 bg-white rounded-2xl p-6 sm:p-7 shadow-sm space-y-6">
        <h3 className="font-semibold text-slate-800 text-lg">
          {t("result.priorityActionPlan")}
        </h3>

        {critical.length === 0 &&
        important.length === 0 &&
        minor.length === 0 ? (
          <p className="text-sm text-slate-600">
            {t("result.fullyPrepared")}
          </p>
        ) : (
          <div className="space-y-6">
            {critical.length > 0 && (
              <div>
                <h4 className="text-red-600 font-semibold mb-3">
                  🔴 {t("result.criticalGaps")}
                </h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                  {critical.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {important.length > 0 && (
              <div>
                <h4 className="text-yellow-600 font-semibold mb-3">
                  🟡 {t("result.importantImprovements")}
                </h4>
                <ul className="space-y-3">
                  {important.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-slate-100 rounded-xl p-3"
                    >
                      <span className="text-sm text-slate-600">
                        {item.text}
                      </span>

                      <button
                        onClick={() => navigate(item.action)}
                        className="text-teal-600 text-sm font-semibold hover:text-teal-700 hover:underline
                        cursor-pointer transition text-left sm:text-right"
                      >
                        {t("result.solveNow")}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {minor.length > 0 && (
              <div>
                <h4 className="text-green-600 font-semibold mb-3">
                  🟢 {t("result.minorEnhancements")}
                </h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                  {minor.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2">
        <button
          onClick={() => navigate("/guided-flow/skills")}
          className="w-full sm:w-auto px-5 py-3 border border-slate-300 bg-white text-slate-700 rounded-xl
          hover:bg-slate-50 hover:border-slate-400 transition cursor-pointer active:scale-[0.98] font-medium"
        >
          {t("result.back")}
        </button>

        <button
          onClick={() => {
            resetFlow();
            navigate("/guided-flow");
          }}
          className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white rounded-xl
          hover:bg-teal-700 transition cursor-pointer active:scale-[0.98] font-semibold shadow-md"
        >
          {t("result.startAgain")}
        </button>
      </div>
    </div>
  );
}