import {
  Lightbulb,
  Monitor,
  Stethoscope,
  Calculator,
  Settings,
  Gavel,
  Truck,
  Users
} from "lucide-react";

export const interviewCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: Lightbulb,
    subcategories: [
      { id: "core", title: "General Practice" }
    ]
  },

  {
    id: "it",
    title: "Information Technology (IT)",
    icon: Monitor,
    subcategories: [
      { id: "networking", title: "Networking & Security" },
      { id: "programming", title: "Programming & Web Dev" },
      { id: "ai", title: "AI, Machine Learning & Data Science" },
      { id: "hardware", title: "Hardware & Troubleshooting" },
      { id: "software", title: "General Software & OS" }
    ]
  },

  {
    id: "health",
    title: "Sekta ya Afya",
    icon: Stethoscope,
    subcategories: [
      { id: "clinical", title: "Clinical Medicine" },
      { id: "nursing", title: "Nursing & Midwifery" },
      { id: "laboratory", title: "Laboratory Sciences" },
      { id: "pharmacy", title: "Pharmacy" },
      { id: "public-health", title: "Public Health" }
    ]
  },

  {
    id: "engineering",
    title: "Engineering",
    icon: Settings,
    subcategories: [
      { id: "civil", title: "Civil Engineering" },
      { id: "electrical", title: "Electrical Engineering" },
      { id: "mechanical", title: "Mechanical Engineering" },
      { id: "architecture", title: "Architecture (Wasanifu)" }
    ]
  },

  {
    id: "accounting",
    title: "Uhasibu (Accountants)",
    icon: Calculator,
    subcategories: [
      { id: "core", title: "Accounting Practice" }
    ]
  },

  {
    id: "law",
    title: "Sheria (Law)",
    icon: Gavel,
    subcategories: [
      { id: "core", title: "Law Practice" }
    ]
  },

  {
    id: "procurement",
    title: "Procurement & Supply",
    icon: Truck,
    subcategories: [
      { id: "core", title: "Procurement Practice" }
    ]
  },

  {
    id: "hr",
    title: "Human Resources (HR)",
    icon: Users,
    subcategories: [
      { id: "core", title: "HR Practice" }
    ]
  }
];