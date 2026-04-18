import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { webMobileArticles } from '../data/webMobileArticles';
import { aiArticles } from '../data/aiArticles';
import { uxArticles } from '../data/uxArticles';
import './ServiceArticle.css';

const allArticles = [...webMobileArticles, ...aiArticles, ...uxArticles];

export default function ServiceArticle() {
  const { slug } = useParams();
  const article = allArticles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} | Softmakr`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', article.metaDesc);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="sa-not-found">
        <h2>Page not found</h2>
        <Link to="/services" className="btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="sa-page">

      {/* ── Hero ── */}
      <section className="sa-hero">
        <div className="sa-hero-bg" style={{ backgroundImage: `url(${article.heroImg})` }} />
        <div className="sa-hero-overlay" />
        <div className="container sa-hero-inner">
          <span className="sa-badge">{article.tag}</span>
          <h1 className="sa-hero-title">{article.title}</h1>
          <p className="sa-hero-tagline">{article.tagline}</p>
          <p className="sa-hero-desc">{article.intro}</p>
          <div className="sa-hero-actions">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/contact" className="btn-outline">Book a Call</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="sa-stats-bar">
        <div className="container sa-stats-grid">
          {article.stats.map((s, i) => (
            <div key={i} className="sa-stat">
              <span className="sa-stat-value">{s.value}</span>
              <span className="sa-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── What we deliver ── */}
      <section className="sa-section sa-deliver-section">
        <div className="container">
          <div className="sa-section-header">
            <span className="sa-label">What's Included</span>
            <h2 className="sa-heading">{article.whatWeDeliver.heading}</h2>
          </div>
          <div className="sa-deliver-grid">
            {article.whatWeDeliver.items.map((item, i) => (
              <div key={i} className="sa-deliver-card">
                <span className="sa-deliver-icon">{item.icon}</span>
                <h3 className="sa-deliver-title">{item.title}</h3>
                <p className="sa-deliver-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="sa-section sa-cases-section">
        <div className="container">
          <div className="sa-section-header">
            <span className="sa-label">Proof of Work</span>
            <h2 className="sa-heading">Real projects. Real results.</h2>
            <p className="sa-sub">These are not made-up metrics. These are outcomes from production systems we built for real clients.</p>
          </div>
          {article.caseStudies.map((cs, i) => (
            <div key={i} className={`sa-case-row ${i % 2 === 1 ? 'sa-case-row--reverse' : ''}`}>
              <div className="sa-case-img-wrap">
                <img src={cs.img} alt={cs.title} className="sa-case-img" />
                <div className="sa-case-metric-badge">{cs.metric}</div>
              </div>
              <div className="sa-case-body">
                <h3 className="sa-case-title">{cs.title}</h3>
                <p className="sa-case-desc">{cs.desc}</p>
                <Link to="/contact" className="sa-case-cta">Get a similar result →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="sa-section sa-tech-section">
        <div className="container sa-tech-inner">
          <div className="sa-section-header">
            <span className="sa-label">Technology Stack</span>
            <h2 className="sa-heading">Battle-tested tools. Zero hype.</h2>
            <p className="sa-sub">Every technology in our stack was chosen for production reliability and long-term maintainability.</p>
          </div>
          <div className="sa-tech-pills">
            {article.builtWith.map((tech, i) => (
              <span key={i} className="sa-tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="sa-section sa-why-section">
        <div className="container">
          <div className="sa-section-header">
            <span className="sa-label">Why Softmakr</span>
            <h2 className="sa-heading">Why clients choose us — and come back</h2>
          </div>
          <div className="sa-why-grid">
            {article.whyUs.map((item, i) => (
              <div key={i} className="sa-why-card">
                <div className="sa-why-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="sa-why-title">{item.title}</h3>
                <p className="sa-why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sa-cta-section">
        <div className="container sa-cta-inner">
          <h2 className="sa-cta-heading">{article.cta.heading}</h2>
          <p className="sa-cta-body">{article.cta.desc}</p>
          <div className="sa-cta-actions">
            <Link to="/contact" className="btn-primary">Start the Conversation</Link>
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
