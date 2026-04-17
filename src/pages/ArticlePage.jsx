import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { blogArticles } from '../data/articles';
import './ArticlePage.css';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug);

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
      <div className="article-not-found">
        <h2>Article not found</h2>
        <Link to="/resources" className="btn-primary">Back to Resources</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      {/* Hero */}
      <div className="article-hero">
        <img src={article.img} alt={article.title} className="article-hero-img" />
        <div className="article-hero-overlay" />
        <div className="container article-hero-inner">
          <span className="article-category-badge">{article.category}</span>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span>{article.author}</span>
            <span className="article-meta-dot">·</span>
            <span>{article.date}</span>
            <span className="article-meta-dot">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container article-body-wrapper">
        <div className="article-body">
          {/* Intro */}
          <p className="article-intro">{article.intro}</p>

          {/* Sections */}
          {article.sections.map((section, i) => (
            <div key={i} className="article-section">
              <h2 className="article-section-heading">{section.heading}</h2>
              {section.paragraphs.map((para, j) => (
                <p key={j} className="article-paragraph">{para}</p>
              ))}
              {section.code && (
                <pre className="article-code"><code>{section.code}</code></pre>
              )}
              {section.list && (
                <ul className="article-list">
                  {section.list.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Conclusion */}
          {article.conclusion && (
            <div className="article-conclusion">
              <h2 className="article-section-heading">Conclusion</h2>
              <p className="article-paragraph">{article.conclusion}</p>
            </div>
          )}

          {/* CTA */}
          <div className="article-cta">
            <p>Want to build something like this? Softmakr specializes in delivering these exact solutions for fast-moving companies.</p>
            <Link to="/contact" className="btn-primary">Talk to Our Team</Link>
          </div>

          {/* Back link */}
          <div className="article-back">
            <Link to="/resources" className="article-back-link">← Back to Resources</Link>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="article-sidebar">
          <div className="sidebar-card">
            <h3>More in {article.category}</h3>
            <ul className="sidebar-links">
              {blogArticles
                .filter((a) => a.category === article.category && a.slug !== article.slug)
                .slice(0, 4)
                .map((a) => (
                  <li key={a.slug}>
                    <a href={`/resources/article/${a.slug}`} target="_blank" rel="noopener noreferrer">
                      {a.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="sidebar-card sidebar-cta-card">
            <h3>Need expert help?</h3>
            <p>Our team builds production-grade software, AI systems, and cloud infrastructure.</p>
            <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 12 }}>
              Get in Touch
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
