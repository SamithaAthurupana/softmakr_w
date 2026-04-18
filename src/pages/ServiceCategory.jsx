import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { serviceCategories } from '../data/serviceCategories';
import './ServiceCategory.css';

export default function ServiceCategory() {
  const { slug } = useParams();
  const cat = serviceCategories.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (cat) {
      document.title = `${cat.title} | Softmakr`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', cat.metaDesc);
    }
  }, [cat]);

  if (!cat) {
    return (
      <div className="sc-not-found">
        <h2>Page not found</h2>
        <Link to="/services" className="btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="sc-page">

      {/* ── Hero ── */}
      <section className="sc-hero">
        <div className="sc-hero-bg" style={{ backgroundImage: `url(${cat.heroImg})` }} />
        <div className="sc-hero-overlay" />
        <div className="container sc-hero-inner">
          <span className="sc-badge">Softmakr Services</span>
          <h1 className="sc-hero-title">{cat.title}</h1>
          <p className="sc-hero-tagline">{cat.tagline}</p>
          <p className="sc-hero-desc">{cat.intro}</p>
          <div className="sc-hero-actions">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/contact" className="btn-outline">Book Discovery Call</Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="sc-stats-bar">
        <div className="container sc-stats-grid">
          {cat.stats.map((s, i) => (
            <div key={i} className="sc-stat">
              <span className="sc-stat-value">{s.value}</span>
              <span className="sc-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── What we build ── */}
      <section className="sc-section sc-whatwebuild-section">
        <div className="container">
          <div className="sc-section-header">
            <span className="sc-section-label">Our Capabilities</span>
            <h2 className="sc-section-heading">{cat.whatWeBuild.heading}</h2>
            <p className="sc-section-sub">{cat.whatWeBuild.desc}</p>
          </div>
          <div className="sc-capabilities-grid">
            {cat.whatWeBuild.items.map((item, i) => (
              <div key={i} className="sc-cap-card">
                <span className="sc-cap-icon">{item.icon}</span>
                <h3 className="sc-cap-title">{item.title}</h3>
                <p className="sc-cap-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section className="sc-section sc-portfolio-section">
        <div className="container">
          <div className="sc-section-header">
            <span className="sc-section-label">Our Work</span>
            <h2 className="sc-section-heading">{cat.portfolio.heading}</h2>
            <p className="sc-section-sub">{cat.portfolio.desc}</p>
          </div>
          <div className="sc-portfolio-list">
            {cat.portfolio.items.map((item, i) => (
              <div key={i} className={`sc-portfolio-item ${i % 2 === 1 ? 'sc-portfolio-item--reverse' : ''}`}>
                <div className="sc-portfolio-img-wrap">
                  <img src={item.img} alt={item.title} className="sc-portfolio-img" />
                  <span className="sc-portfolio-cat">{item.category}</span>
                </div>
                <div className="sc-portfolio-content">
                  <h3 className="sc-portfolio-title">{item.title}</h3>
                  <p className="sc-portfolio-desc">{item.desc}</p>
                  <div className="sc-portfolio-tags">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="sc-tag">{tag}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="sc-portfolio-cta">
                    Build something similar →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="sc-section sc-tech-section">
        <div className="container">
          <div className="sc-section-header">
            <span className="sc-section-label">Technology</span>
            <h2 className="sc-section-heading">{cat.techStack.heading}</h2>
            <p className="sc-section-sub">{cat.techStack.desc}</p>
          </div>
          <div className="sc-tech-groups">
            {cat.techStack.groups.map((group, i) => (
              <div key={i} className="sc-tech-group">
                <h4 className="sc-tech-group-label">{group.label}</h4>
                <div className="sc-tech-items">
                  {group.items.map((item, j) => (
                    <span key={j} className="sc-tech-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="sc-section sc-whyus-section">
        <div className="container">
          <div className="sc-section-header">
            <span className="sc-section-label">Why Softmakr</span>
            <h2 className="sc-section-heading">Why teams choose us over the alternatives</h2>
          </div>
          <div className="sc-whyus-grid">
            {cat.whyUs.map((item, i) => (
              <div key={i} className="sc-whyus-card">
                <div className="sc-whyus-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="sc-whyus-title">{item.title}</h3>
                <p className="sc-whyus-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="sc-section sc-process-section">
        <div className="container">
          <div className="sc-section-header">
            <span className="sc-section-label">How We Work</span>
            <h2 className="sc-section-heading">From brief to live product — our process</h2>
            <p className="sc-section-sub">No surprises, no black boxes. You know exactly what is happening at every stage.</p>
          </div>
          <div className="sc-process-steps">
            {cat.process.map((step, i) => (
              <div key={i} className="sc-process-step">
                <div className="sc-process-step-num">{step.step}</div>
                <div className="sc-process-step-body">
                  <h4 className="sc-process-step-title">{step.title}</h4>
                  <p className="sc-process-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sc-cta-section">
        <div className="container sc-cta-inner">
          <h2 className="sc-cta-heading">{cat.cta.heading}</h2>
          <p className="sc-cta-body">{cat.cta.desc}</p>
          <div className="sc-cta-actions">
            <Link to="/contact" className="btn-primary">Start the Conversation</Link>
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
