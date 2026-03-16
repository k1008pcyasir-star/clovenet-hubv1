const laboratoryData = {
  id: "laboratory",
  title: "Laboratory Science: Interview FAQs",
  description:
    "Strategic Evaluation: 100 Essential Questions for Lab Technologists based on HLPC standards, MTUHA systems, and clinical laboratory protocols in Tanzania.",

  etiquette: [
    {
      title: "Quality and Precision",
      content:
        "Daima sisitiza umuhimu wa Quality Control (QC) na Quality Assurance (QA) ili kuhakikisha majibu ya maabara ni sahihi kwa matibabu ya mgonjwa."
    },
    {
      title: "Safety First",
      content:
        "Onyesha uelewa wa kina wa Biosafety protocols, usimamizi wa taka za maabara, na hatua za kuchukua pindi ajali inapotokea (mfano: Needlestick injury)."
    },
    {
      title: "Regulatory Awareness",
      content:
        "Zingatia sheria za Baraza la Wataalamu wa Maabara (HLPC) na Standing Orders za serikali katika utendaji wako wa kila siku."
    }
  ],

  questions: [
    /* SECTION 1: IDENTITY, ETHICS & PUBLIC SERVICE (1-20) */
    {
      id: 1,
      swali_sw: "Jitambulishe na ueleze kwanini wewe ndiye mgombea sahihi wa nafasi hii ya Laboratory Technologist.",
      swali_en: "Introduce yourself and explain why you are the right candidate for this Laboratory Technologist position.",
      muongozo: "Inatathmini uwezo wa mawasiliano na ulinganifu wa ujuzi wako na mahitaji ya kazi.",
      jibu_en: "I am a qualified Medical Laboratory Technologist registered with the HLPC. I possess expertise in modern diagnostic equipment, including PCR and automated analyzers. Beyond my technical skills, I am a person of high integrity who prioritizes patient confidentiality and safety protocols."
    },
    {
      id: 2,
      swali_sw: "Nini maana ya Standing Orders 2009 na kwanini ni muhimu kwa mtumishi wa afya?",
      swali_en: "What is the meaning of Standing Orders 2009 and why is it important for a health worker?",
      muongozo: "Inapima uelewa wa kanuni za serikali katika utumishi wa umma.",
      jibu_en: "Standing Orders 2009 are permanent regulations governing public service in Tanzania. They are essential as they ensure equity, integrity, and provide a clear framework for the rights and duties of public servants."
    },
    {
      id: 3,
      swali_sw: "Nani mmiliki wa kisheria wa kumbukumbu za matibabu (medical records) nchini Tanzania?",
      swali_en: "Who is the legal owner of medical records in Tanzania?",
      muongozo: "Pima uelewa wa umiliki wa nyaraka za hospitali.",
      jibu_en: "Legally, medical records are the property of the Health Department (Government), although patients have the right to be informed about the contents therein."
    },
    {
      id: 4,
      swali_sw: "Elezea tofauti kati ya mchakato wa nidhamu wa Formal na Summary.",
      swali_en: "Explain the difference between Formal and Summary disciplinary proceedings.",
      muongozo: "Uelewa wa mifumo ya kinidhamu serikalini.",
      jibu_en: "Formal proceedings are used for gross misconduct (Schedule A), while Summary proceedings are for minor offenses (Schedule B) with a shorter resolution process."
    },
    {
      id: 5,
      swali_sw: "Ukimgundua mfanyakazi mwenzako anakiuka itifaki za usalama, utachukua hatua gani?",
      swali_en: "If you find a colleague violating safety protocols, what action would you take?",
      muongozo: "Inapima wajibu wako kitaaluma kulinda usalama wa wote.",
      jibu_en: "I would first advise them professionally to follow the protocols. If the violation persists, I would report it to the Laboratory Manager to prevent harm to staff and patients."
    },
    {
      id: 6,
      swali_sw: "Nini maana ya 'Usiri' (Confidentiality) katika mazingira ya maabara?",
      swali_en: "What does 'Confidentiality' mean in the laboratory setting?",
      muongozo: "Pima uelewa wa faragha ya mgonjwa.",
      jibu_en: "It is the professional obligation to not disclose patient information to anyone not involved in their treatment without patient consent or a court order."
    },
    {
      id: 7,
      swali_sw: "Taja muda rasmi wa kazi kulingana na Standing Order F.1.",
      swali_en: "State the official working hours according to Standing Order F.1.",
      muongozo: "Ufahamu wa muda wa kawaida wa kiofisi serikalini.",
      jibu_en: "The official hours are 07:30 AM to 03:30 PM on working days, though healthcare environments require readiness beyond these hours."
    },
    {
      id: 8,
      swali_sw: "Elezea umuhimu wa Mkataba wa Huduma kwa Mteja (Client Service Charter).",
      swali_en: "Explain the importance of the Client Service Charter.",
      muongozo: "Uwajibikaji na ubora wa huduma.",
      jibu_en: "It increases accountability and provides clients with a clear understanding of the quality of services they are entitled to receive."
    },
    {
      id: 9,
      swali_sw: "Nani anayetoa vibali vya ajira mpya serikalini?",
      swali_en: "Who issues permits for new employment in the government?",
      muongozo: "Ufahamu wa mamlaka za ajira (Utumishi).",
      jibu_en: "The President’s Office, Public Service Management, and Good Governance (PO-PSMGG) after receiving requirements from employers."
    },
    {
      id: 10,
      swali_sw: "Je, ni kweli kwamba wafanyakazi wenye elimu ndogo tu ndio wanaopelekwa vijijini?",
      swali_en: "Is it true that only low-educated staff are posted to rural areas?",
      muongozo: "Uelewa wa sera za upangaji watumishi (deployment).",
      jibu_en: "No. Posting is based on institutional needs and the requirement for services across the entire nation, regardless of education level."
    },
    {
      id: 11,
      swali_sw: "Wajibu wa Baraza la Wataalamu wa Maabara (HLPC) ni upi?",
      swali_en: "What are the duties of the Health Laboratory Practitioners Council (HLPC)?",
      muongozo: "Ufahamu wa mamlaka inayokusimamia.",
      jibu_en: "To register practitioners, oversee ethics, and ensure the quality of laboratory training and practice in Tanzania."
    },
    {
      id: 12,
      swali_sw: "Utafanya nini ukigundua umetoa majibu yasiyo sahihi ya maabara kwa mgonjwa?",
      swali_en: "What would you do if you realized you issued an incorrect lab result to a patient?",
      muongozo: "Inapima uwajibikaji (accountability) na uadilifu.",
      jibu_en: "I would immediately inform the treating physician to prevent incorrect treatment, then file an incident report for quality improvement purposes."
    },
    {
      id: 13,
      swali_sw: "Elezea dhana ya 'Utaalamu' (Professionalism) katika sekta ya afya.",
      swali_en: "Explain the concept of 'Professionalism' in healthcare.",
      muongozo: "Mchanganyiko wa ujuzi, uadilifu, na unyenyekevu.",
      jibu_en: "It is a combination of technical expertise, integrity, humility, and consistent adherence to service delivery standards."
    },
    {
      id: 14,
      swali_sw: "Kwanini ni muhimu kwa mtaalamu wa maabara kufanya utafiti (research)?",
      swali_en: "Why is it important for a lab technologist to conduct research?",
      muongozo: "Huduma zinazozingatia ushahidi wa kisayansi.",
      jibu_en: "To improve diagnostic methods and assist in formulating health policies based on scientific evidence."
    },
    {
      id: 15,
      swali_sw: "Nini tafsiri ya 'Utumishi wa Umma' kulingana na sheria ya Tanzania?",
      swali_en: "What is 'Public Service' according to Tanzanian law?",
      muongozo: "Tafsiri ya kisheria ya utumishi.",
      jibu_en: "It is the system or institution entrusted with delivering services to the public on behalf of the government."
    },
    {
      id: 16,
      swali_sw: "Elezea taratibu za rufaa ikiwa mtumishi haridhiki na hatua za kinidhamu.",
      swali_en: "Explain the appeal procedure if a staff member is unsatisfied with a disciplinary action.",
      muongozo: "Uelewa wa haki za mfanyakazi (Public Service Commission).",
      jibu_en: "An employee has the right to appeal to the Public Service Commission (Mamlaka ya Rufaa) within the legally prescribed timeframe."
    },
    {
      id: 17,
      swali_sw: "Taja sifa tatu za meneja mzuri wa maabara.",
      swali_en: "Mention three qualities of a good lab manager.",
      muongozo: "Uwezo wa uongozi na maamuzi.",
      jibu_en: "Decision-making ability, excellent time management, and the ability to motivate the team to reach quality goals."
    },
    {
      id: 18,
      swali_sw: "Nini maana ya 'Ikama' (Establishment) katika ajira za serikali?",
      swali_en: "What is 'Establishment' (Ikama) in government employment?",
      muongozo: "Upangaji wa bajeti na watumishi.",
      jibu_en: "It is the authorized list of job positions within an institution based on the approved budget."
    },
    {
      id: 19,
      swali_sw: "Nini umuhimu wa sare (uniforms) na vitambulisho mahali pa kazi?",
      swali_en: "Explain the importance of uniforms and identity cards.",
      muongozo: "Utambulisho na usalama.",
      jibu_en: "They aid in identifying the staff to clients and ensure security and adherence to workplace professional standards."
    },
    {
      id: 20,
      swali_sw: "Utafanya nini ikiwa vifaa vya maabara vimeisha wakati wa mlipuko wa ugonjwa?",
      swali_en: "What would you do if lab supplies are out of stock during a disease outbreak?",
      muongozo: "Utatuzi wa matatizo chini ya presha.",
      jibu_en: "I would immediately notify the hospital management to contact MSD or purchase from approved alternative sources to ensure services do not stop."
    },

    /* SECTION 2: HEMATOLOGY & BLOOD BANK (21-40) */
    {
      id: 21,
      swali_sw: "Elezea tofauti kati ya Serum na Plasma.",
      swali_en: "Explain the difference between Serum and Plasma.",
      muongozo: "Misingi ya biokemia ya damu.",
      jibu_en: "Serum is the liquid part of blood that remains after clotting (lacks fibrinogen), whereas Plasma is the liquid part where clotting is prevented by an anticoagulant."
    },
    {
      id: 22,
      swali_sw: "Anticoagulant gani hutumika kwa kipimo cha Complete Blood Count (CBC)?",
      swali_en: "Which anticoagulant is used for a Complete Blood Count (CBC)?",
      muongozo: "Viwango vya uchukuaji sampuli.",
      jibu_en: "EDTA (Ethylenediaminetetraacetic acid) is the preferred anticoagulant for CBC as it preserves cell morphology."
    },
    {
      id: 23,
      swali_sw: "Wajibu wa Sodium Fluoride katika mrija wa sukari (glucose tube) ni upi?",
      swali_en: "What is the function of Sodium Fluoride in a glucose tube?",
      muongozo: "Uzuiaji wa glycolysis.",
      jibu_en: "It acts as a glycolytic inhibitor to prevent the drop of glucose levels by the blood cells before testing."
    },
    {
      id: 24,
      swali_sw: "Elezea hatua za 'Cross-matching' katika benki ya damu.",
      swali_en: "Explain the steps of 'Cross-matching' in a blood bank.",
      muongozo: "Usalama wa kuongezewa damu (transfusion safety).",
      jibu_en: "It involves mixing donor cells with recipient serum (Major cross-match) and vice-versa to check for agglutination (clumping)."
    },
    {
      id: 25,
      swali_sw: "Erythrocyte Sedimentation Rate (ESR) ni nini?",
      swali_en: "What is Erythrocyte Sedimentation Rate (ESR)?",
      muongozo: "Kigezo cha maambukizi/uvimbe (inflammation).",
      jibu_en: "It is the rate at which red blood cells sink; an increased rate indicates infection or inflammation in the body."
    },
    {
      id: 26,
      swali_sw: "Elezea dhana ya 'Universal Donor' na 'Universal Recipient' katika makundi ya damu.",
      swali_en: "Explain 'Universal Donor' and 'Universal Recipient' blood groups.",
      muongozo: "Mfumo wa ABO.",
      jibu_en: "Universal Donor is O Negative because it lacks antigens; Universal Recipient is AB Positive because it lacks antibodies against A or B."
    },
    {
      id: 27,
      swali_sw: "Seli gani za damu zinahusika na kuganda kwa damu (hemostasis)?",
      swali_en: "Which blood cells are responsible for blood clotting (hemostasis)?",
      muongozo: "Kazi za seli.",
      jibu_en: "Platelets (Thrombocytes) are the primary cells responsible for blood clotting."
    },
    {
      id: 28,
      swali_sw: "Nini maana ya 'Leukocytosis'?",
      swali_en: "What does 'Leukocytosis' mean?",
      muongozo: "Tafsiri ya matokeo ya kliniki.",
      jibu_en: "It is an increase in white blood cell (WBC) count above the normal range, often indicating infection or inflammation."
    },
    {
      id: 29,
      swali_sw: "Nini umuhimu wa 'Blood Smear' (Damu Nene/Nyembamba) katika utambuzi wa malaria?",
      swali_en: "Explain the importance of a 'Blood Smear' in malaria diagnosis.",
      muongozo: "Viwango vya utambuzi wa vimelea.",
      jibu_en: "It allows for the visualization of malaria parasites, species identification, and determination of parasite density."
    },
    {
      id: 30,
      swali_sw: "Anticoagulant gani hutumika kwa vipimo vya kuganda kwa damu (PT/APTT)?",
      swali_en: "Which anticoagulant is used for PT/APTT tests?",
      muongozo: "Kifuniko cha mrija cha bluu.",
      jibu_en: "Trisodium Citrate (Blue top tube) is used as it reversibly binds calcium required for coagulation."
    },
    {
      id: 31,
      swali_sw: "Elezea dhana ya 'Buffy Coat'.",
      swali_en: "Explain the concept of 'Buffy Coat'.",
      muongozo: "Mgawanyiko wa damu baada ya centrifuge.",
      jibu_en: "It is the thin white layer found between Plasma and Red Cells after centrifugation, consisting of WBCs and Platelets."
    },
    {
      id: 32,
      swali_sw: "Nini kinasababisha damu kupasuka (Hemolysis) maabarani?",
      swali_en: "What causes Hemolysis in the laboratory?",
      muongozo: "Ubora wa sampuli.",
      jibu_en: "Using a very small needle, vigorous shaking of the tube, or storing blood at extreme temperatures."
    },
    {
      id: 33,
      swali_sw: "Elezea kazi ya Hemoglobin mwilini.",
      swali_en: "Explain the function of Hemoglobin in the body.",
      muongozo: "Usafirishaji wa hewa.",
      jibu_en: "To transport oxygen from the lungs to the tissues and return carbon dioxide (CO2) back to the lungs."
    },
    {
      id: 34,
      swali_sw: "Hematocrit (PCV) ni nini?",
      swali_en: "What is Hematocrit (PCV)?",
      muongozo: "Upimaji wa ujazo wa damu.",
      jibu_en: "It is the percentage of the volume of red blood cells in the total blood volume."
    },
    {
      id: 35,
      swali_sw: "Nini umuhimu wa kupima Reticulocytes?",
      swali_en: "Explain the importance of testing for Reticulocytes.",
      muongozo: "Utendaji wa uboho (bone marrow).",
      jibu_en: "It helps evaluate the ability of the bone marrow to produce new red blood cells."
    },
    {
      id: 36,
      swali_sw: "Katika hali gani seli za mundu (Sickle Cells) hutokea kwenye damu?",
      swali_en: "Under what condition do 'Sickle Cells' appear in the blood?",
      muongozo: "Mabadiliko ya maumbile (HbS).",
      jibu_en: "Due to a genetic mutation in Hemoglobin (HbS) which causes cells to take a sickle shape when oxygen levels are low."
    },
    {
      id: 37,
      swali_sw: "Elezea matumizi ya mrija wenye kifuniko cha kijani (Heparin).",
      swali_en: "Explain the use of the Green top tube (Heparin).",
      muongozo: "Vipimo vya kemia (electrolytes).",
      jibu_en: "It is used for chemistry tests like electrolytes and blood gases because it does not alter mineral levels."
    },
    {
      id: 38,
      swali_sw: "Nini maana ya 'Pancytopenia'?",
      swali_en: "What does 'Pancytopenia' mean?",
      muongozo: "Upungufu wa seli zote za damu.",
      jibu_en: "A reduction in all three types of blood cells: RBCs, WBCs, and Platelets."
    },
    {
      id: 39,
      swali_sw: "Elezea mchakato wa 'Aphaeresis'.",
      swali_en: "Explain the process of 'Aphaeresis'.",
      muongozo: "Uchangiaji damu maalum (selective donation).",
      jibu_en: "A process where only one part of the blood (like platelets) is removed and the rest is returned to the donor."
    },
    {
      id: 40,
      swali_sw: "Vigezo gani hutumika kupigia hesabu 'Red Cell Indices'?",
      swali_en: "Which parameters are used to calculate 'Red Cell Indices'?",
      muongozo: "MCV, MCH, na MCHC.",
      jibu_en: "MCV, MCH, and MCHC. For example, $MCHC = (Hb / Hct) \times 100$."
    },

    /* SECTION 3: CLINICAL CHEMISTRY (41-60) */
    {
      id: 41,
      swali_sw: "Elezea kazi ya figo mwilini.",
      swali_en: "Explain the function of the kidneys in the body.",
      muongozo: "Uchuja wa taka na usawa wa maji.",
      jibu_en: "To filter waste from the blood, regulate water and electrolyte balance, and help control blood pressure."
    },
    {
      id: 42,
      swali_sw: "Homoni gani inadhibiti kiwango cha sukari?",
      swali_en: "Which hormone regulates glucose levels?",
      muongozo: "Metaboliki ya sukari.",
      jibu_en: "Insulin, produced by the pancreas, is the main hormone that lowers blood glucose."
    },
    {
      id: 43,
      swali_sw: "Urea ni zao la mabaki ya metaboliki ya kitu gani?",
      swali_en: "Urea is a metabolic byproduct of what?",
      muongozo: "Metaboliki ya protini.",
      jibu_en: "Urea is produced from the breakdown of Amino Acids (Proteins)."
    },
    {
      id: 44,
      swali_sw: "Nini umuhimu wa kipimo cha Creatinine?",
      swali_en: "Explain the importance of the Creatinine test.",
      muongozo: "Kigezo cha utendaji wa figo.",
      jibu_en: "It is a more accurate indicator of kidney function because its production is stable and independent of diet."
    },
    {
      id: 45,
      swali_sw: "Manjano (Jaundice) inaashiria nini katika matokeo ya maabara?",
      swali_en: "What does Jaundice signify in lab results?",
      muongozo: "Kigezo cha ini au kuvunjika kwa damu.",
      jibu_en: "An increase in Bilirubin in the blood, signifying liver problems or excessive red cell breakdown."
    },
    {
      id: 46,
      swali_sw: "Elezea tofauti kati ya LDL na HDL.",
      swali_en: "Explain the difference between LDL and HDL.",
      muongozo: "Vipimo vya mafuta (lipids).",
      jibu_en: "LDL is 'bad cholesterol' that clogs arteries; HDL is 'good cholesterol' that removes fats from the arteries."
    },
    {
      id: 47,
      swali_sw: "Enzymes gani hutumika kwa vipimo vya utendaji wa ini (LFT)?",
      swali_en: "Which enzymes are used for Liver Function Tests (LFT)?",
      muongozo: "Vigezo vya ini.",
      jibu_en: "ALT, AST, and ALP are the primary enzymes measured to assess liver health."
    },
    {
      id: 48,
      swali_sw: "GFR (Glomerular Filtration Rate) ni nini?",
      swali_en: "What is GFR (Glomerular Filtration Rate)?",
      muongozo: "Upimaji wa hatua ya ugonjwa wa figo.",
      jibu_en: "A measure of the volume of blood filtered by the kidneys per minute; used to stage Chronic Kidney Disease (CKD)."
    },
    {
      id: 49,
      swali_sw: "Elezea umuhimu wa vipimo vya Electrolyte (Na+, K+, Cl-).",
      swali_en: "Explain the importance of Electrolyte tests (Na+, K+, Cl-).",
      muongozo: "Usawa wa tindikali na nyuzi mwilini.",
      jibu_en: "Crucial for nerve and muscle function and maintaining the body's acid-base balance."
    },
    {
      id: 50,
      swali_sw: "Nini tafsiri ya ongezeko la Amylase mwilini?",
      swali_en: "What does an increase in Amylase signify?",
      muongozo: "Kigezo cha pancreas.",
      jibu_en: "It often signifies Pancreatitis (inflammation of the pancreas)."
    },
    {
      id: 51,
      swali_sw: "HbA1c ni nini?",
      swali_en: "What is HbA1c?",
      muongozo: "Ufuatiliaji wa kisukari.",
      jibu_en: "Glycated Hemoglobin; measures the average blood sugar of a patient over the past three months."
    },
    {
      id: 52,
      swali_sw: "Elezea dhana ya 'Metabolism'.",
      swali_en: "Explain the concept of 'Metabolism'.",
      muongozo: "Michakato ya kibaolojia.",
      jibu_en: "The sum of all chemical reactions in the body, divided into Catabolism (breaking down) and Anabolism (building up)."
    },
    {
      id: 53,
      swali_sw: "Homoni gani inadhibiti madini ya chokaa (calcium) mwilini?",
      swali_en: "Which hormone regulates calcium in the body?",
      muongozo: "Udhibiti wa madini.",
      jibu_en: "Parathyroid Hormone (PTH) and Calcitonin regulate calcium levels in the blood."
    },
    {
      id: 54,
      swali_sw: "Nini chanzo cha ATP (Nishati) mwilini?",
      swali_en: "What is the source of ATP in the body?",
      muongozo: "Nishati ya seli.",
      jibu_en: "Cellular respiration (Glycolysis, Citric Acid Cycle) within the mitochondria."
    },
    {
      id: 55,
      swali_sw: "Elezea 'Hypoglycemia'.",
      swali_en: "Explain 'Hypoglycemia'.",
      muongozo: "Sukari kushuka chini sana.",
      jibu_en: "Blood sugar levels being significantly lower than normal, which can cause loss of consciousness if not treated."
    },
    {
      id: 56,
      swali_sw: "Kipimo gani hutumika kugundua matatizo ya tezi dume?",
      swali_en: "Which test is used to detect Prostate problems?",
      muongozo: "Vigezo vya kansa (Oncology).",
      jibu_en: "PSA (Prostate Specific Antigen) is the primary blood marker used."
    },
    {
      id: 57,
      swali_sw: "Elezea umuhimu wa kupima Albumin kwenye mkojo.",
      swali_en: "Explain the importance of testing for Albumin in urine.",
      muongozo: "Dalili ya uharibifu wa figo.",
      jibu_en: "It is an early sign of kidney damage, especially in diabetic patients (Microalbuminuria)."
    },
    {
      id: 58,
      swali_sw: "Wajibu wa Spectrophotometer ni nini?",
      swali_en: "What is the function of a Spectrophotometer?",
      muongozo: "Vifaa vya maabara.",
      jibu_en: "To measure the amount of light absorbed by a sample to determine its chemical concentration."
    },
    {
      id: 59,
      swali_sw: "Elezea 'Renal Threshold' ya sukari.",
      swali_en: "Explain 'Renal Threshold' for glucose.",
      muongozo: "Utoaji wa sukari kupitia mkojo.",
      jibu_en: "The blood sugar level above which the kidneys begin to excrete sugar into the urine (usually around 180 mg/dL)."
    },
    {
      id: 60,
      swali_sw: "Ugonjwa gani unasababisha ongezeko la Uric Acid?",
      swali_en: "Which disease causes an increase in Uric Acid?",
      muongozo: "Kigezo cha Gout.",
      jibu_en: "Gout, a form of inflammatory arthritis, is characterized by high levels of uric acid."
    },

    /* SECTION 4: MICROBIOLOGY & PARASITOLOGY (61-80) */
    {
      id: 61,
      swali_sw: "Tofauti kati ya seli za Prokaryotic na Eukaryotic.",
      swali_en: "Difference between Prokaryotic and Eukaryotic cells.",
      muongozo: "Biolojia ya seli.",
      jibu_en: "Prokaryotes (like bacteria) lack a membrane-bound nucleus; Eukaryotes (like fungi and human cells) have a distinct nucleus."
    },
    {
      id: 62,
      swali_sw: "Kiumbe gani anasababisha ugonjwa wa Kifua Kikuu (TB)?",
      swali_en: "Which organism causes Tuberculosis?",
      muongozo: "Magonjwa ya kuambukiza.",
      jibu_en: "Mycobacterium tuberculosis."
    },
    {
      id: 63,
      swali_sw: "Elezea mchakato wa Gram Staining.",
      swali_en: "Explain the Gram Staining process.",
      muongozo: "Viwango vya rangi (staining standards).",
      jibu_en: "Uses Crystal Violet (primary), Iodine (mordant), Alcohol (decolorizer), and Safranin (counterstain) to categorize bacteria."
    },
    
    {
      id: 64,
      swali_sw: "Nini maana ya 'Culture and Sensitivity'?",
      swali_en: "What is 'Culture and Sensitivity'?",
      muongozo: "Usimamizi wa antibiotics.",
      jibu_en: "Growing organisms in the lab (culture) and testing drugs against them to see which is effective (sensitivity)."
    },
    {
      id: 65,
      swali_sw: "Kimelea gani anasababisha Malaria?",
      swali_en: "Which parasite causes Malaria?",
      muongozo: "Utambuzi wa vimelea.",
      jibu_en: "Plasmodium species, with P. falciparum being the most common in Tanzania."
    },
    {
      id: 66,
      swali_sw: "Elezea matumizi ya 'Autoclave'.",
      swali_en: "Explain the use of an 'Autoclave'.",
      muongozo: "Viwango vya sterilization.",
      jibu_en: "Uses pressurized steam to kill all organisms, typically at 121°C for 15 minutes."
    },
    {
      id: 67,
      swali_sw: "Nini tafsiri ya 'Antibiotic Resistance'?",
      swali_en: "What is 'Antibiotic Resistance'?",
      muongozo: "Tishio la afya duniani.",
      jibu_en: "The ability of bacteria to grow despite the presence of an antibiotic meant to kill them."
    },
    {
      id: 68,
      swali_sw: "Hatua gani utachukua ukichomwa na sindano (needlestick injury) maabarani?",
      swali_en: "Steps after a needlestick injury in the lab?",
      muongozo: "Itifaki baada ya ajali (Post-exposure protocol).",
      jibu_en: "Wash with soap and water, notify supervisor, and start Post-Exposure Prophylaxis (PEP) within 72 hours."
    },
    {
      id: 69,
      swali_sw: "Bakteria gani wanazalisha spores?",
      swali_en: "Which bacteria produce spores?",
      muongozo: "Uwezo wa bakteria kuishi mazingira magumu.",
      jibu_en: "Bacillus and Clostridium species are the most well-known spore producers."
    },
    {
      id: 70,
      swali_sw: "Magonjwa ya Zoonotic ni nini?",
      swali_en: "What are 'Zoonotic Diseases'?",
      muongozo: "Maambukizi toka kwa wanyama.",
      jibu_en: "Diseases transmitted from animals to humans, like Anthrax, Rabies, or Rift Valley Fever."
    },
    {
      id: 71,
      swali_sw: "Rangi gani (stain) hutumika kugundua 'Acid Fast Bacilli' (AFB)?",
      swali_en: "Which stain is used for 'Acid Fast Bacilli' (AFB)?",
      muongozo: "Utambuzi wa TB.",
      jibu_en: "Ziehl-Neelsen stain (ZN stain)."
    },
    {
      id: 72,
      swali_sw: "Tofautisha Sterilization na Disinfection.",
      swali_en: "Sterilization vs. Disinfection?",
      muongozo: "Viwango vya IPC.",
      jibu_en: "Sterilization kills all organisms including spores; Disinfection reduces organisms to a safe level but doesn't usually kill spores."
    },
    {
      id: 73,
      swali_sw: "Elezea 'Normal Flora'.",
      swali_en: "Explain 'Normal Flora'.",
      muongozo: "Vimelea marafiki wa mwili.",
      jibu_en: "Organisms that live on the body without causing disease under normal conditions, helping protect against pathogens."
    },
    {
      id: 74,
      swali_sw: "Kiumbe gani anasababisha Amoebic Dysentery?",
      swali_en: "Which organism causes Amoebic Dysentery?",
      muongozo: "Kigezo cha parasitology.",
      jibu_en: "Entamoeba histolytica."
    },
    {
      id: 75,
      swali_sw: "Elezea matumizi ya 'Dark-field Microscopy'.",
      swali_en: "Explain 'Dark-field Microscopy'.",
      muongozo: "Upigaji picha wa hali ya juu.",
      jibu_en: "Used to visualize organisms difficult to see with normal microscopy, like Treponema pallidum which causes Syphilis."
    },
    {
      id: 76,
      swali_sw: "Tofauti ya bakteria Aerobic na Anaerobic ni ipi?",
      swali_en: "Aerobic vs. Anaerobic bacteria?",
      muongozo: "Mahitaji ya hewa ya oxygen.",
      jibu_en: "Aerobic require oxygen to live; Anaerobic die in the presence of oxygen."
    },
    {
      id: 77,
      swali_sw: "Elezea matumizi ya 'Blood Agar'.",
      swali_en: "Explain the use of 'Blood Agar'.",
      muongozo: "Vichocheo vya kuotesha vimelea (culture media).",
      jibu_en: "A nutrient-rich medium used to detect hemolysis (breakdown of red cells) by bacteria."
    },
    {
      id: 78,
      swali_sw: "Virusi gani vinasababisha ugonjwa wa Homa ya Ini (Hepatitis)?",
      swali_en: "Which viruses cause Hepatitis?",
      muongozo: "Utambulisho wa virusi.",
      jibu_en: "Hepatitis A, B, C, D, and E viruses."
    },
    {
      id: 79,
      swali_sw: "Nini umuhimu wa 'Biosafety Cabinet'?",
      swali_en: "Importance of a 'Biosafety Cabinet'?",
      muongozo: "Usalama wa maabara.",
      jibu_en: "Protects the technologist, sample, and environment from infection when working with dangerous pathogens."
    },
    {
      id: 80,
      swali_sw: "Nini maana ya 'Viraemia'?",
      swali_en: "What is 'Viraemia'?",
      muongozo: "Maneno ya kitaalamu ya virusi.",
      jibu_en: "It is the presence of viruses in the blood."
    },

    /* SECTION 5: QUALITY & SYSTEMS (81-100) */
    {
      id: 81,
      swali_sw: "Elezea hatua za 'Tissue Processing'.",
      swali_en: "Explain the stages of 'Tissue Processing'.",
      muongozo: "Viwango vya histopathology.",
      jibu_en: "Fixation, Dehydration, Clearing, Infiltration, and Embedding."
    },
    {
      id: 82,
      swali_sw: "Kemikali gani hutumika kama fixative mkuu wa tishu?",
      swali_en: "Which chemical is used as a general fixative?",
      muongozo: "Uhifadhi wa tishu.",
      jibu_en: "10% Neutral Buffered Formalin."
    },
    {
      id: 83,
      swali_sw: "ISO 15189 ni nini?",
      swali_en: "What is ISO 15189?",
      muongozo: "Viwango vya kimataifa vya maabara.",
      jibu_en: "The international standard for quality and competence in medical laboratories."
    },
    {
      id: 84,
      swali_sw: "Tofauti ya Quality Assurance na Quality Control ni ipi?",
      swali_en: "Quality Assurance vs. Quality Control?",
      muongozo: "Usimamizi wa maabara.",
      jibu_en: "QA is process-oriented to prevent errors; QC is product-oriented to detect errors in daily tests."
    },
    {
      id: 85,
      swali_sw: "MTUHA ni nini?",
      swali_en: "What is MTUHA?",
      muongozo: "Mifumo ya afya Tanzania.",
      jibu_en: "The Health Management Information System (HMIS) in Tanzania used for data collection and reporting."
    },
    {
      id: 86,
      swali_sw: "Matumizi ya MTUHA Kitabu cha 10 ni yapi?",
      swali_en: "Use of MTUHA Book 10?",
      muongozo: "Viwango vya ripoti.",
      jibu_en: "Used to collect data from various departments to generate monthly summary reports."
    },
    {
      id: 87,
      swali_sw: "Nini maana ya 'Turnaround Time' (TAT)?",
      swali_en: "What is 'Turnaround Time' (TAT)?",
      muongozo: "Kigezo cha ufanisi.",
      jibu_en: "The time from receiving a sample to the delivery of the laboratory result."
    },
    {
      id: 88,
      swali_sw: "Hatua gani utachukua baada ya ajali ya sindano?",
      swali_en: "Action for a needlestick injury?",
      muongozo: "Itifaki ya dharura.",
      jibu_en: "Wash the area, report to supervisor, perform baseline tests, and start PEP if required."
    },
    {
      id: 89,
      swali_sw: "Kifaa gani hutumika kukata tishu nyembamba sana (tissue sections)?",
      swali_en: "Which device is used to cut very thin tissue sections?",
      muongozo: "Vifaa vya maabara.",
      jibu_en: "A Microtome is used to cut thin slices of tissue for microscopic examination."
    },
    {
      id: 90,
      swali_sw: "Nini umuhimu wa 'Internal Audit' maabarani?",
      swali_en: "Importance of 'Internal Audit' in the lab?",
      muongozo: "Uzingatiaji wa viwango (Compliance).",
      jibu_en: "Identifies quality system gaps before external inspections and aids continuous improvement."
    },
    {
      id: 91,
      swali_sw: "Nini maana ya 'Pre-analytical Error'?",
      swali_en: "What is a 'Pre-analytical Error'?",
      muongozo: "Aina za makosa.",
      jibu_en: "Errors occurring before testing, such as mislabeling a sample or using the wrong collection tube."
    },
    {
      id: 92,
      swali_sw: "Elezea 'Calibration' (Uhuishaji).",
      swali_en: "Explain 'Calibration'.",
      muongozo: "Usahihi wa kifaa.",
      jibu_en: "Adjusting an instrument so its results match known international standards of accuracy."
    },
    {
      id: 93,
      swali_sw: "Wajibu wa Afisa Usalama wa Maabara (Safety Officer) ni upi?",
      swali_en: "Role of the Laboratory Safety Officer?",
      muongozo: "Usimamizi wa usalama.",
      jibu_en: "Oversees safety policies, provides staff training, and ensures PPE availability."
    },
    {
      id: 94,
      swali_sw: "Elezea hatua ya 'Post-analytical Phase'.",
      swali_en: "Explain the 'Post-analytical Phase'.",
      muongozo: "Hatua ya mwisho ya ripoti.",
      jibu_en: "The stage after testing involving result verification, recording, and reporting to the physician."
    },
    {
      id: 95,
      swali_sw: "Mrija gani ni wa kwanza katika mfuatano wa uchukuaji damu (Order of Draw)?",
      swali_en: "What is the first tube in the 'Order of Draw'?",
      muongozo: "Viwango vya uchukuaji sampuli.",
      jibu_en: "Blood Culture bottles should be drawn first to avoid contamination."
    },
    {
      id: 96,
      swali_sw: "Nini umuhimu wa 'Material Safety Data Sheet' (MSDS)?",
      swali_en: "Importance of the 'Material Safety Data Sheet' (MSDS)?",
      muongozo: "Usalama wa kemikali.",
      jibu_en: "Documents chemical properties, hazards, and first-aid instructions in case of accidents."
    },
    {
      id: 97,
      swali_sw: "Nini maana ya 'Critical Value' maabarani?",
      swali_en: "What is a 'Critical Value' in the lab?",
      muongozo: "Kuripoti dharura.",
      jibu_en: "A result indicating a life-threatening risk that must be reported to a doctor immediately."
    },
    {
      id: 98,
      swali_sw: "Elezea matumizi ya 'Centrifuge'.",
      swali_en: "Explain the use of a 'Centrifuge'.",
      muongozo: "Mgawanyiko wa sampuli.",
      jibu_en: "Uses centrifugal force to separate liquid components (plasma/serum) from blood cells."
    },
    {
      id: 99,
      swali_sw: "Rangi (stain) gani hutumika kwa kipimo cha Pap smears?",
      swali_en: "Which stain is used for Pap smears?",
      muongozo: "Uchunguzi wa kansa ya mlango wa uzazi.",
      jibu_en: "Papanicolaou stain is used to identify abnormal cervical cells."
    },
    {
      id: 100,
      swali_sw: "Kwanini mtaalamu wa maabara anapaswa kuwa na ujuzi wa kompyuta?",
      swali_en: "Why should a lab technologist have computer skills?",
      muongozo: "Uhusiano na mifumo ya kidijitali.",
      jibu_en: "To use LIMS systems, record MTUHA data, and communicate results efficiently via electronic means."
    }
  ]
};

export default laboratoryData;