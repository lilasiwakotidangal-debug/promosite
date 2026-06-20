import Link from "next/link";
import { studioInfo } from "../lib/siteData";

const quickLinks = [
  { href: "/", labelEn: "Home", labelNe: "होम" },
  { href: "/services", labelEn: "Services", labelNe: "सेवाहरू" },
  { href: "/gallery", labelEn: "Gallery", labelNe: "ग्यालरी" },
  { href: "/contact", labelEn: "Contact", labelNe: "सम्पर्क" },
];

const serviceLinks = [
  { labelEn: "Wedding Photography", labelNe: "विवाह फोटोग्राफी" },
  { labelEn: "Videography Coverage", labelNe: "भिडियोग्राफी कभरेज" },
  { labelEn: "Pre Wedding Sessions", labelNe: "प्रि वेडिङ सेसन" },
  { labelEn: "Reception Highlights", labelNe: "रिसेप्सन हाइलाइट्स" },
];

const socialItems = [
  {
    name: "facebook",
    href: "https://www.facebook.com/profile.php?id=100077602907886",
    icon: (
      <svg className="footerIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13.2 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.4-1.4h1.5V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H8v2.8h2v7h3.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "instagram",
    href: "#",
    icon: (
      <svg className="footerIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@hamrodigitalstudio",
    icon: (
      <svg className="footerIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M20 8.3a2.3 2.3 0 0 0-1.6-1.6C17 6.3 12 6.3 12 6.3s-5 0-6.4.4A2.3 2.3 0 0 0 4 8.3 24 24 0 0 0 3.7 12c0 1.2 0 2.4.3 3.7a2.3 2.3 0 0 0 1.6 1.6c1.4.4 6.4.4 6.4.4s5 0 6.4-.4a2.3 2.3 0 0 0 1.6-1.6c.3-1.3.3-2.5.3-3.7s0-2.4-.3-3.7Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="m10 9.5 5 2.5-5 2.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "whatsapp",
    href: "https://wa.me/9779842089197",
    icon: (
      <svg className="footerIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4.2a7.8 7.8 0 0 0-6.7 11.8L4.4 20l4.1-1a7.8 7.8 0 1 0 3.5-14.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.6 8.7h1.2l.8 2.2-1.1.9a8.6 8.6 0 0 0 2.7 2.7l.9-1.1 2.2.8v1.2c0 .5-.4.9-.9.9a8.8 8.8 0 0 1-6.7-6.7c0-.5.4-.9.9-.9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="footerTop">
          <div className="footerBrandColumn">
            <p className="footerBrand">{studioInfo.fullName}</p>
            <p className="footerLead">
              <span className="lang-en">
                Soft, balanced photography and videography for weddings, engagement stories, and family celebrations.
              </span>
              <span className="lang-ne">
                विवाह, इन्गेजमेन्ट कथा र पारिवारिक समारोहका लागि सौम्य र सन्तुलित फोटोग्राफी तथा भिडियोग्राफी।
              </span>
            </p>

            <div className="footerSocialRow">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="footerSocialIcon"
                  aria-label={item.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footerLinkColumns">
            <div className="footerLinks">
              <p className="footerColumnTitle">
                <span className="lang-en">Quick Links</span>
                <span className="lang-ne">द्रुत लिङ्कहरू</span>
              </p>
              {quickLinks.map((item) => (
                <Link key={item.href} href={item.href} className="footerLinkText footerLinkAnchor">
                  <span className="lang-en">{item.labelEn}</span>
                  <span className="lang-ne">{item.labelNe}</span>
                </Link>
              ))}
            </div>

            <div className="footerLinks">
              <p className="footerColumnTitle">
                <span className="lang-en">Services</span>
                <span className="lang-ne">सेवाहरू</span>
              </p>
              {serviceLinks.map((item) => (
                <span key={item.labelEn} className="footerLinkText">
                  <span className="lang-en">{item.labelEn}</span>
                  <span className="lang-ne">{item.labelNe}</span>
                </span>
              ))}
            </div>

            <div className="footerContactCard">
              <p className="footerColumnTitle">
                <span className="lang-en">Contact</span>
                <span className="lang-ne">सम्पर्क</span>
              </p>
              <p className="footerContactLine">{studioInfo.location}</p>
              <a className="footerContactLine footerAnchor" href={`tel:+977${studioInfo.phone}`}>
                {studioInfo.phoneDisplay}
              </a>
              <a className="footerContactLine footerAnchor" href={`mailto:${studioInfo.email}`}>
                {studioInfo.email}
              </a>
              <Link href="/contact" className="footerCompactButton">
                <span className="lang-en">Book a Session</span>
                <span className="lang-ne">सेसन बुक गर्नुहोस्</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p className="footerCopyright">
            ©2026 {studioInfo.fullName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
