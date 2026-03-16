import React, { useState } from 'react';

/* ─── Visual Email Recipient Row ─── */
const RecipientBadge = ({ email, type, hidden }) => (
  <div
    className={`max-w-full break-all flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-black border ${
      hidden
        ? 'bg-slate-800 border-slate-600 text-slate-400 line-through opacity-60'
        : type === 'to'
        ? 'bg-blue-100 border-blue-300 text-blue-700'
        : type === 'cc'
        ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
        : 'bg-emerald-100 border-emerald-300 text-emerald-700'
    }`}
  >
    <span className="shrink-0">{hidden ? '🙈' : type === 'bcc' ? '🔒' : '👤'}</span>
    <span className="break-all">{email}</span>
  </div>
);

/* ─── Interactive Visibility Demo ─── */
const VisibilityDemo = ({ isSw }) => {
  const [viewer, setViewer] = useState('ali');

  const people = [
    { id: 'ali', label: 'Ali (To)', email: 'ali@gmail.com', field: 'to', color: 'bg-blue-500' },
    { id: 'sara', label: 'Sara (CC)', email: 'sara@gmail.com', field: 'cc', color: 'bg-indigo-500' },
    { id: 'john', label: 'John (BCC)', email: 'john@gmail.com', field: 'bcc', color: 'bg-emerald-600' },
  ];

  const selected = people.find(p => p.id === viewer);

  const visibility = {
    ali: { to: true, cc: true, bcc: false },
    sara: { to: true, cc: true, bcc: false },
    john: { to: true, cc: true, bcc: true },
  };

  const vis = visibility[viewer];

  return (
    <div className="bg-slate-900 rounded-[24px] sm:rounded-[28px] p-4 sm:p-6 space-y-5">
      <div>
        <p className="text-white font-black text-xs sm:text-sm mb-1">
          {isSw ? '🔭 Chagua mtu uone anachoweza kuona:' : '🔭 Choose a person to see what they can see:'}
        </p>
        <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed">
          {isSw ? 'Kila mtu anaona sehemu tofauti za barua hii' : 'Each person sees different parts of this email'}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {people.map(p => (
          <button
            key={p.id}
            onClick={() => setViewer(p.id)}
            className={`px-3 sm:px-4 py-2 rounded-2xl text-[11px] sm:text-xs font-black transition-all duration-200 flex items-center gap-2 ${
              viewer === p.id
                ? `${p.color} text-white shadow-lg scale-[1.02]`
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-current opacity-60 shrink-0" />
            <span className="whitespace-nowrap">{p.label}</span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
        <div className="bg-slate-100 px-3 sm:px-4 py-2 flex items-center gap-2 border-b border-slate-200">
          <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-widest leading-relaxed">
            {isSw
              ? `Jinsi ${selected.label.split(' ')[0]} inavyoona barua hii:`
              : `How ${selected.label.split(' ')[0]} sees this email:`}
          </span>
        </div>

        <div className="p-3 sm:p-4 space-y-3 text-[11px] sm:text-xs">
          <div className="flex flex-col xs:flex-row xs:items-start gap-1.5 xs:gap-3">
            <span className="text-slate-400 font-black w-8 pt-0.5 flex-shrink-0">To:</span>
            <RecipientBadge email="ali@gmail.com" type="to" hidden={false} />
          </div>

          <div className="flex flex-col xs:flex-row xs:items-start gap-1.5 xs:gap-3">
            <span className="text-slate-400 font-black w-8 pt-0.5 flex-shrink-0">CC:</span>
            <RecipientBadge email="sara@gmail.com" type="cc" hidden={false} />
          </div>

          <div className="flex flex-col xs:flex-row xs:items-start gap-1.5 xs:gap-3">
            <span className="text-slate-400 font-black w-8 pt-0.5 flex-shrink-0">BCC:</span>
            {vis.bcc ? (
              <RecipientBadge email="john@gmail.com" type="bcc" hidden={false} />
            ) : (
              <span className="text-slate-300 italic text-[11px] pt-0.5">
                {isSw ? '(Haionekani — imefichwa)' : '(Hidden — not visible)'}
              </span>
            )}
          </div>

          <div className="border-t border-slate-100 pt-3 mt-2">
            <p className="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">
              {isSw
                ? 'Ndugu Ali,\n\nNakutumia taarifa hii kuhusu mkutano wa kesho...'
                : "Dear Ali,\n\nI am sending you this notice about tomorrow's meeting..."}
            </p>
          </div>
        </div>

        <div
          className={`px-3 sm:px-4 py-3 text-[11px] sm:text-xs font-bold leading-relaxed ${
            viewer === 'john' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
          }`}
        >
          {viewer === 'ali' &&
            (isSw
              ? '⚠️ Ali anaona CC ya Sara lakini hajui kuwa John pia amepokea barua hii.'
              : '⚠️ Ali can see Sara on CC but does not know John also received this email.')}
          {viewer === 'sara' &&
            (isSw
              ? '⚠️ Sara anaona CC yake mwenyewe lakini hajui kuwa John amepokea nakala ya siri.'
              : '⚠️ Sara can see her own CC but does not know John received a secret copy.')}
          {viewer === 'john' &&
            (isSw
              ? '✅ John peke yake anajua alipokea nakala ya siri — wengine hawajui kabisa!'
              : '✅ Only John knows he received a secret copy — the others have no idea!')}
        </div>
      </div>
    </div>
  );
};

/* ─── Compose Preview Component ─── */
const ComposePreview = ({ isSw }) => {
  const [showBcc, setShowBcc] = useState(false);

  return (
    <div className="bg-white rounded-[20px] sm:rounded-[24px] border-2 border-slate-200 overflow-hidden shadow-lg">
      <div className="bg-slate-900 px-3 sm:px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>

        <span className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest opacity-60 text-center truncate">
          {isSw ? 'Tunga Barua Pepe' : 'Compose Email'}
        </span>

        <div className="flex gap-2 text-slate-400 text-[10px] font-black shrink-0">
          <button
            onClick={() => setShowBcc(!showBcc)}
            className={`px-2 py-0.5 rounded-md transition-colors ${
              showBcc ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
            }`}
          >
            BCC {showBcc ? '✓' : '+'}
          </button>
        </div>
      </div>

      <div className="divide-y divide-slate-100 text-sm">
        <div className="px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="text-slate-400 font-black text-xs w-10 shrink-0">To:</span>
          <div className="flex flex-wrap gap-1.5 min-w-0">
            <RecipientBadge email="ali@kampuni.co.tz" type="to" />
          </div>
        </div>

        <div className="px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="text-slate-400 font-black text-xs w-10 shrink-0">CC:</span>
          <div className="flex flex-wrap gap-1.5 min-w-0">
            <RecipientBadge email="sara@kampuni.co.tz" type="cc" />
            <RecipientBadge email="meneja@kampuni.co.tz" type="cc" />
          </div>
        </div>

        {showBcc && (
          <div className="px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 bg-emerald-50/50">
            <span className="text-emerald-600 font-black text-xs w-10 shrink-0">BCC:</span>
            <div className="flex flex-wrap gap-1.5 min-w-0">
              <RecipientBadge email="hr@kampuni.co.tz" type="bcc" />
            </div>
          </div>
        )}

        <div className="px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
          <span className="text-slate-400 font-black text-xs w-10 flex-shrink-0">
            {isSw ? 'Kichwa:' : 'Subj:'}
          </span>
          <span className="text-slate-700 font-bold text-[11px] sm:text-xs leading-relaxed">
            {isSw ? 'Mkutano wa Timu — Ijumaa 10:00am' : 'Team Meeting — Friday 10:00am'}
          </span>
        </div>
      </div>

      {!showBcc && (
        <div className="px-3 sm:px-4 pb-3 pt-1">
          <p className="text-[10px] text-slate-400 italic leading-relaxed">
            {isSw ? '👆 Bonyeza BCC+ hapo juu kuona jinsi inavyofanya kazi' : '👆 Tap BCC+ above to see how it works'}
          </p>
        </div>
      )}
    </div>
  );
};

/* ─── Scenario Card ─── */
const ScenarioCard = ({ icon, title, situation, use, field, color, isSw }) => (
  <div className={`rounded-[20px] sm:rounded-[22px] border-2 p-4 sm:p-5 space-y-3 ${color}`}>
    <div className="flex items-start gap-3">
      <span className="text-2xl shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="font-black text-slate-800 text-sm leading-snug">{title}</p>
        <span
          className={`inline-flex mt-1 text-[10px] font-black px-2 py-0.5 rounded-full ${
            field === 'CC' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
          }`}
        >
          {field}
        </span>
      </div>
    </div>

    <div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">
        {isSw ? 'Hali:' : 'Situation:'}
      </p>
      <p className="text-xs text-slate-600 leading-relaxed">{situation}</p>
    </div>

    <div className={`rounded-xl p-3 ${field === 'CC' ? 'bg-indigo-50' : 'bg-emerald-50'}`}>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">
        {isSw ? 'Matumizi:' : 'Usage:'}
      </p>
      <p className="text-xs font-bold text-slate-700 leading-relaxed whitespace-pre-line break-words">
        {use}
      </p>
    </div>
  </div>
);

/* ─── Quiz ─── */
const Quiz = ({ isSw }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const questions = isSw
    ? [
        {
          q: 'Unatuma barua kwa mteja. Unataka meneja wako aone pia lakini mteja asijue meneja ameona. Utatumia nini?',
          opts: ['To', 'CC', 'BCC'],
          correct: 'BCC',
          exp: 'BCC inafanya meneja apokee nakala bila mteja kujua — hiyo ndiyo hali hii inayohitajika.',
        },
        {
          q: 'Unatuma ripoti kwa timu yako yote. Kila mtu anaruhusiwa kuona wenzake wamepokea barua. Utatumia nini?',
          opts: ['To / CC', 'BCC', 'Reply All'],
          correct: 'To / CC',
          exp: 'CC ni sahihi hapa — wote wanaruhusiwa kuona wenzao kwenye orodha ya wapokeaji.',
        },
        {
          q: 'Unatuma tangazo kwa wateja 200 wa biashara yako. Hakuna mteja anayepaswa kuona anwani ya mwingine. Utatumia nini?',
          opts: ['To (wote pamoja)', 'CC', 'BCC'],
          correct: 'BCC',
          exp: 'BCC inafanya kila mteja apokee barua bila kuona anwani za wengine 199 — hii inalinda faragha na inazuia spam.',
        },
      ]
    : [
        {
          q: 'You are emailing a client. You want your manager to see it too but the client should not know the manager is copied. What do you use?',
          opts: ['To', 'CC', 'BCC'],
          correct: 'BCC',
          exp: 'BCC lets the manager receive a copy without the client knowing — exactly what this situation requires.',
        },
        {
          q: 'You are sending a report to your whole team. Everyone is allowed to see who else received it. What do you use?',
          opts: ['To / CC', 'BCC', 'Reply All'],
          correct: 'To / CC',
          exp: 'CC is correct here — everyone is allowed to see each other on the recipient list.',
        },
        {
          q: "You are sending a newsletter to 200 business customers. No customer should see anyone else's address. What do you use?",
          opts: ['To (all together)', 'CC', 'BCC'],
          correct: 'BCC',
          exp: 'BCC lets each customer receive the email without seeing the other 199 addresses — this protects privacy and prevents spam.',
        },
      ];

  const score = questions.filter((q, i) => answers[i] === q.correct).length;

  return (
    <div className="space-y-5">
      {questions.map((q, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 space-y-4">
          <p className="font-black text-slate-800 text-sm leading-relaxed">
            {i + 1}. {q.q}
          </p>

          <div className="flex flex-wrap gap-2">
            {q.opts.map(opt => {
              const chosen = answers[i] === opt;
              const correct = opt === q.correct;
              let style = 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200';

              if (submitted && correct) style = 'bg-green-100 text-green-700 border-green-400';
              else if (submitted && chosen && !correct) style = 'bg-red-100 text-red-700 border-red-300';
              else if (chosen) style = 'bg-[#1a73e8] text-white border-[#1a73e8]';

              return (
                <button
                  key={opt}
                  disabled={submitted}
                  onClick={() => setAnswers({ ...answers, [i]: opt })}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-black border-2 transition-all duration-200 ${style}`}
                >
                  {submitted && correct ? '✓ ' : ''}
                  {opt}
                </button>
              );
            })}
          </div>

          {submitted && (
            <div
              className={`rounded-xl p-3 text-[11px] sm:text-xs font-semibold leading-relaxed ${
                answers[i] === q.correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}
            >
              {answers[i] === q.correct
                ? isSw
                  ? '✅ Sahihi! '
                  : '✅ Correct! '
                : isSw
                ? `❌ Jibu sahihi: ${q.correct}. `
                : `❌ Correct answer: ${q.correct}. `}
              {q.exp}
            </div>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="w-full py-3 rounded-2xl font-black text-sm bg-[#1a73e8] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors shadow-lg"
        >
          {isSw ? '📝 Angalia Majibu' : '📝 Check Answers'}
        </button>
      ) : (
        <div
          className={`rounded-2xl p-5 text-center space-y-1 ${
            score === 3 ? 'bg-green-100' : score === 2 ? 'bg-blue-50' : 'bg-amber-50'
          }`}
        >
          <p className="text-3xl">{score === 3 ? '🏆' : score === 2 ? '👍' : '📚'}</p>
          <p
            className={`font-black text-lg ${
              score === 3 ? 'text-green-700' : score === 2 ? 'text-blue-700' : 'text-amber-700'
            }`}
          >
            {score}/3 {isSw ? 'Sahihi' : 'Correct'}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {score === 3
              ? isSw
                ? 'Hongera! Unaelewa CC na BCC vizuri kabisa.'
                : 'Excellent! You understand CC and BCC perfectly.'
              : score === 2
              ? isSw
                ? 'Nzuri! Soma tena mifano ili uimarishe zaidi.'
                : 'Good! Review the examples to strengthen further.'
              : isSw
              ? 'Endelea kusoma mifano na ujaribu tena.'
              : 'Keep reviewing the examples and try again.'}
          </p>
          <button
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            className="mt-2 px-4 py-2 rounded-xl text-xs font-black bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            {isSw ? '🔄 Jaribu Tena' : '🔄 Try Again'}
          </button>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const CcBcc = ({ lang }) => {
  const isSw = lang === 'sw';

  const scenarios = isSw
    ? [
        {
          icon: '👔',
          field: 'CC',
          title: 'Ripoti kwa Msimamizi',
          color: 'bg-indigo-50 border-indigo-200',
          situation: 'Unatuma ripoti ya kazi kwa mwenzako. Unataka msimamizi wako pia aione ili awe na habari.',
          use: 'To: mwenzako@kazi.com | CC: msimamizi@kazi.com\n\nMsimamizi ataona ripoti na pia ataona kuwa mwenzako ni mpokeaji mkuu.',
        },
        {
          icon: '🏫',
          field: 'CC',
          title: 'Barua ya Shule kwa Mzazi',
          color: 'bg-indigo-50 border-indigo-200',
          situation: 'Mwalimu anatuma barua kwa mwanafunzi kuhusu mitihani. Anataka mzazi pia aijue.',
          use: 'To: mwanafunzi@email.com | CC: mzazi@email.com\n\nMzazi ataona barua na atajua mwanawe amepata barua hiyo.',
        },
        {
          icon: '🔒',
          field: 'BCC',
          title: 'Ufuatiliaji wa Siri',
          color: 'bg-emerald-50 border-emerald-200',
          situation: 'Unasuluhisha tatizo na mteja mgumu. Unataka mkuu wako ajue maendeleo lakini usimwonyeshe mteja.',
          use: 'To: mteja@gmail.com | BCC: mkuu@kampuni.com\n\nMkuu anapokea kila jibu unalotuma lakini mteja hajui hilo.',
        },
        {
          icon: '📢',
          field: 'BCC',
          title: 'Tangazo kwa Orodha Kubwa',
          color: 'bg-emerald-50 border-emerald-200',
          situation: 'Una wateja 300 na unataka kuwatumia orodha ya bidhaa mpya. Hakuna anayepaswa kuona anwani za wengine.',
          use: 'To: wewe@gmail.com | BCC: (wateja 300 wote)\n\nKila mteja anapokea barua binafsi bila kuona wengine — hii inalinda faragha na inazuia spam.',
        },
      ]
    : [
        {
          icon: '👔',
          field: 'CC',
          title: 'Report to Supervisor',
          color: 'bg-indigo-50 border-indigo-200',
          situation: 'You are sending a work report to your colleague. You want your supervisor to also see it for awareness.',
          use: 'To: colleague@work.com | CC: supervisor@work.com\n\nThe supervisor sees the report and also sees that the colleague is the main recipient.',
        },
        {
          icon: '🏫',
          field: 'CC',
          title: 'School Letter to Parent',
          color: 'bg-indigo-50 border-indigo-200',
          situation: 'A teacher is emailing a student about exams. They want the parent to also know about it.',
          use: 'To: student@email.com | CC: parent@email.com\n\nThe parent sees the letter and knows their child received it.',
        },
        {
          icon: '🔒',
          field: 'BCC',
          title: 'Secret Monitoring',
          color: 'bg-emerald-50 border-emerald-200',
          situation: 'You are handling a difficult client situation. You want your boss to follow progress without the client knowing.',
          use: 'To: client@gmail.com | BCC: boss@company.com\n\nThe boss receives every reply you send but the client never knows.',
        },
        {
          icon: '📢',
          field: 'BCC',
          title: 'Newsletter to Large List',
          color: 'bg-emerald-50 border-emerald-200',
          situation: 'You have 300 customers and want to send them a new product list. No one should see each other’s addresses.',
          use: 'To: yourself@gmail.com | BCC: (all 300 customers)\n\nEach customer receives a personal email without seeing anyone else — protects privacy and prevents spam.',
        },
      ];

  const mistakes = isSw
    ? [
        {
          icon: '😬',
          bad: 'Kuweka wateja 100 wote kwenye "To" au "CC"',
          consequence: 'Kila mteja anaona anwani za wengine 99 — uvunjaji mkubwa wa faragha na sababu ya hasira.',
          fix: 'Tumia BCC kwa orodha kubwa.',
        },
        {
          icon: '😰',
          bad: 'Kutumia "Reply All" bila kufikiria',
          consequence: 'Jibu lako linaenda kwa kila mtu kwenye barua ya awali — hata watu ambao hawakuhusika na jibu lako.',
          fix: 'Bonyeza Reply (si Reply All) kama unajibu mtu mmoja tu.',
        },
        {
          icon: '🙈',
          bad: 'Kuweka mtu kwenye BCC bila sababu ya busara',
          consequence: 'BCC inaweza kuonekana kama undanganyifu. Mtu akigundua utaonekana kuwa na nia mbaya.',
          fix: 'Tumia BCC kwa makusudi mazuri — faragha, ufuatiliaji wa kisheria, au orodha kubwa.',
        },
        {
          icon: '😱',
          bad: 'Kuandika To badala ya BCC kwa orodha ya siri',
          consequence: 'Orodha yako yote ya wateja au washiriki inakuwa wazi kwa kila mtu — huwezi kubatilisha hilo.',
          fix: 'Angalia mara mbili kabla ya kutuma barua yoyote yenye wapokeaji wengi.',
        },
      ]
    : [
        {
          icon: '😬',
          bad: 'Putting 100 clients all in "To" or "CC"',
          consequence: 'Every client sees the other 99 addresses — a major privacy breach and a common cause of complaints.',
          fix: 'Use BCC for large lists.',
        },
        {
          icon: '😰',
          bad: 'Clicking "Reply All" without thinking',
          consequence: 'Your reply goes to every person on the original email — including people who had nothing to do with your reply.',
          fix: 'Click Reply (not Reply All) when replying to just one person.',
        },
        {
          icon: '🙈',
          bad: 'Adding someone to BCC without a good reason',
          consequence: 'BCC can look deceptive. If discovered, you may appear dishonest or to have hidden motives.',
          fix: 'Use BCC for legitimate purposes — privacy, legal monitoring, or large lists.',
        },
        {
          icon: '😱',
          bad: 'Writing To instead of BCC for a secret list',
          consequence: 'Your entire customer or contact list is exposed to everyone — you cannot undo this.',
          fix: 'Double-check before sending any email with multiple recipients.',
        },
      ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-8 sm:space-y-10">
      {/* Heading */}
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a73e8] leading-tight">
          {isSw ? 'CC na BCC ni nini?' : 'What are CC and BCC?'}
        </h2>
        <p className="text-slate-500 font-medium italic text-xs sm:text-sm">
          {isSw ? 'Siri ya kutuma nakala kwa watu wengi' : 'The secret of sending copies to many people'}
        </p>
      </div>

      {/* Hero image */}
      <div className="w-full h-44 sm:h-56 md:h-64 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border border-slate-100">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Team collaboration"
        />
      </div>

      {/* CC vs BCC intro cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="p-5 sm:p-6 bg-blue-50 rounded-[24px] sm:rounded-[32px] border-2 border-blue-100 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👥</span>
            <h4 className="font-black text-blue-700 uppercase text-[10px] sm:text-xs tracking-widest">
              CC — Carbon Copy
            </h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {isSw
              ? 'Inatumika kumtumia mtu nakala ya barua pepe ili naye ajue kinachoendelea. Kila mtu ataona anwani ya mwenzake hapa.'
              : "Used to send a copy to someone for awareness. Everyone can see each other's addresses here."}
          </p>
          <div className="bg-white/70 p-3 rounded-xl text-[11px] sm:text-xs font-mono text-blue-500 border border-blue-100">
            {isSw ? '👁️ Kila mtu anaona wote waliomo kwenye CC' : '👁️ Everyone sees all addresses on CC'}
          </div>
        </div>

        <div className="p-5 sm:p-6 bg-slate-900 rounded-[24px] sm:rounded-[32px] border-2 border-slate-800 space-y-3 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔒</span>
            <h4 className="font-black text-blue-400 uppercase text-[10px] sm:text-xs tracking-widest">
              BCC — Blind Carbon Copy
            </h4>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {isSw
              ? 'Hii ni "Nakala ya Siri". Unamtumia mtu nakala lakini wapokeaji wengine hawawezi kuona jina lake. Ni muhimu kwa kulinda faragha.'
              : 'This is a "Secret Copy". You send a copy but other recipients cannot see their name. Essential for privacy.'}
          </p>
          <div className="bg-white/10 p-3 rounded-xl text-[11px] sm:text-xs font-mono text-emerald-400 border border-emerald-900">
            {isSw ? '🙈 Anwani ya BCC imefichwa kwa kila mtu mwingine' : '🙈 BCC address is hidden from everyone else'}
          </div>
        </div>
      </div>

      {/* Quick tip */}
      <div className="p-4 sm:p-5 bg-amber-50 rounded-2xl border-l-8 border-amber-400">
        <p className="text-sm font-bold text-amber-800 leading-relaxed">
          💡{' '}
          {isSw
            ? 'Ukitaka kutuma email kwa watu 50 kwa wakati mmoja bila kila mmoja kuona email ya mwenzake, tumia BCC!'
            : "If you want to send an email to 50 people at once without them seeing each other's addresses, use BCC!"}
        </p>
      </div>

      {/* Analogy */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-black text-slate-800">
          {isSw ? '📬 Kuelewa kwa Mfano Rahisi — Barua ya Karatasi' : '📬 Understand with a Simple Example — Paper Letter'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(isSw
            ? [
                {
                  icon: '✉️',
                  label: 'To (Kwa)',
                  desc: 'Mtu unayemwandikia barua moja kwa moja. Anajua barua ni kwake yeye.',
                  color: 'bg-blue-50 border-blue-200',
                  text: 'text-blue-700',
                },
                {
                  icon: '📄',
                  label: 'CC (Nakala Wazi)',
                  desc: 'Kama kupiga nakala ya barua na kuiweka kwenye sanduku la meneja. Mpokeaji mkuu anaona "Meneja amepata nakala."',
                  color: 'bg-indigo-50 border-indigo-200',
                  text: 'text-indigo-700',
                },
                {
                  icon: '🔏',
                  label: 'BCC (Nakala ya Siri)',
                  desc: 'Kama kumtumia meneja nakala kwa bahasha tofauti — kimya kimya. Mpokeaji mkuu hajui meneja amepata barua pia.',
                  color: 'bg-emerald-50 border-emerald-200',
                  text: 'text-emerald-700',
                },
              ]
            : [
                {
                  icon: '✉️',
                  label: 'To (Recipient)',
                  desc: 'The person you are writing the letter to directly. They know the letter is addressed to them.',
                  color: 'bg-blue-50 border-blue-200',
                  text: 'text-blue-700',
                },
                {
                  icon: '📄',
                  label: 'CC (Open Copy)',
                  desc: "Like photocopying a letter and putting it in the manager's tray. The main recipient sees \"Manager got a copy.\"",
                  color: 'bg-indigo-50 border-indigo-200',
                  text: 'text-indigo-700',
                },
                {
                  icon: '🔏',
                  label: 'BCC (Secret Copy)',
                  desc: 'Like sending the manager a copy in a separate envelope — quietly. The main recipient never knows the manager also got it.',
                  color: 'bg-emerald-50 border-emerald-200',
                  text: 'text-emerald-700',
                },
              ]
          ).map((item, i) => (
            <div key={i} className={`rounded-[20px] sm:rounded-[22px] border-2 p-4 sm:p-5 space-y-3 ${item.color}`}>
              <span className="text-3xl">{item.icon}</span>
              <p className={`font-black text-sm ${item.text}`}>{item.label}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Compose Preview interactive */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-black text-slate-800">
          {isSw ? '🖥️ Jinsi Inavyoonekana Ukitunga Barua' : '🖥️ How It Looks When Composing an Email'}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? 'Hapa chini ni mfano wa dirisha la kutunga barua. Bonyeza BCC+ kuona sehemu ya BCC ikiongezeka:'
            : 'Below is a sample compose window. Tap BCC+ to see the BCC field appear:'}
        </p>
        <ComposePreview isSw={isSw} />
      </div>

      {/* Visibility demo */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-black text-slate-800">
          {isSw ? '🔭 Nani Anaona Nini? — Jaribio la Mwingiliano' : '🔭 Who Sees What? — Interactive Experiment'}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw
            ? 'Ali (To), Sara (CC), na John (BCC) wamepokea barua hiyo. Chagua kila mmoja uone anachoweza kuona:'
            : 'Ali (To), Sara (CC), and John (BCC) all received this email. Select each person to see what they can view:'}
        </p>
        <VisibilityDemo isSw={isSw} />
      </div>

      {/* Difference table */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-black text-slate-800">
          {isSw ? '📊 Tofauti Kwa Mchoro — To vs CC vs BCC' : '📊 Differences at a Glance — To vs CC vs BCC'}
        </h3>

        <div className="overflow-x-auto rounded-[20px] sm:rounded-[24px] border border-slate-200 shadow-sm">
          <table className="w-full min-w-[640px] text-xs">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-4 py-3 text-left font-black">{isSw ? 'Kipengele' : 'Feature'}</th>
                <th className="px-4 py-3 text-center font-black text-blue-400">To</th>
                <th className="px-4 py-3 text-center font-black text-indigo-400">CC</th>
                <th className="px-4 py-3 text-center font-black text-emerald-400">BCC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {(isSw
                ? [
                    { label: 'Anapokea barua?', to: '✅', cc: '✅', bcc: '✅' },
                    { label: 'Wengine wanaona anwani yake?', to: '✅ Ndiyo', cc: '✅ Ndiyo', bcc: '❌ La' },
                    { label: 'Anaweza kujibu kwa wote?', to: '✅', cc: '✅', bcc: '❌' },
                    { label: 'Anajua amepata nakala?', to: '✅', cc: '✅', bcc: '✅ Yeye tu' },
                    { label: 'Matumizi ya kawaida', to: 'Mpokeaji mkuu', cc: 'Kwa habari tu', bcc: 'Faragha / Orodha kubwa' },
                  ]
                : [
                    { label: 'Receives the email?', to: '✅', cc: '✅', bcc: '✅' },
                    { label: 'Others can see their address?', to: '✅ Yes', cc: '✅ Yes', bcc: '❌ No' },
                    { label: 'Can Reply All?', to: '✅', cc: '✅', bcc: '❌' },
                    { label: 'Knows they received a copy?', to: '✅', cc: '✅', bcc: '✅ Only them' },
                    { label: 'Typical use', to: 'Main recipient', cc: 'For awareness', bcc: 'Privacy / Large lists' },
                  ]
              ).map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-bold text-slate-700">{row.label}</td>
                  <td className="px-4 py-3 text-center text-blue-600 font-bold">{row.to}</td>
                  <td className="px-4 py-3 text-center text-indigo-600 font-bold">{row.cc}</td>
                  <td className="px-4 py-3 text-center text-emerald-600 font-bold">{row.bcc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-world scenarios */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-black text-slate-800">
          {isSw ? '🌍 Hali za Kweli — Unapotumia CC na BCC' : '🌍 Real Situations — When to Use CC and BCC'}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw ? 'Mifano halisi inayoonyesha ni lini utumie kila moja:' : 'Real examples showing exactly when to use each one:'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scenarios.map((s, i) => (
            <ScenarioCard key={i} {...s} isSw={isSw} />
          ))}
        </div>
      </div>

      {/* Common mistakes */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-black text-slate-800">
          {isSw ? '🚫 Makosa ya Kawaida — Epuka Haya' : '🚫 Common Mistakes — Avoid These'}
        </h3>
        <div className="space-y-4">
          {mistakes.map((m, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-[20px] sm:rounded-[22px] p-4 sm:p-5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{m.icon}</span>
                <div className="space-y-1 min-w-0">
                  <p className="font-black text-slate-800 text-sm leading-relaxed">{m.bad}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-100 rounded-xl p-3">
                  <p className="text-[10px] font-black text-red-500 uppercase tracking-wider mb-1">
                    {isSw ? 'Athari:' : 'Consequence:'}
                  </p>
                  <p className="text-xs text-red-700 leading-relaxed">{m.consequence}</p>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-xl p-3">
                  <p className="text-[10px] font-black text-green-600 uppercase tracking-wider mb-1">
                    {isSw ? 'Suluhisho:' : 'Fix:'}
                  </p>
                  <p className="text-xs text-green-700 leading-relaxed">{m.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz */}
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-black text-slate-800">
          {isSw ? '🎮 Jaribu Ujuzi Wako — Maswali 3' : '🎮 Test Your Knowledge — 3 Questions'}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {isSw ? 'Jibu maswali yote kisha bonyeza kukagua majibu:' : 'Answer all questions then tap to check your answers:'}
        </p>
        <Quiz isSw={isSw} />
      </div>

      {/* Summary */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[24px] sm:rounded-[28px] text-white shadow-lg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div className="relative z-10 space-y-3">
          <h4 className="font-black text-base sm:text-lg">{isSw ? '✅ Unachohitaji Kukumbuka' : '✅ Key Takeaways'}</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
            {(isSw
              ? [
                  'CC = Nakala Wazi — mpokeaji mkuu anaona majina yote kwenye CC',
                  'BCC = Nakala ya Siri — hakuna mwingine anayeona anwani ya mtu kwenye BCC',
                  'Tumia BCC unapotuma kwa orodha kubwa — inalinda faragha na inazuia spam',
                  'Tumia CC kuwajulisha watu bila kuwafanya wawe wapokeaji wakuu',
                  'Angalia kila wakati ni nani unamweka wapi kabla ya kubonyeza Tuma',
                ]
              : [
                  'CC = Open Copy — the main recipient can see all names on CC',
                  'BCC = Secret Copy — no one else can see the address of a BCC recipient',
                  'Use BCC when emailing large lists — it protects privacy and prevents spam',
                  'Use CC to keep people informed without making them the main recipient',
                  'Always check who you are putting where before hitting Send',
                ]
            ).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-300 font-black mt-0.5">→</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CcBcc;