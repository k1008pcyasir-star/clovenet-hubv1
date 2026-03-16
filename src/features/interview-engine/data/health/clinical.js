const clinicalData = {
  id: "clinical",
  title: "Clinical Medicine: Interview FAQs",
  description:
    "Strategic Evaluation: 100 Essential Questions for PSRS (Utumishi) & Clinical Practice based on STG/NEMLIT 2021 and MCT Ethics.",

  etiquette: [
    {
      title: "Diagnostic Logic",
      content:
        "Daima onyesha mchakato wa utambuzi (Differential Diagnosis) na matumizi ya vigezo vya kitabibu (mfano: GCS au ABCDE) unapojibu maswali ya kliniki."
    },
    {
      title: "Guideline Adherence",
      content:
        "Hakikisha majibu ya tiba yanazingatia mwongozo wa Standard Treatment Guidelines (STG) 2021 wa Tanzania."
    },
    {
      title: "Ethical Conduct",
      content:
        "Onyesha uelewa wa kanuni nne za maadili ya kitabibu: Beneficence, Non-maleficence, Autonomy, na Justice."
    }
  ],

  questions: [
    /* I. PERSONALITY, MOTIVATION & PROFESSIONAL IDENTITY (1-20) */
    {
      id: 1,
      swali_sw: "Jieleze kwa kifupi (historia yako ya kitaalamu).",
      swali_en: "Tell us about yourself and your professional background.",
      muongozo: "Lenga kwenye elimu, uzoefu wa kliniki, na mapenzi yako katika kuhudumia wagonjwa.",
      jibu_en: "I am a dedicated medical professional with [Number] years of experience. I graduated from [College Name] and have developed a strong passion for clinical excellence and patient advocacy. My goal is to provide evidence-based care to improve community health outcomes."
    },
    {
      id: 2,
      swali_sw: "Kwanini ulichagua kuwa tabibu au daktari?",
      swali_en: "Why did you choose to be a Clinical Officer or Doctor?",
      muongozo: "Pima nia yako ya dhati (calling). Taja tukio lililokuvutia kuanza safari hii.",
      jibu_en: "I was inspired by the desire to alleviate human suffering. Witnessing healthcare challenges in my community motivated me to pursue this career so I could be part of the solution in providing quality primary healthcare."
    },
    {
      id: 3,
      swali_sw: "Taja sifa tatu muhimu za tabibu mzuri.",
      swali_en: "What are three essential qualities of a good clinician?",
      muongozo: "Huruma (Empathy), Uadilifu (Integrity), na uwezo wa kufanya maamuzi sahihi kwa haraka.",
      jibu_en: "The three most important qualities are Empathy to understand patient needs, Integrity to maintain trust, and the ability to make Sound Decisions under high-pressure clinical environments."
    },
    {
      id: 4,
      swali_sw: "Elezea changamoto kubwa uliyokumbana nayo wakati wa masomo au internship.",
      swali_en: "Describe a major challenge you faced during your studies or internship.",
      muongozo: "Onyesha ustahimilivu (resilience) na mbinu za utatuzi wa matatizo.",
      jibu_en: "During my internship, I managed a high volume of patients with limited resources. I learned to prioritize cases using triage systems, which improved my efficiency and ensured critical patients received immediate care."
    },
    {
      id: 5,
      swali_sw: "Kwanini tukuajiri wewe badala ya wagombea wengine?",
      swali_en: "Why should we hire you over other candidates?",
      muongozo: "Linganisha ujuzi wako na mahitaji ya kituo (mfano: uzoefu wa kufanya kazi vijijini).",
      jibu_en: "I bring a combination of strong clinical skills and adaptability. My experience working in underserved areas has prepared me to deliver high-quality care even in resource-limited settings, making me an asset to your facility."
    },
    {
      id: 6,
      swali_sw: "Udhaifu wako mkubwa ni upi na unadhibiti vipi?",
      swali_en: "What is your greatest weakness and how do you handle it?",
      muongozo: "Onyesha ukomavu. Mfano: Kuwa makini kupita kiasi (perfectionism) na unatumiaje tech kuwa na ufanisi.",
      jibu_en: "I sometimes spend too much time on documentation to ensure accuracy. To manage this, I have adopted digital tools and templates to streamline my workflow without compromising the quality of medical records."
    },
    {
      id: 7,
      swali_sw: "Unadhibiti vipi msongo wa mawazo (stress) mahali pa kazi?",
      swali_en: "How do you handle stress in the workplace?",
      muongozo: "Lenga kwenye mbinu za afya na ushirikiano wa timu.",
      jibu_en: "I manage stress by maintaining a structured routine, practicing effective communication with my team, and ensuring a healthy work-life balance through regular exercise and rest."
    },
    {
      id: 8,
      swali_sw: "Unajiona wapi kitaaluma baada ya miaka mitano ijayo?",
      swali_en: "Where do you see yourself in 5 years professionally?",
      muongozo: "Pima nia ya kujiendeleza kimasomo (CPD).",
      jibu_en: "In five years, I aim to have specialized in [Specialization] and contribute to healthcare leadership. I am committed to lifelong learning to stay updated with the latest medical advancements."
    },
    {
      id: 9,
      swali_sw: "Elezea uzoefu wako wa kufanya kazi na watu wa tamaduni tofauti.",
      swali_en: "Describe your experience working with people from different cultures.",
      muongozo: "Kuheshimu utofauti nchini Tanzania (kabila na dini).",
      jibu_en: "Tanzania is a diverse nation. I treat every patient with equal respect, regardless of their tribe or religion, ensuring that cultural beliefs are respected while providing life-saving medical advice."
    },
    {
      id: 10,
      swali_sw: "Unajua nini kuhusu wajibu wa Wizara ya Afya nchini Tanzania?",
      swali_en: "What do you know about the duties of the Ministry of Health in Tanzania?",
      muongozo: "Kutengeneza sera, kusimamia hospitali za rufaa, na kudhibiti milipuko.",
      jibu_en: "The Ministry is responsible for formulating health policies, supervising national and referral hospitals, and coordinating responses to epidemics to ensure the well-being of all Tanzanians."
    },
    {
      id: 11,
      swali_sw: "Mafanikio gani ya kitaalamu unayojivunia?",
      swali_en: "Professional achievement you are proud of?",
      muongozo: "Kuokoa maisha dharura au kuboresha mfumo wa kazi.",
      jibu_en: "Successfully managing a critical obstetric emergency with limited staff, ensuring both mother and baby survived."
    },
    {
      id: 12,
      swali_sw: "Uko tayari kufanya kazi katika kituo cha afya cha kijijini?",
      swali_en: "Ready to work in a rural health center?",
      muongozo: "Inaonyesha uzalendo. Muhimu kwa kada za afya nchini.",
      jibu_en: "Yes, I am fully committed to serving the community where the need is greatest, including rural areas."
    },
    {
      id: 13,
      swali_sw: "Taja kosa la kitabibu ulilowahi kufanya na ulifuata hatua zipi kurekebisha?",
      swali_en: "Medical error you made and steps taken?",
      muongozo: "Ukweli ni muhimu. Gusia kuripoti kwa msimamizi na kurekebisha.",
      jibu_en: "I once miscalculated a dosage. I immediately informed my supervisor, corrected the dose, and monitored the patient closely for adverse effects."
    },
    {
      id: 14,
      swali_sw: "Unashirikiana vipi na wauguzi na mafundi maabara?",
      swali_en: "How to collaborate with nurses and lab techs?",
      muongozo: "Kuheshimiana na mawasiliano ya wazi (Multidisciplinary Team).",
      jibu_en: "By recognizing that every cadre plays a vital role. I foster a culture of respect and open communication to ensure holistic patient care."
    },
    {
      id: 15,
      swali_sw: "Unashughulikiaje mgonjwa asiyeelewa maelekezo yako?",
      swali_en: "Handling a patient who doesn't understand instructions?",
      muongozo: "Tumia lugha rahisi, michoro, au wakalimani.",
      jibu_en: "I use non-medical terms, visual aids, or seek a translator (e.g., for local languages) to ensure the patient understands their treatment plan."
    },
    {
      id: 16,
      swali_sw: "Nini umuhimu wa CPD kwa daktari?",
      swali_en: "Importance of CPD for a doctor?",
      muongozo: "Ni hitaji la kisheria la MCT ili kuhuisha leseni ya kazi.",
      jibu_en: "CPD is a mandatory requirement by the Medical Council of Tanganyika (MCT) to ensure clinicians stay updated with evolving medical practices."
    },
    {
      id: 17,
      swali_sw: "Unadhibiti vipi hasira wakati wa dharura kukiwa na rasilimali chache?",
      swali_en: "Controlling anger during emergencies with low resources?",
      muongozo: "Baki na utulivu, tumia triage, na fuata STG.",
      jibu_en: "I remain calm, prioritize patients through triage, and follow the Standard Treatment Guidelines (STG) to make the best use of available resources."
    },
    {
      id: 18,
      swali_sw: "Uzoefu wako katika kutumia mifumo ya kielektroniki (GoT-HOMIS) ukoje?",
      swali_en: "Experience with electronic systems (GoT-HOMIS)?",
      muongozo: "Ufahamu wa mifumo ya usimamizi wa hospitali.",
      jibu_en: "I am proficient in using hospital management systems like GoT-HOMIS for patient registration, billing, and clinical documentation."
    },
    {
      id: 19,
      swali_sw: "Nini kinakupa motisha kila siku?",
      swali_en: "What motivates you every day?",
      muongozo: "Hamu ya kusaidia na kuijenga nchi kupitia afya.",
      jibu_en: "The ability to restore health and bring smiles back to patients' faces is my greatest daily motivation."
    },
    {
      id: 20,
      swali_sw: "Je, una swali lolote kwa jopo la usaili?",
      swali_en: "Any questions for the interview panel?",
      muongozo: "Uliza kuhusu nafasi za kujiendeleza au mipango ya hospitali.",
      jibu_en: "Could you tell me more about the opportunities for professional development and how the hospital supports young clinicians?"
    },

    /* II. MEDICAL ETHICS & LAW (21-40) */
    {
      id: 21,
      swali_sw: "Elezea kanuni nne kuu za maadili ya kitabibu.",
      swali_en: "Explain the four cardinal principles of medical ethics.",
      muongozo: "Beneficence, Non-maleficence, Autonomy, na Justice.",
      jibu_en: "Beneficence (Best interest), Non-maleficence (Do no harm), Autonomy (Patient choice), and Justice (Fairness)."
    },
    {
      id: 22,
      swali_sw: "Utafanya nini ikiwa mgonjwa anakataa matibabu ya kuokoa maisha?",
      swali_en: "What if a patient refuses life-saving treatment?",
      muongozo: "Heshimu 'Autonomy' baada ya kutoa elimu na kuhakikisha anasaini fomu ya kukataa.",
      jibu_en: "I must respect their Autonomy. After explaining the risks, I ensure the patient signs a 'Refusal of Treatment' form to document their informed decision."
    },
    {
      id: 23,
      swali_sw: "Tafsiri neno 'Informed Consent' (Ridhaa ya Kujua).",
      swali_en: "Explain 'Informed Consent'.",
      muongozo: "Mchakato wa kuelezea ugonjwa, matibabu, hatari, na faida.",
      jibu_en: "It is the process of providing a patient with all necessary information about their condition and treatment options so they can make a voluntary decision."
    },
    {
      id: 24,
      swali_sw: "Lini siri ya mgonjwa inaweza kuvunjwa (Confidentiality breach)?",
      swali_en: "When can patient confidentiality be breached?",
      muongozo: "Maslahi ya umma (milipuko), amri ya mahakama, au kuzuia kudhuru wengine.",
      jibu_en: "Confidentiality can be breached in cases of communicable diseases, by a court order, or to prevent the patient from harming themselves or others."
    },
    {
      id: 25,
      swali_sw: "Utafanya nini ukigundua mfanyakazi mwenzako anatumia kileo kazini?",
      swali_en: "Action if a colleague is using drugs or alcohol at work?",
      muongozo: "Ripoti kwa mkuu wa matibabu (Medical In-charge) kulinda wagonjwa.",
      jibu_en: "I would report the matter to the Medical Officer in-charge immediately to ensure patient safety and follow civil service regulations."
    },
    {
      id: 26,
      swali_sw: "Nini umuhimu wa 'Medical Audit' (Ukaguzi wa Kitabibu) hospitalini?",
      swali_en: "Importance of 'Medical Audit' in hospitals?",
      muongozo: "Kutathmini huduma dhidi ya viwango vilivyowekwa ili kuboresha matokeo.",
      jibu_en: "Medical audits help in assessing the quality of care provided against set standards to identify gaps and improve clinical outcomes."
    },
    {
      id: 27,
      swali_sw: "Je, ni sawa kupokea zawadi kutoka makampuni ya dawa (Pharmaceutical companies)?",
      swali_en: "Is it okay to accept gifts from pharmaceutical companies?",
      muongozo: "Inaleta Mgongano wa kimaslahi (Conflict of Interest). Haishauriwi.",
      jibu_en: "Professionally, it is discouraged as it can create a Conflict of Interest, potentially influencing unbiased prescription practices."
    },
    {
      id: 28,
      swali_sw: "Utafanya nini ndugu wakiomba usimwambie mgonjwa kuwa ana saratani?",
      swali_en: "What if relatives ask you not to tell the patient they have cancer?",
      muongozo: "Hamasisha ukweli huku ukizingatia hali ya kisaikolojia ya mgonjwa.",
      jibu_en: "I would explain to the relatives the importance of the patient knowing their status, while handling the disclosure with sensitivity."
    },
    {
      id: 29,
      swali_sw: "Wajibu wa Baraza la Madaktari (MCT) ni upi?",
      swali_en: "Role of the Medical Council of Tanganyika (MCT)?",
      muongozo: "Kuchunguza utovu wa nidhamu, kutoa onyo, kusimamisha au kufuta leseni.",
      jibu_en: "The MCT regulates medical practice, ensuring practitioners adhere to ethical standards and taking disciplinary action against malpractice."
    },
    {
      id: 30,
      swali_sw: "Tafsiri neno 'Medical Negligence' (Uzembe wa Kitabibu).",
      swali_en: "Define 'Medical Negligence'.",
      muongozo: "Kushindwa kufikia viwango vya huduma na kusababisha madhara kwa mgonjwa.",
      jibu_en: "Negligence is the failure to provide the standard of care that a reasonably competent professional would have provided, resulting in injury."
    },
    {
      id: 31,
      swali_sw: "Msimamo wa kisheria kuhusu utoaji mimba (Abortion) Tanzania ukoje?",
      swali_en: "Legal position on Abortion in Tanzania?",
      muongozo: "Ni kosa la jinai isipokuwa kuokoa maisha ya mama (inahitaji madaktari 2).",
      jibu_en: "Abortion is illegal in Tanzania unless it is performed to save the mother's life, as certified by two medical practitioners."
    },
    {
      id: 32,
      swali_sw: "Nini utafanya ikiwa mgonjwa anafariki kwa kosa la kiufundi ulilofanya?",
      swali_en: "What to do if a patient dies due to a technical error you made?",
      muongozo: "Kuwa mkweli (transparent), andika ripoti, na fuata itifaki za kiofisi.",
      jibu_en: "I would be transparent with management, document the event in an incidence report, and follow protocol for informing the next of kin."
    },
    {
      id: 33,
      swali_sw: "Elezea 'Veracity' na 'Fidelity'.",
      swali_en: "Explain 'Veracity' and 'Fidelity'.",
      muongozo: "Veracity (Ukweli kwa mgonjwa); Fidelity (Uaminifu kwa wajibu wa kikazi).",
      jibu_en: "Veracity is the duty to tell the truth. Fidelity is being faithful to one's professional obligations and the Hippocratic oath."
    },
    {
      id: 34,
      swali_sw: "Nini umuhimu wa 'DNR' (Do Not Resuscitate)?",
      swali_en: "Significance of 'DNR' (Do Not Resuscitate)?",
      muongozo: "Makubaliano ya kutofanya CPR kwa wagonjwa ambao hali yao haina matumaini ili wafe kwa heshima.",
      jibu_en: "DNR is a medical order to withhold CPR in cases where it would not benefit the patient, ensuring a dignified death."
    },
    {
      id: 35,
      swali_sw: "Mgonjwa amekuja na jeraha la risasi, utafanya nini?",
      swali_en: "Patient comes with a Gunshot wound?",
      muongozo: "Tibu dharura kwanza, kisha toa taarifa polisi haraka iwezekanavyo.",
      jibu_en: "Provide immediate life-saving care first, then fulfill the legal requirement of reporting the incident to the police."
    },
    {
      id: 36,
      swali_sw: "Elezea dhana ya 'Haki' (Justice) katika ugawaji wa rasilimali.",
      swali_en: "Concept of 'Justice' in resource allocation?",
      muongozo: "Vigezo vya kliniki na uhitaji, siyo upendeleo.",
      jibu_en: "Justice ensures that limited resources are allocated based on clinical priority and medical need rather than social or financial status."
    },
    {
      id: 37,
      swali_sw: "Tofauti kati ya Euthanasia na Palliative Care ni ipi?",
      swali_en: "Difference between Euthanasia and Palliative Care?",
      muongozo: "Euthanasia (Kumuua mgonjwa kwa kusudi - Illegal); Palliative (Kupunguza maumivu - Recommended).",
      jibu_en: "Euthanasia is intentional killing to relieve pain (illegal in TZ). Palliative care focuses on improving the quality of life for terminally ill patients."
    },
    {
      id: 38,
      swali_sw: "Utafanya nini daktari mwandamizi (senior) akitoa tiba isiyo sahihi?",
      swali_en: "Senior doctor giving wrong treatment?",
      muongozo: "Tumia lugha ya kitaalamu kumshauri au kuuliza kulingana na STG.",
      jibu_en: "I would respectfully use clinical evidence and Standard Treatment Guidelines (STG) to discuss the treatment rationale with the senior clinician."
    },
    {
      id: 39,
      swali_sw: "Nini umuhimu wa kumbukumbu sahihi za kitabibu (Medical Records)?",
      swali_en: "Importance of accurate Medical Records.",
      muongozo: "Ulinzi wa kisheria kwa daktari na mwendelezo wa huduma kwa mgonjwa.",
      jibu_en: "Medical records serve as a legal defense for the clinician and are essential for ensuring the continuity of patient care."
    },
    {
      id: 40,
      swali_sw: "Je, daktari anaweza kugoma (strike)?",
      swali_en: "Can a doctor go on strike?",
      muongozo: "Kimaadili hapaswi kutelekeza huduma za dharura hata kukiwa na migogoro ya kikazi.",
      jibu_en: "Clinicians should not abandon emergency and essential services, even during labor disputes, according to medical ethics."
    },

    /* III. STG & NEMLIT 2021 (41-60) */
    {
      id: 41,
      swali_sw: "Malengo makuu ya STG na NEMLIT 2021 ni yapi?",
      swali_en: "Main goals of STG and NEMLIT 2021?",
      muongozo: "Kuhuisha matumizi bora ya dawa na kuongoza manunuzi ya MSD/NHIF.",
      jibu_en: "They aim to promote the rational use of medicines, improve essential drug availability, and guide MSD procurement and NHIF reimbursements."
    },
    {
      id: 42,
      swali_sw: "Amlodipine ilibadilika vipi katika NEMLIT 2021?",
      swali_en: "Amlodipine change in NEMLIT 2021?",
      muongozo: "Ilihamishwa kutoka Level C (Hospitali) kwenda Level B (Kituo cha Afya).",
      jibu_en: "Amlodipine was moved to Level B to bring Non-Communicable Disease (NCD) services closer to the community in health centers."
    },
    {
      id: 43,
      swali_sw: "Tiba ya kwanza ya Malaria isiyo na matatizo (Uncomplicated) Tanzania ni ipi?",
      swali_en: "First-line treatment for uncomplicated Malaria in TZ?",
      muongozo: "Artemether-Lumefantrine (ALU).",
      jibu_en: "The recommended first-line treatment is Artemether-Lumefantrine (ALU) as per national guidelines."
    },
    {
      id: 44,
      swali_sw: "Usimamizi wa shinikizo la juu la damu (Hypertension) kulingana na STG.",
      swali_en: "Management of Hypertension according to STG.",
      muongozo: "Mabadiliko ya mfumo wa maisha, kisha Thiazides, ACEIs, au CCBs.",
      jibu_en: "Initial management involves lifestyle modifications, followed by pharmacotherapy using Thiazide diuretics, ACE inhibitors, or Calcium Channel Blockers."
    },
    {
      id: 45,
      swali_sw: "Dawa inayotumika kuzuia degedege la Eclampsia ni ipi?",
      swali_en: "Drug for Eclampsia prophylaxis?",
      muongozo: "Magnesium Sulphate (MgSO4).",
      jibu_en: "Magnesium Sulphate (MgSO4) is the drug of choice, administered using either the Pritchard or Zuspan regimen."
    },
    {
      id: 46,
      swali_sw: "Taja dawa nne za awamu ya kwanza ya tiba ya Kifua Kikuu (TB).",
      swali_en: "Four drugs for TB Phase 1 treatment?",
      muongozo: "Rifampicin, Isoniazid, Pyrazinamide, Ethambutol (RHZE).",
      jibu_en: "The intensive phase combination is Rifampicin, Isoniazid, Pyrazinamide, and Ethambutol (RHZE)."
    },
    {
      id: 47,
      swali_sw: "Nini umuhimu wa kuandika dawa kwa majina ya asili (Generic prescribing)?",
      swali_en: "Importance of Generic prescribing?",
      muongozo: "Kupunguza gharama na kuepuka mkanganyiko wa majina ya biashara.",
      jibu_en: "Generic prescribing reduces healthcare costs and minimizes confusion associated with multiple brand names."
    },
    {
      id: 48,
      swali_sw: "Hatua gani utachukua ikiwa mgonjwa ana madhara ya dawa (ADR)?",
      swali_en: "Action if a patient has an Adverse Drug Reaction (ADR)?",
      muongozo: "Sitisha dawa, tibu madhara, na ripoti TMDA.",
      jibu_en: "Immediately discontinue the drug, provide supportive treatment, and fill out an ADR report for TMDA."
    },
    {
      id: 49,
      swali_sw: "Dawa ya PEP kwa aliyeingiliwa na VVU ni ipi?",
      swali_en: "PEP for HIV exposure?",
      muongozo: "Tenofovir + Lamivudine + Dolutegravir (TLD) kwa siku 28.",
      jibu_en: "The recommended Post-Exposure Prophylaxis is a 28-day course of Tenofovir, Lamivudine, and Dolutegravir (TLD)."
    },
    {
      id: 50,
      swali_sw: "Usimamizi wa kisukari cha ujauzito (Gestational Diabetes).",
      swali_en: "Management of Gestational Diabetes.",
      muongozo: "Chakula, mazoezi, kisha Insulin (Metformin ni chaguo la pili).",
      jibu_en: "Managed primarily through diet and exercise; if uncontrolled, Insulin is the preferred pharmacotherapy in Tanzania."
    },
    {
      id: 51,
      swali_sw: "Vigezo vya kuanza ARVs kwa sasa ni vipi?",
      swali_en: "Criteria for starting ARVs?",
      muongozo: "Pima na uanze (Test and Treat) - anza mara moja bila kujali idadi ya CD4.",
      jibu_en: "Under the current 'Test and Treat' policy, all HIV-positive individuals should start ARV therapy immediately regardless of CD4 count."
    },
    {
      id: 52,
      swali_sw: "Dawa ya kwanza ya UTI kwa mama mjamzito.",
      swali_en: "First-line UTI drug for pregnant women?",
      muongozo: "Nitrofurantoin au Amoxicillin/Clavulanate. Epuka Ciprofloxacin.",
      jibu_en: "Nitrofurantoin or Amoxicillin/Clavulanate are preferred. Ciprofloxacin should be avoided in the 1st and 3rd trimesters."
    },
    {
      id: 53,
      swali_sw: "Tiba ya nimonia kali (Severe Pneumonia) kwa watoto.",
      swali_en: "Treatment for Severe Pneumonia in children?",
      muongozo: "Ceftriaxone au Ampicillin + Gentamicin + Oxygen.",
      jibu_en: "Injectable Ceftriaxone or a combination of Ampicillin and Gentamicin, along with oxygen therapy if needed."
    },
    {
      id: 54,
      swali_sw: "Zinc na ORS kwa kuhara husaidia nini?",
      swali_en: "Zinc and ORS for diarrhea?",
      muongozo: "ORS inarudisha maji; Zinc inapunguza muda wa kuugua na kujirudia.",
      jibu_en: "ORS prevents dehydration, while Zinc reduces the duration of the current episode and prevents recurrence for up to three months."
    },
    {
      id: 55,
      swali_sw: "Tiba ya Kaswende (Syphilis) kwa mtu mzima.",
      swali_en: "Treatment for Syphilis in adults?",
      muongozo: "Benzathine Penicillin G 2.4 MU IM, dozi moja.",
      jibu_en: "A single intramuscular dose of 2.4 million units of Benzathine Penicillin G."
    },
    {
      id: 56,
      swali_sw: "Nini umuhimu wa 'Loading dose'?",
      swali_en: "Importance of a 'Loading dose'?",
      muongozo: "Kufikisha kiwango cha dawa kinachohitajika mwilini kwa haraka.",
      jibu_en: "A loading dose is a higher initial dose given to rapidly achieve the therapeutic concentration of a drug in the bloodstream."
    },
    {
      id: 57,
      swali_sw: "Dawa ya maumivu ya neva baada ya mkanda wa jeshi (Post-herpetic neuralgia).",
      swali_en: "Choice for Post-herpetic neuralgia?",
      muongozo: "Amitriptyline au Carbamazepine.",
      jibu_en: "Low-dose Amitriptyline or Carbamazepine are effective in managing nerve pain following shingles."
    },
    {
      id: 58,
      swali_sw: "Tiba ya Amoeba kulingana na STG.",
      swali_en: "Amoebiasis treatment in STG?",
      muongozo: "Metronidazole 400-800mg TID kwa siku 5-10.",
      jibu_en: "The standard treatment is Metronidazole administered three times a daily for five to ten days."
    },
    {
      id: 59,
      swali_sw: "Kwanini tunatoa Dexamethasone kwenye uchungu unaotangulia muda (Preterm Labour)?",
      swali_en: "Dexamethasone in Preterm Labour?",
      muongozo: "Kuharakisha ukomavu wa mapafu ya mtoto.",
      jibu_en: "It is administered to accelerate fetal lung maturity and reduce the risk of respiratory distress syndrome."
    },
    {
      id: 60,
      swali_sw: "Usimamizi wa 'Cold Chain' ya chanjo ni upi?",
      swali_en: "Cold Chain Management for vaccines?",
      muongozo: "Kuhifadhi kati ya nyuzi joto +2°C hadi +8°C.",
      jibu_en: "Ensuring vaccines are stored and transported between +2°C and +8°C to maintain their potency."
    },

    /* IV. INTERNAL MEDICINE & SURGERY (61-80) */
    {
      id: 61,
      swali_sw: "Hatua za kuhudumia mgonjwa wa ajali (Primary Survey).",
      swali_en: "Steps for trauma patient (Primary Survey)?",
      muongozo: "ABCDE: Airway, Breathing, Circulation, Disability, Exposure.",
      jibu_en: "Follow the ABCDE approach: Airway (with C-spine protection), Breathing, Circulation, Disability, and Exposure."
    },
    
    {
      id: 62,
      swali_sw: "Vigezo vya kutambua 'SIRS' ni vipi?",
      swali_en: "Criteria for 'SIRS'?",
      muongozo: "Joto, Mapigo ya moyo (HR), Pumzi (RR), na wingi wa seli nyeupe (WBC).",
      jibu_en: "Temperature >38°C or <36°C, HR >90 bpm, RR >20 bpm, and WBC >12,000 or <4,000."
    },
    {
      id: 63,
      swali_sw: "Usimamizi wa tatizo la 'Acute Appendicitis' ukoje?",
      swali_en: "Management of Acute Appendicitis?",
      muongozo: "Mgonjwa asile (NPO), IV fluids, maumivu, na upasuaji (Appendectomy).",
      jibu_en: "The patient should be kept NPO, started on IV fluids and analgesia, followed by surgical appendectomy."
    },
    {
      id: 64,
      swali_sw: "Vipengele vya 'Glasgow Coma Scale' (GCS) ni vipi?",
      swali_en: "Glasgow Coma Scale (GCS) components?",
      muongozo: "Macho (4), Maneno (5), Misuli/Motor (6). Jumla 15.",
      jibu_en: "Evaluates Eye opening (max 4), Verbal response (max 5), and Motor response (max 6). Total 15."
    },
    {
      id: 65,
      swali_sw: "Usimamizi wa upungufu mkali wa maji kwa mgonjwa wa kipindupindu.",
      swali_en: "Cholera severe dehydration management?",
      muongozo: "IV Ringer's Lactate (Plan C) na dawa za antibiotics.",
      jibu_en: "Rapid rehydration with IV Ringer's Lactate (Plan C), followed by antibiotics like Doxycycline."
    },
    {
      id: 66,
      swali_sw: "Alama za 'Left Heart Failure' kwenye X-ray ni zipi?",
      swali_en: "Left Heart Failure signs on X-ray?",
      muongozo: "Moyo kuwa mkubwa (Cardiomegaly) na maji mapafuni (Kerley B lines).",
      jibu_en: "Radiographic features include cardiomegaly, pulmonary edema (bat's wing appearance), and Kerley B lines."
    },
    {
      id: 67,
      swali_sw: "Unatambuaje tatizo la 'Perforated Peptic Ulcer'?",
      swali_en: "Diagnosing Perforated Peptic Ulcer?",
      muongozo: "Maumivu ya ghafla, tumbo kuwa gumu kama ubao, na hewa chini ya diaphragm.",
      jibu_en: "Presentation includes sudden severe pain, board-like abdominal rigidity, and free gas under the diaphragm on X-ray."
    },
    {
      id: 68,
      swali_sw: "Taja aina nne kuu za 'Shock'.",
      swali_en: "Four types of 'Shock'?",
      muongozo: "Hypovolemic, Cardiogenic, Septic, na Anaphylactic.",
      jibu_en: "The four main types are Hypovolemic, Cardiogenic, Septic, and Anaphylactic shock."
    },
    {
      id: 69,
      swali_sw: "Usimamizi wa majeraha ya moto (Burn management).",
      swali_en: "Burn management?",
      muongozo: "Kurudisha maji (Parkland Formula) na kuzuia maumivu.",
      jibu_en: "Prioritize fluid resuscitation using the Parkland Formula, infection prevention, and pain management."
    },
    {
      id: 70,
      swali_sw: "Tofauti kati ya Incarcerated na Strangulated Hernia.",
      swali_en: "Incarcerated vs. Strangulated Hernia?",
      muongozo: "Incarcerated (hairudi ndani); Strangulated (damu imekatika, ni dharura).",
      jibu_en: "Incarcerated hernia cannot be reduced; a strangulated hernia is a surgical emergency with compromised blood supply."
    },
    {
      id: 71,
      swali_sw: "Usimamizi wa 'Status Epilepticus'.",
      swali_en: "Status Epilepticus management?",
      muongozo: "Diazepam (IV/Rectal), lalia ubavu, na fungua njia ya hewa.",
      jibu_en: "Administer Diazepam (IV or rectal), place in the recovery position, and ensure the airway is clear."
    },
    {
      id: 72,
      swali_sw: "Vyanzo vya uvimbe mkubwa wa bandama (Massive Splenomegaly) Tanzania.",
      swali_en: "Causes of Massive Splenomegaly in TZ?",
      muongozo: "CML, Schisto, Kala-azar, na Malaria ya muda mrefu.",
      jibu_en: "Common causes include Chronic Myeloid Leukemia, Schistosomiasis, Kala-azar, and Chronic Malaria."
    },
    {
      id: 73,
      swali_sw: "Nini umuhimu wa kipimo cha PSA?",
      swali_en: "Significance of PSA?",
      muongozo: "Kipimo cha saratani ya tezi dume (Prostate Cancer).",
      jibu_en: "PSA is a blood marker used to screen for and monitor prostate cancer or benign prostatic hyperplasia."
    },
    {
      id: 74,
      swali_sw: "Usimamizi wa tatizo la kushindwa kukojoa la ghafla (Acute Retention).",
      swali_en: "Acute Retention of Urine management?",
      muongozo: "Kuweka mpira (Catheter) au kutoboa tumbo (Suprapubic).",
      jibu_en: "Relief is achieved through urethral catheterization or suprapubic cystostomy if the urethra is obstructed."
    },
    {
      id: 75,
      swali_sw: "Dalili za 'Thyrotoxicosis' ni zipi?",
      swali_en: "Symptoms of Thyrotoxicosis?",
      muongozo: "Kupungua uzito, kutetemeka, macho kutoka nje, na kutostahimili joto.",
      jibu_en: "Key features include weight loss, fine tremors, heat intolerance, and bulging eyes (exophthalmos)."
    },
    {
      id: 76,
      swali_sw: "Vigezo na tiba ya sukari kushuka (Hypoglycemia).",
      swali_en: "Hypoglycemia criteria and treatment?",
      muongozo: "Sukari <3.9 mmol/L; Tibu kwa Dextrose 10% au 50%.",
      jibu_en: "Defined as blood glucose <3.9 mmol/L; treat with IV 10% or 50% Dextrose based on severity."
    },
    {
      id: 77,
      swali_sw: "Kwanini tunapaswa kuepuka Pethidine kwa wagonjwa wa figo?",
      swali_en: "Why avoid Pethidine in renal patients?",
      muongozo: "Mabaki ya dawa (Nor-pethidine) husababisha kifafa/sumu kwenye ubongo.",
      jibu_en: "Nor-pethidine can accumulate in renal failure, causing neurotoxicity and seizures."
    },
    {
      id: 78,
      swali_sw: "Vigezo vya kutambua 'Nephrotic Syndrome'.",
      swali_en: "Criteria for Nephrotic Syndrome?",
      muongozo: "Protini nyingi kwenye mkojo, protini kidogo kwenye damu, na kuvimba mwili.",
      jibu_en: "Characterized by heavy proteinuria, low serum albumin, and generalized swelling (anasarca)."
    },
    {
      id: 79,
      swali_sw: "Usimamizi wa 'Tension Pneumothorax'.",
      swali_en: "Tension Pneumothorax management?",
      muongozo: "Kutoa hewa kwa sindano (Decompression), kisha kuweka mirija (Chest tube).",
      jibu_en: "Immediate needle decompression in the 2nd intercostal space, followed by an underwater seal chest tube."
    },
    {
      id: 80,
      swali_sw: "Alama za hatari za saratani ya tumbo (Gastric Cancer).",
      swali_en: "Red Flags for Gastric Cancer?",
      muongozo: "Kupungua uzito, anemia, choo cheusi, na uvimbe tumboni.",
      jibu_en: "Warning signs include unexplained weight loss, iron-deficiency anemia, melena, and a palpable abdominal mass."
    },

    /* V. REPRODUCTIVE, CHILD HEALTH & SYSTEMS (81-100) */
    {
      id: 81,
      swali_sw: "Hatua nne za uchungu (Stages of Labour) ni zipi?",
      swali_en: "Four stages of Labour?",
      muongozo: "1. Kufunguka njia, 2. Kuzaliwa mtoto, 3. Kondo, 4. Masaa 2 ya mwanzo.",
      jibu_en: "Stage 1 (Dilation), Stage 2 (Baby), Stage 3 (Placenta), Stage 4 (First 2 hours post-delivery)."
    },
    {
      id: 82,
      swali_sw: "Usimamizi wa kuvuja damu baada ya uzazi (PPH).",
      swali_en: "Management of PPH?",
      muongozo: "Itifaki ya C-O-N-D-O-M.",
      jibu_en: "Management follows the CONDOM protocol: Compression, Oxytocin, Nasogastric tube/fluids, Drugs, Operative management, and Monitoring."
    },
    {
      id: 83,
      swali_sw: "Tofauti ya Preeclampsia na Eclampsia.",
      swali_en: "Preeclampsia vs Eclampsia?",
      muongozo: "Preeclampsia (BP >140/90 + protini); Eclampsia inaongezeka degedege.",
      jibu_en: "Preeclampsia is high BP and proteinuria; Eclampsia is the occurrence of seizures in a preeclamptic patient."
    },
    {
      id: 84,
      swali_sw: "Nini umuhimu wa Partograph?",
      swali_en: "Importance of the Partograph?",
      muongozo: "Kufuatilia uchungu na kutambua mapema kama umekwama.",
      jibu_en: "It is a vital tool for monitoring labor progress to detect obstructed labor early and prevent complications."
    },
    {
      id: 85,
      swali_sw: "Plan C kwa mtoto aliyepungukiwa maji inahusu nini?",
      swali_en: "Plan C for child dehydration?",
      muongozo: "Matumizi ya maji ya mishipa (IV fluids) kwa upungufu mkali.",
      jibu_en: "Plan C is the rapid intravenous fluid resuscitation protocol for children with severe dehydration."
    },
    {
      id: 86,
      swali_sw: "Taja chanjo tano za mtoto chini ya mwaka mmoja.",
      swali_en: "Five vaccines for a child under one year?",
      muongozo: "BCG, OPV, Rotavirus, Pentavalent, na PCV.",
      jibu_en: "Essential vaccines include BCG (TB), OPV (Polio), Rotavirus, Pentavalent, and PCV (Pneumonia)."
    },
    {
      id: 87,
      swali_sw: "Mfumo wa rufaa (Referral System) Tanzania ukoje?",
      swali_en: "Referral System in Tanzania?",
      muongozo: "Zahanati kwenda Kituo cha Afya hadi Hospitali ya Rufaa.",
      jibu_en: "It is the structured movement of patients from lower-level facilities to higher-level specialized care."
    },
    {
      id: 88,
      swali_sw: "Wajibu wa NHIF katika mfumo wa afya ni upi?",
      swali_en: "Role of NHIF in the health system?",
      muongozo: "Bima ya afya kupunguza gharama za matibabu kwa mgonjwa.",
      jibu_en: "NHIF collects contributions to cover medical costs, reducing the financial burden of out-of-pocket healthcare."
    },
    {
      id: 89,
      swali_sw: "Changamoto za mifumo kama GoT-HOMIS ni zipi?",
      swali_en: "Challenges of systems like GoT-HOMIS?",
      muongozo: "Umeme, mafunzo ya watumishi, na uhifadhi wa data (backup).",
      jibu_en: "Key challenges include the need for stable electricity, staff training, and reliable data backup."
    },
    {
      id: 90,
      swali_sw: "OPRAS inamaanisha nini katika utumishi wa umma?",
      swali_en: "What is OPRAS in civil service?",
      muongozo: "Mfumo wa wazi wa kupima na kutathmini utendaji kazi wa mtumishi kila mwaka.",
      jibu_en: "OPRAS is the open system used in Tanzanian public service to evaluate employee performance annually."
    },
    {
      id: 91,
      swali_sw: "Unawezaje kuzuia rushwa katika kituo cha afya?",
      swali_en: "Preventing corruption in health facilities?",
      muongozo: "Malipo ya kielektroniki, elimu kwa wagonjwa, na adhabu kali.",
      jibu_en: "Through electronic payment systems, transparency in service delivery, and strict disciplinary measures."
    },
    {
      id: 92,
      swali_sw: "Taja alama za hatari wakati wa ujauzito.",
      swali_en: "Danger Signs in pregnancy?",
      muongozo: "Kuvuja damu, kuvimba mwili, maumivu makali, na mtoto kuacha kucheza.",
      jibu_en: "Warning signs include vaginal bleeding, swelling, severe headache/pain, and reduced fetal movements."
    },
    {
      id: 93,
      swali_sw: "Itifaki ya IMCI kwa watoto wagonjwa inahusu nini?",
      swali_en: "IMCI protocol for sick children?",
      muongozo: "Integrated Management of Childhood Illness.",
      jibu_en: "IMCI is an integrated approach that assesses and treats the child as a whole for common causes of mortality."
    },
    {
      id: 94,
      swali_sw: "Wajibu wa Kamati ya Usimamizi ya Kituo (HFGC) ni upi?",
      swali_en: "Role of Health Facility Governing Committee (HFGC)?",
      muongozo: "Kuwakilisha jamii, kuidhinisha mipango, na kuhakikisha uwajibikaji.",
      jibu_en: "The HFGC represents the community, approves financial plans, and ensures accountability in service."
    },
    {
      id: 95,
      swali_sw: "Umuhimu wa chanjo ya HPV nchini Tanzania ni upi?",
      swali_en: "HPV vaccine importance in TZ?",
      muongozo: "Kuzuia saratani ya mlango wa uzazi kwa wasichana (miaka 9-14).",
      jibu_en: "The HPV vaccine is crucial for preventing cervical cancer, targeted at girls aged 9 to 14 years."
    },
    {
      id: 96,
      swali_sw: "Tofauti ya Medical Officer na Clinical Officer ni ipi?",
      swali_en: "Medical Officer vs Clinical Officer?",
      muongozo: "MD (Degree) dhidi ya CO (Diploma).",
      jibu_en: "An MD holds a degree with a broader scope; a CO holds a diploma, but both treat common conditions."
    },
    {
      id: 97,
      swali_sw: "Matumizi ya Misoprostol katika PPH ni yapi?",
      swali_en: "Misoprostol use in PPH?",
      muongozo: "Kukaza mfuko wa uzazi ili kusitisha uvujaji wa damu.",
      jibu_en: "Misoprostol is used to stimulate uterine contractions and stop bleeding, especially where oxytocin is unavailable."
    },
    {
      id: 98,
      swali_sw: "Nini umuhimu wa nyongeza ya Vitamin A?",
      swali_en: "Importance of Vitamin A supplementation?",
      muongozo: "Kuzuia upofu wa usiku na kuongeza kinga ya mwili.",
      jibu_en: "Vitamin A is essential for preventing night blindness and boosting immunity against infections like Measles."
    },
    {
      id: 99,
      swali_sw: "Mgonjwa amekuja na kadi ya bima isiyofanya kazi, utafanya nini?",
      swali_en: "Patient with invalid insurance card?",
      muongozo: "Tibu dharura kwanza, kisha msaidie kuwasiliana na bima au mchakato wa msamaha (waiver).",
      jibu_en: "Provide emergency care first, then assist with insurance contact or guide through the social waiver process."
    },
    {
      id: 100,
      swali_sw: "Vipaumbele vya sekta ya afya Tanzania kwa sasa ni vipi?",
      swali_en: "Priority of TZ health sector now?",
      muongozo: "Kinga, Magonjwa yasiyoambukiza (NCDs), na Bima ya Afya kwa Wote.",
      jibu_en: "Current priorities are preventive services, managing NCDs, and achieving Universal Health Coverage."
    }
  ]
};

export default clinicalData;