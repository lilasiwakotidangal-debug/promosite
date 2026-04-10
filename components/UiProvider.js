"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UiContext = createContext(null);

export function useUi() {
  const value = useContext(UiContext);

  if (!value) {
    throw new Error("useUi must be used inside UiProvider");
  }

  return value;
}

export default function UiProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("hamro-theme");
    const storedLanguage = window.localStorage.getItem("hamro-language");

    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }

    if (storedLanguage === "ne" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("hamro-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("hamro-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      setTheme,
      setLanguage,
    }),
    [theme, language],
  );

  return (
    <UiContext.Provider value={value}>
      <div className="siteShell" data-theme={theme} data-language={language}>
        {children}
      </div>
    </UiContext.Provider>
  );
}
