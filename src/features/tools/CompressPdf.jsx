import { useState, useEffect } from "react";
import { PDFDocument } from "pdf-lib";
import { useGuidedFlow } from "../../context/GuidedFlowContext";
import { useT } from "../../i18n/useT";

export default function CompressPdf() {
  const [file, setFile] = useState(null);
  const [compressedUrl, setCompressedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const { markToolComplete } = useGuidedFlow();
  const { t } = useT();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setCompressedUrl(null);
  };

  const compressPDF = async () => {
    if (!file) return;

    try {
      setLoading(true);

      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);

      const compressedBytes = await pdfDoc.save({
        useObjectStreams: true,
      });

      const blob = new Blob([compressedBytes], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);
      setCompressedUrl(url);

      markToolComplete("compressPdf");
    } catch (error) {
      console.error("Compression error:", error);
      alert(t("compressPdf.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (compressedUrl) {
        URL.revokeObjectURL(compressedUrl);
      }
    };
  }, [compressedUrl]);

  return (
    <div className="space-y-10 sm:space-y-12">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          {t("compressPdf.title")}
        </h2>

        <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
          {t("compressPdf.subtitle")}
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm space-y-3">
        <h3 className="font-semibold text-slate-700">
          {t("compressPdf.guideTitle")}
        </h3>

        <ol className="list-decimal list-inside text-slate-600 space-y-1">
          <li>{t("compressPdf.step1")}</li>
          <li>{t("compressPdf.step2")}</li>
          <li>{t("compressPdf.step3")}</li>
          <li>{t("compressPdf.step4")}</li>
        </ol>
      </div>

      <div className="border border-slate-200 rounded-2xl p-6 space-y-6 bg-white">
        <input
          type="file"
          accept="application/pdf"
          id="compressUpload"
          onChange={handleFileChange}
          className="hidden"
        />

        <label
          htmlFor="compressUpload"
          className="inline-block px-6 py-2.5 bg-slate-200 text-slate-800 rounded-xl cursor-pointer hover:bg-slate-300 transition font-medium"
        >
          {t("compressPdf.choosePdf")}
        </label>

        {file && (
          <p className="text-sm text-slate-600">
            {t("compressPdf.selectedFile")} {file.name}
          </p>
        )}

        <button
          onClick={compressPDF}
          disabled={!file || loading}
          className={`px-6 py-2.5 rounded-xl transition font-semibold ${
            !file || loading
              ? "bg-slate-300 text-slate-500 cursor-not-allowed"
              : "bg-teal-600 text-white hover:bg-teal-700 cursor-pointer active:scale-[0.98]"
          }`}
        >
          {loading
            ? t("compressPdf.compressing")
            : t("compressPdf.compress")}
        </button>
      </div>

      {compressedUrl && (
        <div className="border border-slate-200 rounded-2xl p-6 space-y-4 bg-white">
          <h3 className="font-semibold text-slate-700">
            {t("compressPdf.successTitle")}
          </h3>

          <a
            href={compressedUrl}
            download="compressed.pdf"
            className="inline-block px-6 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold"
          >
            {t("compressPdf.download")}
          </a>
        </div>
      )}
    </div>
  );
}