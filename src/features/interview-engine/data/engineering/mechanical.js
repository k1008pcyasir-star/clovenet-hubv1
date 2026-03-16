const mechanicalData = {
  id: "mechanical-engineering",
  title: "Mechanical Engineering: Professional Interview Compendium",
  description:
    "Comprehensive Evaluation: 100 Essential Questions for Mechanical Engineers in Tanzania. Inajumuisha miongozo ya ERB (SEAP), usalama wa mitambo (OSHA), ununuzi (NeST), Thermodynamics, na Machine Design.",

  etiquette: [
    {
      title: "Regulatory Compliance",
      content:
        "Wahandisi wa mitambo nchini Tanzania lazima wazingatie sheria ya usajili ya ERB (Sura ya 63) na viwango vya ubora vya TBS katika kila mradi."
    },
    {
      title: "Maintenance Strategy",
      content:
        "Sisitiza mpito kutoka Reactive (Breakdown) kwenda Proactive (Preventive/Predictive) maintenance ili kuhakikisha ufanisi wa viwanda."
    },
    {
      title: "Operational Safety",
      content:
        "Daima tanguliza usalama wa mitambo ya shinikizo (Boilers/Pressure Vessels) kwa kufuata miongozo ya OSHA (Act of 2003)."
    }
  ],

  questions: [
    /* SECTION 1: REGULATORY AND PROFESSIONAL STANDARDS (1-15) */
    {
      id: 1,
      cat: "Regulatory",
      swali_sw: "Unawezaje kuelezea jukumu la Bodi ya Usajili wa Wahandisi (ERB) katika kumpatia mhandisi mamlaka ya kufanya kazi nchini Tanzania?",
      swali_en: "How do you describe the role of the Engineers Registration Board (ERB) in granting an engineer the authority to practice in Tanzania?",
      muongozo: "Elezea ERB kama chombo cha kisheria chini ya Sura ya 63.",
      jibu_en: "The ERB is a statutory body established under the Engineers Registration Act, Cap 63. Its role is to register engineers/firms, monitor conduct, and provide the SEAP framework. Registration is a legal requirement; practicing without it contravenes Tanzanian law."
    },
    {
      id: 2,
      cat: "ERB",
      swali_sw: "Ni mambo gani muhimu unayopaswa kuzingatia unapoandaa ripoti za SEAP za kila robo mwaka (Quarterly Reports)?",
      swali_en: "What are the key elements you should consider when preparing SEAP quarterly reports?",
      muongozo: "Sisitiza uzoefu wa vitendo (hands-on) na lessons learned.",
      jibu_en: "Reports must document technical activities in design, construction, or maintenance. Key elements include project descriptions, engineering problems encountered, methodologies used, and signatures from a registered Professional Engineer supervisor."
    },
    {
      id: 3,
      cat: "Ethics",
      swali_sw: "Unapokutana na mgongano wa kimaslahi (Conflict of Interest) katika mradi, Kanuni za Maadili za ERB zinakuelekeza kufanya nini?",
      swali_en: "When you encounter a conflict of interest in a project, what do the ERB Code of Ethics direct you to do?",
      muongozo: "Uadilifu na uwazi (disclosure) ndio nguzo kuu hapa.",
      jibu_en: "The engineer must disclose the situation fully and immediately to all affected parties. If the conflict compromises objective judgment, the engineer should recuse themselves from the decision-making process."
    },
    {
      id: 4,
      cat: "Procurement",
      swali_sw: "Je, unaelewa nini kuhusu mfumo mpya wa manunuzi wa NeST na umuhimu wake kwa wahandisi nchini Tanzania?",
      swali_en: "What do you understand about the new NeST procurement system and its importance for engineers in Tanzania?",
      muongozo: "NeST imechukua nafasi ya TANePS tangu Oktoba 2023.",
      jibu_en: "NeST (National e-Procurement System) is a mandatory digital platform for public procurement. It integrates ERB/TBS databases to verify bidders, promoting value for money and transparency in purchasing engineering spares and services."
    },
    {
      id: 5,
      cat: "Standards",
      swali_sw: "Eleza umuhimu wa kufuata viwango vya TBS katika uhandisi wa mitambo.",
      swali_en: "Explain the importance of adhering to TBS standards in mechanical engineering.",
      muongozo: "Hii inahakikisha usalama wa vipuri (spare parts) na mashine.",
      jibu_en: "TBS ensures reliability and safety. Adhering to TZS specifications prevents mechanical failures in components like automotive parts or industrial valves, protecting consumers and ensuring local products are competitive in the EAC market."
    },
    {
      id: 6,
      cat: "Safety",
      swali_sw: "Ni nini wajibu wa mhandisi kisheria pindi anapogundua kuwa usanifu wake unaweza kuhatarisha usalama wa umma?",
      swali_en: "What is the legal obligation of an engineer upon discovering that their design could endanger public safety?",
      muongozo: "Hili linahusu 'Paramountcy Clause' - usalama wa umma kwanza.",
      jibu_en: "The engineer is legally bound to notify the client/employer. If unaddressed, they must report to the ERB and relevant authorities. Failure to do so can lead to deregistration or criminal prosecution."
    },
    {
      id: 7,
      cat: "ERB",
      swali_sw: "Eleza tofauti kati ya Mhandisi wa Uhitimu (Graduate Engineer) na Mhandisi wa Kitaalamu (Professional Engineer) kulingana na ERB.",
      swali_en: "Explain the difference between a Graduate Engineer and a Professional Engineer according to the ERB.",
      muongozo: "Professional Engineer (PE) ana mamlaka ya kusaini michoro kisheria.",
      jibu_en: "A Graduate Engineer is a degree holder in training. A Professional Engineer has completed 3+ years of SEAP, passed the professional interview, and holds the legal authority to certify engineering designs."
    },
    {
      id: 8,
      cat: "Consultancy",
      swali_sw: "Ni nini umuhimu wa bima ya 'Professional Indemnity Insurance' kwa mhandisi anayefanya kazi za ushauri?",
      swali_en: "What is the importance of Professional Indemnity Insurance for a consulting engineer?",
      muongozo: "Hutoa ulinzi wa kifedha dhidi ya madai ya makosa ya usanifu.",
      jibu_en: "It provides financial protection against negligence or design error claims. Many infrastructure contracts require this to cover potential liabilities, safeguarding both the engineer's career and the client's investment."
    },
    {
      id: 9,
      cat: "Professionalism",
      swali_sw: "Unaelewa nini kuhusu dhana ya 'Continuing Professional Development' (CPD) na kwa nini ni sharti?",
      swali_en: "What do you understand by the concept of Continuing Professional Development (CPD) and why is it a requirement?",
      muongozo: "Ni lazima kukusanya CPD points kila mwaka ili kuhuisha usajili.",
      jibu_en: "CPD is the process of documenting skills and knowledge post-registration. ERB requires points annually to ensure engineers remain current with technology and safety standards."
    },
    {
      id: 10,
      cat: "OSHA",
      swali_sw: "Eleza jukumu la OSHA katika kukagua boilers na pressure vessels nchini Tanzania.",
      swali_en: "Explain the role of OSHA in inspecting boilers and pressure vessels in Tanzania.",
      muongozo: "Ukaguzi wa boilers hufanyika kila baada ya miaka miwili (external).",
      jibu_en: "Under the OSH Act of 2003, OSHA inspects pressure vessels. Mechanical engineers must ensure registration and compliance with standards like ASME to prevent catastrophic industrial accidents."
    },
    
    {
      id: 11,
      cat: "UTUMISHI",
      swali_sw: "Ni vigezo gani vinatumiwa na UTUMISHI (PSRS) katika kufanya usaili wa wahandisi wa mitambo?",
      swali_en: "What criteria are used by UTUMISHI (PSRS) in conducting interviews for mechanical engineers?",
      muongozo: "Technical competence na uelewa wa Public Service Standing Orders.",
      jibu_en: "PSRS focuses on merit: technical competency (written/oral), communication, and knowledge of Tanzania's national development goals."
    },
    {
      id: 12,
      cat: "Professionalism",
      swali_sw: "Ni nini umuhimu wa IET (Institution of Engineers Tanzania) kwa mhandisi mchanga?",
      swali_en: "What is the importance of IET for a young engineer?",
      muongozo: "IET ni chama cha hiari cha kitaalamu kwa ajili ya networking.",
      jibu_en: "IET serves as a professional home for networking, mentorship, and accessing technical seminars that count toward CPD points."
    },
    {
      id: 13,
      cat: "Policy",
      swali_sw: "Eleza dhana ya 'Local Content' na jinsi inavyowasaidia wahandisi wa Kitanzania kwenye miradi kama SGR.",
      swali_en: "Explain the concept of 'Local Content' and how it assists Tanzanian engineers in major projects like SGR.",
      muongozo: "Haki ya kutumika kwa wataalamu na vifaa vya ndani.",
      jibu_en: "Local Content mandates utilizing Tanzanian labor and services in major projects. In SGR, it ensures technology transfer, where local engineers work alongside international experts."
    },
    {
      id: 14,
      cat: "Ethics",
      swali_sw: "Ni hatua gani zinapaswa kuchukuliwa ikiwa mteja anakuomba utie saini mchoro ambao hukuusanifu au kuukagua?",
      swali_en: "What steps should be taken if a client asks you to sign a drawing that you did not design or review?",
      muongozo: "Ni kosa kubwa la kimaadili (deregistration risk).",
      jibu_en: "I would firmly decline. According to the ERB Code, an engineer must only sign documents prepared under their direct supervision to signify safety and functionality."
    },
    {
      id: 15,
      cat: "Regulatory",
      swali_sw: "Eleza jukumu la Mhandisi wa Mitambo katika Halmashauri za Wilaya nchini Tanzania.",
      swali_en: "Explain the role of a Mechanical Engineer in District Councils in Tanzania.",
      muongozo: "Usimamizi wa 'fleet' za magari na mitambo ya maji.",
      jibu_en: "They manage council mechanical assets, oversee procurement via NeST, supervise repairs, and ensure compliance with safety standards."
    },

    /* SECTION 2: THERMODYNAMICS AND ENERGY SYSTEMS (16-30) */
    {
      id: 16,
      cat: "Thermodynamics",
      swali_sw: "Eleza sheria ya kwanza ya Thermodynamics na jinsi inavyotumika kwenye turbine ya mvuke.",
      swali_en: "Explain the First Law of Thermodynamics and how it is used in a steam turbine.",
      muongozo: "Uhifadhi wa nishati: $W = h_{in} - h_{out}$.",
      jibu_en: "The First Law states energy is transformed, not destroyed. In a steam turbine, it determines work output by measuring enthalpy difference ($h_{in} - h_{out}$)."
    },
    {
      id: 17,
      cat: "Thermodynamics",
      swali_sw: "Entropy ni nini, na kwa nini ni muhimu katika kuchambua mizunguko ya nguvu (Power Cycles)?",
      swali_en: "What is Entropy, and why is it important in analyzing power cycles?",
      muongozo: "Entropy inapima 'disorder' na 'irreversibilities'.",
      jibu_en: "Entropy measures randomness. Tracking it helps identify irreversibilities (losses) in pumps and turbines, using isentropic processes as efficiency benchmarks."
    },
    {
      id: 18,
      cat: "Power Cycles",
      swali_sw: "Tofautisha kati ya mzunguko wa Otto na mzunguko wa Diesel. Ni upi wenye ufanisi zaidi?",
      swali_en: "Differentiate between the Otto cycle and the Diesel cycle. Which is more efficient?",
      muongozo: "Otto (constant volume heat addition) vs Diesel (constant pressure).",
      jibu_en: "For the same compression ratio, Otto is theoretically more efficient. However, Diesel engines are practically more efficient due to higher compression ratios without knocking."
    },
    
    {
      id: 19,
      cat: "Energy Systems",
      swali_sw: "Elezea kanuni ya 'Heat Exchanger' na utoe mifano miwili viwandani.",
      swali_en: "Explain the working principle of a 'Heat Exchanger' and give two industrial examples.",
      muongozo: "Uhamishaji wa joto bila majimaji kuchanganyika.",
      jibu_en: "It transfers heat between fluids via conduction/convection without mixing. Examples: car radiators and power plant condensers."
    },
    {
      id: 20,
      cat: "Thermodynamics",
      swali_sw: "Ni nini maana ya 'Specific Heat Capacity' na inaathiri vipi uchaguzi wa kipozeo?",
      swali_en: "What is 'Specific Heat Capacity' and how does it affect the choice of a coolant?",
      muongozo: "Maji yana specific heat kubwa, hivyo ni kipozeo kizuri.",
      jibu_en: "It is the energy required to raise $1\text{kg}$ of substance by $1^{\circ}\text{C}$. High specific heat coolants like water are preferred as they absorb more heat with minimal temperature rise."
    },
    {
      id: 21,
      cat: "Power Cycles",
      swali_sw: "Eleza mzunguko wa 'Rankine' na sehemu zake nne kuu.",
      swali_en: "Explain the 'Rankine' cycle and its four main components.",
      muongozo: "Mzunguko wa vituo vya kufua umeme kwa mvuke.",
      jibu_en: "It consists of: 1. Pump, 2. Boiler, 3. Turbine, and 4. Condenser. It is the standard cycle for steam power plants."
    },
    {
      id: 22,
      cat: "Fluid Mechanics",
      swali_sw: "'Cavitation' ni nini na inaathiri vipi pampu za maji?",
      swali_en: "What is 'Cavitation' and how does it affect water pumps?",
      muongozo: "Bubbles zinazopasuka (collapse) na kuharibu impeller.",
      jibu_en: "Cavitation occurs when local pressure drops below vapor pressure, forming bubbles that collapse violently, pitting the impeller and causing vibration."
    },
    {
      id: 23,
      cat: "Thermodynamics",
      swali_sw: "Tofautisha kati ya 'Conduction', 'Convection', na 'Radiation'.",
      swali_en: "Differentiate between 'Conduction', 'Convection', and 'Radiation'.",
      muongozo: "Conduction (direct contact), Convection (fluid movement), Radiation (waves).",
      jibu_en: "Conduction is heat transfer through solids. Convection is through fluids. Radiation is via electromagnetic waves (no medium required)."
    },
    {
      id: 24,
      cat: "Energy Systems",
      swali_sw: "Ni nini umuhimu wa 'Combined Cycle Gas Turbine' (CCGT) nchini Tanzania?",
      swali_en: "What is the importance of a 'Combined Cycle Gas Turbine' (CCGT) in Tanzania?",
      muongozo: "Inatumia joto la exhaust kuongeza ufanisi.",
      jibu_en: "CCGT plants use exhaust gas to heat a boiler for a second steam turbine, increasing efficiency from $35\%$ to over $55\%$."
    },
    {
      id: 25,
      cat: "HVAC",
      swali_sw: "Elezea dhana ya 'Psychrometry' na umuhimu wake katika HVAC.",
      swali_en: "Explain the concept of 'Psychrometry' and its importance in HVAC systems.",
      muongozo: "Inahusu mchanganyiko wa hewa na unyevu.",
      jibu_en: "Psychrometry studies moist air properties. In HVAC design for humid areas like Dar, it determines dehumidification needed for comfort."
    },
    {
      id: 26,
      cat: "Energy Systems",
      swali_sw: "Ni nini tofauti kati ya LHV na HHV ya mafuta?",
      swali_en: "What is the difference between Lower Heating Value (LHV) and Higher Heating Value (HHV)?",
      muongozo: "HHV inahusu nishati ikijumuisha condensation ya mvuke.",
      jibu_en: "HHV includes latent heat released from water vapor condensation. LHV assumes water stays vapor. LHV is usually used for engine efficiency calculations."
    },
    {
      id: 27,
      cat: "Fluid Mechanics",
      swali_sw: "Elezea kanuni ya 'Bernoulli’s Equation' na matumizi yake.",
      swali_en: "Explain the principle of 'Bernoulli’s Equation' and its use.",
      muongozo: "$P + 1/2 \rho v^2 + \rho gh = \text{constant}$.",
      jibu_en: "It states that for incompressible flow, the sum of pressure, kinetic, and potential energy is constant. Used in Venturi meters to calculate flow rate."
    },
    {
      id: 28,
      cat: "Energy Systems",
      swali_sw: "Ni nini kazi ya 'Superheater' katika boiler?",
      swali_en: "What is the function of a 'Superheater' in a boiler?",
      muongozo: "Inakausha mvuke kuzuia uharibifu wa turbine blades.",
      jibu_en: "It raises steam temperature above boiling point at constant pressure, preventing turbine blade erosion and increasing efficiency."
    },
    {
      id: 29,
      cat: "Thermodynamics",
      swali_sw: "Elezea sheria ya 'Zeroth' ya Thermodynamics.",
      swali_en: "Explain the 'Zeroth' Law of Thermodynamics.",
      muongozo: "Huu ndio msingi wa thermometer.",
      jibu_en: "If two systems are each in thermal equilibrium with a third, they are in equilibrium with each other. This defines temperature."
    },
    {
      id: 30,
      cat: "Thermodynamics",
      swali_sw: "'Adiabatic Process' ni nini, na inawezaje kutokea katika mashine halisi?",
      swali_en: "What is an 'Adiabatic Process', and how can it occur in a real machine?",
      muongozo: "$Q=0$ (No heat exchange).",
      jibu_en: "A process with no heat exchange ($Q=0$). High-speed machines approximate this when the process happens too fast for heat transfer."
    },

    /* SECTION 3: STRENGTH OF MATERIALS AND MACHINE DESIGN (31-45) */
    {
      id: 31,
      cat: "Design",
      swali_sw: "Tofautisha kati ya 'Normal Stress' na 'Shear Stress'.",
      swali_en: "Differentiate between 'Normal Stress' and 'Shear Stress'.",
      muongozo: "Normal (perpendicular) vs Shear (parallel).",
      jibu_en: "Normal stress acts perpendicular to the area (tension/compression). Shear stress acts parallel, tending to slide material parts."
    },
    {
      id: 32,
      cat: "Design",
      swali_sw: "'Factor of Safety' (FoS) ni nini na mhandisi anaichagua vipi?",
      swali_en: "What is 'Factor of Safety' (FoS) and how is it selected?",
      muongozo: "Ratio ya failure stress dhidi ya working stress.",
      jibu_en: "FoS = Failure Stress / Working Stress. High FoS (3-5) is used for high uncertainty or safety-critical applications."
    },
    {
      id: 33,
      cat: "Design",
      swali_sw: "Elezea uhusiano wa 'Torque', 'Power', na 'Angular Velocity'.",
      swali_en: "Explain the relationship between 'Torque', 'Power', and 'Angular Velocity'.",
      muongozo: "$P = T \omega$.",
      jibu_en: "Power is the product of Torque and Angular Velocity. In SI: $P = T \times \omega$. Gearboxes often trade speed for higher torque."
    },
    {
      id: 34,
      cat: "Machines",
      swali_sw: "Ni nini kazi ya 'Flywheel' na inatofautianaje na 'Governor'?",
      swali_en: "What is the function of a 'Flywheel' and how does it differ from a 'Governor'?",
      muongozo: "Flywheel (single cycle) vs Governor (mean speed).",
      jibu_en: "A flywheel stores energy to smooth speed within a cycle. A governor regulates mean speed by adjusting fuel based on load variations."
    },
    {
      id: 35,
      cat: "Design",
      swali_sw: "Fafanua 'Hooke’s Law' na mipaka yake.",
      swali_en: "Define 'Hooke’s Law' and its limits.",
      muongozo: "Stress is proportional to strain within the elastic limit.",
      jibu_en: "It states $\sigma = E\epsilon$ within the proportional limit. Beyond this, material undergoes plastic deformation."
    },
    {
      id: 36,
      cat: "Failure",
      swali_sw: "Tofautisha kati ya 'Fatigue' na 'Creep'.",
      swali_en: "Differentiate between 'Fatigue' and 'Creep'.",
      muongozo: "Fatigue (cyclic loads) vs Creep (high temp/time).",
      jibu_en: "Fatigue is failure under repeated cycles. Creep is permanent deformation under constant stress at high temperatures over time."
    },
    {
      id: 37,
      cat: "Design",
      swali_sw: "Sifa zipi ni muhimu unazozingatia unapochagua 'Bearing'?",
      swali_en: "What key properties should you consider when selecting a 'Bearing'?",
      muongozo: "Load rating, RPM limit, and lubrication.",
      jibu_en: "Factors include Dynamic Load Rating, max RPM, and lubrication type (oil/grease). High-speed shafts require precise heat dissipation."
    },
    {
      id: 38,
      cat: "Design",
      swali_sw: "Elezea 'Stress Concentration' na jinsi ya kuipunguza.",
      swali_en: "Explain 'Stress Concentration' and how to reduce it.",
      muongozo: "Occurs at holes and sharp corners.",
      jibu_en: "High local stress at abrupt cross-section changes. Reduced by using fillets (rounded corners) and gradual transitions."
    },
    {
      id: 39,
      cat: "Design",
      swali_sw: "Tofauti kati ya 'Moment of Inertia' na 'Polar Moment of Inertia'?",
      swali_en: "Difference between 'Moment of Inertia' and 'Polar Moment of Inertia'?",
      muongozo: "Resistance to bending vs resistance to twisting.",
      jibu_en: "Area Moment (I) measures bending resistance. Polar Moment (J) measures torsion/twisting resistance."
    },
    {
      id: 40,
      cat: "Automotive",
      swali_sw: "Ni nini kazi ya 'Differential' kwenye gari?",
      swali_en: "What is the function of a 'Differential' in a vehicle's drivetrain?",
      muongozo: "Allows wheels to rotate at different speeds during turns.",
      jibu_en: "A differential allows drive wheels to rotate at different speeds while turning, splitting torque between axles."
    },
    
    {
      id: 41,
      cat: "Design",
      swali_sw: "'Universal Joint' inatumika wapi na changamoto yake ni nini?",
      swali_en: "Where is a 'Universal Joint' used and what is its main challenge?",
      muongozo: "Used in propeller shafts for angled connections.",
      jibu_en: "Used to transmit power between angled shafts. Its challenge is fluctuating output speed, causing vibration unless used in pairs."
    },
    {
      id: 42,
      cat: "Design",
      swali_sw: "Elezea tofauti ya 'Rigid Coupling' na 'Flexible Coupling'.",
      swali_en: "Explain the difference between a 'Rigid' and 'Flexible' coupling.",
      muongozo: "Flexible allows for minor misalignment.",
      jibu_en: "Rigid requires perfect alignment. Flexible (e.g., gear/tire couplings) accommodates slight misalignments, protecting bearings."
    },
    {
      id: 43,
      cat: "Design",
      swali_sw: "'Interference Fit' ni nini na utaitumia wapi?",
      swali_en: "What is an 'Interference Fit' and where would you use it?",
      muongozo: "Press fit where shaft is larger than hole.",
      jibu_en: "Occurs when shaft diameter is larger than the hole. Used for permanent, high-torque connections like mounting bearings."
    },
    {
      id: 44,
      cat: "Maintenance",
      swali_sw: "'Keyway' ni nini na kwa nini ikaguliwe mara kwa mara?",
      swali_en: "What is a 'Keyway' and why should it be inspected regularly?",
      muongozo: "Slot for a key to lock shaft and hub.",
      jibu_en: "A slot accommodating a key for torque transmission. Regular inspection prevents wall wear or key shearing."
    },
    {
      id: 45,
      cat: "Design",
      swali_sw: "Elezea umuhimu wa 'Bending Moment Diagram' (BMD).",
      swali_en: "Explain the importance of a 'Bending Moment Diagram' (BMD) in beam design.",
      muongozo: "Identifies points of max bending stress.",
      jibu_en: "Graphically shows internal bending moments. Essential for identifying max moment to select safe beam profiles."
    },

    /* SECTION 4: MAINTENANCE AND TROUBLESHOOTING (46-60) */
    {
      id: 46,
      cat: "Maintenance",
      swali_sw: "Tofautisha kati ya 'Preventive Maintenance' na 'Breakdown Maintenance'.",
      swali_en: "Differentiate between 'Preventive' and 'Breakdown' maintenance.",
      muongozo: "Scheduled vs reactive actions.",
      jibu_en: "Preventive is scheduled to avoid failure. Breakdown is reactive (fixing after failure). Preventive is more cost-effective by reducing downtime."
    },
    {
      id: 47,
      cat: "Maintenance",
      swali_sw: "'Predictive Maintenance' (PdM) ni nini?",
      swali_en: "What is 'Predictive Maintenance' (PdM)?",
      muongozo: "Condition-based monitoring using data.",
      jibu_en: "PdM uses condition-monitoring tools (like vibration analysis) to predict when failure will occur and perform maintenance just in time."
    },
    
    {
      id: 48,
      cat: "Maintenance",
      swali_sw: "Ni nini maana ya 'Root Cause Analysis' (RCA)?",
      swali_en: "What is 'Root Cause Analysis' (RCA)?",
      muongozo: "Solving the primary cause, not just symptoms.",
      jibu_en: "RCA is a method used to identify the primary cause of a fault (e.g., using '5 Whys') to prevent the problem from recurring."
    },
    {
      id: 49,
      cat: "Maintenance",
      swali_sw: "Elezea dhana ya 'Total Productive Maintenance' (TPM).",
      swali_en: "Explain the concept of 'Total Productive Maintenance' (TPM).",
      muongozo: "Involves all employees in equipment care.",
      jibu_en: "A system aimed at zero breakdowns/accidents by involving all employees (including operators) in equipment maintenance."
    },
    {
      id: 50,
      cat: "Maintenance",
      swali_sw: "Ni nini umuhimu wa 'Lubrication Schedule'?",
      swali_en: "What is the importance of a 'Lubrication Schedule'?",
      muongozo: "Prevents friction and wear.",
      jibu_en: "Ensures machines are greased/oiled at correct intervals to prevent metal-to-metal contact, overheating, and premature wear."
    },
    {
      id: 51,
      cat: "Maintenance",
      swali_sw: "'MTBF' na 'MTTR' inamaanisha nini?",
      swali_en: "What do 'MTBF' and 'MTTR' mean?",
      muongozo: "Mean Time Between Failures vs Mean Time To Repair.",
      jibu_en: "MTBF measures reliability. MTTR measures how quickly repairs are made. Goal is high MTBF and low MTTR."
    },
    {
      id: 52,
      cat: "Maintenance",
      swali_sw: "Unawezaje kutambua 'Misalignment' ya shaft bila vifaa?",
      swali_en: "How can you identify shaft misalignment without tools?",
      muongozo: "Look for vibration, heat, and abnormal noise.",
      jibu_en: "Signs include excessive vibration, abnormal noise, hot bearings, and uneven wear on coupling components."
    },
    {
      id: 53,
      cat: "Maintenance",
      swali_sw: "Hatua za kubadilisha 'Mechanical Seal' ya pampu.",
      swali_en: "Steps to replace a pump 'Mechanical Seal'.",
      muongozo: "LOTO, dismantle, clean, install, test.",
      jibu_en: "1. Lockout/Tagout. 2. Dismantle casing. 3. Remove old seal. 4. Clean shaft. 5. Install new seal carefully. 6. Reassemble and test."
    },
    {
      id: 54,
      cat: "Troubleshooting",
      swali_sw: "Pampu ikipiga kelele kama 'gravel', shida ni nini?",
      swali_en: "If a pump sounds like 'gravel', what is the issue?",
      muongozo: "Classical sign of cavitation.",
      jibu_en: "This is cavitation, caused by low suction pressure creating bubbles that collapse violently inside the impeller."
    },
    {
      id: 55,
      cat: "Maintenance",
      swali_sw: "Kazi ya 'Gasket' ni nini na kwanini hairuhusiwi mara mbili?",
      swali_en: "What is the function of a gasket and why shouldn't it be reused?",
      muongozo: "Ensures leak-proof seal. Loses elasticity after use.",
      jibu_en: "Gaskets seal flanges. They are compressed during installation; once removed, they lose their ability to seal perfectly again."
    },
    {
      id: 56,
      cat: "Materials",
      swali_sw: "Tofautisha kati ya 'Ductility' na 'Brittleness'.",
      swali_en: "Differentiate between 'Ductility' and 'Brittleness'.",
      muongozo: "Ductile (deforms) vs Brittle (fractures without deformation).",
      jibu_en: "Ductility allows material to stretch under tension (like copper). Brittleness causes fracture without warning (like cast iron)."
    },
    {
      id: 57,
      cat: "Materials",
      swali_sw: "'Annealing' ni nini na kwa nini inafanyika?",
      swali_en: "What is 'Annealing' and why is it performed?",
      muongozo: "Heat treatment to soften material.",
      jibu_en: "Involves heating and slow cooling to soften metal, relieve internal stresses, and improve machinability."
    },
    {
      id: 58,
      cat: "Manufacturing",
      swali_sw: "Tofauti kati ya 'Forging' na 'Casting'.",
      swali_en: "Difference between 'Forging' and 'Casting'.",
      muongozo: "Forging (compressive force) vs Casting (pouring molten metal).",
      jibu_en: "Casting pours molten metal into molds. Forging shapes metal using compressive force. Forged parts are usually stronger."
    },
    {
      id: 59,
      cat: "Manufacturing",
      swali_sw: "Elezea 'Injection Moulding'.",
      swali_en: "Explain 'Injection Moulding'.",
      muongozo: "Used for mass production of plastic parts.",
      jibu_en: "Melting plastic granules and injecting them under high pressure into mold cavities to create specific shapes."
    },
    {
      id: 60,
      cat: "Materials",
      swali_sw: "Kwanini 'Stainless Steel' haipati kutu (corrosion)?",
      swali_en: "Why doesn't stainless steel corrode?",
      muongozo: "Presence of Chromium.",
      jibu_en: "Contains Chromium ($>10.5\%$), which forms a protective chromium oxide layer that prevents oxygen from reaching the steel."
    },

    /* SECTION 5: HYDRAULICS, PNEUMATICS AND MISC (61-100) */
    {
      id: 61,
      cat: "Manufacturing",
      swali_sw: "Dhana ya 'CNC Machining' ni nini?",
      swali_en: "What is the concept of 'CNC Machining'?",
      muongozo: "Computer Numerical Control.",
      jibu_en: "Automated control of machining tools via computer software for high precision and repeatability."
    },
    {
      id: 62,
      cat: "Welding",
      swali_sw: "Tofautisha 'MIG' na 'TIG' welding.",
      swali_en: "Differentiate between 'MIG' and 'TIG' welding.",
      muongozo: "Consumable wire vs non-consumable tungsten.",
      jibu_en: "MIG is faster and uses consumable wire. TIG uses a tungsten electrode and offers higher precision for thin materials."
    },
    
    {
      id: 63,
      cat: "Materials",
      swali_sw: "Nini maana ya 'Hardness' na 'Toughness'?",
      swali_en: "What is 'Hardness' and 'Toughness'?",
      muongozo: "Resistance to indentation vs energy absorption.",
      jibu_en: "Hardness resists surface scratching. Toughness is the ability to absorb impact energy without fracturing."
    },
    {
      id: 64,
      cat: "Manufacturing",
      swali_sw: "'Tolerance' na 'Allowance' ni nini?",
      swali_en: "What are 'Tolerance' and 'Allowance'?",
      muongozo: "Deviation limit vs intentional difference for fit.",
      jibu_en: "Tolerance is allowable deviation. Allowance is the intentional difference between mating parts for a specific fit."
    },
    {
      id: 65,
      cat: "Materials",
      swali_sw: "'Fatigue Limit' ni nini?",
      swali_en: "What is 'Fatigue Limit'?",
      muongozo: "Stress below which failure never occurs.",
      jibu_en: "The max stress level below which a material can withstand infinite loading cycles without failure."
    },
    {
      id: 66,
      cat: "Hydraulics",
      swali_sw: "Sheria ya 'Pascal' katika hydraulic jack.",
      swali_en: "Pascal's Law in hydraulic jacks.",
      muongozo: "Pressure is transmitted undiminished.",
      jibu_en: "Applied pressure to enclosed fluid is transmitted equally everywhere. Small force on small piston = large force on large piston."
    },
    {
      id: 67,
      cat: "Pneumatics",
      swali_sw: "Hydraulic vs Pneumatic systems.",
      swali_en: "Hydraulic vs Pneumatic systems.",
      muongozo: "Liquid vs Gas.",
      jibu_en: "Hydraulics use oil (incompressible) for high force. Pneumatics use air (compressible) for faster, cleaner tasks."
    },
    {
      id: 68,
      cat: "Hydraulics",
      swali_sw: "Kazi ya 'Accumulator' ni nini?",
      swali_en: "Function of an 'Accumulator'?",
      muongozo: "Stores hydraulic energy under pressure.",
      jibu_en: "Stores hydraulic energy via compressed gas, acting as a buffer for peak demand or emergency power."
    },
    {
      id: 69,
      cat: "Pneumatics",
      swali_sw: "Kwanini unyevu ni hatari kwenye mifumo ya hewa?",
      swali_en: "Why is moisture dangerous in air systems?",
      muongozo: "Corrosion and valve damage.",
      jibu_en: "Causes internal pipe corrosion and damages pneumatic actuators/valves."
    },
    {
      id: 70,
      cat: "HVAC",
      swali_sw: "Elezea mzunguko wa 'Vapour Compression'.",
      swali_en: "Explain the 'Vapour Compression' cycle.",
      muongozo: "Compressor, Condenser, Expansion, Evaporator.",
      jibu_en: "Four stages: Compression, Condensation (heat rejection), Expansion (pressure drop), and Evaporation (heat absorption)."
    },
    
    {
      id: 71,
      cat: "Fluid",
      swali_sw: "'Viscosity' ni nini?",
      swali_en: "What is 'Viscosity'?",
      muongozo: "Fluid's resistance to flow.",
      jibu_en: "A measure of a fluid's internal resistance to flow; high viscosity = thick (honey)."
    },
    {
      id: 72,
      cat: "Pumps",
      swali_sw: "'Priming' ya pampu ni nini?",
      swali_en: "What is pump 'Priming'?",
      muongozo: "Removing air from casing/suction.",
      jibu_en: "Filling the pump with liquid to remove air; centrifugal pumps lose suction if air is present."
    },
    {
      id: 73,
      cat: "Hydraulics",
      swali_sw: "Kazi ya 'Relief Valve' ni nini?",
      swali_en: "Function of a 'Relief Valve'?",
      muongozo: "Protects against over-pressure.",
      jibu_en: "Automatically opens at set pressure to divert fluid and prevent system burst/damage."
    },
    {
      id: 74,
      cat: "Fluid",
      swali_sw: "'Reynolds Number' ni nini?",
      swali_en: "What is 'Reynolds Number'?",
      muongozo: "Predicts Laminar vs Turbulent flow.",
      jibu_en: "Dimensionless number used to identify flow regimes: <2000 is laminar; >4000 is turbulent."
    },
    {
      id: 75,
      cat: "HVAC",
      swali_sw: "Sifa ya muhimu ya 'Refrigerant'.",
      swali_en: "Key property of a 'Refrigerant'.",
      muongozo: "Low boiling point.",
      jibu_en: "Must have low boiling point and high latent heat of vaporization for effective cooling."
    },
    {
      id: 76,
      cat: "Production",
      swali_sw: "Dhana ya 'Just-In-Time' (JIT).",
      swali_en: "Just-In-Time (JIT) concept.",
      muongozo: "Producing only what is needed when needed.",
      jibu_en: "Methodology aimed at reducing inventory by producing exactly what is required at that moment."
    },
    {
      id: 77,
      cat: "Safety",
      swali_sw: "Hatua za 'Fire Safety' workshop.",
      swali_en: "Workshop 'Fire Safety' measures.",
      muongozo: "Extinguishers and waste management.",
      jibu_en: "Correct class extinguishers (B/C for oil), clear exits, and proper storage of flammable materials."
    },
    {
      id: 78,
      cat: "Management",
      swali_sw: "'Six Sigma' ni nini?",
      swali_en: "What is 'Six Sigma'?",
      muongozo: "Defect reduction strategy.",
      jibu_en: "Data-driven approach to eliminate defects, aiming for 99.99966% defect-free products."
    },
    {
      id: 79,
      cat: "Production",
      swali_sw: "'Lean Manufacturing' focus.",
      swali_en: "'Lean Manufacturing' focus.",
      muongozo: "Waste minimization.",
      jibu_en: "Focuses on minimizing waste within manufacturing systems while maximizing productivity."
    },
    {
      id: 80,
      cat: "Automotive",
      swali_sw: "Kazi ya 'Turbocharger'.",
      swali_en: "Function of a 'Turbocharger'.",
      muongozo: "Boosts air into engine.",
      jibu_en: "Uses exhaust gas to drive a turbine that forces more air into cylinders, increasing power."
    },
    {
      id: 81,
      cat: "Drawing",
      swali_sw: "First vs Third angle projection.",
      swali_en: "First vs Third angle projection.",
      muongozo: "Object placement vs plane.",
      jibu_en: "In 1st angle, object is between observer/plane. In 3rd, plane is between observer/object. 1st is common in TZ/Europe."
    },
    {
      id: 82,
      cat: "Mechanisms",
      swali_sw: "Kazi ya 'Governor' kwenye engine.",
      swali_en: "Engine 'Governor' function.",
      muongozo: "Speed regulation.",
      jibu_en: "Maintains constant mean speed regardless of load by controlling fuel supply."
    },
    {
      id: 83,
      cat: "Thermo",
      swali_sw: "'Regeneration' in gas turbines.",
      swali_en: "'Regeneration' in gas turbines.",
      muongozo: "Pre-heating compressed air.",
      jibu_en: "Uses exhaust heat to pre-heat air entering combustion chamber to improve efficiency."
    },
    {
      id: 84,
      cat: "Instruments",
      swali_sw: "'Bourdon Gauge' measures what?",
      swali_en: "'Bourdon Gauge' measures what?",
      muongozo: "Pressure measurement.",
      jibu_en: "Mechanical instrument used to measure pressure of steam, water, or air."
    },
    {
      id: 85,
      cat: "Welding",
      swali_sw: "Hatari ya 'Arc Welding'.",
      swali_en: "'Arc Welding' danger.",
      muongozo: "UV radiation.",
      jibu_en: "UV radiation causing 'arc eye' and toxic fumes inhalation."
    },
    {
      id: 86,
      cat: "Materials",
      swali_sw: "'Composite Materials' ni nini?",
      swali_en: "What are 'Composite Materials'?",
      muongozo: "Combination of different constituent materials.",
      jibu_en: "Materials made from two+ constituents with different properties (e.g., carbon fiber)."
    },
    {
      id: 87,
      cat: "Drawing",
      swali_sw: "Nini maana ya GD&T?",
      swali_en: "What is GD&T?",
      muongozo: "Geometric Dimensioning and Tolerancing.",
      jibu_en: "System for communicating tolerances via symbols on engineering drawings."
    },
    {
      id: 88,
      cat: "Energy",
      swali_sw: "Impulse vs Reaction Turbine.",
      swali_en: "Impulse vs Reaction Turbine.",
      muongozo: "Pressure drop location.",
      jibu_en: "Impulse: pressure drop only in nozzles. Reaction: pressure drop occurs across blades."
    },
    {
      id: 89,
      cat: "Maintenance",
      swali_sw: "'Condition Monitoring'.",
      swali_en: "'Condition Monitoring'.",
      muongozo: "Monitoring parameters while running.",
      jibu_en: "Monitoring machine parameters (temp/vibration) to identify developing faults."
    },
    {
      id: 90,
      cat: "Management",
      swali_sw: "'Kaizen' philosophy.",
      swali_en: "'Kaizen' philosophy.",
      muongozo: "Continuous improvement.",
      jibu_en: "Japanese philosophy of continuous, daily improvement in working practices."
    },
    {
      id: 91,
      cat: "Manufacturing",
      swali_sw: "Jig vs Fixture.",
      swali_en: "Jig vs Fixture.",
      muongozo: "Tool guide vs workpiece holder.",
      jibu_en: "Jig guides the tool; Fixture only holds the workpiece in position."
    },
    {
      id: 92,
      cat: "Hydraulics",
      swali_sw: "'Hydraulic Ram'.",
      swali_en: "'Hydraulic Ram'.",
      muongozo: "Water hammer effect pump.",
      jibu_en: "Pump using water hammer from falling source to lift water without electricity."
    },
    {
      id: 93,
      cat: "Safety",
      swali_sw: "'Confined Space' considerations.",
      swali_en: "'Confined Space' considerations.",
      muongozo: "Oxygen and toxic gases.",
      jibu_en: "Check oxygen levels, ensure ventilation, and have standby personnel before entry."
    },
    {
      id: 94,
      cat: "HVAC",
      swali_sw: "'COP' definition.",
      swali_en: "'COP' definition.",
      muongozo: "Coefficient of Performance.",
      jibu_en: "Ratio of cooling/heating provided to work required; higher COP = higher efficiency."
    },
    {
      id: 95,
      cat: "Ethics",
      swali_sw: "Falsifying quality tests.",
      swali_en: "Falsifying quality tests.",
      muongozo: "Ethical obligation.",
      jibu_en: "Reporting it is mandatory; falsification violates ERB code and endangers lives."
    },
    {
      id: 96,
      cat: "Management",
      swali_sw: "'5S' methodology.",
      swali_en: "'5S' methodology.",
      muongozo: "Workplace organization.",
      jibu_en: "Sort, Set in order, Shine, Standardize, Sustain for efficiency and safety."
    },
    {
      id: 97,
      cat: "Welding",
      swali_sw: "Pre-heating steel.",
      swali_en: "Pre-heating steel.",
      muongozo: "Prevents cracking.",
      jibu_en: "Slows cooling rate to prevent brittle phase formation and hydrogen cracking."
    },
    {
      id: 98,
      cat: "Manufacturing",
      swali_sw: "Benefits of 'Robotics'.",
      swali_en: "Benefits of 'Robotics'.",
      muongozo: "Speed and precision.",
      jibu_en: "High speed, precision, and ability to work in hazardous environments."
    },
    {
      id: 99,
      cat: "Career",
      swali_sw: "Top TZ project.",
      swali_en: "Top TZ project.",
      muongozo: "JNHPP or SGR.",
      jibu_en: "JNHPP, specifically interest in 235MW Francis turbine integration."
    },
    {
      id: 100,
      cat: "Career",
      swali_sw: "5-year goal.",
      swali_en: "5-year goal.",
      muongozo: "ERB Registration.",
      jibu_en: "To be a Registered Professional Engineer (PE) leading major industrial projects."
    }
  ]
};

export default mechanicalData;