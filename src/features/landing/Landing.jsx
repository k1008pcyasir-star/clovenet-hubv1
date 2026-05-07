import { useNavigate } from "react-router-dom";
import { useT } from "../../i18n/useT";
import { ArrowRight, ChevronRight, Target, MessageSquare, Wrench, BookOpen, ShieldCheck } from "lucide-react";

const STATS = [
  { value: "200+", label: { sw: "Maswali ya Usaili",    en: "Interview Questions" } },
  { value: "12",   label: { sw: "Masomo ya Barua Pepe", en: "Email Lessons" } },
  { value: "4",    label: { sw: "Zana za PDF",           en: "PDF Tools" } },
  { value: "2",    label: { sw: "Portal za Ajira",       en: "Job Portals" } },
];

const STEPS = [
  {
    num: "01",
    title: { sw: "Jitathmini",                  en: "Self-Assessment" },
    desc:  { sw: "Jibu maswali manne — pata score ya utayari wako wa sasa.",
             en: "Answer four questions and get your current readiness score." },
  },
  {
    num: "02",
    title: { sw: "Jifunze na Jifanyie Mazoezi", en: "Learn & Practice" },
    desc:  { sw: "Tumia zana za PDF, fanya mazoezi ya usaili, jifunze barua pepe.",
             en: "Use PDF tools, practice interview questions, learn email skills." },
  },
  {
    num: "03",
    title: { sw: "Omba Kazi",                   en: "Apply for Jobs" },
    desc:  { sw: "Tunaelekeza moja kwa moja kwenye Zanajira au Ajira Portal.",
             en: "We guide you directly to Zanajira or Ajira Portal." },
  },
];

export default function LandingPage() {
  const navigate       = useNavigate();
  const { t, language } = useT();
  const sw             = language === "sw";

  return (
    <div className="w-full space-y-14 sm:space-y-20">

      {/* ══════════════════════════════════════
          HERO — split layout (prototype muundo)
      ══════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-2 sm:pt-6">

        {/* Left — text */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-5">
            <ShieldCheck size={13} />
            🇹🇿 {t("landing.badge")}
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
            {sw ? (
              <>Jipange.<br />Jifunze.<br /><span className="text-teal-600">Pata Kazi.</span></>
            ) : (
              <>Prepare.<br />Learn.<br /><span className="text-teal-600">Get the Job.</span></>
            )}
          </h1>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
            {t("landing.heroSubtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate("/guided-flow")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 text-white rounded-xl text-sm sm:text-base font-bold hover:bg-teal-700 hover:-translate-y-0.5 active:scale-[0.98] transition shadow-lg shadow-teal-100 cursor-pointer"
            >
              {t("landing.startCareerPreparation")}
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate("/interview")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl text-sm sm:text-base font-semibold hover:border-teal-400 hover:text-teal-700 active:scale-[0.98] transition cursor-pointer"
            >
              🗣️ {sw ? "Mazoezi ya Usaili" : "Interview Practice"}
            </button>
          </div>
        </div>

        {/* Right — floating preview cards (prototype muundo) */}
        <div className="relative hidden lg:block h-[420px]">

          {/* Background blob */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-50 to-slate-50" />

          {/* Card 1 — Readiness Score */}
          <div
            className="absolute top-6 left-0 w-48 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
            style={{ animation: "floatY 4s ease-in-out infinite" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Readiness Score
            </p>
            <p className="text-4xl font-extrabold text-teal-600 leading-none mb-2">
              82<span className="text-lg text-slate-300">%</span>
            </p>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-[82%] bg-gradient-to-r from-teal-500 to-teal-400 rounded-full" />
            </div>
            <p className="text-[10px] text-green-600 font-semibold mt-1.5">✓ {sw ? "Karibu uko tayari!" : "Almost ready!"}</p>
          </div>

          {/* Card 2 — Interview question */}
          <div
            className="absolute top-32 right-0 w-56 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
            style={{ animation: "floatY2 5s ease-in-out infinite 0.8s" }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-400 flex items-center justify-center text-base">
                🗣️
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900">{sw ? "Usaili wa IT" : "IT Interview"}</p>
                <p className="text-[10px] text-slate-400">{sw ? "Swali 4 kati ya 20" : "Question 4 of 20"}</p>
              </div>
            </div>
            <div className="bg-slate-50 border-l-2 border-teal-500 rounded-r-lg px-2.5 py-2 text-[11px] text-slate-700 mb-2">
              {sw ? '"Elezea tofauti kati ya TCP na UDP."' : '"Explain the difference between TCP and UDP."'}
            </div>
            <span className="inline-block text-[9px] font-bold uppercase tracking-wider bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
              Networking
            </span>
          </div>

          {/* Card 3 — Tools */}
          <div
            className="absolute bottom-8 left-6 w-44 bg-white rounded-2xl p-4 shadow-xl border border-slate-100"
            style={{ animation: "floatY 3.5s ease-in-out infinite 1.5s" }}
          >
            <p className="text-[11px] font-extrabold text-slate-900 mb-2.5">🛠️ {sw ? "Zana za PDF" : "PDF Tools"}</p>
            {[
              { label: "PDF Converter", done: true },
              { label: "Merge PDF",     done: true },
              { label: "Resize Photo",  done: false },
              { label: "Compress PDF",  done: false },
            ].map((tool) => (
              <div key={tool.label} className="flex items-center gap-2 py-1 border-b border-slate-50 last:border-0">
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${tool.done ? "bg-teal-500" : "bg-slate-200"}`} />
                <span className="text-[10px] font-semibold text-slate-600">{tool.label}</span>
                {tool.done && <span className="ml-auto text-[9px] text-teal-500 font-bold">✓</span>}
              </div>
            ))}
          </div>

          <style>{`
            @keyframes floatY  { 0%,100%{transform:translateY(0)}        50%{transform:translateY(-10px)} }
            @keyframes floatY2 { 0%,100%{transform:translateY(0) rotate(-2deg)} 50%{transform:translateY(-14px) rotate(-2deg)} }
          `}</style>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section className="bg-teal-800 rounded-2xl px-6 py-5 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-white/10">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center px-4 py-2 sm:py-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-[11px] sm:text-xs text-teal-200 font-medium">
                {stat.label[language] || stat.label.sw}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES GRID
      ══════════════════════════════════════ */}
      <section>
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
            {sw ? "Unachopata" : "What You Get"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {sw ? "Kila Kitu Katika Mfumo Mmoja" : "Everything in One Platform"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">

          {/* Featured card — Guided Flow */}
          <div
            onClick={() => navigate("/guided-flow")}
            className="group sm:col-span-2 xl:col-span-2 relative overflow-hidden bg-teal-600 rounded-2xl p-7 sm:p-8 cursor-pointer hover:bg-teal-700 active:scale-[0.99] transition-all duration-200 shadow-lg shadow-teal-100"
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-teal-500/50" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <Target size={22} className="text-white" />
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl text-white mb-2">
                {t("landing.careerPreparationTitle")}
              </h3>
              <p className="text-teal-100 text-sm leading-relaxed mb-5">
                {t("landing.careerPreparationDesc")}
              </p>
              <div className="inline-flex items-center gap-1.5 text-white text-sm font-bold group-hover:gap-3 transition-all">
                {sw ? "Anza Hapa" : "Start Here"} <ChevronRight size={16} />
              </div>
            </div>
          </div>

          {/* Interview */}
          <div
            onClick={() => navigate("/interview")}
            className="group p-6 bg-white border border-slate-200 rounded-2xl cursor-pointer hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 active:scale-[0.99] transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
              <MessageSquare size={22} className="text-teal-600" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
              {t("landing.interviewPracticeTitle")}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t("landing.interviewPracticeDesc")}
            </p>
          </div>

          {/* Tools */}
          <div
            onClick={() => navigate("/tools")}
            className="group p-6 bg-white border border-slate-200 rounded-2xl cursor-pointer hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 active:scale-[0.99] transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
              <Wrench size={22} className="text-teal-600" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
              {t("landing.digitalToolsTitle")}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t("landing.digitalToolsDesc")}
            </p>
          </div>

          {/* Learn */}
          <div
            onClick={() => navigate("/learn")}
            className="group sm:col-span-2 xl:col-span-1 p-6 bg-white border border-slate-200 rounded-2xl cursor-pointer hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 active:scale-[0.99] transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
              <BookOpen size={22} className="text-teal-600" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
              {t("landing.learnSkillsTitle")}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t("landing.learnSkillsDesc")}
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS — 3 steps
      ══════════════════════════════════════ */}
      <section>
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-100 mb-3">
            {sw ? "Jinsi Inavyofanya Kazi" : "How It Works"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {sw ? "Hatua Tatu za Mafanikio" : "Three Steps to Success"}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            {sw ? "Hakuna usajili. Hakuna malipo. Anza sasa hivi." : "No registration. No payment. Start right now."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {STEPS.map((step, i) => (
            <div key={i} className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block absolute top-8 -right-2.5 w-5 h-0.5 bg-teal-200 z-10" />
              )}
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-extrabold text-sm flex items-center justify-center mb-4 shadow-sm shadow-teal-200">
                {step.num}
              </div>
              <h3 className="font-extrabold text-slate-900 mb-2 text-sm sm:text-base">
                {step.title[language] || step.title.sw}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc[language] || step.desc.sw}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CLOVENET
      ══════════════════════════════════════ */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-9 sm:px-10 sm:py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t("landing.whyTitle")}
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {t("landing.whyDesc")}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 rounded-2xl px-6 py-12 sm:px-10 sm:py-16 text-center">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold border border-white/25 mb-4">
            🚀 {sw ? "Bila Malipo — Milele" : "Free — Forever"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            {sw ? "Uko Tayari Kuanza Leo?" : "Ready to Start Today?"}
          </h2>
          <p className="text-teal-100 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            {sw
              ? "Jiunge na vijana wanaojitayarisha kupata kazi kupitia CloveNet Hub — bure kabisa."
              : "Join the youth preparing for employment through CloveNet Hub — completely free."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/guided-flow")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-teal-700 rounded-xl text-sm font-bold hover:bg-teal-50 active:scale-[0.98] transition shadow-lg cursor-pointer"
            >
              🎯 {t("landing.startCareerPreparation")}
            </button>
            <button
              onClick={() => navigate("/learn")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white border border-white/30 rounded-xl text-sm font-semibold hover:bg-white/20 active:scale-[0.98] transition cursor-pointer"
            >
              📧 {sw ? "Jifunze Barua Pepe" : "Learn Email Skills"}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}