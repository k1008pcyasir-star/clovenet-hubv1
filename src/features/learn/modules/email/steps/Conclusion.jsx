import { useState, useEffect } from "react";

const Conclusion = ({ lang }) => {
  const isSw = lang === "sw";
  const [visible, setVisible]       = useState([]);
  const [showFireworks, setShowFireworks] = useState(false);
  const [confetti, setConfetti]     = useState([]);
  const [finished, setFinished]     = useState(false);
  const [checkDone, setCheckDone]   = useState(false);

  const checklist = [
    { icon: "📧", sw: "Anwani ya email iwe rasmi — jina.lako@gmail.com",              en: "Use a professional email address — firstname.lastname@gmail.com" },
    { icon: "📄", sw: "Tuma CV kama PDF — muundo hauharibu",                          en: "Send CV as PDF — your layout stays perfect on any device" },
    { icon: "🔍", sw: "Angalia Spam kila siku ukisubiri jibu la kazi",                 en: "Check Spam folder daily when waiting for job replies" },
    { icon: "✒️", sw: 'Anza barua na salamu rasmi: "Dear Sir/Madam,"',                en: 'Open every email with a formal greeting: "Dear Sir/Madam,"' },
    { icon: "🚫", sw: 'Epuka lugha ya mtaani — "plz", "thx", emoji',                  en: "Avoid slang and emojis — this is not WhatsApp" },
    { icon: "📝", sw: "Soma barua mara mbili kabla kutuma",                            en: "Proofread twice before hitting Send" },
    { icon: "🔄", sw: "Tuma follow-up baada ya wiki 1–2 bila jibu",                   en: "Send a polite follow-up after 1–2 weeks of silence" },
    { icon: "🙏", sw: "Tuma barua ya shukrani ndani ya masaa 24 baada ya mahojiano",  en: "Send a thank-you email within 24 hours after an interview" },
  ];

  const stats = [
    { icon: "📬", value: "4",  label: { sw: "Folders za Gmail",  en: "Gmail Folders"   } },
    { icon: "📝", value: "4",  label: { sw: "Aina za Barua",     en: "Email Types"     } },
    { icon: "🎮", value: "20", label: { sw: "Maswali ya Quiz",   en: "Quiz Questions"  } },
    { icon: "🚀", value: "1",  label: { sw: "Simulator Kamili",  en: "Full Simulator"  } },
  ];

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < checklist.length) { setVisible((v) => [...v, i]); i++; }
      else { clearInterval(id); setCheckDone(true); }
    }, 180);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const pieces = Array.from({ length: 38 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.4,
      dur: 2.2 + Math.random() * 1.4,
      color: ["#0d9488", "#34a853", "#fbbc04", "#f97316", "#8b5cf6", "#06b6d4"][Math.floor(Math.random() * 6)],
      size: 7 + Math.random() * 7,
      shape: Math.random() > 0.5 ? "circle" : "rect",
    }));
    setConfetti(pieces);
    setShowFireworks(true);
    const t = setTimeout(() => setShowFireworks(false), 3600);
    return () => clearTimeout(t);
  }, []);

  /* ── Finished screen ── */
  if (finished) {
    return (
      <div className="space-y-6 text-center py-8 sm:py-12 px-4">
        <div className="text-6xl sm:text-7xl">🎓</div>
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isSw ? "Asante kwa Kujifunza!" : "Thank You for Learning!"}
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-500 leading-relaxed">
            {isSw
              ? "Umekwisha kamilisha kozi hii. Sasa toka hapa na utumie ujuzi wako — andika barua pepe yako ya kwanza ya kazi leo hii!"
              : "You completed this course. Now go use your knowledge — write your first professional job email today!"}
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-slate-900 text-slate-200 rounded-2xl p-5 sm:p-6">
          <p className="text-sm sm:text-base font-bold italic leading-relaxed">
            {isSw
              ? '"Ujuzi bila vitendo ni kama mbegu bila ardhi. Tenda sasa."'
              : '"Knowledge without action is like a seed without soil. Act now."'}
          </p>
          <p className="mt-3 text-xs text-slate-500 font-semibold">
            — {isSw ? "Mwalimu wako" : "Your Instructor"}
          </p>
        </div>
        <div className="text-4xl tracking-widest">🌟🌟🌟🌟🌟</div>
      </div>
    );
  }

  /* ── Main conclusion ── */
  return (
    <div className="relative overflow-hidden space-y-6 sm:space-y-8 pb-8">

      {/* Confetti */}
      {showFireworks && (
        <div className="absolute top-0 left-0 w-full h-[220px] pointer-events-none z-10 overflow-hidden">
          <style>{`@keyframes fall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(220px) rotate(720deg);opacity:0}}`}</style>
          {confetti.map((p) => (
            <div key={p.id} style={{
              position:"absolute", left:`${p.left}%`, top:0,
              width:p.size, height:p.shape==="rect"?p.size*0.5:p.size,
              borderRadius:p.shape==="circle"?"50%":2, background:p.color,
              animation:`fall ${p.dur}s ${p.delay}s ease-in both`,
            }} />
          ))}
        </div>
      )}

      {/* Hero banner — teal */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 px-5 sm:px-8 py-8 sm:py-10 text-center">
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)",backgroundSize:"18px 18px"}} />
        <div className="relative z-10">
          <div className="text-5xl sm:text-6xl mb-3">🎉</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {isSw ? "Hongera Sana!" : "Congratulations!"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/85 font-semibold max-w-lg mx-auto leading-relaxed">
            {isSw ? "Umekamilisha kozi ya Barua Pepe kwa Mafanikio" : "You successfully completed the Email Mastery Course"}
          </p>
          <div className="inline-block mt-5 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5">
            <p className="text-xs text-white/70 font-bold uppercase tracking-wider">🏅 {isSw ? "Umestahili" : "Certified"}</p>
            <p className="text-sm font-extrabold text-white mt-0.5">Email Professional</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-3">
          {isSw ? "Ulichojifunza" : "What you covered"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
              <div className="text-xl sm:text-2xl mb-1.5">{s.icon}</div>
              <div className="text-xl sm:text-2xl font-extrabold text-teal-600">{s.value}</div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-400 mt-1 leading-snug">
                {s.label[lang] || s.label.sw}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm">
        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 mb-4">
          <span>✅</span>
          {isSw ? "Checklist ya Mshindi" : "Winner's Checklist"}
        </h4>
        <div className="space-y-2.5">
          {checklist.map((item, i) => {
            const isVisible = visible.includes(i);
            return (
              <div key={i} className={`flex items-start gap-3 rounded-xl px-4 py-3 border transition-all duration-300 ${
                isVisible ? "bg-green-50 border-green-100" : "bg-slate-50 border-slate-100 opacity-40"
              }`}>
                <span className="text-base shrink-0">{item.icon}</span>
                <span className={`text-xs sm:text-sm font-semibold leading-relaxed flex-1 ${isVisible ? "text-green-800" : "text-slate-400"}`}>
                  {isSw ? item.sw : item.en}
                </span>
                {isVisible && <span className="text-green-500 font-bold shrink-0">✓</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote */}
      <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 flex items-start gap-3 sm:gap-4">
        <span className="text-2xl shrink-0">💡</span>
        <div>
          <p className="text-sm sm:text-base text-slate-200 font-semibold italic leading-relaxed">
            {isSw
              ? '"Barua pepe moja iliyoandikwa vizuri inaweza kubadilisha maisha yako. Tumia ujuzi wako sasa!"'
              : '"One well-written email can change your life. Use your new skills now!"'}
          </p>
          <p className="mt-2 text-xs text-slate-500 font-bold">
            — {isSw ? "Timu ya Mafunzo" : "Your Training Team"}
          </p>
        </div>
      </div>

      {/* Next steps — teal */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 sm:p-6">
        <h4 className="text-sm font-bold text-teal-800 mb-4">
          🚀 {isSw ? "Hatua Zako Zifuatazo" : "Your Next Steps"}
        </h4>
        <div className="space-y-3">
          {[
            { num:"1", icon:"📱", sw:"Fungua Gmail yako ya kweli sasa hivi",         en:"Open your real Gmail app right now" },
            { num:"2", icon:"✉️", sw:"Andika barua pepe ya maombi ya kazi leo",       en:"Write your first job application email today" },
            { num:"3", icon:"🔍", sw:"Angalia Spam — barua muhimu inaweza kukungoja", en:"Check your Spam — an important email may be waiting" },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {s.num}
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-base shrink-0">{s.icon}</span>
                <span className="text-sm text-slate-700 font-semibold leading-relaxed">
                  {isSw ? s.sw : s.en}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Finish button — teal */}
      {checkDone && (
        <button
          onClick={() => setFinished(true)}
          className="w-full rounded-2xl bg-teal-600 hover:bg-teal-700 text-white px-4 py-4 sm:py-5 text-sm sm:text-base font-bold shadow-lg shadow-teal-100 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>🎓</span>
          <span>{isSw ? "Maliza Kozi — Niko Tayari!" : "Finish Course — I'm Ready!"}</span>
        </button>
      )}
    </div>
  );
};

export default Conclusion;