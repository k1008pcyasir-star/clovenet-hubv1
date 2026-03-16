const generalData = {
  id: "general",
  title: "General Interview Questions",
  description:
    "Mkusanyiko wa maswali ya kawaida yanayoulizwa kwenye usaili wa kazi katika sekta mbalimbali.",

  etiquette: [
    {
      title: "Salamu",
      content:
        "Gonga mlango, tabasamu, na wasalimie wataalamu kwa heshima kabla ya kukaa.",
    },
    {
      title: "Kukaa",
      content:
        "Kaa wima, mikono iwe juu ya mapaja, fanya eye contact ya kitaalamu.",
    },
    {
      title: "Kutoka",
      content:
        "Shukuru kwa muda wao na funga mlango kistaarabu ukiondoka.",
    },
  ],

  questions: [
    {
      id: 1,
      question_sw: "Elezea kuhusu wewe mwenyewe",
      question_en: "Tell us about yourself",
      guide: "Lenga uzoefu wako wa kazi, elimu, na ujuzi unaoendana na nafasi unayoomba. Usitaje mambo binafsi sana.",
      sample_answer: "I am a results-oriented professional with a degree in Information Technology and three years of experience in systems administration. In my previous role, I optimized network performance by 20% and led a team to digitize manual records.",
    },
    {
      id: 2,
      question_sw: "Kwa nini unataka kufanya kazi nasi?",
      question_en: "Why do you want to work here?",
      guide: "Onyesha kuwa umefanya utafiti kuhusu shirika. Taja namna malengo yako yanavyoendana na dira (Vision) ya taasisi hiyo.",
      sample_answer: "I have followed your organization for several months and I am impressed by your innovative approach to digital inclusion in Tanzania. My background aligns perfectly with your current mission.",
    },
    {
      id: 3,
      question_sw: "Nguvu zako ni zipi?",
      question_en: "What are your strengths?",
      guide: "Taja ujuzi wa kiufundi na kijamii (soft skills) unaoleta matokeo halisi.",
      sample_answer: "My greatest strength is my problem-solving ability combined with strong communication skills. I can remain calm under pressure while restoring critical systems.",
    },
    {
      id: 4,
      question_sw: "Udhaifu wako mkubwa ni upi?",
      question_en: "What is your greatest weakness?",
      guide: "Taja udhaifu ambao hauathiri kazi moja kwa moja na ueleze hatua unazochukua kuuboresha.",
      sample_answer: "I sometimes focus too much on details. To manage this, I have started using project management tools to stay focused on the bigger picture.",
    },
    {
      id: 5,
      question_sw: "Unajiona wapi katika kipindi cha miaka mitano ijayo?",
      question_en: "Where do you see yourself in 5 years?",
      guide: "Onyesha kuwa una mpango wa kukuza taaluma yako ndani ya taasisi hiyo.",
      sample_answer: "In five years, I see myself as a senior expert or a manager within this organization, having led several major projects.",
    },
    {
      id: 6,
      question_sw: "Kwa nini tukuajiri wewe?",
      question_en: "Why should we hire you?",
      guide: "Linganisha ujuzi wako na mahitaji ya kazi. Eleza thamani ya kipekee unayoleta.",
      sample_answer: "You should hire me because I possess both the technical certifications and hands-on experience required to deliver projects on time and under budget.",
    },
    {
      id: 7,
      question_sw: "Mafanikio yako makubwa hadi sasa ni yapi?",
      question_en: "What is your greatest achievement?",
      guide: "Chagua mafanikio ya kikazi ya hivi karibuni. Tumia namba kuthibitisha (STAR method).",
      sample_answer: "My biggest achievement was designing inventory software that saved my previous employer over 10 million TZS annually by reducing administrative errors.",
    },
    {
      id: 8,
      question_sw: "Elezea changamoto uliyokutana nayo na namna ulivyoitatua",
      question_en: "Tell us about a challenge you solved",
      guide: "Tumia mbinu ya STAR (Situation, Task, Action, Result).",
      sample_answer: "We faced a 15% drop in system efficiency. I audited our database queries and optimized them, resulting in a 25% speed improvement.",
    },
    {
      id: 9,
      question_sw: "Kwa nini unaacha kazi yako ya sasa?",
      question_en: "Why are you leaving your job?",
      guide: "Baki kuwa chanya. Taja kuwa unatafuta changamoto mpya au fursa ya kukua.",
      sample_answer: "I am ready for a new challenge that offers more responsibility and the opportunity to work on large-scale digital transformation projects.",
    },
    {
      id: 10,
      question_sw: "Unajua nini kuhusu taasisi yetu?",
      question_en: "What do you know about our company?",
      guide: "Taja historia fupi, huduma wanazotoa, na mafanikio yao kulingana na utafiti wako.",
      sample_answer: "I know you are a pioneer in the logistics sector in East Africa and recently implemented an AI-driven tracking system.",
    },
    {
      id: 11,
      question_sw: "Unapendelea kufanya kazi peke yako au kwenye timu?",
      question_en: "Do you prefer working alone or in a team?",
      guide: "Eleza kuwa unaweza kufanya yote, lakini timu ni muhimu kwa malengo makubwa.",
      sample_answer: "I am self-motivated and can work independently, but I believe teamwork is essential for achieving the best results in complex projects.",
    },
    {
      id: 12,
      question_sw: "Unawezaje kukabiliana na shinikizo la kazi?",
      question_en: "How do you handle stress or pressure?",
      guide: "Eleza mbinu unazotumia kama kupanga vipaumbele au kukaa na utulivu.",
      sample_answer: "I handle pressure by staying organized and prioritizing my tasks. This helps me maintain high standards even when deadlines are tight.",
    },
    {
      id: 13,
      question_sw: "Je, una maswali yoyote kwetu?",
      question_en: "Do you have any questions for us?",
      guide: "Uliza maswali yanayoonyesha nia ya kukua na utamaduni wa kazi.",
      sample_answer: "Yes, could you tell me more about the team culture here and the immediate projects I would be working on?",
    },
    {
      id: 14,
      question_sw: "Mshahara wako unategemea uwe kiasi gani?",
      question_en: "What are your salary requirements?",
      guide: "Uliza kiwango cha nafasi hiyo au sema unategemea mshahara wa ushindani wa soko.",
      sample_answer: "I am looking for a salary that is competitive. Based on my research, I am open to a fair offer. What range have you budgeted?",
    },
    {
      id: 15,
      question_sw: "Toa mfano wa wakati ulionyesha uongozi",
      question_en: "Give an example of leadership",
      guide: "Taja wakati ulipochukua hatua ya kuanzisha kitu au kumsaidia mwenzako.",
      sample_answer: "I volunteered to research a new software update and created a user guide for the whole department, reducing transition time by a week.",
    },
    {
      id: 16,
      question_sw: "Wenzako wanazungumziaje uwezo wako?",
      question_en: "How would your colleagues describe you?",
      guide: "Taja sifa chanya kama 'Mchapa kazi' au 'Mwenye kuaminika'.",
      sample_answer: "My colleagues would describe me as a reliable team player who they can count on for technical support and meeting deadlines.",
    },
    {
      id: 17,
      question_sw: "Unawezaje kukaa na taarifa za mabadiliko kwenye sekta yako?",
      question_en: "How do you stay updated with industry trends?",
      guide: "Taja vyanzo kama blogs, kozi za mtandaoni, au mikutano ya TAIC.",
      sample_answer: "I follow technical blogs and attend events like the Tanzania Annual ICT Conference to learn about the latest trends.",
    },
    {
      id: 18,
      question_sw: "Nini kinakuhamasisha kufanya kazi?",
      question_en: "What motivates you?",
      guide: "Taja vyanzo vinavyoendana na kazi kama kutatua matatizo.",
      sample_answer: "I am motivated by the opportunity to solve complex challenges and seeing how my solutions improve daily operations.",
    },
    {
      id: 19,
      question_sw: "Elezea wakati ulipofanya kosa na namna ulivyoirekebisha",
      question_en: "Tell us about a mistake you made",
      guide: "Eleza namna ulivyowajibika na hatua ulizokuchukua kuzuia lisijirudie.",
      sample_answer: "I once misconfigured a server setting. I immediately reported it, corrected the error, and created a checklist for future tasks.",
    },
    {
      id: 20,
      question_sw: "Unawezaje kushughulikia mgogoro na mfanyakazi mwenzako?",
      question_en: "How do you handle conflict with a coworker?",
      guide: "Onyesha ukomavu na uwezo wa kuwasiliana ili kupata suluhu ya kitaalamu.",
      sample_answer: "I address conflicts directly and professionally by inviting my colleague for a private conversation to find common ground.",
    },
  ],
};

export default generalData;