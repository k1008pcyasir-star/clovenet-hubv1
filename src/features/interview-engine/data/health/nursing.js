const nursingData = {
  id: "nursing",
  title: "Nursing & Midwifery Interview Questions",
  description:
    "Synthesized Excellence: 100 Essential Questions based on PSRS, TNMC licensure, and Ministry of Health clinical assessments.",

  etiquette: [
    {
      title: "Clinical Accuracy",
      content:
        "Daima tumia lugha ya kitaalamu ya kliniki (medical terminology) huku ukielezea taratibu kwa usahihi kulingana na miongozo ya STG 2021."
    },
    {
      title: "Empathy & Ethics",
      content:
        "Onyesha uelewa wa kina wa maadili ya uuguzi, faragha ya mgonjwa, na haki za mgonjwa (Patient's Charter)."
    },
    {
      title: "Patriotism",
      content:
        "Sisitiza utayari wako wa kufanya kazi katika mazingira yoyote nchini Tanzania, ikiwemo vijijini ili kupunguza vifo vya mama na mtoto."
    }
  ],

  questions: [
    /* CLUSTER 1: PROFESSIONAL IDENTITY & ETHICS (1-15) */
    {
      id: 1,
      swali_sw: "Jitambulishe na ueleze historia yako ya kitaalamu.",
      swali_en: "Introduce yourself and summarize your professional background.",
      muongozo: "Tathmini uwezo wa mawasiliano na mafanikio ya kikliniki.",
      jibu_en: "I am a registered nurse with [X] years of experience. I graduated from [College] and have developed strong skills in patient assessment and maternal care. My goal is to provide quality, evidence-based nursing care to the Tanzanian community."
    },
    {
      id: 2,
      swali_sw: "Nini kilikuvutia kuwa muuguzi na mkunga?",
      swali_en: "What inspired you to pursue a career in nursing and midwifery?",
      muongozo: "Inapima motisha ya ndani (intrinsic motivation) na ahadi kwa taaluma.",
      jibu_en: "I was inspired by the desire to support mothers and children. Witnessing the impact of compassionate care in my community fueled my passion to become a professional caregiver and contribute to the national health system."
    },
    {
      id: 3,
      swali_sw: "Unajua nini kuhusu 'Maadili ya Kitaalamu' katika sekta ya afya Tanzania?",
      swali_en: "What do you understand by 'Professional Ethics' in the Tanzanian health sector?",
      muongozo: "Gusia usiri (confidentiality), uhuru wa mgonjwa (autonomy), na kutodhuru (non-maleficence).",
      jibu_en: "Professional ethics involves adhering to a set of moral principles including confidentiality, respecting patient autonomy (uhuru wa mgonjwa), and ensuring non-maleficence (kutodhuru mgonjwa)."
    },
    {
      id: 4,
      swali_sw: "Unapataje taarifa za hivi karibuni kuhusu mabadiliko ya sekta ya afya?",
      swali_en: "How do you stay informed about the latest advancements in healthcare?",
      muongozo: "Gusia TNMC, nyaraka za Wizara, na miongozo ya STG 2021.",
      jibu_en: "I regularly review the Standard Treatment Guidelines (STG 2021), attend Continuing Professional Development (CPD) sessions, and follow circulars from the Ministry of Health and the Tanzania Nursing and Midwifery Council (TNMC)."
    },
    {
      id: 5,
      swali_sw: "Kwanini tukuajiri wewe kwa nafasi hii?",
      swali_en: "Why should we hire you for this specific role?",
      muongozo: "Lenga mchanganyiko wa ujuzi, mtazamo chanya, na utayari wa kufanya kazi vijijini.",
      jibu_en: "I possess a strong clinical foundation, a positive work ethic, and a deep patriotic commitment to serve in any region, including underserved rural areas, to ensure every Tanzanian receives quality care."
    },
    {
      id: 6,
      swali_sw: "Elezea wakati ulipoona kitendo kisicho cha kimaadili. Ulifanya nini?",
      swali_en: "Describe a time you witnessed an unethical act. How did you handle it?",
      muongozo: "Inatathmini uadilifu na ujuzi wa njia za kutoa ripoti (reporting channels).",
      jibu_en: "I would approach the situation by prioritizing patient safety first, then I would report the unethical conduct through the established internal hospital channels such as the Nursing In-charge or the ethics committee."
    },
    {
      id: 7,
      swali_sw: "Nini umuhimu wa usajili na leseni ya TNMC?",
      swali_en: "What is the importance of the TNMC registration and license?",
      muongozo: "Haki ya kisheria ya kufanya kazi na ulinzi wa umma.",
      jibu_en: "Registration with the TNMC is a legal requirement that grants the right to practice as a nurse in Tanzania, ensuring that only qualified individuals provide care to protect the public from malpractice."
    },
    {
      id: 8,
      swali_sw: "Unashughulikiaje mgonjwa anayekataa matibabu ya kuokoa maisha kwa sababu ya dini?",
      swali_en: "How to handle a patient refusing life-saving treatment due to religion?",
      muongozo: "Usawa kati ya uhuru wa mgonjwa na wajibu wa kutoa huduma.",
      jibu_en: "I would provide comprehensive health education regarding the risks of refusal. If they still refuse, I must respect their autonomy while ensuring they sign a refusal form as per hospital protocol."
    },
    {
      id: 9,
      swali_sw: "Malengo yako ya kikazi ya muda mfupi na mrefu ni yapi?",
      swali_en: "What are your short-term and long-term career goals?",
      muongozo: "Nia ya kubobea (specialize) na kukua ndani ya utumishi wa umma.",
      jibu_en: "Short-term, I aim to stabilize clinical operations in my ward. Long-term, I plan to specialize in [Field, e.g., Critical Care] to enhance the hospital's capacity to handle complex cases."
    },
    {
      id: 10,
      swali_sw: "Elezea 'Clinical Governance' na umuhimu wake.",
      swali_en: "Define 'Clinical Governance' and its relevance.",
      muongozo: "Uhahiki wa ubora (quality assurance) na uboreshaji endelevu.",
      jibu_en: "Clinical governance is a framework through which health organizations are accountable for continuously improving the quality of their services and safeguarding high standards of care."
    },
    {
      id: 11,
      swali_sw: "Unadhibiti vipi siri za mgonjwa katika wodi iliyojaa watu?",
      swali_en: "How do you maintain patient confidentiality in a crowded ward?",
      muongozo: "Busara ya kitaalamu na usalama wa nyaraka.",
      jibu_en: "I maintain confidentiality by using lowered tones during handovers, ensuring screens are drawn during procedures, and keeping all medical records in secure, locked areas."
    },
    {
      id: 12,
      swali_sw: "Elezea sifa inayokufanya uwe na thamani katika kituo cha afya cha kijijini.",
      swali_en: "Describe a strength that makes you an asset to a rural health center.",
      muongozo: "Uwezo wa kubadilika (adaptability) na ubunifu wa kutumia rasilimali chache.",
      jibu_en: "My greatest strength is adaptability. In rural settings where resources may be limited, I am resourceful and able to prioritize critical care using the available tools without compromising patient safety."
    },
    {
      id: 13,
      swali_sw: "Taja udhaifu wako mmoja na hatua ulizochukua kuuboresha.",
      swali_en: "Describe a weakness and the steps taken to address it.",
      muongozo: "Inaonyesha kujitambua (self-awareness) na uboreshaji.",
      jibu_en: "I used to struggle with clinical documentation speed. I have since improved by adopting structured templates and improving my typing skills, ensuring records are completed accurately and on time."
    },
    {
      id: 14,
      swali_sw: "Unajua nini kuhusu dira na dhima (Vision & Mission) ya Wizara ya Afya?",
      swali_en: "What do you know about the mission and vision of the Ministry of Health?",
      muongozo: "Ulinganifu na malengo ya afya ya kitaifa.",
      jibu_en: "The Ministry's vision is to have a healthy society with improved social well-being, achieved through providing quality health services that are accessible and affordable to all Tanzanians."
    },
    {
      id: 15,
      swali_sw: "Changamoto gani kubwa unaweza kukutana nayo mikoani na utaitatuaje?",
      swali_en: "Biggest challenge in a remote region and how to overcome it?",
      muongozo: "Utatuzi wa matatizo na uzalendo.",
      jibu_en: "The biggest challenge might be limited infrastructure. I would overcome this by fostering strong community relations and working closely with the local government to maximize the reach of mobile outreach services."
    },

    /* II. FUNDAMENTAL NURSING CONCEPTS (16-30) */
    {
      id: 16,
      swali_sw: "Taja hatua tano za Mchakato wa Uuguzi (Nursing Process).",
      swali_en: "What are the five steps of the Nursing Process?",
      muongozo: "Mfumo wa ADPIE.",
      jibu_en: "The five steps are: 1. Assessment (Tathmini), 2. Diagnosis (Utambuzi), 3. Planning (Mipango), 4. Implementation (Utekelezaji), and 5. Evaluation (Upimaji)."
    },
    {
      id: 17,
      swali_sw: "Kuna tofauti gani kati ya subjective na objective data?",
      swali_en: "What is the difference between subjective and objective data?",
      muongozo: "Maneno ya mgonjwa dhidi ya vipimo vya muuguzi.",
      jibu_en: "Subjective data is information provided by the patient (e.g., 'I feel dizzy'). Objective data is measurable information observed by the nurse (e.g., Blood pressure 120/80)."
    },
    {
      id: 18,
      swali_sw: "Elezea nadharia ya Maslow's Hierarchy of Needs katika huduma kwa mgonjwa.",
      swali_en: "Explain Maslow’s Hierarchy of Needs in patient care.",
      muongozo: "Kupa vipaumbele mahitaji ya kibaolojia (physiological needs).",
      jibu_en: "It helps nurses prioritize care by meeting basic physiological needs (breathing, nutrition) before safety or emotional needs, ensuring the most critical issues are addressed first."
    },
    {
      id: 19,
      swali_sw: "Nini madhumuni ya lengo la 'SMART' katika uuguzi?",
      swali_en: "What is the purpose of a SMART goal in nursing?",
      muongozo: "Specific, Measurable, Achievable, Relevant, Time-bound.",
      jibu_en: "SMART goals ensure that the nursing care plan is focused and effective, allowing the nurse to evaluate whether the desired patient outcome has been reached within a set timeframe."
    },
    {
      id: 20,
      swali_sw: "Taja 'haki' (rights) za utoaji wa dawa.",
      swali_en: "Describe the 'rights' of medication administration.",
      muongozo: "Itifaki za usalama (Safety protocols).",
      jibu_en: "They include Right Patient, Right Drug, Right Dose, Right Route, Right Time, and Right Documentation."
    },
    {
      id: 21,
      swali_sw: "Hatua za kupona kwa jeraha (wound healing) ni zipi?",
      swali_en: "What are the stages of wound healing?",
      muongozo: "Awamu za kibaolojia (Physiological phases).",
      jibu_en: "The stages are: 1. Inflammatory phase, 2. Proliferative phase, and 3. Remodeling phase."
    },
    {
      id: 22,
      swali_sw: "Tofauti kati ya Nursing Diagnosis na Medical Diagnosis?",
      swali_en: "Nursing Diagnosis vs. Medical Diagnosis?",
      muongozo: "Mwitikio wa mgonjwa dhidi ya utambuzi wa ugonjwa.",
      jibu_en: "A medical diagnosis identifies a specific disease (e.g., Diabetes). A nursing diagnosis identifies the patient's response to that disease (e.g., Knowledge deficit or Risk for infection)."
    },
    {
      id: 23,
      swali_sw: "Unafanyaje tathmini ya awali katika idara ya dharura (Emergency)?",
      swali_en: "Initial assessment in the Emergency Department?",
      muongozo: "Mbinu ya ABC (Airway, Breathing, Circulation).",
      jibu_en: "I use the ABC approach: A - Airway (is it clear?), B - Breathing (is it adequate?), and C - Circulation (is there a pulse or bleeding?)."
    },
    {
      id: 24,
      swali_sw: "Kiwango cha kawaida cha joto la mwili ni kipi?",
      swali_en: "Normal range for body temperature?",
      muongozo: "Kiwango cha kawaida cha Celsius.",
      jibu_en: "The normal range is $36.5\text{--}37.5^\circ\text{C}$, measured using a digital or mercury thermometer."
    },
    {
      id: 25,
      swali_sw: "Taratibu za kupima shinikizo la damu (Blood Pressure).",
      swali_en: "Procedure for checking blood pressure.",
      muongozo: "Vifaa na mbinu sahihi.",
      jibu_en: "Use a sphygmomanometer and stethoscope. Ensure the patient is relaxed, use the correct cuff size, and measure at the level of the heart."
    },
    {
      id: 26,
      swali_sw: "Nini maana ya hematocrit level ya 70%?",
      swali_en: "Significance of a hematocrit level of 70%?",
      muongozo: "Upungufu wa maji (dehydration) au polycythemia.",
      jibu_en: "This is a dangerously high level, indicating severe dehydration or polycythemia, requiring immediate clinical intervention and fluid management."
    },
    {
      id: 27,
      swali_sw: "Unashughulikiaje mgonjwa mwenye ngozi kavu?",
      swali_en: "Managing a patient with dry skin?",
      muongozo: "Unyevu (hydration) na vilainishi (emollients).",
      jibu_en: "Ensure the patient is well-hydrated orally and apply emollients (mafuta/lotion) to maintain skin integrity and prevent breakdown."
    },
    {
      id: 28,
      swali_sw: "Taja ngazi nne kuu za kinga (prevention).",
      swali_en: "Four primary levels of prevention?",
      muongozo: "Kuanzia Primordial hadi Tertiary.",
      jibu_en: "1. Primordial (social conditions), 2. Primary (vaccination), 3. Secondary (screening/early treatment), and 4. Tertiary (rehabilitation)."
    },
    {
      id: 29,
      swali_sw: "Elezea 'Stridor' na umuhimu wake kikliniki.",
      swali_en: "Define 'Stridor' and its clinical significance.",
      muongozo: "Dalili ya kuziba kwa njia ya hewa ya juu.",
      jibu_en: "Stridor is a high-pitched sound heard during inhalation. It indicates an upper airway obstruction and is a medical emergency, especially in children."
    },
    {
      id: 30,
      swali_sw: "Kwanini 'Seli' (Cell) ni muhimu katika uuguzi?",
      swali_en: "Why is the 'Cell' important in nursing?",
      muongozo: "Kuelewa magonjwa (pathology).",
      jibu_en: "The cell is the basic unit of life. Understanding cellular function is essential for nurses to grasp how diseases and medications affect the human body."
    },

    /* III. MIDWIFERY & MATERNAL HEALTH (31-45) */
    {
      id: 31,
      swali_sw: "Taja vipengele vitatu vya AMTSL.",
      swali_en: "What are the three components of AMTSL?",
      muongozo: "Usimamizi wa hatua ya tatu ya uchungu (Active Management of Third Stage of Labor).",
      jibu_en: "1. Administration of a uterotonic (Oxytocin), 2. Controlled Cord Traction (CCT), and 3. Uterine massage after placenta delivery."
    },
    {
      id: 32,
      swali_sw: "Elezea PPH na kisababishi chake kikuu.",
      swali_en: "Define Postpartum Hemorrhage (PPH) and its common cause.",
      muongozo: "Kuvuja damu zaidi ya 500ml baada ya kujifungua.",
      jibu_en: "PPH is blood loss $>500 \text{ ml}$ after vaginal birth. The most common cause is uterine atony (failure of the uterus to contract)."
    },
    {
      id: 33,
      swali_sw: "Dozi ya Oxytocin inayopendekezwa kuzuia PPH ni ipi?",
      swali_en: "Recommended dose of Oxytocin for PPH prevention?",
      muongozo: "Kiasi na njia ya utoaji.",
      jibu_en: "$10 \text{ IU}$ (International Units) administered Intramuscularly (IM) immediately after the birth of the baby."
    },
    {
      id: 34,
      swali_sw: "Lini unapaswa kutumia Misoprostol badala ya Oxytocin?",
      swali_en: "When to use Misoprostol instead of Oxytocin?",
      muongozo: "Mazingira yenye rasilimali chache (rural settings).",
      jibu_en: "Misoprostol is used when Oxytocin is unavailable or when there is no reliable cold chain (e.g., in remote home deliveries)."
    },
    {
      id: 35,
      swali_sw: "Kwanini Ergometrine haitakiwi kwa mwenye pre-eclampsia?",
      swali_en: "Why is Ergometrine contraindicated in pre-eclampsia?",
      muongozo: "Hatari ya shinikizo la juu la damu (hypertension).",
      jibu_en: "Ergometrine causes vasoconstriction, which can lead to a dangerous spike in blood pressure and potential stroke in a pre-eclamptic mother."
    },
    {
      id: 36,
      swali_sw: "Elezea 'Ts 4' za PPH.",
      swali_en: "Explain 'The 4 Ts' of PPH.",
      muongozo: "Vyanzo vya kuvuja damu.",
      jibu_en: "Tone (Atony), Tissue (Retained products), Trauma (Lacerations), and Thrombin (Coagulation disorders)."
    },
    {
      id: 37,
      swali_sw: "Nini tafsiri ya shinikizo la juu la damu (hypertension) wakati wa ujauzito?",
      swali_en: "Definition of hypertension in pregnancy?",
      muongozo: "Vipimo vya BP (Blood Pressure).",
      jibu_en: "Systolic $\geq 140 \text{ mmHg}$ and/or Diastolic $\geq 90 \text{ mmHg}$ on two separate occasions."
    },
    {
      id: 38,
      swali_sw: "Usimamizi wa eclampsia kwa kutumia MgSO4 unakuwaje?",
      swali_en: "Management of eclampsia using MgSO4?",
      muongozo: "Loading dose na ufuatiliaji (monitoring).",
      jibu_en: "Administer a loading dose (4g IV and 10g IM), then 5g IM every 4 hours. Monitor for toxicity signs."
    },
    {
      id: 39,
      swali_sw: "Dalili za sumu ya Magnesium Sulfate (toxicity) ni zipi?",
      swali_en: "Signs of Magnesium Sulfate toxicity?",
      muongozo: "Ufuatiliaji wa usalama.",
      jibu_en: "Loss of patellar (knee-jerk) reflex, respiratory rate below 12/min, and urine output below $30 \text{ ml/hour}$."
    },
    {
      id: 40,
      swali_sw: "Elezea 'Focused Antenatal Care' (FANC).",
      swali_en: "Define 'Focused Antenatal Care' (FANC).",
      muongozo: "Mfumo wa huduma kulingana na mahitaji ya mhusika.",
      jibu_en: "FANC is a goal-oriented model of care that focuses on specific interventions for every pregnant woman to identify and manage risks."
    },
    {
      id: 41,
      swali_sw: "Wajibu wa partograph katika ufuatiliaji wa uchungu ni upi?",
      swali_en: "Role of the partograph in monitoring labor?",
      muongozo: "Kutambua uchungu uliokwama (obstructed labor).",
      jibu_en: "It tracks cervical dilation, fetal heart rate, and maternal vitals to detect deviations from normal labor and prevent complications."
    },
    {
      id: 42,
      swali_sw: "Usimamizi wa kondo la nyuma lililokwama (retained placenta).",
      swali_en: "Management of a retained placenta.",
      muongozo: "Utoaji kwa mkono (manual removal) na usafi (asepsis).",
      jibu_en: "Attempt manual removal of the placenta under aseptic conditions if it has not been expelled within 30 minutes, ensuring the mother is stabilized."
    },
    {
      id: 43,
      swali_sw: "Unatambuaje 'Uterine inversion' na hatua gani utachukua?",
      swali_en: "Uterine inversion identification and action?",
      muongozo: "Mfuko wa uzazi kugeuka ndani-nje.",
      jibu_en: "Identified by the absence of the fundus in the abdomen and a mass in the vagina. Action: Immediate manual replacement or emergency surgery."
    },
    {
      id: 44,
      swali_sw: "Nini faida ya 'Skin-to-Skin' contact baada ya kuzaliwa?",
      swali_en: "Clinical significance of 'Skin-to-Skin' contact?",
      muongozo: "Homoni ya Oxytocin na joto la mtoto.",
      jibu_en: "It prevents hypothermia in the newborn, stimulates natural oxytocin for the mother to prevent PPH, and promotes early breastfeeding."
    },
    {
      id: 45,
      swali_sw: "Elezea 'Abruptio Placentae' na inavyotokea.",
      swali_en: "Define 'Abruptio Placentae' and its presentation.",
      muongozo: "Kondo la nyuma kujibandua mapema.",
      jibu_en: "Premature separation of the placenta from the uterine wall. Presents with painful vaginal bleeding and a rigid, 'board-like' abdomen."
    },

    /* IV. IMCI - CHILDHOOD ILLNESS (46-60) */
    {
      id: 46,
      swali_sw: "Taja alama nne za hatari kwa mtoto (General Danger Signs).",
      swali_en: "Name the four general danger signs in a child.",
      muongozo: "Muhimu kwa triage (uchaguzi wa dharura).",
      jibu_en: "1. Inability to drink or breastfeed, 2. Vomiting everything, 3. Convulsions, 4. Lethargy or unconsciousness."
    },
    {
      id: 47,
      swali_sw: "Unamtambuaje mtoto wa miezi 3 mwenye pumzi 60 kwa dakika?",
      swali_en: "How to classify a 3-month-old with 60 breaths per minute?",
      muongozo: "Tathmini ya nimonia (Pneumonia).",
      jibu_en: "This is classified as 'Fast Breathing' which leads to a diagnosis of Pneumonia according to the IMCI guidelines."
    },
    {
      id: 48,
      swali_sw: "Elezea 'Plan B' katika usimamizi wa upungufu wa maji.",
      swali_en: "Describe 'Plan B' for dehydration management.",
      muongozo: "Itifaki ya kutumia ORS.",
      jibu_en: "Plan B involves administering $75 \text{ ml/kg}$ of Oral Rehydration Solution (ORS) over 4 hours at the health facility."
    },
    {
      id: 49,
      swali_sw: "Lini unapaswa kuhama kutoka Plan B kwenda Plan C?",
      swali_en: "When to move from Plan B to Plan C?",
      muongozo: "Hali ya upungufu mkubwa wa maji (severe dehydration).",
      jibu_en: "If the child's status worsens to 'Severe Dehydration', or if the child develops an inability to drink or becomes lethargic."
    },
    {
      id: 50,
      swali_sw: "Dalili za PSBI kwa mtoto mchanga ni zipi?",
      swali_en: "Signs of PSBI in a young infant?",
      muongozo: "Maambukizi makubwa ya bakteria (Possible Serious Bacterial Infection).",
      jibu_en: "Grunting, bulging fontanelle, fast breathing ($>60/min$), and high fever or abnormally low temperature."
    },
    {
      id: 51,
      swali_sw: "Usimamizi wa kuhara kwa muda mrefu (zaidi ya siku 14).",
      swali_en: "Management of persistent diarrhea (>14 days)?",
      muongozo: "Ushauri wa lishe (nutritional support).",
      jibu_en: "Require nutritional counseling, use of specialized milk (F-75), and immediate referral if the child is also dehydrated."
    },
    {
      id: 52,
      swali_sw: "Dawa ya kwanza (first-line) ya nimonia nchini Tanzania ni ipi?",
      swali_en: "First-line antibiotic for Pneumonia in TZ?",
      muongozo: "Miongozo ya STG 2021.",
      jibu_en: "The first-line drug is typically Amoxicillin (Dispersible Tablets) twice daily for 5 days as per the current guidelines."
    },
    {
      id: 53,
      swali_sw: "Unamtambuaje mtoto mwenye utapiamlo mkali (severe acute malnutrition)?",
      swali_en: "Identifying severe acute malnutrition?",
      muongozo: "Vipimo vya MUAC na edema.",
      jibu_en: "Mid-Upper Arm Circumference (MUAC) below $11.5 \text{ cm}$ or the presence of bilateral pitting edema (anasarca)."
    },
    {
      id: 54,
      swali_sw: "Nini maana ya 'wheeze' inayosikika kwa mtoto?",
      swali_en: "Significance of an audible wheeze in a child?",
      muongozo: "Pumu (asthma) au bronchiolitis.",
      jibu_en: "Indicates narrowed lower airways. It may require bronchodilator therapy (Salbutamol) and further assessment for asthma."
    },
    {
      id: 55,
      swali_sw: "Unatibu vipi 'Very Severe Febrile Disease'?",
      swali_en: "Treating 'Very Severe Febrile Disease'?",
      muongozo: "Dozi ya kwanza na rufaa ya haraka.",
      jibu_en: "Administer the first dose of an injectable antibiotic and an antimalarial (Artesunate), then provide urgent referral to a higher level."
    },
    {
      id: 56,
      swali_sw: "Elezea 'Stridor' katika uainishaji wa IMCI.",
      swali_en: "Define 'Stridor' in IMCI classification.",
      muongozo: "Uainishaji wa Severe Pneumonia.",
      jibu_en: "Stridor in a calm child is a red flag indicating upper airway obstruction, classifying the child as having 'Severe Pneumonia'."
    },
    {
      id: 57,
      swali_sw: "Ushauri wa matibabu ya nyumbani ya mafua ya kawaida.",
      swali_en: "Advice for home management of common cold?",
      muongozo: "Tiba salama za asili na ufuatiliaji.",
      jibu_en: "Give safe home remedies (honey/lemon), increase fluid intake, continue breastfeeding, and watch for fast breathing or danger signs."
    },
    {
      id: 58,
      swali_sw: "Usimamizi wa mtoto mwenye kuhara damu (dysentery).",
      swali_en: "Management of a child with dysentery?",
      muongozo: "Itifaki ya kuhara damu.",
      jibu_en: "Administer Ciprofloxacin for 3 days and schedule a follow-up in 2 days to ensure the blood in stool has cleared."
    },
    {
      id: 59,
      swali_sw: "Umuhimu wa Vitamin A katika IMCI ni upi?",
      swali_en: "Importance of Vitamin A in IMCI?",
      muongozo: "Kinga ya mwili na surua.",
      jibu_en: "Vitamin A reduces the severity and mortality of measles and diarrhea by strengthening the child's immune system."
    },
    {
      id: 60,
      swali_sw: "Unamtathmini vipi mtoto mwenye upungufu wa damu (anemia)?",
      swali_en: "How to assess for anemia in a child?",
      muongozo: "Uchunguzi wa kiganja cha mkono (Palmar Pallor).",
      jibu_en: "Assess for anemia by checking for 'Palmar Pallor' (weupe mkononi). Severe pallor indicates the need for urgent referral."
    },

    /* V. IMMUNIZATION & VACCINATION - EPI (61-75) */
    {
      id: 61,
      swali_sw: "Kirefu cha EPI ni nini?",
      swali_en: "What does the acronym EPI stand for?",
      muongozo: "Mpango wa Taifa wa Chanjo.",
      jibu_en: "Expanded Programme on Immunization (Mpango wa Taifa wa Chanjo)."
    },
    {
      id: 62,
      swali_sw: "Chanjo gani hutolewa wakati wa kuzaliwa nchini Tanzania?",
      swali_en: "Vaccines given at birth in Tanzania?",
      muongozo: "Ulinzi wa mtoto mchanga.",
      jibu_en: "BCG (Tuberculosis) and OPV 0 (Polio)."
    },
    {
      id: 63,
      swali_sw: "Njia na eneo la utoaji wa chanjo ya BCG ni lipi?",
      swali_en: "Route and site of the BCG vaccine?",
      muongozo: "Mbinu ya utoaji (administration).",
      jibu_en: "Intradermal (kwenye ngozi); Right upper arm (bega la kulia)."
    },
    {
      id: 64,
      swali_sw: "Elezea 'Cold Chain' (Mlolongo wa Baridi).",
      swali_en: "Describe the 'Cold Chain'.",
      muongozo: "Uhifadhi wa nguvu ya chanjo (potency).",
      jibu_en: "A system of people and equipment that ensures vaccines stay between $+2^\circ\text{C}$ and $+8^\circ\text{C}$ from the factory to the patient."
    },
    {
      id: 65,
      swali_sw: "Joto la kawaida la kuhifadhi chanjo ni kipi?",
      swali_en: "Standard storage temperature for vaccines?",
      muongozo: "Kiwango cha vituo vya afya.",
      jibu_en: "Most vaccines must be stored between $+2^\circ\text{C}$ and $+8^\circ\text{C}$ at the health facility level."
    },
    {
      id: 66,
      swali_sw: "Umuhimu wa dozi ya pili ya MR (MR 2) ni upi?",
      swali_en: "Importance of the MR 2 vaccine dose?",
      muongozo: "Kinga ya mfululizo (secondary immunity).",
      jibu_en: "To provide immunity to children who did not respond to the first dose (MR 1) and ensure long-term protection."
    },
    {
      id: 67,
      swali_sw: "Chanjo ya MR 2 hutolewa mtoto akiwa na umri gani?",
      swali_en: "Age for MR 2 vaccine administration?",
      muongozo: "Ratiba ya chanjo.",
      jibu_en: "Administered at 18 months of age."
    },
    {
      id: 68,
      swali_sw: "Kundi gani lengwa la chanjo ya HPV?",
      swali_en: "Target population for HPV vaccine?",
      muongozo: "Kuzuia saratani ya mlango wa uzazi.",
      jibu_en: "Adolescent girls, typically aged 14, to prevent future cervical cancer."
    },
    {
      id: 69,
      swali_sw: "Utachukua hatua gani ikiwa VVM monitor imefikia hatua ya kutupwa?",
      swali_en: "Action for a discard-point VVM monitor?",
      muongozo: "Vaccine Vial Monitor.",
      jibu_en: "The vaccine has lost its potency due to heat exposure; it must not be used and should be disposed of immediately."
    },
    {
      id: 70,
      swali_sw: "Elezea 'AEFI' na utoe mfano mmoja.",
      swali_en: "Define 'AEFI' and give an example.",
      muongozo: "Athari baada ya chanjo (Adverse Event Following Immunization).",
      jibu_en: "Any medical event following vaccination. Example: High fever or an abscess at the injection site."
    },
    {
      id: 71,
      swali_sw: "Unapigaje hesabu ya DTP dropout rate?",
      swali_en: "How to calculate the DTP dropout rate?",
      muongozo: "Utendaji wa mpango wa chanjo.",
      jibu_en: "$((\text{DTP1} - \text{DTP3}) / \text{DTP1}) \times 100$. A high rate indicates poor follow-up."
    },
    {
      id: 72,
      swali_sw: "Njia na kiasi cha dozi ya Pentavalent vaccine?",
      swali_en: "Route and dose of Pentavalent vaccine?",
      muongozo: "DTP-HepB-Hib.",
      jibu_en: "Intramuscular (IM); $0.5 \text{ ml}$ dose."
    },
    {
      id: 73,
      swali_sw: "Tofauti ya chanjo ya kunywa na ya kudunga (Oral vs. Injected).",
      swali_en: "Oral vs. Injected vaccines?",
      muongozo: "Eneo la mwitikio wa kinga.",
      jibu_en: "Oral vaccines (e.g., OPV) target gut immunity; Injected vaccines (e.g., PCV) target systemic immunity in the blood."
    },
    {
      id: 74,
      swali_sw: "Unapangaje huduma ya chanjo ya mkoba (outreach session)?",
      swali_en: "Organizing an outreach immunization session?",
      muongozo: "Huduma maeneo ya mbali.",
      jibu_en: "Notify the community, prepare vaccine carriers (cold chain), and ensure all logistics (needles, cards) are available for the field."
    },
    {
      id: 75,
      swali_sw: "Vitu gani vinazuia utoaji wa chanjo ya BCG (contraindications)?",
      swali_en: "Contraindications for the BCG vaccine?",
      muongozo: "Hali ya kinga ya mwili.",
      jibu_en: "Symptomatic HIV/AIDS (e.g., severe infections) or known hypersensitivity to any vaccine component."
    },

    /* VI. INFECTION PREVENTION & CONTROL (76-85) */
    {
      id: 76,
      swali_sw: "Taja 'Dakika tano za Usafi wa Mikono' (Moments of Hand Hygiene).",
      swali_en: "What are the 'Five Moments of Hand Hygiene'?",
      muongozo: "Viwango vya WHO.",
      jibu_en: "Before touching patient, Before procedure, After fluid exposure, After touching patient, After touching surroundings."
    },
    {
      id: 77,
      swali_sw: "Unashughulikiaje mgonjwa anayehisiwa kuwa na TB wodini?",
      swali_en: "Managing suspected TB in a ward?",
      muongozo: "Itifaki ya kutenga (isolation).",
      jibu_en: "Isolate in a well-ventilated area, provide the patient with a surgical mask, and ensure staff use N95 respirators."
    },
    {
      id: 78,
      swali_sw: "PPE zinazohitajika kwa magonjwa yanayoambukiza sana ni zipi?",
      swali_en: "PPE for highly infectious disease?",
      muongozo: "Ulinzi wa juu (maximum protection).",
      jibu_en: "Gloves, fluid-resistant gown, N95 mask, face shield, and boots/boot covers."
    },
    {
      id: 79,
      swali_sw: "Unatupaje sindano iliyotumika?",
      swali_en: "Disposing of a used needle?",
      muongozo: "Usalama wa vitu vyenye ncha kali.",
      jibu_en: "Place immediately in a puncture-proof 'Sharps Container' without recapping the needle to prevent needle-stick injuries."
    },
    {
      id: 80,
      swali_sw: "Hatua za kusafisha vifaa vya matibabu (decontamination).",
      swali_en: "Steps for decontaminating medical instruments?",
      muongozo: "Matumizi ya 0.5% Chlorine.",
      jibu_en: "1. Decontaminate (0.5% Chlorine for 10 min), 2. Wash/Clean, 3. Sterilize or High-Level Disinfection (HLD)."
    },
    {
      id: 81,
      swali_sw: "Elezea 'Standard Precautions'.",
      swali_en: "Define 'Standard Precautions'.",
      muongozo: "Mfumo wa IPC wa jumla.",
      jibu_en: "A set of infection control practices used for all patients regardless of their diagnosis, to prevent healthcare-associated infections."
    },
    {
      id: 82,
      swali_sw: "Rangi ya mfuko wa taka zinazoambukiza ni ipi?",
      swali_en: "Color of the bag for infectious waste?",
      muongozo: "Kanuni ya rangi (color coding).",
      jibu_en: "Yellow bag/bin (Nuru ya Njano) is used for infectious medical waste."
    },
    {
      id: 83,
      swali_sw: "Unashughulikiaje damu iliyomwagika sakafuni?",
      swali_en: "Handling a blood spill on the floor?",
      muongozo: "Itifaki ya spill kit.",
      jibu_en: "Cover with absorbent material, apply 0.5% Chlorine, wait 10 minutes, then clean while wearing PPE."
    },
    {
      id: 84,
      swali_sw: "Wajibu wa focal person wa IPC kwenye zahanati ni upi?",
      swali_en: "Role of the IPC focal person in a dispensary?",
      muongozo: "Ufuatiliaji na mafunzo.",
      jibu_en: "They monitor compliance with hand hygiene, train staff on waste segregation, and ensure PPE availability."
    },
    {
      id: 85,
      swali_sw: "Unapaswa kunawa mikono kwa sabuni kwa muda gani?",
      swali_en: "How long should you wash hands with soap?",
      muongozo: "Muda wa kunawa mikono kwa ufanisi.",
      jibu_en: "Proper hand washing with soap and water should take between 40 to 60 seconds."
    },

    /* VII. ADMINISTRATIVE GOVERNANCE (86-100) */
    {
      id: 86,
      swali_sw: "Muda rasmi wa kazi wa mtumishi wa umma ni upi?",
      swali_en: "Official working hours for a public servant?",
      muongozo: "Kanuni za utumishi wa umma.",
      jibu_en: "07:30 AM to 15:30 PM (Muda wa kazi wa serikali)."
    },
    {
      id: 87,
      swali_sw: "Nini maana ya 'Kosa la Kinidhamu'?",
      swali_en: "What is a 'Disciplinary Offence'?",
      muongozo: "Tafsiri ya utovu wa nidhamu (misconduct).",
      jibu_en: "Any act or omission that violates the public service code of ethics or the hospital's standard operating procedures."
    },
    {
      id: 88,
      swali_sw: "Haki ya likizo ya mwaka kwa mtumishi wa umma ni ipi?",
      swali_en: "Annual leave entitlement for a public servant?",
      muongozo: "Idadi ya siku za likizo.",
      jibu_en: "28 working days per year."
    },

    {
      id: 89,
      swali_sw: "Nini maana ya 'Kujitolea' (Volunteering) katika utumishi wa afya?",
      swali_en: "What is the significance of volunteering in the health service?",
      muongozo: "Inaonyesha uzalendo, kupata uzoefu, na kusaidia jamii kabla ya ajira rasmi.",
      jibu_en: "Volunteering is a patriotic act of providing professional services without formal pay. It helps a nurse gain hands-on clinical experience, understand the local health system, and bridge the human resource gap in health facilities."
    },

    {
      id: 90,
      swali_sw: "Taratibu za kufuata ili kwenda kujiendeleza kimasomo.",
      swali_en: "Procedure for pursuing further studies?",
      muongozo: "Ruhusa rasmi (formal permission).",
      jibu_en: "Apply through the employer (DED/MD) to the Permanent Secretary for permission and sponsorship/bond."
    },
    {
      id: 91,
      swali_sw: "Nini maana ya 'Demi-Official Correspondence'?",
      swali_en: "What is 'Demi-Official Correspondence'?",
      muongozo: "Barua za nusu-rasmi.",
      jibu_en: "Informal communication between senior officials, often on personal or confidential matters affecting the service."
    },
    {
      id: 92,
      swali_sw: "Unatumaje barua rasmi kwenda serikalini?",
      swali_en: "Addressing official government letters?",
      muongozo: "Itifaki (protocol).",
      jibu_en: "Always address to the Head of the Organization (e.g., The Director, The Permanent Secretary)."
    },
    {
      id: 93,
      swali_sw: "Ajira Portal ni nini?",
      swali_en: "What is the 'Ajira Portal'?",
      muongozo: "Mfumo wa ajira wa PSRS.",
      jibu_en: "The official online portal used by the PSRS (Utumishi) for job applications in the Tanzanian public sector."
    },
    {
      id: 94,
      swali_sw: "Nini tafsiri ya uzembe (negligence) katika uuguzi?",
      swali_en: "Negligence in nursing practice?",
      muongozo: "Kushindwa kutoa huduma inayostahili.",
      jibu_en: "Failure to provide the standard of care that a reasonable nurse would provide, resulting in patient harm."
    },
    {
      id: 95,
      swali_sw: "Umuhimu wa Mkataba wa Huduma kwa Mteja (Client Service Charter) ni upi?",
      swali_en: "Importance of the Client Service Charter?",
      muongozo: "Haki za wagonjwa.",
      jibu_en: "It outlines the services provided and the standards (e.g., waiting time) patients should expect from the hospital."
    },
    {
      id: 96,
      swali_sw: "Haki zako wakati wa mchakato wa kinidhamu ni zipi?",
      swali_en: "Rights during a disciplinary process?",
      muongozo: "Kusikilizwa kwa haki (fair hearing).",
      jibu_en: "The right to be informed of the charges in writing and the right to present a defense (haki ya kusikilizwa)."
    },
    {
      id: 97,
      swali_sw: "Kipindi cha uangalizi (Probation Period) ni cha muda gani?",
      swali_en: "Probation Period for a new employee?",
      muongozo: "Tathmini ya utendaji kazi.",
      jibu_en: "A period of 6 to 12 months used to assess the performance and suitability of a new employee before permanent confirmation."
    },
    {
      id: 98,
      swali_sw: "Unaripoti vipi mgongano wa kimaslahi (conflict of interest)?",
      swali_en: "Reporting a conflict of interest?",
      muongozo: "Uwekaji wazi (disclosure).",
      jibu_en: "Immediately disclose the conflict to your supervisor or the institutional ethics committee."
    },
    {
      id: 99,
      swali_sw: "Wajibu wa PSRS (Utumishi) ni upi?",
      swali_en: "Role of the PSRS (Utumishi)?",
      muongozo: "Usimamizi wa ajira.",
      jibu_en: "To facilitate fair, transparent, and merit-based recruitment for all public service positions in Tanzania."
    },
    {
      id: 100,
      swali_sw: "Je, una swali lolote kwetu?",
      swali_en: "Do you have any questions for the panel?",
      muongozo: "Onyesha nia ya kukua kikazi.",
      jibu_en: "I would like to know the facility's specific goals for reducing maternal mortality and how I can best contribute to achieving them."
    }
  ]
};

export default nursingData;