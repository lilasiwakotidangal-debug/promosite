import Image from "next/image";
import cameraImage from "../files/gadgets/camera.png";
import droneImage from "../files/gadgets/drone.png";
import gadgetsImage from "../files/gadgets/gadgets.png";
import gimbalImage from "../files/gadgets/gimbal.png";
import lensImage from "../files/gadgets/lens.png";
import { highlights, quickActions, studioInfo } from "../lib/siteData";

const gearVisuals = [
  { image: cameraImage, alt: "Camera equipment", className: "homeGearCard homeGearCamera" },
  { image: lensImage, alt: "Camera lens", className: "homeGearCard homeGearLens" },
  { image: gadgetsImage, alt: "Photography gadgets", className: "homeGearCard homeGearKit" },
  { image: gimbalImage, alt: "Video gimbal", className: "homeGearCard homeGearGimbal" },
  { image: droneImage, alt: "Drone equipment", className: "homeGearCard homeGearDrone" },
];

export default function Page() {
  return (
    <main className="page homePage">
      <section className="homeHero">
        <div className="homeHeroCopy">
          <p className="eyebrow accent">
            <span className="lang-en">Hamro Digital Studio</span>
            <span className="lang-ne">हम्रो डिजिटल स्टुडियो</span>
          </p>
          <h1 className="homeHeroTitle">
            <span className="lang-en">Photography, videography, and studio support with a polished local touch.</span>
            <span className="lang-ne">फोटोग्राफी, भिडियोग्राफी र स्टुडियो सपोर्ट एकदमै परिष्कृत स्थानीय शैलीमा।</span>
          </h1>
          <p className="homeHeroText">
            <span className="lang-en">
              Wedding coverage, event visuals, passport photos, frame printing, and banner design from{" "}
              {studioInfo.subtitle}.
            </span>
            <span className="lang-ne">
              {studioInfo.subtitle} बाट विवाह कभरेज, इभेन्ट भिजुअल, पासपोर्ट फोटो, फ्रेम प्रिन्टिङ र ब्यानर
              डिजाइन सेवा।
            </span>
          </p>

          <div className="homeHeroActions">
            {quickActions.map((item) => (
              <a key={item.label} href={item.href} className="homeHeroButton">
                {item.label}
              </a>
            ))}
          </div>

          <div className="homeHeroHighlights">
            {highlights.map((item) => (
              <div key={item} className="homeHighlightItem">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="homeHeroVisual">
          <div className="homeHeroGlow homeHeroGlowOne" />
          <div className="homeHeroGlow homeHeroGlowTwo" />
          <div className="homeGearStage">
            {gearVisuals.map((item, index) => (
              <div key={item.alt} className={item.className}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="homeGearImage"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
