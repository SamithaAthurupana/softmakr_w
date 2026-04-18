import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { serviceProducts } from '../data/serviceProducts';
import './ServiceProduct.css';

export default function ServiceProduct() {
  const { slug } = useParams();
  const product = serviceProducts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.title} | Softmakr`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', product.metaDesc);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="sp-not-found">
        <h2>Product not found</h2>
        <Link to="/services" className="btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="sp-page">

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="sp-hero-bg" style={{ backgroundImage: `url(${product.heroImg})` }} />
        <div className="sp-hero-overlay" />
        <div className="container sp-hero-inner">
          <span className="sp-badge">Softmakr Product</span>
          <h1 className="sp-hero-title">{product.title}</h1>
          <p className="sp-hero-tagline">{product.tagline}</p>
          <p className="sp-hero-desc">{product.heroDesc}</p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="btn-primary">Request a Demo</Link>
            <Link to="/contact" className="btn-outline">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="sp-stats-bar">
        <div className="container sp-stats-grid">
          {product.stats.map((s, i) => (
            <div key={i} className="sp-stat">
              <span className="sp-stat-value">{s.value}</span>
              <span className="sp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Problem ── */}
      <section className="sp-section sp-problem-section">
        <div className="container sp-two-col">
          <div className="sp-section-text">
            <span className="sp-section-label">The Challenge</span>
            <h2 className="sp-section-heading">{product.problem.heading}</h2>
            <p className="sp-section-body">{product.problem.desc}</p>
          </div>
          <div className="sp-problem-points">
            {product.problem.points.map((pt, i) => (
              <div key={i} className="sp-problem-point">
                <div className="sp-point-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4 className="sp-point-title">{pt.title}</h4>
                  <p className="sp-point-body">{pt.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="sp-section sp-solution-section">
        <div className="container sp-solution-inner">
          <span className="sp-section-label">The Solution</span>
          <h2 className="sp-section-heading">{product.solution.heading}</h2>
          <p className="sp-solution-body">{product.solution.desc}</p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="sp-section sp-features-section">
        <div className="container">
          <span className="sp-section-label" style={{ display: 'block', textAlign: 'center' }}>What's Included</span>
          <h2 className="sp-section-heading" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            Everything you need. Nothing you don't.
          </h2>
          <div className="sp-features-grid">
            {product.features.map((f, i) => (
              <div key={i} className="sp-feature-card">
                <span className="sp-feature-icon">{f.icon}</span>
                <h3 className="sp-feature-title">{f.title}</h3>
                <p className="sp-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="sp-section sp-how-section">
        <div className="container">
          <span className="sp-section-label" style={{ display: 'block', textAlign: 'center' }}>The Process</span>
          <h2 className="sp-section-heading" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
            From kickoff to production in days, not months.
          </h2>
          <div className="sp-steps">
            {product.howItWorks.map((step, i) => (
              <div key={i} className="sp-step">
                <div className="sp-step-num">{step.step}</div>
                <div className="sp-step-line" />
                <div className="sp-step-content">
                  <h4 className="sp-step-title">{step.title}</h4>
                  <p className="sp-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="sp-section sp-usecases-section">
        <div className="container">
          <span className="sp-section-label" style={{ display: 'block', textAlign: 'center' }}>Real Results</span>
          <h2 className="sp-section-heading" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            How our clients are using {product.title}
          </h2>
          <div className="sp-cases-grid">
            {product.useCases.map((uc, i) => (
              <div key={i} className="sp-case-card">
                <div className="sp-case-img-wrap">
                  <img src={uc.img} alt={uc.title} className="sp-case-img" />
                  <span className="sp-case-industry">{uc.industry}</span>
                </div>
                <div className="sp-case-body">
                  <h3 className="sp-case-title">{uc.title}</h3>
                  <p className="sp-case-desc">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sp-cta-section">
        <div className="container sp-cta-inner">
          <h2 className="sp-cta-heading">{product.cta.heading}</h2>
          <p className="sp-cta-body">{product.cta.desc}</p>
          <div className="sp-cta-actions">
            <Link to="/contact" className="btn-primary">Book a Discovery Call</Link>
            <Link to="/services" className="btn-outline">See All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
