import { useState, useEffect } from "react";
import { PDFDocument } from "pdf-lib";
import { useGuidedFlow } from "../../context/GuidedFlowContext";
import { useT } from "../../i18n/useT";

export default function MergePdf() {
  const [files, setFiles] = useState([]);
  const [mergedUrl, setMergedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const { markToolComplete } = useGuidedFlow();
  const { t } = useT();

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setMergedUrl(null);
  };

  const mergePDFs = async () => {
    if (files.length < 2) return;

    try {
      setLoading(true);

      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);

        const copiedPages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices()
        );

        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedBytes = await mergedPdf.save();

      const blob = new Blob([mergedBytes], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);
      setMergedUrl(url);

      markToolComplete("mergePdf");
    } catch (error) {
      console.error("Error merging PDFs:", error);
      alert(t("mergePdf.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (mergedUrl) {
        URL.revokeObjectURL(mergedUrl);
      }
    };
  }, [mergedUrl]);

  return (
    <div className="space-y-10 sm:space-y-12">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          {t("mergePdf.title")}
        </h2>

        <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
          {t("mergePdf.subtitle")}
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm space-y-3">
        <h3 className="font-semibold text-slate-700">
          {t("mergePdf.guideTitle")}
        </h3>

        <ol className="list-decimal list-inside text-slate-600 space-y-1">
          <li>{t("mergePdf.step1")}</li>
          <li>{t("mergePdf.step2")}</li>
          <li>{t("mergePdf.step3")}</li>
          <li>{t("mergePdf.step4")}</li>
        </ol>
      </div>

      <div className="border border-slate-200 rounded-2xl p-6 space-y-6 bg-white">
        <input
          type="file"
          multiple
          accept="application/pdf"
          onChange={handleFileChange}
          id="pdfUpload"
          className="hidden"
        />

        <label
          htmlFor="pdfUpload"
          className="inline-block px-6 py-2.5 bg-slate-200 text-slate-800 rounded-xl cursor-pointer hover:bg-slate-300 transition font-medium"
        >
          {t("mergePdf.choosePdf")}
        </label>

        {files.length > 0 && (
          <p className="text-sm text-slate-600">
            {t("mergePdf.selectedPdf")} {files.length} {t("mergePdf.pdfCountSuffix")}
          </p>
        )}

        <button
          onClick={mergePDFs}
          disabled={files.length < 2 || loading}
          className={`px-6 py-2.5 rounded-xl transition font-semibold ${
            files.length < 2 || loading
              ? "bg-slate-300 text-slate-500 cursor-not-allowed"
              : "bg-teal-600 text-white hover:bg-teal-700 cursor-pointer active:scale-[0.98]"
          }`}
        >
          {loading ? t("mergePdf.merging") : t("mergePdf.merge")}
        </button>
      </div>

      {mergedUrl && (
        <div className="border border-slate-200 rounded-2xl p-6 space-y-4 bg-white">
          <h3 className="font-semibold text-slate-700">
            {t("mergePdf.successTitle")}
          </h3>

          <a
            href={mergedUrl}
            download="merged.pdf"
            className="inline-block px-6 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold"
          >
            {t("mergePdf.download")}
          </a>
        </div>
      )}
    </div>
  );
}