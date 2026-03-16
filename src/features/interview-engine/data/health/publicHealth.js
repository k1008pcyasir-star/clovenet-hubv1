const publicHealthData = {
  id: "public-health",
  title: "Public Health Expert Interview Compendium",
  description:
    "Strategic Mastery: 100 Essential Questions for Health Officers. Integrating epidemiology, biostatistics, environmental health (WASH), and Tanzanian Public Service Ethics.",

  etiquette: [
    {
      title: "Data-Driven Logic",
      content:
        "Daima onyesha uelewa wa takwimu na ushahidi (evidence-based) unapojibu maswali ya magonjwa au mipango ya afya."
    },
    {
      title: "Community Context",
      content:
        "Husisha majibu yako na mazingira halisi ya Tanzania, hasa changamoto za maji (WASH), malaria, na mifumo ya ripoti kama MTUHA na IDSR."
    },
    {
      title: "Legal Awareness",
      content:
        "Zingatia Sheria ya Afya ya Jamii (Public Health Act 2009) na miongozo ya OSHA katika maswali yanayohusu usafi wa mazingira na usalama mahali pa kazi."
    }
  ],

  questions: [
    /* I. EPIDEMIOLOGY AND DISEASE CONTROL (1-20) */
    {
      id: 1,
      swali_sw: "Tafsiri Epidemiolojia na taja vipengele vyake vikuu vitano.",
      swali_en: "Define Epidemiology and its five major components.",
      muongozo: "Utafiti wa usambazaji (distribution) na vigezo (determinants) vya afya.",
      jibu_en: "Epidemiology is the study of the distribution and determinants of health states in populations. Components: Scientific study, distribution (frequency/pattern), determinants (causes), health-related states, and specified populations."
    },
    {
      id: 2,
      swali_sw: "Matumizi makuu ya epidemiolojia katika jamii ni yapi?",
      swali_en: "What are the primary uses of epidemiology in a community?",
      muongozo: "Tathmini ya mzigo wa magonjwa na upangaji wa huduma.",
      jibu_en: "Uses include assessing disease burden, establishing community diagnoses, searching for determinants, estimating individual risks, and planning health services."
    },
    {
      id: 3,
      swali_sw: "Elezea dhana ya Epidemiological Triad.",
      swali_en: "Explain the Epidemiological Triad.",
      muongozo: "Muingiliano wa Agent (kijidudu), Host (binadamu), na Environment (mazingira).",
      jibu_en: "It posits that disease is caused by the interaction between an external Agent (pathogen), a susceptible Host (human), and an Environment that brings them together."
    },
    
    {
      id: 4,
      swali_sw: "Kuna tofauti gani kati ya incidence na prevalence?",
      swali_en: "Distinguish between incidence and prevalence.",
      muongozo: "Cases mpya dhidi ya cases zote zilizopo (mpya na za zamani).",
      jibu_en: "Incidence refers to new cases over a specific period; prevalence measures the total number of existing cases (new and old) at a specific point in time."
    },
    {
      id: 5,
      swali_sw: "Utafiti wa 'case-control' ni nini?",
      swali_en: "What is a case-control study?",
      muongozo: "Utafiti wa kulinganisha wenye ugonjwa na wasio na ugonjwa (retrospective).",
      jibu_en: "A retrospective study design that compares individuals with a disease (cases) to those without (controls) to identify exposure differences."
    },
    {
      id: 6,
      swali_sw: "Tafsiri dhana ya 'Odds Ratio'.",
      swali_en: "Define the concept of an Odds Ratio.",
      muongozo: "Kipimo cha uhusiano kati ya exposure na matokeo (outcome).",
      jibu_en: "It represents the odds that an outcome will occur given a particular exposure, compared to the odds of the outcome occurring without that exposure."
    },
    {
      id: 7,
      swali_sw: "Tofauti kati ya descriptive na analytical epidemiology ni ipi?",
      swali_en: "Difference between descriptive and analytical epidemiology?",
      muongozo: "Nani/Wapi/Lini dhidi ya Jinsi gani/Kwanini.",
      jibu_en: "Descriptive epidemiology focuses on 'Who, Where, and When' of disease; Analytical epidemiology tests hypotheses to find 'How and Why'."
    },
    {
      id: 8,
      swali_sw: "Tofauti kati ya retrospective na prospective studies.",
      swali_en: "Explain the difference between retrospective and prospective studies.",
      muongozo: "Kuangalia nyuma (backward) dhidi ya kufuatilia mbele (forward).",
      jibu_en: "Retrospective studies look backward from outcome to exposure; prospective studies follow a group over time to see who develops the outcome."
    },
    {
      id: 9,
      swali_sw: "Nini maana ya 'notifiable disease' kulingana na mfumo wa IDSR?",
      swali_en: "What is a 'notifiable disease' under the IDSR framework?",
      muongozo: "Ugonjwa unaotakiwa kuripotiwa kisheria mara moja (mfano Kipindupindu).",
      jibu_en: "A disease legally required to be reported immediately due to rapid spread potential (e.g., Cholera, Ebola, Plague)."
    },
    {
      id: 10,
      swali_sw: "Tafsiri Sensitivity na Specificity katika vipimo vya kimaabara.",
      swali_en: "Define Sensitivity and Specificity in diagnostic testing.",
      muongozo: "True Positive (Sensitivity) dhidi ya True Negative (Specificity).",
      jibu_en: "Sensitivity is the ability to correctly identify those with the disease; specificity is the ability to correctly identify those without it."
    },
    {
      id: 11,
      swali_sw: "Case Fatality Rate (CFR) hupigwaje hesabu?",
      swali_en: "How is a Case Fatality Rate (CFR) calculated?",
      muongozo: "Uwiano wa vifo dhidi ya idadi ya waliougua.",
      jibu_en: "CFR = (Number of deaths from disease / Number of diagnosed cases) x 100."
    },
    {
      id: 12,
      swali_sw: "Elezea dhana ya 'Iceberg Phenomenon' ya ugonjwa.",
      swali_en: "Describe the 'Iceberg Phenomenon' of disease.",
      muongozo: "Waliogundulika (tip) ni sehemu ndogo tu ya wagonjwa wote jamii (hidden).",
      jibu_en: "The tip (diagnosed cases) represents a small fraction of the total cases in the community, which includes undiagnosed or asymptomatic cases."
    },
    {
      id: 13,
      swali_sw: "Wajibu wa fomu ya line listing (IDSR 001C) wakati wa mlipuko ni upi?",
      swali_en: "Role of a line listing form (IDSR 001C) during an outbreak?",
      muongozo: "Kutunza muhtasari wa wagonjwa wote wanaohisiwa kwa ufuatiliaji.",
      jibu_en: "Provides a summary of all suspected cases, including demographics and outcomes, to help trace the source and spread."
    },
    {
      id: 14,
      swali_sw: "Elezea dhana ya Herd Immunity (Kinga ya Jamii).",
      swali_en: "Explain the concept of Herd Immunity.",
      muongozo: "Kinga ya kundi kubwa la watu inayozuia kusambaa kwa ugonjwa.",
      jibu_en: "Resistance to disease spread within a population when a high proportion of individuals are immune, usually through vaccination."
    },
    {
      id: 15,
      swali_sw: "Ugonjwa wa 'endemic' ni nini?",
      swali_en: "What is an endemic disease?",
      muongozo: "Ugonjwa uliopo muda wote katika eneo maalum (mfano Malaria Tanzania).",
      jibu_en: "A disease constantly present in a specific area, such as Malaria in many parts of Tanzania."
    },
    {
      id: 16,
      swali_sw: "Nini tafsiri ya 'pandemic' (janga la dunia)?",
      swali_en: "What defines a pandemic?",
      muongozo: "Mlipuko uliosambaa duniani kote au mabara mengi.",
      jibu_en: "An epidemic that has spread across several countries or continents, affecting a large number of people."
    },
    {
      id: 17,
      swali_sw: "Kazi kuu za mfumo wa IDSR ni zipi?",
      swali_en: "What are the core functions of IDSR?",
      muongozo: "Utambuzi, ripoti, uchambuzi, uchunguzi, na majibu.",
      jibu_en: "Identification, reporting, analysis, investigation, response, and feedback regarding priority diseases."
    },
    {
      id: 18,
      swali_sw: "Elezea 'Event-Based Surveillance' (EBS).",
      swali_en: "Explain 'Event-Based Surveillance' (EBS).",
      muongozo: "Kukusanya taarifa kulingana na matukio (mfano tetesi au vifo vya wanyama).",
      jibu_en: "A component of IDSR focused on collecting information about potential health risks, such as rumors or unusual animal deaths."
    },
    {
      id: 19,
      swali_sw: "Nini umuhimu wa 'Standard Case Definition'?",
      swali_en: "Significance of the 'Standard Case Definition'?",
      muongozo: "Kuhakikisha kila kesi inatambuliwa na kuripotiwa kwa namna moja kote.",
      jibu_en: "Ensures every case is identified and reported identically across all facilities, crucial for data comparability."
    },
    {
      id: 20,
      swali_sw: "IDSR inasaidia vipi katika usimamizi wa majanga (Disaster Management)?",
      swali_en: "How does IDSR integrate with Disaster Risk Management?",
      muongozo: "Kutoa tahadhari za mapema na mikakati ya majibu kulingana na data.",
      jibu_en: "By providing early warning signs and data-driven response strategies for emergencies triggered by disasters."
    },

    /* II. BIOSTATISTICS AND DATA MANAGEMENT (21-40) */
    {
      id: 21,
      swali_sw: "Tofautisha kati ya population na sample.",
      swali_en: "Distinguish between a population and a sample.",
      muongozo: "Kundi zima (population) dhidi ya sehemu ndogo (sample).",
      jibu_en: "A population is the entire group of interest; a sample is a smaller subset used to make inferences about the whole."
    },
    {
      id: 22,
      swali_sw: "p-value ni nini katika vipimo vya kistatistiki?",
      swali_en: "What is a p-value in statistical testing?",
      muongozo: "Uwezekano wa matokeo kutokea kwa bahati (p < 0.05 ni significant).",
      jibu_en: "The probability that results occurred by chance. Typically, p < 0.05 is considered statistically significant."
    },
    {
      id: 23,
      swali_sw: "Tafsiri dhana ya Confidence Interval (CI).",
      swali_en: "Define a Confidence Interval (CI).",
      muongozo: "Masafa (range) ambayo yana uwezekano mkubwa wa kuwa na wastani wa kweli.",
      jibu_en: "A range likely to contain the true population parameter with a certain level of confidence (e.g., 95%)."
    },
    {
      id: 24,
      swali_sw: "Elezea Type I na Type II errors.",
      swali_en: "Explain Type I and Type II errors.",
      muongozo: "False Positive (Type I) dhidi ya False Negative (Type II).",
      jibu_en: "Type I: Rejecting a true null hypothesis. Type II: Failing to reject a false null hypothesis."
    },
    {
      id: 25,
      swali_sw: "Vigezo (variables) vikuu katika utafiti ni vipi?",
      swali_en: "What are the types of variables in biomedical research?",
      muongozo: "Numerical (namba) na Categorical (makundi).",
      jibu_en: "Numerical (discrete/continuous), Categorical (nominal), and Ordinal (ranked)."
    },
    {
      id: 26,
      swali_sw: "Linganisha kati ya Mean na Median.",
      swali_en: "Compare Mean and Median.",
      muongozo: "Wastani (mean) dhidi ya namba ya kati (median).",
      jibu_en: "Mean is the average of all values; Median is the middle value in an ordered set and is more robust to outliers."
    },
    {
      id: 27,
      swali_sw: "Variance na Standard Deviation vinapima nini?",
      swali_en: "What do Variance and Standard Deviation measure?",
      muongozo: "Kiwango cha kutawanyika kwa data (dispersion).",
      jibu_en: "They measure the spread or dispersion of data points around the mean."
    },
    {
      id: 28,
      swali_sw: "Tofauti ya Standard Deviation na Standard Error.",
      swali_en: "Difference between Standard Deviation and Standard Error.",
      muongozo: "SD ni kwa sample moja; SE ni kwa wastani wa sample dhidi ya population.",
      jibu_en: "SD describes variability in a single sample; SE describes variability of the sample mean relative to the true population mean."
    },
    {
      id: 29,
      swali_sw: "Nini maana ya 'skewed' distribution?",
      swali_en: "What is a 'skewed' distribution?",
      muongozo: "Data ambazo haziko sawa pande zote (asymmetrical).",
      jibu_en: "A distribution where data points are not symmetrical around the mean, often having a 'tail' on one side."
    },
    {
      id: 30,
      swali_sw: "Tafsiri Correlation (Uhusiano).",
      swali_en: "Define Correlation.",
      muongozo: "Uhusiano kati ya vigezo viwili (humaanishi causation).",
      jibu_en: "A statistical relationship indicating how two variables move relative to each other, though it does not imply causation."
    },
    {
      id: 31,
      swali_sw: "Wajibu wa MTUHA katika mfumo wa afya Tanzania ni upi?",
      swali_en: "What is the role of MTUHA in the Tanzanian health system?",
      muongozo: "Kukusanya data za afya kwa ajili ya upangaji na maamuzi ya kitaifa.",
      jibu_en: "MTUHA (HMIS) is the national system used for health data collection, planning, and decision-making."
    },
    {
      id: 32,
      swali_sw: "Kwanini tathmini ya ubora wa data (DQA) ni muhimu?",
      swali_en: "Why is data quality assessment important in public health?",
      muongozo: "Data mbaya huleta upangaji mbaya wa rasilimali (dawa/watumishi).",
      jibu_en: "Inaccurate data leads to poor planning and misallocation of resources like drugs and staff."
    },
    {
      id: 33,
      swali_sw: "Tafsiri Morbidity.",
      swali_en: "Define Morbidity.",
      muongozo: "Hali ya kuugua au kutokuwa na afya njema katika jamii.",
      jibu_en: "The state of being symptomatic or unhealthy due to a disease within a population."
    },
    {
      id: 34,
      swali_sw: "Tafsiri Mortality.",
      swali_en: "Define Mortality.",
      muongozo: "Idadi ya vifo katika jamii kwa muda maalum.",
      jibu_en: "The number of deaths in a particular population during a specific period."
    },
    {
      id: 35,
      swali_sw: "Elezea neno 'Indicator' katika takwimu za afya.",
      swali_en: "Explain the term 'Indicator' in health statistics.",
      muongozo: "Kigezo cha kupimia hali ya afya (mfano Maternal Mortality Ratio).",
      jibu_en: "A measurable variable used to monitor health status or program performance (e.g., Maternal Mortality Ratio)."
    },
    {
      id: 36,
      swali_sw: "Nini madhumuni ya '2x2 table' katika epidemiolojia?",
      swali_en: "What is the purpose of a 2x2 table in epidemiology?",
      muongozo: "Kupigia hesabu Odds Ratio, Relative Risk, Sensitivity, na Specificity.",
      jibu_en: "To calculate measures of association (Odds Ratio/Relative Risk) and diagnostic accuracy (Sensitivity/Specificity)."
    },
    {
      id: 37,
      swali_sw: "Random Sampling ni nini?",
      swali_en: "What is Random Sampling?",
      muongozo: "Kila mwanajamii kuwa na nafasi sawa ya kuchaguliwa kupunguza bias.",
      jibu_en: "A method where every population member has an equal chance of being selected, minimizing selection bias."
    },
    {
      id: 38,
      swali_sw: "Elezea neno 'Bias' katika utafiti.",
      swali_en: "Explain the term 'Bias' in research.",
      muongozo: "Kosa la kimfumo (systematic error) linaloleta matokeo yasiyo ya kweli.",
      jibu_en: "Any systematic error resulting in an incorrect estimate of the association between exposure and outcome."
    },
    {
      id: 39,
      swali_sw: "Nini maana ya 'Confounding Variable'?",
      swali_en: "What is a 'Confounding Variable'?",
      muongozo: "Kigezo cha nje kinachoweza kuvuruga matokeo ya utafiti.",
      jibu_en: "An outside influence that changes the effect of dependent/independent variables, potentially leading to false conclusions."
    },
    {
      id: 40,
      swali_sw: "Umuhimu wa 'Utekelezaji' (Implementation) katika mchakato wa afya ni upi?",
      swali_en: "Significance of 'Implementation' in the health process?",
      muongozo: "Hatua ya vitendo ya kutoa huduma au elimu ya afya.",
      jibu_en: "Involves carrying out planned interventions, such as administering medications or health education."
    },

    /* III. ENVIRONMENTAL HEALTH, WASH, AND FOOD SAFETY (41-60) */
    {
      id: 41,
      swali_sw: "Malengo makuu ya Sheria ya Afya ya Jamii (Public Health Act) 2009 ni yapi?",
      swali_en: "Primary objectives of the Public Health Act 2009?",
      muongozo: "Kukuza na kudumisha afya ya jamii, usafi, na udhibiti wa magonjwa.",
      jibu_en: "To promote and maintain public health, including disease control, sanitation, and waste management."
    },
    {
      id: 42,
      swali_sw: "Wajibu wa 'Authorized Officer' (Afisa aliyeruhusiwa) chini ya sheria ni upi?",
      swali_en: "Role of an Authorized Officer under the Act?",
      muongozo: "Kukagua majengo, kutoa amri za udhibiti, na usimamizi wa afya mipakani.",
      jibu_en: "Powers include inspecting premises, publishing orders for disease control, and managing port health risks."
    },
    {
      id: 43,
      swali_sw: "Wajibu wa mmiliki/mkazi kuhusu mifumo ya majitaka ni upi?",
      swali_en: "Duties of occupiers regarding drainage systems?",
      muongozo: "Kulinda mifumo ya majitaka isizibe au kuleta kero za afya.",
      jibu_en: "Occupiers must protect drainage systems on their premises to prevent blockages or health hazards."
    },
    {
      id: 44,
      swali_sw: "Sheria inasemaje kuhusu vyombo vya kuhifadhia maji?",
      swali_en: "How does the Act regulate water storage vessels?",
      muongozo: "Lazima viwe na vifuniko kuzuia mbu kuzaliana na kuzuia uchafuzi.",
      jibu_en: "Vessels must be fitted with covers to prevent contamination and mosquito breeding."
    },
    {
      id: 45,
      swali_sw: "Mahitaji ya kisheria kwa wazalishaji wa chakula Tanzania ni yapi?",
      swali_en: "Legal requirements for food manufacturers in Tanzania?",
      muongozo: "Usajili, viwango vya usafi, na uwekaji sahihi wa lebo.",
      jibu_en: "Must be registered, maintain hygiene standards, and ensure proper labeling/safety of additives."
    },
    {
      id: 46,
      swali_sw: "Tafsiri neno WASH.",
      swali_en: "Define WASH.",
      muongozo: "Water (Maji), Sanitation (Usafi wa Mazingira), Hygiene (Usafi wa Mwili).",
      jibu_en: "Water, Sanitation, and Hygiene—interventions aimed at providing safe water and clean environments to prevent disease."
    },
    
    {
      id: 47,
      swali_sw: "Alama gani za hatari 'Notifiable symptoms' kwa mhudumu wa chakula?",
      swali_en: "What are 'Notifiable' symptoms for a food handler?",
      muongozo: "Kuhara, kutapika, au vidonda mwilini vinavyoweza kueneza ugonjwa.",
      jibu_en: "Symptoms like diarrhea, vomiting, or skin lesions which pose a risk of foodborne illness transmission."
    },
    {
      id: 48,
      swali_sw: "Elezea dhana ya Port Health Services (Huduma za Afya Mipakani).",
      swali_en: "Explain the concept of 'Port Health Services'.",
      muongozo: "Usimamizi wa usafi na udhibiti mipakani kuzuia kuingia kwa magonjwa.",
      jibu_en: "Surveillance and sanitary control at entry points to prevent the importation of diseases."
    },
    {
      id: 49,
      swali_sw: "Nini kifurushi cha chini (Minimum Package) cha WASH mashuleni?",
      swali_en: "Minimum Package for school WASH?",
      muongozo: "Maji salama, vyoo bora vya jinsia zote, na sehemu za kunawa mikono.",
      jibu_en: "Includes safe water, separate functional latrines for boys/girls, and handwashing facilities with soap."
    },
    {
      id: 50,
      swali_sw: "Elezea Environmental Impact Assessment (EIA).",
      swali_en: "Describe Environmental Impact Assessment (EIA).",
      muongozo: "Utafiti wa kutathmini athari za miradi mikubwa kabla ya kuanza.",
      jibu_en: "A study required before major projects to predict and mitigate negative health or environmental impacts."
    },
    {
      id: 51,
      swali_sw: "Taka za hatari katika vituo vya afya zinatakiwa kudhibitiwa vipi?",
      swali_en: "How should hazardous waste be managed in health facilities?",
      muongozo: "Kutenga taka (segregation), lebo, na matibabu (incineration).",
      jibu_en: "Through segregation at source, proper labeling, safe storage, and treatment (e.g., incineration)."
    },
    {
      id: 52,
      swali_sw: "Nini maana ya 'Black Carbon' na kwanini inatupa hofu?",
      swali_en: "What is 'Black Carbon' and why is it a concern?",
      muongozo: "Moshi mweusi (kutokana na mkaa/kuni) unaosababisha magonjwa ya mapafu.",
      jibu_en: "Fine particulate matter from incomplete combustion (charcoal) causing respiratory and cardiovascular diseases."
    },
    {
      id: 53,
      swali_sw: "Tafsiri 'Light Pollution' (Uchafuzi wa Mwanga) katika afya ya jamii.",
      swali_en: "Define 'Light Pollution' in public health.",
      muongozo: "Mwanga wa bandia unaovuruga mzunguko wa usingizi (melatonin).",
      jibu_en: "Excessive misdirected artificial light that disrupts circadian rhythms and melatonin production."
    },
    {
      id: 54,
      swali_sw: "Athari zisizo za kimasikio (non-auditory) za uchafuzi wa kelele ni zipi?",
      swali_en: "What are the non-auditory effects of noise pollution?",
      muongozo: "Msongo wa mawazo (stress), kukosa usingizi, na shinikizo la damu.",
      jibu_en: "Stress, sleep disturbance, hypertension, and reduced cognitive performance."
    },
    {
      id: 55,
      swali_sw: "Wajibu wa Carbon Dioxide (CO2) kama kigezo cha hewa ya ndani ni upi?",
      swali_en: "Role of Carbon Dioxide as an indicator indoors?",
      muongozo: "Kipimo cha mzunguko mbaya wa hewa (ventilation marker).",
      jibu_en: "High CO2 levels indicate poor ventilation, leading to the buildup of other indoor pollutants."
    },
    {
      id: 56,
      swali_sw: "Hatua tatu za uchunguzi wa afya ya mfanyakazi kulingana na OSHA ni zipi?",
      swali_en: "Three stages of worker health screening by OSHA?",
      muongozo: "Kabla ya kazi, kipindi cha kazi, na wakati wa kuacha kazi (exit).",
      jibu_en: "At recruitment (pre-employment), during employment (periodic), and upon leaving or retirement (exit)."
    },
    {
      id: 57,
      swali_sw: "Tofauti ya OSHA na WCF ni ipi?",
      swali_en: "Distinguish between OSHA and WCF.",
      muongozo: "Kinga (OSHA) dhidi ya Fidia (WCF).",
      jibu_en: "OSHA focuses on preventing injuries or diseases at work; WCF provides financial compensation after injury or death."
    },
    {
      id: 58,
      swali_sw: "Tafsiri ya 'workplace' (mahali pa kazi) kulingana na sheria ya OSHA ni ipi?",
      swali_en: "Definition of a 'workplace' according to OSHA Act?",
      muongozo: "Eneo lolote lenye wafanyakazi angalau watatu.",
      jibu_en: "Any premises where at least three workers are employed."
    },
    {
      id: 59,
      swali_sw: "Taja aina tatu za ukaguzi unaofanywa na OSHA.",
      swali_en: "List three types of OSHA inspections.",
      muongozo: "Ukaguzi wa umeme, usalama, na usafi wa mazingira.",
      jibu_en: "Electrical safety, pressure vessels, lifting appliances, and general hygiene inspections."
    },
    {
      id: 60,
      swali_sw: "Nini maana ya dhana ya 'One Health'?",
      swali_en: "What is the 'One Health' approach?",
      muongozo: "Uhusiano kati ya afya ya Binadamu, Wanyama, na Mazingira.",
      jibu_en: "Recognizes that the health of people is closely connected to the health of animals and our shared environment."
    },

    /* IV. IMMUNIZATION AND MATERNAL HEALTH (61-75) */
    {
      id: 61,
      swali_sw: "Magonjwa gani mtoto lazima apewe chanjo kulingana na Public Health Act?",
      swali_en: "Diseases children must be immunized against (Public Health Act)?",
      muongozo: "Polio, TB, Tetanus, na Hepatitis B.",
      jibu_en: "Polio, Tuberculosis, Tetanus, and Hepatitis B."
    },
    {
      id: 62,
      swali_sw: "Elezea utoaji wa chanjo ya BCG.",
      swali_en: "Describe BCG vaccine administration.",
      muongozo: "Hutolewa wakati wa kuzaliwa mkononi kuzuia TB.",
      jibu_en: "Given at birth in the right arm to prevent severe forms of Tuberculosis."
    },
    {
      id: 63,
      swali_sw: "Nini madhumuni ya dozi ya chanjo ya OPV 0?",
      swali_en: "What is the purpose of the OPV 0 dose?",
      muongozo: "Kutoa kinga ya awali kwenye utumbo dhidi ya polio.",
      jibu_en: "Given at birth to provide early intestinal immunity against poliovirus."
    },
    {
      id: 64,
      swali_sw: "Chanjo ya Pentavalent ni ipi?",
      swali_en: "What is the Pentavalent vaccine?",
      muongozo: "Chanjo 5 kwa moja (Diphtheria, Tetanus, Pertussis, HepB, na Hib).",
      jibu_en: "Protects against Diphtheria, Tetanus, Pertussis, Hepatitis B, and Hib."
    },
    {
      id: 65,
      swali_sw: "Elezea mfumo wa 'Cold Chain' (Mlolongo wa Baridi).",
      swali_en: "Explain the 'Cold Chain'.",
      muongozo: "Uhifadhi wa chanjo katika joto sahihi tangu kiwandani hadi matumizi.",
      jibu_en: "System of storing and transporting vaccines at recommended temperatures from factory to use."
    },
    {
      id: 66,
      swali_sw: "Kundi gani lengwa la chanjo ya HPV nchini Tanzania?",
      swali_en: "Target Population for HPV vaccine in TZ?",
      muongozo: "Wasichana wenye umri wa miaka 9-14 kuzuia saratani ya mlango wa uzazi.",
      jibu_en: "Adolescent girls aged 9-14 to prevent cervical cancer."
    },
    {
      id: 67,
      swali_sw: "Denominator ya chanjo Tanzania inapatikana vipi?",
      swali_en: "How is the vaccine 'Denominator' established in TZ?",
      muongozo: "Kwa kutumia makadirio ya sensa na sajili za vizazi.",
      jibu_en: "Using national census projections and birth registries."
    },
    {
      id: 68,
      swali_sw: "Tafsiri 'Drop-out Rate' katika masuala ya chanjo.",
      swali_en: "Define 'Drop-out Rate' in immunization.",
      muongozo: "Asilimia ya watoto walioanza chanjo lakini hawakumaliza dozi zote.",
      jibu_en: "Percentage of children who start but do not complete all required doses in a series."
    },
    {
      id: 69,
      swali_sw: "Alama gani za hatari mama mjamzito anapaswa kufundishwa?",
      swali_en: "Danger Signs in pregnancy to teach mothers?",
      muongozo: "Kuvuja damu, kichwa kikali, kutoona vizuri, na kuvimba mwili.",
      jibu_en: "Bleeding, severe headache, blurred vision, swelling of hands/face, and reduced fetal movement."
    },
    {
      id: 70,
      swali_sw: "Kwanini anemia ya upungufu wa madini ya chuma ni kawaida kwa wajawazito Tanzania?",
      swali_en: "Why is Iron-deficiency anemia common in pregnant women in TZ?",
      muongozo: "Ongezeko la hitaji la mwili na lishe duni au malaria.",
      jibu_en: "Increased physiological demand for iron often coupled with inadequate nutrition or malaria."
    },
    {
      id: 71,
      swali_sw: "Wajibu wa chanjo ya Rota ni upi?",
      swali_en: "What is the role of the Rota vaccine?",
      muongozo: "Kulinda watoto dhidi ya kuhara kukali kunakosababishwa na rotavirus.",
      jibu_en: "To protect infants against rotavirus, a leading cause of severe diarrhea and dehydration."
    },
    {
      id: 72,
      swali_sw: "Misingi mikuu ya PMTCT ni ipi?",
      swali_en: "What are the 'Pillars' of PMTCT?",
      muongozo: "Kinga ya maambukizi kwa mama, kuzuia mimba zisizotarajiwa, na kinga kwa mtoto.",
      jibu_en: "Primary prevention, preventing unintended pregnancy in HIV+ women, preventing transmission, and family care."
    },
    {
      id: 73,
      swali_sw: "Mtoto aliyezaliwa na mama mwenye VVU hupimwa lini kwa mara ya kwanza?",
      swali_en: "When is a baby born to an HIV+ mother first tested?",
      muongozo: "Wakati wa kuzaliwa au ndani ya wiki chache za mwanzo (EID).",
      jibu_en: "At birth or within first few weeks, followed by tests at 10 weeks and after breastfeeding stops."
    },
    {
      id: 74,
      swali_sw: "IPT (Isoniazid Prophylactic Therapy) ni nini?",
      swali_en: "What is IPT (Isoniazid Prophylactic Therapy)?",
      muongozo: "Dawa ya kuzuia Kifua Kikuu kwa watu walio katika hatari (mfano wenye VVU).",
      jibu_en: "Medication given to prevent Tuberculosis in people at high risk, such as those living with HIV."
    },
    {
      id: 75,
      swali_sw: "Tafsiri magonjwa yasiyoambukiza (NCDs).",
      swali_en: "Define Non-Communicable Diseases (NCDs).",
      muongozo: "Magonjwa ya muda mrefu yasiyoenea toka mtu mmoja kwenda mwingine (Kisukari/Presha).",
      jibu_en: "Chronic conditions not passed from person to person, such as Diabetes and Hypertension."
    },

    /* V. PUBLIC SERVICE ETHICS AND LAW (76-85) */
    {
      id: 76,
      swali_sw: "Lengo kuu la usimamizi wa maadili katika utumishi wa umma ni nini?",
      swali_en: "Primary objective of Ethics Management in Public Service?",
      muongozo: "Kusimamia utekelezaji wa kanuni za kimaadili na malalamiko.",
      jibu_en: "To oversee the implementation of the code of conduct and coordinate complaints."
    },
    {
      id: 77,
      swali_sw: "Nani mwenye mamlaka ya kutoa kibali cha mshahara binafsi (E.1)?",
      swali_en: "Who authorizes a 'personal salary' permit (Standing Order E.1)?",
      muongozo: "Katibu Mkuu, Menejimenti ya Utumishi wa Umma.",
      jibu_en: "The Permanent Secretary of the President's Office, Public Service Management."
    },
    {
      id: 78,
      swali_sw: "Mchakato wa nidhamu katika utumishi wa umma ukoje?",
      swali_en: "Disciplinary proceedings in TZ Public Service?",
      muongozo: "Mchakato rasmi (makosa makubwa) na mchakato wa muhtasari (makosa madogo).",
      jibu_en: "Formal Proceedings (major offenses) and Summary Proceedings (minor offenses)."
    },
    {
      id: 79,
      swali_sw: "Elezea 'Integrity Pledge' (Ahadi ya Uadilifu).",
      swali_en: "Explain the 'Integrity Pledge'.",
      muongozo: "Ahadi ya mtumishi kusimamia uadilifu, uwazi, na uwajibikaji.",
      jibu_en: "A commitment made by public servants to uphold ethical standards, transparency, and accountability."
    },
    {
      id: 80,
      swali_sw: "Madhumuni ya Mkataba wa Huduma kwa Mteja (Client Service Charter) ni nini?",
      swali_en: "Purpose of a 'Client Service Charter'?",
      muongozo: "Kuarifu wateja kuhusu kiwango cha huduma na kuongeza uwajibikaji.",
      jibu_en: "To inform customers about service quality expectations and increase institutional accountability."
    },
    {
      id: 81,
      swali_sw: "Tafsiri 'Professionalism' kulingana na kanuni za maadili Tanzania.",
      swali_en: "Define 'Professionalism' in the TZ Code of Ethics.",
      muongozo: "Uadilifu, kutoa huduma bila upendeleo, na kutunza siri.",
      jibu_en: "Maintaining integrity, providing services without bias, and ensuring patient/client confidentiality."
    },
    {
      id: 82,
      swali_sw: "Haki za mtumishi wa umma chini ya OSHA ni zipi?",
      swali_en: "Rights of a public servant under OSHA?",
      muongozo: "Haki ya mazingira salama, taarifa za hatari, na vipimo vya afya.",
      jibu_en: "Right to a safe environment, information about hazards, and health checkups."
    },
    {
      id: 83,
      swali_sw: "Msimamizi anapaswa kufanya nini akigundua hatari mpya kazini?",
      swali_en: "Supervisor's handling of newly discovered hazards?",
      muongozo: "Kutoa ripoti haraka na kuchukua hatua za muda za usalama.",
      jibu_en: "By immediate reporting, taking interim safety measures, and working for permanent solutions."
    },
    {
      id: 84,
      swali_sw: "Wajibu wa Mfuko wa Fidia kwa Wafanyakazi (WCF) ni upi?",
      swali_en: "Role of the Worker’s Compensation Fund (WCF)?",
      muongozo: "Kutoa fidia kwa wafanyakazi wanaoumia au kupata magonjwa kazini.",
      jibu_en: "To provide compensation to employees for injuries sustained or diseases contracted during employment."
    },
    {
      id: 85,
      swali_sw: "Kwanini usiri ni muhimu katika taarifa za afya za wafanyakazi?",
      swali_en: "Why is confidentiality essential in Personnel Health Information?",
      muongozo: "Kulinda faragha ya mtumishi na kujenga imani katika mfumo wa afya.",
      jibu_en: "To protect employee privacy and ensure trust in the occupational health system."
    },

    /* VI. BEHAVIORAL AND SCENARIO (86-100) */
    {
      id: 86,
      swali_sw: "Unatambuaje tatizo la afya ya jamii kwa kutumia mbinu ya STAR?",
      swali_en: "Public health issue identification (STAR method)?",
      muongozo: "Situation (Hali), Task (Kazi), Action (Kitendo), na Result (Matokeo).",
      jibu_en: "Identify the problem (e.g., high malaria), take action (education), and present result (increased net usage)."
    },
    {
      id: 87,
      swali_sw: "Unapangaje vipaumbele kukiwa na rasilimali chache?",
      swali_en: "Prioritize efforts with limited resources?",
      muongozo: "Lenga afua zenye matokeo makubwa na makundi yaliyo hatarini zaidi kwanza.",
      jibu_en: "Focus on evidence-based high-impact interventions and vulnerable populations first."
    },
    {
      id: 88,
      swali_sw: "Utachukua hatua gani kukiwa na mlipuko mpya wa ugonjwa wa kuambukiza?",
      swali_en: "Action during a new infectious outbreak?",
      muongozo: "Washa mfumo wa dharura, isolations, na wasiliana na jamii.",
      jibu_en: "Activate emergency response, conduct surveillance, isolate suspected cases, and initiate community communication."
    },
    {
      id: 89,
      swali_sw: "Unatatuaje mgongano (conflict) na mfanyakazi mwenzako?",
      swali_en: "How to handle a conflict with a coworker?",
      muongozo: "Busara, mazungumzo ya faragha, na kulenga ushirikiano wa kikazi.",
      jibu_en: "Maintain professionalism, seek private discussion for root cause, and focus on collaboration."
    },
    {
      id: 90,
      swali_sw: "Kwanini unapenda masuala ya afya ya jamii?",
      swali_en: "Why are you passionate about public health?",
      muongozo: "Hamu ya kusaidia jamii kupitia kinga kuliko tiba pekee.",
      jibu_en: "Reflect on the desire to improve community well-being through prevention rather than just treatment."
    },
    {
      id: 91,
      swali_sw: "Una uzoefu gani katika tathmini ya programu (program evaluation)?",
      swali_en: "Experience with program evaluation?",
      muongozo: "Kutumia data kuona kama malengo ya programu yamefikiwa.",
      jibu_en: "Using data to assess whether a health program met its objectives and identifying areas for improvement."
    },
    {
      id: 92,
      swali_sw: "Unapataje taarifa mpya za afya ya jamii (trends)?",
      swali_en: "How do you stay current with public health trends?",
      muongozo: "Kusoma majarida ya kitatibu na kuhudhuria mikutano ya kitaalamu.",
      jibu_en: "By reading medical journals, attending conferences, and active professional networking."
    },
    {
      id: 93,
      swali_sw: "Elezea wakati ulipokosea kazini na ulifanya nini.",
      swali_en: "Describe a time you made a mistake at work.",
      muongozo: "Taja kosa, hatua ya kurekebisha, na ulichojifunza lisijirudie.",
      jibu_en: "Identify the mistake, the immediate correction taken, and what was learned to prevent recurrence."
    },
    {
      id: 94,
      swali_sw: "Unadhibiti vipi vikwazo vya lugha au utamaduni jamii?",
      swali_en: "Address cultural or language barriers?",
      muongozo: "Kutumia viongozi wa kijamii na kuheshimu mila ili kujenga imani.",
      jibu_en: "By using community influencers, translators, and respecting local customs to build trust."
    },
    {
      id: 95,
      swali_sw: "Mbinu yako ya kuchambua mienendo (trends) ya data ikoje?",
      swali_en: "Approach to analyzing data for trends?",
      muongozo: "Kutumia takwimu, kusafisha data, na kutafsiri kulingana na mazingira ya eneo.",
      jibu_en: "Using statistical tools, cleaning data, identifying patterns, and interpreting them within local contexts."
    },
    {
      id: 96,
      swali_sw: "Unadhibiti vipi shinikizo la kazi na msongo wa mawazo?",
      swali_en: "How do you handle pressure and stress?",
      muongozo: "Upangaji wa vipaumbele na baki na utulivu kutoa huduma bora.",
      jibu_en: "Maintain organization, prioritize tasks, and remain calm to ensure quality of care."
    },
    {
      id: 97,
      swali_sw: "Unajiona wapi katika miaka mitano ijayo kitalamu?",
      swali_en: "Where do you see yourself in five years?",
      muongozo: "Kukua na kubobea katika utaalamu ndani ya utumishi wa umma.",
      jibu_en: "Relate growth to specialized professional development within the public health sector."
    },
    {
      id: 98,
      swali_sw: "Kwanini tukuajiri wewe?",
      swali_en: "Why should we hire you?",
      muongozo: "Onesha ujuzi wako, uzoefu, na jinsi unavyoendana na malengo ya taasisi.",
      jibu_en: "Highlight specific skills, relevant experience, and alignment with the institution’s goals."
    },
    {
      id: 99,
      swali_sw: "Unahakikishaje uwajibikaji (accountability) katika timu yako?",
      swali_en: "Ensure accountability in your team?",
      muongozo: "Malengo yaliyo wazi, kutumia OPRAS, na kuwa mfano mzuri mwenyewe.",
      jibu_en: "Through clear goals, regular performance reviews (OPRAS), and setting a personal example."
    },
    {
      id: 100,
      swali_sw: "Changamoto kubwa ya sekta ya afya Tanzania sasa ni ipi?",
      swali_en: "Most significant challenge in TZ health sector?",
      muongozo: "Mzigo mkubwa wa magonjwa (maambukizi/NCDs) na uhaba wa watumishi.",
      jibu_en: "The dual burden of diseases (Communicable/NCDs) and critical human resource gaps."
    }
  ]
};

export default publicHealthData;