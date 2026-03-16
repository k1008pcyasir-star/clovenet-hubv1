import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GuidedFlowProvider } from "./context/GuidedFlowContext";
import { LanguageProvider } from "./context/LanguageContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <GuidedFlowProvider>
          <App />
        </GuidedFlowProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);