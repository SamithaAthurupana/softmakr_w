import './TechPartners.css';

export default function TechPartners() {
  return (
    <div className="tech-strip">
      <div className="container">
        <h4>Our Technology Partners</h4>
        <div className="tech-logos">
          <span className="tech-logo">
            <span className="tech-icon aws" />
            aws
          </span>
          <span className="tech-logo">
            <span className="tech-icon azure" />
            Azure
          </span>
          <span className="tech-logo">
            <span className="tech-icon spring" />
            spring boot
          </span>
          <span className="tech-logo">
            <span className="tech-icon flutter" />
            Flutter
          </span>
          <span className="tech-logo">
            <span className="tech-icon fastapi" />
            FastAPI
          </span>
        </div>
      </div>
    </div>
  );
}
