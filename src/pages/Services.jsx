import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import ParticleNetwork from '../components/three/ParticleNetwork';
import WaveGrid from '../components/three/WaveGrid';
import { webMobileArticles } from '../data/webMobileArticles';
import { aiArticles } from '../data/aiArticles';
import { uxArticles } from '../data/uxArticles';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <ParticleNetwork />
        <div className="container services-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">Our Services</div>
          <h1 className="services-hero-title">
            We Build Great Digital Products & AI Solutions
          </h1>
          <p className="services-hero-sub">
            We partner with enterprises, startups, and governments worldwide to develop cutting-edge technology products and Artificial Intelligence solutions that help them achieve their goals.
          </p>
          <div className="services-hero-actions">
            <Link to="/contact" className="btn-primary">Request Live Demo</Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="what-we-build">
        <WaveGrid />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="dark-section-header-services">
            <h2 style={{ textAlign: 'center' }}>What we can build for you</h2>
          </div>

          {/* ── Web, Mobile & Cloud ── */}
          <ServiceSection
            label="Web, Mobile & Cloud Apps"
            categorySlug="web-mobile-cloud"
            articles={webMobileArticles}
          />

          {/* ── Artificial Intelligence ── */}
          <ServiceSection
            label="Artificial Intelligence"
            categorySlug="artificial-intelligence"
            articles={aiArticles}
          />

          {/* ── UX Designs ── */}
          <ServiceSection
            label="UX Designs"
            categorySlug="ux-designs"
            articles={uxArticles}
          />

        </div>
      </section>

      <TechPartners />
    </div>
  );
}

function ServiceSection({ label, categorySlug, articles }) {
  return (
    <div className="build-category">
      <div className="cat-label-row">
        <h3 className="cat-label">{label}</h3>
        <a
          href={`/services/category/${categorySlug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cat-view-all"
        >
          Explore {label} →
        </a>
      </div>
      <div className="card-grid-3">
        {articles.map((art) => (
          <a
            key={art.slug}
            href={`/services/article/${art.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="build-card glow-card build-card-link"
          >
            <div className="build-card-img">
              <img src={art.img} alt={art.title} />
              <span className="build-card-tag">{art.tag}</span>
              <span className="build-card-overlay-cta">Read Article →</span>
            </div>
            <h4 className="build-card-title">{art.title}</h4>
            <p className="build-card-desc">{art.shortDesc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
