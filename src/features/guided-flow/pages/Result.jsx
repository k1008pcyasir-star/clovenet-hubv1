import { useNavigate } from "react-router-dom";
import { useGuidedFlow } from "../../../context/GuidedFlowContext";
import { useT } from "../../../i18n/useT";

export default function Result() {
  const navigate = useNavigate();
  const { t } = useT();
  const { score, readiness, digitalSkills, completedTools, resetFlow } = useGuidedFlow();

  const adjustedSkills = {
    ...digitalSkills,
    canConvertPDF:
      completedTools.pdfConverter === true ? true : digitalSkills.canConvertPDF,
    canUpload:
      completedTools.mergePdf === true ||
      completedTools.compressPdf === true ||
      completedTools.resizePhoto === true
        ? true
        : digitalSkills.canUpload,
  };

  const getStatus = () => {
    if (score >= 80) return {
      label: t("result.readyToApply"),
      color: "text-green-700",
      bg: "bg-green-50",
      border: "border-green-200",
      barColor: "bg-green-500",
    };
    if (score >= 50) return {
      label: t("result.almostReady"),
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200",
      barColor: "bg-amber-500",
    };
    return {
      label: t("result.needsPreparation"),
      color: "text-red-700",
      bg: "bg-red-50",
      border: "border-red-200",
      barColor: "bg-red-500",
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
        className="flex items-center justify-between gap-4 py-3 border-b border-slate-100 last:border-b-0 text-sm"
      >
        <span className="text-slate-700 font-medium leading-relaxed">{formatLabel(key)}</span>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${
          value === true
            ? "bg-green-50 text-green-700"
            : value === false
            ? "bg-red-50 text-red-600"
            : "bg-slate-100 text-slate-400"
        }`}>
          {value === true
            ? t("result.available")
            : value === false
            ? t("result.missing")
            : t("result.notAnswered")}
        </span>
      </div>
    ));

  const generateRecommendations = () => {
    const critical = [], important = [], minor = [];
    if (readiness.hasCV === false)           critical.push(t("result.createCV"));
    if (readiness.hasNida === false)         critical.push(t("result.obtainNida"));
    if (readiness.hasCertificates === false) critical.push(t("result.prepareCertificates"));
    if (readiness.hasEmail === false)        critical.push(t("result.createEmail"));
    if (readiness.usedPortalBefore === false)
      important.push({ text: t("result.portalFamiliarity"), action: "/portal" });
    if (adjustedSkills.canUpload === false)
      important.push({ text: t("result.learnUpload"), action: "/tools" });
    if (adjustedSkills.canConvertPDF === false)
      important.push({ text: t("result.learnPdf"), action: "/tools" });
    if (adjustedSkills.canResetPassword === false)
      minor.push(t("result.resetPassword"));
    return { critical, important, minor };
  };

  const { critical, important, minor } = generateRecommendations();

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">

      {/* Header */}
      <div>
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
          {t("result.badge")}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t("result.title")}
        </h2>
        <p className="text-slate-500 mt-1.5 text-sm sm:text-base">
          {t("result.subtitle")}
        </p>
      </div>

      {/* Score card */}
      <div className={`border rounded-2xl p-5 sm:p-6 ${status.bg} ${status.border}`}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-slate-800 text-sm sm:text-base">
            {t("result.overallReadinessScore")}
          </h3>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {score}%
          </span>
        </div>
        <div className="w-full bg-white/70 h-2.5 rounded-full overflow-hidden">
          <div
            className={`${status.barColor} h-full rounded-full transition-all duration-700`}
            style={{ width: `${score}%` }}
          />
        </div>
        <p className={`mt-3 text-sm font-bold ${status.color}`}>
          {t("result.status")}: {status.label}
        </p>
      </div>

      {/* Next step — teal instead of blue */}
      <div className="border border-teal-200 bg-teal-50 rounded-2xl p-5 sm:p-6 space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-teal-800 mb-1">
            {t("result.nextStepTitle")}
          </h3>
          <p className="text-sm text-teal-700 leading-relaxed">
            {t("result.nextStepDesc")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate("/portal/zanajira")}
            className="flex-1 px-5 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition cursor-pointer active:scale-[0.98] font-semibold text-sm shadow-sm"
          >
            {t("result.zanajiraPreparation")}
          </button>
          <button
            onClick={() => navigate("/portal/ajira")}
            className="flex-1 px-5 py-3 bg-white text-teal-700 border border-teal-200 rounded-xl hover:bg-teal-100 transition cursor-pointer active:scale-[0.98] font-semibold text-sm"
          >
            {t("result.ajiraPreparation")}
          </button>
        </div>
      </div>

      {/* Checklists */}
      <div className="grid lg:grid-cols-2 gap-4 sm:gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 text-sm sm:text-base">
            {t("result.documentReadinessReview")}
          </h3>
          {renderChecklist(readiness)}
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4 text-sm sm:text-base">
            {t("result.digitalSkillsReview")}
          </h3>
          {renderChecklist(adjustedSkills)}
        </div>
      </div>

      {/* Action plan */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
        <h3 className="font-bold text-slate-800 text-sm sm:text-base">
          {t("result.priorityActionPlan")}
        </h3>

        {critical.length === 0 && important.length === 0 && minor.length === 0 ? (
          <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-4">
            <span className="text-xl">🎉</span>
            <p className="text-sm text-green-700 font-semibold">{t("result.fullyPrepared")}</p>
          </div>
        ) : (
          <div className="space-y-5">
            {critical.length > 0 && (
              <div>
                <h4 className="text-red-600 font-bold text-sm mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  {t("result.criticalGaps")}
                </h4>
                <ul className="space-y-2">
                  {critical.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {important.length > 0 && (
              <div>
                <h4 className="text-amber-600 font-bold text-sm mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  {t("result.importantImprovements")}
                </h4>
                <ul className="space-y-2">
                  {important.map((item, i) => (
                    <li key={i} className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                      <span className="text-sm text-slate-600 leading-relaxed">{item.text}</span>
                      <button
                        onClick={() => navigate(item.action)}
                        className="text-teal-600 text-xs font-bold hover:text-teal-700 cursor-pointer transition shrink-0 whitespace-nowrap"
                      >
                        {t("result.solveNow")} →
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {minor.length > 0 && (
              <div>
                <h4 className="text-green-600 font-bold text-sm mb-2.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  {t("result.minorEnhancements")}
                </h4>
                <ul className="space-y-2">
                  {minor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 pb-4">
        <button
          onClick={() => navigate("/guided-flow/skills")}
          className="w-full sm:w-auto px-5 py-3 border border-slate-200 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition cursor-pointer active:scale-[0.98] font-medium text-sm"
        >
          ← {t("result.back")}
        </button>
        <button
          onClick={() => { resetFlow(); navigate("/guided-flow"); }}
          className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition cursor-pointer active:scale-[0.98] font-semibold text-sm shadow-sm"
        >
          {t("result.startAgain")}
        </button>
      </div>

    </div>
  );
}