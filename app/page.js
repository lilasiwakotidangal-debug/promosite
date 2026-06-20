import Image from "next/image";
import detailsImage from "../files/details.jpeg";
import founderImage from "../files/founder.png";
import galleryImageOne from "../files/gallery/image.png";
import galleryImageTwo from "../files/gallery/image copy.png";
import galleryImageThree from "../files/gallery/image copy 2.png";
import galleryImageFour from "../files/gallery/image copy 3.png";
import weddingHighlightsImage from "../files/Gallery/weddinghighlights.png";
import { quickActions, studioInfo } from "../lib/siteData";

const offerings = [
  {
    title: "Photography",
    text:
      "Fine art wedding, engagement, and portrait documentation shaped by soft light, quiet direction, and natural emotion.",
    points: ["Wedding stories", "Editorial portraits", "Family heirlooms"],
  },
  {
    title: "Studio Support",
    text:
      "Clean print production, passport photos, frame finishing, banners, and everyday studio work handled with care.",
    points: ["Frame printing", "PP size photos", "Banner design"],
  },
];

const selectedWorks = [
  { image: galleryImageOne, alt: "Wedding portrait from Hamro Digital Studio", className: "homeWorkLarge" },
  { image: galleryImageTwo, alt: "Soft studio detail", className: "" },
  { image: galleryImageThree, alt: "Candid event frame", className: "" },
  { image: galleryImageFour, alt: "Function coverage moment", className: "homeWorkWide" },
];

export default function Page() {
  return (
    <main className="page homePage">
      <section className="homeHero">
        <Image
          src={detailsImage}
          alt="Soft studio details in warm natural light"
          className="homeHeroBackground"
          priority
        />
        <div className="homeHeroVeil" />
        <div className="homeHeroCopy">
          <p className="eyebrow accent">
            <span className="lang-en">Established in Urlabari</span>
            <span className="lang-ne">उर्लाबारीमा स्थापित</span>
          </p>
          <h1 className="homeHeroTitle">
            <span className="lang-en">Hamro Digital Studio</span>
            <span className="lang-ne">हम्रो डिजिटल स्टुडियो</span>
          </h1>
          <p className="homeHeroText">
            <span className="lang-en">
              Preserving your most precious moments through an intentional, luminous lens.
            </span>
            <span className="lang-ne">
              तपाईंका अमूल्य क्षणहरूलाई उज्यालो, सौम्य र सोचपूर्ण शैलीमा सुरक्षित गर्दै।
            </span>
          </p>

          <div className="homeHeroActions">
            <a href="/gallery" className="homeHeroButton">
              <span className="lang-en">View Our Work</span>
              <span className="lang-ne">कामहरू हेर्नुहोस्</span>
            </a>
            <a href="/services" className="homeHeroButton homeHeroButtonGhost">
              <span className="lang-en">The Experience</span>
              <span className="lang-ne">अनुभव हेर्नुहोस्</span>
            </a>
          </div>
        </div>
      </section>

      <section className="homePhilosophy">
        <div className="homePhilosophyCopy">
          <p className="eyebrow accent">
            <span className="lang-en">Our Philosophy</span>
            <span className="lang-ne">हाम्रो दृष्टिकोण</span>
          </p>
          <h2 className="homeSectionTitle">
            <span className="lang-en">Soft, cinematic storytelling</span>
            <span className="lang-ne">सौम्य, सिनेमाटिक कथा</span>
          </h2>
          <p className="homeSectionText">
            <span className="lang-en">
              We look for the quiet intervals between the big events: a glance, a ritual detail, a family pause, and
              the warmth of natural light. Every frame is edited to feel clean, timeless, and deeply personal.
            </span>
            <span className="lang-ne">
              हामी ठूला क्षणबीचका साना भावहरू खोज्छौं: नजर, रिचुअल विवरण, पारिवारिक पल र प्राकृतिक उज्यालो।
              हरेक फ्रेम सफा, कालातीत र व्यक्तिगत महसुस हुने गरी तयार हुन्छ।
            </span>
          </p>
          <a className="homeTextLink" href="/contact">
            <span className="lang-en">Discover the studio</span>
            <span className="lang-ne">स्टुडियोबारे जान्नुहोस्</span>
          </a>
        </div>
        <div className="homePhilosophyVisual">
          <Image src={weddingHighlightsImage} alt="Wedding highlights in soft light" className="homePhilosophyImage" />
          <div className="homeInsetImageWrap">
            <Image src={founderImage} alt="Hamro Digital Studio portrait" className="homeInsetImage" />
          </div>
        </div>
      </section>

      <section className="homeOfferings">
        <div className="homeSectionHeader">
          <p className="eyebrow accent">
            <span className="lang-en">Curated Offerings</span>
            <span className="lang-ne">मुख्य सेवाहरू</span>
          </p>
          <h2 className="homeSectionTitle">
            <span className="lang-en">Artisanal services</span>
            <span className="lang-ne">सौन्दर्यपूर्ण सेवाहरू</span>
          </h2>
        </div>

        <div className="homeOfferingGrid">
          {offerings.map((item) => (
            <article className="homeOfferingCard homeOfferingTextOnly" key={item.title}>
              <h3 className="homeOfferingTitle">{item.title}</h3>
              <p className="homeOfferingText">{item.text}</p>
              <ul className="homeOfferingList">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="homeWorks">
        <div className="homeWorksHeader">
          <div>
            <p className="eyebrow accent">
              <span className="lang-en">Selected Works</span>
              <span className="lang-ne">छानिएका कामहरू</span>
            </p>
            <h2 className="homeSectionTitle">
              <span className="lang-en">Captured moments</span>
              <span className="lang-ne">कैद गरिएका क्षणहरू</span>
            </h2>
          </div>
          <a href="/gallery" className="homeTextLink">
            <span className="lang-en">View entire portfolio</span>
            <span className="lang-ne">पूरा ग्यालरी हेर्नुहोस्</span>
          </a>
        </div>

        <div className="homeWorksGrid">
          {selectedWorks.map((item) => (
            <div key={item.alt} className={`homeWorkTile ${item.className}`}>
              <Image src={item.image} alt={item.alt} className="homeWorkImage" />
            </div>
          ))}
        </div>
      </section>

      <section className="homeCta">
        <h2 className="homeCtaTitle">
          <span className="lang-en">Ready to capture your story?</span>
          <span className="lang-ne">आफ्नो कथा कैद गर्न तयार हुनुहुन्छ?</span>
        </h2>
        <p className="homeCtaText">
          <span className="lang-en">
            Share your date, location, and the kind of coverage you need. We will guide you through the right studio
            service.
          </span>
          <span className="lang-ne">
            मिति, स्थान र चाहिएको कभरेजबारे जानकारी दिनुहोस्। हामी तपाईंलाई उपयुक्त स्टुडियो सेवामा मार्गदर्शन गर्छौं।
          </span>
        </p>
        <div className="homeHeroActions homeCtaActions">
          {quickActions.map((item) => (
            <a key={item.label} href={item.href} className="homeCtaButton">
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
