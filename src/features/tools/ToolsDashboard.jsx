import { useNavigate, Link } from "react-router-dom";
import { useGuidedFlow } from "../../context/GuidedFlowContext";
import { useT } from "../../i18n/useT";
import { MessageCircle, Building2, FileImage, Camera, Files, FileDown } from "lucide-react";

const TOOL_ICONS = {
  pdfConverter: FileImage,
  resizePhoto:  Camera,
  mergePdf:     Files,
  compressPdf:  FileDown,
};

export default function ToolsDashboard() {
  const navigate       = useNavigate();
  const { completedTools } = useGuidedFlow();
  const { t }          = useT();

  const tools = [
    { key: "pdfConverter", title: t("toolsDashboard.pdfTitle"),    description: t("toolsDashboard.pdfDesc"),    path: "/tools/pdf-converter" },
    { key: "resizePhoto",  title: t("toolsDashboard.resizeTitle"), description: t("toolsDashboard.resizeDesc"), path: "/tools/resize-photo"  },
    { key: "mergePdf",     title: t("toolsDashboard.mergeTitle"),  description: t("toolsDashboard.mergeDesc"),  path: "/tools/merge-pdf"     },
    { key: "compressPdf",  title: t("toolsDashboard.compressTitle"),description: t("toolsDashboard.compressDesc"),path: "/tools/compress-pdf"},
  ];

  return (
    <div className="space-y-8 sm:space-y-10">

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="text-sm font-medium text-slate-500 hover:text-teal-600 transition cursor-pointer flex items-center gap-1.5"
      >
        ← {t("common.back")}
      </button>

      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
          🛠️ {t("toolsDashboard.sectionTitle")}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t("toolsDashboard.title")}
        </h2>
        <p className="text-slate-500 mt-2 leading-relaxed text-sm sm:text-base">
          {t("toolsDashboard.subtitle")}
        </p>
      </div>

      {/* Feature banners — 2 col on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Interview Practice — teal */}
        <Link
          to="/interview"
          state={{ from: "tools" }}
          className="group flex items-center justify-between gap-4 bg-teal-600 hover:bg-teal-700 active:scale-[0.99] rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-lg shadow-teal-100 cursor-pointer"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <MessageCircle size={22} className="text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {t("toolsDashboard.interviewTitle")}
              </h3>
              <p className="text-xs text-teal-100 mt-0.5 leading-relaxed max-w-xs">
                {t("toolsDashboard.interviewDesc")}
              </p>
            </div>
          </div>
          <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all text-lg shrink-0">
            →
          </span>
        </Link>

        {/* Portal Preparation — teal outline */}
        <div
          className="group flex items-center justify-between gap-4 bg-white border border-teal-200 hover:border-teal-400 hover:bg-teal-50 active:scale-[0.99] rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer"
          onClick={() => navigate("/portal")}
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center shrink-0 transition-colors">
              <Building2 size={22} className="text-teal-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {t("toolsDashboard.portalTitle")}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed max-w-xs">
                {t("toolsDashboard.portalDesc")}
              </p>
            </div>
          </div>
          <span className="text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all text-lg shrink-0">
            →
          </span>
        </div>

      </div>

      {/* Tools section title */}
      <div className="border-t border-slate-100 pt-6 sm:pt-8">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1">
          {t("toolsDashboard.sectionTitle")}
        </h3>
        <p className="text-sm text-slate-500">
          {t("toolsDashboard.sectionDesc")}
        </p>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {tools.map((tool) => {
          const isCompleted = completedTools[tool.key];
          const Icon        = TOOL_ICONS[tool.key];

          return (
            <div
              key={tool.key}
              className="group bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg hover:border-teal-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="space-y-3">
                {/* Icon + completed badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isCompleted
                      ? "bg-green-50 text-green-600"
                      : "bg-teal-50 text-teal-600 group-hover:bg-teal-100"
                  }`}>
                    <Icon size={20} />
                  </div>
                  {isCompleted && (
                    <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      ✓ {t("toolsDashboard.completed")}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-teal-700 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                    {tool.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate(tool.path)}
                className={`mt-5 w-full py-2.5 rounded-xl text-sm font-bold transition cursor-pointer active:scale-[0.98] ${
                  isCompleted
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-teal-600 hover:bg-teal-700 text-white"
                }`}
              >
                {isCompleted ? t("toolsDashboard.useAgain") : t("toolsDashboard.openTool")}
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}