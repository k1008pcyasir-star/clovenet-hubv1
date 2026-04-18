import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useT } from "../i18n/useT";
import { searchData } from "../search/searchData";
import { filterSearchResults } from "../search/searchUtils";
import logo from "../assets/logo.png";

export default function Layout({
  children,
  showProgress = false,
  currentStep = 1,
  totalSteps = 6,
  globalSearch = "",
  onGlobalSearchChange = null,
}) {
  const { toggleLanguage } = useLanguage();
  const { t, language } = useT();
  const navigate = useNavigate();

  const progress = (currentStep / totalSteps) * 100;
  const feedbackFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdylzsGEflnYOPPzTAehvk0-H7DdQERESuLH_nWsP2w2WoT2Q/viewform?usp=publish-editor";

  const isControlledSearch = typeof onGlobalSearchChange === "function";
  const [internalSearch, setInternalSearch] = useState(globalSearch || "");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchDesktopRef = useRef(null);
  const searchMobileRef = useRef(null);

  useEffect(() => {
    if (isControlledSearch) {
      setInternalSearch(globalSearch || "");
    }
  }, [globalSearch, isControlledSearch]);

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutsideDesktop =
        searchDesktopRef.current &&
        !searchDesktopRef.current.contains(event.target);

      const clickedOutsideMobile =
        searchMobileRef.current &&
        !searchMobileRef.current.contains(event.target);

      if (clickedOutsideDesktop && clickedOutsideMobile) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchQuery = isControlledSearch ? globalSearch : internalSearch;

  const updateSearch = (value) => {
    if (isControlledSearch) {
      onGlobalSearchChange(value);
    } else {
      setInternalSearch(value);
    }
    setIsSearchOpen(true);
  };

  const clearSearch = () => {
    if (isControlledSearch) {
      onGlobalSearchChange("");
    } else {
      setInternalSearch("");
    }
    setIsSearchOpen(false);
  };

  const results = useMemo(() => {
    return filterSearchResults(searchQuery, language, searchData).slice(0, 8);
  }, [searchQuery, language]);

  const getTypeLabel = (type) => {
    if (language === "sw") {
      if (type === "feature") return "Sehemu";
      if (type === "tool") return "Zana";
      if (type === "portal") return "Portal";
      if (type === "learn") return "Mafunzo";
      return "Matokeo";
    }

    if (type === "feature") return "Feature";
    if (type === "tool") return "Tool";
    if (type === "portal") return "Portal";
    if (type === "learn") return "Learning";
    return "Result";
  };

  const handleSelectResult = (item) => {
    navigate(item.path);
    clearSearch();
  };

  const renderSearchBox = (wrapperRef) => (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          name="globalSearch"
          value={searchQuery}
          onChange={(e) => updateSearch(e.target.value)}
          onFocus={() => setIsSearchOpen(true)}
          placeholder={t("common.searchPlaceholder")}
          className="w-full py-3 px-5 pr-11 border border-slate-300 rounded-full bg-white text-sm text-slate-700 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 hover:border-teal-400 transition"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
            aria-label={language === "sw" ? "Futa utafutaji" : "Clear search"}
          >
            <X size={17} />
          </button>
        )}
      </div>

      {isSearchOpen && searchQuery.trim() && (
        <div className="absolute left-0 right-0 mt-2 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden z-50">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectResult(item)}
                  className="w-full px-4 py-3 text-left hover:bg-slate-50 transition"
                >
                  <div className="font-medium text-slate-800">
                    {item.title[language]}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {getTypeLabel(item.type)}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-4 text-sm text-slate-500">
              {language === "sw"
                ? "Hakuna matokeo yaliyopatikana."
                : "No results found."}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-clovenet-bg text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-3 md:gap-6">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="shrink-0 cursor-pointer select-none group"
              aria-label="Go to home page"
            >
              <img
                src={logo}
                alt="CloveNet Hub Logo"
                className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto object-contain block"
              />
            </button>

            <div className="hidden md:flex flex-1 justify-center min-w-0">
              <div className="w-full max-w-md lg:max-w-lg">
                {renderSearchBox(searchDesktopRef)}
              </div>
            </div>

            <button
              type="button"
              onClick={toggleLanguage}
              className="shrink-0 text-sm font-semibold text-slate-600 hover:text-teal-600 cursor-pointer transition-colors"
              aria-label={
                language === "en" ? "Switch to Swahili" : "Switch to English"
              }
            >
              {language === "en" ? "SW" : "EN"}
            </button>
          </div>

          <div className="mt-4 md:hidden">
            {renderSearchBox(searchMobileRef)}
          </div>
        </div>
      </header>

      {showProgress && (
        <div className="sticky top-[76px] z-40 bg-clovenet-bg/95 backdrop-blur-sm border-b border-slate-100">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-slate-500">
                {t("common.step")} {currentStep} {t("common.of")} {totalSteps}
              </p>

              <p className="text-xs font-semibold text-teal-600">
                {Math.round(progress)}% {t("common.complete")}
              </p>
            </div>

            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-teal-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-300 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-white font-semibold mb-3">
                {t("layout.usefulLinks")}
              </h3>

              <div className="text-sm space-y-2">
                <a
                  href="https://portal.zanajira.go.tz/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white cursor-pointer transition-colors"
                >
                  {t("layout.zanajira")}
                </a>

                <a
                  href="https://portal.ajira.go.tz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white cursor-pointer transition-colors"
                >
                  {t("layout.ajiraPortal")}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">
                {t("layout.contact")}
              </h3>

              <p className="text-sm">yasirhamdu@hotmail.com</p>
              <p className="text-sm mt-1">+255 776 378 529</p>
            </div>

            <div className="flex gap-3 md:justify-end flex-wrap">
              <a
                href={feedbackFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-slate-700 rounded-lg hover:bg-slate-600 active:scale-[0.98] transition text-sm text-white cursor-pointer inline-flex items-center"
              >
                {t("layout.feedback")}
              </a>

              <a
                href="https://wa.me/255776378529"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-teal-600 rounded-lg hover:bg-teal-700 active:scale-[0.98] transition text-sm text-white cursor-pointer"
              >
                {t("layout.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}