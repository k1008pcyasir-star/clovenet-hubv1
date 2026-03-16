import { Routes, Route, Navigate } from "react-router-dom";

/* ================= LANDING ================= */
import Landing from "../features/landing/Landing";

/* ================= GUIDED FLOW ================= */
import GoalSelection from "../features/guided-flow/pages/GoalSelection";
import Details from "../features/guided-flow/pages/Details";
import Skills from "../features/guided-flow/pages/Skills";
import Result from "../features/guided-flow/pages/Result";

/* ================= TOOLS ================= */
import ToolsDashboard from "../features/tools/ToolsDashboard";
import PdfConverter from "../features/tools/PdfConverter";
import ResizePhoto from "../features/tools/ResizePhoto";
import MergePdf from "../features/tools/MergePdf";
import CompressPdf from "../features/tools/CompressPdf";

/* ================= PORTALS ================= */
import PortalSelection from "../features/portal/PortalSelection";
import ZanajiraPortalFlow from "../features/portal/zanajira/ZanajiraPortalFlow";
import AjiraPortalFlow from "../features/portal/ajira/AjiraPortalFlow";

/* ================= INTERVIEW ================= */
import InterviewDashboard from "../features/interview-engine/InterviewDashboard";
import CategoryPage from "../features/interview-engine/CategoryPage";
import SubCategoryPage from "../features/interview-engine/SubCategoryPage";
import PracticePage from "../features/interview-engine/PracticePage";

/* ================= LEARN ================= */
import LearnDashboard from "../features/learn/LearnDashboard";

/* ================= EMAIL MODULE ================= */
// Tunatumia EmailGuide pekee ambayo ipo kwenye folder uliyotaja
import EmailGuide from "../features/learn/modules/email/EmailGuide";

export default function AppRoutes() {
  return (
    <Routes>
      {/* LANDING */}
      <Route path="/" element={<Landing />} />

      {/* GUIDED FLOW */}
      <Route path="/guided-flow" element={<GoalSelection />} />
      <Route path="/guided-flow/details" element={<Details />} />
      <Route path="/guided-flow/skills" element={<Skills />} />
      <Route path="/guided-flow/result" element={<Result />} />

      {/* TOOLS */}
      <Route path="/tools" element={<ToolsDashboard />} />
      <Route path="/tools/pdf-converter" element={<PdfConverter />} />
      <Route path="/tools/resize-photo" element={<ResizePhoto />} />
      <Route path="/tools/merge-pdf" element={<MergePdf />} />
      <Route path="/tools/compress-pdf" element={<CompressPdf />} />

      {/* PORTALS */}
      <Route path="/portal" element={<PortalSelection />} />
      <Route path="/portal/zanajira" element={<ZanajiraPortalFlow />} />
      <Route path="/portal/ajira" element={<AjiraPortalFlow />} />

      {/* INTERVIEW */}
      <Route path="/interview" element={<InterviewDashboard />} />
      <Route path="/interview/:category/:subcategory/practice" element={<PracticePage />} />
      <Route path="/interview/:category/:subcategory" element={<SubCategoryPage />} />
      <Route path="/interview/:category" element={<CategoryPage />} />

      {/* LEARN */}
      <Route path="/learn" element={<LearnDashboard />} />

      {/* EMAIL GUIDE (Muundo Safi) */}
      {/* Hakuna tena <Route index>, tunatumia path moja kwa EmailGuide */}
      <Route path="/learn/email" element={<EmailGuide />} />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}