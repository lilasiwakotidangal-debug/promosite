"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  const { language, setLanguage } = useUi();

  return (
    <header className="siteHeader">
      <div className="siteHeaderFrame">
        <div className="siteHeaderInner">
          <button
            type="button"
            className="menuToggle"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="siteBrand" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Hamro Digital Studio"
              width={216}
              height={161}
              className="siteLogo"
              priority
            />
          </Link>

          <nav
            className={menuOpen ? "siteNav navOpen" : "siteNav"}
            aria-label="Primary navigation"
          >
            {links.map((link) => {
              const isActive = link.href === "/" ? pathname === link.href : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "navLink activeNavLink" : "navLink"}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="lang-en">{link.en}</span>
                  <span className="lang-ne">{link.ne}</span>
                </Link>
              );
            })}
          </nav>

          <div className="navMeta">
            <a href="tel:+9779815334820" className="headerCta">
              <span className="lang-en">Book Now</span>
              <span className="lang-ne">अहिले बुक गर्नुहोस्</span>
            </a>

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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
