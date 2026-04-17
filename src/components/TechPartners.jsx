import './TechPartners.css';

/* ── SVG logo components with real brand colours ──────────── */

const AngularLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 250 250" fill="none">
      <polygon points="125,30 250,85 225,195 125,235 25,195 0,85" fill="#DD0031"/>
      <polygon points="125,30 125,145 225,195 250,85" fill="#C3002F"/>
      <polygon points="125,60 68,190 88,190 101,158 149,158 162,190 182,190" fill="#fff"/>
      <polygon points="125,89 111,143 139,143" fill="#DD0031"/>
    </svg>
    <span>Angular</span>
  </span>
);

const ReactLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="2.2" ry="2.2" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
    </svg>
    <span>React</span>
  </span>
);

const NodeLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#339933"/>
      <path d="M12 2l10 5.5-10 5.5L2 7.5 12 2z" fill="#5cb85c"/>
      <text x="6.5" y="15.5" fontSize="6.5" fontWeight="900" fill="#fff" fontFamily="Arial">JS</text>
    </svg>
    <span>Node.js</span>
  </span>
);

const SpringLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#6DB33F"/>
      <path d="M8 16c2-6 8-10 10-12M14 4c-1 3-4 7-8 9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="18" cy="5" r="2" fill="#fff"/>
    </svg>
    <span>Spring Boot</span>
  </span>
);

const PythonLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8 2 7 4 7 6v2h5v1H5C3 9 2 10.5 2 13s1 4 3 4h2v-2.5C7 12 8.5 11 12 11h5c2 0 3-1 3-3V6c0-2-1-4-8-4z" fill="#3776AB"/>
      <path d="M12 22c4 0 5-2 5-4v-2h-5v-1h7c2 0 3-1.5 3-4s-1-4-3-4h-2v2.5C17 12 15.5 13 12 13H7c-2 0-3 1-3 3v3c0 2 1 3 8 3z" fill="#FFD43B"/>
      <circle cx="9.5" cy="6.5" r="1.2" fill="#fff"/>
      <circle cx="14.5" cy="17.5" r="1.2" fill="#3776AB"/>
    </svg>
    <span>Python</span>
  </span>
);

const AWSLogo = () => (
  <span className="tech-item">
    <svg width="36" height="28" viewBox="0 0 80 50" fill="none">
      <path d="M23 28c-5 2-8 5-8 8 0 4 4 6 9 6 4 0 7-1 9-3" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M57 28c5 2 8 5 8 8 0 4-4 6-9 6-4 0-7-1-9-3" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M27 36 Q40 44 53 36" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <text x="13" y="22" fontSize="13" fontWeight="900" fill="#FF9900" fontFamily="Arial">aws</text>
    </svg>
  </span>
);

const AzureLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M13.5 3L4 19h5l2-3.5L6 22h14L13.5 3z" fill="#0078D4"/>
      <path d="M13.5 3L8 13l3 2.5L20 22" fill="#50E6FF" opacity="0.8"/>
    </svg>
    <span>Azure</span>
  </span>
);

const FirebaseLogo = () => (
  <span className="tech-item">
    <svg width="24" height="28" viewBox="0 0 48 64" fill="none">
      <path d="M8 50L1 11l12 12L24 2l11 21 5-8L47 50H8z" fill="#FFA000"/>
      <path d="M24 2l11 21-11 27L8 50z" fill="#F57F17"/>
      <path d="M35 23l5-8 7 35H8l16-8z" fill="#FFCA28"/>
    </svg>
    <span>Firebase</span>
  </span>
);

const FlutterLogo = () => (
  <span className="tech-item">
    <svg width="22" height="28" viewBox="0 0 40 50" fill="none">
      <polygon points="0,18 20,0 40,0 15,25" fill="#54C5F8"/>
      <polygon points="20,50 40,50 15,25 0,40" fill="#01579B"/>
      <polygon points="0,40 15,25 27,37" fill="#29B6F6"/>
    </svg>
    <span>Flutter</span>
  </span>
);

const IOSLogo = () => (
  <span className="tech-item">
    <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
      <rect x="1" y="1" width="22" height="26" rx="5" fill="#1C1C1E"/>
      <path d="M12 6c0-1.2.7-2.5 2-3-1 2.5-1 5 2 6.5C14 10 12 9 12 6z" fill="#A2AAAD"/>
      <circle cx="7" cy="15" r="1.2" fill="#fff"/>
      <text x="5" y="21" fontSize="5.5" fontWeight="800" fill="#fff" fontFamily="Arial">iOS</text>
    </svg>
    <span>iOS</span>
  </span>
);

const OpenAILogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2a5.5 5.5 0 0 1 5.3 4A5.5 5.5 0 0 1 20 11.5a5.5 5.5 0 0 1-3 4.9v.1A5.5 5.5 0 0 1 12 22a5.5 5.5 0 0 1-5-2.5A5.5 5.5 0 0 1 4 11.5 5.5 5.5 0 0 1 6.7 6 5.5 5.5 0 0 1 12 2z" fill="#000" stroke="#000" strokeWidth="0.5"/>
      <path d="M12 7v10M7 12h10M9 9l6 6M15 9l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
    <span>OpenAI</span>
  </span>
);

const TensorFlowLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v20M5 5.5L12 2l7 3.5M5 12l7 3.5 7-3.5M5 18.5L12 22l7-3.5" stroke="#FF6F00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 5.5v13M19 5.5v13" stroke="#FF6F00" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
    <span>TensorFlow</span>
  </span>
);

const PyTorchLogo = () => (
  <span className="tech-item">
    <svg width="26" height="28" viewBox="0 0 24 26" fill="none">
      <path d="M12 2C7 2 3 6.5 3 12s4 10 9 10 9-4.5 9-10" stroke="#EE4C2C" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M17 4L12 2" stroke="#EE4C2C" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="17.5" cy="3.5" r="2" fill="#EE4C2C"/>
      <circle cx="9" cy="11" r="1.5" fill="#EE4C2C"/>
    </svg>
    <span>PyTorch</span>
  </span>
);

const HuggingFaceLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#FFD21E"/>
      <circle cx="11" cy="13" r="2.5" fill="#fff"/>
      <circle cx="21" cy="13" r="2.5" fill="#fff"/>
      <circle cx="11.8" cy="13" r="1.2" fill="#111"/>
      <circle cx="21.8" cy="13" r="1.2" fill="#111"/>
      <path d="M10 20 Q16 26 22 20" stroke="#111" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M5 10 Q7 6 10 8" stroke="#111" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M27 10 Q25 6 22 8" stroke="#111" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
    <span>Hugging Face</span>
  </span>
);

const DockerLogo = () => (
  <span className="tech-item">
    <svg width="32" height="28" viewBox="0 0 40 30" fill="none">
      <rect x="3" y="13" width="6" height="5" rx="1" fill="#2496ED"/>
      <rect x="11" y="13" width="6" height="5" rx="1" fill="#2496ED"/>
      <rect x="19" y="13" width="6" height="5" rx="1" fill="#2496ED"/>
      <rect x="11" y="6" width="6" height="5" rx="1" fill="#2496ED"/>
      <rect x="19" y="6" width="6" height="5" rx="1" fill="#2496ED"/>
      <path d="M34 15c1-3-1-6-4-6l-1 1c-1-3-4-4-6-3" stroke="#2496ED" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M2 18c2 5 7 6 12 6h10c5 0 9-2 10-6H2z" fill="#2496ED" opacity="0.35"/>
    </svg>
    <span>Docker</span>
  </span>
);

const KubernetesLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#326CE5"/>
      <circle cx="12" cy="12" r="3" fill="#fff"/>
      {[0,60,120,180,240,300].map((deg, i) => (
        <line
          key={i}
          x1="12" y1="12"
          x2={12 + 7.5 * Math.cos((deg - 90) * Math.PI / 180)}
          y2={12 + 7.5 * Math.sin((deg - 90) * Math.PI / 180)}
          stroke="#fff" strokeWidth="1.8" strokeLinecap="round"
        />
      ))}
    </svg>
    <span>Kubernetes</span>
  </span>
);

const GitHubLogo = () => (
  <span className="tech-item">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd" clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2z"
        fill="#181717"
      />
    </svg>
    <span>GitHub</span>
  </span>
);

const JenkinsLogo = () => (
  <span className="tech-item">
    <svg width="26" height="28" viewBox="0 0 50 56" fill="none">
      <ellipse cx="25" cy="28" rx="23" ry="26" fill="#D33833"/>
      <ellipse cx="25" cy="22" rx="14" ry="16" fill="#F5C5B8"/>
      <ellipse cx="25" cy="20" rx="10" ry="12" fill="#F0A090"/>
      <circle cx="20" cy="19" r="2" fill="#333"/>
      <circle cx="30" cy="19" r="2" fill="#333"/>
      <path d="M20 27 Q25 32 30 27" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <rect x="10" y="38" width="30" height="14" rx="6" fill="#D33833"/>
      <text x="15" y="49" fontSize="8" fontWeight="900" fill="#fff" fontFamily="Arial">CI/CD</text>
    </svg>
    <span>Jenkins</span>
  </span>
);

/* ── Full logos array ─────────────────────────────────────── */
const logos = [
  <AngularLogo key="angular" />,
  <ReactLogo key="react" />,
  <NodeLogo key="node" />,
  <SpringLogo key="spring" />,
  <PythonLogo key="python" />,
  <AWSLogo key="aws" />,
  <AzureLogo key="azure" />,
  <FirebaseLogo key="firebase" />,
  <FlutterLogo key="flutter" />,
  <IOSLogo key="ios" />,
  <OpenAILogo key="openai" />,
  <TensorFlowLogo key="tensorflow" />,
  <PyTorchLogo key="pytorch" />,
  <HuggingFaceLogo key="huggingface" />,
  <DockerLogo key="docker" />,
  <KubernetesLogo key="kubernetes" />,
  <GitHubLogo key="github" />,
  <JenkinsLogo key="jenkins" />,
];

/* ── Marquee ─────────────────────────────────────────────── */
export default function TechPartners() {
  return (
    <div className="tech-strip">
      <div className="tech-strip-container">
        <h3 style={{ textAlign: 'center' , padding: '0px 20px 30px' }}>Our Technology Partners</h3>
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track">
            {logos.map((logo, i) => (
              <div className="tech-marquee-item" key={`a-${i}`}>{logo}</div>
            ))}
            {logos.map((logo, i) => (
              <div className="tech-marquee-item" key={`b-${i}`} aria-hidden="true">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
