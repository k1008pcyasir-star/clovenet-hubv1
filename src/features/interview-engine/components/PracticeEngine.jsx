import { useState, useEffect, useMemo } from "react";

export default function PracticeEngine({ questions = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const categories = useMemo(() => {
    const unique = new Set();
    questions.forEach((q) => {
      if (q.cat) unique.add(q.cat);
    });
    return ["ALL", ...Array.from(unique)];
  }, [questions]);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "ALL") return questions;
    return questions.filter((q) => q.cat === selectedCategory);
  }, [questions, selectedCategory]);

  useEffect(() => {
    setCurrentIndex(0);
    setShowGuide(false);
    setShowAnswer(false);
  }, [selectedCategory, questions]);

  if (!filteredQuestions || filteredQuestions.length === 0) return null;

  const currentQuestion = filteredQuestions[currentIndex];
  const total = filteredQuestions.length;

  const questionText =
    currentQuestion.question_sw ||
    currentQuestion.swali_sw ||
    currentQuestion.question ||
    "";

  const subText =
    currentQuestion.question_en ||
    currentQuestion.swali_en ||
    null;

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowGuide(false);
      setShowAnswer(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* Filter */}
      {categories.length > 1 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-600">
            Filter by section
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition cursor-pointer active:scale-[0.98] ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                    : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Progress */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-slate-500">
          <span className="font-medium">
            Question {currentIndex + 1} of {total}
          </span>
          <span className="font-semibold text-emerald-700">
            {progress}% Complete
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
        {currentQuestion.cat && (
          <span className="inline-block px-4 py-1.5 text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-full">
            {currentQuestion.cat}
          </span>
        )}

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

        {/* Guide */}
        {guideText && !showGuide && (
          <div>
            <button
              onClick={() => setShowGuide(true)}
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition cursor-pointer active:scale-[0.98] font-medium w-full sm:w-auto"
            >
              Show Professional Guide
            </button>
          </div>
        )}

        {guideText && showGuide && (
          <div className="bg-emerald-50 border border-emerald-200 p-5 sm:p-6 rounded-2xl space-y-4">
            <h4 className="font-semibold text-emerald-700 text-base sm:text-lg">
              Professional Guide
            </h4>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {guideText}
            </p>

            {answerText && !showAnswer && (
              <button
                onClick={() => setShowAnswer(true)}
                className="px-5 py-2.5 bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition cursor-pointer active:scale-[0.98] font-medium w-full sm:w-auto"
              >
                Show Sample Answer
              </button>
            )}

            {answerText && showAnswer && (
              <div className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl space-y-3">
                <h4 className="font-semibold text-slate-800 text-base sm:text-lg">
                  Sample Answer
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
          Previous
        </button>

        <button
          onClick={goNext}
          disabled={currentIndex === total - 1}
          className="w-full px-5 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700
          transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer
          active:scale-[0.98] font-semibold"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}