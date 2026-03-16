const programmingData = {
  id: "programming",
  title: "Programming & Web Development",
  description:
    "Strategic Evaluation: 150 Essential Questions. Mkusanyiko kamili kulingana na mahitaji ya soko la Tanzania 2025-2026, eGA standards, na PDPA 2022.",

  etiquette: [
    {
      title: "Elezea kwa Mantiki",
      content:
        "Jibu maswali kwa kuelezea logic ya suluhisho kabla ya kuandika code."
    },
    {
      title: "Tumia Mifano",
      content:
        "Toa mfano halisi wa project au system uliyojenga."
    },
    {
      title: "Clean Code",
      content:
        "Onyesha uelewa wa best practices kama SOLID, DRY, na clean architecture."
    }
  ],

  questions: [
    /* KUNDI LA 1: HTML, CSS & UI/UX (1-35) */
    {
      id: 1,
      swali_sw: "Vifaa gani vya maana hutumika katika HTML5?",
      swali_en: "What are semantic HTML elements?",
      muongozo: "[HTML/CSS] Elezea tag zinazotoa maana kwa kivinjari na SEO badala ya kutumia <div> pekee.",
      jibu_en: "Semantic elements like <main>, <nav>, and <article> clearly describe their meaning, improving SEO and accessibility."
    },
    {
      id: 2,
      swali_sw: "Elezea mfumo wa 'CSS Box Model'.",
      swali_en: "Explain the CSS Box Model.",
      muongozo: "[HTML/CSS] Taja tabaka nne: Content, Padding, Border, na Margin.",
      jibu_en: "A conceptual box wrapping every element, consisting of content, padding, borders, and margins."
    },
    {
      id: 3,
      swali_sw: "Kuna tofauti gani kati ya Class na ID?",
      swali_en: "Difference between Class and ID?",
      muongozo: "[HTML/CSS] ID ni kwa ajili ya element moja tu; Class inaweza kutumika mara nyingi.",
      jibu_en: "IDs are unique to one element; classes can be reused across multiple elements."
    },
    {
      id: 4,
      swali_sw: "'Alt text' ina umuhimu gani kwenye picha?",
      swali_en: "Why is alt text important?",
      muongozo: "[HTML/CSS] Inasaidia Google kuelewa picha (SEO) na watu wasioona wanaotumia screen readers.",
      jibu_en: "Provides a textual description for web accessibility and allows search engines to index image content."
    },
    {
      id: 5,
      swali_sw: "Elezea dhana ya 'Responsive Web Design'.",
      swali_en: "What is Responsive Web Design?",
      muongozo: "[HTML/CSS] Mbinu ya kuhakikisha website inaonekana vizuri kwenye kila kioo kwa kutumia Media Queries.",
      jibu_en: "Design approach ensuring web pages render well on all devices using fluid grids and CSS media queries."
    },
    {
      id: 6,
      swali_sw: "'Mobile-First Design' ni nini na kwanini ni muhimu Tanzania?",
      swali_en: "What is Mobile-First Design?",
      muongozo: "[HTML/CSS] Kuanza kutengeneza kwa ajili ya simu kwanza. Tanzania 90% internet access ni mobile.",
      jibu_en: "Designing for small screens first. Essential in TZ as most users access the web via mobile devices."
    },
    {
      id: 7,
      swali_sw: "Nini maana ya 'Z-index' katika CSS?",
      swali_en: "What is Z-index in CSS?",
      muongozo: "[HTML/CSS] Inapanga mpangilio wa vitu vilivyopandana (stack order).",
      jibu_en: "Specifies the stack order of elements; higher z-index appears in front of lower ones."
    },
    {
      id: 8,
      swali_sw: "Elezea matumizi ya 'Flexbox'.",
      swali_en: "Explain the use of Flexbox.",
      muongozo: "[HTML/CSS] Mfumo wa kupanga vitu katika mstari mmoja (row) au safu (column) kwa urahisi.",
      jibu_en: "One-dimensional layout method for arranging items in rows or columns efficiently."
    },
    {
      id: 9,
      swali_sw: "Tofauti kati ya visibility: hidden na display: none?",
      swali_en: "Visibility vs Display?",
      muongozo: "[HTML/CSS] Display none inaondoa element; visibility hidden inaficha lakini nafasi inabaki.",
      jibu_en: "display: none removes element from flow; visibility: hidden hides it but maintains physical space."
    },
    {
      id: 10,
      swali_sw: "Elezea matumizi ya CSS preprocessors kama SASS.",
      swali_en: "Explain SASS.",
      muongozo: "[HTML/CSS] Zana zinazoongeza uwezo wa CSS kama kutumia variables na nesting.",
      jibu_en: "Preprocessors extend CSS with variables, nesting, and mixins for easier maintenance."
    },
    {
      id: 11,
      swali_sw: "CSS Grid ni nini?",
      swali_en: "What is CSS Grid?",
      muongozo: "[HTML/CSS] Mfumo wa pande mbili (2D) wa kupanga vitu (safu na mistari).",
      jibu_en: "Two-dimensional layout system allowing complex designs by controlling both rows and columns."
    },
    {
      id: 12,
      swali_sw: "Nini maana ya 'Critical Rendering Path'?",
      swali_en: "What is Critical Rendering Path?",
      muongozo: "[HTML/CSS] Hatua browser inafuata ili kuonyesha picha kwenye kioo.",
      jibu_en: "Sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on screen."
    },
    {
      id: 13,
      swali_sw: "Tofauti ya 'Em' na 'Rem' units.",
      swali_en: "Em vs Rem?",
      muongozo: "[HTML/CSS] Em inategemea parent; Rem inategemea root (html).",
      jibu_en: "'em' is relative to parent font-size; 'rem' is relative to the root font-size."
    },
    {
      id: 14,
      swali_sw: "Faida ya 'External CSS' vs 'Inline CSS'?",
      swali_en: "External vs Inline CSS?",
      muongozo: "[HTML/CSS] Inafanya kodi iwe safi na rahisi kubadilisha website nzima mara moja.",
      jibu_en: "Decouples content from presentation, reduces redundancy, and allows global updates."
    },
    {
      id: 15,
      swali_sw: "Elezea 'Web Accessibility' (a11y).",
      swali_en: "What is Web Accessibility?",
      muongozo: "[HTML/CSS] Kutengeneza website ili iweze kutumika na kila mtu, ikiwemo wenye ulemavu.",
      jibu_en: "Ensures digital tools are usable by everyone, including those with motor or visual impairments."
    },
    {
      id: 16,
      swali_sw: "Nini maana ya 'Cross-Browser Compatibility'?",
      swali_en: "Cross-Browser Compatibility?",
      muongozo: "[HTML/CSS] Kuhakikisha website inafanya kazi sawa kwenye browsers zote.",
      jibu_en: "The ability of an app to function consistently across different browsers and versions."
    },
    {
      id: 17,
      swali_sw: "Elezea 'SVG' na faida zake.",
      swali_en: "What is SVG?",
      muongozo: "[HTML/CSS] SVG hazifi ubora hata ukizivuta ziwe kubwa, na file ni dogo.",
      jibu_en: "XML-based vector graphics that remain sharp at any scale and have small file sizes."
    },
    {
      id: 18,
      swali_sw: "Nini maana ya 'BEM' naming convention?",
      swali_en: "What is BEM?",
      muongozo: "[HTML/CSS] Mbinu ya kupanga majina ya kodi (Block, Element, Modifier).",
      jibu_en: "Naming convention providing modular structure for CSS classes, making code readable and reusable."
    },
    {
      id: 19,
      swali_sw: "CSS 'Position: sticky' inafanya kazi gani?",
      swali_en: "What is Position: sticky?",
      muongozo: "[HTML/CSS] Inafanya kitu kikae sehemu moja mteja anaposcroll.",
      jibu_en: "Toggles between relative and fixed positioning based on user's scroll position."
    },
    {
      id: 20,
      swali_sw: "Vipi una-optimize kasi ya website nchini Tanzania?",
      swali_en: "Optimizing for TZ market?",
      muongozo: "[HTML/CSS] Kubana picha na kupunguza kodi ili ifunguke haraka hata kwenye 3G.",
      jibu_en: "Compressing assets, lazy loading, and minifying files to reduce latency on slower networks."
    },
    {
      id: 21,
      swali_sw: "Nini maana ya 'Progressive Enhancement'?",
      swali_en: "Progressive Enhancement?",
      muongozo: "[HTML/CSS] Kuanza na mfumo rahisi kisha kuongeza urembo kwa browser za kisasa.",
      jibu_en: "Strategy providing core content to all users first, then enhancing for modern browsers."
    },
    {
      id: 22,
      swali_sw: "Elezea 'Cookies' vs 'Local Storage'.",
      swali_en: "Cookies vs Local Storage?",
      muongozo: "[HTML/CSS] Cookies hutumwa server; Local Storage inabaki kwenye browser.",
      jibu_en: "Cookies are sent to server with requests; Local Storage is client-side only and larger."
    },
    {
      id: 23,
      swali_sw: "Nini maana ya 'Shadow DOM'?",
      swali_en: "What is Shadow DOM?",
      muongozo: "[HTML/CSS] Sehemu iliyotengwa kuzuia kodi za nje kuathiri component.",
      jibu_en: "Web standard encapsulating a component's internal DOM and styles from global scope."
    },
    {
      id: 24,
      swali_sw: "Faida za 'Icon Fonts' vs 'SVG Icons'?",
      swali_en: "Icon Fonts vs SVG?",
      muongozo: "[HTML/CSS] SVG ni bora zaidi kwa ufanisi na screen readers.",
      jibu_en: "SVG icons offer better performance, clarity at any resolution, and superior accessibility."
    },
    {
      id: 25,
      swali_sw: "Unapimaje ufanisi wa frontend?",
      swali_en: "Measuring performance?",
      muongozo: "[HTML/CSS] Taja Google Lighthouse au PageSpeed Insights.",
      jibu_en: "Using tools like Google Lighthouse and Chrome DevTools to audit metrics and accessibility."
    },
    {
      id: 26,
      swali_sw: "Nini maana ya 'Minification'?",
      swali_en: "What is Minification?",
      muongozo: "[HTML/CSS] Kuondoa nafasi zisizo na maana ili file liwe dogo.",
      jibu_en: "Process of removing unnecessary characters from source code to speed up page loading."
    },
    {
      id: 27,
      swali_sw: "Elezea 'Dark Mode' implementation.",
      swali_en: "How to implement Dark Mode?",
      muongozo: "[HTML/CSS] Kutumia CSS Variables kubadilisha rangi kulingana na simu.",
      jibu_en: "Using prefers-color-scheme media query and CSS custom properties for theme switching."
    },
    {
      id: 28,
      swali_sw: "'Graceful Degradation' ni nini?",
      swali_en: "Graceful Degradation?",
      muongozo: "[HTML/CSS] Mfumo wa kisasa unaofanya kazi hata kwenye browser za zamani.",
      jibu_en: "Building full functionality for modern browsers while ensuring access on older systems."
    },
    {
      id: 29,
      swali_sw: "Nini umuhimu wa 'Favicon'?",
      swali_en: "Why use a Favicon?",
      muongozo: "[HTML/CSS] Picha kidogo kwenye tab ya browser kusaidia utambulisho.",
      jibu_en: "Small icon in browser tab improving brand recognition and helping users identify sites."
    },
    {
      id: 30,
      swali_sw: "Elezea 'Viewport' katika HTML.",
      swali_en: "What is the Viewport?",
      muongozo: "[HTML/CSS] Eneo linaloonekana na mtumiaji; muhimu kwa responsive design.",
      jibu_en: "Visible area of a web page, controlled by the viewport meta tag for device scaling."
    },
    {
      id: 31,
      swali_sw: "CSS 'Grid Gap' inafanya kazi gani?",
      swali_en: "What is Grid Gap?",
      muongozo: "[HTML/CSS] Inatengeneza nafasi kati ya vitu kwenye gridi.",
      jibu_en: "Property setting the spacing between rows and columns in Grid or Flexbox layouts."
    },
    {
      id: 32,
      swali_sw: "Tofauti ya 'Absolute' na 'Relative' positioning.",
      swali_en: "Absolute vs Relative?",
      muongozo: "[HTML/CSS] Relative inategemea nafasi asilia; Absolute inategemea parent.",
      jibu_en: "relative positions vs normal flow; absolute positions relative to nearest positioned ancestor."
    },
    {
      id: 33,
      swali_sw: "Elezea 'CSS Animations' kwa ufupi.",
      swali_en: "What are CSS Animations?",
      muongozo: "[HTML/CSS] Kuhamisha element kati ya styles kwa kutumia keyframes.",
      jibu_en: "Allows transition from one style to another using @keyframes to define steps."
    },
    {
      id: 34,
      swali_sw: "Faida ya Tailwind CSS?",
      swali_en: "Why use Tailwind?",
      muongozo: "[HTML/CSS] Utility classes moja kwa moja kwenye HTML kurahisisha UI.",
      jibu_en: "Allows rapid development using utility classes, ensuring consistent styling without custom CSS."
    },
    {
      id: 35,
      swali_sw: "Unazuiaje 'Layout Shift' picha zikifunguka?",
      swali_en: "Preventing Layout Shift?",
      muongozo: "[HTML/CSS] Weka width/height mapema ili browser itenge nafasi.",
      jibu_en: "By specifying width and height attributes to reserve space before the image loads."
    },

    /* KUNDI LA 2: JavaScript & Core Logic (36-70) */
    {
      id: 36,
      swali_sw: "Elezea 'Hoisting' katika JavaScript.",
      swali_en: "Explain Hoisting.",
      muongozo: "[JavaScript] JS kupandisha declarations juu ya scope wakati wa compiling.",
      jibu_en: "Behavior where declarations are moved to the top of their scope before execution."
    },
    {
      id: 37,
      swali_sw: "Tofauti ya == na ===?",
      swali_en: "== vs ===?",
      muongozo: "[JavaScript] == inalinganisha thamani; === thamani na type.",
      jibu_en: "== converts types; === is strict equality requiring same value and data type."
    },
    {
      id: 38,
      swali_sw: "Nini maana ya 'Closure'?",
      swali_en: "What is a Closure?",
      muongozo: "[JavaScript] Function ya ndani inayokumbuka data za nje hata ikishafungwa.",
      jibu_en: "Function retaining access to its outer environment even after outer function finishes."
    },
    {
      id: 39,
      swali_sw: "Elezea 'Event Loop'.",
      swali_en: "Explain the Event Loop.",
      muongozo: "[JavaScript] Mfumo unaoruhusu JS kufanya kazi nyingi bila kukwama.",
      jibu_en: "Mechanism enabling non-blocking I/O by offloading tasks and processing them via queue."
    },
    {
      id: 40,
      swali_sw: "Tofauti ya var, let, na const?",
      swali_en: "var vs let vs const?",
      muongozo: "[JavaScript] var haina mipaka; let inabadilika; const haibadiliki.",
      jibu_en: "var is function-scoped; let/const are block-scoped; const is a read-only reference."
    },
    {
      id: 41,
      swali_sw: "Nini maana ya 'Promises'?",
      swali_en: "What are Promises?",
      muongozo: "[JavaScript] Inawakilisha matokeo ya kazi ya async ambayo haijakamilika.",
      jibu_en: "Represents eventual completion/failure of an async operation and its resulting value."
    },
    {
      id: 42,
      swali_sw: "Elezea 'Arrow Functions'.",
      swali_en: "What are Arrow Functions?",
      muongozo: "[JavaScript] Namna fupi ya kuandika functions bila 'this' yao wenyewe.",
      jibu_en: "Concise syntax that lexically binds the 'this' value from surrounding scope."
    },
    {
      id: 43,
      swali_sw: "'Strict Mode' ni nini?",
      swali_en: "What is Strict Mode?",
      muongozo: "[JavaScript] Hali inayozuia makosa ya kimyakimya na kuongeza usalama.",
      jibu_en: "Restricted version of JS that catches silent errors and prevents unsafe features."
    },
    {
      id: 44,
      swali_sw: "Elezea mbinu ya 'Event Delegation'.",
      swali_en: "Event Delegation?",
      muongozo: "[JavaScript] Kuweka listener moja kwenye parent badala ya kila child.",
      jibu_en: "Attaching handler to parent to manage child events using event bubbling."
    },
    {
      id: 45,
      swali_sw: "Tofauti kati ya Null na Undefined?",
      swali_en: "Null vs Undefined?",
      muongozo: "[JavaScript] Undefined ni kutoassign thamani; Null ni thamani ya 'tupu'.",
      jibu_en: "undefined means no value assigned; null is an assignment representing nothing."
    },
    {
      id: 46,
      swali_sw: "Nini maana ya 'Callback Function'?",
      swali_en: "What is a Callback?",
      muongozo: "[JavaScript] Function inayopitishwa kama parameter kwa nyingine.",
      jibu_en: "Function passed as an argument to be invoked inside the outer function."
    },
    {
      id: 47,
      swali_sw: "Tofauti ya 'Map' na 'ForEach'.",
      swali_en: "Map vs ForEach?",
      muongozo: "[JavaScript] Map inarudisha array mpya; ForEach inafanya kazi tu.",
      jibu_en: "map() returns a new array; forEach() executes function without returning an array."
    },
    {
      id: 48,
      swali_sw: "'This' keyword inamaanisha nini?",
      swali_en: "What is 'this'?",
      muongozo: "[JavaScript] Inawakilisha Object inayofanya kazi wakati huo.",
      jibu_en: "Refers to the object currently executing the code, depending on function call context."
    },
    {
      id: 49,
      swali_sw: "Nini maana ya 'Prototypal Inheritance'?",
      swali_en: "Prototypal Inheritance?",
      muongozo: "[JavaScript] Object kurithi sifa kutoka Object nyingine.",
      jibu_en: "Feature where objects inherit properties from others via a prototype chain."
    },
    {
      id: 50,
      swali_sw: "Tofauti ya 'Synchronous' na 'Asynchronous'.",
      swali_en: "Sync vs Async?",
      muongozo: "[JavaScript] Sync kodi inasubiriana; Async inafanya kazi background.",
      jibu_en: "Sync executes sequentially; Async allows tasks to run without blocking main thread."
    },
    {
      id: 51,
      swali_sw: "Nini maana ya 'JSON'?",
      swali_en: "What is JSON?",
      muongozo: "[JavaScript] Mfumo wa kubadilishana data kwa maandishi rahisi.",
      jibu_en: "Lightweight interchange format easy for humans to read and machines to parse."
    },
    {
      id: 52,
      swali_sw: "Elezea 'Destructuring' katika JS.",
      swali_en: "What is Destructuring?",
      muongozo: "[JavaScript] Kuchukua data moja kwa moja kutoka Array/Object.",
      jibu_en: "Syntax unpacking values from arrays/objects into distinct variables in one expression."
    },
    {
      id: 53,
      swali_sw: "Tofauti ya 'Slice' na 'Splice'?",
      swali_en: "Slice vs Splice?",
      muongozo: "[JavaScript] Slice haiharibu array; Splice inabadilisha array.",
      jibu_en: "slice() returns shallow copy; splice() modifies original array by adding/removing."
    },
    {
      id: 54,
      swali_sw: "'Spread Operator' inafanya nini?",
      swali_en: "What is Spread Operator?",
      muongozo: "[JavaScript] Inatandaza Array/Object moja ndani ya nyingine.",
      jibu_en: "Allows iterable expansion where multiple arguments or elements are expected."
    },
    {
      id: 55,
      swali_sw: "Elezea 'Higher Order Functions'.",
      swali_en: "Higher Order Functions?",
      muongozo: "[JavaScript] Function inayochukua au kurudisha function nyingine.",
      jibu_en: "Function that takes functions as arguments or returns one as its result."
    },
    {
      id: 56,
      swali_sw: "'Template Literals' ni nini?",
      swali_en: "Template Literals?",
      muongozo: "[JavaScript] Andishi kwa backticks (``) na variables kwa ${}.",
      jibu_en: "String literals allowing embedded expressions using placeholder ${} syntax."
    },
    {
      id: 57,
      swali_sw: "Nini maana ya 'Recursion'?",
      swali_en: "What is Recursion?",
      muongozo: "[JavaScript] Function inayojitaja yenyewe mpaka ifikie mwisho.",
      jibu_en: "Technique where a function calls itself until it reaches a base terminating condition."
    },
    {
      id: 58,
      swali_sw: "Elezea 'Type Coercion'.",
      swali_en: "What is Type Coercion?",
      muongozo: "[JavaScript] JS kubadilisha aina ya data moja kwenda nyingine.",
      jibu_en: "Automatic implicit conversion of values from one data type to another."
    },
    {
      id: 59,
      swali_sw: "Nini maana ya 'NaN'?",
      swali_en: "What is NaN?",
      muongozo: "[JavaScript] Not-a-Number, unapotaka hesabu na si namba.",
      jibu_en: "Value resulting from an operation that cannot produce a numeric result (e.g., 0/0)."
    },
    {
      id: 60,
      swali_sw: "'IIFE' inamaanisha nini?",
      swali_en: "What is IIFE?",
      muongozo: "[JavaScript] Function inayojitekeleza mara tu inapoundwa.",
      jibu_en: "Immediately Invoked Function Expression that runs as soon as it is defined."
    },
    {
      id: 61,
      swali_sw: "Vipi una-check kama kitu ni Array?",
      swali_en: "Checking for Array?",
      muongozo: "[JavaScript] Tumia mbinu ya Array.isArray().",
      jibu_en: "Using the Array.isArray(value) method which returns true for arrays."
    },
    {
      id: 62,
      swali_sw: "Nini maana ya 'Strict Equality'?",
      swali_en: "Strict Equality?",
      muongozo: "[JavaScript] Kulinganisha thamani na aina ya data (===).",
      jibu_en: "Comparing values without type conversion (both value and type must match)."
    },
    {
      id: 63,
      swali_sw: "Tofauti ya 'Debouncing' na 'Throttling'?",
      swali_en: "Debouncing vs Throttling?",
      muongozo: "[JavaScript] Debounce inasubiri mwisho; Throttle inapunguza kasi.",
      jibu_en: "Debouncing delays execution until quiet time; Throttling ensures execution at set intervals."
    },
    {
      id: 64,
      swali_sw: "'Pure Functions' ni nini?",
      swali_en: "What are Pure Functions?",
      muongozo: "[JavaScript] Inarudisha jibu lile lile kila wakati bila side effects.",
      jibu_en: "Functions that always return same output for same input with no side effects."
    },
    {
      id: 65,
      swali_sw: "Nini maana ya 'Currying'?",
      swali_en: "What is Currying?",
      muongozo: "[JavaScript] Kubadilisha function ya parameters nyingi kuwa mfululizo.",
      jibu_en: "Transformation of f(a,b,c) into callable chain f(a)(b)(c)."
    },
    {
      id: 66,
      swali_sw: "'Modules' katika JS zina faida gani?",
      swali_en: "Benefits of Modules?",
      muongozo: "[JavaScript] Kugawanya kodi katika mafile madogo madogo.",
      jibu_en: "Breaking code into maintainable files that can export/import functionality."
    },
    {
      id: 67,
      swali_sw: "Elezea dhana ya 'DOM Manipulation'.",
      swali_en: "DOM Manipulation?",
      muongozo: "[JavaScript] Kutumia JS kubadilisha HTML/CSS papo hapo.",
      jibu_en: "Using JS to interact with and modify web page content dynamically."
    },
    {
      id: 68,
      swali_sw: "Tofauti ya 'Local Storage' na 'Session Storage'?",
      swali_en: "Local vs Session Storage?",
      muongozo: "[JavaScript] Local inabaki; Session inafutika ukifunga tab.",
      jibu_en: "Local persists browser close; Session clears when tab or window is closed."
    },
    {
      id: 69,
      swali_sw: "'Event Bubbling' vs 'Event Capturing'?",
      swali_en: "Bubbling vs Capturing?",
      muongozo: "[JavaScript] Bubbling ndani kwenda nje; Capturing nje kwenda ndani.",
      jibu_en: "Bubbling goes up to parents; Capturing goes down to target element."
    },
    {
      id: 70,
      swali_sw: "Elezea matumizi ya 'SetTimeout' na 'SetInterval'?",
      swali_en: "Timeout vs Interval?",
      muongozo: "[JavaScript] Timeout inafanya mara moja; Interval inarudia rudia.",
      jibu_en: "setTimeout runs once after delay; setInterval repeats at fixed time intervals."
    },

    /* KUNDI LA 3: Frameworks & Modern Stack (71-105) */
    {
      id: 71,
      swali_sw: "Virtual DOM ni nini katika React?",
      swali_en: "What is Virtual DOM?",
      muongozo: "[React] Nakala nyepesi inayosaidia ku-update UI haraka.",
      jibu_en: "Lightweight copy of real DOM used to efficiently re-render changed components."
    },
    {
      id: 72,
      swali_sw: "Tofauti kati ya Props na State?",
      swali_en: "Props vs State?",
      muongozo: "[React] Props kutoka nje; State inatengenezwa ndani.",
      jibu_en: "Props are read-only parent inputs; State is local data managed within component."
    },
    {
      id: 73,
      swali_sw: "Elezea matumizi ya 'useEffect' Hook.",
      swali_en: "What is useEffect?",
      muongozo: "[React] Kwa kazi kama kuchukua data kutoka API (side effects).",
      jibu_en: "Hook handling side effects like data fetching or DOM updates in functional components."
    },
    {
      id: 74,
      swali_sw: "Flutter ni nini na faida zake?",
      swali_en: "What is Flutter?",
      muongozo: "[Flutter] Toolkit ya Google kutengeneza apps za simu/web kwa kodi moja.",
      jibu_en: "Google UI SDK for building natively compiled apps for mobile/web/desktop from single codebase."
    },
    {
      id: 75,
      swali_sw: "Tofauti ya 'Stateless' na 'Stateful' widgets?",
      swali_en: "Stateless vs Stateful?",
      muongozo: "[Flutter] Moja haibadiliki; nyingine inabadilika dynamically.",
      jibu_en: "StatelessWidget is static; StatefulWidget rebuilds dynamically when internal state changes."
    },
    {
      id: 76,
      swali_sw: "Nini maana ya 'Redux' au 'Context API'?",
      swali_en: "Redux vs Context API?",
      muongozo: "[React] Mifumo ya kusimamia data globally (state management).",
      jibu_en: "Tools managing shared data globally, avoiding prop drilling across many levels."
    },
    {
      id: 77,
      swali_sw: "'JSX' ni nini?",
      swali_en: "What is JSX?",
      muongozo: "[React] Andishi la HTML ndani ya JavaScript katika React.",
      jibu_en: "JavaScript XML allowing HTML-like structures directly in JavaScript code."
    },
    {
      id: 78,
      swali_sw: "Elezea mbinu ya 'Lifting State Up'.",
      swali_en: "Lifting State Up?",
      muongozo: "[React] Kuhamisha state kwa parent ili watoto waishare.",
      jibu_en: "Moving shared state to the closest common ancestor for access/modification."
    },
    {
      id: 79,
      swali_sw: "'Hot Reload' inafanya kazi gani?",
      swali_en: "Hot Reload in Flutter?",
      muongozo: "[Flutter] Kuona mabadiliko ya kodi papo hapo bila kuwasha app upya.",
      jibu_en: "Injecting updated code into running VM to see UI changes instantly without losing state."
    },
    {
      id: 80,
      swali_sw: "Faida ya Next.js dhidi ya React ya kawaida?",
      swali_en: "Next.js vs React?",
      muongozo: "[React] SEO bora kupitia Server-Side Rendering (SSR).",
      jibu_en: "Built-in features like SSR and SSG that improve SEO and initial load speed."
    },
    {
      id: 81,
      swali_sw: "Elezea dhana ya 'Key' katika React Lists.",
      swali_en: "Keys in React?",
      muongozo: "[React] Inasaidia React kutambua element gani imebadilika.",
      jibu_en: "Unique identifiers tracking list changes to optimize rendering process."
    },
    {
      id: 82,
      swali_sw: "Nini maana ya 'Pubspec.yaml'?",
      swali_en: "What is pubspec.yaml?",
      muongozo: "[Flutter] File linalotunza maelezo ya app na dependencies.",
      jibu_en: "Manages metadata, assets (images/fonts), and packages for Flutter projects."
    },
    {
      id: 83,
      swali_sw: "Elezea 'Material' na 'Cupertino' widgets.",
      swali_en: "Material vs Cupertino?",
      muongozo: "[Flutter] Material ni Android; Cupertino ni muonekano wa iOS.",
      jibu_en: "Material widgets for Google/Android design; Cupertino for Apple/iOS mimicry."
    },
    {
      id: 84,
      swali_sw: "Nini maana ya 'Widget Tree'?",
      swali_en: "What is the Widget Tree?",
      muongozo: "[Flutter] Mfumo wa widget zilizopangwa moja ndani ya nyingine.",
      jibu_en: "Hierarchical structure defining layout and behavior via nested widgets."
    },
    {
      id: 85,
      swali_sw: "'Server-Side Rendering' (SSR) ina faida gani?",
      swali_en: "Benefits of SSR?",
      muongozo: "[Frameworks] Inatuma website kamili kwa browser kwa SEO bora.",
      jibu_en: "Pre-renders on server so crawlers index full content easily, essential for SEO."
    },
    {
      id: 86,
      swali_sw: "Matumizi ya 'Provider' au 'Bloc'?",
      swali_en: "Provider vs Bloc?",
      muongozo: "[Flutter] Mbinu za kusimamia data (state management).",
      jibu_en: "State management frameworks separating business logic from UI for scalability."
    },
    {
      id: 87,
      swali_sw: "Nini maana ya 'Tailwind CSS'?",
      swali_en: "What is Tailwind?",
      muongozo: "[CSS] Kupaka rangi/mpangilio kwa utility classes moja kwa moja.",
      jibu_en: "Utility-first CSS framework for building custom designs directly in HTML."
    },
    {
      id: 88,
      swali_sw: "'TypeScript' inatusaidia nini?",
      swali_en: "Why use TypeScript?",
      muongozo: "[Web Dev] Inazuia makosa kwa kuhakikisha aina sahihi za data.",
      jibu_en: "JS superset adding static typing to catch errors early and improve maintainability."
    },
    {
      id: 89,
      swali_sw: "Elezea 'Build Context'.",
      swali_en: "What is BuildContext?",
      muongozo: "[Flutter] Inatambulisha widget iko wapi katika tree.",
      jibu_en: "Handle to widget's location in tree, used for theme and navigation access."
    },
    {
      id: 90,
      swali_sw: "Nini maana ya 'Reconciliation'?",
      swali_en: "What is Reconciliation?",
      muongozo: "[React] React kulinganisha Virtual DOM mpya na ya zamani.",
      jibu_en: "Algorithm comparing Virtual DOM trees to minimize real DOM updates."
    },
    {
      id: 91,
      swali_sw: "'Dart' ni nini?",
      swali_en: "What is Dart?",
      muongozo: "[Flutter] Lugha ya programu inayotumiwa na Flutter.",
      jibu_en: "Client-optimized language by Google for high-performance multi-platform apps."
    },
    {
      id: 92,
      swali_sw: "Matumizi ya 'FutureBuilder'?",
      swali_en: "What is FutureBuilder?",
      muongozo: "[Flutter] Chora UI kulingana na data kutoka API (Futures).",
      jibu_en: "Widget building itself based on latest snapshot of interaction with a Future."
    },
    {
      id: 93,
      swali_sw: "Nini maana ya 'Hooks'?",
      swali_en: "What are React Hooks?",
      muongozo: "[React] Functional components kutumia state na lifecycle.",
      jibu_en: "Functions let you 'hook into' React features from functional components."
    },
    {
      id: 94,
      swali_sw: "'Async/Await' inafanya kazi gani?",
      swali_en: "Async/Await logic?",
      muongozo: "[Web Dev] Andika kodi ya kusubiri data bila website kukwama.",
      jibu_en: "Syntactical sugar over Promises for readable, non-blocking asynchronous code."
    },
    {
      id: 95,
      swali_sw: "Vipi una-implement 'Responsiveness'?",
      swali_en: "Responsiveness in Flutter?",
      muongozo: "[Flutter] LayoutBuilder au MediaQuery kurekebisha ukubwa.",
      jibu_en: "Achieved via MediaQuery for dimensions and LayoutBuilder for constraints."
    },
    {
      id: 96,
      swali_sw: "Nini maana ya 'Pure Component'?",
      swali_en: "Pure Component?",
      muongozo: "[React] Inachora upya tu ikiwa props/state imebadilika.",
      jibu_en: "Re-renders only if props/state shallowly change, improving performance."
    },
    {
      id: 97,
      swali_sw: "Dhana ya 'Navigation' na 'Routing'.",
      swali_en: "Navigation vs Routing?",
      muongozo: "[Web Dev] Kuhama kati ya kurasa ndani ya app.",
      jibu_en: "Routing directs users to views; Navigation is the UI process of moving."
    },
    {
      id: 98,
      swali_sw: "Tofauti ya 'Framework' na 'Library'?",
      swali_en: "Framework vs Library?",
      muongozo: "[Web Dev] Framework inakuongoza; Library wewe unaicall.",
      jibu_en: "Library tools are called by you; Framework structure calls your code."
    },
    {
      id: 99,
      swali_sw: "'Widget Life Cycle' inahusisha nini?",
      swali_en: "Flutter Life Cycle?",
      muongozo: "[Flutter] Hatua tangu iundwe mpaka ifutwe (initState, dispose).",
      jibu_en: "Methods (initState, build, dispose) executed during widget existence."
    },
    {
      id: 100,
      swali_sw: "Elezea dhana ya 'Micro-frontend'.",
      swali_en: "What is Micro-frontend?",
      muongozo: "[Web Dev] Kugawanya website iwe apps ndogo zilizounganishwa.",
      jibu_en: "Architectural style where web app is broken into semi-independent apps."
    },
    {
      id: 101,
      swali_sw: "'State Management' ni nini kibiashara?",
      swali_en: "Commercial State Management?",
      muongozo: "[Web Dev] Kutunza data za mteja (cart items) sehemu salama.",
      jibu_en: "Managing application data efficiently so UI stays in sync with underlying state."
    },
    {
      id: 102,
      swali_sw: "'API Documentation' ina umuhimu gani?",
      swali_en: "Why document APIs?",
      muongozo: "[Backend] Inasaidia developers kuelewa namna ya kutumia backend.",
      jibu_en: "Ensures front-end/partners can integrate without constant support (e.g., Swagger)."
    },
    {
      id: 103,
      swali_sw: "Faida ya 'Dark Mode' kikiufundi?",
      swali_en: "Technical Dark Mode?",
      muongozo: "[UI/UX] Punguza betri (OLED) na uchovu wa macho.",
      jibu_en: "Reduces power consumption on OLEDs and provides comfortable low-light viewing."
    },
    {
      id: 104,
      swali_sw: "'Skeleton Screens' ni nini?",
      swali_en: "What are Skeleton Screens?",
      muongozo: "[UI/UX] Mistari inayotokea kabla data hazijafika (Placeholders).",
      jibu_en: "Low-fidelity placeholders displayed during loading to improve perceived speed."
    },
    {
      id: 105,
      swali_sw: "Unachaguaje rangi kwa ajili ya 'CTA' button?",
      swali_en: "Choosing CTA colors?",
      muongozo: "[UI/UX] Tumia rangi inayong'ara (Neo-Mint vs Deep Blue).",
      jibu_en: "High-contrast colors to stand out visually and prompt user action immediately."
    },

    /* KUNDI LA 4: Backend, APIs & Data (106-130) */
    {
      id: 106,
      swali_sw: "Tofauti ya REST na GraphQL?",
      swali_en: "REST vs GraphQL?",
      muongozo: "[APIs] REST endpoints tofauti; GraphQL mlango mmoja.",
      jibu_en: "REST uses fixed structures; GraphQL allows clients to request specific data needed."
    },
    {
      id: 107,
      swali_sw: "Elezea 'Middleware' katika Node.js/Laravel.",
      swali_en: "What is Middleware?",
      muongozo: "[Backend] Functions kati ya request na response kwa ulinzi.",
      jibu_en: "Bridge between request and response used for authentication/logging."
    },
    {
      id: 108,
      swali_sw: "Nini maana ya 'MVC Architecture'?",
      swali_en: "What is MVC?",
      muongozo: "[Architecture] Model (Data), View (UI), na Controller (Logic).",
      jibu_en: "Design pattern decoupling data, user interface, and core application logic."
    },
    {
      id: 109,
      swali_sw: "Elezea 'Authentication' vs 'Authorization'.",
      swali_en: "Auth vs Auth?",
      muongozo: "[Backend] Identity vs Permission.",
      jibu_en: "Authentication verifies who; Authorization determines what actions are allowed."
    },
    {
      id: 110,
      swali_sw: "'SQL Injection' ni nini na unazuiaje?",
      swali_en: "SQLi prevention?",
      muongozo: "[Security] Kodi haramu; zuia kwa prepared statements.",
      jibu_en: "Vulnerability where malicious code is executed; prevented by parameterized queries."
    },
    {
      id: 111,
      swali_sw: "Laravel 'Artisan' inatusaidia nini?",
      swali_en: "What is Artisan?",
      muongozo: "[Backend] Command-line kurahisisha migrations/testing.",
      jibu_en: "Built-in CLI automating tasks like database migrations and boilerplate generation."
    },
    {
      id: 112,
      swali_sw: "Faida ya Node.js kwa real-time applications?",
      swali_en: "Real-time Node.js?",
      muongozo: "[Backend] Haraka kwa sababu ni non-blocking.",
      jibu_en: "Event-driven architecture handles concurrent connections efficiently (e.g., chats)."
    },
    {
      id: 113,
      swali_sw: "Elezea dhana ya 'Dependency Injection'.",
      swali_en: "Dependency Injection?",
      muongozo: "[Architecture] Kupitisha hitaji kama parameter toka nje.",
      jibu_en: "Pattern where object dependencies are provided externally for modularity."
    },
    {
      id: 114,
      swali_sw: "Node.js Event Loop kibiashara?",
      swali_en: "Commercial Event Loop?",
      muongozo: "[Backend] Hudumia maelfu kwa wakati mmoja bila kukwama.",
      jibu_en: "Handles high volume I/O asynchronously on a single thread, reducing costs."
    },
    {
      id: 115,
      swali_sw: "Laravel 'Migrations' ni nini?",
      swali_en: "What are Migrations?",
      muongozo: "[Backend] Version control ya database.",
      jibu_en: "Allows teams to share and modify database schemas across environments safely."
    },
    {
      id: 116,
      swali_sw: "Tofauti ya 'Monolithic' na 'Microservices'?",
      swali_en: "Monolith vs Microservices?",
      muongozo: "[Architecture] Mfumo mmoja mkubwa vs mifumo midogo mingi.",
      jibu_en: "Single unified app vs independent services communicating via APIs."
    },
    {
      id: 117,
      swali_sw: "Elezea 'API Endpoints' na 'Rate Limiting'.",
      swali_en: "Endpoints & Rate Limiting?",
      muongozo: "[APIs] Anwani ya data vs kuzuia maombi mengi kupita kiasi.",
      jibu_en: "Endpoints access data; Rate limiting protects servers from abuse/overload."
    },
    {
      id: 118,
      swali_sw: "Nini maana ya 'JWT'?",
      swali_en: "What is JWT?",
      muongozo: "[Security] Namba siri iliyosimbwa inayomtambulisha mteja.",
      jibu_en: "JSON Web Token for stateless authentication in modern web applications."
    },
    {
      id: 119,
      swali_sw: "Mbinu ya 'Unit Testing' katika Backend.",
      swali_en: "What is Unit Testing?",
      muongozo: "[DevOps] Pima sehemu ndogo kabisa ya kodi peke yake.",
      jibu_en: "Testing isolated individual functions to ensure each component behaves correctly."
    },
    {
      id: 120,
      swali_sw: "'CORS' ni nini kikiufundi?",
      swali_en: "What is CORS?",
      muongozo: "[Security] Ulinzi unaoruhusu/kuzuia domains kuchukua data.",
      jibu_en: "Security mechanism controlling how web apps from one domain interact with another."
    },
    {
      id: 121,
      swali_sw: "Blade au JinJa templating engines?",
      swali_en: "Templating engines?",
      muongozo: "[Backend] PHP au Python ndani ya HTML kitalamu.",
      jibu_en: "Allow embedding backend logic within HTML files using clean syntax."
    },
    {
      id: 122,
      swali_sw: "Elezea dhana ya 'Caching' (Redis).",
      swali_en: "What is Caching?",
      muongozo: "[Backend] Tunza data inayohitajika sana sehemu ya haraka.",
      jibu_en: "Storing accessed data in memory (RAM) to reduce database load and latency."
    },
    {
      id: 123,
      swali_sw: "Node.js streams zinatusaidia nini?",
      swali_en: "Why use Streams?",
      muongozo: "[Backend] Soma mafile makubwa kidogo kidogo bila kujaza RAM.",
      jibu_en: "Enable efficient processing of large data piece by piece without high memory usage."
    },
    {
      id: 124,
      swali_sw: "Nini maana ya 'ORM'?",
      swali_en: "What is ORM?",
      muongozo: "[Backend] Kutumia kodi ya kawaida (PHP/JS) kuongea na DB.",
      jibu_en: "Object-Relational Mapping abstracting raw SQL into language-specific objects."
    },
    {
      id: 125,
      swali_sw: "Vipi una-handle 'Error Handling' katika API?",
      swali_en: "API Error Handling?",
      muongozo: "[Backend] Tumia Status Codes (404, 500) na ujumbe wazi.",
      jibu_en: "Returning appropriate HTTP codes and clear JSON messages for request failure."
    },
    {
      id: 126,
      swali_sw: "Node.js 'npm' au 'yarn'?",
      swali_en: "npm vs yarn?",
      muongozo: "[Backend] Maduka ya programu ndogo (packages).",
      jibu_en: "Package managers automating installation and management of external libraries."
    },
    {
      id: 127,
      swali_sw: "Dhana ya 'WebSockets' mabenki nchini.",
      swali_en: "WebSockets for Banking?",
      muongozo: "[Backend] Alerts za miamala real-time bila kufunga mlango.",
      jibu_en: "Full-duplex channels for real-time notifications and live transaction feeds."
    },
    {
      id: 128,
      swali_sw: "Nini maana ya '.env' files?",
      swali_en: "What is .env?",
      muongozo: "[Backend] Kuficha siri kama password za DB.",
      jibu_en: "Environment variables storing sensitive config outside of source code."
    },
    {
      id: 129,
      swali_sw: "'CSRF Protection' inafanya kazi gani?",
      swali_en: "CSRF Prevention?",
      muongozo: "[Security] Zuia mtu kutumia akaunti yako bila wewe kujua.",
      jibu_en: "Uses unique tokens to verify requests originate from the authenticated user."
    },
    {
      id: 130,
      swali_sw: "Laravel 'Service Providers'?",
      swali_en: "Service Providers?",
      muongozo: "[Backend] Mahali app inapojiandaa kufanya kazi (booting).",
      jibu_en: "Central place to configure and register application services and dependencies."
    },

    /* KUNDI LA 5: Database, DevOps & Local Laws (131-150) */
    {
      id: 131,
      swali_sw: "Tofauti kati ya SQL na NoSQL?",
      swali_en: "SQL vs NoSQL?",
      muongozo: "[Databases] SQL structured/relational; NoSQL flexible/schema-less.",
      jibu_en: "Structured tables vs schema-less datasets for high-velocity or large data."
    },
    {
      id: 132,
      swali_sw: "'Git' ni nini na faida zake?",
      swali_en: "What is Git?",
      muongozo: "[DevOps] Kutunza matoleo ya kodi na kushirikiana.",
      jibu_en: "Distributed version control tracking changes and allowing collaborative development."
    },
    {
      id: 133,
      swali_sw: "'CI/CD' inamaanisha nini?",
      swali_en: "What is CI/CD?",
      muongozo: "[DevOps] Automation ya majaribio na kurusha kodi (deploy).",
      jibu_en: "Continuous Integration/Deployment automating software releases for reliability."
    },
    {
      id: 134,
      swali_sw: "Sheria ya PDPA 2022 inasema nini?",
      swali_en: "PDPA 2022 Mandate?",
      muongozo: "[Legal TZ] Uhalali wa kukusanya data na haki ya kufuta.",
      jibu_en: "Mandates lawful processing and transparency, granting citizens rights to privacy."
    },
    {
      id: 135,
      swali_sw: "Wakala wa Serikali Mtandao (eGA)?",
      swali_en: "What is eGA?",
      muongozo: "[Legal TZ] Viwango na usimamizi wa TEHAMA serikalini.",
      jibu_en: "Authority coordinating e-gov initiatives and enforcing standards across public sector."
    },
    {
      id: 136,
      swali_sw: "Nini maana ya 'Database Indexing'?",
      swali_en: "Indexing purpose?",
      muongozo: "[Databases] Kama index ya kitabu; pata data haraka.",
      jibu_en: "Creating a structured map to speed up searches on large database tables."
    },
    {
      id: 137,
      swali_sw: "Elezea 'ACID Properties'.",
      swali_en: "ACID Properties?",
      muongozo: "[Databases] Atomicity, Consistency, Isolation, Durability.",
      jibu_en: "Principles ensuring database transactions are complete and consistent."
    },
    {
      id: 138,
      swali_sw: "'Normalization' vs 'Denormalization'?",
      swali_en: "Normalize or Denormalize?",
      muongozo: "[Databases] Punguza urudiaji vs ongeza kasi ya kusoma.",
      jibu_en: "Normalization reduces redundancy; Denormalization improves query speed."
    },
    {
      id: 139,
      swali_sw: "Faida ya Docker/Containers?",
      swali_en: "Why use Docker?",
      muongozo: "[DevOps] App kufanya kazi popote kitalamu (consistency).",
      jibu_en: "Packages apps into isolated containers, ensuring they run anywhere regardless of host."
    },
    {
      id: 140,
      swali_sw: "Elezea 'Git Branching' strategy.",
      swali_en: "Git Branching?",
      muongozo: "[DevOps] Kugawanya timu kufanya features tofauti.",
      jibu_en: "Defines how developers isolate changes and manage merges effectively."
    },
    {
      id: 141,
      swali_sw: "Nini maana ya 'Code Review'?",
      swali_en: "Why Code Review?",
      muongozo: "[DevOps] Mwenzako kukagua kodi yako kabla haijaenda live.",
      jibu_en: "Systematic examination of code to find bugs and share knowledge."
    },
    {
      id: 142,
      swali_sw: "'Unit' vs 'Integration' Testing?",
      swali_en: "Unit vs Integration?",
      muongozo: "[DevOps] Function pekee vs mifumo iliyounganishwa.",
      jibu_en: "Testing isolated functions vs verifying modules work together correctly."
    },
    {
      id: 143,
      swali_sw: "Elezea 'Technical Debt'.",
      swali_en: "What is Technical Debt?",
      muongozo: "[DevOps] Kodi duni kwa ajili ya kuwahi muda; italeta gharama baadaye.",
      jibu_en: "Implied cost of additional rework caused by choosing fast/easy solutions now."
    },
    {
      id: 144,
      swali_sw: "Nini maana ya 'Serverless Computing'?",
      swali_en: "What is Serverless?",
      muongozo: "[DevOps] Andika kodi bila kuhangaika na server hardware.",
      jibu_en: "Running apps without managing infrastructure, paying only for resource use."
    },
    {
      id: 145,
      swali_sw: "Vipi una-register startup ICT Commission?",
      swali_en: "ICT Commission startup registration?",
      muongozo: "[Legal TZ] Mfumo wa Startup Labeling kwenye tovuti yao.",
      jibu_en: "Acquiring 'ICT Startup Label' via online platform for innovation and impact."
    },
    {
      id: 146,
      swali_sw: "Nini maana ya 'e-GIF'?",
      swali_en: "What is e-GIF?",
      muongozo: "[Legal TZ] Mifumo ya serikali kuongea kitalamu (Interoperability).",
      jibu_en: "Set of policies enabling different gov ICT systems to exchange info seamlessly."
    },
    {
      id: 147,
      swali_sw: "Matumizi ya 'GePG' malipo ya serikali.",
      swali_en: "GePG role?",
      muongozo: "[Legal TZ] Mfumo mkuu wa namba ya control serikalini.",
      jibu_en: "Centralized gateway for collecting revenues via mobile money, banks, and apps."
    },
    {
      id: 148,
      swali_sw: "Umuhimu wa 'Interoperability' serikalini.",
      swali_en: "Why Interoperability?",
      muongozo: "[Legal TZ] Kuepusha silos na kusaidia data kutumika sehemu nyingi.",
      jibu_en: "Breaking down silos for secure data sharing, improving service delivery time."
    },
    {
      id: 149,
      swali_sw: "'Startup Labeling' na faida zake.",
      swali_en: "Benefits of Startup Labeling?",
      muongozo: "[Legal TZ] Kutambuliwa rasmi na kupata tenda za serikali.",
      jibu_en: "Official validation unlocking preferential treatment in procurement and incubation."
    },
    {
      id: 150,
      swali_sw: "Majukumu ya 'Data Protection Officer' (DPO)?",
      swali_en: "Role of a DPO?",
      muongozo: "[Legal TZ] Kuhakikisha taasisi inafuata PDPA 2022.",
      jibu_en: "Monitoring compliance with privacy laws and acting as primary contact for PDPC."
    }
  ]
};

export default programmingData;