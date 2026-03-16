const aiData = {
  id: "ai",
  title: "AI, Machine Learning & Data Science",
  description:
    "Strategic Evaluation: Data Science & AI Context (Tanzania). 100 advanced interview questions covering statistical foundations, ML algorithms, and local data laws.",

  etiquette: [
    {
      title: "Mathematical Clarity",
      content: "Explain formulas before applying them to real-world datasets."
    },
    {
      title: "Tanzania Context",
      content: "Relate AI concepts to local sectors like fintech (mobile money), agriculture, and health."
    },
    {
      title: "Ethical Awareness",
      content: "Reference the Personal Data Protection Act (PDPA) 2022 and responsible AI principles."
    }
  ],

  questions: [
    /* I. Mathematical and Statistical Foundations (1–15) */
    {
      id: 1,
      swali_sw: "Elezea umuhimu wa Central Limit Theorem (CLT) katika uchambuzi wa data.",
      swali_en: "Explain the relevance of the Central Limit Theorem (CLT) when analyzing mobile money transaction volumes.",
      muongozo: "Kadri sample size inavyoongezeka, sample mean inakaribia normal distribution.",
      jibu_en: "The Central Limit Theorem states that as the sample size n increases, the distribution of the sample mean will approximate a normal distribution, regardless of the population's original distribution. This allows the use of parametric tests to estimate national averages from regional samples."
    },
    {
      id: 2,
      swali_sw: "Dhana ya conditional probability inasaidia vipi kugundua utapeli (fraud)?",
      swali_en: "How does the concept of conditional probability assist in fraud detection within the Tanzanian fintech ecosystem?",
      muongozo: "Inapima uwezekano wa tukio kutokea kutokana na tukio jingine lililotangulia.",
      jibu_en: "Conditional probability, P(A|B) = P(A ∩ B) / P(B), measures the likelihood of a fraudulent transaction (A) given specific behavioral markers (B), such as a midnight transaction from a new device."
    },
    {
      id: 3,
      swali_sw: "Tofautisha kati ya correlation (uhusiano) na causation (kisababishi).",
      swali_en: "Differentiate between correlation and causation in the context of agricultural yields.",
      muongozo: "Correlation ni uhusiano wa namba; Causation ni kimoja kusababisha kingine moja kwa moja.",
      jibu_en: "Correlation measures the degree of linear association between two variables, while causation implies that one variable directly influences the other. A data scientist must control for confounding variables like rainfall to establish a causal link."
    },
    {
      id: 4,
      swali_sw: "Elezea matumizi ya Bayes' Theorem katika utambuzi wa magonjwa.",
      swali_en: "Describe the use of Bayes' Theorem in clinical diagnosis for cancer detection.",
      muongozo: "Inachanganya uwezekano wa awali (prior) na ushahidi mpya (evidence).",
      jibu_en: "Bayes' Theorem integrates prior probability with new evidence: P(H|E) = [P(E|H)P(H)] / P(E). It helps clinicians calculate the posterior probability of a disease given a positive test result."
    },
    {
      id: 5,
      swali_sw: "Nini maana ya p-values katika kufanya maamuzi ya kistatistiki?",
      swali_en: "Explain the significance of p-values in determining the success of a new tech intervention.",
      muongozo: "Ni kipimo cha kuonyesha kama matokeo yamepatikana kwa bahati au yana umuhimu wa kistatistiki.",
      jibu_en: "A p-value is the probability of obtaining results as extreme as those observed, assuming the null hypothesis is true. A p-value ≤ 0.05 typically indicates that the results are statistically significant."
    },
    {
      id: 6,
      swali_sw: "Eigenvectors na Eigenvalues ni nini?",
      swali_en: "What are Eigenvectors and Eigenvalues, and why are they used in PCA?",
      muongozo: "Eigenvectors zinaonyesha upande wa data (direction); Eigenvalues zinaonyesha ukubwa wa mabadiliko (magnitude).",
      jibu_en: "Eigenvectors represent directions of maximum variance in a dataset, while Eigenvalues represent the magnitude of that variance. PCA uses these to reduce dimensionality while preserving information."
    },
    {
      id: 7,
      swali_sw: "Elezea Bias-Variance Tradeoff.",
      swali_en: "Explain the Bias-Variance Tradeoff in the context of predicting prices.",
      muongozo: "Bias husababisha underfitting; Variance husababisha overfitting. Lengo ni kupata usawa (balance).",
      jibu_en: "Bias is error from simplistic assumptions (underfitting), while variance is error from sensitivity to training data fluctuations (overfitting). The goal is to find optimal model complexity."
    },
    {
      id: 8,
      swali_sw: "Standard deviation ni nini na ina umuhimu gani?",
      swali_en: "Define standard deviation and explain its role in assessing market volatility.",
      muongozo: "Ni kipimo cha jinsi data zilivyotawanyika kutoka kwenye wastani (mean).",
      jibu_en: "Standard deviation measures the dispersion of data points from the mean. In stock exchanges like DSE, a high standard deviation indicates high volatility and higher risk."
    },
    {
      id: 9,
      swali_sw: "Tofauti kati ya Mean, Median, na Mode ni ipi?",
      swali_en: "How do the Mean, Median, and Mode differ when analyzing income distribution?",
      muongozo: "Mean ni wastani; Median ni thamani ya kati; Mode ni inayojirudia zaidi.",
      jibu_en: "The mean is the average (sensitive to outliers); the median is the middle value (better for skewed data); the mode is the most frequent value."
    },
    {
      id: 10,
      swali_sw: "Bernoulli Distribution ni nini?",
      swali_en: "What is the Bernoulli Distribution, and how does it relate to loan default?",
      muongozo: "Inahusu jaribio lenye matokeo mawili tu (ndiyo/hapana).",
      jibu_en: "The Bernoulli distribution models a single trial with two outcomes (success/failure). In credit risk, a loan either defaults (1) or does not (0)."
    },
    {
      id: 11,
      swali_sw: "Poisson Distribution inasaidia nini katika mtandao (ISP)?",
      swali_en: "Describe the Poisson Distribution in the context of network traffic for an ISP.",
      muongozo: "Inatabiri idadi ya matukio yanayotokea ndani ya muda maalum.",
      jibu_en: "The Poisson distribution models the number of events occurring in a fixed interval. This helps ISPs manage server capacity to avoid downtime."
    },
    {
      id: 12,
      swali_sw: "Elezea Normalization Axiom katika probability.",
      swali_en: "Explain the Normalization Axiom in probability.",
      muongozo: "Jumla ya uwezekano (probabilities) wa matokeo yote lazima iwe 1.",
      jibu_en: "The Normalization Axiom states that the probability of the entire sample space is 1. All mutually exclusive outcomes must sum to exactly 1."
    },
    {
      id: 13,
      swali_sw: "Tofauti kati ya parametric na non-parametric algorithms ni ipi?",
      swali_en: "What is the difference between a parametric and a non-parametric algorithm?",
      muongozo: "Parametric huchukulia data zina mfumo maalum (functional form); Non-parametric haina dhana hiyo.",
      jibu_en: "Parametric algorithms (e.g., Linear Regression) assume a specific functional form for the data, whereas non-parametric algorithms do not make such assumptions."
    },
    {
      id: 14,
      swali_sw: "Covariance ni nini na uhusiano wake na Correlation?",
      swali_en: "Define Covariance and its relationship with Correlation.",
      muongozo: "Covariance inaonyesha mwelekeo; Correlation inaonyesha mwelekeo na nguvu ya uhusiano (standardized).",
      jibu_en: "Covariance indicates the direction of the linear relationship between variables. Correlation is the standardized version, providing a value between -1 and 1."
    },
    {
      id: 15,
      swali_sw: "Survivorship Bias maana yake nini?",
      swali_en: "Explain the concept of 'Survivorship Bias' in business research.",
      muongozo: "Ni kosa la kuangalia tu waliofanikiwa/waliobaki na kupuuza waliofeli.",
      jibu_en: "Survivorship bias occurs when the researcher focuses only on companies that 'survived' a certain period, leading to overly optimistic conclusions."
    },

    /* II. Machine Learning Foundations and Algorithms (16–40) */
    {
      id: 16,
      swali_sw: "Tofautisha Supervised, Unsupervised na Reinforcement Learning.",
      swali_en: "Differentiate between Supervised, Unsupervised, and Reinforcement Learning.",
      muongozo: "Supervised (data zenye labels); Unsupervised (kutafuta patterns); Reinforcement (kujifunza kwa zawadi/adhabu).",
      jibu_en: "Supervised: Labeled data. Unsupervised: Finding hidden patterns in unlabeled data. Reinforcement: Learning through trial and error via rewards."
    },
    {
      id: 17,
      swali_sw: "Kwanini Random Forest ni bora kuliko Decision Tree moja?",
      swali_en: "How does a Random Forest algorithm improve upon a single Decision Tree?",
      muongozo: "Inachanganya matokeo ya miti mingi kupunguza makosa ya overfitting.",
      jibu_en: "A single Decision Tree is prone to overfitting. A Random Forest builds multiple trees and averages their results (bagging), improving robustness."
    },
    {
      id: 18,
      swali_sw: "Gradient Descent ni nini?",
      swali_en: "Explain Gradient Descent and its application in training deep learning models.",
      muongozo: "Ni algorithm ya kupunguza makosa (loss function) kwa kurekebisha weights kidogo kidogo.",
      jibu_en: "Gradient Descent is an optimization algorithm used to minimize a model's loss function by iteratively adjusting weights during training."
    },
    {
      id: 19,
      swali_sw: "Tofauti kati ya L1 (Lasso) na L2 (Ridge) regularization.",
      swali_en: "What is the difference between L1 (Lasso) and L2 (Ridge) regularization?",
      muongozo: "L1 hufuta features zisizo na maana (zero coefficients); L2 hupunguza uzito wa features zote.",
      jibu_en: "L1 adds a penalty equal to the absolute value of coefficients (feature selection). L2 adds a penalty equal to the square of magnitude."
    },
    {
      id: 20,
      swali_sw: "CNN inafanya kazi gani katika utambuzi wa malaria?",
      swali_en: "Describe the architecture of a CNN and its use in malaria diagnosis.",
      muongozo: "Inatumia 'filters' kutambua picha (visual patterns) kama vimelea kwenye damu.",
      jibu_en: "CNNs consist of convolutional layers, pooling layers, and fully connected layers. In medical AI, they recognize parasites in images of blood smears."
    },
    {
      id: 21,
      swali_sw: "Transfer Learning ni nini na kwanini ni muhimu Afrika?",
      swali_en: "What is Transfer Learning, and why is it crucial for African-centric medical AI?",
      muongozo: "Ni kutumia model iliyofundishwa tayari na kuiboresha kwa data ndogo za hapa nyumbani.",
      jibu_en: "Transfer Learning involves fine-tuning a pre-trained model on a smaller dataset, allowing adaptation to local conditions with less data."
    },
    {
      id: 22,
      swali_sw: "Overfitting ni nini na unazuiaje?",
      swali_en: "Explain the concept of 'Overfitting' and how to combat it.",
      muongozo: "Model kukariri data za mazoezi badala ya kuelewa pattern. Zuia kwa cross-validation na regularization.",
      jibu_en: "Overfitting occurs when a model learns noise in the training data. It is combated via cross-validation, regularization, and feature selection."
    },
    {
      id: 23,
      swali_sw: "Confusion Matrix ni nini?",
      swali_en: "What is a 'Confusion Matrix,' and what metrics can be derived from it?",
      muongozo: "Ni jedwali linaloonyesha usahihi wa model kwa kulinganisha ukweli na utabiri.",
      jibu_en: "It compares actual vs. predicted values. Metrics derived include Precision, Recall, Accuracy, and the F1-Score."
    },
    {
      id: 24,
      swali_sw: "Tofautisha Precision na Recall katika screening ya TB.",
      swali_en: "Define 'Precision' and 'Recall' in the context of a TB screening AI.",
      muongozo: "Precision ni usahihi wa majibu chanya; Recall ni uwezo wa kupata wagonjwa wote waliopo.",
      jibu_en: "Precision: Accuracy of positive predictions. Recall: Ability to find all positive cases. High Recall is prioritized in health to avoid missing patients."
    },
    {
      id: 25,
      swali_sw: "Feature Engineering ni nini?",
      swali_en: "What is 'Feature Engineering,' and provide an example.",
      muongozo: "Ni kutengeneza vigezo vipya kutoka kwenye data ghafi ili kusaidia model kuelewa zaidi.",
      jibu_en: "Transforming raw data into features. Example: Using 'Transaction Time' to calculate 'Nighttime Ratio' for fraud signals."
    },
    {
      id: 26,
      swali_sw: "Tofauti kati ya Bagging na Boosting.",
      swali_en: "Explain the difference between Bagging and Boosting.",
      muongozo: "Bagging hufanya kazi kwa usawa (parallel); Boosting hufanya kazi kwa mfululizo (sequential).",
      jibu_en: "Bagging reduces variance by building models in parallel. Boosting reduces bias by building models sequentially (correcting previous errors)."
    },
    {
      id: 27,
      swali_sw: "SVM inafanya kazi gani kwenye data zisizo za mstari (non-linear)?",
      swali_en: "What is a Support Vector Machine (SVM), and how does it handle non-linear data?",
      muongozo: "Inatumia 'kernel trick' kupeleka data kwenye dimension ya juu zaidi ili kuzigawa.",
      jibu_en: "SVM finds the hyperplane that separates classes. For non-linear data, it uses the 'kernel trick' to map data into higher-dimensional spaces."
    },
    {
      id: 28,
      swali_sw: "k-Means Clustering inafanya kazi gani?",
      swali_en: "Describe k-Means Clustering and its use in market segmentation.",
      muongozo: "Inagawa data katika makundi (clusters) kulingana na kufanana kwao.",
      jibu_en: "k-Means groups data into k clusters based on similarity. It helps businesses segment customers based on spending patterns."
    },
    {
      id: 29,
      swali_sw: "Elbow Method inatumika kwa ajili gani?",
      swali_en: "What is the 'Elbow Method'?",
      muongozo: "Inatumika kupata idadi bora ya makundi (k) katika clustering.",
      jibu_en: "A heuristic used to determine the optimal number of clusters (k) by plotting the sum of squared distances."
    },
    {
      id: 30,
      swali_sw: "Elezea Bias-Variance Tradeoff kwa picha (visual).",
      swali_en: "Explain the 'Bias-Variance Tradeoff' visually.",
      muongozo: "Fikiria target ya bullseye; lengo ni kuwa katikati (low bias) na kundi moja (low variance).",
      jibu_en: "Visualized as a bullseye: Low bias/low variance hits the center consistently; high variance is scattered; high bias is far from center."
    },
    {
      id: 31,
      swali_sw: "Kwanini Logistic Regression inaitwa 'Regression'?",
      swali_en: "Define 'Logistic Regression' and why its name includes 'Regression'.",
      muongozo: "Inatabiri uwezekano (probability) wa 0 hadi 1 kabla ya kuamua kundi (classification).",
      jibu_en: "It models probability using a sigmoid function. It's called regression because it estimates a continuous probability value before thresholding."
    },
    {
      id: 32,
      swali_sw: "Neural Networks zina sehemu gani kuu tatu?",
      swali_en: "What are 'Neural Networks,' and what are their three main layers?",
      muongozo: "Input layer, Hidden layers, na Output layer.",
      jibu_en: "Algorithms inspired by the brain. Layers: Input (ingestion), Hidden (processing), and Output (final prediction)."
    },
    {
      id: 33,
      swali_sw: "Deep Learning ni nini?",
      swali_en: "What is 'Deep Learning'?",
      muongozo: "Ni tawi la ML linalotumia neural networks zenye tabaka (layers) nyingi sana.",
      jibu_en: "A subfield of ML focusing on neural networks with many hidden layers for automatic feature extraction."
    },
    {
      id: 34,
      swali_sw: "Kazi ya Activation Functions (ReLU/Sigmoid) ni nini?",
      swali_en: "Explain 'Activation Functions' like ReLU and Sigmoid.",
      muongozo: "Zinaleta 'non-linearity' kwenye mfumo ili model iweze kuelewa patterns ngumu.",
      jibu_en: "They introduce non-linearity. ReLU is common in hidden layers; Sigmoid is used for binary output probabilities."
    },
    {
      id: 35,
      swali_sw: "Batch Normalization inasaidia nini?",
      swali_en: "What is 'Batch Normalization'?",
      muongozo: "Inarekebisha inputs za kila layer ili kufanya training iwe ya haraka na imara.",
      jibu_en: "A technique to normalize inputs to each layer, stabilizing and accelerating the training process."
    },
    {
      id: 36,
      swali_sw: "Dropout maana yake nini kwenye Neural Networks?",
      swali_en: "Describe 'Dropout' in neural network training.",
      muongozo: "Ni kuzima baadhi ya neurons kwa bahati wakati wa training ili kuzuia overfitting.",
      jibu_en: "A regularization technique where neurons are randomly 'dropped' during training to prevent over-reliance on specific paths."
    },
    {
      id: 37,
      swali_sw: "Tofautisha SGD na Batch Gradient Descent.",
      swali_en: "What is 'Stochastic Gradient Descent' (SGD) vs. 'Batch Gradient Descent'?",
      muongozo: "Batch inatumia data zote mara moja; SGD inatumia sample moja moja kwa haraka zaidi.",
      jibu_en: "Batch uses the entire dataset per iteration (slow); SGD uses a single random sample (fast but noisy)."
    },
    {
      id: 38,
      swali_sw: "Backpropagation inafanya nini?",
      swali_en: "Explain the concept of 'Backpropagation.'",
      muongozo: "Ni algorithm ya kurudisha makosa nyuma ili kurekebisha weights za model.",
      jibu_en: "The algorithm for training neural networks where output error is propagated backward to update weights appropriately."
    },
    {
      id: 39,
      swali_sw: "Autoencoder ni nini?",
      swali_en: "What is an 'Autoencoder'?",
      muongozo: "Ni neural network inayojifunza kubana data (compress) na kisha kuzirudisha (reconstruct).",
      jibu_en: "An unsupervised neural network that learns to compress input into a latent space and then reconstructs it."
    },
    {
      id: 40,
      swali_sw: "PCA ni nini kwa ufupi?",
      swali_en: "Define 'Principal Component Analysis' (PCA) simply.",
      muongozo: "Ni njia ya kupunguza idadi ya vigezo (dimensionality reduction) huku ukibakiza habari muhimu.",
      jibu_en: "A dimensionality reduction technique that transforms a large set of variables into a smaller one containing most of the information."
    },

    /* III. Data Engineering, SQL, and Infrastructure (41–65) */
    {
      id: 41,
      swali_sw: "Primary Key na Foreign Key zina tofauti gani?",
      swali_en: "What is a 'Primary Key' vs. a 'Foreign Key'?",
      muongozo: "Primary inatambulisha record kipekee; Foreign inaunganisha na table nyingine.",
      jibu_en: "Primary Key uniquely identifies each record. Foreign Key links two tables by referencing a primary key in another table."
    },
    {
      id: 42,
      swali_sw: "Andika SQL query ya kupata mshahara wa pili kwa ukubwa.",
      swali_en: "Write a SQL query to find the second-highest salary.",
      muongozo: "Tumia subquery au LIMIT na OFFSET.",
      jibu_en: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
    },
    {
      id: 43,
      swali_sw: "Elezea sifa za 'ACID' kwenye database.",
      swali_en: "Explain the 'ACID' properties in database transactions.",
      muongozo: "Atomicity, Consistency, Isolation, na Durability. Muhimu kwa miamala ya pesa.",
      jibu_en: "Critical for mobile money. Atomicity (all-or-nothing), Consistency (validity), Isolation (safety), and Durability (persistence)."
    },
    {
      id: 44,
      swali_sw: "Tofauti kati ya DELETE na TRUNCATE.",
      swali_en: "Differentiate between 'DELETE' and 'TRUNCATE' in SQL.",
      muongozo: "DELETE hufuta mstari mmoja mmoja; TRUNCATE hufuta table nzima kwa mkupuo.",
      jibu_en: "DELETE removes rows one by one (loggable); TRUNCATE removes all rows at once (faster, reset identity)."
    },
    {
      id: 45,
      swali_sw: "Data Wrangling maana yake nini?",
      swali_en: "What is 'Data Wrangling' or 'Data Munging'?",
      muongozo: "Ni mchakato wa kusafisha na kubadilisha data ghafi kuwa safi kwa ajili ya uchambuzi.",
      jibu_en: "The process of cleaning, transforming, and mapping raw data into a format suitable for downstream analysis."
    },
    {
      id: 46,
      swali_sw: "Database Normalization ni nini?",
      swali_en: "Explain 'Normalization' in database design (1NF, 2NF, 3NF).",
      muongozo: "Ni kupanga tables ili kupunguza urudiaji wa data (redundancy).",
      jibu_en: "Organizing tables to minimize redundancy. 1NF: Atomic values; 2NF: No partial dependencies; 3NF: No transitive dependencies."
    },
    {
      id: 47,
      swali_sw: "CTE (Common Table Expression) ni nini?",
      swali_en: "What is a 'Common Table Expression' (CTE) in SQL?",
      muongozo: "Ni kama table ya muda (temporary) inayotengenezwa ndani ya query ili iweze kusomeka kirahisi.",
      jibu_en: "A temporary named result set existing only during a single query execution, improving code readability."
    },
    {
      id: 48,
      swali_sw: "Tofauti kati ya JOIN na UNION.",
      swali_en: "Describe the difference between a 'JOIN' and a 'UNION.'",
      muongozo: "JOIN huunganisha 'pembeni' (columns); UNION huunganisha 'chini' (rows).",
      jibu_en: "JOIN combines columns from two tables based on a relation. UNION combines rows of two SELECT statements."
    },
    {
      id: 49,
      swali_sw: "Window Functions ni nini kwenye SQL?",
      swali_en: "What are 'Window Functions' in SQL, and provide an example.",
      muongozo: "Zinafanya hesabu kwenye kundi la mstari bila kupoteza mstari mmoja mmoja (mfano: RANK).",
      jibu_en: "Calculations across rows related to the current row. Example: RANK() OVER (ORDER BY salary DESC)."
    },
    {
      id: 50,
      swali_sw: "Stored Procedure ni nini?",
      swali_en: "What is a 'Stored Procedure'?",
      muongozo: "Ni kodi ya SQL iliyohifadhiwa ili iweze kuitwa na kutumika mara nyingi.",
      jibu_en: "Prepared SQL code that can be saved and reused for consistent execution of business logic."
    },
    {
      id: 51,
      swali_sw: "ETL maana yake nini?",
      swali_en: "Define 'ETL' and its significance.",
      muongozo: "Extract (Toa), Transform (Badili), Load (Hifadhi). Muhimu kwa kuhamisha data kwenda warehouse.",
      jibu_en: "Extract, Transform, Load. Process of moving data from operational sources into a data warehouse for analysis."
    },
    {
      id: 52,
      swali_sw: "Tofauti ya RDBMS na DBMS.",
      swali_en: "Explain 'RDBMS' vs. 'DBMS.'",
      muongozo: "DBMS ni mfumo wa data; RDBMS ni mfumo unaotumia tables zenye uhusiano.",
      jibu_en: "DBMS manages data files. RDBMS organizes data into related tables using shared keys (SQL standard)."
    },
    {
      id: 53,
      swali_sw: "Subquery ni nini?",
      swali_en: "What is a 'Subquery,' and what are its types?",
      muongozo: "Ni query iliyo ndani ya query nyingine.",
      jibu_en: "A query nested inside another. Types include single-row, multi-row, and correlated subqueries."
    },
    {
      id: 54,
      swali_sw: "Cloud Computing inasaidia nini startups?",
      swali_en: "Describe 'Cloud Computing' and its benefit to tech startups.",
      muongozo: "Kukodisha rasilimali za kompyuta kwenye internet badala ya kununua servers zako.",
      jibu_en: "On-demand computing access over the internet. Allows startups to scale without heavy upfront hardware investment."
    },
    {
      id: 55,
      swali_sw: "TensorFlow ni nini?",
      swali_en: "What is 'TensorFlow'?",
      muongozo: "Ni library iliyotengenezwa na Google kwa ajili ya kuunda mifumo ya deep learning.",
      jibu_en: "Open-source platform by Google for numerical computation and building large-scale deep learning models."
    },
    {
      id: 56,
      swali_sw: "Lini unapaswa kutumia NoSQL badala ya SQL?",
      swali_en: "Explain 'NoSQL' and when it might be preferred over SQL.",
      muongozo: "Inatumika kwa data zisizo na mfumo maalum (unstructured) na zinazohitaji kubadilika haraka.",
      jibu_en: "Non-relational databases for unstructured data. Preferred for real-time apps where the data schema is dynamic."
    },
    {
      id: 57,
      swali_sw: "Data Warehouse ni nini?",
      swali_en: "What is a 'Data Warehouse'?",
      muongozo: "Ni ghala kuu la data lililokusanywa kutoka vyanzo vingi kwa ajili ya kuripoti (reporting).",
      jibu_en: "Centralized repository storing integrated data from multiple sources for historical analysis and reporting."
    },
    {
      id: 58,
      swali_sw: "Tofautisha OLTP na OLAP.",
      swali_en: "Define 'OLTP' and 'OLAP.'",
      muongozo: "OLTP ni kwa ajili ya miamala ya kila siku; OLAP ni kwa ajili ya uchambuzi wa data.",
      jibu_en: "OLTP: High-speed transactions (e.g., mobile money). OLAP: Complex historical queries and reporting (e.g., yearly analytics)."
    },
    {
      id: 59,
      swali_sw: "Edge Computing inasaidia nini maeneo ya vijijini?",
      swali_en: "What is 'Edge Computing'?",
      muongozo: "Kufanya uchambuzi wa data karibu na kifaa kilipo badala ya kupeleka cloud mbali.",
      jibu_en: "Processing data closer to the source (e.g., sensor) to handle poor connectivity or reduce latency."
    },
    {
      id: 60,
      swali_sw: "Containerization (Docker) ni nini?",
      swali_en: "Explain 'Containerization' (e.g., Docker).",
      muongozo: "Kufunga app na kila kitu inachohitaji kwenye paketi moja ili ifanye kazi popote.",
      jibu_en: "Packaging an app and its dependencies into a single container for consistent execution across environments."
    },
    {
      id: 61,
      swali_sw: "Model Deployment ni nini?",
      swali_en: "What is 'Model Deployment'?",
      muongozo: "Ni mchakato wa kuingiza model iliyofundishwa kwenye mfumo halisi (production) ili ianze kufanya kazi.",
      jibu_en: "Integrating a trained model into a production environment to make real-time predictions for users."
    },
    {
      id: 62,
      swali_sw: "Scalability maana yake nini kwenye database?",
      swali_en: "Describe 'Scalability' in a database context.",
      muongozo: "Uwezo wa mfumo kuhimili ongezeko la kazi (vertical au horizontal).",
      jibu_en: "Ability to handle increasing work by adding power to a server (vertical) or adding more servers (horizontal)."
    },
    {
      id: 63,
      swali_sw: "API ni nini?",
      swali_en: "What is an 'API' (Application Programming Interface)?",
      muongozo: "Ni 'daraja' linaloruhusu apps mbili kuongea na kupeana data.",
      jibu_en: "Protocols allowing applications to communicate, e.g., apps requesting credit scores from a central bank system."
    },
    {
      id: 64,
      swali_sw: "Latency maana yake nini?",
      swali_en: "Define 'Latency.'",
      muongozo: "Ni ule muda wa kuchelewa kati ya kutuma ombi na kupata jibu.",
      jibu_en: "The delay between a request and its response. Crucial for systems like real-time fraud detection."
    },
    {
      id: 65,
      swali_sw: "Microservices Architecture ni nini?",
      swali_en: "What is 'Microservices Architecture'?",
      muongozo: "Kujenga mfumo mmoja mkubwa kama mkusanyiko wa apps ndogo zinazojitegemea.",
      jibu_en: "Design approach where an app is built as independent services communicating via APIs for better maintenance."
    },

    /* IV. NLP, LLMs, and Generative AI (66–80) */
    {
      id: 66,
      swali_sw: "Attention Mechanism ni nini?",
      swali_en: "Explain the 'Attention Mechanism' in Transformer models.",
      muongozo: "Inaruhusu model kuzingatia maneno muhimu zaidi kwenye sentensi.",
      jibu_en: "Allows a model to weigh the importance of different words in a sentence relative to each other."
    },
    {
      id: 67,
      swali_sw: "RAG (Retrieval-Augmented Generation) inafanya nini?",
      swali_en: "What is 'Retrieval-Augmented Generation' (RAG)?",
      muongozo: "Inachanganya LLM na vyanzo vya nje vya habari ili kuzuia kutoa majibu ya uongo.",
      jibu_en: "Combines an LLM with external knowledge retrieval to significantly reduce 'hallucinations' and provide current info."
    },
    {
      id: 68,
      swali_sw: "Few-Shot Learning maana yake nini?",
      swali_en: "Describe 'Few-Shot Learning' in the context of LLMs.",
      muongozo: "Uwezo wa AI kujifunza kazi mpya kwa kupewa mifano michache tu.",
      jibu_en: "The ability of an LLM to perform a task after being given only a small number of examples in the prompt."
    },
    {
      id: 69,
      swali_sw: "Hallucinations ni nini na unazizuiaje?",
      swali_en: "What are 'Hallucinations' in LLMs, and how can they be mitigated?",
      muongozo: "AI kutoa majibu ya uongo yanayofanana na ukweli. Zuia kwa RAG na prompts bora.",
      jibu_en: "Incorrect or nonsensical generated info. Mitigated via RAG, grounding prompts, and temperature control."
    },
    {
      id: 70,
      swali_sw: "Tofautisha Fine-Tuning na Pre-Training.",
      swali_en: "Explain 'Fine-Tuning' vs. 'Pre-Training.'",
      muongozo: "Pre-training ni kujifunza kwa ujumla; Fine-tuning ni kubobea kwenye kazi maalum.",
      jibu_en: "Pre-training: Learning patterns from massive data. Fine-tuning: Adapting to a specific domain (e.g., legal or medical)."
    },
    {
      id: 71,
      swali_sw: "Self-Attention na Cross-Attention zina tofauti gani?",
      swali_en: "What is 'Self-Attention' vs. 'Cross-Attention'?",
      muongozo: "Self inaangalia sentensi moja; Cross inaunganisha sentensi mbili tofauti.",
      jibu_en: "Self: Relates parts of same sequence. Cross: Relates parts of two different sequences (like in translation)."
    },
    {
      id: 72,
      swali_sw: "Tokenization inamaanisha nini kwenye Swahili NLP?",
      swali_en: "Define 'Tokenization' and its impact on Swahili NLP.",
      muongozo: "Kukata maneno kuwa vipande vidogo (tokens). Muhimu kwa Kiswahili chenye viambishi vingi.",
      jibu_en: "Breaking text into tokens. Must handle Swahili's agglutinative nature (prefixes and suffixes) effectively."
    },
    {
      id: 73,
      swali_sw: "RLHF ni nini?",
      swali_en: "What is 'RLHF' (Reinforcement Learning from Human Feedback)?",
      muongozo: "Kufundisha AI kwa kutumia binadamu kupanga majibu yaliyo bora.",
      jibu_en: "Technique where humans rank outputs to align the model with human preferences, safety, and helpfulness."
    },
    {
      id: 74,
      swali_sw: "Embeddings maana yake nini?",
      swali_en: "Describe 'Embeddings' in LLMs.",
      muongozo: "Ni namba zinazowakilisha maneno ili maneno yanayofanana yawe karibu.",
      jibu_en: "Numerical (vector) representations where semantically similar words are close in high-dimensional space."
    },
    {
      id: 75,
      swali_sw: "Generative AI ni nini?",
      swali_en: "What is 'Generative AI'?",
      muongozo: "Ni AI zinazoweza kutengeneza vitu vipya kama picha, maandishi au sauti.",
      jibu_en: "Models that create new content (text, images, music) by learning patterns from massive training datasets."
    },
    {
      id: 76,
      swali_sw: "Prompt Engineering ni nini?",
      swali_en: "Explain 'Prompt Engineering.'",
      muongozo: "Ni sanaa ya kuandika maelekezo kwa AI ili kupata jibu bora zaidi.",
      jibu_en: "Crafting inputs to an LLM to elicit the most accurate, useful, and formatted responses."
    },
    {
      id: 77,
      swali_sw: "Agentic AI inafanya nini?",
      swali_en: "What is 'Agentic AI'?",
      muongozo: "AI inayofanya kazi kama msaidizi anayejitegemea na kutumia tools kutatua tatizo.",
      jibu_en: "Models acting as autonomous agents—breaking goals into tasks and using external tools to execute them."
    },
    {
      id: 78,
      swali_sw: "Diffusion Models zinatumika kwa ajili gani?",
      swali_en: "Describe 'Diffusion Models' and their primary use.",
      muongozo: "Zinatumika zaidi kutengeneza picha kutoka kwenye maandishi.",
      jibu_en: "Generative models creating high-quality images by reversing a process of adding random noise."
    },
    {
      id: 79,
      swali_sw: "Constitutional AI ni nini?",
      swali_en: "What is 'Constitutional AI'?",
      muongozo: "Kufundisha AI kufuata seti ya sheria (katiba) ili iwe salama.",
      jibu_en: "Training AI to follow high-level principles to ensure helpful and safe behavior without constant human monitoring."
    },
    {
      id: 80,
      swali_sw: "LLM ni nini kwa kifupi?",
      swali_en: "Define 'Large Language Models' (LLMs).",
      muongozo: "Model kubwa za lugha zenye vigezo (parameters) mabilioni.",
      jibu_en: "Models with billions of parameters trained to understand, predict, and generate human language."
    },

    /* V. Ethics, Law, and Social Context (81–100) */
    {
      id: 81,
      swali_sw: "PDPA 2022 ni sheria gani?",
      swali_en: "What is the 'Personal Data Protection Act (PDPA) 2022'?",
      muongozo: "Sheria mama ya ulinzi wa data binafsi nchini Tanzania.",
      jibu_en: "The legal framework for the collection, use, and storage of personal data in Tanzania, enacted in 2022."
    },
    {
      id: 82,
      swali_sw: "Haki ya kuomba mwanadamu aingilie kati (Human Intervention) ni ipi?",
      swali_en: "Explain the 'Right to Human Intervention' under the PDPA.",
      muongozo: "Haki ya mteja kukataa maamuzi ya kompyuta pekee (mfano: kukataliwa mkopo na AI).",
      jibu_en: "Individual right to request that automated decisions are reviewed by a human to ensure fairness and accuracy."
    },
    {
      id: 83,
      swali_sw: "Taja misingi ya ulinzi wa data (Section 5).",
      swali_en: "What are the 'Principles of Data Protection' in the PDPA?",
      muongozo: "Uhalali, malengo maalum, usalama, na usahihi wa data.",
      jibu_en: "Lawfulness, purpose limitation, data minimization, accuracy, security, and restricted cross-border transfers."
    },
    {
      id: 84,
      swali_sw: "Data Binafsi Nyeti ni zipi kisheria?",
      swali_en: "How does the PDPA define 'Sensitive Personal Data'?",
      muongozo: "Data za afya, imani, kabila, na vinasaba (biometrics).",
      jibu_en: "Data on race, ethnic origin, political opinions, religious beliefs, health status, genetic or biometric data."
    },
    {
      id: 85,
      swali_sw: "Kazi ya PDPC ni nini?",
      swali_en: "Describe the 'Personal Data Protection Commission' (PDPC) and its role.",
      muongozo: "Kusimamia utekelezaji wa sheria na kusajili wadhibiti wa data (controllers).",
      jibu_en: "Regulatory body for monitoring compliance, investigating complaints, and registering data controllers in Tanzania."
    },
    {
      id: 86,
      swali_sw: "Algorithmic Bias inaweza kuleta athari gani?",
      swali_en: "What is 'Algorithmic Bias,' and how can it impact Tanzanian society?",
      muongozo: "Upendeleo kwenye matokeo ya AI unaosababishwa na data mbovu. Inaweza kuleta ubaguzi.",
      jibu_en: "Prejudiced results from biased data. Could lead to unfair credit scoring or medical neglect for certain groups."
    },
    {
      id: 87,
      swali_sw: "Explainability ni nini kwenye AI?",
      swali_en: "Explain 'Explainability' in AI.",
      muongozo: "Uwezo wa AI kuelezea kwanini imetoa jibu fulani (muhimu kwa uwajibikaji).",
      jibu_en: "Ability to communicate the reasons behind AI decisions, crucial for accountability and trust under the PDPA."
    },
    {
      id: 88,
      swali_sw: "Data Sovereignty maana yake nini?",
      swali_en: "What is 'Data Sovereignty'?",
      muongozo: "Dhana kuwa data inapaswa kufuata sheria za nchi ilipokusanywa.",
      jibu_en: "Idea that data is subject to laws where collected. PDPA restricts cross-border transfer without adequate safeguards."
    },
    {
      id: 89,
      swali_sw: "Changamoto ya AI kwenye ajira Tanzania ni ipi?",
      swali_en: "Describe the ethical challenge of 'Job Displacement' by AI.",
      muongozo: "AI kuchukua kazi za watu, lakini pia inatengeneza kazi mpya za kisasa.",
      jibu_en: "AI risks displacing low-skilled workers but creates high-skilled roles like data analysts and ML engineers."
    },
    {
      id: 90,
      swali_sw: "AI inasaidia vipi kuhifadhi Kiswahili?",
      swali_en: "What is the role of AI in 'Linguistic Preservation' for Swahili?",
      muongozo: "Kutengeneza mifumo inayoelewa Kiswahili sanifu na cha mtaani.",
      jibu_en: "Building NLP tools and datasets for Swahili to ensure its digital survival and inclusion in future tech."
    },
    {
      id: 91,
      swali_sw: "Data Ethics maana yake nini?",
      swali_en: "Define 'Data Ethics.'",
      muongozo: "Ni misingi ya kimaadili ya kutumia data kwa uwajibikaji.",
      jibu_en: "Moral framework for responsible data use prioritizing fairness, privacy, and transparency over technical utility."
    },
    {
      id: 92,
      swali_sw: "Synthetic Data inasaidia vipi kulinda faragha?",
      swali_en: "What is 'Synthetic Data,' and how can it help with privacy?",
      muongozo: "Ni data za kutengeneza zinazofanana na ukweli lakini hazimtaji mtu yeyote.",
      jibu_en: "Generated data mimicking real statistical properties without containing actual personal information."
    },
    {
      id: 93,
      swali_sw: "Differential Privacy ni nini?",
      swali_en: "Explain 'Differential Privacy.'",
      muongozo: "Mbinu ya kuongeza 'kelele' (noise) kwenye data ili kulinda siri za watu binafsi.",
      jibu_en: "Mathematical technique adding 'noise' to gain statistical insights without revealing individual identities."
    },
    {
      id: 94,
      swali_sw: "Kwanini Digital Literacy ni muhimu vijijini?",
      swali_en: "Why is 'Digital Literacy' a prerequisite for ethical AI in rural areas?",
      muongozo: "Ili watu waweze kutoa ridhaa (consent) wakijua data zao zinatumika vipi.",
      jibu_en: "Required for meaningful consent and understanding how automated systems impact lives in rural Tanzania."
    },
    {
      id: 95,
      swali_sw: "Fairness maana yake nini kwenye Machine Learning?",
      swali_en: "What is 'Fairness' in Machine Learning?",
      muongozo: "Kuhakikisha model haitoi matokeo ya ubaguzi kwa makundi fulani.",
      jibu_en: "Goal of ensuring model predictions don't result in disparate impacts on different demographic groups."
    },
    {
      id: 96,
      swali_sw: "Uwajibikaji (Accountability) kwenye AI ni nini?",
      swali_en: "Describe 'Accountability' in automated decision systems.",
      muongozo: "Lazima kuwe na mtu au taasisi inayowajibika kwa makosa ya AI.",
      jibu_en: "Principle that a clearly identified person or organization is responsible for AI system outcomes and errors."
    },
    {
      id: 97,
      swali_sw: "Riski ya kuwa na 'Data Silos' ni zipi?",
      swali_en: "What are the risks of 'Data Silos'?",
      muongozo: "Data kufungiwa idara moja tu na kuzuia ushirikiano wa kitaifa.",
      jibu_en: "Isolation of info within departments preventing national AI policy integration and holistic analysis."
    },
    {
      id: 98,
      swali_sw: "Uwazi (Transparency) kwenye sekta ya afya unasaidia nini?",
      swali_en: "Explain 'Transparency' in the context of the Tanzanian health sector.",
      muongozo: "Kuelezea wagonjwa jinsi AI inavyofanya utambuzi ili kujenga imani.",
      jibu_en: "Communicating how AI diagnostics work and their limitations to build trust between patients and providers."
    },
    {
      id: 99,
      swali_sw: "YEESI Lab (SUA) ina umuhimu gani?",
      swali_en: "What is the significance of the 'YEESI Lab' at SUA?",
      muongozo: "Ni maabara ya kisasa ya AI kwa ajili ya kilimo nchini Tanzania.",
      jibu_en: "Pioneer in local high-computing hardware necessary for advanced ML research in agriculture within Tanzania."
    },
    {
      id: 100,
      swali_sw: "Nini mustakabali wa AI Tanzania?",
      swali_en: "What is the 'Future of AI in Tanzania'?",
      muongozo: "Kutumia teknolojia kukuza uchumi na kuboresha maisha chini ya sera imara.",
      jibu_en: "A shift where locally adapted technologies boost economic growth and livelihoods under competitive policy frameworks."
    }
  ]
};

export default aiData;