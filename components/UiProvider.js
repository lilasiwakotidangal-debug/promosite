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
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("hamro-language");

    if (storedLanguage === "ne" || storedLanguage === "en") {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("hamro-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return (
    <UiContext.Provider value={value}>
      <div className="siteShell" data-theme="light" data-language={language}>
        {children}
      </div>
    </UiContext.Provider>
  );
}
