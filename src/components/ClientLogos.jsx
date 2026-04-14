import './ClientLogos.css';

/* ─── Individual logo components ───────────────────────────── */

const TravelticLogo = () => (
  <span className="client-logo cl-traveltic">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
        fill="#1a3628"
      />
    </svg>
    <span>Traveltic</span>
  </span>
);

const PriceCheckerLogo = () => (
  <span className="client-logo cl-pricechecker">
    <svg width="22" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"
        stroke="#1a3628" strokeWidth="1.8" strokeLinejoin="round" fill="none"
      />
      <line x1="3" y1="6" x2="21" y2="6" stroke="#1a3628" strokeWidth="1.8" />
      <path d="M16 10a4 4 0 0 1-8 0" stroke="#1a3628" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
    <span className="pc-text">
      <span className="pc-main">Price Checker</span>
      <span className="pc-sub">GROCERY</span>
    </span>
  </span>
);

const PhamasysLogo = () => (
  <span className="client-logo cl-phamasys">Phamasys</span>
);

const PlantCareLogo = () => (
  <span className="client-logo cl-plantcare">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22V12M12 12C12 7 7 4 3 5c1 4 4 7 9 7zM12 12c0-5 5-8 9-7-1 4-4 7-9 7z"
        stroke="#1a3628" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
    PLANT CARE
  </span>
);

const MyClinicLogo = () => (
  <span className="client-logo cl-myclinic">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 12h-4l-3 9L9 3l-3 9H2"
        stroke="#1a3628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
    <span className="my-light">My</span><span className="clinic-bold">Clinic</span>
  </span>
);

const JobFinderLogo = () => (
  <span className="client-logo cl-jobfinder">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="#1a3628" strokeWidth="1.8" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#1a3628" strokeWidth="1.8" />
    </svg>
    JobFinder
  </span>
);

const TasteaTeaLogo = () => (
  <span className="client-logo cl-tastea">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"
        stroke="#1a3628" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
    <span className="tastea-dark">Tastea</span><span className="tastea-light">Tea</span>
  </span>
);

const TrueRootLogo = () => (
  <span className="client-logo cl-trueroot">
    <span className="true-gray">TRUE</span><span className="root-dark">ROOT</span>
  </span>
);

/* ─── Logos array — rendered twice for seamless loop ───────── */
const logos = [
  <TravelticLogo key="traveltic" />,
  <PriceCheckerLogo key="pricechecker" />,
  <PhamasysLogo key="phamasys" />,
  <PlantCareLogo key="plantcare" />,
  <MyClinicLogo key="myclinic" />,
  <JobFinderLogo key="jobfinder" />,
  <TasteaTeaLogo key="tastea" />,
  <TrueRootLogo key="trueroot" />,
];

/* ─── Marquee component ─────────────────────────────────────── */
export default function ClientLogos() {
  return (
    <div className="client-strip">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* First set */}
          {logos.map((logo, i) => (
            <div className="marquee-item" key={`a-${i}`}>{logo}</div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, i) => (
            <div className="marquee-item" key={`b-${i}`} aria-hidden="true">{logo}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
