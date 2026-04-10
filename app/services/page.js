import Image from "next/image";
import functionImage from "../../files/functions.png";
import lensImage from "../../files/lens.png";
import photographyImage from "../../files/wedding.png";
import printsImage from "../../files/studioprints.png";
import videographyImage from "../../files/videography.png";

export const metadata = { title: "Services | Hamro Digital Studio" };

const serviceLines = [
  {
    number: "01",
    accent: "serviceAccentWarm",
    eyebrowEn: "Signature Coverage",
    eyebrowNe: "सिग्नेचर कभरेज",
    titleEn: "Wedding Photography",
    titleNe: "विवाह फोटोग्राफी",
    bodyEn:
      "Elegant ceremony storytelling, guided couple portraits, family frames, ritual moments, and polished edits designed for albums and digital keepsakes.",
    bodyNe:
      "समारोहको सुन्दर कथन, निर्देशित कपल पोर्ट्रेट, पारिवारिक फ्रेम, रिचुअल क्षण र एल्बम तथा डिजिटल स्मृतिका लागि तयार एडिटहरू।",
    pointsEn: ["Couple portraits", "Family groups", "Album-ready edits"],
    pointsNe: ["कपल पोर्ट्रेट", "पारिवारिक ग्रुप", "एल्बम-रेडी एडिट"],
    image: photographyImage,
    imageAlt: "Wedding photography service",
  },
  {
    number: "02",
    accent: "serviceAccentMotion",
    eyebrowEn: "Motion Story",
    eyebrowNe: "मोशन स्टोरी",
    titleEn: "Videography",
    titleNe: "भिडियोग्राफी",
    bodyEn:
      "Cinematic films, short highlight reels, reception edits, and smooth event storytelling with motion that feels refined instead of noisy.",
    bodyNe:
      "सिनेमाटिक फिल्म, छोटो हाइलाइट रिल, रिसेप्सन एडिट र अत्यधिक होइन, सन्तुलित गतिसहितको इभेन्ट स्टोरीटेलिङ।",
    pointsEn: ["Highlight reels", "Reception edits", "Cinematic delivery"],
    pointsNe: ["हाइलाइट रिल", "रिसेप्सन एडिट", "सिनेमाटिक डेलिभरी"],
    image: videographyImage,
    imageAlt: "Videography service",
  },
  {
    number: "03",
    accent: "serviceAccentEvent",
    eyebrowEn: "Event Coverage",
    eyebrowNe: "इभेन्ट कभरेज",
    titleEn: "Function Coverage",
    titleNe: "फङ्सन कभरेज",
    bodyEn:
      "Engagements, receptions, birthday events, family celebrations, and custom bookings handled with flexible coverage and organized delivery.",
    bodyNe:
      "इन्गेजमेन्ट, रिसेप्सन, जन्मदिन कार्यक्रम, पारिवारिक समारोह र अन्य स्टुडियोसम्बन्धी बुकिङलाई लचिलो कभरेज र व्यवस्थित डेलिभरीसहित सम्हालिन्छ।",
    pointsEn: ["Engagement events", "Birthday functions", "Custom bookings"],
    pointsNe: ["इन्गेजमेन्ट कार्यक्रम", "जन्मदिन फङ्सन", "कस्टम बुकिङ"],
    image: functionImage,
    imageAlt: "Function coverage service",
  },
  {
    number: "04",
    accent: "serviceAccentStudio",
    eyebrowEn: "Studio Support",
    eyebrowNe: "स्टुडियो सपोर्ट",
    titleEn: "Studio Prints and Design",
    titleNe: "स्टुडियो प्रिन्ट र डिजाइन",
    bodyEn:
      "Photo frames, passport-size photos, flex and banner design, print support, and quick studio service for daily customer needs.",
    bodyNe:
      "फोटो फ्रेम, पासपोर्ट साइज फोटो, फ्लेक्स तथा ब्यानर डिजाइन, प्रिन्ट सपोर्ट र दैनिक आवश्यकताका लागि छिटो स्टुडियो सेवा।",
    pointsEn: ["PP size photos", "Banner design", "Frame printing"],
    pointsNe: ["पीपी साइज फोटो", "ब्यानर डिजाइन", "फ्रेम प्रिन्टिङ"],
    image: printsImage,
    imageAlt: "Studio print and design service",
  },
];

const deliverables = [
  {
    titleEn: "Wedding day storytelling",
    titleNe: "विवाह दिनको कथा",
  },
  {
    titleEn: "Pre wedding shoots",
    titleNe: "प्रि वेडिङ सुट",
  },
  {
    titleEn: "Reception films",
    titleNe: "रिसेप्सन फिल्म",
  },
  {
    titleEn: "Any function coverage",
    titleNe: "कुनै पनि कार्यक्रम कभरेज",
  },
  {
    titleEn: "Photo frame printing",
    titleNe: "फोटो फ्रेम प्रिन्टिङ",
  },
  {
    titleEn: "PP size photos",
    titleNe: "पीपी साइज फोटो",
  },
  {
    titleEn: "Banner and flex design",
    titleNe: "ब्यानर र फ्लेक्स डिजाइन",
  },
  {
    titleEn: "Fast studio support",
    titleNe: "छिटो स्टुडियो सपोर्ट",
  },
];

const studioSupport = [
  {
    type: "pp",
    titleEn: "PP Size Photo",
    titleNe: "पीपी साइज फोटो",
    textEn: "Quick passport and document photo support with clean print-ready output.",
    textNe: "छिटो पासपोर्ट र डकुमेन्ट फोटो सेवासहित सफा प्रिन्ट-रेडी आउटपुट।",
  },
  {
    type: "frame",
    titleEn: "Photo Frame Printing",
    titleNe: "फोटो फ्रेम प्रिन्टिङ",
    textEn: "Portrait enlargement, frame-ready finishing, and studio print presentation.",
    textNe: "पोर्ट्रेट इनलार्जमेन्ट, फ्रेम-रेडी फिनिसिङ र स्टुडियो प्रिन्ट प्रस्तुति।",
  },
  {
    type: "banner",
    titleEn: "Banner and Flex Design",
    titleNe: "ब्यानर र फ्लेक्स डिजाइन",
    textEn: "Event banners, welcome boards, and design support for personal or business use.",
    textNe: "इभेन्ट ब्यानर, वेलकम बोर्ड र व्यक्तिगत वा व्यवसायिक प्रयोगका लागि डिजाइन सपोर्ट।",
  },
];

const process = [
  {
    step: "01",
    titleEn: "Discuss",
    titleNe: "छलफल",
    textEn: "Share the event type, date, location, and output you need.",
    textNe: "कार्यक्रमको प्रकार, मिति, स्थान र आवश्यक आउटपुटबारे जानकारी दिनुहोस्।",
  },
  {
    step: "02",
    titleEn: "Plan",
    titleNe: "योजना",
    textEn: "We recommend the right photography, video, print, or design service mix.",
    textNe: "हामी उपयुक्त फोटोग्राफी, भिडियो, प्रिन्ट वा डिजाइन सेवाको संयोजन सिफारिस गर्छौं।",
  },
  {
    step: "03",
    titleEn: "Deliver",
    titleNe: "डेलिभरी",
    textEn: "The final output is edited, prepared, and handed over with studio care.",
    textNe: "अन्तिम सामग्री एडिट, तयारी र स्टुडियोको सावधानीसहित हस्तान्तरण गरिन्छ।",
  },
];

function StudioSupportIcon({ type }) {
  if (type === "pp") {
    return (
      <svg className="studioSupportIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="4.5" width="14" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 16h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "frame") {
    return (
      <svg className="studioSupportIconSvg" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="4.5" width="15" height="15" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="7.5" y="7.5" width="9" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="m9 14 2-2 1.8 1.8L15 11.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className="studioSupportIconSvg" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5h16v9H4z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 10.5h10M7 13.5h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17.5 4.5v3M6.5 4.5v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="page servicesPage">
      <section className="servicesHero">
        <div className="servicesHeroCopy">
          <p className="eyebrow accent">
            <span className="lang-en">Services</span>
            <span className="lang-ne">सेवाहरू</span>
          </p>
          <h1 className="servicesHeroTitle">
            <span className="lang-en">Studio work presented with motion, clarity, and cinematic rhythm.</span>
            <span className="lang-ne">स्टुडियोका कामलाई गति, स्पष्टता र सिनेमाटिक लयका साथ प्रस्तुत गरिएको छ।</span>
          </h1>
          <p className="servicesHeroText">
            <span className="lang-en">
              Hamro Digital Studio handles wedding photography, videography, event coverage, passport-size photos,
              photo frames, banner design, and quick local studio support.
            </span>
            <span className="lang-ne">
              हम्रो डिजिटल स्टुडियोले विवाह फोटोग्राफी, भिडियोग्राफी, इभेन्ट कभरेज, पासपोर्ट साइज फोटो,
              फोटो फ्रेम, ब्यानर डिजाइन र छिटो स्थानीय स्टुडियो सपोर्ट प्रदान गर्छ।
            </span>
          </p>
        </div>

        <div className="servicesHeroVisual">
          <div className="servicesHeroBadge">
            <Image
              src={lensImage}
              alt="Camera lens visual"
              className="servicesHeroBadgeImage"
            />
          </div>
          <div className="servicesHeroImageWrap">
            <Image src={photographyImage} alt="Photography service visual" className="servicesHeroImage" priority />
          </div>
          <div className="servicesHeroPulse servicesHeroPulseOne" />
          <div className="servicesHeroPulse servicesHeroPulseTwo" />
        </div>
      </section>

      <section className="servicesMarquee" aria-hidden="true">
        <div className="servicesMarqueeTrack">
          <span>Wedding Photography</span>
          <span>Videography</span>
          <span>Function Coverage</span>
          <span>PP Size Photo</span>
          <span>Photo Frame</span>
          <span>Banner Design</span>
          <span>Wedding Photography</span>
          <span>Videography</span>
          <span>Function Coverage</span>
          <span>PP Size Photo</span>
          <span>Photo Frame</span>
          <span>Banner Design</span>
        </div>
      </section>

      <section className="servicesLinesSection">
        {serviceLines.map((item, index) => (
          <article
            key={item.number}
            className={`serviceLine ${index % 2 === 1 ? "serviceLineReverse" : ""} ${item.accent}`}
          >
            <div className="serviceLineIndex">{item.number}</div>
            <div className="serviceLineBody">
              <div className="serviceLineCopy">
                <p className="serviceLineEyebrow">
                  <span className="lang-en">{item.eyebrowEn}</span>
                  <span className="lang-ne">{item.eyebrowNe}</span>
                </p>
                <h2 className="serviceLineTitle">
                  <span className="lang-en">{item.titleEn}</span>
                  <span className="lang-ne">{item.titleNe}</span>
                </h2>
                <p className="serviceLineText">
                  <span className="lang-en">{item.bodyEn}</span>
                  <span className="lang-ne">{item.bodyNe}</span>
                </p>
                <div className="serviceLinePoints">
                  {item.pointsEn.map((point, index) => (
                    <span key={point} className="serviceLinePoint">
                      <span className="lang-en">{point}</span>
                      <span className="lang-ne">{item.pointsNe[index]}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="serviceLineVisual">
                <div className="serviceLineGlow" />
                <div className="serviceLineImageWrap">
                  <Image src={item.image} alt={item.imageAlt} className="serviceLineImage" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="servicesOutputs">
        <div className="servicesOutputsHeader">
          <p className="eyebrow accent">
            <span className="lang-en">What We Handle</span>
            <span className="lang-ne">हामी के गर्छौं</span>
          </p>
          <h2 className="servicesSectionTitle">
            <span className="lang-en">Not just events. Full studio support.</span>
            <span className="lang-ne">केवल इभेन्ट मात्र होइन। पूर्ण स्टुडियो सपोर्ट।</span>
          </h2>
        </div>

        <div className="servicesOutputsGrid">
          {deliverables.map((item) => (
            <div key={item.titleEn} className="servicesOutputPill">
              <span className="lang-en">{item.titleEn}</span>
              <span className="lang-ne">{item.titleNe}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="studioSupportSection">
        <div className="servicesOutputsHeader">
          <p className="eyebrow accent">
            <span className="lang-en">Studio Essentials</span>
            <span className="lang-ne">स्टुडियो आवश्यकताहरू</span>
          </p>
          <h2 className="servicesSectionTitle">
            <span className="lang-en">Print, design, and quick walk-in studio work.</span>
            <span className="lang-ne">प्रिन्ट, डिजाइन र छिटो वाक-इन स्टुडियो सेवा।</span>
          </h2>
        </div>

        <div className="studioSupportGrid">
          {studioSupport.map((item) => (
            <article key={item.titleEn} className="studioSupportItem">
              <div className="studioSupportIconWrap">
                <StudioSupportIcon type={item.type} />
              </div>
              <h3 className="studioSupportTitle">
                <span className="lang-en">{item.titleEn}</span>
                <span className="lang-ne">{item.titleNe}</span>
              </h3>
              <p className="studioSupportText">
                <span className="lang-en">{item.textEn}</span>
                <span className="lang-ne">{item.textNe}</span>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="servicesProcess">
        <div className="servicesOutputsHeader">
          <p className="eyebrow accent">
            <span className="lang-en">How It Works</span>
            <span className="lang-ne">कसरी काम हुन्छ</span>
          </p>
          <h2 className="servicesSectionTitle">
            <span className="lang-en">Simple process. Better output.</span>
            <span className="lang-ne">साधारण प्रक्रिया। राम्रो परिणाम।</span>
          </h2>
        </div>

        <div className="servicesProcessRail">
          {process.map((item) => (
            <article key={item.step} className="servicesProcessStep">
              <span className="servicesProcessIndex">{item.step}</span>
              <h3 className="servicesProcessTitle">
                <span className="lang-en">{item.titleEn}</span>
                <span className="lang-ne">{item.titleNe}</span>
              </h3>
              <p className="servicesProcessText">
                <span className="lang-en">{item.textEn}</span>
                <span className="lang-ne">{item.textNe}</span>
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
