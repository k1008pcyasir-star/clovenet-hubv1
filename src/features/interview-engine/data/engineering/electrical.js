const electricalData = {
  id: "electrical-engineering",
  title: "Electrical Engineering: Master Interview FAQ",
  description:
    "Strategic Evaluation: 100 Essential Questions for Electrical Engineers. Inajumuisha misingi ya nadharia, ulinzi wa mifumo (Protection), miradi ya REA, SGR, JNHPP, na kanuni za ERB/EWURA nchini Tanzania.",

  etiquette: [
    {
      title: "Safety Standards",
      content:
        "Daima tanguliza taratibu za usalama (LOTO, Arc Flash protection) na uzingatiaji wa kanuni za IEEE/IEC unapotekeleza au kuelezea miradi ya umeme."
    },
    {
      title: "Grid Compliance",
      content:
        "Hakikisha majibu yako yanazingatia 'Tanzania Grid Code' na viwango vya TANESCO, hasa katika masuala ya Frequency (50Hz) na Voltage regulation."
    },
    {
      title: "Renewable Integration",
      content:
        "Onyesha uelewa wa hali ya sasa ya nishati Tanzania, ikiwemo mwingiliano wa maji (Hydro), jua (Solar), na gesi asilia katika gridi ya taifa."
    }
  ],

  questions: [
    /* SECTION 1: BASIC LAWS & PRINCIPLES (1-15) */
    {
      id: 1,
      cat: "Foundations",
      swali_sw: "Elezea Sheria ya Ohm na jinsi inavyotumika katika kuamua ukubwa wa nyaya (cable sizing).",
      swali_en: "Explain Ohm’s Law and how it is applied in cable sizing.",
      muongozo: "Unganisha $V=IR$ na dhana ya 'Voltage Drop' katika gridi ya taifa.",
      jibu_en: "Ohm’s Law ($V=IR$) is fundamental in cable sizing to calculate voltage drop ($V_{drop} = I \times R$). If the resistance is too high for a given current, the voltage at the load will drop below acceptable limits ($\pm 5\%$ per TZ standards), necessitating a larger cross-sectional area to ensure efficiency."
    },
    {
      id: 2,
      cat: "Power Systems",
      swali_sw: "Kuna tofauti gani kati ya 'Active Power', 'Reactive Power', na 'Apparent Power' katika gridi ya TANESCO?",
      swali_en: "What is the difference between Active, Reactive, and Apparent Power in the TANESCO grid?",
      muongozo: "Elezea umuhimu wa Power Factor na faini za TANESCO kwa viwanda.",
      jibu_en: "Active Power ($P$, Watts) performs real work. Reactive Power ($Q$, VAR) maintains magnetic fields in motors/transformers. Apparent Power ($S$, VA) is the vector sum ($S = \sqrt{P^2 + Q^2}$). Managing $Q$ is vital for voltage stability and reducing technical losses in the transmission network."
    },
    
    {
      id: 3,
      cat: "Power Systems",
      swali_sw: "Elezea maana ya 'Power Factor' na njia tatu za kuiboresha katika kiwanda.",
      swali_en: "Define Power Factor and mention three ways to improve it in a factory.",
      muongozo: "PF ni uwiano wa $P/S$. Taja capacitor banks na synchronous motors.",
      jibu_en: "Power Factor is the ratio of real power to apparent power. It can be improved by: 1. Installing static capacitor banks. 2. Using synchronous condensers. 3. Using phase advancers for induction motors to reduce reactive current draw."
    },
    {
      id: 4,
      cat: "Grid Standards",
      swali_sw: "Kwa nini umeme nchini Tanzania unasafirishwa kwa masafa (frequency) ya 50Hz badala ya 60Hz?",
      swali_en: "Why is electricity in Tanzania transmitted at a frequency of 50Hz instead of 60Hz?",
      muongozo: "Tanzania inafuata viwango vya IEC (International Electrotechnical Commission).",
      jibu_en: "Tanzania adopts the 50Hz standard as part of the IEC guidelines followed by East African and European countries. This synchronization is essential for grid stability within the East African Power Pool."
    },
    {
      id: 5,
      cat: "Analysis",
      swali_sw: "Kirchhoff’s Voltage Law (KVL) inatusaidia nini katika uchambuzi wa gridi?",
      swali_en: "How does Kirchhoff’s Voltage Law (KVL) assist in grid analysis?",
      muongozo: "KVL inahusu uhifadhi wa nishati kwenye loops za gridi.",
      jibu_en: "KVL states the algebraic sum of voltages around a closed loop is zero. In grid analysis, we use it for node and loop studies to ensure substations receive rated voltage despite load variations."
    },
    {
      id: 6,
      cat: "Distribution",
      swali_sw: "Elezea tofauti kati ya 'Star' na 'Delta' connection na ni ipi inatumika kwenye usambazaji wa mwisho?",
      swali_en: "Explain the difference between Star and Delta connections and which one is used in final distribution?",
      muongozo: "Star inatoa Neutral kwa ajili ya wateja wa nyumbani ($230\text{V}$).",
      jibu_en: "Delta is a closed loop with no neutral; Star (Wye) has a common neutral point. For final distribution, Star is used at the secondary of distribution transformers to provide $400\text{V}$ (phase-to-phase) and $230\text{V}$ (phase-to-neutral)."
    },
    {
      id: 7,
      cat: "Transmission",
      swali_sw: "'Skin Effect' ni nini na inaathiri vipi uchaguzi wa kondakta za ACSR?",
      swali_en: "What is 'Skin Effect' and how does it affect the choice of ACSR conductors?",
      muongozo: "ACSR hutumia Aluminum nje ambako mkondo ni mwingi (skin).",
      jibu_en: "Skin effect is the tendency of AC to flow near the conductor's surface, increasing effective resistance. ACSR use aluminum strands on the outside for current flow and a steel core for mechanical strength, optimizing cost for long-distance lines."
    },
    {
      id: 8,
      cat: "Transformers",
      swali_sw: "Elezea kanuni ya 'Mutual Induction' na jinsi inavyowezesha kazi ya transfoma.",
      swali_en: "Explain the principle of Mutual Induction and how it enables transformer operation.",
      muongozo: "Badiliko la magnetic flux linazalisha EMF upande wa pili.",
      jibu_en: "Mutual induction occurs when a changing current in the primary winding creates varying magnetic flux in the core, inducing an EMF in the secondary. This allows stepping voltage up or down based on the turns ratio ($N_s/N_p$)."
    },
    
    {
      id: 9,
      cat: "Transformers",
      swali_sw: "Ni nini tofauti kati ya 'Ideal Transformer' na transfoma halisi inayotumika TANESCO?",
      swali_en: "What is the difference between an Ideal Transformer and a practical transformer used by TANESCO?",
      muongozo: "Sisitiza upotevu (losses) kama Copper na Iron losses.",
      jibu_en: "An ideal transformer has zero losses. Practical TANESCO transformers have: 1. Core losses (Hysteresis/Eddy current). 2. Copper losses ($I^2R$). 3. Flux leakage. They require cooling (ONAN/ONAF) and achieve $>95\%$ efficiency."
    },
    {
      id: 10,
      cat: "REA",
      swali_sw: "Elezea maana ya 'Voltage Regulation' na kwa nini ni muhimu kwa wateja wa REA.",
      swali_en: "Explain Voltage Regulation and why it is critical for REA customers.",
      muongozo: "Nyaya ndefu vijijini husababisha 'Voltage Drop' kubwa.",
      jibu_en: "Voltage regulation measures the change in voltage from no-load to full-load. For REA customers on long $33\text{kV}$ lines, poor regulation damages appliances. Engineers must use tap changers or capacitors to keep it within $\pm 5\%$."
    },
    {
      id: 11,
      cat: "Transmission",
      swali_sw: "Ni mambo gani yanayoamua 'Inductance' ya njia ya usafirishaji umeme (Transmission Line)?",
      swali_en: "What factors determine the Inductance of a transmission line?",
      muongozo: "GMD (Geometric Mean Distance) na GMR (Radius).",
      jibu_en: "Inductance depends on conductor geometry: GMD (distance between phases) and GMR (radius). Bundled conductors help reduce inductance and corona loss in high-voltage lines."
    },
    {
      id: 12,
      cat: "Foundations",
      swali_sw: "Elezea Sheria ya Faraday ya 'Electromagnetic Induction'.",
      swali_en: "Explain Faraday’s Law of Electromagnetic Induction.",
      muongozo: "Induced EMF $e = -N \frac{d\phi}{dt}$.",
      jibu_en: "Faraday’s Law states that the induced EMF is proportional to the rate of change of magnetic flux linkage. The negative sign (Lenz's Law) indicates that the EMF opposes the change that created it."
    },
    {
      id: 13,
      cat: "Power Quality",
      swali_sw: "'Harmonics' ni nini na zinasababishwa na nini katika mifumo ya kisasa?",
      swali_en: "What are Harmonics and what causes them in modern systems?",
      muongozo: "Huwepo kutokana na 'Non-linear loads' kama VFDs na UPS.",
      jibu_en: "Harmonics are integer multiples of the fundamental frequency ($50\text{Hz}$), caused by non-linear loads like VFDs and LED lighting. They cause overheating in transformers, requiring harmonic filters."
    },
    {
      id: 14,
      cat: "Distribution",
      swali_sw: "Elezea umuhimu wa 'Capacitance' katika nyaya za chini ya ardhi (Underground Cables).",
      swali_en: "Explain the importance of Capacitance in underground cables.",
      muongozo: "Hutoa 'Charging Current' hata bila mzigo (Ferranti effect).",
      jibu_en: "Underground cables have high capacitance due to the close proximity of conductors to the grounded sheath. This creates a significant charging current, which engineers must manage to prevent overvoltage during light loads."
    },
    {
      id: 15,
      cat: "Foundations",
      swali_sw: "Tofautisha kati ya 'EMF' (Electromotive Force) na 'Potential Difference'.",
      swali_en: "Differentiate between EMF (Electromotive Force) and Potential Difference.",
      muongozo: "EMF ni chanzo (source); PD ni voltage kwenye mzigo (load).",
      jibu_en: "EMF is the maximum potential difference of a source when no current flows. Potential Difference is the voltage measured across a load in a circuit, usually less than EMF due to internal resistance ($V = E - Ir$)."
    },

    /* SECTION 2: ELECTRICAL MACHINES (16-30) */
    {
      id: 16,
      cat: "Maintenance",
      swali_sw: "Elezea hatua za 'Maintenance' kwa transfoma ya usambazaji (Distribution Transformer).",
      swali_en: "Describe the maintenance steps for a distribution transformer.",
      muongozo: "Sisitiza Silica Gel, mafuta (BDV test), na Megger test.",
      jibu_en: "Maintenance includes: 1. Visual checks for leaks. 2. Inspecting Silica Gel (pink means wet). 3. BDV testing of oil. 4. Cleaning bushings. 5. Megger testing for insulation resistance between windings and earth."
    },
    {
      id: 17,
      cat: "Motors",
      swali_sw: "Kwa nini 'Three-Phase Induction Motor' haiwezi kuanza yenyewe (self-start) ikiwa ina awamu moja pekee?",
      swali_en: "Why can’t a three-phase induction motor self-start if it has only one phase?",
      muongozo: "Inahitaji 'Rotating Magnetic Field' (RMF).",
      jibu_en: "A 3-phase motor needs a rotating magnetic field to produce torque. A single-phase supply creates only a pulsating field. Without phase displacement, the net torque at standstill is zero."
    },
    {
      id: 18,
      cat: "Calculations",
      swali_sw: "'Synchronous Speed' ya motor yenye fito (poles) 4 katika frequency ya 50Hz ni kiasi gani?",
      swali_en: "What is the synchronous speed of a 4-pole motor at a frequency of 50Hz?",
      muongozo: "Tumia formula $N_s = 120f/P$.",
      jibu_en: "Using $N_s = (120 \times 50) / 4 = 1500\text{ RPM}$. The actual rotor speed will be slightly lower due to slip."
    },
    {
      id: 19,
      cat: "Generators",
      swali_sw: "Elezea kazi ya 'Commutator' katika DC Generator.",
      swali_en: "Explain the function of a Commutator in a DC Generator.",
      muongozo: "Inafanya kazi kama 'Mechanical Rectifier'.",
      jibu_en: "The commutator reverses the coil connections to the external circuit as the rotor turns, converting the internal AC into a unidirectional DC output via the brushes."
    },
    {
      id: 20,
      cat: "Motors",
      swali_sw: "'Back EMF' katika motor ya DC ina umuhimu gani?",
      swali_en: "What is the significance of Back EMF in a DC motor?",
      muongozo: "Hufanya motor iwe 'self-regulating'.",
      jibu_en: "Back EMF ($E_b$) opposes the supply voltage. As speed increases, $E_b$ increases, reducing armature current ($I_a$). This prevents excessive current draw under normal running conditions."
    },
    {
      id: 21,
      cat: "Transformers",
      swali_sw: "Ni upotevu upi wa nishati unaitwa 'Constant Loss' katika transfoma na kwa nini?",
      swali_en: "Which energy loss is called 'Constant Loss' in a transformer and why?",
      muongozo: "Iron loss (Core loss) haitegemei mzigo (load).",
      jibu_en: "Iron loss (Hysteresis and Eddy current) is constant because it depends on supply voltage and frequency, which are stable regardless of the connected load."
    },
    {
      id: 22,
      cat: "Motors",
      swali_sw: "Elezea mbinu ya 'Star-Delta Starter' na kwa nini ni muhimu kuitumia?",
      swali_en: "Explain the Star-Delta Starter method and why its use is important.",
      muongozo: "Hupunguza 'Inrush Current' wakati wa kuwasha motor kubwa.",
      jibu_en: "It starts the motor in 'Star' to reduce phase voltage to $58\%$, limiting starting current and torque. It then switches to 'Delta' for full power once speed reaches $80\%$, protecting the grid from voltage dips."
    },
    
    {
      id: 23,
      cat: "Generators",
      swali_sw: "'Alternator' inafanyaje kazi na inatofautiana vipi na motor ya induction?",
      swali_en: "How does an Alternator work and how does it differ from an induction motor?",
      muongozo: "Alternator inahitaji 'DC excitation' kwenye rotor.",
      jibu_en: "An alternator rotates a magnetic field inside a stationary armature to generate AC. Unlike induction motors, it must run at synchronous speed and requires an external DC exciter and prime mover."
    },
    {
      id: 24,
      cat: "Transformers",
      swali_sw: "Elezea maana ya 'Transformer Efficiency' na ni lini inakuwa kubwa zaidi?",
      swali_en: "Explain Transformer Efficiency and when does it reach its maximum?",
      muongozo: "Inatokea pale Copper Loss = Iron Loss.",
      jibu_en: "Efficiency is the output/input power ratio. It peaks when variable Copper losses equal constant Iron losses, typically designed for $50\%-70\%$ of rated load."
    },
    {
      id: 25,
      cat: "Machines",
      swali_sw: "'Hysteresis Loss' inasababishwa na nini katika mashine za umeme?",
      swali_en: "What causes Hysteresis Loss in electrical machines?",
      muongozo: "Inahusu msuguano wa 'magnetic domains' kwenye core.",
      jibu_en: "It's caused by friction between magnetic domains as they re-orient in an alternating field. It's reduced by using high-grade silicon steel with a narrow hysteresis loop."
    },
    {
      id: 26,
      cat: "Transformers",
      swali_sw: "Kwa nini tunatumia 'Oil' kwenye transfoma kubwa za TANESCO?",
      swali_en: "Why do we use oil in large TANESCO transformers?",
      muongozo: "Inatumika kama 'Insulator' na 'Coolant'.",
      jibu_en: "Oil provides electrical insulation between windings and the tank, and serves as a coolant to transfer heat to radiators via convection or pumps."
    },
    {
      id: 27,
      cat: "Transformers",
      swali_sw: "Elezea maana ya 'Percentage Impedance' ($\%Z$) ya transfoma.",
      swali_en: "Explain the meaning of 'Percentage Impedance' ($\%Z$) of a transformer.",
      muongozo: "Huamua kiwango cha 'Fault Current' (Short Circuit).",
      jibu_en: "It is the voltage drop at full load due to internal resistance/reactance, expressed as $\%$ of rated voltage. It is vital for calculating short-circuit currents for protection sizing."
    },
    {
      id: 28,
      cat: "Motors",
      swali_sw: "'Stepper Motor' inatumika kwa ajili gani na ina upekee gani?",
      swali_en: "What is a Stepper Motor used for and what is its uniqueness?",
      muongozo: "Inazunguka kwa 'steps' na haihitaji 'feedback sensor' kwa nafasi.",
      jibu_en: "It is a brushless DC motor that divides rotation into equal steps. It allows precise open-loop positioning, ideal for CNC, 3D printers, and robotics."
    },
    {
      id: 29,
      cat: "Troubleshooting",
      swali_sw: "Unafanya nini ikiwa joto la mafuta ya transfoma limezidi kiwango (overheating)?",
      swali_en: "What do you do if the transformer oil temperature exceeds the limit?",
      muongozo: "Kagua mzigo (load shedding), feni, na fanya DGA test.",
      jibu_en: "I'd check for overload and shed load if needed, inspect cooling fans/pumps, and perform a Dissolved Gas Analysis (DGA) to check for internal faults."
    },
    {
      id: 30,
      cat: "Machines",
      swali_sw: "'Torque' ni nini na uhusiano wake na 'Power' katika motor ni upi?",
      swali_en: "What is Torque and what is its relationship with Power in a motor?",
      muongozo: "Torque ni 'rotational force'. Fomula: $P = \omega T$.",
      jibu_en: "Torque is the rotational force ($Nm$). Power ($P$) is related by $P = 2\pi NT/60$. For a fixed power, higher torque results in lower speed."
    },

    /* SECTION 3: POWER SYSTEMS (31-40) */
    {
      id: 31,
      cat: "Switchgear",
      swali_sw: "Tofautisha kati ya 'Isolator' na 'Circuit Breaker' katika substation.",
      swali_en: "Differentiate between an Isolator and a Circuit Breaker in a substation.",
      muongozo: "Breaker ni 'On-load'; Isolator ni 'Off-load' tu.",
      jibu_en: "A circuit breaker automatically breaks a circuit under load or fault. An isolator provides physical isolation for maintenance and must only be operated after the breaker is opened (off-load)."
    },
    {
      id: 32,
      cat: "Grid",
      swali_sw: "'Substation' ni nini na taja aina tatu za substation nchini Tanzania.",
      swali_en: "What is a substation and mention three types of substations in Tanzania.",
      muongozo: "Taja Step-up, Primary Grid, na Distribution substations.",
      jibu_en: "A substation transforms voltage levels. In TZ, we have Step-up (at plants), Primary Grid ($220/132\text{kV}$), and Distribution ($33/11\text{kV}$) substations."
    },
    {
      id: 33,
      cat: "Stability",
      swali_sw: "Elezea dhana ya 'Grid Stability' na mambo yanayoathiri frequency ya kitaifa.",
      swali_en: "Explain the concept of Grid Stability and factors affecting the national frequency.",
      muongozo: "Frequency inategemea uwiano wa Generation vs Load.",
      jibu_en: "Stability is maintaining steady state after disturbances. Frequency ($50\text{Hz}$) depends on the balance between generation and load; imbalances cause frequency to rise or drop."
    },
    {
      id: 34,
      cat: "Transmission",
      swali_sw: "'Sag' na 'Tension' katika nyaya za juu (Overhead Lines) zinaathiriwa na nini?",
      swali_en: "What affects the Sag and Tension in overhead lines?",
      muongozo: "Joto (temperature), upepo, na uzito wa waya.",
      jibu_en: "Sag is vertical subsidence. It's affected by conductor weight, span length, wind, and temperature (heat increases sag). Correct sag is vital for safety clearances."
    },
    {
      id: 35,
      cat: "Transmission",
      swali_sw: "Elezea maana ya 'Bundle Conductors' na kwa nini yanatumika kwenye njia za 400kV.",
      swali_en: "Explain the meaning of Bundle Conductors and why they are used on 400kV lines.",
      muongozo: "Hupunguza 'Corona Loss' na reactance.",
      jibu_en: "They use multiple conductors per phase to increase effective radius, reducing Corona loss and radio interference while lowering line reactance, common in $400\text{kV}$ lines."
    },
    {
      id: 36,
      cat: "Protection",
      swali_sw: "Ni nini kazi ya 'Guard Wire' inayopita juu kabisa ya nguzo za TANESCO?",
      swali_en: "What is the function of the Guard Wire running at the top of TANESCO poles?",
      muongozo: "Hii ni kinga dhidi ya radi (lightning protection).",
      jibu_en: "The Guard (Earth) wire intercepts direct lightning strikes and diverts surge current to ground, protecting the phase conductors below."
    },
    {
      id: 37,
      cat: "Distribution",
      swali_sw: "Elezea tofauti kati ya 'Radial System' na 'Ring Main System' katika usambazaji.",
      swali_en: "Differentiate between a Radial System and a Ring Main System in distribution.",
      muongozo: "Ring Main ina 'Reliability' (uaminifu) mkubwa zaidi.",
      jibu_en: "Radial flows one way; faults cause blackouts for all downstream. Ring Main feeds a load from two directions; if one part fails, the other keeps customers energized."
    },
    {
      id: 38,
      cat: "Compensation",
      swali_sw: "'Capacitor Bank' inapaswa kuwekwa wapi ili kuleta ufanisi zaidi?",
      swali_en: "Where should a Capacitor Bank be installed for maximum efficiency?",
      muongozo: "Iwekwe karibu na mzigo (load-end compensation).",
      jibu_en: "It should be near the inductive load to reduce reactive current flow through the upstream cables and transformers, minimizing $I^2R$ losses."
    },
    {
      id: 39,
      cat: "Planning",
      swali_sw: "Elezea maana ya 'Diversity Factor' na umuhimu wake katika kupanga ukubwa wa transfoma.",
      swali_en: "Explain Diversity Factor and its importance in transformer sizing.",
      muongozo: "Inaruhusu kupanga ukubwa kulingana na 'peak' halisi kuliko 'connected load'.",
      jibu_en: "It's the ratio of sum of individual max demands to the system's max demand. Since not all appliances peak together, it helps size transformers economically."
    },
    {
      id: 40,
      cat: "Generation",
      swali_sw: "'Load Curve' inatusaidia nini katika usimamizi wa kituo cha kuzalisha umeme?",
      swali_en: "How does a Load Curve help in managing a power generating station?",
      muongozo: "Inasaidia kujua 'Base Load' na 'Peak Load'.",
      jibu_en: "A load curve plots demand over 24 hours. It helps plant managers plan maintenance, dispatch generators, and determine spinning reserves."
    },

    /* SECTION 4: PROTECTION & SWITCHGEAR (41-50) */
    {
      id: 41,
      cat: "Protection",
      swali_sw: "Elezea maana ya 'Relay' na taja aina tatu zinazotumika TANESCO.",
      swali_en: "Explain the meaning of a Relay and mention three types used by TANESCO.",
      muongozo: "Relay ndio ubongo; taja Overcurrent, Differential, na Distance relays.",
      jibu_en: "A relay senses abnormal conditions and trips the breaker. Types in TZ: Overcurrent (short circuits), Differential (internal faults), and Distance (lines)."
    },
    {
      id: 42,
      cat: "Safety",
      swali_sw: "Kwa nini 'Current Transformer' (CT) haitakiwi kuachwa wazi upande wa pili (secondary)?",
      swali_en: "Why should a Current Transformer (CT) never be open-circuited on its secondary side?",
      muongozo: "Huzalisha voltage kubwa hatari (kilovolts).",
      jibu_en: "Opening the secondary induces a dangerously high voltage due to core saturation, which can lead to insulation failure, explosion, or fatal shock."
    },
    {
      id: 43,
      cat: "Switchgear",
      swali_sw: "'Arc Quenching' ni nini na inafanyika vipi kwenye 'Vacuum Circuit Breaker' (VCB)?",
      swali_en: "What is Arc Quenching and how is it done in a Vacuum Circuit Breaker (VCB)?",
      muongozo: "Kuzima cheche (arc) wakati contacts zinatengana.",
      jibu_en: "Arc quenching extinguishes the arc during contact separation. In VCBs, a high vacuum prevents ionization, extinguishing the arc rapidly at the first current zero."
    },
    
    {
      id: 44,
      cat: "Transformers",
      swali_sw: "Elezea kazi ya 'Buchholz Relay' na inakaa wapi kwenye transfoma?",
      swali_en: "Explain the function of a Buchholz Relay and where is it located on a transformer?",
      muongozo: "Ulinzi dhidi ya hitilafu za ndani (internal faults) za transfoma.",
      jibu_en: "It detects internal faults (gas/oil surges). It's located in the pipe between the main tank and the conservator."
    },
    {
      id: 45,
      cat: "Faults",
      swali_sw: "'Short Circuit Current' inategemea nini na kwa nini ni muhimu kuijua?",
      swali_en: "What does Short Circuit Current depend on and why is it important to know it?",
      muongozo: "Inategemea 'Source Impedance'.",
      jibu_en: "It depends on source voltage and network impedance. It's critical for specifying the breaking capacity of switchgear and busbar mechanical strength."
    },
    {
      id: 46,
      cat: "Protection",
      swali_sw: "Tofautisha kati ya 'Primary Protection' na 'Backup Protection'.",
      swali_en: "Differentiate between Primary Protection and Backup Protection.",
      muongozo: "Backup hufanya kazi tu ikiwa Primary imefeli.",
      jibu_en: "Primary is the first line of defense. Backup operates with a time delay if primary fails, ensuring system reliability."
    },
    {
      id: 47,
      cat: "Protection",
      swali_sw: "Elezea maana ya 'IDMT Relay'.",
      swali_en: "Explain the meaning of an IDMT Relay.",
      muongozo: "Inverse Definite Minimum Time.",
      jibu_en: "It is a protective relay whose operating time is inversely proportional to fault current; higher currents trip the breaker faster."
    },
    {
      id: 48,
      cat: "Protection",
      swali_sw: "'Lightning Arrester' inatofautiana vipi na 'Surge Absorber'?",
      swali_en: "How does a Lightning Arrester differ from a Surge Absorber?",
      muongozo: "Arrester inapeleka mkondo ardhini (diverter).",
      jibu_en: "An arrester provides a ground path for surges. An absorber (capacitor/inductor) absorbs energy or slows the wavefront to protect insulation."
    },
    {
      id: 49,
      cat: "Safety",
      swali_sw: "Ni nini kazi ya 'Earthing Switch' katika switchyard?",
      swali_en: "What is the function of an Earthing Switch in a switchyard?",
      muongozo: "Huondoa 'static charge' kabla ya matengenezo.",
      jibu_en: "It connects de-energized conductors to earth, draining residual static charges and protecting technicians from induced voltages."
    },
    {
      id: 50,
      cat: "Protection",
      swali_sw: "'Discrimination' katika ulinzi wa umeme inamaanisha nini?",
      swali_en: "What does Discrimination mean in electrical protection?",
      muongozo: "Kuzima sehemu yenye hitilafu pekee (Selectivity).",
      jibu_en: "It's the ability of protection to isolate only the faulty section while keeping the healthy system energized."
    },

    /* SECTION 5: RENEWABLE ENERGY - REA & SOLAR (51-60) */
    {
      id: 51,
      cat: "Solar",
      swali_sw: "Ni vigezo gani vinatumika kuchagua eneo la mradi wa 'Solar Mini-Grid'?",
      swali_en: "What criteria are used to select a site for a Solar Mini-Grid project?",
      muongozo: "Solar irradiation, load demand, na umbali kutoka gridi ya taifa.",
      jibu_en: "Criteria include: solar irradiation (GHI), population density, willingness to pay, and distance from the national grid to avoid stranded assets."
    },
    {
      id: 52,
      cat: "Solar",
      swali_sw: "Tofauti ya 'PWM' na 'MPPT' controllers kwenye mifumo ya solar.",
      swali_en: "Explain the difference between PWM and MPPT charge controllers.",
      muongozo: "MPPT ina ufanisi zaidi (up to 30%).",
      jibu_en: "PWM is a simple switch. MPPT is a DC-DC converter that tracks the panel's optimal power point, extracting 20-30% more energy."
    },
    {
      id: 53,
      cat: "Policy",
      swali_sw: "Changamoto ya 'Grid Arrival' inaziathiri vipi Mini-Grids Tanzania?",
      swali_en: "How does the 'Grid Arrival' challenge affect Mini-Grid projects in Tanzania?",
      muongozo: "Hatari ya kuwa na miundombinu iliyokufa (stranded assets).",
      jibu_en: "Grid extension into mini-grid areas creates stranded asset risks. Developers may convert to Small Power Producers (SPP) or seek compensation."
    },
    {
      id: 54,
      cat: "Solar",
      swali_sw: "Elezea maana ya 'Autonomy Days' katika usanifu wa solar.",
      swali_en: "Explain the meaning of 'Autonomy Days' in solar system design.",
      muongozo: "Siku ambazo betri inaweza kutoa umeme bila jua kuwaka.",
      jibu_en: "The number of days a battery bank can supply the full load without solar charging (typically 2-3 days in TZ)."
    },
    {
      id: 55,
      cat: "REA",
      swali_sw: "Kwa nini miradi mingi ya REA inatumia njia za 'Radial'?",
      swali_en: "Why do most REA projects use Radial lines?",
      muongozo: "Ni kwa ajili ya kupunguza gharama (cost-effective).",
      jibu_en: "Radial lines are cheaper and simpler for scattered rural loads, allowing maximum coverage with limited funds."
    },
    {
      id: 56,
      cat: "Renewables",
      swali_sw: "'Biomass Energy' ina nafasi gani katika mikakati ya REA Tanzania?",
      swali_en: "What is the role of Biomass Energy in REA’s strategies in Tanzania?",
      muongozo: "Inatoa 'Baseload Power' kwa kutumia mabaki ya kilimo.",
      jibu_en: "Biomass provides baseload power from agricultural residues (e.g., rice husks), serving as a consistent alternative to intermittent solar."
    },
    {
      id: 57,
      cat: "Solar",
      swali_sw: "Elezea umuhimu wa 'Inverter Efficiency' katika mifumo ya Off-Grid.",
      swali_en: "Explain the importance of Inverter Efficiency in Off-Grid systems.",
      muongozo: "Upotevu mdogo inamaanisha betri na paneli chache zaidi.",
      jibu_en: "High efficiency ($>94\%$) ensures maximum energy reach, reducing the size and cost of solar arrays and battery banks."
    },
    {
      id: 58,
      cat: "Maintenance",
      swali_sw: "Ni nini athari ya 'Dust' (vumbi) kwenye paneli za solar?",
      swali_en: "What is the impact of dust on solar panel production?",
      muongozo: "Vumbi hupunguza uzalishaji (yield) kwa 5-25%.",
      jibu_en: "Dust accumulation (soiling) blocks sunlight. In arid regions like Dodoma, regular cleaning is vital to maintain designed energy yields."
    },
    {
      id: 59,
      cat: "Solar",
      swali_sw: "'Depth of Discharge' (DoD) ya betri inaathiri vipi mfumo?",
      swali_en: "How does the Depth of Discharge (DoD) of a battery affect the lifespan of a solar system?",
      muongozo: "DoD kubwa inapunguza maisha ya betri.",
      jibu_en: "DoD is the % of used capacity. High DoD (e.g., 80% for lead-acid) reduces cycle life. We typically limit it to 50% for lead-acid."
    },
    {
      id: 60,
      cat: "Policy",
      swali_sw: "Elezea dhana ya 'Productive Use of Energy' (PUE).",
      swali_en: "Explain the concept of Productive Use of Energy (PUE).",
      muongozo: "Umeme kwa ajili ya biashara na viwanda vidogo vijijini.",
      jibu_en: "PUE means using electricity for income-generating activities (e.g., grain milling, welding) to ensure rural economic development."
    },

    /* SECTION 6: OSHA & SAFETY (61-70) */
    {
      id: 61,
      cat: "Safety",
      swali_sw: "Elezea maana ya 'Lockout/Tagout' (LOTO) na lini itumike?",
      swali_en: "Explain the meaning of Lockout/Tagout (LOTO) and when should it be used?",
      muongozo: "Huzuia mitambo kuwashwa kwa bahati mbaya wakati wa matengenezo.",
      jibu_en: "LOTO involves physical locks and tags on energy-isolating devices. It's used during maintenance to prevent injury from unexpected energization."
    },
    {
      id: 62,
      cat: "Safety",
      swali_sw: "'Arc Flash' ni nini na taja PPE zinazokinga.",
      swali_en: "What is an Arc Flash and mention two PPE items that protect against it?",
      muongozo: "Ni mlipuko wa joto kali; PPE ni Arc-rated shields na FR clothing.",
      jibu_en: "It's a high-temperature explosion caused by an electric arc. PPE: Arc-rated face shields and Flame-resistant (FR) coveralls."
    },
    {
      id: 63,
      cat: "Safety",
      swali_sw: "Unafanya nini unapomkuta mfanyakazi amepata shock na bado ameshikilia waya?",
      swali_en: "What do you do when you find a colleague has suffered an electric shock and is still touching the wire?",
      muongozo: "Zima umeme kwanza au tumia 'non-conductive object' kumvuta.",
      jibu_en: "Don't touch them! Immediately switch off the breaker or use a non-conductive wooden pole to push the victim away, then check breathing."
    },
    {
      id: 64,
      cat: "Earthing",
      swali_sw: "Umuhimu wa 'Step Voltage' na 'Touch Voltage' katika earthing ya substation.",
      swali_en: "Explain the importance of Step Voltage and Touch Voltage in substation earthing design.",
      muongozo: "Inalinda watu wasipigwe na umeme wakati wa hitilafu ya gridi.",
      jibu_en: "Designing earth mats keeps these voltages within safe IEEE 80 limits to prevent electrocution during ground faults."
    },
    {
      id: 65,
      cat: "Safety",
      swali_sw: "'Class E' Hard Hat ina utofauti gani?",
      swali_en: "How does a Class E Hard Hat differ from Class G or Class C?",
      muongozo: "Class E imepimwa kuhimili hadi 20,000V.",
      jibu_en: "Class E (Electrical) hats withstand $20,000\text{V}$. Class G (General) to $2,200\text{V}$; Class C provides no electrical protection."
    },
    {
      id: 66,
      cat: "Safety",
      swali_sw: "Ni nini kazi ya 'Residual Current Device' (RCD)?",
      swali_en: "What is the function of a Residual Current Device (RCD) and how does it differ from an MCB?",
      muongozo: "RCD inalinda binadamu dhidi ya shock ($30\text{mA}$).",
      jibu_en: "RCD monitors live/neutral balance and trips on leakage current ($30\text{mA}$) to prevent electrocution, unlike MCB which protects equipment."
    },
    {
      id: 67,
      cat: "Safety",
      swali_sw: "Elezea maana ya 'Working Clearance' karibu na njia za HV.",
      swali_en: "Explain the meaning of Working Clearance when working near HV lines.",
      muongozo: "Ni umbali salama (mfano $3\text{m}$ kwa $33\text{kV}$).",
      jibu_en: "It's the minimum safe distance maintained between a person/tools and an energized HV conductor to prevent arcing."
    },
    {
      id: 68,
      cat: "Safety",
      swali_sw: "Kwa nini ni marufuku kuvaa pete au saa za chuma kwenye switchgear room?",
      swali_en: "Why is it forbidden to wear rings, metal watches, or chains when entering a Switchgear Room?",
      muongozo: "Metali huongeza hatari ya shock na short circuits.",
      jibu_en: "Conductive jewelry can cause severe burns or bridge terminals, triggering short circuits or arc flashes."
    },
    {
      id: 69,
      cat: "Management",
      swali_sw: "'Permit to Work' (PTW) ina umuhimu gani?",
      swali_en: "What is the importance of a Permit to Work (PTW) in a maintenance team?",
      muongozo: "Hutoa ushahidi kuwa mfumo uko isolated na salama.",
      jibu_en: "A PTW ensures risks are identified and equipment is isolated/grounded, coordinating teams to prevent accidental re-energization."
    },
    {
      id: 70,
      cat: "Safety",
      swali_sw: "Elezea hatua za 'Job Hazard Analysis' (JHA).",
      swali_en: "Explain the steps of a Job Hazard Analysis (JHA) before starting installation work.",
      muongozo: "Gawa kazi katika hatua, tambua hatari, na weka udhibiti (controls).",
      jibu_en: "1. Break job into steps. 2. Identify hazards (e.g., fall, shock). 3. Determine preventive controls (e.g., gloves, harness). 4. Communicate via toolbox talks."
    },

    /* SECTION 7: PROCUREMENT & REGULATIONS (71-80) */
    {
      id: 71,
      cat: "Regulation",
      swali_sw: "Elezea mabadiliko makuu ya PPA 2023 na mfumo wa NeST.",
      swali_en: "Explain the major changes in the Public Procurement Act 2023 and the importance of the NeST system.",
      muongozo: "Ununuzi wote sasa ni kielektroniki (digital) kupitia NeST.",
      jibu_en: "PPA 2023 mandates digitizing procurement through NeST to enhance transparency and reduce human interference in government tenders."
    },
    {
      id: 22,
      cat: "Procurement",
      swali_sw: "'Force Account' ni nini na ni lini inaruhusiwa?",
      swali_en: "What is 'Force Account' and when is it allowed to be used in electrical projects?",
      muongozo: "Kutumia rasilimali za ndani badala ya mkandarasi.",
      jibu_en: "Force Account uses a procuring entity's own staff and equipment. It's used for small, scattered, or emergency repairs."
    },
    {
      id: 73,
      cat: "Professionalism",
      swali_sw: "Tofauti ya Registered Engineer na Graduate Engineer (ERB)?",
      swali_en: "What is the difference between a Registered Engineer and a Graduate Engineer according to ERB?",
      muongozo: "Registered anaweza kusaini michoro na kuwajibika kisheria.",
      jibu_en: "A Graduate is in training. A Professional (Registered) Engineer has 3+ years experience, passed a PI, and is legally authorized to sign off designs."
    },
    {
      id: 74,
      cat: "Procurement",
      swali_sw: "Elezea 'Value for Money' (VfM) katika ununuzi wa transfoma.",
      swali_en: "Explain the meaning of 'Value for Money' (VfM) in the procurement of transformers.",
      muongozo: "Sio bei rahisi tu; pima ufanisi na 'whole-life cost'.",
      jibu_en: "VfM is the optimal combination of cost and quality, considering low energy losses and maintenance over the transformer's life."
    },
    {
      id: 75,
      cat: "Evaluation",
      swali_sw: "Ni vigezo gani katika 'Technical Evaluation' ya zabuni ya vifaa vya umeme?",
      swali_en: "What criteria should an engineer consider during the Technical Evaluation of a tender?",
      muongozo: "Viwango vya IEC/TBS, performance, na udhamini (warranty).",
      jibu_en: "Compliance with standards, performance (efficiency), manufacturer reputation, warranty, and delivery timelines."
    },
    {
      id: 76,
      cat: "EWURA",
      swali_sw: "Jukumu la EWURA katika kudhibiti bei za umeme (Tariffs)?",
      swali_en: "Explain the role of EWURA in regulating electricity tariffs in Tanzania.",
      muongozo: "Kuhakikisha uwiano kati ya uwezo wa mteja na uwezo wa TANESCO kujiendesha.",
      jibu_en: "EWURA reviews tariff applications to balance consumer affordability with utility financial viability based on generation/distribution costs."
    },
    {
      id: 77,
      cat: "Ethics",
      swali_sw: "'Conflict of Interest' inaweza kuathiri vipi ununuzi?",
      swali_en: "How can 'Conflict of Interest' affect the public procurement process?",
      muongozo: "Huleta upendeleo na vifaa vyenye ubora mdogo.",
      jibu_en: "Personal interests can bias evaluation, leading to unfair competition and procurement of substandard materials."
    },
    {
      id: 78,
      cat: "Procurement",
      swali_sw: "'Bid Security' inatusaidia nini?",
      swali_en: "How does 'Bid Security' help in securing a serious contractor?",
      muongozo: "Inazuia wakandarasi wasio makini kuingia kwenye mchakato.",
      jibu_en: "It ensures a bidder won't withdraw or refuse to sign a contract, protecting the entity from re-tendering costs."
    },
    {
      id: 79,
      cat: "Contract",
      swali_sw: "Elezea maana ya 'Force Majeure'.",
      swali_en: "Explain the meaning of 'Force Majeure' in an engineering contract.",
      muongozo: "Matukio yaliyo nje ya uwezo wa binadamu (mafuriko, vita).",
      jibu_en: "Extraordinary events (natural disasters, war) beyond parties' control that prevent fulfilling obligations without penalty."
    },
    {
      id: 80,
      cat: "NeST",
      swali_sw: "NeST inasaidia vipi kupambana na rushwa?",
      swali_en: "How does NeST help in combating corruption in government projects?",
      muongozo: "Inapunguza 'human contact' na kuacha 'digital trail'.",
      jibu_en: "NeST automates workflows and records interactions digitally, providing audit trails for oversight bodies like CAG/PPRA."
    },

    /* SECTION 8: SPECIAL PROJECTS & AUTOMATION (81-90) */
    {
      id: 81,
      cat: "SGR",
      swali_sw: "Elezea mfumo wa 'Electric Traction' wa SGR Tanzania.",
      swali_en: "Explain the Electric Traction system used in the Tanzanian Standard Gauge Railway (SGR).",
      muongozo: "Inatumia $25\text{kV}$ AC kupitia nyaya za juu (OCS).",
      jibu_en: "SGR uses a $25\text{kV}, 50\text{Hz}$ single-phase AC system. Power is drawn through traction substations via an Overhead Catenary System (OCS)."
    },
    {
      id: 82,
      cat: "SGR",
      swali_sw: "Ni nini kazi ya 'Pantograph' katika treni za umeme?",
      swali_en: "What is the function of a Pantograph in electric trains?",
      muongozo: "Huchukua umeme kutoka nyaya za juu (catenary).",
      jibu_en: "It's a folding mechanism on the roof that collects $25\text{kV}$ current from the catenary wire and delivers it to the locomotive."
    },
    {
      id: 83,
      cat: "SGR",
      swali_sw: "'Regenerative Braking' inasaidia vipi kuokoa nishati?",
      swali_en: "How does 'Regenerative Braking' help in saving energy in the SGR?",
      muongozo: "Treni inapopunguza mwendo, motor hugeuka kuwa jenereta.",
      jibu_en: "Kinetic energy is converted back to electrical during braking and fed to the grid or other trains, improving efficiency by up to 20%."
    },
    {
      id: 84,
      cat: "JNHPP",
      swali_sw: "Elezea kazi ya SCADA katika JNHPP Dam.",
      swali_en: "Explain the meaning of SCADA and its importance in managing the JNHPP Dam.",
      muongozo: "Huruhusu kuona na kudhibiti mitambo (turbines) remotely.",
      jibu_en: "Supervisory Control and Data Acquisition monitors turbines and transformers in real-time to stabilize the massive $2,115\text{MW}$ output."
    },
    {
      id: 85,
      cat: "Automation",
      swali_sw: "Tofauti ya PLC na PC ni ipi?",
      swali_en: "How does a Programmable Logic Controller (PLC) differ from a regular PC?",
      muongozo: "PLC ni kwa ajili ya mazingira magumu ya viwanda (industrial ruggedized).",
      jibu_en: "PLCs are designed for harsh environments (heat, vibration) and real-time deterministic control of industrial actuators/sensors."
    },
    {
      id: 86,
      cat: "Motors",
      swali_sw: "Ni nini kazi ya VFD katika driving pumps kubwa?",
      swali_en: "What is the function of a VFD in driving large pumps?",
      muongozo: "Variable Frequency Drive kudhibiti kasi na nishati.",
      jibu_en: "VFDs control motor speed/torque by varying frequency, allowing smooth starts and significant energy savings by matching demand flow."
    },
    {
      id: 87,
      cat: "Automation",
      swali_sw: "Elezea maana ya HMI.",
      swali_en: "Explain the meaning of Human Machine Interface (HMI) in a control room.",
      muongozo: "Ni kioo kinachomwezesha mhandisi kuona hali ya mitambo.",
      jibu_en: "HMI provides visual representation of industrial processes, allowing operators to monitor status, acknowledge alarms, and input PLC commands."
    },
    {
      id: 88,
      cat: "Automation",
      swali_sw: "Wapi tunatumia DCS badala ya PLC?",
      swali_en: "Where is a Distributed Control System (DCS) used instead of a PLC?",
      muongozo: "DCS hutumika kwenye mitambo mikubwa sana (hydro plants).",
      jibu_en: "DCS is for large-scale, continuous complex processes like hydro plants (Kidatu/JNHPP) for unified architecture and high redundancy."
    },
    {
      id: 89,
      cat: "Stability",
      swali_sw: "Umuhimu wa 'Redundancy' katika ulinzi wa gridi.",
      swali_en: "Explain the importance of 'Redundancy' in grid protection systems.",
      muongozo: "Kuwa na mfumo wa ulinzi wa pili ikiwa wa kwanza umefeli.",
      jibu_en: "Redundancy ensures that if one protective component fails, another will clear the fault, preventing catastrophic damage."
    },
    {
      id: 90,
      cat: "Cybersecurity",
      swali_sw: "Hatari ya Cybersecurity katika gridi ya kisasa ni ipi?",
      swali_en: "What is the main Cybersecurity risk in modern power grid systems?",
      muongozo: "Wahalifu kuingilia SCADA na kuzima gridi remotely.",
      jibu_en: "Unauthorized access to SCADA/DCS allows remote manipulation of breakers or settings, risking sabotage or widespread blackouts."
    },

    /* SECTION 9: ELECTRONICS & INSTRUMENTATION (91-95) */
    {
      id: 91,
      cat: "Vipimo",
      swali_sw: "Oscilloscope inatusaidia nini zaidi ya Multimeter?",
      swali_en: "What does an Oscilloscope help us with that a Multimeter cannot?",
      muongozo: "Inaonyesha waveforms katika 'time domain'.",
      jibu_en: "An oscilloscope visualizes actual waveforms over time, essential for detecting noise, spikes, and phase shifts invisible to a multimeter."
    },
    {
      id: 92,
      cat: "Electronics",
      swali_sw: "Tofauti ya Analog na Digital signals kwenye gridi.",
      swali_en: "Differentiate between Analog and Digital signals in grid communication systems.",
      muongozo: "Digital ni 'binary' na ina uwezo mkubwa wa kuzuia 'noise'.",
      jibu_en: "Analog is continuous; Digital is binary. Digital is preferred for grid communication as it's noise-resistant and computer-processable."
    },
    {
      id: 93,
      cat: "Electronics",
      swali_sw: "Zener Diode ina upekee gani?",
      swali_en: "What is unique about a Zener Diode compared to a regular diode?",
      muongozo: "Inafanya kazi katika 'reverse breakdown' region.",
      jibu_en: "Unlike regular diodes, Zener is designed to operate safely in reverse breakdown at a precise voltage, ideal for regulation."
    },
    {
      id: 94,
      cat: "Electronics",
      swali_sw: "Rectifier ni nini na taja aina mbili.",
      swali_en: "What is a Rectifier and mention two main types.",
      muongozo: "Inabadili AC kuwa DC; taja Half-wave na Full-wave.",
      jibu_en: "A rectifier converts AC to DC. Types: Half-wave (one diode) and Full-wave (bridge), more efficient for substation chargers."
    },
    {
      id: 95,
      cat: "Electronics",
      swali_sw: "Kazi ya Capacitor katika saketi ya Filter.",
      swali_en: "Explain the function of a Capacitor in a Filter circuit.",
      muongozo: "Inazuia mabadiliko ya ghafla ya voltage (smooth ripples).",
      jibu_en: "It acts as a reservoir to smooth out pulsating DC ripples from a rectifier, providing a steady DC supply."
    },

    /* SECTION 10: BEHAVIORAL & PROFESSIONAL ETHICS (96-100) */
    {
      id: 96,
      cat: "Ethics",
      swali_sw: "Unawezaje kushughulikia mzozo wa kiufundi na mhandisi mwandamizi?",
      swali_en: "How do you handle a technical disagreement with a senior engineer?",
      muongozo: "Onesha uelewa wa standards (IEC/TZ Grid Code) na heshima.",
      jibu_en: "I'd present reasoning based on standards like the TZ Grid Code. I'd listen to their experience and suggest simulations to ensure facts/safety win."
    },
    {
      id: 97,
      cat: "Ethics",
      swali_sw: "Elezea wakati ulipofanya kosa la kihandisi na ulifanya nini?",
      swali_en: "Describe a time you made an engineering mistake and what you did to rectify it.",
      muongozo: "Pima uaminifu na uwajibikaji (Accountability).",
      jibu_en: "I once miscalculated a rural feeder drop; I immediately informed my lead and changed conductor size, preventing failure. I now use multi-stage reviews."
    },
    {
      id: 98,
      cat: "Career",
      swali_sw: "Kwa nini ungependa kufanya kazi sekta ya umma kuliko binafsi?",
      swali_en: "Why would you prefer working in the public sector over private companies?",
      muongozo: "Onyesha uzalendo na nia ya kushiriki miradi ya kitaifa.",
      jibu_en: "I'm motivated to contribute to TZ's socio-economic development through flagship projects like JNHPP that impact millions."
    },
    {
      id: 99,
      cat: "Ethics",
      swali_sw: "Engineering Ethics inamaanisha nini kwenye Force Account?",
      swali_en: "What does 'Engineering Ethics' mean to you when executing a Force Account project?",
      muongozo: "Uaminifu katika manunuzi (procurement) ya vifaa.",
      jibu_en: "It means integrity in procurement and labor management, ensuring the government gets the exact specs paid for without resource misuse."
    },
    {
      id: 100,
      cat: "Career",
      swali_sw: "Unajiona wapi kitaaluma katika miaka mitano ijayo?",
      swali_en: "Where do you see yourself professionally in the next five years?",
      muongozo: "Usajili wa ERB na kuwa mtaalamu wa Smart Grids.",
      jibu_en: "I expect to be a Registered Professional Engineer with ERB, specialized in smart grids and helping TZ export electricity to the region."
    }
  ]
};

export default electricalData;