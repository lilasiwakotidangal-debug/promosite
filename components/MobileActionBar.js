import { studioInfo } from "../lib/siteData";

function PhoneIcon() {
  return (
    <svg className="mobileActionIcon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8.2 4.8h2.1l1.2 3.5-1.8 1.5a13.6 13.6 0 0 0 4.5 4.5l1.5-1.8 3.5 1.2v2.1c0 .8-.6 1.4-1.4 1.4A14.5 14.5 0 0 1 6.8 6.2c0-.8.6-1.4 1.4-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="mobileActionIcon" viewBox="0 0 24 24" aria-hidden="true">
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
  );
}

export default function MobileActionBar() {
  return (
    <div className="mobileActionBar" aria-label="Quick contact actions">
      <div className="mobileActionBarInner">
        <a className="mobileActionButton mobileActionCall" href={`tel:+977${studioInfo.phone}`}>
          <PhoneIcon />
          <span>Call Now</span>
        </a>
        <a className="mobileActionButton mobileActionWhatsapp" href={`https://wa.me/977${studioInfo.whatsapp}`}>
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
