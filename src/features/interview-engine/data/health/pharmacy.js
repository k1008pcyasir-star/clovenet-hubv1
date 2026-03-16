const pharmacyData = {
  id: "pharmacy",
  title: "Pharmacy Expert Interview Questions",
  description:
    "Strategic Evaluation: 100 Frequently Asked Questions for Pharmacy Professionals in Tanzania. Reflecting expert-level knowledge for PSRS (Utumishi) and Pharmacy Council evaluations.",

  etiquette: [
    {
      title: "Regulatory Compliance",
      content:
        "Daima onyesha uelewa wa Sheria ya Famasia ya mwaka 2011 na miongozo ya Baraza la Famasia Tanzania (Pharmacy Council)."
    },
    {
      title: "Patient Safety First",
      content:
        "Sisitiza umuhimu wa usahihi katika kutoa dawa (dispensing) na kutoa ushauri sahihi (counseling) ili kuzuia madhara ya dawa."
    },
    {
      title: "Inventory Integrity",
      content:
        "Zungumzia umuhimu wa mifumo ya serikali kama eLMIS na mbinu za FEFO/FIFO katika kuzuia upotevu wa dawa (wastage)."
    }
  ],

  questions: [
    /* CATEGORY 1: PROFESSIONAL IDENTITY AND INTRODUCTION (1-20) */
    {
      id: 1,
      swali_sw: "Elezea majukumu ya kitaalamu ya mtaalamu wa famasia katika hospitali ya mkoa.",
      swali_en: "Describe the professional roles and responsibilities of a pharmaceutical technician in a regional hospital.",
      muongozo: "Lenga katika dispensing, usimamizi wa stoo (eLMIS), na kufuata viwango vya Baraza la Famasia.",
      jibu_en: "The technician is responsible for the accurate dispensing of medications, managing department-level inventory using eLMIS, supervising pharmaceutical assistants, and ensuring that all storage conditions meet the standards of the Pharmacy Council."
    },
    {
      id: 2,
      swali_sw: "Kwanini uliamua kuchagua taaluma ya famasia nchini Tanzania?",
      swali_en: "Why did you choose to pursue a career in the pharmacy cadre in Tanzania?",
      muongozo: "Onyesha nia ya kusaidia jamii na kuhakikisha wagonjwa wanapata dawa sahihi.",
      jibu_en: "The choice was driven by the desire to serve as a vital link in the healthcare chain, ensuring that the right patient receives the right medicine in the correct dose, thereby contributing to the national goal of improving health outcomes."
    },
    {
      id: 3,
      swali_sw: "Kazi kuu za Baraza la Famasia Tanzania (Pharmacy Council) ni zipi?",
      swali_en: "What are the primary functions of the Pharmacy Council of Tanzania?",
      muongozo: "Sajili za watumishi, kutoa leseni za maduka, na kusimamia maadili ya taaluma.",
      jibu_en: "The Council functions to regulate the profession through the registration of personnel, licensing of premises, and the oversight of pharmacy education and professional ethics."
    },
    {
      id: 4,
      swali_sw: "Elezea umuhimu wa Elimu Endelevu (CPD) kwa wataalamu wa famasia.",
      swali_en: "Explain the importance of Continuing Professional Development (CPD) for pharmacy professionals.",
      muongozo: "Gusia STG 2021 na mabadiliko ya sayansi ya madawa (pharmacology).",
      jibu_en: "CPD is essential for maintaining competence in a rapidly evolving field, allowing practitioners to stay updated on new pharmacological developments, regulatory changes, and revised clinical guidelines like the STG 2021."
    },
    {
      id: 5,
      swali_sw: "Unatafsiri vipi uadilifu wa kitaalamu (professional integrity) katika famasia?",
      swali_en: "How do you define professional integrity in a pharmaceutical context?",
      muongozo: "Kufuata kanuni za maadili na kutanguliza afya ya mgonjwa mbele ya faida ya biashara.",
      jibu_en: "Integrity involves adhering to the Code of Ethics and the Pharmacy Act, prioritizing patient safety over commercial gain, and being honest in all professional interactions."
    },
    {
      id: 6,
      swali_sw: "Unajiona wapi katika miaka mitano ijayo ndani ya taaluma hii?",
      swali_en: "Where do you see the role of the pharmacist in Tanzania in the next five years?",
      muongozo: "Lenga katika kliniki ya madawa (MTM) na mapambano dhidi ya usugu wa dawa (AMR).",
      jibu_en: "The role will likely expand further into clinical pharmacy services, including medication therapy management (MTM) and enhanced roles in public health initiatives like antimicrobial stewardship."
    },
    {
      id: 7,
      swali_sw: "Sifa zipi ni muhimu zaidi kwa mtaalamu wa famasia katika maduka ya jamii?",
      swali_en: "What skills do you believe are most critical for a community pharmacist?",
      muongozo: "Mawasiliano, umakini katika kutoa dawa, na usimamizi wa biashara.",
      jibu_en: "Communication is paramount, alongside clinical knowledge, attention to detail in dispensing, and business management skills to ensure the sustainability of the pharmacy."
    },
    {
      id: 8,
      swali_sw: "Unashughulikiaje hali ambapo kazi inaonekana kujirudia na kukuchosha?",
      swali_en: "How do you handle a situation where you feel your work is getting repetitive?",
      muongozo: "Tafuta motisha kwa kuangalia maisha unayookoa kupitia kila cheti cha dawa.",
      jibu_en: "I find motivation in the knowledge that every prescription dispensed is a critical intervention in a patient's life. I also seek opportunities for workplace improvements and mentorship."
    },
    {
      id: 9,
      swali_sw: "Elezea uzoefu wako katika kutumia mfumo wa PCMIS.",
      swali_en: "Describe your experience with the Pharmacy Council Management Information System (PCMIS).",
      muongozo: "Gusia usajili wa kitaalamu, malipo ya ada ya mwaka, na vibali vya majengo.",
      jibu_en: "I am proficient in using the PCMIS online portal for professional registration, retention fee payments, and premises permit applications."
    },
    {
      id: 10,
      swali_sw: "Kwanini taasisi ya umma (Wizara ya Afya) ikuajiri wewe?",
      swali_en: "Why should a public institution like the Ministry of Health hire you?",
      muongozo: "Uwezo wa kiufundi, uelewa wa mfumo wa afya wa TZ, na uadilifu katika utumishi.",
      jibu_en: "I possess the required technical skills, a deep understanding of the Tanzanian health system, and a commitment to the public service values of accountability and responsiveness."
    },
    {
      id: 11,
      swali_sw: "Mafanikio yako makubwa ya kitaalamu hadi sasa ni yapi?",
      swali_en: "What is your greatest professional accomplishment to date?",
      muongozo: "Zungumzia upunguzaji wa stockouts au usimamizi mzuri wa dispensing unit.",
      jibu_en: "Focus on a quantifiable improvement, such as reducing stockouts at a previous facility or successfully managing a high-volume dispensing unit."
    },
    {
      id: 12,
      swali_sw: "Unadhibiti vipi msongo wa mawazo mahali pa kazi, hasa kukiwa na wagonjwa wengi?",
      swali_en: "How do you manage professional stress, particularly in high-volume settings?",
      muongozo: "Panga vipaumbele (prioritization) na wasiliana vizuri na timu yako.",
      jibu_en: "I utilize task prioritization, maintain a calm and organized workflow, and ensure clear communication with my team to prevent errors under pressure."
    },
    {
      id: 13,
      swali_sw: "Somo gani lilikuwa gumu zaidi kwako chuoni na ulilivuka vipi?",
      swali_en: "What subject in your pharmacy studies did you find most challenging and how did you overcome it?",
      muongozo: "Onyesha ustahimilivu na mbinu za kijifunza (group studies/rotations).",
      jibu_en: "Reflect on resilience and a proactive approach, such as utilizing peer study groups or additional clinical rotations to master complex subjects."
    },
    {
      id: 14,
      swali_sw: "Wenzako au waajiri wa zamani wanakuelezea vipi kikazi?",
      swali_en: "How do your friends or former colleagues describe your professional character?",
      muongozo: "Makamini, mwaminifu, na mchezaji mzuri wa timu (team player).",
      jibu_en: "They would describe me as detail-oriented, reliable, and a supportive team player who remains focused on patient outcomes."
    },
    {
      id: 15,
      swali_sw: "Unasoma vitabu au majarida gani ili kuendelea kuwa na maarifa mapya?",
      swali_en: "What books or journals do you read to stay current in your field?",
      muongozo: "Gusia BNF, STG Tanzania, na majarida ya famasia ya Afrika Mashariki.",
      jibu_en: "I regularly consult the British National Formulary (BNF), the Tanzania Standard Treatment Guidelines (STG), and journals related to East African pharmaceutical practice."
    },
    {
      id: 16,
      swali_sw: "Unashughulikia vipi mafanikio ya kitaalamu?",
      swali_en: "How do you handle professional success?",
      muongozo: "Yatumie kama kipimo cha kujiwekea viwango vya juu zaidi vya huduma.",
      jibu_en: "Success is a motivator to continue improving. I use it as a benchmark to set higher standards for myself and my department."
    },
    {
      id: 17,
      swali_sw: "Elezea wakati ulipofanya kosa la kitaalamu na ulilitatuaje?",
      swali_en: "Tell us about a time you made a professional mistake and how you resolved it?",
      muongozo: "Wajibika kwa kosa, chukua hatua ya haraka kurekebisha, na zuia lisijirudie.",
      jibu_en: "The focus should be on accountability, immediate corrective action, and implementation of measures to prevent recurrence."
    },
    {
      id: 18,
      swali_sw: "Uko tayari kufanya kazi maeneo ya pembezoni au vijijini Tanzania?",
      swali_en: "How comfortable are you with working in remote or rural areas of Tanzania?",
      muongozo: "Sisitiza ahadi yako ya kutoa huduma kwa watanzania wote bila kujali eneo.",
      jibu_en: "As a health professional, I am committed to universal health access and am ready to serve in any region where my skills are needed."
    },
    {
      id: 19,
      swali_sw: "Nini umuhimu wa 'No Objection Certificate' (NOC)?",
      swali_en: "What is the significance of the 'No Objection Certificate' (NOC)?",
      muongozo: "Hati ya TCU inayomruhusu mwanafunzi kusoma famasia nje ya nchi.",
      jibu_en: "The NOC is a document from TCU that permits a student to study pharmacy abroad, ensuring their eventual qualification will be recognized in Tanzania."
    },
    {
      id: 20,
      swali_sw: "Elezea muundo wa uongozi (hierarchy) ndani ya idara ya famasia ya hospitali.",
      swali_en: "Describe the hierarchy within a hospital pharmacy department in Tanzania.",
      muongozo: "Pharmacist-in-Charge hadi wasaidizi wa famasia.",
      jibu_en: "Led by a Pharmacist-in-Charge, followed by Staff Pharmacists, Pharmaceutical Technicians, and Assistants, working collaboratively."
    },

    /* CATEGORY 2: CLINICAL PHARMACY AND PHARMACOLOGY (21-40) */
    {
      id: 21,
      swali_sw: "Elezea Pharmacodynamics na umuhimu wake katika STG.",
      swali_en: "Define Pharmacodynamics and explain its relevance to the STG.",
      muongozo: "Inahusu jinsi dawa inavyofanya kazi mwilini kuchagua dawa salama.",
      jibu_en: "Pharmacodynamics is the study of the biochemical and physiological effects of drugs. It guides the STG in selecting drugs with the best efficacy-to-safety profiles for Tanzanians."
    },
    {
      id: 22,
      swali_sw: "Kuna tofauti gani kati ya side effect na adverse drug reaction (ADR)?",
      swali_en: "What is the difference between a side effect and an adverse drug reaction?",
      muongozo: "Side effect inatabirika; ADR ni athari mbaya isiyotarajiwa (noxious response).",
      jibu_en: "A side effect is a predictable effect occurring at therapeutic doses; an ADR is a more serious, unintended, and noxious response that may necessitate stopping the drug."
    },
    {
      id: 23,
      swali_sw: "Elezea jinsi dawa ya mseto (ALU) inavyofanya kazi dhidi ya malaria.",
      swali_en: "Explain the mechanism of action of Artemether-Lumefantrine (ALU).",
      muongozo: "Artemether inapunguza vimelea haraka; Lumefantrine inamalizia vilivyobaki.",
      jibu_en: "Artemether provides rapid reduction of parasite biomass, while Lumefantrine has a longer half-life and eliminates remaining parasites to prevent recrudescence."
    },
    {
      id: 24,
      swali_sw: "Nini umuhimu wa 'Bioavailability'?",
      swali_en: "What is the significance of 'Bioavailability'?",
      muongozo: "Sehemu ya dawa inayofika kwenye mzunguko wa damu ikiwa hai (active).",
      jibu_en: "It is the fraction of an administered dose that reaches systemic circulation in an active form, crucial for determining dosage and route."
    },
    {
      id: 25,
      swali_sw: "Elezea alama za malaria kali kwa mtoto na jinsi ya kuitibu.",
      swali_en: "Describe the clinical signs and management of severe malaria in a child.",
      muongozo: "Alama: kupoteza fahamu, degedege; Tiba: Artesunate ya kudunga.",
      jibu_en: "Signs: altered consciousness, convulsions, severe anemia. Management: parenteral Artesunate followed by a full course of ALU once oral intake is possible."
    },
    {
      id: 26,
      swali_sw: "Uainishaji wa 'AWaRe' wa viuavijasumu (antibiotics) ni nini?",
      swali_en: "What is the 'AWaRe' classification of antibiotics?",
      muongozo: "Access (matumizi mapana), Watch (ya kuangaliwa), na Reserve (ngazi ya mwisho).",
      jibu_en: "A WHO tool adopted in STG 2021 grouping antibiotics into Access (wide use), Watch (limited use), and Reserve (last resort)."
    },
    {
      id: 27,
      swali_sw: "Elezea dhana ya 'Polypharmacy' na hatari zake kwa wazee.",
      swali_en: "Explain the concept of 'Polypharmacy' and its risks in elderly patients.",
      muongozo: "Matumizi ya dawa nyingi kwa wakati mmoja; huleta muingiliano (interactions) wa dawa.",
      jibu_en: "Polypharmacy is concurrent use of multiple medications, increasing risks of drug-drug interactions, ADRs, and reduced adherence."
    },
    {
      id: 28,
      swali_sw: "Makundi gani ya dawa za shinikizo la juu la damu yanapendekezwa nchini Tanzania?",
      swali_en: "First-line antihypertensive drug classes recommended for adults in Tanzania?",
      muongozo: "Thiazide diuretics, ACE inhibitors/ARBs, na Calcium channel blockers.",
      jibu_en: "Thiazide-like diuretics, ACE inhibitors/ARBs, and long-acting dihydropyridine calcium channel blockers."
    },
    {
      id: 29,
      swali_sw: "Tafsiri 'Therapeutic Index' na utoe mfano wa dawa yenye index ndogo.",
      swali_en: "Define 'Therapeutic Index' and give an example of a drug with a narrow index.",
      muongozo: "Uwiano wa dozi ya sumu na dozi ya tiba. Mfano: Warfarin au Digoxin.",
      jibu_en: "Ratio of toxic dose to therapeutic dose. Examples: Warfarin and Digoxin require close monitoring."
    },
    {
      id: 30,
      swali_sw: "Mahitaji ya uhifadhi wa Oxytocin katika wodi ya wazazi ni yapi?",
      swali_en: "What are the storage requirements for oxytocin in a labor ward?",
      muongozo: "Uhifadhi wa baridi (cold chain) 2°C mpaka 8°C.",
      jibu_en: "Must be stored in a cold chain ($2^\circ\text{C}$ to $8^\circ\text{C}$) to maintain potency as it is heat-sensitive."
    },
    {
      id: 31,
      swali_sw: "Kwanini Metformin ndiyo dawa ya kwanza inayopendekezwa kwa kisukari cha aina ya pili?",
      swali_en: "Why is Metformin the preferred first-line agent for Type 2 Diabetes?",
      muongozo: "Inafanya kazi vizuri, haina hatari ya hypoglycemia, na ni ya bei nafuu.",
      jibu_en: "Effective, low hypoglycemia risk, weight-neutral, and cost-effective within the Tanzanian essential medicine framework."
    },
    {
      id: 32,
      swali_sw: "Wajibu wa 'spacer' katika tiba ya pumu (asthma) ni upi?",
      swali_en: "What is the role of a spacer in asthma therapy?",
      muongozo: "Inasaidia dawa kufika mapafuni vizuri, hasa kwa watoto na wazee.",
      jibu_en: "Improves delivery of inhaled medication to the lungs, especially for children or elderly struggling with inhaler coordination."
    },
    {
      id: 33,
      swali_sw: "Tafsiri 'Pharmacovigilance' na umuhimu wake nchini Tanzania.",
      swali_en: "Define 'Pharmacovigilance' and its importance in Tanzania.",
      muongozo: "Kufuatilia usalama wa dawa baada ya kuingia sokoni ili kubaini madhara (ADRs).",
      jibu_en: "Monitoring medicine safety after licensing to identify ADRs specific to the local population and monitor for substandard medicines."
    },
    {
      id: 34,
      swali_sw: "Antidote ni nini? Taja antidote ya sumu ya Paracetamol.",
      swali_en: "What is an 'Antidote'? Give an example for Paracetamol poisoning.",
      muongozo: "Kitu kinachokabiliana na sumu. Antidote: N-acetylcysteine.",
      jibu_en: "A substance that counteracts a poison. N-acetylcysteine is the antidote for Paracetamol overdose."
    },
    {
      id: 35,
      swali_sw: "Elezea mabadiliko ya pharmacokinetic kwa mgonjwa mwenye matatizo ya figo.",
      swali_en: "Describe the pharmacokinetic changes in a patient with chronic kidney disease.",
      muongozo: "Kupungua kwa utoaji wa dawa mwilini (reduced clearance) huleta sumu.",
      jibu_en: "Reduced drug clearance leads to increased half-life and potential toxicity, requiring dosage adjustments for renally excreted drugs."
    },
    {
      id: 36,
      swali_sw: "Tiba ya kwanza ya Kifua Kikuu (TB) nchini Tanzania ni ipi?",
      swali_en: "What is the first-line treatment for Uncomplicated TB in Tanzania?",
      muongozo: "Mwezi 2 wa kuanzia (RHZE) na miezi 4 ya kumalizia (RH).",
      jibu_en: "A 6-month regimen: 2 months intensive phase (RHZE) and 4 months continuation phase (RH)."
    },
    {
      id: 37,
      swali_sw: "Kwanini matumizi ya Folic Acid ni muhimu mwanzoni mwa ujauzito?",
      swali_en: "Why is Folic Acid supplementation critical in early pregnancy?",
      muongozo: "Inapunguza hatari ya ulemavu wa mgongo wa mtoto (neural tube defects).",
      jibu_en: "Significantly reduces the risk of neural tube defects (NTDs) like spina bifida in the developing fetus."
    },
    {
      id: 38,
      swali_sw: "Dawa za 'Legend Drugs' ni zipi?",
      swali_en: "What are 'Legend Drugs'?",
      muongozo: "Dawa zinazotolewa kwa cheti cha daktari pekee kisheria.",
      jibu_en: "Medications legally required to be dispensed only by prescription, as indicated by a 'legend' on the manufacturer's label."
    },
    {
      id: 39,
      swali_sw: "Unawezaje kupiga hesabu ya dozi ya mtoto kwa kutumia Clark's Rule?",
      swali_en: "How do you calculate the pediatric dose of a drug using Clark's Rule?",
      muongozo: "(Uzito lbs / 150) x dozi ya mtu mzima. Lakini mg/kg ni bora zaidi.",
      jibu_en: "Formula: $(\text{Weight in lbs} / 150) \times \text{Adult Dose}$. However, weight-based ($mg/kg$) is preferred."
    },
    {
      id: 40,
      swali_sw: "Elezea tofauti kati ya agonist na antagonist.",
      swali_en: "Explain the difference between an agonist and an antagonist.",
      muongozo: "Agonist inawasha receptor; Antagonist inaziba (blocks) receptor.",
      jibu_en: "Agonist binds and activates a receptor; Antagonist binds but blocks the receptor response."
    },

    /* CATEGORY 3: PHARMACY LAW, ETHICS, AND GOVERNANCE (41-60) */
    {
      id: 41,
      swali_sw: "Lengo kuu la Sheria ya Famasia (Pharmacy Act) ya mwaka 2011 ni nini?",
      swali_en: "What is the main objective of the Pharmacy Act, 2011?",
      muongozo: "Kusimamia wataalamu, majengo, na biashara ya dawa kwa usalama wa umma.",
      jibu_en: "To provide for the regulation and control of pharmacy professionals, premises, and the business of medicines to ensure public safety."
    },
    {
      id: 42,
      swali_sw: "Nani anaitwa 'Mfamasia aliyesajiliwa' (Registered Pharmacist) kisheria Tanzania?",
      swali_en: "Who is a 'Registered Pharmacist' under Tanzanian law?",
      muongozo: "Mtu aliyekidhi vigezo vya elimu/internship na kurekodiwa katika Register ya Baraza.",
      jibu_en: "A person meets education/internship requirements and is approved by the Council to appear in the Register."
    },
    {
      id: 43,
      swali_sw: "Tafsiri 'Utovu wa Maadili' (Professional Misconduct) kulingana na sheria ya Famasia.",
      swali_en: "Define 'Professional Misconduct' as per the Pharmacy Act.",
      muongozo: "Kitendo kinachovunja kanuni za maadili au viwango vya taaluma.",
      jibu_en: "Any act or omission that contravenes the Code of Ethics or falls short of expected professional standards."
    },
    {
      id: 44,
      swali_sw: "Vigezo vya cheti cha dawa (prescription) halali nchini Tanzania ni vipi?",
      swali_en: "What are the requirements for a valid prescription in Tanzania?",
      muongozo: "Kiandikwe, kiwe na tarehe, saini ya daktari, na jina la mgonjwa.",
      jibu_en: "Written, dated, signed by a registered prescriber, containing patient name, address, and clear instructions."
    },
    {
      id: 45,
      swali_sw: "Wajibu wa Msajili wa Baraza la Famasia (Registrar) ni upi?",
      swali_en: "What is the role of the Registrar of the Pharmacy Council?",
      muongozo: "Ni msimamizi mkuu (CEO) wa shughuli za kila siku za Baraza na sajili zote.",
      jibu_en: "Acts as CEO, maintaining registers/rolls and managing the Council's day-to-day operations."
    },
    {
      id: 46,
      swali_sw: "Nini maana ya 'Fiduciary Relationship' katika maadili ya famasia?",
      swali_en: "What does the term 'Fiduciary Relationship' mean in pharmacy ethics?",
      muongozo: "Uhusiano wa uaminifu ambapo mfamasia anamtanguliza mgonjwa kwanza.",
      jibu_en: "A relationship of trust where the pharmacist acts in the best interest of the patient, above all else."
    },
    {
      id: 47,
      swali_sw: "Nini madhara ya kuchelewa kuhuisha (renew) kibali cha biashara ya dawa?",
      swali_en: "What are the consequences of late renewal of a pharmacy business permit?",
      muongozo: "Adhabu ya kulipa 25% ya ada ya kawaida (tarehe ya mwisho ni Julai 15).",
      jibu_en: "A penalty of 25% of the original fee if not completed within the statutory window (June 10 - July 15)."
    },
    {
      id: 48,
      swali_sw: "Elezea dhana ya 'Autonomy' katika maadili ya afya.",
      swali_en: "Explain the concept of 'Autonomy' in healthcare ethics.",
      muongozo: "Haki ya mgonjwa kufanya maamuzi yake mwenyewe kuhusu matibabu yake.",
      jibu_en: "The principle that a patient has the right to make their own decisions about medical care after being informed."
    },
    {
      id: 49,
      swali_sw: "Muuzaji wa Dawa aliyeruhusiwa (Authorized Seller) ni nani?",
      swali_en: "What is an 'Authorized Seller of Medicines'?",
      muongozo: "Biashara zisizokuwa duka la famasia zinazouza dawa maalum (mfano ADDO).",
      jibu_en: "A business other than a registered pharmacy allowed to sell specific medicines (e.g., ADDO/DLDM)."
    },
    {
      id: 50,
      swali_sw: "Kumbukumbu za dawa zinazodhibitiwa (controlled drugs) zinapaswa kukaa kwa muda gani?",
      swali_en: "How long should records of controlled drugs be kept?",
      muongozo: "Zihifadhiwe kwa angalau miaka miwili kwa ajili ya ukaguzi.",
      jibu_en: "Must be maintained for at least two years from the date of the last entry for regulatory inspection."
    },
    {
      id: 51,
      swali_sw: "Dawa Zilizogushiwa (Falsified Medicines) ni zipi?",
      swali_en: "Define 'Falsified Medicines' according to the Pharmacy Council.",
      muongozo: "Dawa zinazozalishwa kwa nia ya kudanganya utambulisho au chanzo chake.",
      jibu_en: "Medicines that deliberately misrepresent identity or source, often lacking active ingredients or containing wrong ones."
    },
    {
      id: 52,
      swali_sw: "Ada ya mwaka (Retention Fee) ni nini na kwanini ni lazima?",
      swali_en: "What is the 'Retention Fee' and why is it mandatory?",
      muongozo: "Ada inayolipwa na wataalamu ili kubaki kwenye sajili rasmi za taaluma kila mwaka.",
      jibu_en: "Annual fee paid by professionals to stay on statutory registers and remain in good standing."
    },
    {
      id: 53,
      swali_sw: "Kamati ya Famasia (Pharmacy Committee) ni nini?",
      swali_en: "What is the 'Pharmacy Committee'?",
      muongozo: "Kamati inayohusika na uhakiki wa usajili na mitihani ya kitaalamu.",
      jibu_en: "A Council committee tasked with reviewing registration applications and handling professional examinations."
    },
    {
      id: 54,
      swali_sw: "Je, pharmaceutical technician anaweza kuwa 'Superintendent' wa duka la dawa?",
      swali_en: "Can a pharmaceutical technician serve as a 'Superintendent' of a retail pharmacy?",
      muongozo: "Hapana, kwa sheria ya famasia ni Mfamasia pekee anayeweza.",
      jibu_en: "No. Under the Pharmacy Act 2011, only a registered pharmacist can act as a superintendent."
    },
    {
      id: 55,
      swali_sw: "Kamati ya Nidhamu (Disciplinary Committee) ina wajibu gani?",
      swali_en: "What is the 'Disciplinary Committee'?",
      muongozo: "Kuchunguza malalamiko ya utovu wa maadili na kutoa mapendekezo ya adhabu.",
      jibu_en: "Body responsible for inquiring into misconduct complaints and recommending sanctions to the Council."
    },
    {
      id: 56,
      swali_sw: "Tafsiri 'Professional Secrecy'.",
      swali_en: "Define 'Professional Secrecy'.",
      muongozo: "Wajibu wa kimaadili wa kutunza siri za wagonjwa zilizopatikana kazini.",
      jibu_en: "Ethical obligation to maintain confidentiality of all patient-related info obtained during duty."
    },
    {
      id: 57,
      swali_sw: "Nini umuhimu wa fomu ya njano (Yellow Form) nchini Tanzania?",
      swali_en: "What is the importance of the 'Yellow Form' in Tanzanian healthcare?",
      muongozo: "Kutolea ripoti ya madhara ya dawa (ADRs) kwenda TMDA.",
      jibu_en: "Official tool used for reporting suspected adverse drug reactions (ADRs) to the TMDA."
    },
    {
      id: 58,
      swali_sw: "Elezea kanuni ya 'Non-Maleficence'.",
      swali_en: "Explain the principle of 'Non-Maleficence'.",
      muongozo: "Ahadi ya kimaadili ya kutokumdhuru mgonjwa (do no harm).",
      jibu_en: "The fundamental ethical commitment to 'do no harm' to the patient through negligence or lack of skill."
    },
    {
      id: 59,
      swali_sw: "Wajibu wa TMDA ni upi katika udhibiti wa dawa?",
      swali_en: "What is the role of the TMDA?",
      muongozo: "TMDA inadhibiti bidhaa (ubora na usalama); Baraza linadhibiti watu (personnel).",
      jibu_en: "Regulates products (quality, safety, and efficacy of medicines/devices), while the Council regulates personnel."
    },
    {
      id: 60,
      swali_sw: "Nini tafsiri ya 'Unfit to Practice'?",
      swali_en: "What constitutes 'Unfit to Practice'?",
      muongozo: "Hali ya kimwili, kiakili, au kulewa inayomzuia mtaalamu kufanya kazi kwa usalama.",
      jibu_en: "Physical, mental, or substance-related condition rendering a professional incapable of safe performance."
    },

    /* CATEGORY 4: INVENTORY MANAGEMENT AND SUPPLY CHAIN (61-80) */
    {
      id: 61,
      swali_sw: "Mfumo wa 'Integrated Logistics System' (ILS) Tanzania ni nini?",
      swali_en: "What is the 'Integrated Logistics System' (ILS) in Tanzania?",
      muongozo: "Mfumo unaosimamiwa na MSD wa kuagiza na kusambaza bidhaa za afya kwa mkupuo mmoja.",
      jibu_en: "A logistics system managed by MSD combining ordering/distribution of various health commodities into one stream."
    },
    {
      id: 62,
      swali_sw: "Elezea 'FEFO' na umuhimu wake.",
      swali_en: "Define 'FEFO' and its importance.",
      muongozo: "Inayopotea muda wa kwanza (expired), inatoka kwanza (first out) ili kuzuia upotevu.",
      jibu_en: "First Expired, First Out. Ensures oldest stock is used first to prevent wastage and ensure viability."
    },
    {
      id: 63,
      swali_sw: "Bin Card ni nini?",
      swali_en: "What is a 'Bin Card'?",
      muongozo: "Kadi inayotunza kumbukumbu za kuingia na kutoka kwa bidhaa stoo.",
      jibu_en: "Record kept at storage tracking item movement (receipts/issues) and current physical balance."
    },
    {
      id: 64,
      swali_sw: "Nini madhumuni ya fomu ya RRF (Report and Requisition Form)?",
      swali_en: "Explain the purpose of the 'Report and Requisition Form' (RRF).",
      muongozo: "Kutoa ripoti ya matumizi ya mwezi na kuagiza mahitaji mapya MSD.",
      jibu_en: "Tool used by facilities to report monthly consumption/stock to MSD and request new supplies."
    },
    {
      id: 65,
      swali_sw: "eLMIS ni nini?",
      swali_en: "What is the 'eLMIS'?",
      muongozo: "Mfumo wa kielektroniki wa kusimamia taarifa za vifaa vya afya (logistics).",
      jibu_en: "Electronic Logistics Management Information System providing real-time digital visibility of the health supply chain."
    },
    {
      id: 66,
      swali_sw: "Unashughulikiaje dawa zilizoisha muda wake (expired) stoo?",
      swali_en: "How do you handle 'Expired Medicines' in a hospital store?",
      muongozo: "Tenga mbali, weka lebo ya 'EXPIRED', rekodi kwenye register na dispose kwa TMDA.",
      jibu_en: "Physically separate from usable stock, label 'EXPIRED', record in register, and dispose via TMDA guidelines."
    },
    {
      id: 67,
      swali_sw: "Nini tafsiri ya 'Stockout'?",
      swali_en: "What is a 'Stockout'?",
      muongozo: "Hali ya kukosekana kwa dawa muhimu kituo cha afya.",
      jibu_en: "Situation where essential medicine is unavailable, leading to treatment failure or patient risk."
    },
    {
      id: 68,
      swali_sw: "Tafsiri 'Lead Time'.",
      swali_en: "Define 'Lead Time'.",
      muongozo: "Muda tangu kuagiza dawa hadi zinapopokelewa kituoni.",
      jibu_en: "Period between placing an order and when goods are received and available for use."
    },
    {
      id: 69,
      swali_sw: "Safety Stock ni nini?",
      swali_en: "What is 'Safety Stock'?",
      muongozo: "Kiwango cha akiba kilichowekwa kuzuia upungufu wa ghafla (buffer stock).",
      jibu_en: "Extra inventory held to protect against stockouts caused by delays or unexpected demand spikes."
    },
    {
      id: 70,
      swali_sw: "Elezea mchakato wa kupokea bidhaa kutoka MSD.",
      swali_en: "Describe the process of receiving goods from MSD.",
      muongozo: "Hakiki idadi, kagua kama zimeharibika, hakiki muda wa kuisha (expiry), na update bin cards.",
      jibu_en: "Verify quantities vs delivery note, check for damage, verify batch/expiry, and update bin cards immediately."
    },
    {
      id: 71,
      swali_sw: "Uchambuzi wa ABC (ABC Analysis) katika stoo ni nini?",
      swali_en: "What is 'ABC Analysis' in inventory?",
      muongozo: "Kugawa bidhaa kwa thamani: A (thamani kubwa), B (kati), C (thamani ndogo).",
      jibu_en: "Categorizing stock by value: A (high value, low volume), B (moderate), C (low value, high volume)."
    },
    {
      id: 72,
      swali_sw: "Physical Count ni nini na inatakiwa kufanyika mara ngapi?",
      swali_en: "What is a 'Physical Count' and how often?",
      muongozo: "Kuhesabu dawa kwa mkono kuhakiki bin cards kila mwezi au robo mwaka.",
      jibu_en: "Manual count to verify records; recommended monthly or at least quarterly in Tanzania."
    },
    {
      id: 73,
      swali_sw: "Elezea dhana ya 'Reverse Logistics'.",
      swali_en: "Explain 'Reverse Logistics'.",
      muongozo: "Kurudisha bidhaa zilizozidi ngazi ya juu (mfano chanjo za kampeni).",
      jibu_en: "Process of moving commodities back up the chain, e.g., returning unused campaign medicines."
    },
    {
      id: 74,
      swali_sw: "Stores Ledger ni nini?",
      swali_en: "What is a 'Stores Ledger'?",
      muongozo: "Kumbukumbu kuu ya uhasibu inayofuatilia thamani na idadi ya bidhaa zote.",
      jibu_en: "Central accounting record tracking quantity and value of all inventory within a facility/district."
    },
    {
      id: 75,
      swali_sw: "Tafsiri 'Maximum Stock Level'.",
      swali_en: "Define 'Maximum Stock Level'.",
      muongozo: "Kiwango cha juu zaidi cha bidhaa unachoweza kuwa nacho kuzuia upotevu (expiry).",
      jibu_en: "Highest quantity to be held to prevent overstocking and expiry wastage."
    },
    {
      id: 76,
      swali_sw: "Unahakikishaje ubora wa dawa wakati wa kupokea?",
      swali_en: "How do you verify medicine quality upon receipt?",
      muongozo: "Kagua seal, lebo, rangi ya dawa, na mchubuko wa vidonge.",
      jibu_en: "Check seals, labeling, absence of discoloration/sedimentation, and tablet consistency."
    },
    {
      id: 77,
      swali_sw: "Nini maana ya 'Namba ya Control' (Control Number) katika malipo?",
      swali_en: "What is the 'Control Number' in government payments?",
      muongozo: "Namba ya kielektroniki kwa malipo ya GePG kuhakikisha uwazi wa fedha.",
      jibu_en: "Unique electronic number used for GePG payments ensuring financial transparency."
    },
    {
      id: 78,
      swali_sw: "Kwanini 'De-junking' ni muhimu katika duka la dawa?",
      swali_en: "Why is 'De-junking' necessary in a pharmacy?",
      muongozo: "Kuondoa vifaa vilivyovunjika au dawa zilizoisha muda kutoa nafasi ya kazi.",
      jibu_en: "Remove non-viable/expired items taking up space and risking accidental use."
    },
    {
      id: 79,
      swali_sw: "Usimamizi wa 'Cold Chain' ni nini?",
      swali_en: "What is 'Cold Chain Management'?",
      muongozo: "Matumizi ya majokofu kuhifadhi dawa nyeti kama chanjo na insulin.",
      jibu_en: "Using refrigerators/cold boxes to maintain temp for sensitive items like vaccines/insulin."
    },
    {
      id: 80,
      swali_sw: "Nini cha kufanya kukiwa na utofauti kati ya ripoti ya RRF na hesabu ya stoo?",
      swali_en: "What if there is a discrepancy between RRF and actual count?",
      muongozo: "Chunguza chanzo, andika kwenye bin card, na ripoti kwa msimamizi.",
      jibu_en: "Investigate cause (theft/error), document on bin card, and report to supervisor."
    },

    /* CATEGORY 5: BEHAVIORAL, SCENARIO, AND COMMUNICATION (81-100) */
    {
      id: 81,
      swali_sw: "Mshauri mgonjwa anayesita kuanza dawa za kufubaza virusi (ART).",
      swali_en: "Counsel a patient hesitant to take ART for HIV?",
      muongozo: "Onyesha huruma na elezea faida za kutoeneza virusi (viral suppression).",
      jibu_en: "Empathize, explain benefits (viral suppression for normal life), and address fears about side effects."
    },
    {
      id: 82,
      swali_sw: "Nini utafanya ukigundua umetoa dawa yenye nguvu (strength) isiyo sahihi?",
      swali_en: "What if you dispensed the wrong strength of medication?",
      muongozo: "Mtafute mgonjwa haraka, badilisha dawa, na toa taarifa ya tukio (incident report).",
      jibu_en: "Contact patient immediately to stop use, offer replacement, apologize, and file incident report."
    },
    {
      id: 83,
      swali_sw: "Unashughulika vipi na mteja mwenye hasira/mkaidi?",
      swali_en: "How do you handle an aggressive customer?",
      muongozo: "Baki kuwa na busara (professional), sikiliza bila kukata, na tatua shida yake.",
      jibu_en: "Remain professional, listen without interrupting, and prioritize health needs while maintaining policy."
    },
    {
      id: 84,
      swali_sw: "Nifanye nini mwandiko wa daktari kwenye cheti cha dawa hausomeki?",
      swali_en: "What if a prescriber's handwriting is illegible?",
      muongozo: "Usikisie kamwe. Mpige simu daktari aliyetoa cheti kuhakiki dawa.",
      jibu_en: "Never guess. Call the prescriber to confirm medication, dose, and instructions before dispensing."
    },
    {
      id: 85,
      swali_sw: "Unaelezeaje dozi ngumu kwa wagonjwa wasiojua kusoma/kuandika?",
      swali_en: "Explain complex dosing to low-literacy patients?",
      muongozo: "Tumia picha, alama za rangi, na mbinu ya 'teach-back' (amrudie kueleza alichoelewa).",
      jibu_en: "Use visual aids (colors/symbols), simple language, and 'teach-back' method for understanding."
    },
    {
      id: 86,
      swali_sw: "Mteja anaomba kununua dawa ya viuavijasumu (Watch) bila cheti?",
      swali_en: "Patient asks for 'Watch' antibiotic over the counter?",
      muongozo: "Kataa kwa heshima, elezea hatari za usugu wa dawa (resistance).",
      jibu_en: "Politely refuse, explain antibiotic resistance risks and legal prescription requirement."
    },
    {
      id: 87,
      swali_sw: "Elezea wakati ulioonyesha uongozi kazini.",
      swali_en: "Describe a time you demonstrated leadership.",
      muongozo: "Zungumzia kutatua stockout au kufundisha wadogo wako kitaaluma.",
      jibu_en: "Focus on initiative in workflow improvement, managing stockout crises, or training juniors."
    },
    {
      id: 88,
      swali_sw: "Unahakikishaje siri za mgonjwa duka la dawa kukiwa na watu wengi?",
      swali_en: "Ensure patient confidentiality in a busy pharmacy?",
      muongozo: "Tumia sauti ya chini na hakikisha nyaraka hazionekani na kila mtu.",
      jibu_en: "Maintain professional distance, use low voices for counseling, and secure all records."
    },
    {
      id: 89,
      swali_sw: "Utafanya nini ukigundua mfanyakazi mwenzako anatumia madawa ya kulevya?",
      swali_en: "Colleague showing signs of substance abuse?",
      muongozo: "Toa ripoti kwa mkuu wa famasia kulinda usalama wa wagonjwa.",
      jibu_en: "Report to Pharmacist-in-Charge or management as patient safety is at risk."
    },
    {
      id: 90,
      swali_sw: "Mzazi anakataa matibabu ya kuokoa maisha ya mtoto, nini utafanya?",
      swali_en: "Parent refuses life-saving treatment for a child?",
      muongozo: "Elezea hatari kwa mtoto na husisha afisa ustawi wa jamii/sheria.",
      jibu_en: "Explain medical risks, document refusal, and consult social worker or legal officer."
    },
    {
      id: 91,
      swali_sw: "Unapangaje vipaumbele kukiwa na maombi mengi ya dharura?",
      swali_en: "How to prioritize multiple urgent requests?",
      muongozo: "Tanguliza dharura za kliniki (mfano watoto mahututi).",
      jibu_en: "Prioritize by clinical urgency (e.g., pediatric emergencies) and use an organized queue."
    },
    {
      id: 92,
      swali_sw: "Ukipingana na mshauri mwenzako kliniki, utafanya nini?",
      swali_en: "Disagree with a colleague on a clinical issue?",
      muongozo: "Mzungumzie faragha na rejelea muongozo wa STG kupata suluhu.",
      jibu_en: "Discuss privately, refer to STG or clinical evidence to reach consensus for patient interest."
    },
    {
      id: 93,
      swali_sw: "Ukihisi dawa iliyopo stoo ni ya kugushi, utachukua hatua gani?",
      swali_en: "Suspect a medicine in stock is falsified?",
      muongozo: "Zuia matumizi (quarantine), ripoti TMDA/Baraza, na taarifa kwa muuzaji.",
      jibu_en: "Quarantine stock, inform TMDA/Council, and notify supplier (MSD/Wholesaler)."
    },
    {
      id: 94,
      swali_sw: "Mtazamo wako wa 'Huduma Bora kwa Mteja' ni upi?",
      swali_en: "Your approach to 'Exceptional Customer Service'?",
      muongozo: "Kuwa msikivu, mwepesi, na kuhakikisha mgonjwa anaelewa dawa yake.",
      jibu_en: "Attentive, empathetic, ensuring correct medication and clear patient understanding."
    },
    {
      id: 95,
      swali_sw: "Unadhibiti vipi presha ya kazi kwenye kituo chenye watumishi wachache?",
      swali_en: "Pressure of working in understaffed facility?",
      muongozo: "Lenga umakini zaidi kuliko kasi ili usifanye kosa (medication error).",
      jibu_en: "Focus on accuracy over speed, communicate wait times, and stay organized."
    },
    {
      id: 96,
      swali_sw: "Mgonjwa anauliza kuhusu dawa usiyoijua vizuri, utafanya nini?",
      swali_en: "Patient has questions about unfamiliar drug?",
      muongozo: "Angalia miongozo ya kitabibu au muulize mwandamizi kabla ya kujibu.",
      jibu_en: "Consult clinical references or senior colleague, then provide correct information."
    },
    {
      id: 97,
      swali_sw: "Nini umuhimu wa kuuliza historia ya mzio (allergy history)?",
      swali_en: "Importance of asking 'Allergy History'?",
      muongozo: "Kuzuia madhara hatari (anaphylaxis) ya dawa kama Penicillin.",
      jibu_en: "Prevent fatal hypersensitivity reactions to meds like Penicillin or Sulfonamides."
    },
    {
      id: 98,
      swali_sw: "Ushauri wako kuhusu uzingatiaji wa matibabu (Treatment Adherence) unakuwaje?",
      swali_en: "Counsel on 'Treatment Adherence'?",
      muongozo: "Elezea kuwa kuruka dozi kunasababisha usugu wa ugonjwa.",
      jibu_en: "Explain that missing doses leads to treatment failure and drug-resistant strains."
    },
    {
      id: 99,
      swali_sw: "Unajua nini kuhusu Bima ya Afya kwa Wote (UHC)?",
      swali_en: "Understanding of 'Universal Health Coverage' (UHC)?",
      muongozo: "Lengo la watanzania wote kupata huduma bila kikwazo cha fedha.",
      jibu_en: "Goal for all Tanzanians to access health services without financial hardship via stable supply."
    },
    {
      id: 100,
      swali_sw: "Kwanini wewe ndiye mgombea bora wa nafasi hii?",
      swali_en: "Why are you the best candidate for this position?",
      muongozo: "Unganisha uelewa wa STG, maadili, na nia ya kuboresha huduma.",
      jibu_en: "Summarize knowledge of STG, ethics commitment, and proactive attitude toward improvement."
    }
  ]
};

export default pharmacyData;