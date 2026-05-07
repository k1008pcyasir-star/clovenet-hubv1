import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGuidedFlow } from "../../context/GuidedFlowContext";
import { useT } from "../../i18n/useT";

export default function ResizePhoto() {
  const [preview, setPreview] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { markToolComplete } = useGuidedFlow();
  const { t } = useT();
  const navigate = useNavigate();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      processImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const processImage = (imageSrc) => {
    setLoading(true);

    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 600;

      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");

      const minSide = Math.min(img.width, img.height);
      const sx = (img.width - minSide) / 2;
      const sy = (img.height - minSide) / 2;

      ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);

      const compressed = canvas.toDataURL("image/jpeg", 0.8);

      setPreview(imageSrc);
      setResizedImage(compressed);
      setLoading(false);

      markToolComplete("resizePhoto");
    };

    img.onerror = () => {
      alert(t("resizePhoto.errorMessage"));
      setLoading(false);
    };
  };

  return (
    <div className="space-y-10 sm:space-y-12">

      {/* ✅ IMEONGEZWA: Back button */}
      <button
        onClick={() => navigate("/tools")}
        className="text-sm font-medium text-teal-600 hover:text-teal-700 transition cursor-pointer flex items-center gap-1"
      >
        ← {t("common.backToTools")}
      </button>

      <div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          {t("resizePhoto.title")}
        </h2>

        <p className="text-slate-600 mt-2 leading-relaxed text-sm sm:text-base">
          {t("resizePhoto.subtitle")}
        </p>
      </div>

      {/* ✅ IMEONGEZWA: Maelezo ya ukubwa wa picha itakayotokea */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 text-sm text-blue-700">
        ℹ️ {t("resizePhoto.sizeNote")}
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm space-y-3">
        <h3 className="font-semibold text-slate-700">
          {t("resizePhoto.guideTitle")}
        </h3>

        <ol className="list-decimal list-inside text-slate-600 space-y-1">
          <li>{t("resizePhoto.step1")}</li>
          <li>{t("resizePhoto.step2")}</li>
          <li>{t("resizePhoto.step3")}</li>
        </ol>
      </div>

      <div className="border border-slate-200 rounded-2xl p-6 space-y-6 bg-white">
        <input
          type="file"
          accept="image/*"
          id="photoUpload"
          onChange={handleUpload}
          className="hidden"
        />

        <label
          htmlFor="photoUpload"
          className="inline-block px-6 py-2.5 bg-slate-200 text-slate-800 rounded-xl cursor-pointer hover:bg-slate-300 transition font-medium"
        >
          {t("resizePhoto.choosePhoto")}
        </label>

        {loading && (
          <p className="text-sm text-slate-600">
            {t("resizePhoto.processing")}
          </p>
        )}
      </div>

      {resizedImage && (
        <div className="border border-slate-200 rounded-2xl p-6 space-y-6 bg-white">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="font-semibold text-slate-700">
              {t("resizePhoto.successTitle")}
            </h3>

            <img
              src={resizedImage}
              alt={t("resizePhoto.alt")}
              className="rounded-xl w-48 h-48 object-cover border border-slate-200"
            />

            <p className="text-xs text-slate-400">600 × 600 px — JPEG</p>
          </div>

          <a
            href={resizedImage}
            download="passport-photo.jpg"
            className="inline-block px-6 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-semibold"
          >
            {t("resizePhoto.download")}
          </a>
        </div>
      )}
    </div>
  );
}