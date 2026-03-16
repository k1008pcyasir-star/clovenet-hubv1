import { useState, useEffect } from "react";

const Conclusion = ({ lang }) => {
  const isSw = lang === "sw";
  const [visible, setVisible] = useState([]);
  const [showFireworks, setShowFireworks] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [finished, setFinished] = useState(false);
  const [checkDone, setCheckDone] = useState(false);

  const checklist = [
    {
      icon: "📧",
      sw: "Anwani ya email iwe rasmi — jina.lako@gmail.com",
      en: "Use a professional email address — firstname.lastname@gmail.com",
    },
    {
      icon: "📄",
      sw: "Tuma CV kama PDF — muundo hauharibu",
      en: "Send CV as PDF — your layout stays perfect on any device",
    },
    {
      icon: "🚫",
      sw: "Angalia Spam kila siku ukisubiri jibu la kazi",
      en: "Check Spam folder daily when waiting for job replies",
    },
    {
      icon: "✒️",
      sw: 'Anza barua na salamu rasmi: "Dear Sir/Madam,"',
      en: 'Open every email with a formal greeting: "Dear Sir/Madam,"',
    },
    {
      icon: "🚫",
      sw: 'Epuka lugha ya mtaani — "plz", "thx", emoji',
      en: "Avoid slang and emojis — this is not WhatsApp",
    },
    {
      icon: "📝",
      sw: "Soma barua mara mbili kabla kutuma",
      en: "Proofread twice before hitting Send",
    },
    {
      icon: "🔄",
      sw: "Tuma follow-up baada ya wiki 1–2 bila jibu",
      en: "Send a polite follow-up after 1–2 weeks of silence",
    },
    {
      icon: "🙏",
      sw: "Tuma barua ya shukrani ndani ya masaa 24 baada ya mahojiano",
      en: "Send a thank-you email within 24 hours after an interview",
    },
  ];

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < checklist.length) {
        setVisible((v) => [...v, i]);
        i++;
      } else {
        clearInterval(id);
        setCheckDone(true);
      }
    }, 180);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const pieces = Array.from({ length: 38 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.4,
      dur: 2.2 + Math.random() * 1.4,
      color: ["#1a73e8", "#34a853", "#fbbc04", "#ea4335", "#a142f4", "#ff6d00"][
        Math.floor(Math.random() * 6)
      ],
      size: 7 + Math.random() * 7,
      shape: Math.random() > 0.5 ? "circle" : "rect",
    }));

    setConfetti(pieces);
    setShowFireworks(true);

    const t = setTimeout(() => setShowFireworks(false), 3600);
    return () => clearTimeout(t);
  }, []);

  const handleFinish = () => setFinished(true);

  const stats = [
    { icon: "📬", value: "4", label: isSw ? "Folders za Gmail" : "Gmail Folders" },
    { icon: "📝", value: "4", label: isSw ? "Aina za Barua" : "Email Types" },
    { icon: "🎮", value: "20", label: isSw ? "Maswali ya Quiz" : "Quiz Questions" },
    { icon: "🚀", value: "1", label: isSw ? "Simulator Kamili" : "Full Simulator" },
  ];

  if (finished) {
    return (
      <div className="space-y-6 sm:space-y-8 text-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="text-6xl sm:text-7xl">🎓</div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
            {isSw ? "Asante kwa Kujifunza!" : "Thank You for Learning!"}
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-500 font-bold leading-relaxed">
            {isSw
              ? "Umekwisha kamilisha kozi hii. Sasa toka hapa na utumie ujuzi wako — andika barua pepe yako ya kwanza ya kazi leo hii!"
              : "You’ve completed this course. Now go out and use your knowledge — write your first professional job email today!"}
          </p>
        </div>

        <div className="max-w-2xl mx-auto rounded-[24px] bg-slate-950 text-slate-200 p-5 sm:p-7 shadow-xl">
          <p className="text-sm sm:text-base font-bold leading-relaxed">
            {isSw
              ? '"Ujuzi bila vitendo ni kama mbegu bila ardhi. Tenda sasa."'
              : '"Knowledge without action is like a seed without soil. Act now."'}
          </p>
          <div className="mt-3 text-xs sm:text-sm text-slate-500 font-bold">
            — {isSw ? "Mwalimu wako" : "Your Instructor"}
          </div>
        </div>

        <div className="text-3xl sm:text-5xl tracking-[0.3em]">🌟🌟🌟🌟🌟</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden space-y-6 sm:space-y-8 pb-10">
      {/* Confetti */}
      {showFireworks && (
        <div className="absolute top-0 left-0 w-full h-[220px] pointer-events-none z-10 overflow-hidden">
          <style>{`
            @keyframes fall {
              0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
              100% { transform: translateY(220px) rotate(720deg); opacity: 0; }
            }
          `}</style>

          {confetti.map((p) => (
            <div
              key={p.id}
              style={{
                position: "absolute",
                left: `${p.left}%`,
                top: 0,
                width: p.size,
                height: p.shape === "rect" ? p.size * 0.5 : p.size,
                borderRadius: p.shape === "circle" ? "50%" : 2,
                background: p.color,
                animation: `fall ${p.dur}s ${p.delay}s ease-in both`,
              }}
            />
          ))}
        </div>
      )}

      {/* Hero */}
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-blue-600 via-blue-700 to-sky-900 px-5 sm:px-8 py-8 sm:py-10 text-center shadow-[0_18px_50px_rgba(26,115,232,0.25)]">
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative z-10">
          <div className="text-5xl sm:text-6xl mb-3">🎉</div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            {isSw ? "Hongera Sana!" : "Congratulations!"}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-white/85 font-bold leading-relaxed max-w-xl mx-auto">
            {isSw
              ? "Umekamilisha kozi ya Barua Pepe kwa Mafanikio"
              : "You’ve successfully completed the Email Mastery Course"}
          </p>

          <div className="inline-block mt-5 sm:mt-6 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-5 sm:px-6 py-3">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/75 font-black">
              {isSw ? "🏅 Umestahili" : "🏅 Certified"}
            </div>
            <div className="mt-1 text-sm sm:text-base font-black text-white">
              {isSw ? "Email Professional" : "Email Professional"}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div>
        <p className="text-[11px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.25em] text-center mb-3 sm:mb-4">
          {isSw ? "Ulichojifunza" : "What you covered"}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xl sm:text-2xl mb-2">{s.icon}</div>
              <div className="text-xl sm:text-2xl font-black text-blue-600">{s.value}</div>
              <div className="mt-1 text-[10px] sm:text-xs font-bold text-slate-400 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="rounded-[24px] sm:rounded-[28px] border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
        <h4 className="mb-4 flex items-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-600">
          <span>✅</span>
          <span>{isSw ? "Checklist ya Mshindi" : "Winner's Checklist"}</span>
        </h4>

        <div className="space-y-3">
          {checklist.map((item, i) => {
            const isVisible = visible.includes(i);

            return (
              <div
                key={i}
                className={`flex items-start gap-3 sm:gap-4 rounded-2xl px-4 py-3 border transition-all duration-300 ${
                  isVisible
                    ? "bg-green-50 border-green-200 opacity-100 translate-x-0"
                    : "bg-slate-50 border-slate-100 opacity-40 -translate-x-1"
                }`}
              >
                <span className="text-lg shrink-0">{item.icon}</span>

                <span
                  className={`text-xs sm:text-sm font-bold leading-relaxed flex-1 ${
                    isVisible ? "text-green-800" : "text-slate-400"
                  }`}
                >
                  {isSw ? item.sw : item.en}
                </span>

                {isVisible && (
                  <span className="text-green-600 text-sm sm:text-base font-black shrink-0">
                    ✓
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Motivational quote */}
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[26px] bg-slate-950 p-5 sm:p-6">
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-500/10" />

        <div className="relative flex items-start gap-3 sm:gap-4">
          <span className="text-2xl sm:text-3xl shrink-0">💡</span>

          <div>
            <p className="text-sm sm:text-base text-slate-200 font-bold italic leading-relaxed">
              {isSw
                ? '"Barua pepe moja iliyoandikwa vizuri inaweza kubadilisha maisha yako. Tumia ujuzi wako sasa — andika barua yako ya kwanza ya kazi leo hii!"'
                : '"One well-written email can change your life. Use your new skills now — write your first professional email today!"'}
            </p>

            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-black">
              — {isSw ? "Timu ya Mafunzo" : "Your Training Team"}
            </p>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div className="rounded-[24px] sm:rounded-[26px] bg-blue-50 border border-blue-100 p-5 sm:p-6">
        <h4 className="text-sm sm:text-base font-black text-blue-700 mb-4">
          🚀 {isSw ? "Hatua Zako Zifuatazo" : "Your Next Steps"}
        </h4>

        <div className="space-y-4">
          {[
            {
              num: "1",
              icon: "📱",
              text: isSw
                ? "Fungua Gmail yako ya kweli sasa hivi"
                : "Open your real Gmail app right now",
            },
            {
              num: "2",
              icon: "✉️",
              text: isSw
                ? "Andika barua pepe ya maombi ya kazi leo"
                : "Write your first job application email today",
            },
            {
              num: "3",
              icon: "🔍",
              text: isSw
                ? "Angalia Spam — barua muhimu inaweza kukungoja huko"
                : "Check your Spam — an important email may be waiting there",
            },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-3 sm:gap-4">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                {s.num}
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <span className="text-lg shrink-0">{s.icon}</span>
                <span className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">
                  {s.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Finish button */}
      {checkDone && (
        <button
          onClick={handleFinish}
          className="w-full rounded-[22px] bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-4 py-4 sm:py-5 text-sm sm:text-base font-black shadow-[0_10px_28px_rgba(16,185,129,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span>🎓</span>
          <span>{isSw ? "Maliza Kozi — Niko Tayari!" : "Finish Course — I'm Ready!"}</span>
        </button>
      )}
    </div>
  );
};

export default Conclusion;