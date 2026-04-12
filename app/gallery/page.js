import Image from "next/image";
import galleryImageOne from "../../files/Gallery/image1.png";
import galleryImageTwo from "../../files/Gallery/image2.png";
import galleryImageThree from "../../files/Gallery/image3.png";
import galleryImageFour from "../../files/Gallery/image4.png";
import galleryImageFive from "../../files/Gallery/image5.png";
import weddingHighlightsImage from "../../files/Gallery/weddinghighlights.png";

export const metadata = { title: "Gallery | Hamro Digital Studio" };

const photoGallery = [
  {
    image: galleryImageOne,
    titleEn: "Wedding Portraits",
    titleNe: "विवाह पोर्ट्रेट",
    metaEn: "Couple frames, rituals, and elegant wedding storytelling.",
    metaNe: "कपल फ्रेम, रिचुअल्स र सुन्दर विवाह कथन।",
    size: "large",
  },
  {
    image: galleryImageThree,
    titleEn: "Candid Photography",
    titleNe: "क्यान्डिड फोटोग्राफी",
    metaEn: "Natural expressions and emotional family moments.",
    metaNe: "स्वाभाविक अभिव्यक्ति र भावनात्मक पारिवारिक क्षणहरू।",
    size: "medium",
  },
  {
    image: galleryImageTwo,
    titleEn: "Cinematic Frames",
    titleNe: "सिनेमाटिक फ्रेम",
    metaEn: "Motion-focused visual direction for wedding films.",
    metaNe: "विवाह फिल्मका लागि मोशन-फोकस्ड भिजुअल निर्देशन।",
    size: "medium",
  },
  {
    image: galleryImageFour,
    titleEn: "Function Coverage",
    titleNe: "फङ्सन कभरेज",
    metaEn: "Engagements, receptions, birthdays, and event highlights.",
    metaNe: "इन्गेजमेन्ट, रिसेप्सन, जन्मदिन र इभेन्ट हाइलाइट्स।",
    size: "tall",
  },
  {
    image: galleryImageFive,
    titleEn: "Studio Outputs",
    titleNe: "स्टुडियो आउटपुट",
    metaEn: "Prints, banners, and daily studio service delivery.",
    metaNe: "प्रिन्ट, ब्यानर र दैनिक स्टुडियो सेवा डेलिभरी।",
    size: "medium",
  },
  {
    image: weddingHighlightsImage,
    titleEn: "Wedding Highlights",
    titleNe: "विवाह हाइलाइट्स",
    metaEn: "Selected frames that add balance and rhythm to the gallery wall.",
    metaNe: "ग्यालरीलाई सन्तुलन र लय दिने छानिएका फ्रेमहरू।",
    size: "medium",
  },
];

const videoHighlights = [
  {
    titleEn: "Wedding Film Highlights",
    titleNe: "विवाह फिल्म हाइलाइट्स",
    bodyEn: "Watch cinematic wedding edits and couple highlight stories on YouTube.",
    bodyNe: "युट्युबमा सिनेमाटिक विवाह एडिट र कपल हाइलाइट स्टोरी हेर्नुहोस्।",
    href: "https://youtu.be/TOMMs3lHy6E?si=_wJRx73k354yU5hD",
    embed: "https://www.youtube.com/embed/TOMMs3lHy6E",
  },
  {
    titleEn: "Reception and Function Reels",
    titleNe: "रिसेप्सन र फङ्सन रिल्स",
    bodyEn: "Short edits, celebration coverage, and event reels from the studio.",
    bodyNe: "स्टुडियोबाट छोटो एडिट, समारोह कभरेज र इभेन्ट रिल्स।",
    href: "https://youtu.be/ZOqwQCYv0FU?si=UjFJvT6qdQzfH3cp",
    embed: "https://www.youtube.com/embed/ZOqwQCYv0FU",
  },
];

const galleryLayoutCycle = ["large", "medium", "medium", "tall", "wide"];

export default function GalleryPage() {
  return (
    <main className="page galleryPage">
      <section className="galleryHero">
        <div className="galleryHeroCopy">
          <p className="eyebrow accent">
            <span className="lang-en">Gallery</span>
            <span className="lang-ne">ग्यालरी</span>
          </p>
          <h1 className="galleryHeroTitle">
            <span className="lang-en">Real wedding stories and cinematic event frames.</span>
            <span className="lang-ne">वास्तविक विवाह कथा र सिनेमाटिक इभेन्ट फ्रेमहरू।</span>
          </h1>
          <p className="galleryHeroText">
            <span className="lang-en">
              Wedding photography, candid moments, highlight shots, and studio visuals from Hamro Digital Studio.
            </span>
            <span className="lang-ne">
              हम्रो डिजिटल स्टुडियोका विवाह फोटोग्राफी, क्यान्डिड मोमेन्ट, हाइलाइट शट र स्टुडियो
              भिजुअलहरूको सङ्ग्रह।
            </span>
          </p>
        </div>
      </section>

      <section className="galleryPhotoSection">
        <div className="galleryPhotoGrid">
          {photoGallery.map((item, index) => {
            const layout = galleryLayoutCycle[index % galleryLayoutCycle.length];

            return (
              <article
                key={item.titleEn}
                className={`galleryPhotoCard galleryPhotoCard${layout} galleryPhotoTilt${(index % 3) + 1}`}
              >
                <div className="galleryPhotoImageWrap">
                  <Image src={item.image} alt={item.titleEn} className="galleryPhotoImage" />
                </div>
                <div className="galleryPhotoOverlay">
                  <h2 className="galleryPhotoTitle">
                    <span className="lang-en">{item.titleEn}</span>
                    <span className="lang-ne">{item.titleNe}</span>
                  </h2>
                  <p className="galleryPhotoMeta">
                    <span className="lang-en">{item.metaEn}</span>
                    <span className="lang-ne">{item.metaNe}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="galleryVideoSection">
        <div className="galleryVideoHeader">
          <p className="eyebrow accent">
            <span className="lang-en">YouTube</span>
            <span className="lang-ne">युट्युब</span>
          </p>
          <h2 className="gallerySectionTitle">
            <span className="lang-en">Video highlights from the studio.</span>
            <span className="lang-ne">स्टुडियोका भिडियो हाइलाइटहरू।</span>
          </h2>
        </div>

        <div className="galleryVideoGrid">
          {videoHighlights.map((item) => (
            <article key={item.titleEn} className="galleryVideoCard">
              <div className="galleryVideoThumb">
                <iframe
                  className="galleryVideoEmbed"
                  src={item.embed}
                  title={item.titleEn}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="galleryVideoCopy">
                <h3 className="galleryVideoTitle">
                  <span className="lang-en">{item.titleEn}</span>
                  <span className="lang-ne">{item.titleNe}</span>
                </h3>
                <p className="galleryVideoText">
                  <span className="lang-en">{item.bodyEn}</span>
                  <span className="lang-ne">{item.bodyNe}</span>
                </p>
                <a href={item.href} target="_blank" rel="noreferrer" className="galleryVideoLink">
                  <span className="lang-en">Open on YouTube</span>
                  <span className="lang-ne">युट्युबमा खोल्नुहोस्</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
