import { useNavigate, Link } from "react-router-dom";
import { useGuidedFlow } from "../../context/GuidedFlowContext";
import { useT } from "../../i18n/useT";
import { MessageCircle } from "lucide-react";

export default function ToolsDashboard() {
  const navigate = useNavigate();
  const { completedTools } = useGuidedFlow();
  const { t } = useT();

  const tools = [
    {
      key: "pdfConverter",
      title: t("toolsDashboard.pdfTitle"),
      description: t("toolsDashboard.pdfDesc"),
      path: "/tools/pdf-converter",
    },
    {
      key: "resizePhoto",
      title: t("toolsDashboard.resizeTitle"),
      description: t("toolsDashboard.resizeDesc"),
      path: "/tools/resize-photo",
    },
    {
      key: "mergePdf",
      title: t("toolsDashboard.mergeTitle"),
      description: t("toolsDashboard.mergeDesc"),
      path: "/tools/merge-pdf",
    },
    {
      key: "compressPdf",
      title: t("toolsDashboard.compressTitle"),
      description: t("toolsDashboard.compressDesc"),
      path: "/tools/compress-pdf",
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ================= HEADER ================= */}
      <div className="max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          {t("toolsDashboard.title")}
        </h2>

        <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
          {t("toolsDashboard.subtitle")}
        </p>
      </div>

      {/* ================= INTERVIEW PRACTICE ================= */}
      <Link
        to="/interview"
        state={{ from: "tools" }}
        className="block border-2 border-emerald-600 rounded-2xl p-6 sm:p-8 bg-emerald-50
                   hover:bg-emerald-100 transition-all"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0">
              <MessageCircle size={26} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-800">
                {t("toolsDashboard.interviewTitle")}
              </h3>

              <p className="text-sm text-emerald-700 mt-1 max-w-xl leading-relaxed">
                {t("toolsDashboard.interviewDesc")}
              </p>
            </div>
          </div>

          <div className="text-sm font-semibold text-emerald-700">
            {t("toolsDashboard.interviewAction")}
          </div>
        </div>
      </Link>

      {/* ================= PORTAL ENTRY ================= */}
      <div
        className="border-2 border-blue-600 rounded-2xl p-6 sm:p-8 bg-blue-50
                   flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-blue-800">
            {t("toolsDashboard.portalTitle")}
          </h3>

          <p className="text-sm text-blue-700 max-w-xl leading-relaxed">
            {t("toolsDashboard.portalDesc")}
          </p>
        </div>

        <button
          onClick={() => navigate("/portal")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition
          cursor-pointer active:scale-[0.98] font-semibold shadow-sm"
        >
          {t("toolsDashboard.portalAction")}
        </button>
      </div>

      {/* ================= TOOLS SECTION TITLE ================= */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
          {t("toolsDashboard.sectionTitle")}
        </h3>

        <p className="text-sm text-slate-500 mt-1 leading-relaxed">
          {t("toolsDashboard.sectionDesc")}
        </p>
      </div>

      {/* ================= TOOLS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const isCompleted = completedTools[tool.key];

          return (
            <div
              key={tool.key}
              className="border border-slate-200 rounded-2xl p-6 flex flex-col justify-between
                         hover:shadow-xl transition bg-white"
            >
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-slate-900">
                  {tool.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {tool.description}
                </p>

                {isCompleted && (
                  <div
                    className="inline-block px-3 py-1 text-xs font-medium
                               bg-green-100 text-green-700 rounded-full"
                  >
                    {t("toolsDashboard.completed")}
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate(tool.path)}
                className={`mt-6 w-full px-5 py-2.5 rounded-xl transition font-semibold cursor-pointer active:scale-[0.98] ${
                  isCompleted
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {isCompleted
                  ? t("toolsDashboard.useAgain")
                  : t("toolsDashboard.openTool")}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}