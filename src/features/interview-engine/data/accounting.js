const accountingData = {
  id: "accounting",
  title: "Accounting & Finance Interview FAQ",
  description:
    "Strategic Evaluation: 100 Essential Accounting Questions. Mkusanyiko huu unajumuisha misingi ya kitaalamu, kodi za TRA, na viwango vya IFRS.",

  etiquette: [
    {
      title: "Technical Accuracy",
      content:
        "Daima zingatia kanuni ya Double-Entry na usawa wa kitalamu (Accounting Equation) unapojibu maswali ya msingi."
    },
    {
      title: "Tax Compliance",
      content:
        "Hakikisha majibu yanahusu sheria za kodi za Tanzania (TRA) kama VAT, PAYE, na SDL kwa usahihi wa viwango vya sasa."
    },
    {
      title: "Professional Integrity",
      content:
        "Sisitiza uadilifu, kuzuia 'Window Dressing', na kufuata viwango vya IFRS katika ripoti za fedha."
    }
  ],

  questions: [
    /* SECTION 1: TECHNICAL ACCOUNTING FOUNDATIONS (1-25) */
    {
      id: 1,
      cat: "Foundations",
      swali_sw: "Kuna tofauti gani kati ya AP (Accounts Payable) na AR (Accounts Receivable)?",
      swali_en: "What is the difference between AP and AR?",
      muongozo: "Elezea madeni unayodaiwa dhidi ya madeni unayodai.",
      jibu_en: "Accounts Payable (AP) is money owed by a company to its suppliers. Accounts Receivable (AR) is money owed to a company by its customers."
    },
    {
      id: 2,
      cat: "Foundations",
      swali_sw: "Elezea mlinganyo wa kihasibu (Accounting Equation).",
      swali_en: "Explain the Accounting Equation.",
      muongozo: "Assets = Liabilities + Equity.",
      jibu_en: "The accounting equation is Assets = Liabilities + Owners' Equity. It represents the relationship between the assets, liabilities, and equity of a business.",
      image_placeholder: "Accounting Equation Diagram: Assets = Liabilities + Equity"
    },
    {
      id: 3,
      cat: "Foundations",
      swali_sw: "Taja ripoti tatu kuu za fedha (financial statements).",
      swali_en: "What are the three main financial statements?",
      muongozo: "Balance Sheet, Income Statement, na Cash Flow Statement.",
      jibu_en: "The three main financial statements are the Balance Sheet, Income Statement, and Cash Flow Statement."
    },
    {
      id: 4,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Double-Entry' bookkeeping?",
      swali_en: "What is 'Double-Entry' bookkeeping?",
      muongozo: "Kila muamala unaathiri pande mbili (Debit na Credit).",
      jibu_en: "A system where every transaction affects at least two accounts (Debit and Credit) to keep the accounting equation in balance."
    },
    {
      id: 5,
      cat: "Foundations",
      swali_sw: "Tafsiri neno 'Depreciation' (Uchakavu).",
      swali_en: "Define 'Depreciation'.",
      muongozo: "Ugawaji wa gharama za rasilimali (tangible assets) kwa muda wa matumizi yake.",
      jibu_en: "Depreciation is the systematic allocation of the cost of a tangible asset over its useful life."
    },
    {
      id: 6,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Accrual Accounting'?",
      swali_en: "What is 'Accrual Accounting'?",
      muongozo: "Kurekodi mapato/gharama pale zinapotokea, bila kujali harakati za pesa taslimu.",
      jibu_en: "Recording income and expenses when they occur, regardless of when the cash is actually received or paid."
    },
    {
      id: 7,
      cat: "Foundations",
      swali_sw: "Elezea 'Deferred Revenue'.",
      swali_en: "Explain 'Deferred Revenue'.",
      muongozo: "Pesa iliyopokelewa kwa bidhaa/huduma ambazo bado hazijatolewa.",
      jibu_en: "Deferred revenue is money received by a company for goods or services that have not yet been delivered or performed."
    },
    {
      id: 8,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'General Ledger'?",
      swali_en: "What is a 'General Ledger'?",
      muongozo: "Kumbukumbu kamili ya miamala yote ya fedha ya kampuni.",
      jibu_en: "A General Ledger is a complete record of all financial transactions of a company throughout its life."
    },
    {
      id: 9,
      cat: "Foundations",
      swali_sw: "Kuna tofauti gani kati ya 'Trial Balance' na 'Balance Sheet'?",
      swali_en: "Difference between 'Trial Balance' and 'Balance Sheet'?",
      muongozo: "Internal check dhidi ya formal financial statement.",
      jibu_en: "A Trial Balance is an internal report to ensure debits equal credits; a Balance Sheet is a formal financial statement showing the company's financial position."
    },
    {
      id: 10,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Amortization'?",
      swali_en: "What is 'Amortization'?",
      muongozo: "Uchakavu kwa rasilimali zisizoshikika (intangible assets).",
      jibu_en: "Amortization is the process of spreading out the cost of intangible assets (like patents or software) over their useful life."
    },
    {
      id: 11,
      cat: "Foundations",
      swali_sw: "Unashughulikiaje tofauti katika upatanishi wa benki (bank reconciliation)?",
      swali_en: "How do you handle bank reconciliation discrepancies?",
      muongozo: "Kutambua hundi ambazo hazijarekodiwa au makosa ya benki.",
      jibu_en: "By identifying unrecorded checks, deposits in transit, or bank errors and adjusting the books accordingly."
    },
    {
      id: 12,
      cat: "Foundations",
      swali_sw: "Tafsiri 'Working Capital'.",
      swali_en: "Define 'Working Capital'.",
      muongozo: "Current Assets ukitoa Current Liabilities.",
      jibu_en: "Working Capital is calculated as Current Assets minus Current Liabilities; it measures short-term liquidity."
    },
    {
      id: 13,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Bad Debt Expense'?",
      swali_en: "What is 'Bad Debt Expense'?",
      muongozo: "Hasara inayotokana na mteja kushindwa kulipa deni.",
      jibu_en: "A loss recorded when a customer's debt is deemed uncollectible."
    },
    {
      id: 14,
      cat: "Foundations",
      swali_sw: "Elezea mbinu za uthamini wa stoo (Inventory Valuation).",
      swali_en: "Explain 'Inventory Valuation' methods.",
      muongozo: "FIFO na Weighted Average (zinazokubaliwa na IFRS).",
      jibu_en: "The main methods are FIFO (First-In-First-Out) and Weighted Average, which are both acceptable under IFRS."
    },
    {
      id: 15,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Capital Expenditure' (CapEx)?",
      swali_en: "What is 'Capital Expenditure' (CapEx)?",
      muongozo: "Fedha zinazotumika kununua au kuboresha rasilimali za kudumu.",
      jibu_en: "Funds used by a company to acquire, upgrade, and maintain physical assets such as property, plants, or equipment."
    },
    {
      id: 16,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Operating Expenditure' (OpEx)?",
      swali_en: "What is 'Operating Expenditure' (OpEx)?",
      muongozo: "Gharama za kila siku za uendeshaji wa biashara.",
      jibu_en: "Ongoing costs for running the day-to-day operations of a business (e.g., rent, utilities)."
    },
    {
      id: 17,
      cat: "Foundations",
      swali_sw: "Tafsiri 'Net Profit' (Faida Halisi).",
      swali_en: "Define 'Net Profit'.",
      muongozo: "Mapato yote ukiondoa gharama zote, kodi, na riba.",
      jibu_en: "Net profit is total revenue minus all operating expenses, interest, taxes, and other costs."
    },
    {
      id: 18,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Gross Profit' (Faida Ghafi)?",
      swali_en: "What is 'Gross Profit'?",
      muongozo: "Mapato ukiondoa gharama ya bidhaa zilizouzwa (COGS).",
      jibu_en: "Gross profit is revenue minus the Cost of Goods Sold (COGS)."
    },
    {
      id: 19,
      cat: "Foundations",
      swali_sw: "Elezea kanuni ya 'Revenue Recognition'.",
      swali_en: "Explain 'Revenue Recognition' principle.",
      muongozo: "Mapato yanatambuliwa yakishapatikana, si lazima yakishalipwa taslimu.",
      jibu_en: "Revenue should be recognized when it is earned and realized, regardless of when the cash is received."
    },
    {
      id: 20,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Matching Principle'?",
      swali_en: "What is 'Matching Principle'?",
      muongozo: "Kulinganisha gharama na mapato yaliyozalishwa katika kipindi hicho.",
      jibu_en: "Expenses should be matched and reported in the same period as the revenue they helped generate."
    },
    {
      id: 21,
      cat: "Foundations",
      swali_sw: "Tafsiri 'Fixed Assets' (Rasilimali za Kudumu).",
      swali_en: "Define 'Fixed Assets'.",
      muongozo: "Rasilimali za muda mrefu zinazotumika katika uendeshaji (ardhi, majengo).",
      jibu_en: "Long-term tangible assets that a firm owns and uses in its operations to generate income (e.g., land, equipment)."
    },
    {
      id: 22,
      cat: "Foundations",
      swali_sw: "Rasilimali za sasa (Current Assets) ni zipi?",
      swali_en: "What are 'Current Assets'?",
      muongozo: "Rasilimali zinazotarajiwa kugeuzwa kuwa pesa ndani ya mwaka mmoja.",
      jibu_en: "Assets expected to be sold, consumed, or converted into cash within one fiscal year (e.g., cash, inventory, accounts receivable)."
    },
    {
      id: 23,
      cat: "Foundations",
      swali_sw: "Tafsiri 'Liabilities' (Madeni/Wajibu).",
      swali_en: "Define 'Liabilities'.",
      muongozo: "Madeni ambayo kampuni inadaiwa na watu wa nje.",
      jibu_en: "Obligations or debts that a company owes to external parties resulting from past transactions."
    },
    {
      id: 24,
      cat: "Foundations",
      swali_sw: "Nini maana ya 'Retained Earnings'?",
      swali_en: "What is 'Retained Earnings'?",
      muongozo: "Faida iliyobaki ndani ya kampuni baada ya kulipa gawio.",
      jibu_en: "The portion of net income kept by the corporation for reinvestment rather than distributed as dividends."
    },
    {
      id: 25,
      cat: "Foundations",
      swali_sw: "Elezea kanuni ya 'Materiality' katika uhasibu.",
      swali_en: "Explain 'Materiality' in accounting.",
      muongozo: "Kipengele ni 'material' ikiwa kuachwa kwake kunaweza kuathiri maamuzi ya kiuchumi.",
      jibu_en: "Materiality refers to the threshold at which financial information becomes significant enough to influence the decisions of a user."
    },

    /* SECTION 2: TANZANIA TAXATION & COMPLIANCE (26-50) */
    {
      id: 26,
      cat: "Taxation",
      swali_sw: "Kiwango cha sasa cha VAT nchini Tanzania ni kipi?",
      swali_en: "What is the current standard VAT rate in Tanzania?",
      muongozo: "Viwango vya kodi vya TRA.",
      jibu_en: "The standard Value Added Tax (VAT) rate in Tanzania is currently 18%."
    },
    {
      id: 27,
      cat: "Taxation",
      swali_sw: "Kiwango cha SDL (Skills Development Levy) ni kipi?",
      swali_en: "What is the 'Skills Development Levy' (SDL) rate?",
      muongozo: "Inalipwa na waajiri wenye wafanyakazi 10+.",
      jibu_en: "The current SDL rate is 3.5% of the total monthly gross payroll for employers with 10 or more employees."
    },
    {
      id: 28,
      cat: "Taxation",
      swali_sw: "Elezea kodi ya zuio (Withholding Tax - WHT).",
      swali_en: "Explain 'Withholding Tax' (WHT).",
      muongozo: "Kodi inayokatwa chanzo cha malipo na kupelekwa TRA.",
      jibu_en: "WHT is tax deducted at the source when making a payment to a service provider or supplier and remitted directly to TRA."
    },
    {
      id: 29,
      cat: "Taxation",
      swali_sw: "PAYE ni nini?",
      swali_en: "What is 'PAYE'?",
      muongozo: "Kodi ya mapato inayokatwa kutoka kwenye mishahara ya wafanyakazi.",
      jibu_en: "Pay As You Earn (PAYE) is a system of income tax where employers deduct tax from employees' salaries and remit it to the tax authority."
    },
    {
      id: 30,
      cat: "Taxation",
      swali_sw: "Kiwango cha uchangiaji wa NSSF ni kipi?",
      swali_en: "What is the NSSF contribution rate?",
      muongozo: "Jumla ni 20% (kawaida 10% mwajiri, 10% mfanyakazi).",
      jibu_en: "The total NSSF contribution is 20% of the employee's gross salary, usually shared equally (10% each) between the employer and the employee."
    },
    {
      id: 31,
      cat: "Taxation",
      swali_sw: "Tafsiri mashine ya EFD.",
      swali_en: "Define 'EFD' machine.",
      muongozo: "Electronic Fiscal Device kwa ajili ya risiti za kodi.",
      jibu_en: "An Electronic Fiscal Device (EFD) is a machine used by businesses to issue official tax receipts for every sale made."
    },
    {
      id: 32,
      cat: "Taxation",
      swali_sw: "TIN ni nini?",
      swali_en: "What is a 'TIN'?",
      muongozo: "Namba ya utambulisho wa mlipa kodi (Tax Identification Number).",
      jibu_en: "TIN stands for Tax Identification Number, a unique nine-digit number issued to identify a person or entity as a taxpayer."
    },
    {
      id: 33,
      cat: "Taxation",
      swali_sw: "Tofauti kati ya 'Tax Evasion' na 'Tax Avoidance'?",
      swali_en: "Difference between Tax Evasion and Tax Avoidance?",
      muongozo: "Kukwepa kodi (Evasion) ni kinyume cha sheria; Avoidance ni kisheria.",
      jibu_en: "Tax evasion is illegal non-payment or underpayment of taxes; tax avoidance is the legal use of the tax regime to minimize tax liability."
    },
    {
      id: 34,
      cat: "Taxation",
      swali_sw: "Input VAT ni nini?",
      swali_en: "What is 'Input VAT'?",
      muongozo: "VAT unayolipa unaponunua bidhaa za biashara.",
      jibu_en: "Input VAT is the tax a business pays on the purchase of goods and services used for business purposes."
    },
    {
      id: 35,
      cat: "Taxation",
      swali_sw: "Output VAT ni nini?",
      swali_en: "What is 'Output VAT'?",
      muongozo: "VAT unayotoza wateja wako unapouza bidhaa.",
      jibu_en: "Output VAT is the tax a business charges and collects from its customers on taxable sales."
    },
    {
      id: 36,
      cat: "Taxation",
      swali_sw: "Mwisho wa kuwasilisha ripoti ya VAT (VAT filing) Tanzania ni lini?",
      swali_en: "When is the deadline for monthly VAT filing in Tanzania?",
      muongozo: "Tarehe 20 ya mwezi unaofuata.",
      jibu_en: "The deadline for filing and paying monthly VAT returns is the 20th day of the following month."
    },
    {
      id: 37,
      cat: "Taxation",
      swali_sw: "Elezea 'Provisional Tax'.",
      swali_en: "Explain 'Provisional Tax'.",
      muongozo: "Kadirio la kodi linalolipwa katika awamu nne za mwaka.",
      jibu_en: "It is a system of paying income tax in four quarterly installments based on an estimate of the total tax due for the year."
    },
    {
      id: 38,
      cat: "Taxation",
      swali_sw: "Kiwango cha kodi ya mapato ya kampuni (Corporate Tax) ni kipi?",
      swali_en: "What is 'Corporate Income Tax' rate for resident companies?",
      muongozo: "Kawaida ni 30%.",
      jibu_en: "The standard corporate income tax rate for resident companies in Tanzania is generally 30%."
    },
    {
      id: 39,
      cat: "Taxation",
      swali_sw: "Tafsiri 'Stamp Duty'.",
      swali_en: "Define 'Stamp Duty'.",
      muongozo: "Kodi inayotozwa kwenye nyaraka za kisheria.",
      jibu_en: "Stamp Duty is a tax levied on specific legal instruments or documents such as contracts, leases, and transfers of property."
    },
    {
      id: 40,
      cat: "Taxation",
      swali_sw: "Nini maana ya 'Adjusted Taxable Profit'?",
      swali_en: "What is 'Adjusted Taxable Profit'?",
      muongozo: "Faida ya kihasibu iliyorekebishwa kwa ajili ya vigezo vya kodi.",
      jibu_en: "The net profit calculated by adjusting the accounting profit for items that are either allowed or disallowed by the tax laws."
    },
    {
      id: 41,
      cat: "Taxation",
      swali_sw: "Nini maana ya 'Capital Allowances'?",
      swali_en: "What is 'Capital Allowances'?",
      muongozo: "Gharama zinazokatwa kwenye kodi kwa ajili ya uchakavu wa rasilimali.",
      jibu_en: "Capital allowances are tax-deductible expenses that businesses can claim for the wear and tear of capital assets used in the business."
    },
    {
      id: 42,
      cat: "Taxation",
      swali_sw: "Tafsiri 'Thin Capitalization'.",
      swali_en: "Define 'Thin Capitalization'?",
      muongozo: "Uwiano wa deni na mtaji (Ratio 7:3 Tanzania).",
      jibu_en: "A situation where a company is financed through a relatively high level of debt compared to equity, subject to specific tax rules regarding interest deductibility."
    },
    {
      id: 43,
      cat: "Taxation",
      swali_sw: "Transfer Pricing ni nini?",
      swali_en: "What is 'Transfer Pricing'?",
      muongozo: "Upangaji wa bei za miamala kati ya kampuni ndugu (related parties).",
      jibu_en: "The pricing of transactions (goods, services, or intangibles) between related or connected entities."
    },
    {
      id: 44,
      cat: "Taxation",
      swali_sw: "Elezea kodi ya zuio (WHT) kwenye pango la biashara.",
      swali_en: "Explain 'WHT on Rent' for commercial property.",
      muongozo: "Kiwango cha sasa ni 10%.",
      jibu_en: "Withholding Tax (WHT) on rental payments for commercial properties is currently set at 10% in Tanzania."
    },
    {
      id: 45,
      cat: "Taxation",
      swali_sw: "NHIF inakatwaje?",
      swali_en: "What is 'NHIF' deduction?",
      muongozo: "Kawaida 3% mwajiri, 3% mfanyakazi.",
      jibu_en: "NHIF is a mandatory health insurance contribution, usually totaling 6% of the gross salary (3% from the employer and 3% from the employee)."
    },
    {
      id: 46,
      cat: "Taxation",
      swali_sw: "WHT kwenye huduma za kitaalamu ni kiasi gani?",
      swali_en: "What is 'WHT on Professional Services'?",
      muongozo: "5% kwa wakaazi wa Tanzania.",
      jibu_en: "Withholding tax on professional services provided by residents in Tanzania is currently 5%."
    },
    {
      id: 47,
      cat: "Taxation",
      swali_sw: "Tafsiri 'Tax Residency'.",
      swali_en: "Define 'Tax Residency'?",
      muongozo: "Hali inayomfanya mtu au kampuni kuwa na wajibu wa kodi nchini.",
      jibu_en: "A status that determines a person's or entity's tax obligations in a specific country based on their presence or incorporation."
    },
    {
      id: 48,
      cat: "Taxation",
      swali_sw: "Kodi ya Michezo ya Kubahatisha (Gaming Tax) ni nini?",
      swali_en: "What is 'Gaming Tax'?",
      muongozo: "Kodi inayotozwa kwenye kamari na bahati nasibu.",
      jibu_en: "Tax levied specifically on gaming activities such as betting, casinos, and lotteries."
    },
    {
      id: 49,
      cat: "Taxation",
      swali_sw: "Elezea 'Excise Duty' (Ushuru wa Bidhaa).",
      swali_en: "Explain 'Excise Duty'.",
      muongozo: "Kodi kwenye bidhaa maalum kama vinywaji vikali na mafuta.",
      jibu_en: "An indirect tax charged on specific goods manufactured in the country or imported (e.g., alcohol, tobacco, fuel)."
    },
    {
      id: 50,
      cat: "Taxation",
      swali_sw: "City Service Levy ni nini?",
      swali_en: "What is 'City Service Levy'?",
      muongozo: "Kodi ya serikali za mitaa (0.3% ya mauzo).",
      jibu_en: "A local government tax charged at a rate of 0.3% of the turnover of a business entity located in a specific council."
    },

    /* SECTION 3: FINANCIAL REPORTING & AUDITING (51-75) */
    {
      id: 51,
      cat: "Reporting",
      swali_sw: "IFRS ni nini?",
      swali_en: "What is IFRS?",
      muongozo: "International Financial Reporting Standards.",
      jibu_en: "IFRS stands for International Financial Reporting Standards, which provide a common global language for business affairs."
    },
    {
      id: 52,
      cat: "Reporting",
      swali_sw: "Elezea dhana ya 'Going Concern'.",
      swali_en: "Explain 'Going Concern' assumption.",
      muongozo: "Imani kuwa biashara itaendelea kwa muda mrefu ujao.",
      jibu_en: "The fundamental assumption that a business entity will continue to operate indefinitely and meet its obligations."
    },
    {
      id: 53,
      cat: "Reporting",
      swali_sw: "Nini maana ya 'Audit Trail'?",
      swali_en: "What is an 'Audit Trail'?",
      muongozo: "Kumbukumbu zinazoruhusu miamala kufuatiliwa hadi chanzo chake.",
      jibu_en: "A sequence of documents and records that allows someone to trace a transaction back to its point of origin."
    },
    {
      id: 54,
      cat: "Reporting",
      swali_sw: "Tafsiri 'Liquidity'.",
      swali_en: "Define 'Liquidity'.",
      muongozo: "Uwezo wa kulipa madeni ya muda mfupi.",
      jibu_en: "Liquidity refers to a company's ability to pay its short-term debts and obligations as they fall due."
    },
    {
      id: 55,
      cat: "Reporting",
      swali_sw: "Tafsiri 'Solvency'.",
      swali_en: "Define 'Solvency'.",
      muongozo: "Uwezo wa kulipa madeni ya muda mrefu.",
      jibu_en: "Solvency is the ability of a company to meet its long-term financial commitments."
    },
    {
      id: 56,
      cat: "Reporting",
      swali_sw: "Current Ratio ni nini?",
      swali_en: "What is the 'Current Ratio'?",
      muongozo: "Current Assets / Current Liabilities.",
      jibu_en: "A liquidity ratio that measures a company's ability to pay short-term obligations; it is calculated as Current Assets divided by Current Liabilities."
    },
    {
      id: 57,
      cat: "Reporting",
      swali_sw: "Quick Ratio (Acid Test) ni nini?",
      swali_en: "What is the 'Quick Ratio' (Acid Test)?",
      muongozo: "(Current Assets - Inventory) / Current Liabilities.",
      jibu_en: "A more stringent liquidity test that excludes inventory from current assets before dividing by current liabilities."
    },
    {
      id: 58,
      cat: "Reporting",
      swali_sw: "Elezea 'Unqualified Audit Opinion'.",
      swali_en: "Explain 'Unqualified Audit Opinion'.",
      muongozo: "Ripoti safi ya ukaguzi.",
      jibu_en: "A 'clean' auditor's report stating that the financial statements present a true and fair view of the company's financial position."
    },
    {
      id: 59,
      cat: "Reporting",
      swali_sw: "Internal Control (Udhibiti wa Ndani) ni nini?",
      swali_en: "What is 'Internal Control'?",
      muongozo: "Taratibu za kulinda rasilimali na kuhakikisha usahihi.",
      jibu_en: "Internal control refers to the processes and procedures implemented by an organization to ensure financial integrity and asset protection."
    },
    {
      id: 60,
      cat: "Reporting",
      swali_sw: "Tafsiri 'Material Misstatement'.",
      swali_en: "Define 'Material Misstatement'.",
      muongozo: "Kosa kubwa linaloweza kubadili maamuzi ya mdau wa fedha.",
      jibu_en: "An error or omission in financial information that is significant enough to affect the economic decisions of users."
    },
    {
      id: 61,
      cat: "Reporting",
      swali_sw: "Nini maana ya 'Consolidation'?",
      swali_en: "What is 'Consolidation'?",
      muongozo: "Kuunganisha ripoti za fedha za mzazi na kampuni tanzu.",
      jibu_en: "The process of combining the financial results of a parent company and its subsidiaries into a single set of financial statements."
    },
    {
      id: 62,
      cat: "Reporting",
      swali_sw: "Elezea 'EBITDA'.",
      swali_en: "Explain 'EBITDA'.",
      muongozo: "Earnings Before Interest, Taxes, Depreciation, na Amortization.",
      jibu_en: "A measure of a company's overall financial performance; it stands for Earnings Before Interest, Taxes, Depreciation, and Amortization."
    },
    {
      id: 63,
      cat: "Reporting",
      swali_sw: "ROI (Return on Investment) ni nini?",
      swali_en: "What is 'Return on Investment' (ROI)?",
      muongozo: "(Net Profit / Investment Cost) x 100.",
      jibu_en: "A performance measure used to evaluate the efficiency or profitability of an investment."
    },
    {
      id: 64,
      cat: "Reporting",
      swali_sw: "Tafsiri 'Equity Multiplier'.",
      swali_en: "Define 'Equity Multiplier'?",
      muongozo: "Kipimo cha 'financial leverage'.",
      jibu_en: "A financial ratio that measures the portion of a company’s assets that are financed by its shareholders' equity."
    },
    {
      id: 65,
      cat: "Reporting",
      swali_sw: "Window Dressing ni nini?",
      swali_en: "What is 'Window Dressing'?",
      muongozo: "Kupamba ripoti ionekane nzuri kuliko ukweli (si kimaadili).",
      jibu_en: "The unethical practice of manipulating financial statements to make a company's performance look better than it actually is."
    },
    {
      id: 66,
      cat: "Reporting",
      swali_sw: "Elezea 'Fair Value'.",
      swali_en: "Explain 'Fair Value'.",
      muongozo: "Bei inayoweza kupatikana kuuza rasilimali katika soko la kawaida.",
      jibu_en: "The estimated price at which an asset can be sold or a liability settled in an orderly transaction between market participants."
    },
    {
      id: 67,
      cat: "Reporting",
      swali_sw: "Madeni ya dharura (Contingent Liabilities) ni yapi?",
      swali_en: "What are 'Contingent Liabilities'?",
      muongozo: "Madeni yanayoweza kutokea kulingana na matukio ya baadaye (kama kesi).",
      jibu_en: "Potential obligations that may arise depending on the outcome of a future event, such as a pending lawsuit."
    },
    {
      id: 68,
      cat: "Reporting",
      swali_sw: "Tafsiri 'Impairment'.",
      swali_en: "Define 'Impairment'.",
      muongozo: "Kushuka kwa thamani ya rasilimali kwa kudumu.",
      jibu_en: "A permanent reduction in the value of a company's asset to less than its carrying amount."
    },
    {
      id: 69,
      cat: "Foundations",
      swali_sw: "Bank Overdraft ni nini?",
      swali_en: "What is 'Bank Overdraft'?",
      muongozo: "Deni la muda mfupi ambapo salio la benki linashuka chini ya sifuri.",
      jibu_en: "A short-term liability that occurs when an account balance falls below zero, effectively a loan from the bank."
    },
    {
      id: 70,
      cat: "Reporting",
      swali_sw: "Elezea 'Financial Leverage'.",
      swali_en: "Explain 'Financial Leverage'.",
      muongozo: "Kutumia madeni kuongeza faida tarajiwa.",
      jibu_en: "The use of borrowed funds (debt) to finance the acquisition of assets with the expectation of increasing returns for shareholders."
    },
    {
      id: 71,
      cat: "Reporting",
      swali_sw: "Operating Margin ni nini?",
      swali_en: "What is 'Operating Margin'?",
      muongozo: "Operating Income / Revenue.",
      jibu_en: "A ratio that measures what percentage of revenue remains after paying for variable costs of production."
    },
    {
      id: 72,
      cat: "Reporting",
      swali_sw: "Tafsiri 'Dividend' (Gawio).",
      swali_en: "Define 'Dividend'.",
      muongozo: "Sehemu ya faida inayotolewa kwa wanahisa.",
      jibu_en: "A distribution of a portion of a company's earnings to its shareholders."
    },
    {
      id: 73,
      cat: "Reporting",
      swali_sw: "Nini maana ya uhuru wa mkaguzi (Auditor Independence)?",
      swali_en: "What is 'Auditor Independence'?",
      muongozo: "Wakaguzi kutokuwa na upendeleo kwa mteja.",
      jibu_en: "The principle that auditors must remain free from any influence that could compromise their professional judgment or objectivity."
    },
    {
      id: 74,
      cat: "Reporting",
      swali_sw: "Elezea 'Subsequent Events' (Matukio ya Baadaye).",
      swali_en: "Explain 'Subsequent Events'?",
      muongozo: "Matukio kati ya tarehe ya kufunga hesabu na tarehe ya kutoa ripoti.",
      jibu_en: "Events occurring between the balance sheet date and the date the financial statements are issued."
    },
    {
      id: 75,
      cat: "Reporting",
      swali_sw: "IAS 1 ni nini?",
      swali_en: "What is 'IAS 1'?",
      muongozo: "Kiwango kinachosimamia uwasilishaji wa ripoti za fedha.",
      jibu_en: "International Accounting Standard 1 (IAS 1) sets out the requirements for the presentation of general-purpose financial statements."
    },

    /* SECTION 4: COST ACCOUNTING & BUDGETING (76-90) */
    {
      id: 76,
      cat: "Costing",
      swali_sw: "Zero-Based Budgeting ni nini?",
      swali_en: "What is 'Zero-Based Budgeting'?",
      muongozo: "Kuanzisha kila bajeti kutoka sifuri na kutetea kila gharama.",
      jibu_en: "A method of budgeting in which all expenses must be justified for each new period, starting from a 'zero base'."
    },
    {
      id: 77,
      cat: "Costing",
      swali_sw: "Tafsiri 'Variance Analysis'.",
      swali_en: "Define 'Variance Analysis'.",
      muongozo: "Kulinganisha matokeo ya kweli na makadirio ya bajeti.",
      jibu_en: "The process of investigating the differences between actual financial results and the budgeted figures."
    },
    {
      id: 78,
      cat: "Costing",
      swali_sw: "Break-Even Point ni nini?",
      swali_en: "What is 'Break-Even Point'?",
      muongozo: "Hatua ambapo mapato yanalingana na gharama (faida ni sifuri).",
      jibu_en: "The point at which total revenue equals total costs, meaning the business is making neither profit nor loss.",
      image_placeholder: "Break-even analysis chart showing fixed costs, variable costs, and the break-even point"
    },
    {
      id: 79,
      cat: "Costing",
      swali_sw: "Tofauti kati ya gharama zisizobadilika (Fixed) na zinazobadilika (Variable).",
      swali_en: "Difference between Fixed and Variable costs?",
      muongozo: "Fixed hazibadiliki na uzalishaji; Variable zinabadilika.",
      jibu_en: "Fixed costs remain constant regardless of production levels (e.g., rent); variable costs change in direct proportion to production volume (e.g., raw materials)."
    },
    {
      id: 80,
      cat: "Costing",
      swali_sw: "Marginal Cost ni nini?",
      swali_en: "What is 'Marginal Cost'?",
      muongozo: "Gharama ya kuzalisha kitengo kimoja cha ziada.",
      jibu_en: "The additional cost incurred by producing one more unit of a good or service."
    },
    {
      id: 81,
      cat: "Costing",
      swali_sw: "Tafsiri 'Overheads' (Gharama za Ziada).",
      swali_en: "Define 'Overheads'.",
      muongozo: "Gharama zisizo za moja kwa moja kwenye uzalishaji (umeme, utawala).",
      jibu_en: "Ongoing business expenses not directly attributed to creating a product or service."
    },
    {
      id: 82,
      cat: "Costing",
      swali_sw: "Standard Costing ni nini?",
      swali_en: "What is 'Standard Costing'?",
      muongozo: "Kutumia makadirio ya gharama kwa ajili ya kudhibiti bajeti.",
      jibu_en: "The practice of estimating the expense of a production process for planning and control purposes."
    },
    {
      id: 83,
      cat: "Costing",
      swali_sw: "Elezea 'Absorption Costing'.",
      swali_en: "Explain 'Absorption Costing'?",
      muongozo: "Kuhusisha gharama zote za uzalishaji katika gharama ya bidhaa.",
      jibu_en: "A costing method that includes all manufacturing costs (fixed and variable) in the cost of a product."
    },
    {
      id: 84,
      cat: "Costing",
      swali_sw: "Opportunity Cost ni nini?",
      swali_en: "What is 'Opportunity Cost'?",
      muongozo: "Faida iliyopotea kwa kuchagua chaguo moja badala ya jingine.",
      jibu_en: "The potential benefit that is given up when one alternative is selected over another."
    },
    {
      id: 85,
      cat: "Costing",
      swali_sw: "Sunk Cost ni nini?",
      swali_en: "Define 'Sunk Cost'?",
      muongozo: "Gharama iliyopita ambayo haiwezi kurejeshwa.",
      jibu_en: "A cost that has already been incurred and cannot be recovered by any future decision."
    },
    {
      id: 86,
      cat: "Costing",
      swali_sw: "Contribution Margin ni nini?",
      swali_en: "What is 'Contribution Margin'?",
      muongozo: "Mauzo ukiondoa gharama zinazobadilika (Variable Costs).",
      jibu_en: "Sales revenue minus variable costs; it shows how much is available to cover fixed costs and generate profit."
    },
    {
      id: 87,
      cat: "Costing",
      swali_sw: "Elezea 'Direct Labor'.",
      swali_en: "Explain 'Direct Labor'.",
      muongozo: "Gharama za wafanyakazi wanaohusika moja kwa moja kutengeneza bidhaa.",
      jibu_en: "Labor costs that can be specifically and easily traced to individual units of product."
    },
    {
      id: 88,
      cat: "Costing",
      swali_sw: "Activity-Based Costing (ABC) ni nini?",
      swali_en: "What is 'Activity-Based Costing' (ABC)?",
      muongozo: "Kugawa gharama za ziada kulingana na shughuli zinazozisababisha.",
      jibu_en: "A costing method that identifies activities in an organization and assigns costs to products based on their consumption of those activities."
    },
    {
      id: 89,
      cat: "Costing",
      swali_sw: "Tafsiri 'Budgetary Control'.",
      swali_en: "Define 'Budgetary Control'?",
      muongozo: "Kusimamia biashara kwa kulinganisha ukweli dhidi ya bajeti.",
      jibu_en: "A system of management control in which actual results are compared to budgeted figures to ensure financial objectives are met."
    },
    {
      id: 90,
      cat: "Costing",
      swali_sw: "Master Budget ni nini?",
      swali_en: "What is 'Master Budget'?",
      muongozo: "Mjumuisho wa bajeti zote ndogo za kampuni.",
      jibu_en: "An overall financial and operating plan for an entire organization, comprising all lower-level budgets."
    },

    /* SECTION 5: BEHAVIORAL & SOFTWARE SKILLS (91-100) */
    {
      id: 91,
      cat: "Skills",
      swali_sw: "Ni programu gani za kihasibu unazozijua?",
      swali_en: "Which accounting software are you familiar with?",
      muongozo: "Taja mifano kama Tally, QuickBooks, au Advanced Excel.",
      jibu_en: "I am proficient in using tools like TallyPrime, QuickBooks, and Advanced Excel for data analysis and financial reporting."
    },
    {
      id: 92,
      cat: "Skills",
      swali_sw: "Unahakikishaje usahihi katika kazi zako?",
      swali_en: "How do you ensure accuracy in your work?",
      muongozo: "Kufanya upatanishi (reconciliations) mara kwa mara.",
      jibu_en: "I ensure accuracy through regular reconciliations, double-checking entries, and maintaining an organized audit trail."
    },
    {
      id: 93,
      cat: "Skills",
      swali_sw: "Unashughulikiaje migogoro ya kimaadili (mfano: udanganyifu)?",
      swali_en: "How do you handle ethical dilemmas (e.g., fraud)?",
      muongozo: "Kufuata kanuni za IFRS na kuripoti kwa mamlaka husika.",
      jibu_en: "I adhere to IFRS ethics and professional codes of conduct, reporting any irregularities to the appropriate authorities immediately."
    },
    {
      id: 94,
      cat: "Skills",
      swali_sw: "Kwanini ujuzi wa Excel ni muhimu kwa wahasibu?",
      swali_en: "Why are Excel skills important for accountants?",
      muongozo: "Uchambuzi wa data na ripoti za haraka.",
      jibu_en: "Excel is essential for complex data analysis, financial modeling, and creating customized reports efficiently."
    },
    {
      id: 95,
      cat: "Skills",
      swali_sw: "Unapataje taarifa mpya kuhusu sheria za TRA?",
      swali_en: "How do you stay updated with TRA laws?",
      muongozo: "Tovuti ya TRA na semina za NBAA.",
      jibu_en: "I stay informed by regularly visiting the TRA website, attending NBAA seminars, and reviewing current tax legislation."
    },
    {
      id: 96,
      cat: "Skills",
      swali_sw: "Utafanya nini ukigundua muamala (transaction) uliopotea?",
      swali_en: "What would you do if you found a missing transaction?",
      muongozo: "Kutafuta nyaraka za chanzo na kurekodi mara moja.",
      jibu_en: "I would trace the source documents, verify the details, and record the transaction immediately to maintain complete records."
    },
    {
      id: 97,
      cat: "Skills",
      swali_sw: "Unashughulikiaje kazi zenye muda mfupi (deadlines)?",
      swali_en: "How do you handle tight deadlines?",
      muongozo: "Kupanga vipaumbele na kutumia mifumo ya kujiendesha (automation).",
      jibu_en: "I prioritize tasks based on urgency and importance while utilizing automated tools to streamline repetitive processes."
    },
    {
      id: 98,
      cat: "Skills",
      swali_sw: "Elezea uzoefu wako katika usimamizi wa mishahara (Payroll).",
      swali_en: "Describe your experience with Payroll.",
      muongozo: "Ujuzi wa PAYE, NSSF, na makato mengine kisheria.",
      jibu_en: "I have extensive experience in payroll processing, including calculating PAYE, NSSF, and ensuring compliance with local labor laws."
    },
    {
      id: 99,
      cat: "Career",
      swali_sw: "Unajiona wapi kitaaluma baada ya miaka mitano?",
      swali_en: "Where do you see yourself in 5 years?",
      muongozo: "Kuwa CPA-T holder na kiongozi wa timu ya fedha.",
      jibu_en: "I aim to be a CPA-T holder, leading a financial department or an audit team and contributing to strategic decision-making."
    },
    {
      id: 100,
      cat: "Career",
      swali_sw: "Kwanini tukuajiri wewe?",
      swali_en: "Why should we hire you?",
      muongozo: "Mchanganyiko wa ujuzi, uadilifu, na ufahamu wa kodi nchini.",
      jibu_en: "I offer a strong combination of technical accounting skills, in-depth knowledge of Tanzanian tax laws, and a commitment to professional integrity."
    }
  ]
};

export default accountingData;