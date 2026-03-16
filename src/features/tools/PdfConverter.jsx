import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { useGuidedFlow } from "../../context/GuidedFlowContext";
import { useT } from "../../i18n/useT";

export default function PdfConverter() {
  const [files, setFiles] = useState([]);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const { markToolComplete } = useGuidedFlow();
  const { t } = useT();

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    setPdfUrl(null);
  };

  const generatePDF = async () => {
    if (files.length === 0) return;

    try {
      setLoading(true);

      const pdfDoc = await PDFDocument.create();

      for (const file of files) {
        const imageBytes = await file.arrayBuffer();
        let image;

        if (file.type === "image/png") {
          image = await pdfDoc.embedPng(imageBytes);
        } else {
          image = await pdfDoc.embedJpg(imageBytes);
        }

        const page = pdfDoc.addPage([image.width, image.height]);

        page.drawImage(image, {
          x: 0,
          y: 0,
          width: image.width,
          height: image.height,
        });
      }

      const pdfBytes = await pdfDoc.save();

      const blob = new Blob([pdfBytes], {
        type: "application/pdf",
      });

      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      markToolComplete("pdfConverter");
    } catch (error) {
      console.error(error);
      alert(t("pdfConverter.errorMessage"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          {t("pdfConverter.title")}
        </h2>

        <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
          {t("pdfConverter.subtitle")}
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm space-y-3">
        <h3 className="font-semibold text-slate-700">
          {t("pdfConverter.guideTitle")}
        </h3>

        <ol className="list-decimal list-inside text-slate-600 space-y-1">
          <li>{t("pdfConverter.step1")}</li>
          <li>{t("pdfConverter.step2")}</li>
          <li>{t("pdfConverter.step3")}</li>
          <li>{t("pdfConverter.step4")}</li>
        </ol>
      </div>

      <div className="border border-slate-200 rounded-2xl p-6 space-y-6 bg-white">
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          id="imageUpload"
          onChange={handleFileChange}
          className="hidden"
        />

        <label
          htmlFor="imageUpload"
          className="inline-block px-6 py-2.5 bg-slate-200 text-slate-800 rounded-xl cursor-pointer hover:bg-slate-300 transition font-medium"
        >
          {t("pdfConverter.chooseImages")}
        </label>

        {files.length > 0 && (
          <p className="text-sm text-slate-600">
            {t("pdfConverter.selectedImages")} {files.length}{" "}
            {t("pdfConverter.imagesCountSuffix")}
          </p>
        )}

        <button
          onClick={generatePDF}
          disabled={files.length === 0 || loading}
          className={`px-6 py-2.5 rounded-xl transition font-semibold ${
            files.length === 0 || loading
              ? "bg-slate-300 text-slate-500 cursor-not-allowed"
              : "bg-teal-600 text-white hover:bg-teal-700 cursor-pointer active:scale-[0.98]"
          }`}
        >
          {loading
            ? t("pdfConverter.generating")
            : t("pdfConverter.generate")}
        </button>
      </div>

      {pdfUrl && (
        <div className="border border-slate-200 rounded-2xl p-6 space-y-4 bg-white">
          <h3 className="font-semibold text-slate-700">
            {t("pdfConverter.successTitle")}
          </h3>

          <a
            href={pdfUrl}
            download="converted.pdf"
            className="inline-block px-6 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold"
          >
            {t("pdfConverter.download")}
          </a>
        </div>
      )}
    </div>
  );
}