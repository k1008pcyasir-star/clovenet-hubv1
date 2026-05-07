import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useT } from "../i18n/useT";
import { searchData } from "../search/searchData";
import { filterSearchResults } from "../search/searchUtils";

export default function Layout({
  children,
  showProgress = false,
  currentStep = 1,
  totalSteps = 6,
  globalSearch = "",
  onGlobalSearchChange = null,
}) {
  const { language, setLanguage } = useLanguage();
  const { t } = useT();
  const navigate = useNavigate();
  const sw = language === "sw";

  const progress = (currentStep / totalSteps) * 100;
  const feedbackFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdylzsGEflnYOPPzTAehvk0-H7DdQERESuLH_nWsP2w2WoT2Q/viewform?usp=publish-editor";

  const isControlledSearch = typeof onGlobalSearchChange === "function";
  const [internalSearch, setInternalSearch] = useState(globalSearch || "");
  const [isSearchOpen, setIsSearchOpen]     = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const searchDesktopRef = useRef(null);
  const searchMobileRef  = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isControlledSearch) setInternalSearch(globalSearch || "");
  }, [globalSearch, isControlledSearch]);

  useEffect(() => {
    function handleClickOutside(e) {
      const outsideDesktop = searchDesktopRef.current && !searchDesktopRef.current.contains(e.target);
      const outsideMobile  = searchMobileRef.current  && !searchMobileRef.current.contains(e.target);
      if (outsideDesktop && outsideMobile) setIsSearchOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchQuery = isControlledSearch ? globalSearch : internalSearch;

  const updateSearch = (value) => {
    if (isControlledSearch) onGlobalSearchChange(value);
    else setInternalSearch(value);
    setIsSearchOpen(true);
  };

  const clearSearch = () => {
    if (isControlledSearch) onGlobalSearchChange("");
    else setInternalSearch("");
    setIsSearchOpen(false);
  };

  const results = useMemo(
    () => filterSearchResults(searchQuery, language, searchData).slice(0, 8),
    [searchQuery, language]
  );

  const getTypeLabel = (type) => {
    const labels = {
      sw: { feature: "Sehemu", tool: "Zana", portal: "Portal", learn: "Mafunzo" },
      en: { feature: "Feature", tool: "Tool", portal: "Portal", learn: "Learning" },
    };
    return labels[language]?.[type] || (sw ? "Matokeo" : "Result");
  };

  const handleSelectResult = (item) => {
    navigate(item.path);
    clearSearch();
  };

  /* ── Search box ─────────────────────────────────── */
  const renderSearchBox = (wrapperRef) => (
    <div className="relative w-full" ref={wrapperRef}>
      {/* Flex container — icon + input side by side, hakuna absolute positioning */}
      <div className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-full bg-slate-50 hover:border-slate-300 focus-within:border-slate-300 focus-within:bg-white transition">
        <input
          type="text"
          name="globalSearch"
          value={searchQuery}
          onChange={(e) => updateSearch(e.target.value)}
          onFocus={() => setIsSearchOpen(true)}
          placeholder={t("common.searchPlaceholder")}
          className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none min-w-0"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="text-slate-400 hover:text-slate-600 transition shrink-0"
            aria-label={sw ? "Futa utafutaji" : "Clear search"}
          >
            <X size={15} />
          </button>
        )}
      </div>

      {isSearchOpen && searchQuery.trim() && (
        <div className="absolute left-0 right-0 mt-2 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden z-50">
          {results.length > 0 ? (
            <div className="py-1.5">
              {results.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectResult(item)}
                  className="w-full px-4 py-2.5 text-left hover:bg-teal-50 transition flex items-center justify-between gap-3"
                >
                  <span className="font-semibold text-sm text-slate-800">
                    {item.title[language]}
                  </span>
                  <span className="text-[10px] font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full shrink-0">
                    {getTypeLabel(item.type)}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-4 text-sm text-slate-500">
              {sw ? "Hakuna matokeo yaliyopatikana." : "No results found."}
            </div>
          )}
        </div>
      )}
    </div>
  );

  /* ── Layout ─────────────────────────────────────── */
  return (
    <div className="min-h-screen flex flex-col bg-clovenet-bg text-slate-900">

      {/* ══════════ HEADER ══════════ */}
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-slate-100" : "shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-5 h-16">

            {/* ── Brand (clickable) ── */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="shrink-0 flex items-center gap-2 cursor-pointer select-none group"
              aria-label="Go to home page"
            >
              {/* Icon — teal rounded square with C */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-600 flex items-center justify-center shadow-sm group-hover:bg-teal-700 transition">
                <span className="text-white font-extrabold text-sm sm:text-base leading-none">C</span>
              </div>
              {/* Brand name */}
              <span className="text-slate-900 font-extrabold text-base sm:text-lg leading-none tracking-tight">
                Clove<span className="text-teal-600">Net</span>{" "}
                <span className="font-semibold text-slate-700">Hub</span>
              </span>
            </button>

            {/* ── Search — desktop ── */}
            <div className="hidden md:flex flex-1 justify-center px-4 lg:px-8 min-w-0">
              <div className="w-full max-w-sm lg:max-w-md">
                {renderSearchBox(searchDesktopRef)}
              </div>
            </div>

            {/* Spacer mobile */}
            <div className="flex-1 md:hidden" />

            {/* ── Language switcher — EN | SW pills ── */}
            <div className="shrink-0 flex items-center bg-slate-100 rounded-full p-0.5 gap-0.5">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  language === "en"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("sw")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  language === "sw"
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                SW
              </button>
            </div>

          </div>

          {/* ── Search — mobile ── */}
          <div className="md:hidden pb-3">
            {renderSearchBox(searchMobileRef)}
          </div>
        </div>
      </header>

      {/* ══════════ PROGRESS BAR ══════════ */}
      {showProgress && (
        <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs text-slate-400 font-medium">
                {t("common.step")} {currentStep} {t("common.of")} {totalSteps}
              </p>
              <p className="text-xs font-bold text-teal-600">
                {Math.round(progress)}% {t("common.complete")}
              </p>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-teal-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ══════════ MAIN ══════════ */}
      <main className="flex-1 pt-5 pb-10">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="bg-slate-900 mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-6 sm:pt-12 sm:pb-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center">
                  <span className="text-white font-extrabold text-xs">C</span>
                </div>
                <span className="text-white font-extrabold text-sm">
                  Clove<span className="text-teal-400">Net</span> Hub
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {sw
                  ? "Mfumo wa kidijitali unaosaidia vijana wa Tanzania kupata ujuzi wa soko la ajira."
                  : "A digital platform helping Tanzanian youth prepare for the job market."}
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-white text-xs font-bold mb-3 uppercase tracking-wider">
                {t("layout.usefulLinks")}
              </h3>
              <div className="space-y-2">
                <a href="https://portal.zanajira.go.tz/home" target="_blank" rel="noopener noreferrer"
                   className="block text-slate-400 text-sm hover:text-teal-400 transition">
                  {t("layout.zanajira")}
                </a>
                <a href="https://portal.ajira.go.tz/" target="_blank" rel="noopener noreferrer"
                   className="block text-slate-400 text-sm hover:text-teal-400 transition">
                  {t("layout.ajiraPortal")}
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-xs font-bold mb-3 uppercase tracking-wider">
                {t("layout.contact")}
              </h3>
              <div className="space-y-1.5">
                <p className="text-slate-400 text-sm">yasirhamdu@hotmail.com</p>
                <p className="text-slate-400 text-sm">+255 776 378 529</p>
              </div>
            </div>

            {/* Actions */}
            <div>
              <h3 className="text-white text-xs font-bold mb-3 uppercase tracking-wider">
                {sw ? "Mawasiliano" : "Get in Touch"}
              </h3>
              <div className="flex flex-col gap-2">
                <a href={feedbackFormLink} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-xl transition active:scale-[0.98] cursor-pointer">
                  {t("layout.feedback")}
                </a>
                <a href="https://wa.me/255776378529" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center px-4 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium rounded-xl transition active:scale-[0.98] cursor-pointer">
                  {t("layout.whatsapp")}
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} CloveNet Technologies Limited.{" "}
              {sw ? "Haki zote zimehifadhiwa." : "All rights reserved."}
            </p>
            <p className="text-slate-600 text-xs">
              {sw ? "Imetengezwa kwa ❤️ kwa vijana wa Tanzania" : "Made with ❤️ for Tanzanian youth"}
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}