import Image from "next/image";
import { studioInfo } from "../../lib/siteData";
import socialIllustration from "../../files/founder.png";

export const metadata = {
  title: `Contact | ${studioInfo.fullName}`,
};

const contactItems = [
  {
    titleEn: "Address",
    titleNe: "ठेगाना",
    lines: [studioInfo.subtitle, studioInfo.location],
    icon: "location",
  },
  {
    titleEn: "Phone",
    titleNe: "फोन",
    lines: [studioInfo.phoneDisplay, studioInfo.whatsappDisplay],
    icon: "phone",
  },
  {
    titleEn: "Email",
    titleNe: "इमेल",
    lines: [studioInfo.email],
    icon: "mail",
  },
];

const socialItems = [
  {
    label: "facebook",
    href: "https://www.facebook.com/profile.php?id=100077602907886",
    titleEn: "Facebook",
    titleNe: "फेसबुक",
    metaEn: "Stories, updates, and fresh uploads",
    metaNe: "स्टोरी, अपडेट र नयाँ अपलोडहरू",
    icon: (
      <svg className="contactSocialSvg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13.2 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.4-1.4h1.5V4.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H8v2.8h2v7h3.2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "instagram",
    href: "#",
    titleEn: "Instagram",
    titleNe: "इन्स्टाग्राम",
    metaEn: "Portraits, reels, and behind the scenes",
    metaNe: "पोर्ट्रेट, रिल्स र बिहाइन्ड द सीन",
    icon: (
      <svg className="contactSocialSvg" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "youtube",
    href: "https://www.youtube.com/@hamrodigitalstudio",
    titleEn: "YouTube",
    titleNe: "युट्युब",
    metaEn: "Wedding films and highlight edits",
    metaNe: "विवाह फिल्म र हाइलाइट एडिटहरू",
    icon: (
      <svg className="contactSocialSvg" viewBox="0 0 24 24" aria-hidden="true">
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
    label: "whatsapp",
    href: "https://wa.me/9779842089197",
    titleEn: "WhatsApp",
    titleNe: "व्हाट्सएप",
    metaEn: "Fast booking and direct inquiry",
    metaNe: "छिटो बुकिङ र सिधा सोधपुछ",
    icon: (
      <svg className="contactSocialSvg" viewBox="0 0 24 24" aria-hidden="true">
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

const socialKpis = [
  {
    value: "24/7",
  },
  {
    value: "Photo + Video",
  },
  {
    value: "Urlabari",
  },
];

function ContactIcon({ type }) {
  if (type === "location") {
    return (
      <svg className="contactIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 20s6-5.4 6-10a6 6 0 1 0-12 0c0 4.6 6 10 6 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg className="contactIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8.2 4.8h2.1l1.2 3.5-1.8 1.5a13.6 13.6 0 0 0 4.5 4.5l1.5-1.8 3.5 1.2v2.1c0 .8-.6 1.4-1.4 1.4A14.5 14.5 0 0 1 6.8 6.2c0-.8.6-1.4 1.4-1.4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="contactIconSvg" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 7h16v10H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4.8 7.6 7.2 5.6 7.2-5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="page">
      <section className="contactShowcase lightContactShowcase">
        <div className="contactShowcaseGrid">
          <div className="contactInfoColumn">
            <div className="contactIntroBlock">
              <h1 className="contactIntroTitle">
                <span className="lang-en">Contact Us</span>
                <span className="lang-ne">सम्पर्क गर्नुहोस्</span>
              </h1>
            </div>

            <div className="contactQuickActions">
              <a className="contactActionButton contactActionPrimary" href={`tel:+977${studioInfo.phone}`}>
                <span className="lang-en">Call Now</span>
                <span className="lang-ne">अहिले फोन गर्नुहोस्</span>
              </a>
              <a
                className="contactActionButton contactActionSecondary"
                href={`https://wa.me/977${studioInfo.whatsapp}`}
              >
                <span className="lang-en">WhatsApp</span>
                <span className="lang-ne">व्हाट्सएप</span>
              </a>
            </div>

            {contactItems.map((item) => (
              <article key={item.titleEn} className="contactInfoBlock">
                <div className="contactIconWrap">
                  <ContactIcon type={item.icon} />
                </div>
                <div className="contactInfoText">
                  <h2 className="contactInfoTitle">
                    <span className="lang-en">{item.titleEn}</span>
                    <span className="lang-ne">{item.titleNe}</span>
                  </h2>
                  {item.lines.map((line) => (
                    <p key={line} className="contactInfoLine">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <div className="contactConnect">
              <div className="contactConnectHeader">
                <div className="connectAccent" />
                <h3 className="contactConnectTitle">
                  <span className="lang-en">Stay Connected</span>
                  <span className="lang-ne">सम्पर्कमा रहनुहोस्</span>
                </h3>
              </div>

              <div className="contactConnectPanel">
                <div className="contactIllustrationCard">
                  <div className="contactIllustrationFrame">
                    <Image
                      src={socialIllustration}
                      alt="Photographer illustration"
                      className="contactIllustrationImage"
                      priority
                    />
                  </div>

                  <div className="contactKpiGrid">
                    {socialKpis.map((item) => (
                      <div key={item.value} className="contactKpiCard">
                        <strong className="contactKpiValue">{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="contactSocialGrid">
                  {socialItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="contactSocialCard"
                      aria-label={item.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="contactSocialLink">{item.icon}</span>
                      <span className="contactSocialCopy">
                        <strong className="contactSocialTitle">
                          <span className="lang-en">{item.titleEn}</span>
                          <span className="lang-ne">{item.titleNe}</span>
                        </strong>
                        <span className="contactSocialMeta">
                          <span className="lang-en">{item.metaEn}</span>
                          <span className="lang-ne">{item.metaNe}</span>
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contactFormShell">
            <div className="contactFormCard">
              <p className="eyebrow accent">
                <span className="lang-en">Booking Desk</span>
                <span className="lang-ne">बुकिङ डेस्क</span>
              </p>
              <h2 className="contactFormTitle">
                <span className="lang-en">Send your event details.</span>
                <span className="lang-ne">आफ्नो कार्यक्रमको विवरण पठाउनुहोस्।</span>
              </h2>
              <p className="contactFormText">
                <span className="lang-en">We usually respond with availability and package guidance as soon as possible.</span>
                <span className="lang-ne">हामी सकेसम्म छिटो उपलब्धता र प्याकेजसम्बन्धी जानकारीसहित जवाफ दिन्छौं।</span>
              </p>

              <form className="contactForm">
                <label className="contactField">
                  <span className="lang-en">Full Name</span>
                  <span className="lang-ne">पूरा नाम</span>
                  <input type="text" placeholder="" />
                </label>

                <label className="contactField">
                  <span className="lang-en">Email</span>
                  <span className="lang-ne">इमेल</span>
                  <input type="email" placeholder="" />
                </label>

                <label className="contactField">
                  <span className="lang-en">Phone Number</span>
                  <span className="lang-ne">फोन नम्बर</span>
                  <input type="tel" placeholder="" />
                </label>

                <label className="contactField contactFieldMessage">
                  <span className="lang-en">Tell us about your event</span>
                  <span className="lang-ne">आफ्नो कार्यक्रमबारे लेख्नुहोस्</span>
                  <textarea rows="4" />
                </label>

                <button type="button" className="contactSubmitButton">
                  <span className="lang-en">Send</span>
                  <span className="lang-ne">पठाउनुहोस्</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
