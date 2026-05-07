import { useNavigate } from "react-router-dom";
import { Mail, FileText, File, Sparkles, Clock } from "lucide-react";
import { useT } from "../../i18n/useT";

export default function LearnDashboard() {
  const navigate = useNavigate();
  const { t } = useT();

  const skills = [
    {
      title: t("learnDashboard.emailTitle"),
      description: t("learnDashboard.emailDesc"),
      icon: <Mail size={26} />,
      path: "/learn/email",
      active: true,
    },
    {
      title: t("learnDashboard.cvTitle"),
      description: t("learnDashboard.cvDesc"),
      icon: <FileText size={26} />,
      active: false,
      eta: "Julai 2026",
    },
    {
      title: t("learnDashboard.docTitle"),
      description: t("learnDashboard.docDesc"),
      icon: <File size={26} />,
      active: false,
      eta: "Agosti 2026",
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-10">

      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1.5"
      >
        ← {t("common.back")}
      </button>

      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100">
          <Sparkles size={13} />
          {t("learnDashboard.badge")}
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {t("learnDashboard.title")}
        </h1>
        <p className="text-slate-500 max-w-2xl leading-relaxed text-sm sm:text-base">
          {t("learnDashboard.subtitle")}
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => skill.active && navigate(skill.path)}
            className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 ${
              skill.active
                ? "border-slate-200 hover:shadow-lg hover:border-teal-200 hover:-translate-y-0.5 bg-white cursor-pointer"
                : "border-slate-200 bg-slate-50 cursor-not-allowed"
            }`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
              skill.active
                ? "bg-teal-50 text-teal-600"
                : "bg-slate-100 text-slate-400"
            }`}>
              {skill.icon}
            </div>

            <h3 className={`text-base font-bold mb-2 ${
              skill.active ? "text-slate-900" : "text-slate-500"
            }`}>
              {skill.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              {skill.description}
            </p>

            {skill.active && (
              <div className="mt-4 text-xs font-bold text-teal-600 flex items-center gap-1">
                {t("common.start")} →
              </div>
            )}

            {!skill.active && (
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-200">
                <Clock size={12} className="text-slate-400 shrink-0" />
                <p className="text-xs text-slate-400 font-semibold">
                  {t("learnDashboard.comingSoon")}
                  {skill.eta && (
                    <span className="ml-1 text-teal-600 font-bold">— {skill.eta}</span>
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}