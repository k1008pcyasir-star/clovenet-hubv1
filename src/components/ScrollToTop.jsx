import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop — inafanya scroll juu kila route inabadilika.
 * Weka ndani ya <Router> kwenye App.jsx mara moja — itarekebisha
 * pages ZOTE bila kugusa file nyingine yoyote.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}