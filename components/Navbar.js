"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUi } from "./UiProvider";

const links = [
  { href: "/", en: "Home", ne: "होम" },
  { href: "/services", en: "Services", ne: "सेवाहरू" },
  { href: "/gallery", en: "Gallery", ne: "ग्यालरी" },
  { href: "/contact", en: "Contact", ne: "सम्पर्क" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, theme, setTheme } = useUi();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const controls = (
    <>
      <div className="navControlGroup">
        <div className="iconToggleGroup" role="group" aria-label="Language switch">
          <button
            type="button"
            aria-label="Switch to English"
            title="English"
            className={language === "en" ? "iconToggleButton isActiveToggle" : "iconToggleButton"}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            type="button"
            aria-label="Switch to Nepali"
            title="Nepali"
            className={language === "ne" ? "iconToggleButton isActiveToggle" : "iconToggleButton"}
            onClick={() => setLanguage("ne")}
          >
            NP
          </button>
        </div>

        <div className="iconToggleGroup" role="group" aria-label="Theme switch">
          <button
            type="button"
            aria-label="Light theme"
            title="Light theme"
            className={theme === "light" ? "iconToggleButton isActiveToggle" : "iconToggleButton"}
            onClick={() => setTheme("light")}
          >
            <svg
              className="iconSvg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4L5.3 5.3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Dark theme"
            title="Dark theme"
            className={theme === "dark" ? "iconToggleButton isActiveToggle" : "iconToggleButton"}
            onClick={() => setTheme("dark")}
          >
            <svg
              className="iconSvg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M18.5 14.6A7.5 7.5 0 0 1 9.4 5.5 8.5 8.5 0 1 0 18.5 14.6Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <a href="tel:+9779815334820" className="headerCta">
        <span className="lang-en">Book Now</span>
        <span className="lang-ne">अहिले बुक गर्नुहोस्</span>
      </a>
    </>
  );

  return (
    <header className="siteHeader">
      <div className="siteHeaderFrame">
        <div className="siteHeaderInner">
          <Link
            href="/"
            className="brandMark"
            onClick={() => setMenuOpen(false)}
            aria-label="Hamro Digital Studio home"
          >
            <span className="brandMarkFrame">
              <Image
                src="/logo.png"
                alt="Hamro Digital Studio"
                width={512}
                height={512}
                className="brandMarkImage"
                priority
              />
            </span>
            <span className="brandMarkText">
              <span className="brandMarkTitle">Hamro Digital</span>
              <span className="brandMarkSubtitle">Studio</span>
            </span>
          </Link>

          <nav
            className={menuOpen ? "siteNav navOpen" : "siteNav"}
            aria-label="Primary navigation"
          >
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "navLink activeNavLink" : "navLink"}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="lang-en">{link.en}</span>
                  <span className="lang-ne">{link.ne}</span>
                </Link>
              );
            })}

            <div className="navMeta navMetaMobile">
              {controls}
            </div>
          </nav>

          <div className="navMeta navMetaDesktop">
            {controls}
          </div>

          <button
            type="button"
            className={menuOpen ? "menuToggle menuToggleOpen" : "menuToggle"}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
