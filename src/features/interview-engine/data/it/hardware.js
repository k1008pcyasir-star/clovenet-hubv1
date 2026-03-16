const hardwareData = {
  id: "hardware",
  title: "Hardware & Troubleshooting Mastery",
  description:
    "Technical interview practice covering computer hardware, diagnostics, e-GA standards, and NIDA biometric kits context (Tanzania).",

  etiquette: [
    {
      title: "Structured Diagnosis",
      content:
        "Daima elezea utatuzi wa matatizo (troubleshooting) kwa kufuata hatua 6 za CompTIA: Identify, Theory, Test, Plan, Verify, na Document."
    },
    {
      title: "Safety & Standards",
      content:
        "Sisitiza ulinzi wa vifaa (ESD precautions) na kufuata miongozo ya serikali (e-GA) na sheria ya kulinda data (PDPA 2022)."
    }
  ],

  questions: [
    /* I. TROUBLESHOOTING & STANDARDS (1–15) */
    {
      id: 1,
      swali_sw: "Identify the Problem: Ni mambo gani mtaalamu anapaswa kufanya katika hatua hii?",
      swali_en: "Identify the Problem: What should a technician do at this stage?",
      muongozo: "Uliza maswali kwa mtumiaji, kagua error messages na dalili za nje.",
      jibu_en: "The technician interviews the user, checks error messages, and looks for external signs like unusual sounds or burning smells to define the scope of the issue."
    },
    {
      id: 2,
      swali_sw: "Kwanini ni muhimu kuanzisha nadharia (Establish a Theory) kabla ya kufanya matengenezo?",
      swali_en: "Why is it important to Establish a Theory before repairs?",
      muongozo: "Inasaidia kubaini chanzo kinachowezekana badala ya kubatisha (guesswork).",
      jibu_en: "Establishing a theory helps the technician narrow down the probable cause (e.g., RAM vs. HDD in a boot loop) to avoid inefficient guesswork during repair."
    },
    {
      id: 3,
      swali_sw: "Ni mbinu gani hutumika katika hatua ya 'Test the Theory' ili kudhibitisha chanzo cha tatizo?",
      swali_en: "Which methods are used in 'Test the Theory' stage?",
      muongozo: "Kubadilisha kifaa (swap) au kutumia Safe Mode kutofautisha hardware na software.",
      jibu_en: "Technicians conduct tests such as swapping RAM modules or booting into 'Safe Mode' to confirm if the problem is hardware-related or software-driven."
    },
    {
      id: 4,
      swali_sw: "Hatua ya nne ya 'Plan of Action and Implement the Solution' inahusisha nini?",
      swali_en: "What does 'Plan of Action and Implement the Solution' involve?",
      muongozo: "Baada ya kuthibitisha chanzo, chukua hatua za kurekebisha kama kubadili kifaa au drivers.",
      jibu_en: "Once the cause is confirmed, the technician plans the steps to fix it, such as replacing a faulty component or reinstalling specific device drivers."
    },
    {
      id: 5,
      swali_sw: "Kwanini mtaalamu anapaswa kuhakiki utendaji (Verify Full System Functionality) baada ya kurekebisha?",
      swali_en: "Why must a technician Verify Full System Functionality after repair?",
      muongozo: "Kuhakikisha tatizo limeisha na hakuna tatizo jipya liloanzishwa.",
      jibu_en: "To ensure the original problem is resolved and no new issues were introduced during the hardware replacement or software configuration."
    },
    {
      id: 6,
      swali_sw: "Nini umuhimu wa hatua ya mwisho ya 'Document Findings' kulingana na e-GA?",
      swali_en: "What is the importance of 'Document Findings' according to e-GA standards?",
      muongozo: "Kutengeneza rejea (reference) ya baadae na usimamizi bora wa rasilimali za serikali.",
      jibu_en: "Documentation is vital for future reference and asset management, helping organizations reduce operational costs by avoiding repetitive troubleshooting efforts."
    },
    {
      id: 7,
      swali_sw: "Sheria ya PDPA 2022 inaathiri vipi usimamizi wa hardware nchini Tanzania?",
      swali_en: "How does PDPA 2022 affect hardware management in Tanzania?",
      muongozo: "Inalazimisha ulinzi wa data za siri wakati wa matengenezo au uondoaji (disposal) wa vifaa.",
      jibu_en: "It mandates technicians to ensure data privacy is maintained during repairs and that storage devices are properly wiped before disposal to prevent unauthorized data access."
    },
    {
      id: 8,
      swali_sw: "Asset Register ni nini kulingana na mwongozo wa e-GA (eGA/EXT/ISA/004)?",
      swali_en: "What is an Asset Register according to e-GA guidelines?",
      muongozo: "Ni daftari la kufuatilia mzunguko wa maisha ya hardware (Hardware Lifecycle).",
      jibu_en: "An Asset Register is a formal record that every institution must maintain to track the lifecycle of ICT hardware, from procurement to disposal."
    },
    {
      id: 9,
      swali_sw: "Tofauti kati ya HDD na SSD kiutendaji ni ipi?",
      swali_en: "What is the functional difference between HDD and SSD?",
      muongozo: "HDD ina diski za sumaku (moving parts); SSD ni kielektroniki na ina kasi zaidi.",
      jibu_en: "HDDs use spinning magnetic platters, whereas SSDs use flash memory. SSDs are significantly faster, more durable, and consume less power than HDDs."
    },
    {
      id: 10,
      swali_sw: "Nini maana ya 'Disk Wiping' kisheria wakati wa uondoaji wa vifaa?",
      swali_en: "What does 'Disk Wiping' mean legally during asset disposal?",
      muongozo: "Kufuta data kitalamu ili zisirudishwe (recoverable) na watu wa nje.",
      jibu_en: "Disk wiping is a technical process of overwriting data to ensure it is unrecoverable, fulfilling legal data protection requirements for government or corporate entities."
    },
    {
      id: 11,
      swali_sw: "Kwanini nyaya za Cat6 ndizo kiwango kinachotumika zaidi ofisini Tanzania?",
      swali_en: "Why is Cat6 the standard cabling for offices in Tanzania?",
      muongozo: "Inasupport kasi ya 1 Gbps kwa umbali mrefu (mita 100).",
      jibu_en: "Cat6 cables support high-speed data transfer up to 1 Gbps at a distance of 100 meters, making them ideal for modern office local area networks."
    },
    {
      id: 12,
      swali_sw: "Elezea mpangilio wa rangi wa T568B kwenye pini 1 na 2.",
      swali_en: "Explain the T568B color coding for pins 1 and 2.",
      muongozo: "Pini 1: Orange-White, Pini 2: Orange.",
      jibu_en: "In the T568B standard, Pin 1 is Orange-White (used for Transmit+) and Pin 2 is Orange (used for Transmit-)."
    },
    {
      id: 13,
      swali_sw: "Pini za 4 (Blue) na 5 (Blue-White) katika T568B mara nyingi hutumika kwa kazi gani?",
      swali_en: "What are pins 4 (Blue) and 5 (Blue-White) in T568B usually used for?",
      muongozo: "Hutumiwa kusafirisha umeme (PoE - Power over Ethernet).",
      jibu_en: "Pins 4 and 5 are typically used for carrying power in Power over Ethernet (PoE) technology, which powers devices like IP cameras and VoIP phones."
    },
    {
      id: 14,
      swali_sw: "Kwanini ni lazima kutumia 'Cable Tester' baada ya 'Crimping'?",
      swali_en: "Why must a Cable Tester be used after crimping?",
      muongozo: "Kuhakiki mpangilio wa rangi na kuzuia crosstalk.",
      jibu_en: "To verify correct pin-to-pin mapping and ensure there are no open circuits, shorts, or crosstalk that would degrade network performance."
    },
    {
      id: 15,
      swali_sw: "Vumbi na unyevu vinaweza kusababisha kosa gani katika vitambuzi vya biometria?",
      swali_en: "What error do dust and moisture cause in biometric sensors?",
      muongozo: "Vinasababisha kosa la FRR (False Rejection Rate).",
      jibu_en: "Environmental factors like dust and moisture increase the False Rejection Rate (FRR), where the system fails to recognize and rejects authorized users."
    },

    /* II. BIOMETRICS & NIDA KITS (16–40) */
    {
      id: 16,
      swali_sw: "Aratek A600: Kwanini kitambuzi hiki kinaweza kushindwa kutambua vidole?",
      swali_en: "Aratek A600: Why might this sensor fail to recognize fingerprints?",
      muongozo: "Uchafu wa vidole, majeraha, au presha kubwa wakati wa kukandamiza.",
      jibu_en: "Failure can be caused by dirt/oils on the finger, physical abrasions from manual labor, or applying excessive pressure which blurs the ridges."
    },
    {
      id: 17,
      swali_sw: "Nini suluhisho ikiwa mwombaji ana mistari ya vidole iliyofutika kabisa?",
      swali_en: "What is the solution if an applicant's fingerprints are worn out?",
      muongozo: "Tumia vidole mbadala (secondary fingers) kulingana na muongozo wa usajili.",
      jibu_en: "Technicians should use alternative fingers (thumbs or middle fingers) as specified by the enrollment guidelines when primary fingers cannot be captured."
    },
    {
      id: 18,
      swali_sw: "Nifanye nini PC isipotambua kitambuzi cha biometria kilichounganishwa kwa USB?",
      swali_en: "What should I do if the PC fails to detect a USB biometric sensor?",
      muongozo: "Badili port, kagua drivers kwenye Device Manager, na kagua kamba.",
      jibu_en: "Try a different USB port, check for driver errors in Device Manager, and ensure you are using a high-quality data-rated USB cable."
    },
    {
      id: 19,
      swali_sw: "Sifa gani za kiufundi zinahitajika kwa laptop ya usajili wa NIDA?",
      swali_en: "What technical specs are required for a NIDA registration laptop?",
      muongozo: "RAM 16GB+, SSD 512GB+, na processor ya kizazi cha sasa (EliteBook context).",
      jibu_en: "A professional-grade laptop like an HP EliteBook with at least 16GB RAM and a 512GB SSD is required to handle the encryption and local database processing."
    },
    {
      id: 20,
      swali_sw: "Kazi ya 'Rugged Case' katika kiti ya usajili ni ipi?",
      swali_en: "What is the purpose of the 'Rugged Case' in a registration kit?",
      muongozo: "Kulinda vifaa dhidi ya mshtuko (shock) na vumbi wakati wa usafiri.",
      jibu_en: "The rugged case protects sensitive hardware components from physical shocks, vibrations, and harsh environmental conditions during transit to remote areas."
    },
    {
      id: 21,
      swali_sw: "Iris Scanner inachukua picha gani kitalamu?",
      swali_en: "What image does an Iris Scanner technically capture?",
      muongozo: "Inachukua muundo wa mboni za macho (patterns of the iris).",
      jibu_en: "It captures high-resolution infrared images of the unique patterns in the iris (the colored ring around the pupil) for secondary identification."
    },
    {
      id: 22,
      swali_sw: "Unasafishaje kioo cha scanner bila kuharibu kitambuzi?",
      swali_en: "How do you clean a scanner's glass without damaging it?",
      muongozo: "Tumia lint-free cloth na epuka kemikali kali.",
      jibu_en: "Gently wipe the sensor surface with a clean, dry, lint-free cloth. Avoid abrasive materials or harsh chemicals that could scratch the optical coating."
    },
    {
      id: 23,
      swali_sw: "Kamera ya uso katika kit ya NIDA inapaswa kufuata kiwango gani?",
      swali_en: "Which standard should the facial camera in the NIDA kit follow?",
      muongozo: "Kiwango cha ICAO (kwa ajili ya picha za utambulisho).",
      jibu_en: "It must comply with ICAO (International Civil Aviation Organization) standards to ensure high-quality, biometrically accurate facial images."
    },
    {
      id: 24,
      swali_sw: "Miongozo ya e-GA inasemaje kuhusu preventive maintenance ya biometria?",
      swali_en: "What does e-GA say about preventive maintenance for biometrics?",
      muongozo: "Inapaswa kufanyika mara kwa mara na rekodi za matengenezo zihifadhiwe.",
      jibu_en: "Regular preventive maintenance is mandatory, and detailed logs must be kept to ensure system reliability and asset accountability."
    },
    {
      id: 25,
      swali_sw: "Alama ya njano kwenye Device Manager inashiria nini?",
      swali_en: "What does a yellow exclamation mark in Device Manager indicate?",
      muongozo: "Driver haijatambuliwa au kuna hitilafu ya driver (driver conflict).",
      jibu_en: "It indicates that the hardware is detected but the appropriate driver is missing, outdated, or incompatible with the current OS."
    },
    {
      id: 26,
      swali_sw: "NIDA Kit inatumia betri ya aina gani maeneo ya vijijini?",
      swali_en: "What type of battery does the NIDA Kit use in rural areas?",
      muongozo: "Betri ya Lithium-ion yenye uwezo mkubwa (mfano 20Ah).",
      jibu_en: "High-capacity Lithium-ion batteries (e.g., 20Ah) are used, often paired with solar charging kits to ensure continuous operation in off-grid areas."
    },
    {
      id: 27,
      swali_sw: "Kwanini tunasafisha vidole kwa maji kabla ya usajili?",
      swali_en: "Why do we clean fingers with water/wipes before registration?",
      muongozo: "Kuondoa mafuta na vumbi vinavyoweza kuharibu picha ya scanner.",
      jibu_en: "Cleaning removes oils, sweat, and dust, ensuring a high-contrast fingerprint image for the AFIS (Automated Fingerprint Identification System)."
    },
    {
      id: 28,
      swali_sw: "Nini maana ya '4-4-2' katika usajili wa vidole?",
      swali_en: "What does '4-4-2' mean in fingerprint enrollment?",
      muongozo: "Vidole 4 kulia, 4 kushoto, na gumba 2 (slap capture).",
      jibu_en: "It refers to the sequence of capturing four fingers from the right hand, four from the left, and finally the two thumbs together."
    },
    {
      id: 29,
      swali_sw: "Kazi ya 'Iris scanner' ni ipi?",
      swali_en: "What is the function of the Iris scanner?",
      muongozo: "Utambulisho mbadala pindi vidole vikishindwa kusomeka.",
      jibu_en: "It serves as a secondary biometric modality, providing a highly accurate backup when fingerprints cannot be captured due to labor-worn ridges."
    },
    {
      id: 30,
      swali_sw: "Kwanini unyevu (sweat) huathiri scanner?",
      swali_en: "Why does moisture/sweat affect the scanner?",
      muongozo: "Unasababisha picha kutoonekana vizuri (blurring) na smudges.",
      jibu_en: "Moisture can fill the gaps between fingerprint ridges, causing a blurred image or a dark smudge that makes the biometric features indistinguishable."
    },
    {
      id: 31,
      swali_sw: "Kazi ya kamba (cable) ya USB ya asili ni ipi?",
      swali_en: "What is the purpose of using an original USB cable?",
      muongozo: "Kuhakikisha inapapitisha data (data transfer) bila usumbufu.",
      jibu_en: "Original cables are rated for high-speed data transfer and proper shielding, preventing connectivity drops that commonly occur with generic power-only cables."
    },
    {
      id: 32,
      swali_sw: "ICAO inasimamia kiwango gani cha picha?",
      swali_en: "Which photo standard does ICAO regulate?",
      muongozo: "Kiwango cha picha za uso kwa vitambulisho rasmi (biometric portraits).",
      jibu_en: "ICAO regulates the technical standards for facial portraits used in electronic travel documents and national IDs, including lighting, pose, and background."
    },
    {
      id: 33,
      swali_sw: "Nini madhara ya kukandamiza kidole kwa nguvu?",
      swali_en: "What is the effect of pressing the finger too hard?",
      muongozo: "Inaharibu muundo wa picha (ridge smudging) na kutoa picha nyeusi.",
      jibu_en: "Excessive pressure flattens the skin against the glass, causing ridges to merge and resulting in a dark, illegible smudge in the scan."
    },
    {
      id: 34,
      swali_sw: "FBI PIV ni kiwango gani cha scanner?",
      swali_en: "What does FBI PIV stand for in scanner standards?",
      muongozo: "Ni kiwango cha usalama na usahihi wa picha kilichothibitishwa (certified).",
      jibu_en: "It stands for Personal Identity Verification, a standard set by the FBI ensuring the scanner produces images of sufficient quality for forensic-level identification."
    },
    {
      id: 35,
      swali_sw: "Kazi ya programu ya usajili (Registration app) ni ipi?",
      swali_en: "What is the function of the registration application software?",
      muongozo: "Kuunganisha data za biometria na data za maandishi ya mwombaji.",
      jibu_en: "The application acts as an interface to capture and encrypt biometric data (fingers, iris, face) and link it to the applicant's demographic data."
    },
    {
      id: 36,
      swali_sw: "NIDA Kit inapaswa kusafishwa kwa nini?",
      swali_en: "How should the NIDA Kit be cleaned?",
      muongozo: "Kitambaa laini (microfiber) na epuka kemikali kali.",
      jibu_en: "Components should be cleaned with dry microfiber cloths; alcohol or harsh chemicals should never be used directly on optical scanner surfaces."
    },
    {
      id: 37,
      swali_sw: "Kazi ya binocular iris scanner ni ipi?",
      swali_en: "What is the role of a binocular iris scanner?",
      muongozo: "Kuchukua picha za mboni zote mbili kwa wakati mmoja.",
      jibu_en: "It allows the simultaneous capture of both irises, speeding up the enrollment process and providing higher security through dual-eye verification."
    },
    {
      id: 38,
      swali_sw: "Kwanini betri ya Lithium-ion inapendekezwa?",
      swali_en: "Why are Lithium-ion batteries preferred for mobile kits?",
      muongozo: "Inakaa na chaji muda mrefu na ni nyepesi kuliko za Lead-Acid.",
      jibu_en: "Li-ion batteries have a high energy density, provide consistent power output, and are lighter, which is essential for portability in field registration."
    },
    {
      id: 39,
      swali_sw: "False Rejection Rate huongezeka kwanini?",
      swali_en: "Why does the False Rejection Rate (FRR) increase?",
      muongozo: "Uchafu wa kioo cha scanner au vidole viwe na majeraha/vumbi.",
      jibu_en: "It increases due to Poor image quality from dirty sensors, degraded skin conditions of the applicant, or incorrect finger placement during capture."
    },
    {
      id: 40,
      swali_sw: "Kazi ya Solar Panel katika Kit ni ipi?",
      swali_en: "What is the function of the Solar Panel in the kit?",
      muongozo: "Kutoa nishati mbadala ya kuchajia Kit maeneo ya mbali (off-grid).",
      jibu_en: "It provides a renewable energy source to recharge the kit's internal battery, enabling enrollment activities in areas without reliable access to the national grid."
    },

    /* III. PRINTERS & GePG (41–60) */
    {
      id: 41,
      swali_sw: "Kichapishi cha risiti kinatoa blank paper. Tatizo ni nini?",
      swali_en: "Receipt printer outputting blank paper. What's the problem?",
      muongozo: "Karatasi imewekwa upande usio sahihi (thermal coating side).",
      jibu_en: "Thermal paper only prints on one side. The roll is likely installed upside down, so the print head is heating the non-reactive side of the paper."
    },
    {
      id: 42,
      swali_sw: "Nini chanzo cha maandishi hafifu kwenye risiti ya GePG?",
      swali_en: "What causes faint text on GePG receipts?",
      muongozo: "Uchafu kwenye print head au betri ya POS kuwa na nguvu ndogo.",
      jibu_en: "This is usually caused by a dirty print head, low battery power on the POS device, or using poor quality thermal paper."
    },
    {
      id: 43,
      swali_sw: "Kwanini tunatumia Thermal Printers kwa malipo ya serikali?",
      swali_en: "Why use Thermal Printers for government payments?",
      muongozo: "Hazihitaji wino, ni za haraka, na rahisi kufanya maintenance.",
      jibu_en: "They require no ink or toner, have fewer moving parts (high reliability), and print instantly, which is ideal for high-volume revenue collection (GePG)."
    },
    {
      id: 44,
      swali_sw: "Mtaalamu anapaswa kukagua nini POS ikiwa 'Offline'?",
      swali_en: "What should a technician check if a POS is 'Offline'?",
      muongozo: "Kukagua sim card/intaneti na IP address configuration.",
      jibu_en: "Check the network connectivity (SIM data or Wi-Fi), verify APN settings, and ensure the device can ping the central GePG gateway."
    },
    {
      id: 45,
      swali_sw: "Alama za ajabu (gibberish) kwenye kichapishi zinasababishwa na nini?",
      swali_en: "What causes gibberish/strange symbols to print?",
      muongozo: "Baud rate isiyo sahihi au Emulation mode haijaendana.",
      jibu_en: "This occurs due to a baud rate mismatch or incorrect emulation settings between the software and the printer driver."
    },
    {
      id: 46,
      swali_sw: "Kwanini mpangilio wa 'WinPrint' unahitajika kwenye Print Processor?",
      swali_en: "Why is 'WinPrint' setting needed in the Print Processor?",
      muongozo: "Inahakikisha data inatafsiriwa vizuri na OS kwenda kwa printer.",
      jibu_en: "Setting the processor to WinPrint/RAW ensures the OS sends data in a format the thermal printer can interpret without graphical errors."
    },
    {
      id: 47,
      swali_sw: "Kazi ya kemikali kwenye thermal paper ni ipi?",
      swali_en: "What is the role of chemicals on thermal paper?",
      muongozo: "Kubadilika kuwa nyeusi pindi zinapopata joto la print head.",
      jibu_en: "Thermal paper is coated with a heat-sensitive dye that turns black when exposed to the heat from the thermal print head, eliminating the need for ink."
    },
    {
      id: 48,
      swali_sw: "Nini madhara ya kutumia plain paper kwenye thermal printer?",
      swali_en: "What happens if you use plain paper in a thermal printer?",
      muongozo: "Haitatoa maandishi yoyote (blank output).",
      jibu_en: "Since thermal printers don't use ink, plain paper will remain blank because it lacks the heat-reactive chemicals found in thermal rolls."
    },
    {
      id: 49,
      swali_sw: "Baud Rate inahusu nini katika mawasiliano ya printer?",
      swali_en: "What is Baud Rate in printer communication?",
      muongozo: "Ni kasi ya ubadilishanaji wa taarifa (bits per second).",
      jibu_en: "Baud rate is the speed at which information is transmitted over a serial connection. Both the PC and printer must be set to the same rate (e.g., 9600) to communicate."
    },
    {
      id: 50,
      swali_sw: "Kazi ya POS (Point of Sale) katika GePG ni ipi?",
      swali_en: "What is the role of POS in GePG?",
      muongozo: "Kupokea miamala na kutoa risiti zenye control number.",
      jibu_en: "The POS terminal serves as a field device to generate control numbers, accept payments, and issue valid electronic receipts for government services."
    },
    {
      id: 51,
      swali_sw: "Print Head inapaswa kusafishwa mara ngapi?",
      swali_en: "How often should a Print Head be cleaned?",
      muongozo: "Mara kwa mara au maandishi yakianza kufifia.",
      jibu_en: "It should be cleaned regularly—typically every time you change the paper roll—or immediately if white lines appear or text becomes faint."
    },
    {
      id: 52,
      swali_sw: "Kwanini thermal printers hazitumii riboni?",
      swali_en: "Why don't thermal printers use ribbons?",
      muongozo: "Inategemea joto la moja kwa moja (direct thermal technology).",
      jibu_en: "Direct thermal printers use heat directly on sensitive paper, unlike thermal transfer printers which require a ribbon to transfer ink to the surface."
    },
    {
      id: 53,
      swali_sw: "Baud rate ya kawaida kwa POS printers ni ipi?",
      swali_en: "What is the standard baud rate for POS printers?",
      muongozo: "Mara nyingi ni 9600 bps (bits per second).",
      jibu_en: "While it varies, 9600 bps is the most common industry standard for serial thermal printers used in POS systems."
    },
    {
      id: 54,
      swali_sw: "Emulation mode inasaidia nini?",
      swali_en: "What does Emulation mode do?",
      muongozo: "Inasaidia printer kuelewa lugha ya amri (kama ESC/POS).",
      jibu_en: "Emulation allows a printer to 'act' like a different brand (e.g., Epson ESC/POS), ensuring it understands the commands sent by the sales software."
    },
    {
      id: 55,
      swali_sw: "Kazi ya 'Paper Roll' sensor ni ipi?",
      swali_en: "What is the function of the 'Paper Roll' sensor?",
      muongozo: "Kutoa alert pindi karatasi inapokuwa imeisha.",
      jibu_en: "It detects the presence of paper and triggers an alert (often a red light) to notify the user when the roll is empty or near the end."
    },
    {
      id: 56,
      swali_sw: "Kwanini thermal printer ni ya kimya?",
      swali_en: "Why are thermal printers so quiet?",
      muongozo: "Haina pini au nyundo zinazogonga karatasi (impactless).",
      jibu_en: "They operate by heat contact rather than physical impact, making them much quieter than dot-matrix or impact printers."
    },
    {
      id: 57,
      swali_sw: "Nini madhara ya vumbi kwenye print head?",
      swali_en: "What are the effects of dust on the print head?",
      muongozo: "Inasababisha mistari meupe (missing pixels) kwenye risiti.",
      jibu_en: "Dust buildup prevents the heating elements from contacting the paper, resulting in vertical white lines and unreadable parts of the receipt."
    },
    {
      id: 58,
      swali_sw: "Kazi ya 'Cutter' kwenye POS printer ni ipi?",
      swali_en: "What is the role of the 'Cutter' in a POS printer?",
      muongozo: "Kukata karatasi ya risiti kitalamu baada ya uchapishaji.",
      jibu_en: "The auto-cutter provides a clean, professional tear-off for the receipt immediately after the printing process completes."
    },
    {
      id: 59,
      swali_sw: "GePG inahakikishaje usalama wa risiti?",
      swali_en: "How does GePG ensure receipt security?",
      muongozo: "Kupitia control numbers na QR codes zinazoweza kuhakikiwa.",
      jibu_en: "It uses unique, system-generated control numbers and QR codes that allow citizens to verify the payment's authenticity through government portals."
    },
    {
      id: 60,
      swali_sw: "Nini cha kufanya kioo cha POS kikigoma (freeze)?",
      swali_en: "What to do if the POS screen freezes?",
      muongozo: "Zima na uwashe upya (Hard Reset).",
      jibu_en: "Perform a hard reset by holding the power button to shut down the device, then restart it to clear memory errors and frozen processes."
    },

    /* IV. ASSEMBLY, CABLING & BUSINESS (61–80) */
    {
      id: 61,
      swali_sw: "PC inazimika baada ya kuwaka kwa muda mfupi. Sababu ni nini?",
      swali_en: "PC shuts down shortly after starting. What is the cause?",
      muongozo: "Overheating (vumbi kwenye feni au thermal paste kukauka).",
      jibu_en: "This is usually caused by overheating. Check if the CPU fan is working and ensure the thermal paste is not dried out."
    },
    {
      id: 62,
      swali_sw: "Nini umuhimu wa CMOS Battery?",
      swali_en: "What is the importance of the CMOS Battery?",
      muongozo: "Inahifadhi mipangilio ya BIOS na muda (system clock).",
      jibu_en: "It provides power to the CMOS chip to store BIOS settings and maintain the system's real-time clock even when the computer is unplugged."
    },
    {
      id: 63,
      swali_sw: "Ping 127.0.0.1 inatumika kupima nini?",
      swali_en: "What does 'Ping 127.0.0.1' test?",
      muongozo: "Inapima kama NIC na TCP/IP protocol zinafanya kazi (Loopback).",
      jibu_en: "It is a loopback address test to verify that the local TCP/IP stack and the Network Interface Card (NIC) are functioning correctly within the OS."
    },
    {
      id: 64,
      swali_sw: "Straight-through cable inatumika kuunganisha vifaa gani?",
      swali_en: "Which devices does a Straight-through cable connect?",
      muongozo: "Vifaa tofauti (mfano PC kwenda Switch).",
      jibu_en: "It is used to connect dissimilar devices, such as a computer to a network switch or a router to a hub."
    },
    {
      id: 65,
      swali_sw: "Teknolojia ya Auto-MDIX inasaidia nini?",
      swali_en: "What does Auto-MDIX technology help with?",
      muongozo: "Vifaa kujitambua na kubadili mawasiliano yenyewe (crossover/straight).",
      jibu_en: "Auto-MDIX allows modern network ports to automatically detect the required cable type and configure the signals internally, eliminating the need for crossover cables."
    },
    {
      id: 66,
      swali_sw: "Nini sifa ya kipekee (USP) ya Yaham Education Hub?",
      swali_en: "What is the Unique Selling Proposition (USP) of Yaham Education Hub?",
      muongozo: "Step-by-Step video solutions na Interview FAQs kwa soko la TZ.",
      jibu_en: "Its focus on localized content, providing step-by-step video solutions and specialized interview prep tailored for the Tanzanian IT job market."
    },
    {
      id: 67,
      swali_sw: "Kwanini Resume Builder yenye Keyword Optimization ni muhimu?",
      swali_en: "Why is Keyword Optimization important in a Resume Builder?",
      muongozo: "Kupita kwenye mifumo ya ATS ya kampuni kubwa.",
      jibu_en: "It ensures resumes pass through Applicant Tracking Systems (ATS) by including specific industry keywords that recruiters search for."
    },
    {
      id: 68,
      swali_sw: "Fursa ya Biometric Maintenance Tanzania ina nafasi gani?",
      swali_en: "What is the opportunity for Biometric Maintenance in Tanzania?",
      muongozo: "Nafasi ni kubwa kwa sababu taasisi nyingi hazina mafundi wa ndani.",
      jibu_en: "There is a massive market gap as many institutions deploy biometric systems but lack in-house technical support for hardware maintenance and calibration."
    },
    {
      id: 69,
      swali_sw: "Umuhimu wa documentation kulingana na e-GA ni nini?",
      swali_en: "Why is documentation important according to e-GA?",
      muongozo: "Kupunguza gharama na kuzuia kurudia makosa (knowledge management).",
      jibu_en: "It promotes knowledge transfer and operational efficiency, preventing the repetition of previous technical errors and reducing overall maintenance costs."
    },
    {
      id: 70,
      swali_sw: "Kazi ya Brown na Brown-White pini kwenye T568B ni nini?",
      swali_en: "What is the role of the Brown pair in T568B?",
      muongozo: "Grounding na ulinzi wa mzunguko wa umeme.",
      jibu_en: "The brown pair (pins 7 and 8) is often used for grounding and providing extra protection against electrical interference and spikes in the cable."
    },
    {
      id: 71,
      swali_sw: "Unasafishaje heat sink ya kompyuta?",
      swali_en: "How do you clean a computer's heat sink?",
      muongozo: "Tumia compressed air au brashi laini kuondoa vumbi.",
      jibu_en: "Use compressed air or a soft brush to clear dust from the fins. Ensuring airflow is crucial for effective heat dissipation from the processor."
    },
    {
      id: 72,
      swali_sw: "Nini madhara ya CMOS battery kuishiwa nguvu?",
      swali_en: "What are the effects of a dead CMOS battery?",
      muongozo: "Saa kurudi nyuma na BIOS settings kupotea.",
      jibu_en: "The system time and date will reset every time the computer is turned off, and the BIOS will revert to default settings, which can cause boot errors."
    },
    {
      id: 73,
      swali_sw: "Nini maana ya 'Crosstalk' katika nyaya za mtandao?",
      swali_en: "What is 'Crosstalk' in network cabling?",
      muongozo: "Muingiliano wa ishara kati ya kamba mbili unaoharibu data.",
      jibu_en: "Crosstalk is electromagnetic interference between adjacent wire pairs, which can corrupt data signals and reduce network throughput."
    },
    {
      id: 74,
      swali_sw: "Nini kazi ya 'Switch' katika mtandao?",
      swali_en: "What is the role of a 'Switch' in a network?",
      muongozo: "Kuunganisha vifaa na kuelekeza data kwa MAC address sahihi.",
      jibu_en: "A switch connects multiple devices on a LAN and uses MAC addresses to forward data packets only to the intended destination port."
    },
    {
      id: 75,
      swali_sw: "ICT Asset Management inahusu nini?",
      swali_en: "What is ICT Asset Management?",
      muongozo: "Usimamizi wa hardware tangu ununuzi hadi disposal.",
      jibu_en: "It is the systematic process of tracking and managing the entire lifecycle of an organization's ICT equipment, from acquisition and maintenance to final disposal."
    },
    {
      id: 76,
      swali_sw: "Nini faida ya Subscription model kwa Yaham Hub?",
      swali_en: "What are the benefits of a Subscription model for Yaham Hub?",
      muongozo: "Kipato endelevu (recurring revenue) na huduma ya mfululizo kwa wateja.",
      jibu_en: "It provides predictable recurring revenue for the business while ensuring students have ongoing access to the latest career and tech content."
    },
    {
      id: 77,
      swali_sw: "Thermal Paste inafanya kazi gani kitalamu?",
      swali_en: "What is the technical function of Thermal Paste?",
      muongozo: "Kuziba nafasi za hewa na kuhamisha joto kwenda kwenye heat sink.",
      jibu_en: "It fills microscopic air gaps between the CPU and heat sink, providing a high-conductivity path to improve thermal transfer and cooling efficiency."
    },
    {
      id: 78,
      swali_sw: "BIOS inamaanisha nini?",
      swali_en: "What does BIOS stand for?",
      muongozo: "Basic Input/Output System.",
      jibu_en: "It stands for Basic Input/Output System, the firmware used to perform hardware initialization during the booting process."
    },
    {
      id: 79,
      swali_sw: "Kwanini data wiping ni lazima wakati wa disposal?",
      swali_en: "Why is data wiping mandatory during equipment disposal?",
      muongozo: "Kuzuia data nyeti zisichukuliwe na watu wasioruhusiwa (PDPA 2022).",
      jibu_en: "To prevent the recovery of sensitive institutional data by third parties, ensuring compliance with the Data Protection Act 2022."
    },
    {
      id: 80,
      swali_sw: "Nini mustakabali wa TEHAMA Tanzania 2025-26?",
      swali_en: "What is the future outlook for ICT in Tanzania 2025-26?",
      muongozo: "Cybersecurity, AI katika kilimo, na digital inclusion.",
      jibu_en: "The focus will be on Cybersecurity, AI-driven agricultural solutions, and expanding digital government services to reach the underserved populations."
    }
  ]
};

export default hardwareData;