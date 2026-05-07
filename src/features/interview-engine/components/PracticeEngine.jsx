import { useState } from "react";
import { useT } from "../../../i18n/useT";
import { useLanguage } from "../../../context/LanguageContext";

export default function PracticeEngine({ questions = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const { t } = useT();
  const { language } = useLanguage();

  const filteredQuestions = questions;

  if (!filteredQuestions || filteredQuestions.length === 0) return null;

  const currentQuestion = filteredQuestions[currentIndex];
  const total = filteredQuestions.length;

  // Question text
  const questionText =
    language === "sw"
      ? currentQuestion.question_sw ||
        currentQuestion.swali_sw ||
        currentQuestion.question ||
        ""
      : currentQuestion.question_en ||
        currentQuestion.swali_en ||
        currentQuestion.question_sw ||
        currentQuestion.question ||
        "";

  // Translation subtext
  const subText =
    language === "sw"
      ? currentQuestion.question_en ||
        currentQuestion.swali_en ||
        null
      : null;

  const guideText =
    currentQuestion.guide ||
    currentQuestion.muongozo ||
    null;

  const answerText =
    currentQuestion.sample_answer ||
    currentQuestion.jibu_en ||
    currentQuestion.answer ||
    null;

  const progress = Math.round(((currentIndex + 1) / total) * 100);

  const goNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowGuide(false);
      setShowAnswer(false);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowGuide(false);
      setShowAnswer(false);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">

      {/* Progress */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-slate-500">
          <span className="font-medium">
            {t("practiceEngine.question")} {currentIndex + 1}{" "}
            {t("practiceEngine.of")} {total}
          </span>

          <span className="font-semibold text-emerald-700">
            {progress}% {t("practiceEngine.complete")}
          </span>
        </div>

        <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-7 lg:p-10 shadow-sm space-y-6">

        {/* Category Badge */}
        {currentQuestion.cat && (
          <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-full">
            {currentQuestion.cat}
          </span>
        )}

        {/* Question */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 leading-relaxed">
            {questionText}
          </h2>

          {subText && (
            <div className="border-l-4 border-slate-200 pl-4">
              <p className="text-slate-500 italic text-sm sm:text-base leading-relaxed">
                {subText}
              </p>
            </div>
          )}
        </div>

        {/* Guide Button */}
        {guideText && !showGuide && (
          <div>
            <button
              onClick={() => setShowGuide(true)}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition cursor-pointer active:scale-[0.98] font-medium w-full sm:w-auto"
            >
              {t("practiceEngine.showGuide")}
            </button>
          </div>
        )}

        {/* Guide Section */}
        {guideText && showGuide && (
          <div className="bg-emerald-50 border border-emerald-200 p-5 sm:p-6 rounded-2xl space-y-4">

            <h4 className="font-semibold text-emerald-700 text-base sm:text-lg">
              {t("practiceEngine.guideTitle")}
            </h4>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {guideText}
            </p>

            {/* Show Answer Button */}
            {answerText && !showAnswer && (
              <button
                onClick={() => setShowAnswer(true)}
                className="px-5 py-2.5 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition cursor-pointer active:scale-[0.98] font-medium w-full sm:w-auto"
              >
                {t("practiceEngine.showAnswer")}
              </button>
            )}

            {/* Answer Section */}
            {answerText && showAnswer && (
              <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl space-y-3">

                <h4 className="font-semibold text-slate-800 text-base sm:text-lg">
                  {t("practiceEngine.answerTitle")}
                </h4>

                <p className="text-slate-700 italic leading-relaxed text-sm sm:text-base">
                  {answerText}
                </p>

              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="w-full px-5 py-3 border border-slate-300 bg-white text-slate-700 rounded-xl
          hover:bg-slate-50 hover:border-slate-400 transition disabled:opacity-40
          disabled:cursor-not-allowed cursor-pointer active:scale-[0.98] font-medium"
        >
          {t("practiceEngine.previous")}
        </button>

        <button
          onClick={goNext}
          disabled={currentIndex === total - 1}
          className="w-full px-5 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700
          transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer
          active:scale-[0.98] font-semibold"
        >
          {t("practiceEngine.next")}
        </button>

      </div>
    </div>
  );
}