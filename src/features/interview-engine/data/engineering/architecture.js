const architectureData = {
  id: "architecture",
  title: "Architecture & Planning: Professional Interview Compendium",
  description:
    "Comprehensive Evaluation: 100 Essential Questions for Architects in Tanzania. Inajumuisha miongozo ya BORAQS (Act No. 4 of 2010), kanuni za Building Permits, BIM technology, na usimamizi wa mikataba ya ujenzi.",

  etiquette: [
    {
      title: "Regulatory Compliance",
      content:
        "Wasifu (Architects) lazima wawe wamesajiliwa na BORAQS na kuzingatia sheria za ujenzi za Manispaa na Zoning Regulations za miji husika (mfano Dar es Salaam au Dodoma)."
    },
    {
      title: "Design Integrity",
      content:
        "Daima balansi kati ya uzuri wa jengo (Aesthetics) na utendaji wake (Functionality), ukizingatia hali ya hewa ya kitropiki ya Tanzania."
    },
    {
      title: "Professional Responsibility",
      content:
        "Mhandisi msanifu ana wajibu wa kisheria na kimaadili kuhakikisha usalama wa umma (Public Safety) kupitia usanifu makini na usimamizi madhubuti wa site."
    }
  ],

  questions: [
    /* GROUP 1: PROFESSIONAL PRACTICE, LAWS & REGULATIONS (1-20) */
    {
      id: 1,
      cat: "Regulations",
      swali_sw: "Unaelewa nini kuhusu jukumu la BORAQS nchini Tanzania?",
      swali_en: "What do you understand about the role of BORAQS in Tanzania?",
      muongozo: "Taja usajili wa wataalamu na usimamizi wa maadili (Act No. 4 of 2010).",
      jibu_en: "BORAQS is the regulatory body established by Act No. 4 of 2010 to register architects and quantity surveyors, ensuring they adhere to professional ethics and maintain high standards in the construction industry in Tanzania."
    },
    {
      id: 2,
      cat: "Permits",
      swali_sw: "Ni nyaraka gani zinahitajika kupata 'Building Permit'?",
      swali_en: "What documents are needed for a building permit?",
      muongozo: "Taja Title Deed, Architectural & Structural drawings (stamped), na fomu za Manispaa.",
      jibu_en: "Key documents include proof of land ownership (Title Deed), certified architectural and engineering drawings, a site analysis report, and cleared application forms from the local municipal council."
    },
    {
      id: 3,
      cat: "Contract",
      swali_sw: "'Condition of Engagement' ni nini?",
      swali_en: "What is 'Condition of Engagement'?",
      muongozo: "Huu ni mkataba kati ya Msanifu na Mteja.",
      jibu_en: "It is a legal agreement or contract that defines the scope of architectural services, the fee structure, and the mutual responsibilities between the architect and the client."
    },
    {
      id: 4,
      cat: "Tendering",
      swali_sw: "Tofautisha kati ya 'Open Tender' na 'Selective Tender'.",
      swali_en: "Distinguish between Open and Selective Tendering.",
      muongozo: "Open ni kwa kila mtu; Selective ni kwa kampuni zilizoteuliwa tu.",
      jibu_en: "Open tendering allows any qualified contractor to submit a bid through public advertisement, while selective tendering invites only a pre-qualified list of firms based on their expertise and capacity."
    },
    {
      id: 5,
      cat: "Contract",
      swali_sw: "'Defects Liability Period' ni nini kwa Tanzania?",
      swali_en: "What is the Defects Liability Period?",
      muongozo: "Muda baada ya ujenzi ambapo mkandarasi anarekebisha makosa bure (kawaida miezi 6-12).",
      jibu_en: "It is a set period (usually 6 to 12 months) following practical completion during which the contractor is legally obligated to rectify any structural or finishing defects at their own cost."
    },
    {
      id: 6,
      cat: "Management",
      swali_sw: "Unashughulikaje na 'Variation Orders'?",
      swali_en: "How do you handle 'Variation Orders'?",
      muongozo: "Mabadiliko yoyote ya mradi lazima yawe na kibali cha kimaandishi na tathmini ya gharama.",
      jibu_en: "Variation orders must be formally documented. I assess the impact on cost and time, obtain the client's approval, and issue a written instruction to the contractor to ensure the budget remains controlled."
    },
    {
      id: 7,
      cat: "Environmental",
      swali_sw: "Jukumu la NEMC katika mradi wa ujenzi ni nini?",
      swali_en: "What is the role of NEMC in a construction project?",
      muongozo: "NEMC inashughulikia Environmental Impact Assessment (EIA).",
      jibu_en: "NEMC ensures that the project complies with environmental laws by reviewing the Environmental Impact Assessment (EIA) to mitigate negative effects on the surrounding ecosystem."
    },
    {
      id: 8,
      cat: "Ethics",
      swali_sw: "Eleza umuhimu wa 'Professional Indemnity Insurance'.",
      swali_en: "Explain the importance of 'Professional Indemnity Insurance'.",
      muongozo: "Inalinda mtaalamu dhidi ya madai ya makosa ya usanifu (negligence).",
      jibu_en: "This insurance protects the architect against financial liabilities arising from claims of professional negligence, errors, or omissions in design and supervision."
    },
    {
      id: 9,
      cat: "Policy",
      swali_sw: "Je, unafahamu 'National Housing Policy' ya Tanzania?",
      swali_en: "Are you familiar with the 'National Housing Policy' of Tanzania?",
      muongozo: "Lengo lake ni kutoa makazi bora na ya bei nafuu kwa watanzania.",
      jibu_en: "The policy aims to provide a framework for adequate, affordable, and sustainable housing for all income groups in Tanzania, encouraging private sector participation and urban renewal."
    },
    {
      id: 10,
      cat: "BOQ",
      swali_sw: "'Prime Cost Sum' ni nini kwenye BoQ?",
      swali_en: "What is 'Prime Cost Sum' in a BoQ?",
      muongozo: "Pesa iliyotengwa kwa ajili ya vifaa maalum au kazi za mtaalamu mteule.",
      jibu_en: "A Prime Cost (PC) Sum is a fixed allowance included in the BoQ for the supply of specific materials or services to be provided by a nominated supplier or sub-contractor."
    },
    {
      id: 11,
      cat: "BOQ",
      swali_sw: "'Provisional Sum' inatofautiana vipi na Prime Cost?",
      swali_en: "How does 'Provisional Sum' differ from Prime Cost?",
      muongozo: "Provisional ni kwa kazi ambayo haijulikani skopu yake kamili wakati wa tendering.",
      jibu_en: "While PC Sum is for specific items, a Provisional Sum is an estimated amount for work that cannot be fully described or quantified at the time the tender documents are prepared."
    },
    {
      id: 12,
      cat: "Management",
      swali_sw: "Nini maana ya 'Practical Completion'?",
      swali_en: "What is the meaning of 'Practical Completion'?",
      muongozo: "Hatua ambapo jengo linaweza kuanza kutumika (handover).",
      jibu_en: "Practical completion is the stage when the building is fit for occupation and use, even if there are minor outstanding 'snags' to be rectified."
    },
    {
      id: 13,
      cat: "Professionalism",
      swali_sw: "Unafanya nini mteja akigoma kulipa ada (fees) yako?",
      swali_en: "What do you do if a client refuses to pay your fees?",
      muongozo: "Tumia mkataba wako (Condition of Engagement) na upatanishi (Arbitration).",
      jibu_en: "I would refer to the dispute resolution clause in the signed Condition of Engagement, which usually involves mediation or arbitration, while maintaining professional documentation of all services rendered."
    },
    {
      id: 14,
      cat: "Regulations",
      swali_sw: "Je, unaruhusiwa kufanya kazi bila usajili wa BORAQS?",
      swali_en: "Are you allowed to practice without BORAQS registration?",
      muongozo: "Ni kinyume cha sheria (Illegal).",
      jibu_en: "No, practicing architecture without being registered by BORAQS is a criminal offense under Tanzanian law and undermines the professional integrity of the industry."
    },
    {
      id: 15,
      cat: "Design",
      swali_sw: "'Building Line' na 'Setbacks' ni nini?",
      swali_en: "What are 'Building Line' and 'Setbacks'?",
      muongozo: "Umbali kati ya jengo na mpaka wa kiwanja au barabara.",
      jibu_en: "The building line is the limit beyond which a structure cannot extend towards a road. Setbacks are the mandatory open spaces required between the building and the plot boundaries."
    },
    {
      id: 16,
      cat: "Regulations",
      swali_sw: "Unazingatia vipi 'Zoning Regulations' za Dar es Salaam au Dodoma?",
      swali_en: "How do you consider 'Zoning Regulations' in Dar es Salaam or Dodoma?",
      muongozo: "Zoning huamua aina ya matumizi ya ardhi (Residential, Commercial, Industrial).",
      jibu_en: "Zoning determines land use, density, and height limits. I consult the Master Plan of the respective city to ensure the proposed design complies with the designated use of that specific area."
    },
    {
      id: 17,
      cat: "Management",
      swali_sw: "Nini jukumu la 'Arbitrator' kwenye mgogoro wa ujenzi?",
      swali_en: "What is the role of an 'Arbitrator' in a construction dispute?",
      muongozo: "Mtu wa kati anayetoa uamuzi wa kisheria bila kwenda mahakamani.",
      jibu_en: "An arbitrator is an independent third party who reviews evidence in a dispute and issues a binding decision (award), providing a faster alternative to traditional court litigation."
    },
    {
      id: 18,
      cat: "Contract",
      swali_sw: "'Liquidated Damages' ni nini?",
      swali_en: "What are 'Liquidated Damages'?",
      muongozo: "Faini kwa mkandarasi akichelewesha mradi.",
      jibu_en: "These are pre-estimated financial penalties that a contractor must pay to the client for failing to complete the project within the agreed contractual timeframe."
    },
    {
      id: 19,
      cat: "Management",
      swali_sw: "Unatayarishaje 'Feasibility Study' ya mradi?",
      swali_en: "How do you prepare a 'Feasibility Study' for a project?",
      muongozo: "Tathmini ya kisheria, kiuchumi, na kiufundi ya mradi.",
      jibu_en: "I analyze the site conditions, local zoning laws, environmental impact, and financial viability to determine if the project can be successfully implemented within the client's constraints."
    },
    {
      id: 20,
      cat: "Supervision",
      swali_sw: "'Site Instruction' inatakiwa kutolewa lini?",
      swali_en: "When should a 'Site Instruction' be issued?",
      muongozo: "Pale unapotaka kutoa maelekezo ya kiufundi au mabadiliko madogo site.",
      jibu_en: "A site instruction is issued whenever the architect needs to provide specific technical directions, clarifications, or approve minor changes to the work being executed by the contractor."
    },

    /* GROUP 2: TECHNICAL SKILLS, SOFTWARE & DESIGN (21-45) */
    {
      id: 21,
      cat: "Software",
      swali_sw: "Ni programu gani (Software) unazotumia zaidi na kwa nini?",
      swali_en: "Which software do you use most and why?",
      muongozo: "Taja Revit/ArchiCAD kwa BIM na Lumion/V-Ray kwa rendering.",
      jibu_en: "I primarily use ArchiCAD or Revit for BIM modeling because they streamline documentation. I also use Lumion for real-time rendering to help clients visualize the spatial qualities of the design."
    },
    {
      id: 22,
      cat: "Technology",
      swali_sw: "BIM (Building Information Modeling) inasaidia vipi kupunguza gharama?",
      swali_en: "How does BIM help in cost reduction?",
      muongozo: "Taja 'Clash detection' (kugundua migongano ya mifumo).",
      jibu_en: "BIM reduces costs through 'Clash Detection,' which identifies conflicts between architectural, structural, and MEP systems in the virtual model before construction begins, preventing expensive on-site re-work."
    },
    
    {
      id: 23,
      cat: "Technical",
      swali_sw: "Unachaguaje mfumo wa 'Foundation' kwa jengo la ghorofa?",
      swali_en: "How do you choose a foundation system for a high-rise?",
      muongozo: "Inategemea 'Soil Investigation Report'.",
      jibu_en: "The choice is based on the Soil Investigation Report. In areas with low bearing capacity like parts of Dar es Salaam, I might recommend pile foundations, whereas stable ground might only require raft or pad foundations."
    },
    {
      id: 24,
      cat: "Technical",
      swali_sw: "Tofautisha 'Load-bearing wall' na 'Partition wall'.",
      swali_en: "Distinguish 'Load-bearing wall' from 'Partition wall'.",
      muongozo: "Load-bearing inabeba mzigo wa jengo; Partition ni ya kugawa vyumba tu.",
      jibu_en: "A load-bearing wall supports the weight of the roof and upper floors, transferring it to the foundation. A partition wall is non-structural and is used only to divide internal spaces."
    },
    {
      id: 25,
      cat: "Construction",
      swali_sw: "Unawezaje kuzuia unyevu (Dampness) kwenye kuta?",
      swali_en: "How can you prevent dampness in walls?",
      muongozo: "Matumizi ya Damp Proof Course (DPC) na Damp Proof Membrane (DPM).",
      jibu_en: "Dampness is prevented by installing a Damp Proof Course (DPC) at the plinth level and using a Damp Proof Membrane (DPM) under the floor slab to stop capillary action from the soil."
    },
    {
      id: 26,
      cat: "Technical",
      swali_sw: "Eleza matumizi ya 'Expansion Joints' kwenye majengo marefu.",
      swali_en: "Explain the use of 'Expansion Joints' in long/tall buildings.",
      muongozo: "Kuruhusu jengo kutanuka na kusinyaa kutokana na joto.",
      jibu_en: "Expansion joints are gaps designed to safely absorb the heat-induced expansion and contraction of building materials, preventing structural cracking."
    },
    {
      id: 27,
      cat: "Safety",
      swali_sw: "Ni vigezo gani unazingatia unapotengeneza 'Fire Escape Plan'?",
      swali_en: "What criteria do you consider in a 'Fire Escape Plan'?",
      muongozo: "Travel distance, fire-rated doors, na signage.",
      jibu_en: "I consider the maximum travel distance to an exit, the provision of fire-protected stairwells, fire-rated doors, and clear emergency lighting and signage."
    },
    {
      id: 28,
      cat: "Design",
      swali_sw: "'Universal Design' ni nini?",
      swali_en: "What is 'Universal Design'?",
      muongozo: "Usanifu unaozingatia watu wote, wakiwemo walemavu.",
      jibu_en: "It is the design of buildings and spaces to be usable by all people, to the greatest extent possible, without the need for adaptation, particularly focusing on accessibility for people with disabilities."
    },
    {
      id: 29,
      cat: "Design",
      swali_sw: "Unapangaje 'Space Programming' kwa mradi wa hospitali?",
      swali_en: "How do you plan 'Space Programming' for a hospital project?",
      muongozo: "Zingatia 'Workflow' kati ya wagonjwa, madaktari, na huduma za dharura.",
      jibu_en: "I prioritize clinical workflows and zoning to separate sterile areas from public zones, ensuring that the movement of patients, staff, and supplies is efficient and hygienic."
    },
    {
      id: 30,
      cat: "Technical",
      swali_sw: "'Acoustics' ni muhimu kwa jengo gani na unazidhibiti vipi?",
      swali_en: "Which buildings need acoustics and how do you control it?",
      muongozo: "Majengo kama kumbi za mikutano (Auditoriums). Tumia 'Sound absorbers'.",
      jibu_en: "Acoustics are vital for theaters and auditoriums. I control sound through spatial geometry and by using sound-absorbing materials on walls and ceilings to prevent echoes."
    },
    {
      id: 31,
      cat: "Sustainability",
      swali_sw: "Unawezaje kutumia 'Natural Lighting' bila kuleta joto?",
      swali_en: "How can you use 'Natural Lighting' without increasing heat?",
      muongozo: "Tumia 'Shading devices', 'Light shelves', na 'North-South orientation'.",
      jibu_en: "I use North-South orientation to avoid direct sun, implement external shading devices (brise-soleil), and use high-performance glass to allow light while reflecting infrared heat."
    },
    {
      id: 32,
      cat: "Documentation",
      swali_sw: "'Working Drawings' lazima ziwe na nini?",
      swali_en: "What must 'Working Drawings' contain?",
      muongozo: "Vipimo kamili (Dimensions), specifications, na details za ujenzi.",
      jibu_en: "They must include comprehensive dimensions, detailed construction sections, material specifications, and schedules for doors and windows to guide the contractor precisely."
    },
    {
      id: 33,
      cat: "Supervision",
      swali_sw: "Unafanya nini kama vipimo vya site na vya mchoro havilingani?",
      swali_en: "What do you do if site measurements and drawing dimensions don't match?",
      muongozo: "Fanya 'Site Verification' na urekebishe mchoro (As-built) au uamue mabadiliko site.",
      jibu_en: "I verify the site conditions immediately, assess if the discrepancy affects the structural integrity, and issue a revised instruction or 'As-built' adjustment to align the design with reality."
    },
    {
      id: 34,
      cat: "Documentation",
      swali_sw: "'Section Drawing' inatusaidia nini kuelewa jengo?",
      swali_en: "How does a 'Section Drawing' help in understanding a building?",
      muongozo: "Inaonyesha uhusiano wa kimaingiliano kati ya sakafu, kuta, na paa (vertical relationship).",
      jibu_en: "A section reveals the vertical relationship between spaces, structural thicknesses, floor heights, and complex internal details that aren't visible in a plan."
    },
    {
      id: 35,
      cat: "Technical",
      swali_sw: "Unatumiaje 'Scale' tofauti kwenye michoro yako?",
      swali_en: "How do you use different 'Scales' in your drawings?",
      muongozo: "1:100 kwa plans; 1:20 au 1:5 kwa details.",
      jibu_en: "I use smaller scales like 1:100 or 1:200 for general layouts and larger scales like 1:20 or 1:5 for intricate construction details to ensure clarity for the builder."
    },
    {
      id: 36,
      cat: "Analysis",
      swali_sw: "Nini umuhimu wa 'Sun Path Analysis'?",
      swali_en: "What is the importance of 'Sun Path Analysis'?",
      muongozo: "Inatusaidia kupanga nafasi za madirisha na kuzuia joto la mchana.",
      jibu_en: "It helps in determining the optimal orientation of the building to maximize natural light while minimizing solar heat gain, significantly reducing energy costs for cooling."
    },
    {
      id: 37,
      cat: "Aesthetics",
      swali_sw: "Unachaguaje rangi (Color Palette) ya nje ya jengo?",
      swali_en: "How do you choose the exterior Color Palette?",
      muongozo: "Zingatia muktadha wa eneo (context) na 'Thermal properties' za rangi.",
      jibu_en: "I choose colors that harmonize with the surrounding environment while considering light-reflective values (LRV) to ensure the building doesn't absorb excessive heat."
    },
    {
      id: 38,
      cat: "Innovation",
      swali_sw: "'Parametric Design' ni nini na ina tija Tanzania?",
      swali_en: "What is 'Parametric Design' and is it useful in Tanzania?",
      muongozo: "Usanifu unaotumia algorithms kutoa maumbo changamano.",
      jibu_en: "Parametric design uses algorithms to solve complex design challenges. In Tanzania, it's increasingly useful for optimizing shading structures and achieving unique, efficient building forms."
    },
    {
      id: 39,
      cat: "Safety",
      swali_sw: "Unahakikishaje usalama wa 'Balcony' kwenye ghorofa?",
      swali_en: "How do you ensure 'Balcony' safety in high-rises?",
      muongozo: "Kimo cha handrail (angalau 1100mm) na uimara wa material.",
      jibu_en: "I specify a minimum balustrade height of 1100mm, ensure the vertical bars have gaps no wider than 100mm, and verify the structural anchoring of the railing."
    },
    {
      id: 40,
      cat: "Technical",
      swali_sw: "'Roof Pitch' sahihi kwa hali ya hewa ya Tanzania ni ipi?",
      swali_en: "What is the correct 'Roof Pitch' for Tanzania's climate?",
      muongozo: "Inategemea nyenzo ya paa (mfano 30-45 degrees kwa tiles).",
      jibu_en: "It depends on the material; for instance, $22^{\circ}$ to $30^{\circ}$ is common for corrugated sheets, while steeper pitches are used for tiles to ensure efficient rainwater runoff during heavy rains."
    },
    {
      id: 41,
      cat: "Technical",
      swali_sw: "'Cantilever' inafanya kazi vipi?",
      swali_en: "How does a 'Cantilever' work?",
      muongozo: "Mhimili ulioshikizwa upande mmoja tu (Fixed at one end).",
      jibu_en: "A cantilever is a structural member that extends horizontally and is supported at only one end, relying on a fixed connection and internal reinforcement to resist bending moments."
    },
    {
      id: 42,
      cat: "Sustainability",
      swali_sw: "Unashauri nini mteja anayetaka kutumia kioo kingi Dar es Salaam?",
      swali_en: "What do you advise a client wanting extensive glazing in Dar es Salaam?",
      muongozo: "Sisitiza matumizi ya 'Double glazing' na 'Low-E coating'.",
      jibu_en: "I would advise using high-performance Double Glazing with Low-Emissivity (Low-E) coatings and external shading to prevent the 'greenhouse effect' and high AC costs."
    },
    {
      id: 43,
      cat: "Design",
      swali_sw: "'Cross Ventilation' ni nini?",
      swali_en: "What is 'Cross Ventilation'?",
      muongozo: "Hewa kuingia upande mmoja na kutokea upande wa pili.",
      jibu_en: "It is a natural cooling method where window openings are placed on opposite walls of a space to allow air to flow through, replacing warm indoor air with cooler outdoor air."
    },
    {
      id: 44,
      cat: "Planning",
      swali_sw: "Unatofautishaje 'Site Plan' na 'Master Plan'?",
      swali_en: "Distinguish 'Site Plan' from 'Master Plan'.",
      muongozo: "Site Plan ni ya kiwanja kimoja; Master Plan ni ya eneo kubwa au mji.",
      jibu_en: "A site plan details a single plot's layout, whereas a master plan is a comprehensive long-term document for a large area, campus, or entire city district."
    },
    {
      id: 45,
      cat: "Documentation",
      swali_sw: "'Specification Writing' ni nini?",
      swali_en: "What is 'Specification Writing'?",
      muongozo: "Maelezo ya kimaandishi ya ubora wa vifaa na kazi (Standards).",
      jibu_en: "It is a written document describing the quality of materials, standards of workmanship, and installation methods required for the project, complementing the drawings."
    },

    /* GROUP 3: PROJECT MANAGEMENT & SITE SUPERVISION (46-70) */
    {
      id: 46,
      cat: "Supervision",
      swali_sw: "Unafanya nini ukigundua mkandarasi anatumia nondo zisizo na kiwango?",
      swali_en: "What do you do if a contractor uses sub-standard reinforcement bars?",
      muongozo: "Toa 'Rejection Note' mara moja na amuru ziondolewe site.",
      jibu_en: "I would issue an immediate formal 'Notice of Non-compliance' (Rejection Note), order the removal of the sub-standard materials, and halt work until certified steel is provided."
    },
    {
      id: 47,
      cat: "Management",
      swali_sw: "Site Meeting inatakiwa kufanyika mara ngapi?",
      swali_en: "How often should site meetings be held?",
      muongozo: "Kawaida mara moja kwa wiki au kila baada ya wiki mbili.",
      jibu_en: "Typically, formal site meetings are held bi-weekly to review progress, solve technical issues, and ensure coordination between all consultants and the contractor."
    },
    {
      id: 48,
      cat: "Supervision",
      swali_sw: "Jukumu la 'Clerk of Works' ni nini?",
      swali_en: "What is the role of a 'Clerk of Works'?",
      muongozo: "Mwakilishi wa mteja site anayekagua ubora wa kazi kila siku.",
      jibu_en: "The Clerk of Works acts as the client's inspector on-site, providing daily supervision to ensure that the quality of materials and workmanship meets the contract specifications."
    },
    {
      id: 49,
      cat: "Management",
      swali_sw: "Unawezaje kudhibiti 'Project Timeline'?",
      swali_en: "How do you control the project timeline?",
      muongozo: "Tumia 'Gantt Chart' na kulinganisha 'Scheduled' vs 'Actual' progress.",
      jibu_en: "I use a Master Programme (Gantt Chart) to monitor milestones and address any delays immediately through resource adjustment or accelerated working schedules."
    },
    {
      id: 50,
      cat: "Management",
      swali_sw: "Unatatua vipi mgogoro kati ya Mkandarasi na QS?",
      swali_en: "How do you resolve a dispute between a Contractor and QS?",
      muongozo: "Msanifu (Architect) ndio kiongozi wa timu (Team Leader); fanya uamuzi wa haki kulingana na mkataba.",
      jibu_en: "As the project lead, I review the contract documents and the specific point of contention (usually measurements or rates) to provide a fair, technically sound determination."
    },
    {
      id: 51,
      cat: "Supervision",
      swali_sw: "Nini umuhimu wa 'Site Diary'?",
      swali_en: "What is the importance of a 'Site Diary'?",
      muongozo: "Kumbukumbu ya kila siku ya matukio, hali ya hewa, na wafanyakazi site.",
      jibu_en: "It provides a legal and chronological record of daily activities, site conditions, weather, and instructions, which is crucial in resolving future claims or disputes."
    },
    {
      id: 52,
      cat: "Supervision",
      swali_sw: "Unakagua vipi 'Formwork' kabla ya kumwaga zege?",
      swali_en: "How do you inspect 'Formwork' before pouring concrete?",
      muongozo: "Kagua uimara (Stability), usawa (Alignment), na usafi (Cleanliness).",
      jibu_en: "I verify the stability of the bracing, ensure the internal dimensions are correct, check for vertical alignment, and confirm that all debris has been removed."
    },
    {
      id: 53,
      cat: "Technical",
      swali_sw: "'Concrete Slump Test' inafanyika kwa lengo gani?",
      swali_en: "What is the purpose of the 'Concrete Slump Test'?",
      muongozo: "Kupima 'Workability' na uwiano wa maji kwenye zege.",
      jibu_en: "The test measures the consistency and workability of fresh concrete to ensure it has the correct water-to-cement ratio before it is placed."
    },
    {
      id: 54,
      cat: "Management",
      swali_sw: "Unashughulika vipi na hali ya hewa (mvua) inayochelewesha mradi?",
      swali_en: "How do you handle weather delays (rain)?",
      muongozo: "Rekodi tukio kwenye Site Diary na uone kama mkandarasi anastahili 'Extension of Time'.",
      jibu_en: "I document the specific delays in the site diary and evaluate if the contractor is entitled to an 'Extension of Time' (EOT) without penalties, as per the contract's force majeure clauses."
    },
    {
      id: 55,
      cat: "Safety",
      swali_sw: "'Health and Safety' (HSE) site inasimamiwa na nani?",
      swali_en: "Who manages 'Health and Safety' (HSE) on-site?",
      muongozo: "Ni wajibu wa mkandarasi, lakini msanifu anapaswa kukagua.",
      jibu_en: "While the contractor is primarily responsible for implementing safety protocols, the architect and the safety officer oversee compliance to prevent accidents."
    },
    {
      id: 56,
      cat: "Management",
      swali_sw: "Unafanya nini mteja akitaka kuingiza fundi wake katikati ya mkataba?",
      swali_en: "What do you do if a client wants to introduce their own artisan during the contract?",
      muongozo: "Mshauri mteja kuhusu mipaka ya kimkataba (Contractual boundaries) na 'Liability'.",
      jibu_en: "I advise the client that the main contractor is liable for all work. Introducing external artisans can void warranties and cause coordination conflicts unless they are treated as 'Nominated Sub-contractors'."
    },
    {
      id: 57,
      cat: "Documentation",
      swali_sw: "'As-built Drawings' ni nini na zinatolewa lini?",
      swali_en: "What are 'As-built Drawings' and when are they issued?",
      muongozo: "Michoro inayoonyesha jengo lilivyojengwa uhalisia (mwishoni mwa mradi).",
      jibu_en: "These are the final drawings incorporating all site variations. They are issued at the end of the project to help the client with future maintenance and renovations."
    },
    {
      id: 58,
      cat: "Supervision",
      swali_sw: "Unakagua vipi mifumo ya maji taka (Plumbing) kabla ya kufunika?",
      swali_en: "How do you inspect plumbing before it's covered?",
      muongozo: "Fanya 'Pressure Test' kuona kama kuna uvujaji.",
      jibu_en: "I witness a pressure test on the pipes and ensure that all gradients for drainage are correct according to the sanitary drawings before any backfilling or wall plastering occurs."
    },
    {
      id: 59,
      cat: "Contract",
      swali_sw: "'Retention Money' ni nini?",
      swali_en: "What is 'Retention Money'?",
      muongozo: "Asilimia ya pesa (kawaida 5-10%) inayozuiliwa kuhakikisha makosa yanarekebishwa.",
      jibu_en: "It is a portion of the payment withheld from the contractor (usually 5%) to ensure that any defects found during the liability period are addressed."
    },
    {
      id: 60,
      cat: "Management",
      swali_sw: "Unatoaje 'Certificate of Payment'?",
      swali_en: "How do you issue a 'Certificate of Payment'?",
      muongozo: "Baada ya QS kupima kazi, unahakikisha ubora na kusaini.",
      jibu_en: "I sign it after the Quantity Surveyor has valued the work done, provided that I am satisfied with the technical quality of the executed works."
    },
    {
      id: 61,
      cat: "Management",
      swali_sw: "'Project Brief' ikibadilika site utafanya nini?",
      swali_en: "What do you do if the 'Project Brief' changes mid-construction?",
      muongozo: "Tathmini athari (Cost & Time) na uandike Variation Order.",
      jibu_en: "I assess the impact on the budget and timeline, inform the client of the implications, and issue a formal Variation Order if they choose to proceed."
    },
    {
      id: 62,
      cat: "Supervision",
      swali_sw: "Unashirikiana vipi na 'Structural Engineer'?",
      swali_en: "How do you collaborate with the 'Structural Engineer'?",
      muongozo: "Kuhakikisha michoro ya usanifu na ya kihandisi (Structural) inaendana.",
      jibu_en: "We coordinate during the design phase to integrate beams and columns into the spaces and during site visits to ensure the reinforcement matches the design intent."
    },
    {
      id: 63,
      cat: "Contract",
      swali_sw: "Nini maana ya 'Sub-contractor' na nani anampa kazi?",
      swali_en: "What is a 'Sub-contractor' and who hires them?",
      muongozo: "Mkandarasi mdogo anayechukuliwa na Mkandarasi mkuu (Main Contractor).",
      jibu_en: "A sub-contractor is a specialist hired by the main contractor to perform specific tasks, like electrical wiring or tiling, under the main contractor's management."
    },
    {
      id: 64,
      cat: "Supervision",
      swali_sw: "Unapimaje 'Quality of Workmanship'?",
      swali_en: "How do you measure 'Quality of Workmanship'?",
      muongozo: "Kulinganisha na 'Specifications' na 'Samples' zilizokubaliwa.",
      jibu_en: "I compare the finished work against the project specifications and the pre-approved control samples or mock-ups provided by the contractor."
    },
    {
      id: 65,
      cat: "Management",
      swali_sw: "'Snag List' inatayarishwa lini?",
      swali_en: "When is a 'Snag List' prepared?",
      muongozo: "Muda mfupi kabla ya 'Practical Completion'.",
      jibu_en: "It is prepared just before practical completion to identify minor defects or incomplete works that the contractor must finish before the client takes over."
    },
    {
      id: 66,
      cat: "Sustainability",
      swali_sw: "Unawezaje kupunguza upotevu wa vifaa (Waste) site?",
      swali_en: "How can you reduce material waste on-site?",
      muongozo: "Usimamizi wa kutosha (Proper supervision) na 'Modular coordination'.",
      jibu_en: "I implement modular design to fit standard material sizes and ensure the contractor has a strict material management and storage plan."
    },
    {
      id: 67,
      cat: "Management",
      swali_sw: "Unafanya nini mradi ukizidi bajeti?",
      swali_en: "What do you do if the project exceeds the budget?",
      muongozo: "Fanya 'Value Engineering' na upunguze skopu (Descope).",
      jibu_en: "I perform value engineering to find cheaper material alternatives or suggest non-critical descope options to bring the costs back in line with the budget."
    },
    {
      id: 68,
      cat: "Safety",
      swali_sw: "Umuhimu wa 'Hoarding' kwenye eneo la ujenzi ni nini?",
      swali_en: "What is the importance of 'Hoarding'?",
      muongozo: "Kulinda usalama wa umma na kuzuia watu wasiohusika kuingia.",
      jibu_en: "Hoarding provides a temporary fence around the site to protect the public from construction hazards and secure the project site."
    },
    {
      id: 69,
      cat: "Supervision",
      swali_sw: "'Method Statement' ya mkandarasi inatusaidia nini?",
      swali_en: "How does the contractor's 'Method Statement' help?",
      muongozo: "Inaeleza jinsi mkandarasi atakavyofanya kazi ngumu kiufundi na kwa usalama.",
      jibu_en: "It outlines the specific procedures and safety measures the contractor will use to execute complex tasks, allowing for architectural review and approval."
    },
    {
      id: 70,
      cat: "Management",
      swali_sw: "Unashughulikaje na majirani wanaolalamika kuhusu kelele za ujenzi?",
      swali_en: "How do you handle neighbor complaints about construction noise?",
      muongozo: "Zingatia sheria za saa za kazi na uwe na mahusiano mema.",
      jibu_en: "I ensure the contractor adheres to the permitted working hours and implement noise mitigation strategies like hoarding or scheduling noisy tasks for mid-day."
    },

    /* GROUP 4: SUSTAINABILITY & INNOVATION (71-85) */
    {
      id: 71,
      cat: "Sustainability",
      swali_sw: "'Passive Cooling' ni nini?",
      swali_en: "What is 'Passive Cooling'?",
      muongozo: "Njia ya kupoza jengo bila kutumia umeme (Natural ventilation).",
      jibu_en: "It refers to technologies or design features used to cool buildings without power consumption, such as shading, natural ventilation, and thermal mass."
    },
    {
      id: 72,
      cat: "Sustainability",
      swali_sw: "Unawezaje kuvuna maji ya mvua kwenye jengo?",
      swali_en: "How can you harvest rainwater in a building?",
      muongozo: "Kutumia 'Gutters' na 'Storage tanks'.",
      jibu_en: "I design the roof drainage system to lead water through gutters and downpipes into filtration units and underground storage tanks for non-potable use."
    },
    {
      id: 73,
      cat: "Innovation",
      swali_sw: "Matumizi ya 'Stabilized Earth Bricks' (Udongo) yana faida gani?",
      swali_en: "What are the benefits of Stabilized Earth Bricks?",
      muongozo: "Gharama nafuu na rafiki kwa mazingira (Low carbon).",
      jibu_en: "They have a low carbon footprint, provide excellent thermal insulation, and are more cost-effective as they use locally available materials."
    },
    {
      id: 74,
      cat: "Sustainability",
      swali_sw: "'Solar Orientation' inaathiri vipi matumizi ya AC?",
      swali_en: "How does Solar Orientation affect AC usage?",
      muongozo: "Jengo likikabiliana na jua moja kwa moja litaongeza joto.",
      jibu_en: "Proper orientation reduces direct sun exposure on windows, decreasing the internal heat gain and the energy required for mechanical cooling (AC)."
    },
    {
      id: 75,
      cat: "Innovation",
      swali_sw: "'Vertical Gardens' zinawezekana Tanzania?",
      swali_en: "Are 'Vertical Gardens' possible in Tanzania?",
      muongozo: "Ndiyo, husaidia kupunguza joto na kuboresha hewa.",
      jibu_en: "Yes, they are feasible and effective in urban areas like Dar es Salaam for reducing the urban heat island effect and improving air quality."
    },
    {
      id: 76,
      cat: "Innovation",
      swali_sw: "'Smart Home Technology'—je, ina soko Tanzania?",
      swali_en: "Is there a market for Smart Home Tech in Tanzania?",
      muongozo: "Soko linakua kwa majengo ya kifahari na ya kiofisi.",
      jibu_en: "The market is growing rapidly, especially for security, automated lighting, and energy management in high-end residential and commercial developments."
    },
    {
      id: 77,
      cat: "Sustainability",
      swali_sw: "Unawezaje kusanifu jengo linalozalisha nishati yake lenyewe?",
      swali_en: "How do you design a net-zero energy building?",
      muongozo: "Tumia 'Solar panels' na kupunguza mahitaji ya nishati.",
      jibu_en: "By combining high-efficiency insulation, passive design, and on-site renewable energy sources like solar photovoltaics (PV) to offset the building's consumption."
    },
    {
      id: 78,
      cat: "Innovation",
      swali_sw: "'Recycled Materials' gani zinaweza kutumika kwenye ujenzi?",
      swali_en: "Which recycled materials can be used in construction?",
      muongozo: "Chuma kilichoyeyushwa upya (Recycled steel), na mbao.",
      jibu_en: "Recycled steel, reclaimed wood, and crushed concrete aggregates can be used to promote a circular economy in construction."
    },
    {
      id: 79,
      cat: "Sustainability",
      swali_sw: "'Carbon Footprint' ya jengo inapimwa vipi?",
      swali_en: "How is a building's Carbon Footprint measured?",
      muongozo: "Inapimwa kwa 'Embodied energy' ya vifaa na nishati inayotumika.",
      jibu_en: "It is calculated by assessing the energy used in the production of materials (embodied carbon) and the energy consumed during the building's operation."
    },
    {
      id: 80,
      cat: "Design",
      swali_sw: "'Low-cost Housing'—ni siri gani ya kufanikiwa Tanzania?",
      swali_en: "What is the secret to successful low-cost housing in TZ?",
      muongozo: "Modular design na matumizi ya vifaa vya ndani (local materials).",
      jibu_en: "The secret lies in simplified modular designs, efficient space planning, and leveraging locally produced materials like stabilized blocks to reduce import costs."
    },
    {
      id: 81,
      cat: "Innovation",
      swali_sw: "'Pre-fabricated Buildings' ni nini?",
      swali_en: "What are 'Pre-fabricated Buildings'?",
      muongozo: "Majengo yanayotengenezwa kiwandani na kuunganishwa site.",
      jibu_en: "Structures where major components are manufactured in a factory environment and then transported to the site for rapid assembly."
    },
    {
      id: 82,
      cat: "Planning",
      swali_sw: "Unafikiri nini kuhusu ujenzi wa 'Skyscrapers' Dodoma?",
      swali_en: "What do you think about skyscrapers in Dodoma?",
      muongozo: "Inategemea Master Plan na miundombinu iliyopo.",
      jibu_en: "While skyscrapers maximize land use, Dodoma's windy climate and infrastructure must be evaluated to ensure these buildings are sustainable and integrated into the city's master plan."
    },
    {
      id: 83,
      cat: "Sustainability",
      swali_sw: "'Natural Ventilation' vs 'Mechanical Ventilation'?",
      swali_en: "Natural vs Mechanical Ventilation?",
      muongozo: "Natural ni nafuu; Mechanical ni kwa majengo yenye skopu maalum.",
      jibu_en: "Natural ventilation is cost-effective and healthier. Mechanical ventilation is necessary for deep-plan buildings or areas with poor external air quality."
    },
    {
      id: 84,
      cat: "Sustainability",
      swali_sw: "'Greywater Recycling' ni nini?",
      swali_en: "What is 'Greywater Recycling'?",
      muongozo: "Kutibu na kutumia tena maji ya bafuni na jikoni (si ya chooni).",
      jibu_en: "It is the treatment of wastewater from sinks and showers to be reused for garden irrigation or flushing toilets, significantly reducing fresh water demand."
    },
    {
      id: 85,
      cat: "Technical",
      swali_sw: "Unawezaje kusanifu jengo linalostahimili tetemeko la ardhi?",
      swali_en: "How do you design for seismic resistance?",
      muongozo: "Tumia 'Ductile materials' na 'Shear walls'.",
      jibu_en: "I use ductile materials like reinforced concrete, implement shear walls for lateral stability, and ensure the structural connections allow for controlled movement."
    },

    /* GROUP 5: BEHAVIORAL & SOFT SKILLS (86-100) */
    {
      id: 86,
      cat: "Behavioral",
      swali_sw: "Kwa nini tukuchague wewe na si mwingine?",
      swali_en: "Why should we hire you over others?",
      muongozo: "Onesha mchanganyiko wako wa ujuzi wa kiufundi na maadili.",
      jibu_en: "I offer a unique blend of technical proficiency in BIM, a deep understanding of BORAQS regulations, and a proven ability to manage complex site challenges efficiently."
    },
    {
      id: 87,
      cat: "Behavioral",
      swali_sw: "Elezea mradi uliowahi kufanya na ukajivunia.",
      swali_en: "Describe a project you are proud of.",
      muongozo: "Taja mradi uliokua na changamoto uliyoitatua.",
      jibu_en: "I am proud of a residential project where I implemented passive cooling strategies that reduced the client's energy costs by 30% without exceeding the budget."
    },
    {
      id: 88,
      cat: "Behavioral",
      swali_sw: "Unashughulikaje na mteja mgumu asiyejua anachotaka?",
      swali_en: "How do you handle a difficult client who is indecisive?",
      muongozo: "Tumia 'Mood boards' na picha (Visuals) kumuongoza.",
      jibu_en: "I use mood boards and 3D visualizations to narrow down their preferences and document every decision made to prevent scope creep later."
    },
    {
      id: 89,
      cat: "Behavioral",
      swali_sw: "Utafanya nini ukifanya kosa kubwa kwenye mchoro ambalo limegundulika site?",
      swali_en: "What if a major drawing error is discovered on-site?",
      muongozo: "Kuwa mkweli (Accountability) na tafuta suluhisho la kiufundi mara moja.",
      jibu_en: "I would take full responsibility, immediately collaborate with the structural engineer for a technical fix, and issue a revised drawing to minimize delays."
    },
    {
      id: 90,
      cat: "Behavioral",
      swali_sw: "Unapendelea kufanya kazi peke yako au kwenye timu?",
      swali_en: "Do you prefer working alone or in a team?",
      muongozo: "Architecture ni 'Teamwork' (Architect, Engineers, QS).",
      jibu_en: "Architecture is inherently collaborative. I thrive in teams where I can coordinate with engineers and quantity surveyors to achieve a holistic design."
    },
    {
      id: 91,
      cat: "Behavioral",
      swali_sw: "Unawezaje kufanya kazi chini ya presha ya 'Deadlines'?",
      swali_en: "How do you handle deadline pressure?",
      muongozo: "Panga vipaumbele (Priority) na usimamizi wa muda.",
      jibu_en: "I prioritize tasks using time-management tools and maintain a steady workflow to ensure that quality is never compromised for speed."
    },
    {
      id: 92,
      cat: "Behavioral",
      swali_sw: "'Architecture' kwako ni sanaa au ni sayansi?",
      swali_en: "Is architecture an art or a science to you?",
      muongozo: "Ni mchanganyiko wa vyote (Art of science).",
      jibu_en: "It is a balance of both; art provides the creative spatial experience, while science provides the structural and functional integrity."
    },
    {
      id: 93,
      cat: "Career",
      swali_sw: "Unajiona wapi katika miaka mitano ijayo kitaaluma?",
      swali_en: "Where do you see yourself in 5 years?",
      muongozo: "Kuwa 'Registered Architect' na kiongozi wa miradi mikubwa.",
      jibu_en: "I aim to be a senior registered architect, having led landmark projects that contribute to the sustainable development of Tanzania's urban landscape."
    },
    {
      id: 94,
      cat: "Behavioral",
      swali_sw: "Unapata wapi 'Inspiration' ya michoro yako?",
      swali_en: "Where do you find inspiration?",
      muongozo: "Muktadha wa eneo, asili, na wahandisi wasanifu wengine.",
      jibu_en: "I am inspired by local Tanzanian culture, site topography, and the works of sustainable architects like Francis Kéré."
    },
    {
      id: 95,
      cat: "Behavioral",
      swali_sw: "Unachukuliaje 'Feedback' hasi (Criticism) kuhusu mchoro wako?",
      swali_en: "How do you handle negative feedback?",
      muongozo: "Feedback ni nafasi ya kujifunza na kuboresha.",
      jibu_en: "I treat it as an opportunity for growth. I listen objectively to the critique and use it to refine the design to better meet project goals."
    },
    {
      id: 96,
      cat: "Behavioral",
      swali_sw: "Je, uko tayari kusafiri kwenda mikoani kusimamia miradi?",
      swali_en: "Are you willing to travel to manage remote projects?",
      muongozo: "Ndiyo, usimamizi wa site ni muhimu popote mradi ulipo.",
      jibu_en: "Yes, I am fully committed to traveling to ensure that the project's quality is maintained regardless of the site's location."
    },
    {
      id: 97,
      cat: "Ethics",
      swali_sw: "Mkandarasi akikupa zawadi ya pesa utafanya nini?",
      swali_en: "What if a contractor offers you a cash gift?",
      muongozo: "Kataa mara moja (Ethics). Zawadi huleta mgongano wa kimaslahi.",
      jibu_en: "I would firmly decline. Accepting gifts from contractors creates a conflict of interest and compromises my professional integrity and independence."
    },
    {
      id: 98,
      cat: "Behavioral",
      swali_sw: "Unajifunza vipi vitu vipya katika taaluma yako?",
      swali_en: "How do you stay updated with new trends?",
      muongozo: "CPD seminars, majarida ya usanifu, na kufuata BORAQS news.",
      jibu_en: "I attend ERB and BORAQS seminars, participate in online workshops, and stay updated through international architectural journals."
    },
    {
      id: 99,
      cat: "Behavioral",
      swali_sw: "Unawezaje kubalance kati ya 'Aesthetics' (uzuri) na 'Functionality' (kazi)?",
      swali_en: "How do you balance aesthetics and functionality?",
      muongozo: "Uzuri ni matokeo ya kazi iliyosanifiwa vizuri (Form follows function).",
      jibu_en: "I follow the principle that 'Form Follows Function.' A beautiful building is only successful if it works perfectly for its users' needs."
    },
    {
      id: 100,
      cat: "Behavioral",
      swali_sw: "Una swali lolote kwetu?",
      swali_en: "Do you have any questions for us?",
      muongozo: "Hapa uliza kuhusu utamaduni wa kampuni au teknolojia wanazotumia.",
      jibu_en: "Yes, I would like to know about the firm's approach to incorporating sustainable technologies in their upcoming projects."
    }
  ]
};

export default architectureData;