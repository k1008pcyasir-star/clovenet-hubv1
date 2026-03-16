import { useState, useEffect } from "react";

const QuizModule = ({ lang }) => {
  const isSw = lang === 'sw';
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState('intro'); // intro | quiz | result
  const [animIn, setAnimIn] = useState(true);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  const quizData = [
    // ── 1 ─────────────────────────────────────────────────────────────────
    {
      id: 1,
      category: isSw ? 'Anwani ya Email' : 'Email Address',
      icon: '📧',
      q: isSw ? "Ipi ni anwani bora ya barua pepe kwa maombi ya kazi?" : "Which email address looks most professional for job applications?",
      opts: ["kingboy99@gmail.com", "rashid.omar@gmail.com", "sweetgirl@gmail.com", "mpenziwa2005@gmail.com"],
      ans: 1,
      exp: isSw ? "'rashid.omar@gmail.com' inatumia jina la kweli — inaonyesha ukomavu na utaalamu mbele ya mwajiri." : "'rashid.omar@gmail.com' uses a real name — it signals maturity and professionalism to employers.",
    },
    // ── 2 ─────────────────────────────────────────────────────────────────
    {
      id: 2,
      category: 'CC / BCC',
      icon: '👥',
      q: isSw ? "CC kwenye barua pepe inamaanisha nini?" : "What does CC mean in an email?",
      opts: [isSw ? "Kufuta barua" : "Delete the email", isSw ? "Nakala Wazi (Carbon Copy)" : "Carbon Copy — visible copy to others", isSw ? "Barua ya siri" : "Secret message", isSw ? "Kiambatisho cha faili" : "File attachment"],
      ans: 1,
      exp: isSw ? "CC (Carbon Copy) inaruhusu watu wengine kupokea nakala ya barua — wote wanaona anwani za kila mmoja." : "CC lets others receive a copy — everyone can see each other's addresses. Use BCC to hide recipients.",
    },
    // ── 3 ─────────────────────────────────────────────────────────────────
    {
      id: 3,
      category: 'Spam',
      icon: '🚫',
      q: isSw ? "Sehemu gani ya Gmail inapokea barua za taka au hatari?" : "Which Gmail folder receives junk or potentially dangerous emails?",
      opts: ["Inbox", "Drafts", "Spam", "Sent"],
      ans: 2,
      exp: isSw ? "Sahihi — lakini tahadhari! Barua nzuri ya mwajiri inaweza kwenda Spam kwa makosa. Angalia kila siku!" : "Correct — but beware! A real employer email can land in Spam by mistake. Check it daily!",
    },
    // ── 4 ─────────────────────────────────────────────────────────────────
    {
      id: 4,
      category: isSw ? 'Faili ya CV' : 'CV Format',
      icon: '📄',
      q: isSw ? "Aina gani ya faili ni bora zaidi kwa kutuma CV kwa mwajiri?" : "Which file format is best for sending your CV to an employer?",
      opts: ["MP3", "PDF", "MP4", "JPEG"],
      ans: 1,
      exp: isSw ? "PDF ni bora kwa sababu haibadilishi muundo wa maandishi yako — inaonekana sawa kwenye kompyuta yoyote." : "PDF is best because it preserves your layout exactly — it looks the same on any device or computer.",
    },
    // ── 5 ─────────────────────────────────────────────────────────────────
    {
      id: 5,
      category: isSw ? 'Salamu Rasmi' : 'Formal Greeting',
      icon: '👋',
      q: isSw ? "Ni salamu ipi inayofaa kuanza barua pepe ya maombi ya kazi?" : "Which greeting is appropriate to start a job application email?",
      opts: ["Hey!", "Mambo vipi?", "Dear Hiring Manager,", "Yo, what's up?"],
      ans: 2,
      exp: isSw ? "'Dear Hiring Manager,' ni salamu rasmi inayoonyesha heshima. Salamu za kirafiki kama 'Hey' zinapoteza heshima mbele ya mwajiri." : "'Dear Hiring Manager,' is the formal, respectful opening. Casual greetings like 'Hey' signal a lack of professionalism.",
    },
    // ── 6 ─────────────────────────────────────────────────────────────────
    {
      id: 6,
      category: isSw ? 'Subject Line' : 'Subject Line',
      icon: '📌',
      q: isSw ? "Ni subject ipi inayofaa zaidi kwa barua pepe ya maombi ya kazi?" : "Which subject line is most appropriate for a job application email?",
      opts: [
        isSw ? "Nataka kazi" : "I need a job",
        "Application for Accountant Position – Amina Hassan",
        "OPEN ASAP!!!",
        isSw ? "barua pepe yangu" : "my email to you",
      ],
      ans: 1,
      exp: isSw ? "Subject nzuri inajumuisha nafasi unayoiomba na jina lako — inafanya iwe rahisi kwa HR kukutambua haraka." : "A good subject includes the role and your name — it lets HR identify and find your email quickly.",
    },
    // ── 7 ─────────────────────────────────────────────────────────────────
    {
      id: 7,
      category: isSw ? 'Kufunga Barua' : 'Email Closing',
      icon: '✒️',
      q: isSw ? "Unatumia 'Yours sincerely' au 'Yours faithfully' lini?" : "When do you use 'Yours sincerely' vs 'Yours faithfully'?",
      opts: [
        isSw ? "Vinaweza kutumika wakati wowote — hakuna tofauti" : "Either works — there's no real difference",
        isSw ? "'Sincerely' ukijua jina, 'Faithfully' usipojua jina" : "'Sincerely' when you know their name, 'Faithfully' when you don't",
        isSw ? "'Faithfully' ukijua jina, 'Sincerely' usipojua" : "'Faithfully' when you know their name, 'Sincerely' when you don't",
        isSw ? "'Sincerely' kwa barua za kirafiki tu" : "'Sincerely' only for friendly letters",
      ],
      ans: 1,
      exp: isSw ? "Kanuni ya Kiingereza: 'Dear Mr. Kamau' → 'Yours sincerely'. 'Dear Sir/Madam' → 'Yours faithfully'. Hii ni kanuni muhimu ya uandishi rasmi." : "English rule: 'Dear Mr. Kamau' → 'Yours sincerely'. 'Dear Sir/Madam' → 'Yours faithfully'. This is a key formal writing rule.",
    },
    // ── 8 ─────────────────────────────────────────────────────────────────
    {
      id: 8,
      category: 'Drafts',
      icon: '📝',
      q: isSw ? "Barua pepe zilizohifadhiwa lakini hazijatumwa zinapatikana wapi?" : "Where are emails saved but not yet sent stored in Gmail?",
      opts: ["Sent", "Inbox", "Drafts", "Trash"],
      ans: 2,
      exp: isSw ? "Drafts (Rasimu) ni mahali ambapo barua zako zisizokamilika zinahifadhiwa. Unaweza kurudi kuziandika tena na kuzituma baadaye." : "Drafts is where incomplete emails are saved. You can return anytime to finish and send them later.",
    },
    // ── 9 ─────────────────────────────────────────────────────────────────
    {
      id: 9,
      category: 'BCC',
      icon: '🔒',
      q: isSw ? "BCC inamaanisha nini na inatumika lini?" : "What does BCC mean and when should you use it?",
      opts: [
        isSw ? "Backup Copy — kwa kuhifadhi barua" : "Backup Copy — for saving emails",
        isSw ? "Blind Carbon Copy — mpokeaji haoni wengine" : "Blind Carbon Copy — recipients can't see each other",
        isSw ? "Basic Contact Copy — kwa mawasiliano ya kawaida" : "Basic Contact Copy — for basic communication",
        isSw ? "Barua ya Chini ya Chini — kwa maombi ya siri" : "Bottom Copy — for secret applications",
      ],
      ans: 1,
      exp: isSw ? "BCC (Blind Carbon Copy) inaruhusu kutuma kwa watu wengi bila mmoja kuona anwani za wengine — muhimu kwa faragha." : "BCC lets you email many people without exposing their addresses to each other — important for privacy.",
    },
    // ── 10 ────────────────────────────────────────────────────────────────
    {
      id: 10,
      category: isSw ? 'Viambatisho' : 'Attachments',
      icon: '📎',
      q: isSw ? "Unataka kutuma CV yako kwa mwajiri. Ni kipi sahihi cha kufanya?" : "You want to send your CV to an employer. What is the correct approach?",
      opts: [
        isSw ? "Nakili maandishi ya CV moja kwa moja ndani ya barua pepe" : "Copy your CV text directly into the email body",
        isSw ? "Tuma barua tupu bila kitu — mwajiri aulize" : "Send an empty email and wait to be asked",
        isSw ? "Ambatisha faili ya PDF na utaje 'please find attached my CV' ndani ya barua" : "Attach a PDF file and mention 'please find attached my CV' in the email",
        isSw ? "Tuma picha ya CV uliyopiga picha na simu" : "Send a phone photo of your printed CV",
      ],
      ans: 2,
      exp: isSw ? "Ambatisha CV kama PDF na utaje ndani ya barua — hii inaonyesha utaalamu. Picha za CV au kunakili ndani ya barua hazionyeshi uzoefu." : "Attach CV as PDF and mention it in the body — this shows professionalism. Photo CVs or pasting text look unprofessional.",
    },
    // ── 11 ────────────────────────────────────────────────────────────────
    {
      id: 11,
      category: isSw ? 'Lugha Rasmi' : 'Professional Language',
      icon: '🗣️',
      q: isSw ? "Ni sentensi ipi inayofaa katika barua pepe rasmi ya kazi?" : "Which sentence is appropriate in a formal job application email?",
      opts: [
        "plz send me more info thx",
        isSw ? "Ninataka kazi yako sana sana!!!" : "I really really want this job!!!",
        "I would appreciate the opportunity to discuss my application further.",
        isSw ? "Mimi ni mtu mzuri sana, unipatie tu kazi" : "I am very good person, just give me the job",
      ],
      ans: 2,
      exp: isSw ? "'I would appreciate the opportunity...' ni lugha rasmi, ya heshima, na yenye kujithamini — ndivyo mwajiri anavyotaka kusikia." : "'I would appreciate the opportunity...' is formal, respectful, and confident — exactly the tone employers respond to.",
    },
    // ── 12 ────────────────────────────────────────────────────────────────
    {
      id: 12,
      category: 'Reply / Forward',
      icon: '↩️',
      q: isSw ? "Tofauti kati ya 'Reply' na 'Forward' ni ipi?" : "What is the difference between 'Reply' and 'Forward'?",
      opts: [
        isSw ? "Hakuna tofauti — zote zinatuma barua" : "No difference — both just send the email",
        isSw ? "'Reply' inajibu mtu mmoja aliyekutumia, 'Forward' inapeleka barua kwa mtu mwingine" : "'Reply' responds to the sender, 'Forward' sends the email to a new person",
        isSw ? "'Forward' inaruhusu kuhariri barua, 'Reply' hairuhusu" : "'Forward' lets you edit the email, 'Reply' doesn't",
        isSw ? "'Reply' inatuma kwa watu wote, 'Forward' kwa mmoja tu" : "'Reply' sends to everyone, 'Forward' to one person only",
      ],
      ans: 1,
      exp: isSw ? "Sahihi! 'Reply' unajibu mtu aliyekutumia. 'Forward' unapeleka barua hiyo kwa mtu mwingine asiyehusika awali." : "Correct! 'Reply' goes back to the sender. 'Forward' sends that email to a completely new recipient.",
    },
    // ── 13 ────────────────────────────────────────────────────────────────
    {
      id: 13,
      category: isSw ? 'Usalama wa Email' : 'Email Safety',
      icon: '🔐',
      q: isSw ? "Umepokea barua pepe isemayo 'Umeshinda TSH 5,000,000! Bonyeza hapa!' Unapaswa kufanya nini?" : "You receive an email saying 'You've won TSH 5,000,000! Click here now!' What should you do?",
      opts: [
        isSw ? "Bonyeza haraka ili upate pesa yako" : "Click immediately to claim your money",
        isSw ? "Tuma kwa marafiki wako ili nao wafaidike" : "Forward it to friends so they benefit too",
        isSw ? "Usiibonyeze — hii ni Spam/Phishing inayolenga kukuibia" : "Don't click — this is Spam/Phishing designed to steal from you",
        isSw ? "Jibu na utoe namba yako ya simu na benki" : "Reply with your phone number and bank details",
      ],
      ans: 2,
      exp: isSw ? "Hii ni mtego wa 'Phishing' — barua zinazodai kushinda pesa au zawadi bila kushiriki ni ulaghai. Kamwe usitoe taarifa zako za kibinafsi." : "This is a phishing scam — emails claiming prizes you never entered are fraud. Never share personal or banking details.",
    },
    // ── 14 ────────────────────────────────────────────────────────────────
    {
      id: 14,
      category: 'Follow-Up',
      icon: '🔄',
      q: isSw ? "Ulituma maombi ya kazi wiki moja iliyopita na bado haujapata jibu. Unapaswa kufanya nini?" : "You sent a job application one week ago and haven't heard back. What should you do?",
      opts: [
        isSw ? "Subiri miezi 3 kabla ya kufanya chochote" : "Wait 3 months before doing anything",
        isSw ? "Tuma barua ya follow-up kwa heshima ukiuliza hali ya maombi yako" : "Send a polite follow-up email asking about your application status",
        isSw ? "Nenda ofisini bila kutangazwa" : "Show up at their office unannounced",
        isSw ? "Acha maombi — hawakupendezwa nawe" : "Give up — they clearly weren't interested",
      ],
      ans: 1,
      exp: isSw ? "Follow-up barua baada ya wiki 1-2 inaonyesha nia ya kweli na utaalamu — inakufanya uonekane tofauti na waombaji wengine." : "A follow-up after 1-2 weeks shows genuine interest and professionalism — it makes you stand out from other applicants.",
    },
    // ── 15 ────────────────────────────────────────────────────────────────
    {
      id: 15,
      category: isSw ? 'Barua ya Shukrani' : 'Thank You Email',
      icon: '🙏',
      q: isSw ? "Baada ya mahojiano ya kazi, unapaswa kutuma barua ya shukrani lini?" : "After a job interview, when should you send a thank-you email?",
      opts: [
        isSw ? "Wiki mbili baadaye" : "Two weeks later",
        isSw ? "Ndani ya masaa 24 baada ya mahojiano" : "Within 24 hours after the interview",
        isSw ? "Baada ya kupata kazi tu" : "Only after you get the job",
        isSw ? "Huhitaji kutuma barua ya shukrani — ni kupoteza muda" : "You don't need to — it's a waste of time",
      ],
      ans: 1,
      exp: isSw ? "Barua ya shukrani ndani ya masaa 24 inakuonyesha una adabu, una nia ya kweli, na unajitofautisha na wagombea wengine ambao hawatumi." : "A thank-you within 24 hours shows courtesy, genuine interest, and sets you apart from candidates who don't bother.",
    },
    // ── 16 ────────────────────────────────────────────────────────────────
    {
      id: 16,
      category: isSw ? 'Kusoma Kabla Kutuma' : 'Proofreading',
      icon: '👁️',
      q: isSw ? "Unamaliza kuandika barua pepe ya maombi ya kazi. Hatua inayofuata kabla ya kubonyeza 'Send' ni ipi?" : "You finish writing your job application email. What is the next step before pressing 'Send'?",
      opts: [
        isSw ? "Tuma mara moja bila kusoma — haraka ni muhimu" : "Send immediately without reading — speed matters",
        isSw ? "Soma mara mbili kwa makini kuangalia makosa ya herufi na lugha" : "Read it twice carefully to check for spelling and language errors",
        isSw ? "Tuma kwa marafiki wako kwanza kupata maoni" : "Send to friends first for opinions before the employer",
        isSw ? "Subiri kesho ili 'uisome kwa macho mapya' kisha uitume" : "Wait until tomorrow to 'read with fresh eyes' then send",
      ],
      ans: 1,
      exp: isSw ? "Kusoma mara mbili ni muhimu sana — makosa ya tahajia, herufi, au lugha yanaweza kuharibu picha yako mbele ya mwajiri hata CV yako ikiwa nzuri." : "Reading twice is crucial — spelling, grammar, or language errors can ruin your image even if your CV is excellent.",
    },
    // ── 17 ────────────────────────────────────────────────────────────────
    {
      id: 17,
      category: isSw ? 'Uandishi wa Barua — Urefu' : 'Email Length',
      icon: '📏',
      q: isSw ? "Mwili wa barua pepe ya maombi ya kazi unapaswa kuwa mrefu kiasi gani?" : "How long should the body of a job application email be?",
      opts: [
        isSw ? "Sentensi moja tu — 'Naomba kazi'" : "One sentence only — 'I want the job'",
        isSw ? "Ukurasa 5 au zaidi wa maelezo yote" : "5 or more pages of full details",
        isSw ? "Aya 2-4 fupi zenye taarifa muhimu — si fupi mno wala ndefu mno" : "2-4 short paragraphs with key information — not too short, not too long",
        isSw ? "Haijalishi — mwajiri anasoma kila kitu" : "Doesn't matter — employers read everything",
      ],
      ans: 2,
      exp: isSw ? "Aya 2-4 ni bora: Ufunguzi (unaomaomba nini), Mwili (ujuzi wako), Hitimisho (ombi la mahojiano). HR ana barua nyingi — fupi na yenye maana inasomwa zaidi." : "2-4 paragraphs is ideal: Opening (what you want), Body (your skills), Closing (request). HR reads many — concise and clear emails get read.",
    },
    // ── 18 ────────────────────────────────────────────────────────────────
    {
      id: 18,
      category: isSw ? 'Neno la Uthibitisho' : 'Email Confirmation',
      icon: '✅',
      q: isSw ? "Unatumia Gmail na unataka kuhakikisha barua yako ilitumwa. Unakwenda wapi kuthibitisha?" : "You just sent an email via Gmail. Where do you go to confirm it was actually sent?",
      opts: [
        isSw ? "Inbox — barua zitarudi kwa nakala" : "Inbox — a copy will return to you",
        isSw ? "Spam — ili kuangalia haikwenda huko" : "Spam — to check it didn't land there",
        isSw ? "Sent — kutazama barua zote zilizotumwa" : "Sent — to see all emails you've sent",
        isSw ? "Drafts — barua zinahifadhiwa hapo kwanza" : "Drafts — emails are always saved there first",
      ],
      ans: 2,
      exp: isSw ? "'Sent' folder inaonyesha nakala ya kila barua uliyotuma — kwa tarehe, muda, na mpokeaji. Nenda hapa ukitaka kuthibitisha." : "The 'Sent' folder shows a copy of every email sent — with date, time, and recipient. Always check here to confirm.",
    },
    // ── 19 ────────────────────────────────────────────────────────────────
    {
      id: 19,
      category: isSw ? 'Neno la Mtaani' : 'Slang Check',
      icon: '⚠️',
      q: isSw ? "Ni maneno yapi YASIYOFAA kutumika katika barua pepe rasmi ya kazi?" : "Which words are NOT appropriate in a formal job application email?",
      opts: [
        isSw ? "'I am writing to apply for...'" : "'I am writing to apply for...'",
        isSw ? "'I would be grateful if...'" : "'I would be grateful if...'",
        isSw ? "'plz', 'thx', 'gonna', 'wanna', 'lol'" : "'plz', 'thx', 'gonna', 'wanna', 'lol'",
        isSw ? "'Please find attached my CV'" : "'Please find attached my CV'",
      ],
      ans: 2,
      exp: isSw ? "Maneno ya mtaani kama 'plz', 'thx', 'lol', 'gonna' yanakuonyesha huna uzoefu wa uandishi rasmi. Barua pepe si SMS wala WhatsApp." : "Slang like 'plz', 'thx', 'lol', 'gonna' signals you lack formal writing experience. Email is not SMS or WhatsApp.",
    },
    // ── 20 ────────────────────────────────────────────────────────────────
    {
      id: 20,
      category: isSw ? 'Neno la Mwisho' : 'Final Challenge',
      icon: '🏆',
      q: isSw ? "Ni hatua zipi ZOTE zinazofaa kufanya baada ya kutuma barua pepe ya maombi ya kazi?" : "Which steps should you ALL take after sending a job application email?",
      opts: [
        isSw ? "Angalia Sent, subiri wiki 1-2, tuma follow-up kama hakuna jibu, angalia Spam kila siku" : "Check Sent, wait 1-2 weeks, send follow-up if no reply, check Spam daily",
        isSw ? "Sahau kabisa — kama watapenda watakupigia simu" : "Forget about it — if they want you they'll call",
        isSw ? "Piga simu kila siku kuuliza kama walisoma barua yako" : "Call them every day asking if they read your email",
        isSw ? "Tuma barua ile ile tena kila siku ili wajue una nia" : "Send the same email again every day to show you're serious",
      ],
      ans: 0,
      exp: isSw ? "Hii ni mkakati kamili! Thibitisha barua ilitumwa (Sent), subiri kwa uvumilivu, angalia Spam kila siku, na tuma follow-up kwa heshima baada ya wiki 1-2." : "This is the complete strategy! Confirm delivery (Sent), wait patiently, check Spam daily, and send a polite follow-up after 1-2 weeks.",
    },
  ];

  const totalQ = quizData.length;
  const answered = Object.keys(answers).length;
  const score = quizData.filter((q, i) => answers[i] === q.ans).length;
  const pct = Math.round((score / totalQ) * 100);

  const goNext = () => {
    setAnimIn(false);
    setTimeout(() => {
      if (current < totalQ - 1) {
        setCurrent(c => c + 1);
      } else {
        setPhase('result');
      }
      setAnimIn(true);
    }, 200);
  };

  const handleAnswer = (idx) => {
    if (answers[current] !== undefined) return;
    const correct = idx === quizData[current].ans;
    const newStreak = correct ? streak + 1 : 0;
    setStreak(newStreak);
    if (newStreak > bestStreak) setBestStreak(newStreak);
    if (newStreak >= 3) { setShowBadge(true); setTimeout(() => setShowBadge(false), 2000); }
    setAnswers(prev => ({ ...prev, [current]: idx }));
  };

  const q = quizData[current];
  const isAnswered = answers[current] !== undefined;
  const isCorrect = answers[current] === q?.ans;

  // ── Grade ────────────────────────────────────────────────────────────────
  const grade = pct >= 90 ? { label: isSw ? 'Bora Sana! 🏆' : 'Excellent! 🏆', color: '#10b981', sub: isSw ? 'Unastahili cheti!' : 'You\'ve mastered email!' }
    : pct >= 70 ? { label: isSw ? 'Vizuri Sana! 🌟' : 'Great Job! 🌟', color: '#1a73e8', sub: isSw ? 'Karibu sana na ukamilifu' : 'Nearly perfect knowledge' }
    : pct >= 50 ? { label: isSw ? 'Wastani 📚' : 'Good Start 📚', color: '#f59e0b', sub: isSw ? 'Rudia masomo na ujaribu tena' : 'Review and try again' }
    : { label: isSw ? 'Jaribu Tena 💪' : 'Keep Practicing 💪', color: '#ef4444', sub: isSw ? 'Usikatishwe tamaa — jifunze zaidi' : 'Don\'t give up — keep learning' };

  const categoryResults = quizData.map((q, i) => ({
    category: q.category,
    icon: q.icon,
    correct: answers[i] === q.ans,
  }));

  // ══════════════════════════════════════════════════════════════════════════
  //  RENDER
  // ══════════════════════════════════════════════════════════════════════════
  return (
    <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }} className="space-y-4 pb-6">

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      {phase === 'intro' && (
        <div style={{ textAlign: 'center' }} className="space-y-6 py-4">
          <div style={{ fontSize: 64 }}>📧</div>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: '#111827', marginBottom: 8 }}>
              {isSw ? 'Mtihani wa Ujuzi wa Email' : 'Email Knowledge Assessment'}
            </h2>
            <p style={{ fontSize: 14, color: '#6b7280', fontWeight: 600 }}>
              {isSw ? 'Maswali 20 • Muda wako mwenyewe • Bila shinikizo' : '20 Questions • Your own pace • No pressure'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, textAlign: 'left' }}>
            {[
              { icon: '📧', label: isSw ? 'Anwani & Subject' : 'Address & Subject' },
              { icon: '📁', label: isSw ? 'Folders za Gmail' : 'Gmail Folders' },
              { icon: '✒️', label: isSw ? 'Uandishi Rasmi' : 'Formal Writing' },
              { icon: '🔐', label: isSw ? 'Usalama & Spam' : 'Safety & Spam' },
              { icon: '📄', label: isSw ? 'CV & Viambatisho' : 'CV & Attachments' },
              { icon: '🏆', label: isSw ? 'Mkakati wa Kazi' : 'Job Strategy' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: 14, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 20 }}>{t.icon}</span>
                <span style={{ fontSize: 12, fontWeight: 800, color: '#374151' }}>{t.label}</span>
              </div>
            ))}
          </div>

          <button onClick={() => setPhase('quiz')}
            style={{
              background: '#1a73e8', color: '#fff', border: 'none',
              borderRadius: 22, padding: '16px 40px',
              fontSize: 16, fontWeight: 900, cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(26,115,232,0.4)',
              width: '100%',
            }}>
            🚀 {isSw ? 'Anza Mtihani' : 'Start Quiz'}
          </button>
        </div>
      )}

      {/* ── QUIZ ──────────────────────────────────────────────────────────── */}
      {phase === 'quiz' && (
        <div className="space-y-4">

          {/* Streak badge popup */}
          {showBadge && (
            <div style={{
              position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
              background: '#f59e0b', color: '#fff', borderRadius: 20,
              padding: '10px 24px', fontSize: 13, fontWeight: 900, zIndex: 999,
              boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
            }}>
              🔥 {streak} {isSw ? 'mfululizo sahihi!' : 'in a row correct!'}
            </div>
          )}

          {/* Progress bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: '#6b7280' }}>
                {isSw ? `Swali ${current + 1} kati ya ${totalQ}` : `Question ${current + 1} of ${totalQ}`}
              </span>
              <span style={{ fontSize: 12, fontWeight: 800, color: '#1a73e8' }}>
                {streak > 0 ? `🔥 ×${streak}` : ''} {answered}/{totalQ}
              </span>
            </div>
            <div style={{ height: 8, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 4,
                background: 'linear-gradient(90deg, #1a73e8, #34a853)',
                width: `${((current + (isAnswered ? 1 : 0)) / totalQ) * 100}%`,
                transition: 'width 0.4s ease',
              }} />
            </div>
          </div>

          {/* Question card */}
          <div style={{
            opacity: animIn ? 1 : 0,
            transform: animIn ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.2s ease',
          }}>
            {/* Category tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 18 }}>{q.icon}</span>
              <span style={{ fontSize: 10, fontWeight: 900, color: '#1a73e8', letterSpacing: 1, textTransform: 'uppercase', background: '#e8f0fe', padding: '3px 10px', borderRadius: 20 }}>
                {q.category}
              </span>
            </div>

            {/* Question */}
            <div style={{ background: '#fff', borderRadius: 22, padding: '18px 18px 14px', border: '2px solid #e5e7eb', marginBottom: 12 }}>
              <p style={{ fontSize: 15, fontWeight: 800, color: '#111827', lineHeight: 1.5, margin: 0 }}>
                <span style={{ color: '#1a73e8', fontWeight: 900 }}>{current + 1}. </span>
                {q.q}
              </p>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q.opts.map((opt, idx) => {
                const selected = answers[current] === idx;
                const correct = q.ans === idx;
                let bg = '#f9fafb', border = '#e5e7eb', color = '#374151', icon = '';

                if (isAnswered) {
                  if (correct) { bg = '#d1fae5'; border = '#10b981'; color = '#065f46'; icon = '✅'; }
                  else if (selected) { bg = '#fee2e2'; border = '#ef4444'; color = '#991b1b'; icon = '❌'; }
                  else { bg = '#f9fafb'; border = '#e5e7eb'; color = '#9ca3af'; }
                }

                return (
                  <button key={idx} onClick={() => handleAnswer(idx)} disabled={isAnswered}
                    style={{
                      background: bg,
                      border: `2px solid ${border}`,
                      borderRadius: 16,
                      padding: '13px 16px',
                      textAlign: 'left',
                      cursor: isAnswered ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      transition: 'all 0.15s ease',
                      transform: selected && isAnswered ? 'scale(1.01)' : 'scale(1)',
                    }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      background: isAnswered ? (correct ? '#10b981' : selected ? '#ef4444' : '#e5e7eb') : '#e8f0fe',
                      color: isAnswered ? (correct || selected ? '#fff' : '#9ca3af') : '#1a73e8',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 900,
                    }}>
                      {isAnswered ? (correct ? '✓' : selected ? '✗' : String.fromCharCode(65 + idx)) : String.fromCharCode(65 + idx)}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color, flex: 1, lineHeight: 1.4 }}>{opt}</span>
                    {icon && <span style={{ fontSize: 16 }}>{icon}</span>}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {isAnswered && (
              <div style={{
                marginTop: 12,
                background: isCorrect ? '#d1fae5' : '#fff7ed',
                border: `1px solid ${isCorrect ? '#6ee7b7' : '#fcd34d'}`,
                borderRadius: 16, padding: '12px 16px',
                display: 'flex', gap: 10, alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: 20 }}>{isCorrect ? '💡' : '📖'}</span>
                <p style={{ fontSize: 12, fontWeight: 700, color: isCorrect ? '#065f46' : '#92400e', margin: 0, lineHeight: 1.6 }}>
                  {q.exp}
                </p>
              </div>
            )}

            {/* Next button */}
            {isAnswered && (
              <button onClick={goNext}
                style={{
                  marginTop: 14, width: '100%',
                  background: '#1a73e8', color: '#fff', border: 'none',
                  borderRadius: 18, padding: '14px 0',
                  fontSize: 14, fontWeight: 900, cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(26,115,232,0.35)',
                }}>
                {current < totalQ - 1 ? (isSw ? `Swali Linalofuata →` : `Next Question →`) : (isSw ? '🏁 Angalia Matokeo' : '🏁 See Results')}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── RESULTS ───────────────────────────────────────────────────────── */}
      {phase === 'result' && (
        <div className="space-y-5">
          {/* Big score card */}
          <div style={{
            background: '#0f172a',
            borderRadius: 28, padding: '28px 20px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: -30, right: -30, width: 130, height: 130, borderRadius: '50%', background: grade.color + '22' }} />
            <div style={{ position: 'absolute', bottom: -20, left: -20, width: 80, height: 80, borderRadius: '50%', background: '#1a73e820' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 12, color: '#64748b', fontWeight: 900, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
                {isSw ? 'Matokeo Yako' : 'Your Score'}
              </div>
              <div style={{ fontSize: 60, fontWeight: 900, color: grade.color, lineHeight: 1 }}>{pct}%</div>
              <div style={{ fontSize: 16, color: '#e2e8f0', fontWeight: 900, marginTop: 10 }}>{grade.label}</div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 6 }}>{grade.sub}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 18 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#10b981' }}>{score}</div>
                  <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700 }}>{isSw ? 'Sahihi' : 'Correct'}</div>
                </div>
                <div style={{ width: 1, background: '#1e293b' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#ef4444' }}>{totalQ - score}</div>
                  <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700 }}>{isSw ? 'Kosa' : 'Wrong'}</div>
                </div>
                <div style={{ width: 1, background: '#1e293b' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: '#f59e0b' }}>{bestStreak}</div>
                  <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700 }}>{isSw ? 'Rekodi' : 'Best Streak'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category breakdown */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 900, color: '#111827', marginBottom: 10 }}>
              {isSw ? '📊 Matokeo kwa Kila Mada' : '📊 Results by Topic'}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {categoryResults.map((r, i) => (
                <div key={i} style={{
                  background: r.correct ? '#d1fae5' : '#fee2e2',
                  borderRadius: 14, padding: '10px 12px',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ fontSize: 16 }}>{r.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: r.correct ? '#065f46' : '#991b1b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.category}</div>
                  </div>
                  <span style={{ fontSize: 14 }}>{r.correct ? '✅' : '❌'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Retry */}
          <button onClick={() => { setAnswers({}); setCurrent(0); setPhase('intro'); setStreak(0); }}
            style={{
              width: '100%', background: '#1a73e8', color: '#fff', border: 'none',
              borderRadius: 20, padding: '15px 0', fontSize: 14, fontWeight: 900, cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(26,115,232,0.35)',
            }}>
            🔄 {isSw ? 'Jaribu Tena' : 'Try Again'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizModule;