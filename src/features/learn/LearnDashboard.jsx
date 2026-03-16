import { useNavigate } from "react-router-dom";
import { Mail, FileText, File, Sparkles } from "lucide-react";
import { useT } from "../../i18n/useT";

export default function LearnDashboard() {
  const navigate = useNavigate();
  const { t } = useT();

  const skills = [
    {
      title: t("learnDashboard.emailTitle"),
      description: t("learnDashboard.emailDesc"),
      icon: <Mail size={28} />,
      path: "/learn/email",
      active: true,
    },
    {
      title: t("learnDashboard.cvTitle"),
      description: t("learnDashboard.cvDesc"),
      icon: <FileText size={28} />,
      active: false,
    },
    {
      title: t("learnDashboard.docTitle"),
      description: t("learnDashboard.docDesc"),
      icon: <File size={28} />,
      active: false,
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-12 lg:space-y-14">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
          <Sparkles size={14} />
          {t("learnDashboard.badge")}
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
          {t("learnDashboard.title")}
        </h1>

        <p className="text-slate-500 max-w-2xl leading-relaxed text-sm sm:text-base lg:text-lg">
          {t("learnDashboard.subtitle")}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => skill.active && navigate(skill.path)}
            className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
              skill.active
                ? "border-slate-200 hover:shadow-xl hover:-translate-y-1 bg-white cursor-pointer"
                : "border-slate-200 bg-slate-50 cursor-not-allowed opacity-80"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              {skill.icon}
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {skill.title}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              {skill.description}
            </p>

            {!skill.active && (
              <p className="text-xs text-slate-400 mt-4 font-medium">
                {t("learnDashboard.comingSoon")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}