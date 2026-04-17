import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import ParticleNetwork from '../components/three/ParticleNetwork';
import WaveGrid from '../components/three/WaveGrid';
import { blogArticles, caseStudies } from '../data/articles';
import './Resources.css';

const categories = [
  'AI & Machine Learning',
  'Web Development',
  'Backend Engineering',
  'DevOps & Cloud',
  'UI/UX Design',
  'Career & Learning',
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategory = (cat) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  };

  const filtered = activeCategory
    ? blogArticles.filter((a) => a.category === activeCategory)
    : blogArticles;

  const row1 = activeCategory ? filtered : blogArticles.slice(0, 3);
  const row2 = activeCategory ? [] : blogArticles.slice(3);

  return (
    <div className="resources-page">
      {/* Hero */}
      <section className="resources-hero">
        <ParticleNetwork />
        <div className="container resources-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">Knowledge Base</div>
          <h1 className="section-heading">Insights, Guides & Resources</h1>
          <p className="section-sub">
            Explore expert insights, technical guides, and real-world case studies on software development, AI solutions, and modern technology.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary">Talk to an Expert</Link>
            <Link to="/resources#case-studies" className="btn-outline">View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientLogos />

      {/* Explore by Category */}
      <section className="categories-section">
        <div className="container">
          <div className="dark-section-header-res" style={{ textAlign: 'center' }}>
            <h2>Explore by Category</h2>
          </div>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`category-chip${activeCategory === cat ? ' active' : ''}`}
                onClick={() => handleCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered or Row 1 */}
      <section className="blog-section">
        <div className="container">
          <div className="dark-section-header-res">
            <h2 style={{ textAlign: 'center' }}>{activeCategory ? `${activeCategory} Articles` : 'Blog Articles'}</h2>
            {activeCategory && (
              <button className="clear-filter-btn" onClick={() => setActiveCategory(null)}>
                Show all articles ×
              </button>
            )}
          </div>
          {row1.length > 0 ? (
            <div className="blog-grid">
              {row1.map((art) => (
                <ArticleCard key={art.slug} article={art} />
              ))}
            </div>
          ) : (
            <p className="no-articles">No articles in this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      {/* Row 2 — only when no filter is active */}
      {!activeCategory && row2.length > 0 && (
        <section className="blog-section alt-bg">
          <div className="container">
            <div className="dark-section-header-res">
              <h2 style={{ textAlign: 'center' }}>More Articles</h2>
            </div>
            <div className="blog-grid">
              {row2.map((art) => (
                <ArticleCard key={art.slug} article={art} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      <section className="case-studies-section" id="case-studies">
        <WaveGrid />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="dark-section-header-res">
            <h2 style={{ textAlign: 'center' }}>Case Studies</h2>
          </div>
          <div className="blog-grid">
            {caseStudies.map((cs, i) => (
              <div key={i} className="blog-card glow-card">
                <div className="blog-card-img">
                  <img src={cs.img} alt={cs.title} />
                  <span className="blog-category-tag">{cs.tag}</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{cs.title}</h3>
                  <p className="blog-card-desc">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <TechPartners />
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <a
      href={`/resources/article/${article.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card glow-card blog-card-link"
    >
      <div className="blog-card-img">
        <img src={article.img} alt={article.title} />
        <span className="blog-category-tag">{article.category}</span>
      </div>
      <div className="blog-card-body">
        <h3 className="blog-card-title">{article.title}</h3>
        <p className="blog-card-desc">{article.desc}</p>
        <div className="blog-card-footer">
          <span className="blog-read-time">{article.readTime}</span>
          <span className="blog-read-more">Read article →</span>
        </div>
      </div>
    </a>
  );
}
