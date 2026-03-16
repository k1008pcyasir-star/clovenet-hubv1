const procurementData = {
  id: "procurement-tanzania-100",
  title: "Procurement & Supply: 100 Professional Interview Questions",
  description: "Comprehensive database for Mainland (PPRA/NeST) and Zanzibar (ZPPRA/eProZ).",

  etiquette: [
    { title: "Transparency", content: "Kila hatua lazima iwe wazi na yenye nyaraka zinazokaguliwa." },
    { title: "Value for Money", content: "Lengo ni kupata ubora wa juu kwa gharama nafuu zaidi katika mzunguko wa maisha wa bidhaa." },
    { title: "Legal Compliance", content: "Kufuata PPA 2011 (Mainland) na PPD Act 2016 (Zanzibar)." }
  ],

  questions: [
    /* GROUP 1: PUBLIC PROCUREMENT BASICS (1-20) */
    {
      id: 1,
      cat: "Basics",
      swali_sw: "Je, ununuzi wa umma (public procurement) ni ufafanuzi gani?",
      swali_en: "What is public procurement?",
      muongozo: "Elezea mchakato wa kupata bidhaa/huduma kwa kutumia fedha za umma.",
      jibu_en: "Public procurement refers to the process by which government entities acquire goods, works, or services using public funds, ensuring transparency and value for money."
    },
    {
      id: 2,
      cat: "Structure",
      swali_sw: "Nini maana ya neno 'Accounting Officer' katika ununuzi?",
      swali_en: "What is an 'Accounting Officer'?",
      muongozo: "Msimamizi mkuu wa fedha wa shirika (e.g. Katibu Mkuu).",
      jibu_en: "The Accounting Officer is the top financial official responsible for approving procurement plans and ensuring all expenditures follow the law."
    },
    {
      id: 3,
      cat: "Units",
      swali_sw: "Je, ni idara gani zinahusika katika mchakato wa ununuzi wa umma?",
      swali_en: "Which units are involved in the public procurement process?",
      muongozo: "Taja PDU, Tender Board, na User Department.",
      jibu_en: "The Procuring and Disposal Management Unit (PDU), the Tender Board, and the User Department."
    },
    {
      id: 4,
      cat: "Planning",
      swali_sw: "Ni nini maana ya 'Procurement Plan'?",
      swali_en: "What is a 'Procurement Plan'?",
      muongozo: "Orodha ya mahitaji ya mwaka mzima na bajeti yake.",
      jibu_en: "An annual schedule of all goods and services an entity expects to procure, along with estimated costs."
    },
    {
      id: 5,
      cat: "Methods",
      swali_sw: "Eleza mbinu tofauti za ununuzi nchini Tanzania.",
      swali_en: "Explain different procurement methods in Tanzania.",
      muongozo: "Taja Open Tendering, Restricted, Emergency, na Single Source.",
      jibu_en: "Methods include Open Competitive Bidding, Restricted Tendering, Request for Quotation, and Single Source Procurement."
    },
    {
      id: 6,
      cat: "Tendering",
      swali_sw: "Tofauti kati ya Open Tender na Restricted Tender ni nini?",
      swali_en: "Difference between Open and Restricted Tendering?",
      muongozo: "Open (Umma wote), Restricted (Shortlisted firms).",
      jibu_en: "Open bidding is public; Restricted bidding invites only pre-qualified firms to submit offers."
    },
    {
      id: 7,
      cat: "Emergency",
      swali_sw: "Lini ununuzi wa dharura (emergency) unaruhusiwa?",
      swali_en: "When can emergency procurement be used?",
      muongozo: "Majanga, magonjwa, au hatari ya usalama.",
      jibu_en: "Only when unforeseen events like natural disasters or health crises create urgent needs that cannot wait for normal bidding."
    },
    {
      id: 8,
      cat: "VfM",
      swali_sw: "Vigezo gani vinabainisha 'Value for Money'?",
      swali_en: "What factors determine 'Value for Money'?",
      muongozo: "Ubora, gharama, na ufanisi.",
      jibu_en: "It is the optimal combination of quality, total lifecycle cost, and delivery time, not just the lowest price."
    },
    {
      id: 9,
      cat: "Principles",
      swali_sw: "Taja Kanuni nne kuu za ununuzi wa umma.",
      swali_en: "What are the four core principles of public procurement?",
      muongozo: "VfM, Transparency, Competition, na Integrity.",
      jibu_en: "Value for money, Transparency, Competition, and Integrity/Fairness."
    },
    {
      id: 10,
      cat: "Ethics",
      swali_sw: "Nini maana ya 'Conflict of Interest'?",
      swali_en: "What is a Conflict of Interest?",
      muongozo: "Uhusiano wa mtoa maamuzi na mtoa zabuni.",
      jibu_en: "When a procurement officer has a personal or financial relationship with a bidder, requiring them to recuse themselves."
    },
    {
      id: 11,
      cat: "Anti-Corruption",
      swali_sw: "Sheria gani inasimamia maadili na rushwa kwenye ununuzi?",
      swali_en: "What laws address ethics and corruption?",
      muongozo: "PPA 2011 na Economic Crimes Act.",
      jibu_en: "The Public Procurement Act and national anti-corruption laws (PCCB/TAKUKURU oversight)."
    },
    {
      id: 12,
      cat: "Evaluation",
      swali_sw: "Eleza mchakato wa tathmini ya zabuni (Evaluation).",
      swali_en: "Explain the bid evaluation process.",
      muongozo: "Preliminary, Technical, na Financial evaluation.",
      jibu_en: "Bids are opened publicly, then checked for completeness (Preliminary), then technical compliance, and finally price comparison."
    },
    {
      id: 13,
      cat: "Award",
      swali_sw: "Nini maana ya 'Best Evaluated Bidder'?",
      swali_en: "What is the 'Best Evaluated Bidder'?",
      muongozo: "Mshindi aliyekidhi sifa zote na bei/thamani bora zaidi.",
      jibu_en: "The bidder who meets all technical requirements and offers the lowest evaluated price according to the set criteria."
    },
    {
      id: 14,
      cat: "Documents",
      swali_sw: "Taja hati kuu za mchakato wa zabuni.",
      swali_en: "Key documents in the bidding process?",
      muongozo: "ITT, Specifications, Bid Form, na Contract.",
      jibu_en: "Invitation to Tender, Instructions to Tenderers, Specifications/ToR, and the Bid Data Sheet."
    },
    {
      id: 15,
      cat: "Cycle",
      swali_sw: "Ni hatua gani za 'Procurement Cycle'?",
      swali_en: "What are the stages of the procurement cycle?",
      muongozo: "Planning, Tendering, Evaluation, Award, Management.",
      jibu_en: "1. Planning, 2. Solicitation, 3. Evaluation, 4. Award, 5. Contract Management, 6. Post-review."
    },
    {
      id: 16,
      cat: "Local Content",
      swali_sw: "Eleza kuhusu 'Preference Schemes' kwa wazawa.",
      swali_en: "What are preference schemes for local suppliers?",
      muongozo: "Margin of preference ya 10% kwa bidhaa za ndani.",
      jibu_en: "A system that allows Tanzanian suppliers a price preference (e.g., 10%) when competing with foreign firms."
    },
    {
      id: 17,
      cat: "PPRA",
      swali_sw: "Nini nafasi ya PPRA nchini Tanzania?",
      swali_en: "What is the role of PPRA in Tanzania?",
      muongozo: "Kusimamia, kukagua, na kutoa miongozo ya ununuzi.",
      jibu_en: "The Public Procurement Regulatory Authority oversees compliance, investigates complaints, and audits procuring entities."
    },
    {
      id: 18,
      cat: "Violations",
      swali_sw: "Hatua gani huchukuliwa kanuni zikikiukwa?",
      swali_en: "Actions for violating procurement rules?",
      muongozo: "Suspension, Termination, na Blacklisting (Debarment).",
      jibu_en: "Bidders can be debarred (blacklisted), contracts terminated, and officials prosecuted."
    },
    {
      id: 19,
      cat: "Payments",
      swali_sw: "Nani anahusika kulipa mtoa huduma baada ya zabuni?",
      swali_en: "Who handles payment after contract award?",
      muongozo: "Finance/Accountant General office.",
      jibu_en: "The entity's Finance Office processes payments after the User Department confirms delivery."
    },
    {
      id: 20,
      cat: "Fraud",
      swali_sw: "Sheria gani inatumika kukiwa na ufisadi?",
      swali_en: "What rules apply during corruption or fraud?",
      muongozo: "PPA anti-corruption code.",
      jibu_en: "The process is suspended, the bid disqualified, and the case referred to TAKUKURU."
    },

    /* GROUP 2: EVALUATION & METHODS (21-40) */
    {
      id: 21,
      cat: "Training",
      swali_sw: "Elezea programu za mafunzo ya PPRA.",
      swali_en: "Describe PPRA training programs.",
      muongozo: "Vyeti vya kitaalamu vya PSPTB.",
      jibu_en: "Professionalization programs like CPSP (Certified Public Procurement and Supply Professional) and short workshops."
    },
    {
      id: 22,
      cat: "Career",
      swali_sw: "Kwa nini umechagua kazi ya ununuzi?",
      swali_en: "Why choose a career in procurement?",
      muongozo: "Kuhakikisha fedha za umma zinatumika vizuri.",
      jibu_en: "To combine logistics interest with public service by ensuring efficient use of government resources."
    },
    {
      id: 23,
      cat: "Skills",
      swali_sw: "Ujuzi gani ni muhimu kwa fresh graduate?",
      swali_en: "Key skills for a fresh graduate?",
      muongozo: "Excel, Communication, na Integrity.",
      jibu_en: "Analytical skills, numeracy, computer literacy, and high ethical standards."
    },
    {
      id: 24,
      cat: "Tasks",
      swali_sw: "Taja kazi za kila siku za Procurement Officer.",
      swali_en: "Daily tasks of a procurement officer?",
      muongozo: "Kukagua requisitions, kuandaa tender docs.",
      jibu_en: "Reviewing requests, drafting bidding documents, evaluating offers, and monitoring contracts."
    },
    {
      id: 25,
      cat: "Selection",
      swali_sw: "Vigezo gani vya msingi kuchagua wasambazaji?",
      swali_en: "Key evaluation criteria for suppliers?",
      muongozo: "Technical compliance, Price, na Delivery time.",
      jibu_en: "Technical responsiveness, financial stability, delivery schedule, and past performance."
    },
    {
      id: 26,
      cat: "Risk",
      swali_sw: "Mbinu gani za kudhibiti hatari (Risk Management)?",
      swali_en: "Risk mitigation strategies in procurement?",
      muongozo: "Bid security na performance bonds.",
      jibu_en: "Using bid securities, performance guarantees, and detailed specifications."
    },
    {
      id: 27,
      cat: "Technology",
      swali_sw: "Eleza jinsi ya kutumia teknolojia kwenye ununuzi.",
      swali_en: "How is technology used in procurement?",
      muongozo: "Mifumo ya NeST na e-GP.",
      jibu_en: "Through e-procurement portals for advertising, electronic bid submission, and evaluation."
    },
    {
      id: 28,
      cat: "Budgeting",
      swali_sw: "Umuhimu wa kuchangia kwenye bajeti ni nini?",
      swali_en: "Importance of contributing to budgeting?",
      muongozo: "Kuhakikisha fedha zipo kabla ya ununuzi.",
      jibu_en: "Ensuring funds are available for planned procurements to avoid project delays."
    },
    {
      id: 29,
      cat: "Types",
      swali_sw: "Tofauti ya ununuzi wa bidhaa, huduma na ujenzi?",
      swali_en: "Difference between goods, services, and works?",
      muongozo: "Goods (Vitu), Services (Ujuzi/Ukarabati), Works (Ujenzi).",
      jibu_en: "Goods focus on specs; Works on site visits/bonds; Services on terms of reference (ToR)."
    },
    {
      id: 30,
      cat: "Contracts",
      swali_sw: "Ni aina gani za mikataba zinatumika?",
      swali_en: "What types of contracts are used?",
      muongozo: "Lump sum, Unit price, Time-and-materials.",
      jibu_en: "Lump-sum for clear scopes, Unit-price for quantities, and Framework agreements for common items."
    },
    {
      id: 31,
      cat: "Zanzibar",
      swali_sw: "Sheria gani inasimamia Zanzibar?",
      swali_en: "Which law governs Zanzibar?",
      muongozo: "PPD Act 2016.",
      jibu_en: "Zanzibar Public Procurement and Disposal of Public Assets Act, 2016."
    },
    {
      id: 32,
      cat: "Contract Management",
      swali_sw: "Kanuni za usimamizi wa mkataba ni zipi?",
      swali_en: "Contract management principles?",
      muongozo: "Ufuatiliaji wa utekelezaji (monitoring).",
      jibu_en: "Monitoring deliverables, managing timelines, and ensuring payments match quality/delivery."
    },
    {
      id: 33,
      cat: "Fairness",
      swali_sw: "Unahakikisha vipi usawa kwenye uteuzi?",
      swali_en: "How do you ensure fairness in selection?",
      muongozo: "Kutumia vigezo vilivyowazi (public criteria).",
      jibu_en: "Applying pre-set evaluation criteria impartially and keeping the process transparent."
    },
    {
      id: 34,
      cat: "Qualifications",
      swali_sw: "Taja vigezo vya kitaaluma kwa washauri.",
      swali_en: "Qualification criteria for consultants?",
      muongozo: "Uzoefu (Experience) na CVs za wataalamu.",
      jibu_en: "Professional experience, specialized expertise, and technical/financial capacity."
    },
    {
      id: 35,
      cat: "Reserved",
      swali_sw: "Nani anazingatiwa kama 'Reserved Supplier'?",
      swali_en: "Who qualifies as a reserved supplier?",
      muongozo: "Wazawa wadogo (SMEs).",
      jibu_en: "Small and Medium Enterprises (SMEs) owned by locals for specific items like furniture/food."
    },
    {
      id: 36,
      cat: "Pressure",
      swali_sw: "Unahimili vipi presha ya muda?",
      swali_en: "How do you handle tight timelines?",
      muongozo: "Panga vipaumbele (Prioritizing).",
      jibu_en: "Breaking tasks into milestones and using procurement plans to schedule early."
    },
    {
      id: 37,
      cat: "Confidentiality",
      swali_sw: "Hatua gani unachukua kulinda siri za zabuni?",
      swali_en: "How to maintain bid confidentiality?",
      muongozo: "Kulinda data hadi siku ya ufunguzi.",
      jibu_en: "Restricting access to authorized personnel and keeping bids sealed until the public opening."
    },
    {
      id: 38,
      cat: "Market",
      swali_sw: "Unaboresha vipi ushindani sokoni?",
      swali_en: "How to improve market competition?",
      muongozo: "Kutangaza kwa upana (broad advertising).",
      jibu_en: "Reducing restrictive criteria and advertising tenders across multiple media platforms."
    },
    {
      id: 39,
      cat: "Forged Docs",
      swali_sw: "Utafanya nini ukigundua nyaraka feki?",
      swali_en: "What to do with forged documents?",
      muongozo: "Kumuondoa mzabuni (Disqualification).",
      jibu_en: "Disqualifying the bidder, reporting to the Tender Board, and referring to law enforcement."
    },
    {
      id: 40,
      cat: "Law Check",
      swali_sw: "Swali gani la maarifa huulizwa kujua kama unajua sheria?",
      swali_en: "Question to check legal knowledge?",
      muongozo: "Kuhusu Sheria ya 2011 na PPAA.",
      jibu_en: "Asking about the specific Act number or the role of the Appeals Authority (PPAA)."
    },

    /* GROUP 3: ZANZIBAR & DETAILED ROLES (41-70) */
    {
      id: 41,
      cat: "Tender Board",
      swali_sw: "Jukumu la Tender Board ni nini?",
      swali_en: "Role of the Tender Board?",
      muongozo: "Kuidhinisha uteuzi (Award approval).",
      jibu_en: "Scrutinizing evaluations and making final decisions on contract awards."
    },
    {
      id: 42,
      cat: "Bid Security",
      swali_sw: "Lini dhamana ya zabuni (Bid Security) inatakiwa?",
      swali_en: "When is bid security required?",
      muongozo: "Miradi mikubwa/yenye hatari.",
      jibu_en: "For high-value or high-risk tenders to ensure bidders are serious."
    },
    {
      id: 43,
      cat: "Collaboration",
      swali_sw: "Ushirikiano wa PDU na User Dept ukoje?",
      swali_en: "PDU and User Dept collaboration?",
      muongozo: "User anatoa specs; PDU anafuata sheria.",
      jibu_en: "User defines technical needs; PDU ensures the process follows legal procedures."
    },
    {
      id: 44,
      cat: "Timeframe",
      swali_sw: "Muda wa ufunguaji zabuni ni upi?",
      swali_en: "Timeframe for bid opening?",
      muongozo: "Mara tu baada ya muda wa mwisho (immediately).",
      jibu_en: "Immediately after the submission deadline in a public session."
    },
    {
      id: 45,
      cat: "Sustainability",
      swali_sw: "Unajumuisha vipi mazingira kwenye ununuzi?",
      swali_en: "How to include environmental considerations?",
      muongozo: "Green specifications.",
      jibu_en: "Including eco-friendly specs and using sustainable procurement guidelines."
    },
    {
      id: 46,
      cat: "Offshore",
      swali_sw: "Tofauti ya Onshore na Offshore procurement?",
      swali_en: "Onshore vs Offshore procurement?",
      muongozo: "Ndani ya nchi vs Nje ya nchi.",
      jibu_en: "Onshore supports local firms; Offshore involves international bidding and foreign currency."
    },
    {
      id: 47,
      cat: "SME Preference",
      swali_sw: "Mpango wa kipaumbele kwa SMEs ni upi?",
      swali_en: "Preference scheme for SMEs?",
      muongozo: "Sehemu ya zabuni kutengwa kwa wazawa.",
      jibu_en: "Reserving specific low-value contracts exclusively for local small businesses."
    },
    {
      id: 48,
      cat: "Pre-Contract",
      swali_sw: "Vitu gani vinaangaliwa kabla ya kusaini mkataba?",
      swali_en: "Checks before signing a contract?",
      muongozo: "Vibali vya kodi na leseni za biashara.",
      jibu_en: "Verifying tax clearance, business licenses, and non-debarment status."
    },
    {
      id: 49,
      cat: "Clarification",
      swali_sw: "Nini unajua kuhusu majadiliano (Negotiations)?",
      swali_en: "What about bid negotiations?",
      muongozo: "Zimezuiliwa isipokuwa kwa ushauri (Consultancy).",
      jibu_en: "Restricted for open tenders but allowed for clarifying scope in consultancy services."
    },
    {
      id: 50,
      cat: "PPAA",
      swali_sw: "Taasisi gani inahusika na malalamiko ya zabuni?",
      swali_en: "Body for procurement complaints?",
      muongozo: "PPAA (Mainland) / ZPPDA (Zanzibar).",
      jibu_en: "Public Procurement Appeals Authority handles disputes between bidders and entities."
    },
    /* ZANZIBAR SPECIFICS */
    {
      id: 51,
      cat: "Zanzibar Law",
      swali_sw: "Sheria gani inasimamia Zanzibar?",
      swali_en: "Law for Zanzibar?",
      muongozo: "Act No. 11 of 2016.",
      jibu_en: "Zanzibar Public Procurement and Disposal of Public Assets Act, 2016."
    },
    {
      id: 52,
      cat: "ZPPDA",
      swali_sw: "Nafasi ya ZPPDA ni nini?",
      swali_en: "Mandate of ZPPDA?",
      muongozo: "Kusimamia na kukagua ununuzi Zanzibar.",
      jibu_en: "Regulatory body ensuring compliance in Zanzibar's public entities."
    },
    {
      id: 53,
      cat: "Comparison",
      swali_sw: "Tofauti ya Sheria ya Mainland na Zanzibar?",
      swali_en: "Difference between Mainland and Zanzibar laws?",
      muongozo: "Tofauti ya kijiografia na bodi za rufaa.",
      jibu_en: "Mainland follows Act of 2011; Zanzibar follows Act of 2016 with separate institutions."
    },
    {
      id: 54,
      cat: "Zanzibar Reg",
      swali_sw: "Taratibu za usajili wasambazaji Zanzibar?",
      swali_en: "Supplier registration in Zanzibar?",
      muongozo: "Usajili kupitia ZPPDA portal.",
      jibu_en: "Bidders must submit business docs and pay fees to join the central registry."
    },
    {
      id: 55,
      cat: "Zanzibar Comm",
      swali_sw: "Nani anajumuishwa kwenye kamati Zanzibar?",
      swali_en: "Who joins committees in Zanzibar?",
      muongozo: "User Dept na PDU reps.",
      jibu_en: "Cross-functional teams including technical experts and procurement officers."
    },
    {
      id: 56,
      cat: "Zanzibar Appeal",
      swali_sw: "Utaratibu wa rufaa Zanzibar?",
      swali_en: "Appeal process in Zanzibar?",
      muongozo: "Kupitia ZPPDA au Mahakama.",
      jibu_en: "Internal review by the entity, then appeal to ZPPDA or the High Court."
    },
    {
      id: 57,
      cat: "Zanzibar Pref",
      swali_sw: "Zanzibar ina upendeleo kwa wazawa?",
      swali_en: "Local preference in Zanzibar?",
      muongozo: "Upendeleo kwa bidhaa za ndani ya Zanzibar.",
      jibu_en: "Reserved categories for local artisans and manufacturers."
    },
    {
      id: 58,
      cat: "Zanzibar Finance",
      swali_sw: "Uhusiano wa Sheria ya Fedha Zanzibar na ununuzi?",
      swali_en: "Zanzibar Finance Act vs Procurement?",
      muongozo: "PFM Act 2016.",
      jibu_en: "Ensuring funds are available before a contract is legally binding."
    },
    {
      id: 59,
      cat: "Zanzibar Public",
      swali_sw: "Rekodi gani zinawekwa wazi Zanzibar?",
      swali_en: "Public records in Zanzibar?",
      muongozo: "Tender awards na notices.",
      jibu_en: "Tender results and supplier registries maintained for transparency."
    },
    {
      id: 60,
      cat: "Zanzibar e-GP",
      swali_sw: "Nini unajua kuhusu eProZ?",
      swali_en: "What about eProZ?",
      muongozo: "Mfumo wa e-Procurement Zanzibar.",
      jibu_en: "The electronic platform launched in 2022 for digital tendering in Zanzibar."
    },
    {
      id: 61,
      cat: "Zanzibar Aid",
      swali_sw: "Ununuzi wa fedha za misaada ukoje Zanzibar?",
      swali_en: "Foreign-funded projects in Zanzibar?",
      muongozo: "Kufuata kanuni za mfadhili.",
      jibu_en: "Following both local laws and donor-specific guidelines."
    },
    {
      id: 62,
      cat: "Zanzibar PQ",
      swali_sw: "Kwa nini Prequalification inafanyika Zanzibar?",
      swali_en: "Why Prequalification in Zanzibar?",
      muongozo: "Kuchuja kampuni zenye sifa.",
      jibu_en: "Narrowing down to capable firms before the main bidding phase."
    },
    {
      id: 63,
      cat: "Zanzibar Disposal",
      swali_sw: "Sheria gani inasimamia mauzo ya mali Zanzibar?",
      swali_en: "Disposal of assets law in Zanzibar?",
      muongozo: "PPD Act 2016 Section on Disposal.",
      jibu_en: "Governed by the same 2016 Act through auctions or tenders."
    },
    {
      id: 64,
      cat: "Zanzibar Parastatals",
      swali_sw: "Mamlaka za ndani zinafuata sheria ipi Zanzibar?",
      swali_en: "Rules for parastatals in Zanzibar?",
      muongozo: "Sheria ile ile ya Zanzibar 2016.",
      jibu_en: "They follow the same Act and regulations as government ministries."
    },
    {
      id: 65,
      cat: "Zanzibar Awards",
      swali_sw: "Matokeo ya zabuni Zanzibar yanachapishwa wapi?",
      swali_en: "Where are awards published in Zanzibar?",
      muongozo: "ZPPDA portal/Official Gazette.",
      jibu_en: "In the Zanzibar Procurement Gazette or official website."
    },
    {
      id: 66,
      cat: "Zanzibar Admin",
      swali_sw: "Vitu gani vya utawala mhandisi azingatie Zanzibar?",
      swali_en: "Admin matters for a Zanzibar officer?",
      muongozo: "Kutunza rekodi za mikutano (minutes).",
      jibu_en: "Maintaining accurate files and tracking expenditure vs budget."
    },
    {
      id: 67,
      cat: "Zanzibar Ethics",
      swali_sw: "Taja maadili ya ununuzi Zanzibar.",
      swali_en: "Ethical rule in Zanzibar law?",
      muongozo: "Kifungu cha 87 (No conflict of interest).",
      jibu_en: "Prohibiting officials from contracting with entities they influence."
    },
    {
      id: 68,
      cat: "Zanzibar Records Keep",
      swali_sw: "Rekodi gani zinatunzwa Zanzibar?",
      swali_en: "Records kept in Zanzibar?",
      muongozo: "Tender files kwa miaka 5.",
      jibu_en: "Bid submissions, evaluation reports, and signed contracts."
    },
    {
      id: 69,
      cat: "Zanzibar Appeals Handling",
      swali_sw: "Zanzibar inashughulikiaje rufaa mbaya?",
      swali_en: "How Zanzibar handles unfair awards?",
      muongozo: "Review kupitia Minister.",
      jibu_en: "Multi-tier appeal system starting with the Accounting Officer."
    },
    {
      id: 70,
      cat: "Zanzibar Supplier Comm",
      swali_sw: "Mawasiliano na wasambazaji Zanzibar yakoje?",
      swali_en: "Communication with suppliers in Zanzibar?",
      muongozo: "Mawasiliano rasmi kwa maandishi.",
      jibu_en: "Formal, written, and ensuring all bidders get equal information."
    },

    /* GROUP 4: ADVANCED TOPICS (71-100) */
    {
      id: 71,
      cat: "Zanzibar Tax",
      swali_sw: "Kodi inashirikishwa vipi kwenye zabuni Zanzibar?",
      swali_en: "How are taxes handled in Zanzibar?",
      muongozo: "Bei ziandikwe bila VAT.",
      jibu_en: "Tenders are usually quoted exclusive of VAT but inclusive of duties."
    },
    {
      id: 72,
      cat: "Zanzibar Rejection",
      swali_sw: "Vigezo vya kukataa zabuni Zanzibar?",
      swali_en: "Reasons for rejecting a tender in Zanzibar?",
      muongozo: "Nyaraka zisizokamilika.",
      jibu_en: "Incomplete bids or failure to meet technical responsiveness."
    },
    {
      id: 73,
      cat: "Zanzibar Post-Signing",
      swali_sw: "Shughuli gani baada ya kusaini mkataba Zanzibar?",
      swali_en: "Post-signing activities in Zanzibar?",
      muongozo: "Inspection na payments.",
      jibu_en: "Conducting inspections and processing interim certificates."
    },
    {
      id: 74,
      cat: "Zanzibar Capacity",
      swali_sw: "Ulewe wako juu ya mafunzo Zanzibar?",
      swali_en: "Capacity building in Zanzibar?",
      muongozo: "Semina za ZPPDA.",
      jibu_en: "Regular training on legal frameworks and e-procurement systems."
    },
    {
      id: 75,
      cat: "Zanzibar Stakeholder",
      swali_sw: "Mifano ya ushirikiano na wadau Zanzibar.",
      swali_en: "Stakeholder engagement in Zanzibar?",
      muongozo: "Pre-bid conferences.",
      jibu_en: "Involving technical teams and community leaders for public projects."
    },
    {
      id: 76,
      cat: "Zanzibar Suspension",
      swali_sw: "Taratibu za kumsitisha mtoa zabuni Zanzibar?",
      swali_en: "Suspending a bidder in Zanzibar?",
      muongozo: "Kutoa taarifa rasmi kwa ZPPDA.",
      jibu_en: "Suspending bidders for misconduct after formal investigation."
    },
    {
      id: 77,
      cat: "Zanzibar Criteria",
      swali_sw: "Kanuni gani za kuchagua zabuni bora Zanzibar?",
      swali_en: "Criteria for best bid in Zanzibar?",
      muongozo: "Scoring weight (Technical + Price).",
      jibu_en: "Selecting the highest-scoring compliant bid."
    },
    {
      id: 78,
      cat: "Zanzibar Transparency",
      swali_sw: "Viwango vya wazi Zanzibar vikoje?",
      swali_en: "Transparency policies in Zanzibar?",
      muongozo: "Publicly accessible results.",
      jibu_en: "Mandatory publication of awards on official portals."
    },
    {
      id: 79,
      cat: "Zanzibar Audit",
      swali_sw: "Ukaguzi wa ndani unafanyika vipi Zanzibar?",
      swali_en: "Internal audit in Zanzibar?",
      muongozo: "Audit ya mara kwa mara.",
      jibu_en: "Checking files for compliance before final payments."
    },
    {
      id: 80,
      cat: "Zanzibar Reform",
      swali_sw: "Umuhimu wa kusasisha sheria Zanzibar?",
      swali_en: "Why update Zanzibar laws?",
      muongozo: "Kuingiza teknolojia kama e-GP.",
      jibu_en: "Adapting to digital markets and global best practices."
    },
    {
      id: 81,
      cat: "Zanzibar Commodities",
      swali_sw: "Vifaa gani vina kipaumbele Zanzibar?",
      swali_en: "Special treatment commodities in Zanzibar?",
      muongozo: "Kilimo na vifaa vya darasa.",
      jibu_en: "Strategic items like agricultural produce for schools."
    },
    {
      id: 82,
      cat: "Zanzibar Limited",
      swali_sw: "Eleza ushindani hafifu Zanzibar.",
      swali_en: "Restricted competition in Zanzibar?",
      muongozo: "Zabuni za dharura au sifa maalum.",
      jibu_en: "Inviting selected firms for highly specialized projects."
    },
    {
      id: 83,
      cat: "Zanzibar Responsiveness",
      swali_sw: "Vigezo vya responsiveness Zanzibar?",
      swali_en: "Responsiveness criteria in Zanzibar?",
      muongozo: "Nyaraka za kisheria kukamilika.",
      jibu_en: "Bids meeting all formatting and legal requirements."
    },
    {
      id: 84,
      cat: "Zanzibar Budget",
      swali_sw: "Malalamiko ya bajeti yanatatulwa vipi Zanzibar?",
      swali_en: "Budget complaints in Zanzibar?",
      muongozo: "Verifying funds with Treasury.",
      jibu_en: "Ensuring contracts aren't awarded without secure funding."
    },
    {
      id: 85,
      cat: "Zanzibar Independent",
      swali_sw: "Mashirika ya umma yanajitegemea vipi Zanzibar?",
      swali_en: "Self-handling procurement in Zanzibar?",
      muongozo: "Lazima yawe na PDU yenye sifa.",
      jibu_en: "Entities must have qualified staff to manage their own tenders."
    },
    {
      id: 86,
      cat: "Zanzibar Election",
      swali_sw: "Hatua za ununuzi baada ya uchaguzi Zanzibar?",
      swali_en: "Post-election procurement steps in Zanzibar?",
      muongozo: "Upangaji upya wa bajeti.",
      jibu_en: "Aligning procurement plans with new government priorities."
    },
    {
      id: 87,
      cat: "Zanzibar Reporting",
      swali_sw: "Sheria inasema nini kuhusu ripoti Zanzibar?",
      swali_en: "Reporting requirements in Zanzibar?",
      muongozo: "Ripoti kwa Waziri wa Fedha kila mwaka.",
      jibu_en: "Submitting annual summaries of all procurement activities."
    },
    {
      id: 88,
      cat: "Zanzibar Quality",
      swali_sw: "Tabia za Afisa Ugavi Zanzibar?",
      swali_en: "Qualities of a Zanzibar officer?",
      muongozo: "Uaminifu na umakini.",
      jibu_en: "Integrity, diligence, and public service orientation."
    },
    {
      id: 89,
      cat: "Zanzibar Core",
      swali_sw: "Kanuni kuu za ununuzi Zanzibar?",
      swali_en: "Core principles in Zanzibar?",
      muongozo: "Haki na ushindani.",
      jibu_en: "Transparency, competition, and accountability."
    },
    {
      id: 90,
      cat: "Zanzibar Social",
      swali_sw: "Mkazo kwenye sekta za kijamii Zanzibar?",
      swali_en: "Emphasis on social sectors in Zanzibar?",
      muongozo: "Afya na Elimu.",
      jibu_en: "Prioritizing value for money in healthcare and schools."
    },
    {
      id: 91,
      cat: "Cost Accounting",
      swali_sw: "Eleza gharama za usimamizi wa zabuni Zanzibar.",
      swali_en: "Cost accounting in Zanzibar procurement?",
      muongozo: "Budgeting for hidden fees.",
      jibu_en: "Ensuring total bid evaluation includes all operational costs."
    },
    {
      id: 92,
      cat: "Zanzibar PPP",
      swali_sw: "Mpango wa PPP Zanzibar ukoje?",
      swali_en: "PPP program in Zanzibar?",
      muongozo: "PPP Act 2013.",
      jibu_en: "Collaborating with private sector for long-term infrastructure."
    },
    {
      id: 93,
      cat: "Market Assess",
      swali_sw: "Kwa nini tathmini ya soko ni muhimu Zanzibar?",
      swali_en: "Market assessment importance in Zanzibar?",
      muongozo: "Kupata bei halisia.",
      jibu_en: "To set realistic budgets and competitive strategies."
    },
    {
      id: 94,
      cat: "Off-hours",
      swali_sw: "Kazi za nje ya saa za ofisi Zanzibar?",
      swali_en: "Off-hours procurement in Zanzibar?",
      muongozo: "Dharura (Emergency).",
      jibu_en: "Flexibility for urgent medical or security requirements."
    },
    {
      id: 95,
      cat: "Control",
      swali_sw: "Vigezo vya miradi mikubwa Zanzibar?",
      swali_en: "Control criteria for large projects in Zanzibar?",
      muongozo: "Phased procurement.",
      jibu_en: "Using phased approaches and external technical audits."
    },
    {
      id: 96,
      cat: "Transaction Fees",
      swali_sw: "Je, kuna ada za mifumo ya mtandaoni Zanzibar?",
      swali_en: "Transaction fees for online systems in Zanzibar?",
      muongozo: "Ada za eProZ.",
      jibu_en: "Nominal fees for suppliers to use electronic portals."
    },
    {
      id: 97,
      cat: "Conflict Importance",
      swali_sw: "Umuhimu wa kupima mgongano wa maslahi Zanzibar?",
      swali_en: "Importance of conflict assessment in Zanzibar?",
      muongozo: "Kulinda uaminifu (Public trust).",
      jibu_en: "Ensuring impartiality to maintain trust in government."
    },
    {
      id: 98,
      cat: "Concerned Bidder",
      swali_sw: "Utafanya nini ukiwa mtoa zabuni mwenye mashaka Zanzibar?",
      swali_en: "What if you are a concerned bidder in Zanzibar?",
      muongozo: "Filing a formal complaint.",
      jibu_en: "Petitioning the Accounting Officer within the allowed period."
    },
    {
      id: 99,
      cat: "Public Access",
      swali_sw: "Taratibu za ziara za umma Zanzibar?",
      swali_en: "Public access procedures in Zanzibar?",
      muongozo: "Gazette and websites.",
      jibu_en: "Making procurement data available for public scrutiny."
    },
    {
      id: 100,
      cat: "IT Skills",
      swali_sw: "Ujuzi wa IT kwenye ununuzi Zanzibar?",
      swali_en: "IT skills in Zanzibar procurement?",
      muongozo: "eProZ na Excel.",
      jibu_en: "Proficiency in electronic platforms and data analysis tools."
    }
  ]
};

export default procurementData;