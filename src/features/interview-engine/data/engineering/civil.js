const civilData = {
  id: "civil-engineering",
  title: "Civil Engineering: Expert Interview Compendium",
  description:
    "Strategic Evaluation: 100 Essential Questions for Civil Engineers. Inajumuisha miongozo ya ERB, taratibu za ununuzi wa umma (NeST/PPA 2023), teknolojia ya zege, na ujenzi wa miundombinu nchini Tanzania.",

  etiquette: [
    {
      title: "Professional Licensing",
      content:
        "Daima onyesha uelewa wa kisheria wa kusajiliwa na Bodi ya Usajili wa Wahandisi (ERB) na umuhimu wa kufuata Code of Conduct nchini Tanzania."
    },
    {
      title: "Value for Money",
      content:
        "Katika usimamizi wa mikataba, sisitiza 'Value for Money' (VfM) na matumizi ya mifumo mipya kama NeST kwa mujibu wa sheria ya PPA 2023."
    },
    {
      title: "Safety & Sustainability",
      content:
        "Sisitiza usalama wa umma (Public Safety) na uzingatiaji wa mazingira (NEMC/EIA) katika kila hatua ya usanifu na ujenzi."
    }
  ],

  questions: [
    /* SECTION 1: PROFESSIONAL ETHICS & ERB REGULATIONS (1-10) */
    {
      id: 1,
      cat: "Ethics",
      swali_sw: "Ni nini umuhimu wa kusajiliwa na Bodi ya Usajili wa Wahandisi (ERB) kabla ya kuanza kufanya kazi nchini Tanzania?",
      swali_en: "What is the significance of being registered with the Engineers Registration Board (ERB) before practicing in Tanzania?",
      muongozo: "Elezea takwa la kisheria (Act No. 63) na uwajibikaji wa kitaalamu.",
      jibu_en: "Registration with the ERB is a legal requirement under the Engineers Registration Act. It serves as a license to practice, ensures adherence to professional standards and codes of ethics, protects public safety, and grants the authority to sign off on engineering designs and reports."
    },
    {
      id: 2,
      cat: "ERB",
      swali_sw: "Eleza tofauti kati ya 'Graduate Engineer' na 'Professional Engineer' kulingana na vigezo vya ERB.",
      swali_en: "Explain the difference between a 'Graduate Engineer' and a 'Professional Engineer' according to ERB criteria.",
      muongozo: "Lenga kwenye uzoefu wa SEAP na uwezo wa kusaini michoro kisheria.",
      jibu_en: "A Graduate Engineer is a degree holder registered to begin professional apprenticeship (SEAP). A Professional Engineer has at least three years of diversified experience, has passed the Professional Interview (PI), and holds the legal authority to take responsibility for engineering works."
    },
    
    {
      id: 3,
      cat: "Ethics",
      swali_sw: "Code of Conduct ya wahandisi inasema nini kuhusu uadilifu na uaminifu (Integrity and Honesty)?",
      swali_en: "What does the 'Code of Conduct' for engineers say regarding integrity and honesty?",
      muongozo: "Gusia kuepuka rushwa na kuwa mkweli katika ripoti za kiufundi.",
      jibu_en: "The code mandates that engineers must avoid all forms of corruption, such as bribery, and must provide truthful, objective technical reports. They must act as faithful agents to their employers while ensuring personal interests do not conflict with public safety."
    },
    {
      id: 4,
      cat: "Responsibility",
      swali_sw: "Utafanya nini ukigundua kuwa mchoro wa jengo uliopitishwa una makosa makubwa ya kimuundo (structural flaws)?",
      swali_en: "What would you do if you discovered that an approved building design has significant structural flaws?",
      muongozo: "Pima uwajibikaji wako kwa usalama wa umma dhidi ya itifaki ya kiofisi.",
      jibu_en: "Public safety is the priority. I would immediately report the flaws to my supervisor and the principal designer with technical justification. I would recommend suspending work in the affected area until rectification is done, as ignoring it violates engineering ethics."
    },
    {
      id: 5,
      cat: "Professionalism",
      swali_sw: "Eleza umuhimu wa 'Continuing Professional Development' (CPD) kwa mhandisi nchini Tanzania.",
      swali_en: "Explain the importance of 'Continuing Professional Development' (CPD) for an engineer in Tanzania.",
      muongozo: "CPD points ni sharti la kuhuisha usajili wa kila mwaka wa ERB.",
      jibu_en: "CPD is vital for staying updated with emerging technologies and standards. In Tanzania, it is a mandatory requirement for maintaining active ERB registration, ensuring engineers improve their technical competencies and understand modern tools like BIM."
    },
    {
      id: 6,
      cat: "ERB",
      swali_sw: "Unaelewa nini kuhusu 'Professional Interview' (PI) inayoendeshwa na ERB?",
      swali_en: "What do you understand by the 'Professional Interview' (PI) conducted by ERB?",
      muongozo: "Hatua ya mwisho kuelekea hadhi ya Professional Engineer (PE).",
      jibu_en: "The PI is a rigorous assessment to verify if a Graduate Engineer has attained enough practical experience. It involves reviewing a professional report, design drawings, an essay on ethics, and an oral interview."
    },
    {
      id: 7,
      cat: "Environment",
      swali_sw: "Wahandisi wanapaswa kuzingatia nini kuhusu 'Environmental Sustainability' katika miradi yao?",
      swali_en: "What should engineers consider regarding 'Environmental Sustainability' in their projects?",
      muongozo: "Zingatia miongozo ya NEMC na Environmental Impact Assessment (EIA).",
      jibu_en: "Engineers must minimize carbon footprints, protect local ecosystems, and implement waste management. Compliance with NEMC guidelines and conducting mandatory Environmental Impact Assessments (EIA) ensures development does not compromise future generations."
    },
    {
      id: 8,
      cat: "Ethics",
      swali_sw: "Utafanya nini ikiwa mwajiri wako anakulazimisha kutumia vifaa vyenye ubora wa chini ili kupunguza gharama?",
      swali_en: "What would you do if your employer pressured you to use low-quality materials to reduce costs?",
      muongozo: "Simama upande wa taaluma, usalama, na sheria za ERB.",
      jibu_en: "I would firmly decline and explain the legal and safety implications. Using substandard materials endangers the public and risks the revocation of my license. I would document my objection and suggest alternative cost-saving measures that maintain quality."
    },
    {
      id: 9,
      cat: "Ethics",
      swali_sw: "Ni nini jukumu la mhandisi katika kuzuia rushwa kwenye sekta ya ujenzi?",
      swali_en: "What is the role of an engineer in preventing corruption in the construction industry?",
      muongozo: "Uaminifu katika BOQ, vipimo (measurements), na kutoa ripoti TAKUKURU.",
      jibu_en: "An engineer ensures transparency in measurements and material approvals. By strictly adhering to technical specifications and providing accurate interim certificates, I prevent cost inflation and ghost works. Reporting suspicious activities to PCCB (TAKUKURU) is a duty."
    },
    {
      id: 10,
      cat: "Safety",
      swali_sw: "Eleza maana ya 'Public Safety' katika muktadha wa uhandisi wa ujenzi.",
      swali_en: "Explain the meaning of 'Public Safety' in the context of civil engineering.",
      muongozo: "Lengo kuu la miundombinu ni kutoleta madhara kwa watumiaji.",
      jibu_en: "Public safety means constructing infrastructure that is safe for use throughout its lifespan. This involves following building codes, rigorous soil testing, using quality materials, and ensuring safety for workers and the community during construction."
    },

    /* SECTION 2: CONCRETE TECHNOLOGY & STRUCTURAL ENGINEERING (11-30) */
    {
      id: 11,
      cat: "Concrete",
      swali_sw: "Tofauti kati ya 'Nominal Mix' na 'Design Mix' ni nini na lini kila moja inatumika?",
      swali_en: "What is the difference between 'Nominal Mix' and 'Design Mix' and when is each used?",
      muongozo: "Nominal (uwiano fasta) vs Design (majaribio ya maabara).",
      jibu_en: "Nominal mix uses fixed proportions (e.g., 1:2:4) and is for small-scale works. Design mix involves lab testing to find precise proportions for a specific characteristic strength (e.g., M30) and is mandatory for structural elements in major projects."
    },
    {
      id: 12,
      cat: "Concrete",
      swali_sw: "'Slump Test' inapima nini kwenye zege bichi na ni hatua gani za kufuata?",
      swali_en: "What does the 'Slump Test' measure in fresh concrete and what are the steps to follow?",
      muongozo: "Hupima 'workability' (urahisi wa kufanyia kazi).",
      jibu_en: "It measures the consistency and workability of fresh concrete. It involves filling an Abrams cone in layers, tamping each 25 times, lifting the cone, and measuring the subsidence. Higher slump means more fluid concrete."
    },
    
    {
      id: 13,
      cat: "Concrete",
      swali_sw: "Kwa nini 'Curing' ya zege ni muhimu na inapaswa kufanyika kwa muda gani nchini Tanzania?",
      swali_en: "Why is 'Curing' of concrete important and for how long should it be done in Tanzania?",
      muongozo: "Curing inazuia shrinkage cracks kutokana na joto la Tanzania.",
      jibu_en: "Curing maintains moisture for cement hydration, essential for strength. In Tanzania's tropical climate, it should be done for at least 7 days for OPC, and up to 14 days for high-strength concrete or extreme heat."
    },
    {
      id: 14,
      cat: "Structural",
      swali_sw: "Elezea maana ya 'Characteristic Strength' ya zege ($f_{ck}$).",
      swali_en: "Explain the meaning of 'Characteristic Strength' of concrete ($f_{ck}$).",
      muongozo: "Nguvu ambayo asilimia 95 ya majaribio yanapaswa kuifikia.",
      jibu_en: "Characteristic strength ($f_{ck}$) is the compressive strength below which not more than $5\%$ of test results are expected to fall. For M25 concrete, the $f_{ck}$ is $25 \text{ N/mm}^2$ after 28 days."
    },
    {
      id: 15,
      cat: "Structural",
      swali_sw: "Tofauti kati ya 'One-way Slab' na 'Two-way Slab' kulingana na uwiano wa pande (Aspect Ratio).",
      swali_en: "Difference between a 'One-way Slab' and a 'Two-way Slab' based on the aspect ratio.",
      muongozo: "Uwiano $L_y/L_x$ ndio unaoamua aina ya slab.",
      jibu_en: "In a one-way slab, $L_y/L_x \geq 2$, and it bends primarily in one direction. In a two-way slab, $L_y/L_x < 2$, and it bends in both directions, transferring loads to all four supporting beams."
    },
    {
      id: 16,
      cat: "Structural",
      swali_sw: "Ni nini umuhimu wa 'Clear Cover' na ni kiasi gani kinapendekezwa kwa nguzo na misingi?",
      swali_en: "What is the importance of 'Clear Cover' and how much is recommended for columns and footings?",
      muongozo: "Clear cover inalinda chuma dhidi ya kutu (corrosion) na moto.",
      jibu_en: "Clear cover protects reinforcement from corrosion and fire. Standard covers in Tanzania are typically $40 \text{ mm}$ for columns and $50 \text{ mm}$ for footings due to soil contact."
    },
    {
      id: 17,
      cat: "Concrete",
      swali_sw: "'Segregation' na 'Bleeding' kwenye zege zinasababishwa na nini na zinaathiri vipi ubora?",
      swali_en: "What causes 'Segregation' and 'Bleeding' in concrete and how do they affect quality?",
      muongozo: "Lenga kwenye urefu wa kumwaga (dropping height) na over-vibration.",
      jibu_en: "Segregation is the separation of aggregates from paste, often caused by dropping concrete from $>1.5 \text{m}$. Bleeding is water rising to the surface. Both cause weak, porous concrete and reduced durability."
    },
    {
      id: 18,
      cat: "Structural",
      swali_sw: "Eleza dhana ya 'Lap Length' na kwa nini inatolewa kwenye chuma cha mradi.",
      swali_en: "Explain the concept of 'Lap Length' and why it is provided in project reinforcement.",
      muongozo: "Inatumika kuunga nondo mbili ili kuhamisha mzigo (stress transfer).",
      jibu_en: "Lap length is the overlap provided when joining two bars to ensure continuous stress transfer. Since standard bars are $12 \text{m}$, lapping is necessary; usually $40\text{--}50 \times$ the bar diameter."
    },
    {
      id: 19,
      cat: "Structural",
      swali_sw: "'Development Length' ($L_d$) ni nini na tofauti yake na 'Lap Length'?",
      swali_en: "What is 'Development Length' ($L_d$) and how does it differ from 'Lap Length'?",
      muongozo: "Ld inahusu kujishikiza kwa nondo kwenye zege (anchorage).",
      jibu_en: "Development length is the minimum embedment required to anchor a bar into concrete to develop full stress. While lap length joins two bars, $L_d$ anchors a single bar into a support like a beam-column junction."
    },
    {
      id: 20,
      cat: "Concrete",
      swali_sw: "'Water-Cement Ratio' ina athari gani kwenye nguvu (strength) na 'workability' ya zege?",
      swali_en: "How does the 'Water-Cement Ratio' affect the strength and workability of concrete?",
      muongozo: "Uwiano huu ni kinyume (inversely proportional) na nguvu ya zege.",
      jibu_en: "A higher W/C ratio increases workability but decreases compressive strength due to increased porosity. The goal is to find the minimum water that allows full compaction."
    },
    {
      id: 21,
      cat: "Concrete",
      swali_sw: "'Bulking of Sand' ni nini na inaathiri vipi michanganyiko ya zege?",
      swali_en: "What is 'Bulking of Sand' and how does it affect concrete mixes?",
      muongozo: "Mchanga wenye unyevu huongezeka ujazo.",
      jibu_en: "Bulking is the increase in sand volume due to moisture films pushing particles apart. If not adjusted in volumetric mixes, it leads to insufficient sand, making the mix harsh and reducing yield."
    },
    {
      id: 22,
      cat: "Structural",
      swali_sw: "Eleza matumizi ya 'Stirrups' kwenye mihimili (beams) na 'Ties' kwenye nguzo (columns).",
      swali_en: "Explain the use of 'Stirrups' in beams and 'Ties' in columns.",
      muongozo: "Stirrups huzuia 'Shear Force', Ties huzuia 'Buckling'.",
      jibu_en: "Stirrups resist shear forces and hold bars in place. Ties prevent vertical bars from buckling under axial loads and confine the concrete core, improving ductility."
    },
    {
      id: 23,
      cat: "Concrete",
      swali_sw: "Ni sababu gani zinazoweza kusababisha 'Honeycombing' kwenye zege?",
      swali_en: "What are the factors that can cause 'Honeycombing' in concrete?",
      muongozo: "Matundu yanayotokea kutokana na vibration ndogo.",
      jibu_en: "Honeycombing is caused by insufficient vibration, poor aggregate grading, or leaky formwork allowing slurry to escape. It compromises structural integrity and invites corrosion."
    },
    {
      id: 24,
      cat: "Concrete",
      swali_sw: "'Initial Setting Time' ya saruji ni nini na kwanini ni muhimu kwenye tovuti?",
      swali_en: "What is the 'Initial Setting Time' of cement and why is it important on a construction site?",
      muongozo: "Muda huu kwa OPC ni dakika 30.",
      jibu_en: "It is the period when cement paste starts losing plasticity. All placement and finishing must be completed before this time, typically $30$ minutes, to ensure structural bond."
    },
    {
      id: 25,
      cat: "Concrete",
      swali_sw: "'Final Setting Time' ya saruji inapaswa kuwa muda gani kwa saruji ya kawaida?",
      swali_en: "What should the 'Final Setting Time' be for ordinary cement?",
      muongozo: "Isizidi dakika 600 (masaa 10).",
      jibu_en: "The final setting time is when cement has completely lost plasticity and can resist pressure. For OPC, it should not exceed $10$ hours ($600$ minutes)."
    },
    {
      id: 26,
      cat: "Concrete",
      swali_sw: "'Pre-stressed Concrete' ni nini na lini inatumiwa badala ya 'Reinforced Concrete'?",
      swali_en: "What is 'Pre-stressed Concrete' and when is it used instead of 'Reinforced Concrete'?",
      muongozo: "Inatumia 'internal compressive stresses' kuzuia mizigo ya nje.",
      jibu_en: "Pre-stressed concrete induces internal compression to counteract external tensile stresses. It is used for long-span bridges and high-rise structures where RCC would be too heavy."
    },
    {
      id: 27,
      cat: "Structural",
      swali_sw: "'Ductility' katika miundo ya zege ina maana gani na kwanini ni muhimu katika maeneo ya matetemeko?",
      swali_en: "What does 'Ductility' in concrete structures mean and why is it important in earthquake-prone areas?",
      muongozo: "Uwezo wa kujivuta bila kukatika ghafla (sudden collapse).",
      jibu_en: "Ductility is the ability to undergo large deformations before failure. In seismic zones like the Rift Valley, it allows buildings to dissipate energy, preventing catastrophic collapse."
    },
    {
      id: 28,
      cat: "Structural",
      swali_sw: "Jinsi gani unakagua ubora wa chuma (reinforcement) kinachofika kwenye tovuti?",
      swali_en: "How do you check the quality of reinforcement steel arriving on site?",
      muongozo: "Kukagua grade (mfano 500W) na TBS standards.",
      jibu_en: "I verify test certificates, check for the grade, and inspect for rust/cracks. I also send samples for Tensile Strength and Bend tests to ensure they meet TBS standards."
    },
    {
      id: 29,
      cat: "Structural",
      swali_sw: "'Working Stress Method' na 'Limit State Method' zina tofauti gani?",
      swali_en: "What is the difference between the 'Working Stress Method' and the 'Limit State Method'?",
      muongozo: "Limit State ndio mfumo wa sasa (modern design code).",
      jibu_en: "Working Stress is based on elastic theory with fixed safety factors. Limit State Method accounts for both safety and serviceability at failure, providing more economical and realistic designs."
    },
    {
      id: 30,
      cat: "Concrete",
      swali_sw: "Ni nini kifanyike ikiwa 'Concrete Cube Test' itashindwa kufikia nguvu iliyokusudiwa (fails)?",
      swali_en: "What should be done if a 'Concrete Cube Test' fails to meet the target strength?",
      muongozo: "Tumia 'Non-destructive tests' kama Rebound Hammer au Core Test.",
      jibu_en: "I would perform non-destructive tests (Rebound Hammer) or a 'Core Test' on the actual structure. If results still fail, structural strengthening or demolition may be required."
    },

    /* SECTION 3: HIGHWAY ENGINEERING & BRIDGES (31-40) */
    {
      id: 31,
      cat: "Highway",
      swali_sw: "Taja tabaka kuu za barabara ya lami (Flexible Pavement) kuanzia chini kwenda juu.",
      swali_en: "List the main layers of a flexible pavement from bottom to top.",
      muongozo: "Anzia Subgrade hadi Surfacing.",
      jibu_en: "The layers are: Subgrade (natural/improved soil), Sub-base (granular), Base course (crushed stones), Binder course, and Surfacing/Wearing course (Asphalt)."
    },
    
    {
      id: 32,
      cat: "Highway",
      swali_sw: "'Camber' ni nini na ni nini umuhimu wake katika usanifu wa barabara?",
      swali_en: "What is 'Camber' and what is its significance in road design?",
      muongozo: "Husaidia kutoa maji (drainage) ya mvua barabarani.",
      jibu_en: "Camber is the transverse slope on the road surface to drain rainwater to side drains, preventing pooling and potholes."
    },
    {
      id: 33,
      cat: "Highway",
      swali_sw: "Tofauti kati ya 'Prime Coat' na 'Tack Coat' ni nini?",
      swali_en: "What is the difference between a 'Prime Coat' and a 'Tack Coat'?",
      muongozo: "Prime Coat (kwenye base), Tack Coat (kati ya lami na lami).",
      jibu_en: "Prime Coat seals pores in a granular base and bonds it with bitumen. Tack Coat is a thin layer applied between two bituminous layers to ensure they adhere."
    },
    {
      id: 34,
      cat: "Highway",
      swali_sw: "'CBR' (California Bearing Ratio) ni nini na kwanini ni muhimu kwa udongo wa barabara?",
      swali_en: "What is 'CBR' and why is it important for road subgrade?",
      muongozo: "Kipimo cha nguvu (bearing capacity) ya udongo.",
      jibu_en: "CBR is a penetration test to evaluate the mechanical strength of subgrades. It determines the pavement thickness required; higher CBR means thinner layers."
    },
    {
      id: 35,
      cat: "Highway",
      swali_sw: "'Super-elevation' ni nini na kwanini inatolewa kwenye kona (curves)?",
      swali_en: "What is 'Super-elevation' and why is it provided on curves?",
      muongozo: "Kuinua upande wa nje (banking) kuzuia centrifugal force.",
      jibu_en: "Super-elevation raises the outer edge of a road on a curve to counteract centrifugal force, preventing vehicles from skidding or overturning."
    },
    {
      id: 36,
      cat: "Highway",
      swali_sw: "Eleza matumizi ya vifaa vya 'G7', 'G15', na 'G45' katika ujenzi wa barabara Tanzania.",
      swali_en: "Explain the use of 'G7', 'G15', and 'G45' materials in road construction in Tanzania.",
      muongozo: "G7 (subgrade), G15 (improved subgrade), G45 (sub-base).",
      jibu_en: "These are CBR classifications at 95% compaction. G7 is for subgrade ($\geq 7\%$), G15 for improved subgrade ($\geq 15\%$), and G45 for sub-base layers ($\geq 45\%$)."
    },
    {
      id: 37,
      cat: "Highway",
      swali_sw: "'Flexible Pavement' na 'Rigid Pavement' zina tofauti gani kimsingi?",
      swali_en: "What is the fundamental difference between 'Flexible Pavement' and 'Rigid Pavement'?",
      muongozo: "Huvunja mzigo kupitia 'grain contact' (Flexible) vs 'slab action' (Rigid).",
      jibu_en: "Flexible (bituminous) pavements transfer loads through grain-to-grain contact and deform under stress. Rigid (concrete) act as structural slabs distributing loads over a wide area."
    },
    {
      id: 38,
      cat: "Bridge",
      swali_sw: "'Expansion Joints' katika madaraja zina kazi gani?",
      swali_en: "What is the function of 'Expansion Joints' in bridges?",
      muongozo: "Kuruhusu kutanuka na kusinyaa (thermal expansion/contraction).",
      jibu_en: "They accommodate thermal expansion and contraction and allow for structural movement due to traffic, preventing cracks or buckling in the deck."
    },
    {
      id: 39,
      cat: "Highway",
      swali_sw: "'Culvert' ni nini na taja aina mbili zinazotumika zaidi Tanzania.",
      swali_en: "What is a 'Culvert' and name two common types used in Tanzania?",
      muongozo: "Bomba au box la kupitisha maji chini ya barabara.",
      jibu_en: "A culvert allows water to flow under a road. Common types in Tanzania are Pipe Culverts (concrete) and Box Culverts (RCC)."
    },
    {
      id: 40,
      cat: "Highway",
      swali_sw: "'Bitumen' inayotumika Tanzania mara nyingi ni ya daraja gani (Penetration Grade)?",
      swali_en: "What penetration grade of 'Bitumen' is commonly used in Tanzania?",
      muongozo: "Kawaida ni 60/70 au 80/100.",
      jibu_en: "The most common grades are 60/70 and 80/100, indicating the penetration depth in tenths of a millimeter at a standard temperature."
    },

    /* SECTION 4: PUBLIC PROCUREMENT & CONTRACT MANAGEMENT (41-50) */
    {
      id: 41,
      cat: "Procurement",
      swali_sw: "Sheria ya Ununuzi wa Umma (PPA) ya 2023 inatofautiana vipi na sheria ya zamani?",
      swali_en: "How does the Public Procurement Act (PPA) of 2023 differ from the previous law?",
      muongozo: "Inasisitiza matumizi ya NeST na Local Content.",
      jibu_en: "PPA 2023 digitalizes all processes through NeST, promotes local content, and enhances transparency and accountability in asset disposal compared to the previous law."
    },
    {
      id: 42,
      cat: "Procurement",
      swali_sw: "'NeST' (National e-Procurement System of Tanzania) ni nini?",
      swali_en: "What is 'NeST'?",
      muongozo: "Mfumo mpya wa kielektroniki wa ununuzi wa umma.",
      jibu_en: "NeST is the web-based portal used by all procuring entities in Tanzania to conduct procurement online, from planning to contract management."
    },
    {
      id: 43,
      cat: "Management",
      swali_sw: "Eleza maana ya 'Value for Money' (VfM) katika mradi wa ujenzi wa umma.",
      swali_en: "Explain the meaning of 'Value for Money' (VfM) in public construction projects.",
      muongozo: "VfM sio bei ya chini tu, bali ubora dhidi ya gharama (lifecycle cost).",
      jibu_en: "VfM is the achievement of the best outcome for users based on lifecycle cost, quality, and fitness for purpose, rather than just choosing the lowest bid."
    },
    {
      id: 44,
      cat: "Contract",
      swali_sw: "'FIDIC Red Book' na 'Yellow Book' zina tofauti gani?",
      swali_en: "What is the difference between the 'FIDIC Red Book' and the 'Yellow Book'?",
      muongozo: "Employer design (Red) vs Contractor design (Yellow).",
      jibu_en: "The Red Book is for construction where the Employer provides the design. The Yellow Book is for Design-Build, where the Contractor is responsible for both."
    },
    {
      id: 45,
      cat: "Contract",
      swali_sw: "'Variation Order' (VO) ni nini na lini inatolewa?",
      swali_en: "What is a 'Variation Order' (VO) and when is it issued?",
      muongozo: "Mabadiliko ya skopu, gharama au muda wa mradi.",
      jibu_en: "A VO is a formal document used to change the original scope, duration, or cost due to unforeseen site conditions or design revisions."
    },
    {
      id: 46,
      cat: "Contract",
      swali_sw: "'Liquidated Damages' (LD) ni nini katika mikataba?",
      swali_en: "What are 'Liquidated Damages' (LD) in contracts?",
      muongozo: "Faini kwa mkandarasi anapochelewa kumaliza kazi.",
      jibu_en: "LDs are pre-determined amounts the contractor pays the employer for each day project completion is delayed beyond the deadline."
    },
    {
      id: 47,
      cat: "Contract",
      swali_sw: "'Performance Security' ni nini na kwa nini ni muhimu?",
      swali_en: "What is 'Performance Security' and why is it important?",
      muongozo: "Dhamana (kawaida 10%) ya mkandarasi kukamilisha kazi.",
      jibu_en: "It is a financial guarantee (usually 10%) ensuring the contractor fulfills obligations. If they fail, the employer uses it to complete the work."
    },
    {
      id: 48,
      cat: "Contract",
      swali_sw: "'Defects Liability Period' (DLP) ni muda wa nini?",
      swali_en: "What is the 'Defects Liability Period' (DLP)?",
      muongozo: "Muda wa kurekebisha makosa (fixing defects) baada ya handover.",
      jibu_en: "It is a period (6-12 months) after handover where the contractor must fix any arising defects at their own cost."
    },
    {
      id: 49,
      cat: "Management",
      swali_sw: "'Bill of Quantities' (BOQ) ina umuhimu gani kwa mhandisi?",
      swali_en: "What is the importance of the 'Bill of Quantities' (BOQ) for an engineer?",
      muongozo: "Husaidia kupima kazi (measurements) na kutoa malipo (certificates).",
      jibu_en: "The BOQ provides detailed descriptions and quantities, allowing for accurate bidding, cost control, and progress payments."
    },
    {
      id: 50,
      cat: "Contract",
      swali_sw: "Jukumu la 'The Engineer' (Consultant) chini ya mkataba wa FIDIC ni nini?",
      swali_en: "What is the role of 'The Engineer' under a FIDIC contract?",
      muongozo: "Anapaswa kuwa 'Fair' kati ya mwajiri na mkandarasi.",
      jibu_en: "The Engineer acts as the employer's supervisor but must act fairly when making determinations or certifying payments between employer and contractor."
    },

    /* SECTION 5: GEOTECHNICAL ENGINEERING (51-60) */
    {
      id: 51,
      cat: "Geotech",
      swali_sw: "'Black Cotton Soil' ni nini na kwanini ni changamoto nchini Tanzania?",
      swali_en: "What is 'Black Cotton Soil' and why is it a challenge in Tanzania?",
      muongozo: "Hutanuka na kusinyaa (expansive clay).",
      jibu_en: "It is a highly expansive clay that swells when wet and shrinks when dry, causing severe cracking in foundations and pavements, requiring soil replacement."
    },
    {
      id: 52,
      cat: "Geotech",
      swali_sw: "'Sieve Analysis' inatumika kwa ajili gani?",
      swali_en: "What is 'Sieve Analysis' used for?",
      muongozo: "Kutambua ukubwa wa chembechembe (particle size).",
      jibu_en: "It is used to determine the particle size distribution of soil or aggregates, essential for classification and designing concrete mixes."
    },
    {
      id: 53,
      cat: "Geotech",
      swali_sw: "'Atterberg Limits' (LL, PL) ni nini?",
      swali_en: "What are 'Atterberg Limits'?",
      muongozo: "Vipimo vya hali ya unyevu (moisture thresholds).",
      jibu_en: "They define the moisture content thresholds where soil transitions from solid to plastic and liquid states, helping predict soil behavior."
    },
    {
      id: 54,
      cat: "Geotech",
      swali_sw: "'Soil Compaction' inapimwa vipi kwenye tovuti?",
      swali_en: "How is 'Soil Compaction' measured on site?",
      muongozo: "Tumia 'Sand Replacement Method'.",
      jibu_en: "It is measured using tests like the Sand Replacement Method to find the field dry density and compare it with the lab's Maximum Dry Density (MDD)."
    },
    {
      id: 55,
      cat: "Geotech",
      swali_sw: "'Standard Penetration Test' (SPT) ni nini?",
      swali_en: "What is the 'Standard Penetration Test' (SPT)?",
      muongozo: "Kipimo cha ugumu wa udongo (N-value).",
      jibu_en: "SPT is an in-situ test used to estimate soil bearing capacity by driving a sampler and counting the number of blows (N-value)."
    },
    {
      id: 56,
      cat: "Geotech",
      swali_sw: "'Proctor Test' inalenga kupata nini?",
      swali_en: "What does the 'Proctor Test' aim to achieve?",
      muongozo: "Kupata 'Optimum Moisture Content' (OMC).",
      jibu_en: "It determines the relationship between moisture content and dry density to find the OMC at which maximum compaction is achieved."
    },
    {
      id: 57,
      cat: "Geotech",
      swali_sw: "'Soil Stabilization' ni nini?",
      swali_en: "What is 'Soil Stabilization'?",
      muongozo: "Kuboresha udongo kwa kuongeza cement au lime.",
      jibu_en: "It is the process of improving soil properties by adding chemical binders like cement or lime, or mechanical means to increase bearing capacity."
    },
    {
      id: 58,
      cat: "Geotech",
      swali_sw: "'Retaining Wall' - Taja aina tatu.",
      swali_en: "Mention three types of 'Retaining Walls'.",
      muongozo: "Gravity, Cantilever, Gabion.",
      jibu_en: "Common types include Gravity walls, Cantilever walls, and Gabion walls (often used for slope protection in Tanzania)."
    },
    {
      id: 59,
      cat: "Geotech",
      swali_sw: "'Effective Stress' ni nini kwenye udongo?",
      swali_en: "What is 'Effective Stress' in soil?",
      muongozo: "Stress = Total Stress - Pore Water Pressure.",
      jibu_en: "Effective stress is the stress controlling soil deformation and strength; it is equal to total stress minus pore water pressure."
    },
    {
      id: 60,
      cat: "Geotech",
      swali_sw: "'Foundation Settlement' - Taja aina mbili.",
      swali_en: "Name two types of 'Foundation Settlement'.",
      muongozo: "Immediate vs Consolidation settlement.",
      jibu_en: "The two types are Immediate settlement (common in sand) and Consolidation settlement (common in clay)."
    },

    /* SECTION 6: QUICK TECHNICAL QUESTIONS (61-100) */
    {
      id: 61,
      cat: "Software",
      swali_sw: "'AutoCAD' vs 'Revit' - Tofauti ni nini?",
      swali_en: "Difference between 'AutoCAD' and 'Revit'.",
      muongozo: "Drafting vs BIM.",
      jibu_en: "AutoCAD is for 2D/3D drafting, while Revit is BIM software for intelligent, 3D parametric modeling where changes update the entire model."
    },
    {
      id: 62,
      cat: "Management",
      swali_sw: "'Gantt Chart' inatumika vipi?",
      swali_en: "How is a 'Gantt Chart' used?",
      muongozo: "Kupanga muda (scheduling) wa mradi.",
      jibu_en: "It is a visual timeline used for project scheduling, showing start/end dates and task dependencies to monitor progress."
    },
    {
      id: 63,
      cat: "Survey",
      swali_sw: "'Total Station' - Kazi yake ni nini?",
      swali_en: "What is the function of a 'Total Station'?",
      muongozo: "Hupima 'angles' na 'distances' kwa kielektroniki.",
      jibu_en: "It combines an electronic theodolite and EDM to measure angles and distances precisely in surveying."
    },
    {
      id: 64,
      cat: "Structure",
      swali_sw: "'Culvert' vs 'Bridge' - Tofauti ya span.",
      swali_en: "Difference between a 'Culvert' and a 'Bridge' based on span.",
      muongozo: "Kawaida kipimo ni 6 meters.",
      jibu_en: "Generally, structures with a span less than $6 \text{ meters}$ are culverts, while those above are bridges."
    },
    {
      id: 65,
      cat: "Hydraulic",
      swali_sw: "'Hydraulic Gradient' ni nini?",
      swali_en: "What is 'Hydraulic Gradient'?",
      muongozo: "Inahusu upotevu wa nishati (head loss) ya maji.",
      jibu_en: "It is the loss of energy (head) per unit length of water flow in a pipe or soil."
    },
    {
      id: 66,
      cat: "Bridge",
      swali_sw: "'Scour Depth' katika madaraja ni nini?",
      swali_en: "What is 'Scour Depth' in bridge design?",
      muongozo: "Mmomonyoko chini ya nguzo za daraja.",
      jibu_en: "It is the depth to which a riverbed is eroded around bridge piers during floods."
    },
    {
      id: 67,
      cat: "Structure",
      swali_sw: "'DPC' (Damp Proof Course) - Lini inatumika?",
      swali_en: "When is 'DPC' used?",
      muongozo: "Huzuia unyevu (moisture) kupanda kwenye kuta.",
      jibu_en: "It is applied at the plinth level to prevent capillary moisture from rising into the walls."
    },
    {
      id: 68,
      cat: "Management",
      swali_sw: "'Work Breakdown Structure' (WBS) ni nini?",
      swali_en: "What is 'WBS'?",
      muongozo: "Kugawa skopu ya mradi katika sehemu ndogo.",
      jibu_en: "It is the hierarchical decomposition of the project scope into manageable work packages."
    },
    {
      id: 69,
      cat: "Management",
      swali_sw: "'Critical Path Method' (CPM) ni nini?",
      swali_en: "What is 'CPM'?",
      muongozo: "Njia ya kutafta shughuli zinazoamua muda wa mradi.",
      jibu_en: "A project management technique identifying the longest sequence of dependent tasks to determine project duration."
    },
    {
      id: 70,
      cat: "Safety",
      swali_sw: "'PPE' (Personal Protective Equipment) - Taja vifaa 5.",
      swali_en: "Name 5 PPE items.",
      muongozo: "Lenga helmet, boots, na vest.",
      jibu_en: "Helmet, safety boots, high-vis vest, gloves, and goggles."
    },
    {
      id: 71,
      cat: "Geotech",
      swali_sw: "'Borehole Log' ni nini?",
      swali_en: "What is a 'Borehole Log'?",
      muongozo: "Kumbukumbu ya tabaka za udongo ardhini.",
      jibu_en: "A record of soil layers and water table levels found during site investigation."
    },
    {
      id: 72,
      cat: "Concrete",
      swali_sw: "'Concrete Admixtures' - Taja mfano.",
      swali_en: "Name an example of a concrete admixture.",
      muongozo: "Kama vile Superplasticizers.",
      jibu_en: "Superplasticizers (to increase workability without adding water) or Retarders."
    },
    {
      id: 73,
      cat: "Structure",
      swali_sw: "'Modulus of Elasticity' ya Chuma ni kiasi gani?",
      swali_en: "What is the 'Modulus of Elasticity' of Steel?",
      muongozo: "Kiwango cha kawaida ni 200 GPa.",
      jibu_en: "It is approximately $200 \text{ GPa} \ (2 \times 10^5 \text{ N/mm}^2)$."
    },
    {
      id: 74,
      cat: "Structure",
      swali_sw: "Max Bending Moment ya Simply Supported Beam yenye UDL?",
      swali_en: "Maximum Bending Moment for a Simply Supported Beam with UDL.",
      muongozo: "Formular ya moment.",
      jibu_en: "$M = wL^2 / 8$."
    },
    {
      id: 75,
      cat: "Structure",
      swali_sw: "Shear Force ya cantilever yenye mzigo (Point Load) mwishoni?",
      swali_en: "Shear Force for a cantilever with a point load at the end.",
      muongozo: "P kwa span nzima.",
      jibu_en: "Constant $P$ throughout the span."
    },
    {
      id: 76,
      cat: "Structure",
      swali_sw: "'Moment of Inertia' ya mstatili ni nini?",
      swali_en: "Moment of Inertia of a rectangle.",
      muongozo: "Formular ya Inertia.",
      jibu_en: "$I = bd^3 / 12$."
    },
    {
      id: 77,
      cat: "Concrete",
      swali_sw: "'Bulking of Sand' inakuwa kubwa kwenye unyevu kiasi gani?",
      swali_en: "Bulking of Sand vs Water Content.",
      muongozo: "Kawaida ni 4-6% water content.",
      jibu_en: "Bulking is maximum at about $4\text{--}6\%$ moisture and decreases thereafter."
    },
    {
      id: 78,
      cat: "Concrete",
      swali_sw: "'Curing Compound' ni nini?",
      swali_en: "What is a 'Curing Compound'?",
      muongozo: "Kemikali inayopakwa kuzuia unyevu kupotea.",
      jibu_en: "A liquid membrane applied to concrete to prevent moisture loss where water curing is difficult."
    },
    {
      id: 79,
      cat: "Structure",
      swali_sw: "'Pre-cast' vs 'Cast-in-situ' - Tofauti ni nini?",
      swali_en: "'Pre-cast' vs 'Cast-in-situ'.",
      muongozo: "Kiwandani vs Site.",
      jibu_en: "Pre-cast is made in a factory; Cast-in-situ is poured on the actual construction site."
    },
    {
      id: 80,
      cat: "Structure",
      swali_sw: "'Shoring' ni nini?",
      swali_en: "What is 'Shoring'?",
      muongozo: "Msaada wa muda kwa miundo isiyo imara.",
      jibu_en: "Temporary support for unstable structures or deep excavations."
    },
    {
      id: 81,
      cat: "Procurement",
      swali_sw: "Nani anahusika na usajili wa 'NeST'?",
      swali_en: "Who is involved in NeST registration?",
      muongozo: "Bidders na Procuring Entities.",
      jibu_en: "Bidders (contractors/consultants) and Procuring Entities (Government bodies)."
    },
    {
      id: 82,
      cat: "Management",
      swali_sw: "'Technical Audit' ya mradi ni nini?",
      swali_en: "What is a 'Technical Audit'?",
      muongozo: "Ukaguzi kuona kama specs na VfM vimezingatiwa.",
      jibu_en: "An inspection to verify if the project was built according to technical specs and achieved value for money."
    },
    {
      id: 83,
      cat: "Contract",
      swali_sw: "Toa mfano wa 'Force Majeure'.",
      swali_en: "Example of 'Force Majeure'.",
      muongozo: "Majanga ya asili kama mafuriko.",
      jibu_en: "Natural disasters like the 2024 floods in Tanzania or earthquakes."
    },
    {
      id: 84,
      cat: "Contract",
      swali_sw: "'Retention Money' ni nini?",
      swali_en: "What is 'Retention Money'?",
      muongozo: "Pesa (kama 5-10%) inayoshikiliwa hadi mwisho wa DLP.",
      jibu_en: "A percentage of payment held until the end of the Defects Liability Period to ensure repairs are made."
    },
    {
      id: 85,
      cat: "Contract",
      swali_sw: "'Milestone Payment' ni nini?",
      swali_en: "What is 'Milestone Payment'?",
      muongozo: "Malipo kulingana na hatua (stages) fulani.",
      jibu_en: "Payments made upon successfully completing specific predefined stages of a project."
    },
    {
      id: 86,
      cat: "Survey",
      swali_sw: "'As-built Drawings' ni michoro gani?",
      swali_en: "What are 'As-built Drawings'?",
      muongozo: "Michoro inayoonyesha uhalisia wa ujenzi ulivyoishia.",
      jibu_en: "Final drawings reflecting all changes made during the construction phase from the original design."
    },
    {
      id: 87,
      cat: "Environment",
      swali_sw: "EIA inasimamiwa na nani Tanzania?",
      swali_en: "What is 'EIA'?",
      muongozo: "NEMC.",
      jibu_en: "Environmental Impact Assessment; a study of environmental effects managed by NEMC in Tanzania."
    },
    {
      id: 88,
      cat: "Ethics",
      swali_sw: "Tafsiri 'Conflict of Interest' (Mgongano wa Maslahi).",
      swali_en: "Define 'Conflict of Interest'.",
      muongozo: "Maslahi binafsi kuingiliana na kazi.",
      jibu_en: "When an engineer's personal interest or relationships influence their professional judgment or duties."
    },
    {
      id: 89,
      cat: "Management",
      swali_sw: "'Method Statement' ni nini?",
      swali_en: "What is a 'Method Statement'?",
      muongozo: "Maelezo ya jinsi task itakavyofanyika.",
      jibu_en: "A document detailing how a specific task will be performed safely and correctly on site."
    },
    {
      id: 90,
      cat: "Structure",
      swali_sw: "'Structural Integrity' ni nini?",
      swali_en: "What is 'Structural Integrity'?",
      muongozo: "Uwezo wa jengo kubeba mizigo bila kufeli.",
      jibu_en: "The ability of a structure to support its design loads throughout its life without failure."
    },
    {
      id: 91,
      cat: "Concrete",
      swali_sw: "'Modulus of Rupture' ni nini?",
      swali_en: "What is 'Modulus of Rupture'?",
      muongozo: "Nguvu ya zege katika flexure (pinda).",
      jibu_en: "It is the flexural strength of concrete, measuring its resistance to bending."
    },
    {
      id: 92,
      cat: "Geotech",
      swali_sw: "'Permeability' ya udongo ni nini?",
      swali_en: "What is 'Permeability'?",
      muongozo: "Urahisi wa maji kupita kwenye udongo.",
      jibu_en: "The ease with which water flows through soil pores under a hydraulic gradient."
    },
    {
      id: 93,
      cat: "Geotech",
      swali_sw: "'Pore Water Pressure' ni nini?",
      swali_en: "What is 'Pore Water Pressure'?",
      muongozo: "Presha ya maji yaliyomo kwenye matundu ya udongo.",
      jibu_en: "The pressure of water held within the gaps (voids) between soil particles."
    },
    {
      id: 94,
      cat: "Structure",
      swali_sw: "'Torsion' ni nini?",
      swali_en: "What is 'Torsion'?",
      muongozo: "Mzunguko (twisting) wa mhimili.",
      jibu_en: "The twisting of a structural member due to an applied torque or rotational force."
    },
    {
      id: 95,
      cat: "Structure",
      swali_sw: "'Factor of Safety' (FoS) inamaanisha nini?",
      swali_en: "What is 'Factor of Safety'?",
      muongozo: "Uwiano wa 'ultimate strength' dhidi ya 'allowable load'.",
      jibu_en: "The ratio of ultimate strength to the allowable load to ensure structural safety beyond design limits."
    },
    {
      id: 96,
      cat: "Hydraulic",
      swali_sw: "'SUDS' inamaanisha nini?",
      swali_en: "What is 'SUDS'?",
      muongozo: "Mifumo rafiki ya drainage mijini.",
      jibu_en: "Sustainable Urban Drainage Systems; an eco-friendly approach to manage surface water runoff."
    },
    {
      id: 97,
      cat: "Concrete",
      swali_sw: "'Concrete Fatigue' ni nini?",
      swali_en: "What is 'Concrete Fatigue'?",
      muongozo: "Kufeli kwa zege kutokana na mizigo inayojirudia (cyclic loading).",
      jibu_en: "Failure of concrete under repeated cyclic loading, even if the load is below the static strength."
    },
    {
      id: 98,
      cat: "Structure",
      swali_sw: "'Expansion' vs 'Shrinkage' - Tofauti ni nini?",
      swali_en: "'Expansion' vs 'Shrinkage'.",
      muongozo: "Kutanuka (joto) vs Kusinyaa (moisture loss).",
      jibu_en: "Expansion is volume increase due to heat; Shrinkage is a decrease in volume due to moisture loss during drying."
    },
    {
      id: 99,
      cat: "Geotech",
      swali_sw: "'Grouting' ni nini?",
      swali_en: "What is 'Grouting'?",
      muongozo: "Kuziba nyufa (cracks) kwa kutumia fluid mix.",
      jibu_en: "Injecting a fluid mix (usually cement and water) into cracks or soil to fill voids and strengthen them."
    },
    {
      id: 100,
      cat: "Career",
      swali_sw: "Nini malengo yako ya baadae kama Mhandisi wa Ujenzi?",
      swali_en: "What are your 'Career Goals' as an Engineer?",
      muongozo: "Onesha nia ya kutoa mchango katika ujenzi wa nchi.",
      jibu_en: "To become a Professional Engineer (PE) registered with ERB and contribute to building sustainable and safe infrastructure in Tanzania."
    }
  ]
};

export default civilData;