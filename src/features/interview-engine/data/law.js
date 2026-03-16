const lawData = {
  id: "law-tanzania",
  title: "Legal Profession: Comprehensive Interview Guide (Tanzania)",
  description:
    "Professional Evaluation: 100 Essential Questions for Legal Officers and Advocates. Inajumuisha muundo wa Mahakama, majukumu ya AG & Solicitor General, miongozo ya TLS, na sheria za utumishi wa umma.",

  etiquette: [
    {
      title: "Judicial Independence",
      content:
        "Daima sisitiza umuhimu wa uhuru wa mahakama na kufuata Katiba ya Jamhuri ya Muungano wa Tanzania (1977) katika kutoa uamuzi."
    },
    {
      title: "Professional Ethics",
      content:
        "Zingatia Kanuni za Maadili ya Wanasheria (Advocates' Code of Conduct) na usiri wa mteja (Attorney-Client Privilege)."
    },
    {
      title: "Statutory Compliance",
      content:
        "Hakikisha majibu yako yanarejelea sheria mama (Principal Legislation) na kanuni (Regulations) husika nchini Tanzania."
    }
  ],

  questions: [
    /* GROUP 1: COURT SYSTEM & JUDICIARY (1-20) */
    {
      id: 1,
      cat: "Judiciary",
      swali_sw: "Elezea muundo wa mfumo wa mahakama nchini Tanzania.",
      swali_en: "Explain the structure of the court system in Tanzania.",
      muongozo: "Taja ngazi kuanzia Mahakama ya Msingi hadi Mahakama ya Rufaa (Apex Court).",
      jibu_en: "The judiciary is hierarchical: 1. Court of Appeal (top), 2. High Court (with specialized divisions like Land, Commercial), 3. Resident Magistrate & District Courts, 4. Primary Courts (bottom)."
    },
    
    {
      id: 2,
      cat: "Jurisdiction",
      swali_sw: "Toa mfano wa kesi inayosikilizwa kwanza katika mahakama ya ngazi ya kwanza.",
      swali_en: "Give an example of a case that originates in a first-instance court.",
      muongozo: "Taja kesi za jinai ndogo au madai yenye thamani ya chini kwenye Primary Court.",
      jibu_en: "A robbery involving small sums or a dispute over a contract for a small amount may begin in a Primary Court or Resident Magistrate Court, depending on the pecuniary value."
    },
    {
      id: 3,
      cat: "Appellate Law",
      swali_sw: "Kipi kinatofautisha Mahakama ya Rufaa na Mahakama Kuu?",
      swali_en: "What is the difference between a Court of Appeal case and a High Court case?",
      muongozo: "Mahakama Kuu ina 'Original Jurisdiction'; Rufaa ni kwa maamuzi ya mwisho tu.",
      jibu_en: "The High Court can start new cases (original jurisdiction). The Court of Appeal handles only appeals from the High Court, and its decisions are final on all legal issues."
    },
    {
      id: 4,
      cat: "Constitutional Law",
      swali_sw: "Je, Mahakama Kuu ina mamlaka gani maalum?",
      swali_en: "What special jurisdiction does the High Court have?",
      muongozo: "Taja mamlaka ya 'Judicial Review' na tafsiri ya Katiba (Art. 107A).",
      jibu_en: "The High Court has unlimited jurisdiction. It can review administrative actions of the government and has the authority to declare laws or government actions unconstitutional."
    },
    {
      id: 5,
      cat: "Judicial Practice",
      swali_sw: "Uandishi wa hukumu hubadilikaje kutoka Mahakama ya Hakimu Mkazi hadi Mahakama ya Rufaa?",
      swali_en: "How does the documentation of judgment differ between the courts?",
      muongozo: "Rufaa hutoa uchambuzi wa kina wa kisheria (comprehensive legal analysis).",
      jibu_en: "Judgments in lower courts focus on evidence and facts. At the Court of Appeal, judgments are more detailed with extensive legal analysis as they set binding precedents."
    },
    {
      id: 6,
      cat: "Procedure",
      swali_sw: "Ni hatua gani zinafuata baada ya mahakama kutoa hukumu?",
      swali_en: "What are the next steps after a court has delivered a judgment?",
      muongozo: "Taja rufaa (Appeal) au utekelezaji (Execution).",
      jibu_en: "The losing party can file an appeal within the allowed timeframe (e.g., 30 days). The winning party may seek to enforce the judgment through execution (e.g., seizing property)."
    },
    {
      id: 7,
      cat: "Independence",
      swali_sw: "Elezea umuhimu wa uhuru wa mahakama katika utendaji wa kazi zao.",
      swali_en: "Explain the importance of judicial independence in the work of courts.",
      muongozo: "Uhuru dhidi ya ushawishi wa kisiasa au kibiashara.",
      jibu_en: "Judicial independence ensures judges make decisions based on law and conscience, free from outside pressure, which is crucial for upholding the rule of law."
    },
    {
      id: 8,
      cat: "Case Prep",
      swali_sw: "Ni mbinu gani unazotumia katika uandishi wa muhtasari wa kesi (case summary)?",
      swali_en: "What methods do you use in preparing a case summary before a hearing?",
      muongozo: "Kusoma pleadings (plaint/charge sheet) na kubaini hoja kuu.",
      jibu_en: "I review all pleadings, identify the legal issues and material facts, and outline the main arguments. I also use databases like TanzLII to find relevant precedents."
    },
    {
      id: 9,
      cat: "ADR",
      swali_sw: "Toa mfano wa njia mbadala za kusuluhisha kesi (ADR) bila kuingia mahakamani.",
      swali_en: "Give an example of an alternative dispute resolution (ADR) method.",
      muongozo: "Taja Arbitration na Mediation.",
      jibu_en: "Arbitration involves a private arbitrator delivering a binding award. Mediation is where a neutral third party helps the parties negotiate a settlement."
    },
    {
      id: 10,
      cat: "Ethics",
      swali_sw: "Ushawishi wa vyombo vya habari unaweza kuathiri vipi kesi mahakamani?",
      swali_en: "How can media influence affect a court case?",
      muongozo: "Majaji lazima wabaki upande wowote (impartial) licha ya kelele za umma.",
      jibu_en: "Media attention can put pressure on a case, but judges must remain impartial and base rulings solely on law and evidence, disregarding public sentiment."
    },
    {
      id: 11,
      cat: "Judicial Ethics",
      swali_sw: "Nini muhimu kuelewa kuhusu maadili ya kazi ya Mahakama (Judicial ethics)?",
      swali_en: "What is important to understand about judicial ethics?",
      muongozo: "Haki, uwazi, na kuepuka 'Conflict of Interest'.",
      jibu_en: "Judicial ethics require judges to act fairly and avoid conflicts of interest. They should not discuss cases outside court or have personal stakes in the outcomes."
    },
    {
      id: 12,
      cat: "Precedent",
      swali_sw: "Ina maana gani “precedent” katika uamuzi wa kesi?",
      swali_en: "What does “precedent” mean in judicial decisions?",
      muongozo: "Kesi za mwongozo kutoka mahakama za juu (Stare Decisis).",
      jibu_en: "Precedent is a previous court decision that guides later cases. Higher court judgments serve as binding rules for lower courts in Tanzania's common law system."
    },
    {
      id: 13,
      cat: "Human Rights",
      swali_sw: "Unaelewa nini kuhusu haki za binadamu kwenye Katiba ya Tanzania?",
      swali_en: "What is your understanding of the human rights in the Tanzanian Constitution?",
      muongozo: "Rejea Kifungu cha 12-22 (Right to life, liberty, fair trial).",
      jibu_en: "The Constitution guarantees fundamental rights like equality before the law, freedom of expression, and the right to a fair trial. Courts are the primary enforcers of these rights."
    },
    {
      id: 14,
      cat: "Efficiency",
      swali_sw: "Ni hatua zipi unazopendekeza ili kuboresha utendaji kazi wa Mahakama?",
      swali_en: "What steps would you suggest to improve the efficiency of the Judiciary?",
      muongozo: "Matumizi ya ICT, kuongeza majaji, na kukuza ADR.",
      jibu_en: "I suggest increasing the number of judges, implementing electronic case management systems, and encouraging ADR to reduce court congestion."
    },
    {
      id: 15,
      cat: "Evidence",
      swali_sw: "Eleza jinsi utaandaa ushahidi katika kesi ya jinai.",
      swali_en: "Explain how you prepare evidence for a criminal case.",
      muongozo: "Kupanga physical evidence na kuandaa mashahidi (proof beyond reasonable doubt).",
      jibu_en: "I gather all physical evidence, prepare witnesses by outlining their statements, and ensure all evidence meets legal requirements for admissibility."
    },
    {
      id: 16,
      cat: "Motivation",
      swali_sw: "Kwa nini umevutiwa na taaluma ya sheria na mahakama?",
      swali_en: "Why are you interested in the legal profession and courts?",
      muongozo: "Onesha nia yako ya kutoa haki na kulinda 'Rule of Law'.",
      jibu_en: "I believe in justice and the rule of law. Working in courts allows me to contribute to fair outcomes and protect the fundamental rights of citizens."
    },
    {
      id: 17,
      cat: "Records",
      swali_sw: "Unaelewa nini kuhusu Nyaraka za Mahakama (court records)?",
      swali_en: "What do you understand about court records?",
      muongozo: "Nakala za ushahidi, maagizo, na hukumu.",
      jibu_en: "Court records include all filed documents and transcripts of proceedings. They serve as official evidence of the trial and are crucial for appeals."
    },
    {
      id: 18,
      cat: "Administration",
      swali_sw: "Ni vitu gani vinafanywa na afisa wa mahakama wakati kesi inaandaliwa?",
      swali_en: "What does a court officer do when preparing for a hearing?",
      muongozo: "Scheduling (listing), notifying parties, and preparing the courtroom.",
      jibu_en: "The officer schedules the hearing, notifies parties, ensures all documents are in order, and marks evidence exhibits for the trial."
    },
    {
      id: 19,
      cat: "Labor Law",
      swali_sw: "Ni mambo gani ya kimsingi kusaidia kusuluhisha mzozo wa kazi?",
      swali_en: "What basic steps can you take to help resolve a labor dispute?",
      muongozo: "Usuluhishi (Conciliation) kupitia CMA/Labor Officer.",
      jibu_en: "I would first attempt conciliation through a labor officer. If that fails, the case would move to a labor court for formal litigation."
    },
    {
      id: 20,
      cat: "Access",
      swali_sw: "Unauelewa vipi suala la upatikanaji wa huduma za kisheria kwa raia?",
      swali_en: "How do you understand the issue of access to legal services for citizens?",
      muongozo: "Msaada wa kisheria (Legal Aid) kwa wasio na uwezo.",
      jibu_en: "It means everyone should be able to consult a lawyer. Legal aid frameworks like LSFTZ help ensure even poor citizens can access justice."
    },

    /* GROUP 2: ATTORNEY GENERAL'S OFFICE - OAG (21-45) */
    {
      id: 21,
      cat: "AG Office",
      swali_sw: "Ofisi ya Mwanasheria Mkuu ina jukumu gani kuu kwa serikali?",
      swali_en: "What is the primary role of the AG’s Office to the government?",
      muongozo: "Mshauri mkuu wa kisheria (Principal Legal Advisor) - Art. 59.",
      jibu_en: "The OAG advises the government on all legal matters, vets contracts and treaties, drafts legislation, and represents the state in court."
    },
    {
      id: 22,
      cat: "Advice",
      swali_sw: "Ni maeneo gani ya sheria ambayo AG anamshauri Serikali?",
      swali_en: "Which areas of law does the AG advise the government on?",
      muongozo: "Mikataba, mikataba ya kimataifa, utawala, na kodi.",
      jibu_en: "The AG advises on drafting laws, reviewing international treaties, government procurement, and constitutional issues affecting policy."
    },
    {
      id: 23,
      cat: "Solicitor General",
      swali_sw: "Elezea jinsi OAG inavyohusiana na Ofisi ya Wakili Mkuu (Solicitor General).",
      swali_en: "Explain the relationship between OAG and the Solicitor General.",
      muongozo: "Solicitor General anasimamia litigation (uendeshaji wa kesi).",
      jibu_en: "The Solicitor General handles day-to-day litigation and represents the state, working under the overarching advice and mandate of the Attorney General."
    },
    {
      id: 24,
      cat: "AG Act",
      swali_sw: "Nini kinaelezwa kwenye Sheria ya OAG ya 2008 kuhusu madaraka ya AG?",
      swali_en: "What does the AG Act of 2008 say about the AG's powers?",
      muongozo: "Cap 268: Majukumu ya kutoa ushauri na kusimamia mawakili wa serikali.",
      jibu_en: "It outlines the AG's duties in preparing government contracts, vetting treaties, and overseeing all state attorneys working in government institutions."
    },
    {
      id: 25,
      cat: "International",
      swali_sw: "Uwiano gani kati ya sheria za kitaifa na mikataba ya kimataifa?",
      swali_en: "How do national laws and international treaties interact?",
      muongozo: "Treaty vetting kuhakikisha haipingani na Katiba.",
      jibu_en: "OAG vets treaties for compliance with the Constitution. In Tanzania, treaties must be domesticated by Parliament before they are fully enforceable."
    },
    {
      id: 26,
      cat: "State Attorney",
      swali_sw: "Taja kazi muhimu za State Attorney katika ofisi ya OAG.",
      swali_en: "Name key tasks of a State Attorney in the OAG.",
      muongozo: "Kutoa legal opinions, vetting, na represent serikali mahakamani.",
      jibu_en: "They draft legal opinions for ministries, review procurement documents, and represent the government in civil and criminal litigation."
    },
    {
      id: 27,
      cat: "Privilege",
      swali_sw: "Nini ni 'Government privilege' (siri ya serikali)?",
      swali_en: "What is Government privilege (state privilege)?",
      muongozo: "Ulinzi wa taarifa za usalama wa taifa dhidi ya kufunuliwa mahakamani.",
      jibu_en: "It allows the government to withhold sensitive info (like defense or intelligence) from court disclosure if it would harm national security."
    },
    {
      id: 28,
      cat: "Collaboration",
      swali_sw: "Kwa nini kushirikiana na maafisa wengine wa serikali ni muhimu kwa AG?",
      swali_en: "Why is collaboration with other government officers important for the AG?",
      muongozo: "Ushauri wa kisheria lazima uendane na sera (policy) ya serikali.",
      jibu_en: "Collaboration ensures that legal solutions fit practical needs and that the government speaks with one voice legally across all ministries."
    },
    {
      id: 29,
      cat: "Conflict Resolution",
      swali_sw: "Ni migezo gani unazingatia unaposuluhisha migogoro ya kisheria?",
      swali_en: "What criteria do you consider when you resolve legal conflicts?",
      muongozo: "Haki, ufanisi (efficiency), na maslahi ya taifa.",
      jibu_en: "I consider the rule of law, fairness, cost-effectiveness, and ensuring the final resolution protects the national interest."
    },
    {
      id: 30,
      cat: "Interpretation",
      swali_sw: "Serikali ikipoteza kesi kuhusu ufasiri wa sheria, utawaelewesha vipi wizara?",
      swali_en: "How would you explain a lost interpretation case to the ministry?",
      muongozo: "Soma uamuzi, toa muhtasari (memo), na mbinu za marekebisho ya sheria.",
      jibu_en: "I would summarize the court's reasoning clearly in a memo, explain the legal implications, and suggest necessary policy or legislative changes."
    },
    {
      id: 31,
      cat: "Article 59",
      swali_sw: "Elezea umuhimu wa Kifungu cha 59 cha Katiba kwa OAG.",
      swali_en: "Explain the importance of Article 59 of the Constitution.",
      muongozo: "Msingi wa kisheria wa jukumu la AG.",
      jibu_en: "It is the source of the AG's power, designating the office as the principal advisor, ensuring all state legal acts have a constitutional mandate."
    },
    {
      id: 32,
      cat: "Ethics",
      swali_sw: "Nini asili ya maadili katika Ofisi ya AG?",
      swali_en: "What is the nature of ethics in the AG's Office?",
      muongozo: "Usiri (confidentiality), uadilifu, na uzalendo.",
      jibu_en: "It requires high integrity and confidentiality to protect state secrets while ensuring justice and the rule of law are upheld for the public good."
    },
    {
      id: 33,
      cat: "Metrics",
      swali_sw: "Ni vipimo gani unatumia kutathmini ufanisi wa kazi yako OAG?",
      swali_en: "What metrics would you use to evaluate your effectiveness?",
      muongozo: "Ubora wa legal opinions, idadi ya kesi zilizoshinda, na muda (turnaround time).",
      jibu_en: "I use quality of research, success rate in litigation, feedback from ministries, and the timeliness of contract vetting."
    },
    {
      id: 34,
      cat: "Parliament",
      swali_sw: "Elezea mchango wa OAG katika mchakato wa Bunge.",
      swali_en: "Explain the role of the AG’s Office in the parliamentary process.",
      muongozo: "Utungaji sheria (Legislative drafting).",
      jibu_en: "The AG's team assists in drafting bills, reviews amendments during committee stages, and ensures proposed laws align with the Constitution."
    },
    {
      id: 35,
      cat: "Skills",
      swali_sw: "Umahiri gani ni muhimu kama Mwanasheria wa Serikali?",
      swali_en: "What are essential skills as a government lawyer?",
      muongozo: "Legal research, drafting, na diplomacy.",
      jibu_en: "Strong analytical skills, clear legal writing, negotiation ability, and a deep understanding of administrative and public law."
    },
    {
      id: 36,
      cat: "ADR in OAG",
      swali_sw: "Mbinu za ADR zinawezaje kutumika katika ofisi yako serikalini?",
      swali_en: "How can ADR be applied in your government office?",
      muongozo: "Kushauri wizara kutumia arbitration kwenye mikataba mikubwa.",
      jibu_en: "We include arbitration clauses in contracts to resolve disputes faster and cheaper than traditional litigation, preserving business relationships."
    },
    {
      id: 37,
      cat: "Case Knowledge",
      swali_sw: "Taja kesi yoyote ya Mahakama inayoelezea vipengele vya kazi yako.",
      swali_en: "Mention a court case that illustrates aspects of your work.",
      muongozo: "Taja kesi maarufu ya mkataba au ya kikatiba (e.g., Election petition).",
      jibu_en: "Cases like those involving government procurement challenges illustrate the need for meticulous vetting of contracts by state attorneys."
    },
    {
      id: 38,
      cat: "Drafting",
      swali_sw: "Je, unafahamu mchakato wa uandishi wa sheria (legislative drafting)?",
      swali_en: "Are you familiar with the legislative drafting process?",
      muongozo: "Proposal -> Cabinet -> Draft -> Parliament -> Assent.",
      jibu_en: "Yes, it involves translating policy into law, drafting the bill, getting cabinet approval, and then taking it through the readings in Parliament for the President's assent."
    },
    {
      id: 39,
      cat: "Quality Control",
      swali_sw: "Ni mbinu gani za udhibiti wa ubora unazotumia?",
      swali_en: "What quality control measures do you use?",
      muongozo: "Peer review na checklists.",
      jibu_en: "I implement peer review where a senior lawyer checks drafts, use standardized checklists, and conduct regular internal legal audits."
    },
    {
      id: 40,
      cat: "Experience",
      swali_sw: "Ulipata uzoefu gani wa serikali wakati wa masomo yako?",
      swali_en: "What public service experience did you have during your studies?",
      muongozo: "Taja internships au msaada wa kisheria (legal aid clinics).",
      jibu_en: "I interned at a government legal unit where I assisted with legal research and drafting memos for state attorneys."
    },

    /* GROUP 3: PRIVATE LAW FIRMS (41-65) */
    {
      id: 41,
      cat: "Law Firm",
      swali_sw: "Kwa nini ulichagua kujiunga na kampuni yetu ya sheria?",
      swali_en: "Why have you chosen to join our law firm?",
      muongozo: "Onyesha utafiti wako kuhusu specialty ya kampuni.",
      jibu_en: "I am impressed by your firm's reputation in commercial law. My skills in contract drafting align perfectly with your client portfolio."
    },
    {
      id: 42,
      cat: "Interests",
      swali_sw: "Elezea maeneo ya Sheria unayopenda zaidi.",
      swali_en: "Describe which areas of law interest you the most.",
      muongozo: "Corporate, Intellectual Property, au Litigation.",
      jibu_en: "I am particularly drawn to Corporate Law and IP protection, as I enjoy the complexity of business transactions and innovations."
    },
    {
      id: 43,
      cat: "Improvement",
      swali_sw: "Ni hatua gani unazochukua ili kuboresha ujuzi wako wa kisheria?",
      swali_en: "What steps will you take to improve your legal skills?",
      muongozo: "CLE (Continuing Legal Education) na mentorship.",
      jibu_en: "I participate in TLS seminars, read recent law reports, and seek feedback from senior partners to refine my advocacy and research."
    },
    {
      id: 44,
      cat: "Drafting",
      swali_sw: "Elezea uzoefu wako katika kuandika hati za kisheria (contracts/pleadings).",
      swali_en: "Describe your experience in drafting legal documents.",
      muongozo: "Pleadings, Chamber Summons, na Mikataba.",
      jibu_en: "I have experience drafting plaints and commercial contracts, focusing on precision and including all material facts to protect client interests."
    },
    {
      id: 45,
      cat: "Research",
      swali_sw: "Ni uzoefu gani unaonyesha uwezo wako katika utafiti wa kisheria?",
      swali_en: "What experience demonstrates your legal research skills?",
      muongozo: "Matumizi ya TanzLII na law textbooks.",
      jibu_en: "In university, I researched complex IP issues using multiple databases to prepare winning moot court arguments."
    },
    {
      id: 46,
      cat: "Commercial Law",
      swali_sw: "Je, unafahamiana na sheria za biashara za Tanzania? Taja mifano.",
      swali_en: "Are you familiar with Tanzanian commercial laws?",
      muongozo: "Companies Act, Law of Contract Act, na Sale of Goods Act.",
      jibu_en: "Yes, I am familiar with the Companies Act 2002 for corporate governance and the Law of Contract Act for commercial agreements."
    },
    {
      id: 47,
      cat: "Extracurricular",
      swali_sw: "Ni ujuzi gani mwingine unaoleta kazini?",
      swali_en: "What other skills do you bring to the job?",
      muongozo: "Lugha, IT skills, au leadership.",
      jibu_en: "I bring strong digital research skills, fluency in English/Swahili, and leadership experience from student law societies."
    },
    {
      id: 48,
      cat: "TLS",
      swali_sw: "Umejifunza nini kuhusu Tanganyika Law Society (TLS)?",
      swali_en: "What have you learned about the Tanganyika Law Society (TLS)?",
      muongozo: "Baraza la wanasheria (Bar Association) - Cap 307.",
      jibu_en: "TLS is the bar association regulating advocates in mainland TZ, ensuring ethical conduct and promoting the rule of law."
    },
    {
      id: 49,
      cat: "Registration",
      swali_sw: "Je, umeandikishwa kwenye Baraza la Wanasheria (TLS)?",
      swali_en: "Are you registered with the TLS?",
      muongozo: "Kwa fresh graduate, sema mpango wa kwenda LST.",
      jibu_en: "I am finishing my LLB and plan to attend the Law School of Tanzania to become eligible for admission to the Bar and TLS."
    },
    {
      id: 50,
      cat: "Workload",
      swali_sw: "Unashughulikiaje wateja wengi wenye madai tofauti kwa wakati mmoja?",
      swali_en: "How do you handle many clients at the same time?",
      muongozo: "Prioritization na case management.",
      jibu_en: "I use task management tools to track deadlines, prioritize based on urgency, and maintain regular communication with all clients."
    },
    {
      id: 51,
      cat: "Terminology",
      swali_sw: "Ni mbinu gani unazotumia kujifunza maneno mapya ya sheria?",
      swali_en: "What methods do you use to learn new legal terminology?",
      muongozo: "Legal dictionaries na kusoma majarida.",
      jibu_en: "I regularly use Black's Law Dictionary and review recent judgments to stay updated on modern legal language."
    },
    {
      id: 52,
      cat: "Teamwork",
      swali_sw: "Elezea uzoefu wako wa kufanya kazi ndani ya timu ndogo ya sheria.",
      swali_en: "Describe your experience working in a small legal team.",
      muongozo: "Collaboration na kusaidiana kwenye utafiti.",
      jibu_en: "I've worked on small teams for moot courts and internships, where we divided research tasks and reviewed each other's work for quality."
    },
    {
      id: 53,
      cat: "Knowledge Gap",
      swali_sw: "Unafanya nini wakati haujui majibu ya mteja?",
      swali_en: "What do you do when you don't know the answers for a client?",
      muongozo: "Honesty na utafiti zaidi (I will find out).",
      jibu_en: "I am honest but reassuring; I tell the client I will perform deep research to provide the most accurate answer, then consult senior partners."
    },
    {
      id: 54,
      cat: "Communication",
      swali_sw: "Umefanya nini ili kuthibitisha ubora wa mawasiliano yako?",
      swali_en: "What have you done to demonstrate your communication skills?",
      muongozo: "Moot court presentations au kuelimisha umma.",
      jibu_en: "I participated in moot courts where clear advocacy is key, and I’ve explained complex laws to rural clients in simple language."
    },
    {
      id: 55,
      cat: "Mentoring",
      swali_sw: "Je, una uzoefu wa kuwaongoza (mentoring) wengine?",
      swali_en: "Do you have experience mentoring others?",
      muongozo: "Kusaidia wanafunzi wa mwaka wa kwanza (juniors).",
      jibu_en: "As a senior student, I mentored first-year students in legal research and drafting, helping them find relevant case law."
    },
    {
      id: 56,
      cat: "Filing",
      swali_sw: "Ni mbinu gani unazotumia kurekodi na kufuatilia nyaraka?",
      swali_en: "What methods do you use to file and organize documents?",
      muongozo: "Digital na physical filing (indexing).",
      jibu_en: "I use consistent naming conventions for digital folders and maintain a master index for physical case files to ensure quick retrieval."
    },
    {
      id: 57,
      cat: "Case Law",
      swali_sw: "Tuambie kuhusu uamuzi wowote wa hivi karibuni wa Mahakama.",
      swali_en: "Tell us about a recent court decision you are aware of.",
      muongozo: "Taja kesi yoyote maarufu ya mwaka 2023-2025.",
      jibu_en: "I follow recent High Court decisions on labor disputes, which illustrate how the court balances employer rights and employee protections."
    },
    {
      id: 58,
      cat: "Moot",
      swali_sw: "Elezea wakati uliowahi kushinda shindano la moot.",
      swali_en: "Describe a time you won a moot court competition.",
      muongozo: "Sisitiza utafiti na 'Oral advocacy'.",
      jibu_en: "Our team won by performing deep research on constitutional law and presenting clear, persuasive arguments before the judges."
    },
    {
      id: 59,
      cat: "Client Type",
      swali_sw: "Ni aina gani ya mteja unayefurahia zaidi kushirikiana naye?",
      swali_en: "What type of client do you enjoy working with the most?",
      muongozo: "Wateja wenye malengo wazi na wanaothamini ushauri wa kitaalamu.",
      jibu_en: "I enjoy working with entrepreneurs who are collaborative and understand the importance of legal due diligence in business."
    },
    {
      id: 60,
      cat: "Administration",
      swali_sw: "Una uzoefu gani wa kusimamia mahakama au utawala?",
      swali_en: "What experience do you have with court administration?",
      muongozo: "Filing na dockets management.",
      jibu_en: "During my internship, I managed the office docket, ensuring all court dates were recorded and hearing bundles were prepared on time."
    },

    /* GROUP 4: GOVERNMENT AGENCIES & NGOs (61-85) */
    {
      id: 61,
      cat: "Ministry",
      swali_sw: "Unajua nini kuhusu Wizara ya Katiba na Mambo ya Sheria?",
      swali_en: "What do you know about the Ministry of Constitutional and Legal Affairs?",
      muongozo: "Simamia haki, utawala bora, na marekebisho ya sheria.",
      jibu_en: "It is responsible for legal policy, human rights, and coordinating the justice sector to ensure access to justice for all citizens."
    },
    {
      id: 62,
      cat: "Regulation",
      swali_sw: "Serikali inavyodhibiti maafisa kisheria katika taasisi za umma?",
      swali_en: "How does the government regulate legal officers in public institutions?",
      muongozo: "Public Service Act na Kanuni za OAG.",
      jibu_en: "Legal officers are bound by public service regulations and the Attorney General’s Discharge of Duties Act regarding their conduct and duties."
    },
    {
      id: 63,
      cat: "Public Service Act",
      swali_sw: "Je, una maarifa kuhusu Sheria ya Huduma za Umma?",
      swali_en: "Are you knowledgeable about the Public Service Act?",
      muongozo: "Hiring, promotions, na nidhamu za watumishi wa umma.",
      jibu_en: "Yes, it governs the civil service structure, ensuring merit-based recruitment and defining the ethical conduct of public officers."
    },
    {
      id: 64,
      cat: "Government Property",
      swali_sw: "Taja sheria unayoijua kuhusu umiliki wa mali ya serikali.",
      swali_en: "Name any laws regarding ownership of government property.",
      muongozo: "Government Proceedings Act na Public Finance Act.",
      jibu_en: "The Public Finance Act regulates how government assets are managed and protected, while the Land Act governs state land use."
    },
    {
      id: 65,
      cat: "Procurement",
      swali_sw: "Je, una uelewa gani wa sheria ya Manunuzi (Procurement)?",
      swali_en: "What do you understand about government procurement laws?",
      muongozo: "Public Procurement Act na mifumo kama NeST.",
      jibu_en: "Procurement laws ensure transparency and competition. All government buying must follow strict bidding and evaluation procedures."
    },
    {
      id: 66,
      cat: "BRELA",
      swali_sw: "Taja mamlaka ya sheria inayobeba jukumu la uchumi serikalini.",
      swali_en: "Mention a statutory authority that handles economic activities.",
      muongozo: "Taja BRELA (Business registration) au TIC (Investment).",
      jibu_en: "BRELA handles business registration and licensing, which is critical for regulating economic activities in Tanzania."
    },
    {
      id: 67,
      cat: "Legal Aid",
      swali_sw: "Unafahamu nini kuhusu misingi ya Msaada wa Kisheria (Legal Aid)?",
      swali_en: "What do you know about Legal Aid frameworks?",
      muongozo: "Legal Aid Act 2017.",
      jibu_en: "Tanzania has a legal framework to provide free services to indigent people, recognizing paralegals as part of the justice system."
    },
    {
      id: 68,
      cat: "Motivation",
      swali_sw: "Je, unatafuta nini kushawishi ajira kwenye wizara?",
      swali_en: "What are you looking to achieve in a ministry?",
      muongozo: "Public service na kuchangia kwenye sera za kitaifa.",
      jibu_en: "I want to apply my legal skills to serve the public interest and ensure government actions comply with the rule of law."
    },
    {
      id: 69,
      cat: "Rights",
      swali_sw: "Nini kitasisitiza haki za msingi katika majukumu yako?",
      swali_en: "How would you emphasize fundamental rights in your duties?",
      muongozo: "Kuhakikisha sheria mpya hazikiuki Katiba.",
      jibu_en: "I will ensure that all administrative decisions and drafted laws respect the Bill of Rights as enshrined in the Constitution."
    },
    {
      id: 70,
      cat: "Volunteer",
      swali_sw: "Ni kazi gani ya serikali umewahi kujitolea?",
      swali_en: "Have you ever volunteered for any government service?",
      muongozo: "Taja voter education au legal clinics.",
      jibu_en: "I volunteered in a legal aid clinic organized by the local government to help citizens understand their land rights."
    },
    {
      id: 71,
      cat: "NGO Act",
      swali_sw: "Unajua nini kuhusu Sheria ya NGO ya Tanzania?",
      swali_en: "What do you know about the NGO Act of Tanzania?",
      muongozo: "Registration, coordination, na reporting requirements.",
      jibu_en: "The Act requires NGOs to register with the Registrar of NGOs, operate as non-profits, and submit annual audited reports."
    },
    {
      id: 72,
      cat: "NGO Registration",
      swali_sw: "Taja taratibu za usajili wa NGO nchini.",
      swali_en: "State the key procedures for registering an NGO.",
      muongozo: "Katiba (Constitution), malengo, na kibali cha bodi ya NGO.",
      jibu_en: "Registration involves submitting a constitution and proof of non-profit objectives to the NGO Coordination Board for approval."
    },
    {
      id: 73,
      cat: "NGO Taxes",
      swali_sw: "Sheria gani za kodi hutumika kwa NGOs?",
      swali_en: "What tax laws apply to NGOs?",
      muongozo: "Income Tax (exemptions) na VAT (on imports).",
      jibu_en: "NGOs are generally tax-exempt on charitable income but must pay taxes on any commercial side-activities and staff PAYE."
    },
    {
      id: 74,
      cat: "Collaboration",
      swali_sw: "Elezea ushirikiano kati ya Serikali na NGOs.",
      swali_en: "Explain the collaboration between government and NGOs.",
      muongozo: "Partnerships kwenye afya, elimu, na haki za binadamu.",
      jibu_en: "They collaborate on development projects; NGOs often implement community programs while following government regulatory frameworks."
    },
    {
      id: 75,
      cat: "NGO Ethics",
      swali_sw: "Kanuni zipi za maadili NGO inapaswa kufuata kwenye haki za binadamu?",
      swali_en: "What ethical principles should an NGO follow in human rights?",
      muongozo: "Impartiality, confidentiality, na respect.",
      jibu_en: "NGOs must act impartially, protect victim confidentiality, and uphold the dignity of all individuals they serve."
    },
    {
      id: 76,
      cat: "NGO Assistance",
      swali_sw: "Ni jinsi gani unavyoweza kusaidia NGO kama mwanasheria?",
      swali_en: "How can you assist an NGO as a lawyer?",
      muongozo: "Compliance, contract drafting, na legal advocacy.",
      jibu_en: "I can ensure they follow the NGO Act, draft employment contracts for their staff, and represent them in public interest litigation."
    },
    {
      id: 77,
      cat: "Public Affairs",
      swali_sw: "Umefanyaje kazi katika majarida ya mambo ya umma?",
      swali_en: "Have you worked on publications related to public affairs?",
      muongozo: "Kuelimisha jamii kuhusu haki zao.",
      jibu_en: "I wrote articles for university journals explaining the impact of new laws on citizens' everyday lives."
    },
    {
      id: 78,
      cat: "Transparency",
      swali_sw: "Sheria gani zinadhibiti uwazi kwa mashirika ya kiraia?",
      swali_en: "What laws govern transparency in civil society?",
      muongozo: "NGO Act (audited reports) na Public Finance Act (kama wanatumia public funds).",
      jibu_en: "NGOs must file annual reports and audits. The NGO Registrar monitors their sources of funding for transparency."
    },
    {
      id: 79,
      cat: "Investigations",
      swali_sw: "Maoni yako kuhusu uchunguzi huru wa ukiukwaji wa haki?",
      swali_en: "Your view on independent investigations of rights violations?",
      muongozo: "Umuhimu wa taasisi kama CHRAGG.",
      jibu_en: "Independent investigations are vital for accountability and building public trust in the justice system."
    },
    {
      id: 80,
      cat: "Good Governance",
      swali_sw: "Je, una uzoefu au ujuzi wa mbinu za utawala bora (Good Governance)?",
      swali_en: "Do you have experience with good governance practices?",
      muongozo: "Transparency, Accountability, na Rule of Law.",
      jibu_en: "I've studied these principles and advocate for clear reporting lines and transparent decision-making in all institutions."
    },
    {
      id: 81,
      cat: "Social Projects",
      swali_sw: "Taja miradi yoyote ya kijamii uliyoshiriki.",
      swali_en: "Name any social projects you have participated in.",
      muongozo: "Legal aid clinics au civic education.",
      jibu_en: "I participated in a project teaching school children about the Constitution and their democratic rights."
    },
    {
      id: 82,
      cat: "Volunteer",
      swali_sw: "Uko tayari kufanya kazi bila mshahara kama mwanachama wa NGO?",
      swali_en: "Are you ready to do unpaid work as an NGO volunteer?",
      muongozo: "Sisitiza thamani ya 'Pro Bono' work.",
      jibu_en: "Yes, I value pro bono work and am willing to volunteer my legal skills to help vulnerable communities."
    },
    {
      id: 83,
      cat: "Job Ads",
      swali_sw: "Nini unaweza kusema kuhusu Tangazo la Kazi ya Serikali la PSRS?",
      swali_en: "What do you know about Government Job Ads (PSRS)?",
      muongozo: "Merit-based recruitment kupitia Ajira Portal.",
      jibu_en: "The PSRS uses a merit-based system through the Ajira Portal to ensure fair and transparent recruitment into the public service."
    },
    {
      id: 84,
      cat: "Failure",
      swali_sw: "Elezea nini kinatokea mgombea akishindwa usaili wa Serikali.",
      swali_en: "What happens if a candidate fails a government interview?",
      muongozo: "Kuboresha sifa na kuomba tena nafasi zijazo.",
      jibu_en: "If a candidate fails, they are encouraged to improve their skills and can re-apply for future vacancies on the Ajira Portal."
    },
    {
      id: 85,
      cat: "Distinction",
      swali_sw: "Ni ujuzi gani wa ziada utakuweka tofauti serikalini?",
      swali_en: "What additional skills will distinguish you in government?",
      muongozo: "Bilingual skills, IT proficiency, na policy analysis.",
      jibu_en: "My ability to use legal databases effectively and analyze policy impacts distinguishes me as a modern, efficient legal officer."
    },

    /* GROUP 5: BEHAVIORAL & MISC (86-100) */
    {
      id: 86,
      cat: "Differences",
      swali_sw: "Nini tofauti ya kazi ya wizara dhidi ya kampuni binafsi?",
      swali_en: "What is the difference between working for a ministry vs a private firm?",
      muongozo: "Public policy vs Client interest.",
      jibu_en: "A ministry focuses on public policy and state interests, while a private firm is client-driven and commercially focused."
    },
    {
      id: 87,
      cat: "Public Admin",
      swali_sw: "Taja kanuni za utawala wa umma unazozingatia.",
      swali_en: "Mention important public admin principles you adhere to.",
      muongozo: "Accountability, Integrity, na Impartiality.",
      jibu_en: "I adhere to integrity and impartiality, ensuring all government legal work is done without bias and remains accountable to the law."
    },
    {
      id: 88,
      cat: "Superior Instructions",
      swali_sw: "Unafuatilia vipi maagizo ya Mkuu wako serikalini?",
      swali_en: "How do you follow your superior’s instructions?",
      muongozo: "Listening, clarification, na execution.",
      jibu_en: "I listen carefully, ask for clarifications if needed, and execute tasks diligently while keeping my supervisor updated."
    },
    {
      id: 89,
      cat: "Social Welfare",
      swali_sw: "Kwenye ustawi wa umma, nini unachokibaini kuwa kinahitajika?",
      swali_en: "In public welfare, what do you identify as necessary?",
      muongozo: "Ulinzi wa wanyonge (Protection of the vulnerable).",
      jibu_en: "Effective laws that protect children, the elderly, and workers are necessary to ensure a just and prosperous society."
    },
    {
      id: 90,
      cat: "Time Management",
      swali_sw: "Ni mbinu gani za usimamizi wa wakati unazotumia?",
      swali_en: "What time management techniques do you use?",
      muongozo: "Prioritizing and scheduling (Time-blocking).",
      jibu_en: "I use daily to-do lists and prioritize tasks by their legal deadlines and complexity to ensure efficiency."
    },
    {
      id: 91,
      cat: "Conflict",
      swali_sw: "Utafanya nini ukijua agizo la bosi wako ni kinyume na sheria?",
      swali_en: "What if your boss's instruction is illegal?",
      muongozo: "Mshauri kisheria kwa ufasaha (Rule of Law).",
      jibu_en: "I would respectfully point out the legal conflict and advise on a lawful alternative to achieve the same policy objective."
    },
    {
      id: 92,
      cat: "Ethics",
      swali_sw: "Mkandarasi akikupa 'hongo' ili upitishe mkataba wake utafanya nini?",
      swali_en: "What if a contractor offers a bribe for a contract?",
      muongozo: "Kataa na ripoti (Anti-corruption compliance).",
      jibu_en: "I would firmly refuse and report the incident to the relevant authorities, as integrity is non-negotiable in public service."
    },
    {
      id: 93,
      cat: "Communication",
      swali_sw: "Unawezaje kuelezea sheria ngumu kwa mwananchi wa kawaida?",
      swali_en: "How do you explain complex laws to a layman?",
      muongozo: "Lugha rahisi (Simple language) na mifano.",
      jibu_en: "I avoid legalese and use everyday examples to ensure the citizen understands their rights and obligations clearly."
    },
    {
      id: 94,
      cat: "Technology",
      swali_sw: "Je, uko tayari kutumia mifumo ya kielektroniki mahakamani?",
      swali_en: "Are you ready to use e-court systems?",
      muongozo: "Modernization of judiciary.",
      jibu_en: "Yes, I am proficient in digital tools and support the move towards e-filing and virtual hearings for faster justice."
    },
    {
      id: 95,
      cat: "Stress",
      swali_sw: "Unahimili vipi presha ya kesi nzito?",
      swali_en: "How do you handle the pressure of heavy cases?",
      muongozo: "Organization na focus.",
      jibu_en: "I stay organized, break the case into manageable parts, and maintain focus on the core legal issues to prevent being overwhelmed."
    },
    {
      id: 96,
      cat: "Teamwork",
      swali_sw: "Nini siri ya mafanikio kwenye timu ya sheria?",
      swali_en: "What is the secret to success in a legal team?",
      muongozo: "Sharing research na respect.",
      jibu_en: "Open communication, sharing research findings, and respecting each other's specialized knowledge are key."
    },
    {
      id: 97,
      cat: "Law Reform",
      swali_sw: "Sheria gani ungependa kuona inafanyiwa marekebisho Tanzania?",
      swali_en: "Which law would you like to see reformed in TZ?",
      muongozo: "Taja sheria yoyote ya zamani (archaic laws).",
      jibu_en: "I would like to see further reform in cyber-laws to better protect digital rights while ensuring cybersecurity."
    },
    {
      id: 98,
      cat: "Learning",
      swali_sw: "Unajifunza vipi sheria mpya zinazotungwa?",
      swali_en: "How do you learn about new laws?",
      muongozo: "Gazeti la Serikali (Government Gazette).",
      jibu_en: "I regularly check the Government Gazette and follow briefings from the OAG and TLS on newly passed legislation."
    },
    {
      id: 99,
      cat: "Aesthetics",
      swali_sw: "Umuhimu wa 'Court Etiquette' (maadili ya mahakamani).",
      swali_en: "Importance of 'Court Etiquette'.",
      muongozo: "Heshima kwa jaji na taratibu za mahakama.",
      jibu_en: "It ensures that legal proceedings are conducted with dignity and respect, which is fundamental to the majesty of the law."
    },
    {
      id: 100,
      cat: "Final",
      swali_sw: "Una swali lolote kwetu?",
      swali_en: "Do you have any questions for us?",
      muongozo: "Uliza kuhusu nafasi za kukua kitaaluma.",
      jibu_en: "I would like to know how the office supports junior legal officers in obtaining their advocate certifications and further specializations."
    }
  ]
};

export default lawData;