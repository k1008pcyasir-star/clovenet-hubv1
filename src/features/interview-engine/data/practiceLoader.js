/* =====================================================
   PRACTICE LOADER – SAFE & SCALABLE VERSION
===================================================== */

// ================= GENERAL =================
import general from "./general";

// ================= IT =================
import networking from "./it/networking";
import programming from "./it/programming";
import ai from "./it/ai";
import hardware from "./it/hardware";
import generalSoftware from "./it/generalSoftware";

// ================= HEALTH =================
import clinical from "./health/clinical";
import nursing from "./health/nursing";
import laboratory from "./health/laboratory";
import pharmacy from "./health/pharmacy";
import publicHealth from "./health/publicHealth";

// ================= ACCOUNTING =================
import accounting from "./accounting";

// ================= LAW =================
import lawModule from "./law";

// ================= PROCUREMENT =================
import procurementModule from "./procurement";

// ================= HUMAN RESOURCES =================
import hrModule from "./hr";

// ================= ENGINEERING =================
import civil from "./engineering/civil";
import electricalModule from "./engineering/electrical";
import mechanicalModule from "./engineering/mechanical";
import architectureModule from "./engineering/architecture";

/* =====================================================
   SAFE DEFAULT EXPORT HANDLER
===================================================== */

function safeModule(mod, name) {
  if (!mod) {
    console.warn(`PracticeLoader: Module '${name}' is undefined`);
    return null;
  }

  if (mod.default) return mod.default;

  return mod;
}

// Resolve modules safely
const law = safeModule(lawModule, "law");
const procurement = safeModule(procurementModule, "procurement");
const hr = safeModule(hrModule, "hr");

const electrical = safeModule(electricalModule, "electrical");
const mechanical = safeModule(mechanicalModule, "mechanical");
const architecture = safeModule(architectureModule, "architecture");

/* =====================================================
   MASTER PRACTICE MAP
===================================================== */

const practiceMap = {
  general: {
    core: general
  },

  it: {
    networking,
    programming,
    ai,
    hardware,
    software: generalSoftware
  },

  health: {
    clinical,
    nursing,
    laboratory,
    pharmacy,
    "public-health": publicHealth
  },

  accounting: {
    core: accounting
  },

  law: {
    core: law
  },

  procurement: {
    core: procurement
  },

  hr: {
    core: hr
  },

  engineering: {
    civil,
    electrical,
    mechanical,
    architecture
  }
};

/* =====================================================
   SAFE GETTER
===================================================== */

export function getPracticeData(category, subcategory) {
  if (!category || !subcategory) {
    console.warn("PracticeLoader: Missing category or subcategory");
    return null;
  }

  const categoryData = practiceMap[category];

  if (!categoryData) {
    console.warn(`PracticeLoader: Category '${category}' not found`);
    return null;
  }

  const data = categoryData[subcategory];

  if (!data) {
    console.warn(
      `PracticeLoader: Subcategory '${subcategory}' not found under '${category}'`
    );
    return null;
  }

  return data;
}

/* =====================================================
   DEBUG HELPERS
===================================================== */

export function getAvailableCategories() {
  return Object.keys(practiceMap);
}

export function getAvailableSubcategories(category) {
  return practiceMap[category]
    ? Object.keys(practiceMap[category])
    : [];
}