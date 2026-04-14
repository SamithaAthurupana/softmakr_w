import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import './Resources.css';

const categories = [
  'AI & Machine Learning',
  'Web Development',
  'Backend Engineering',
  'DevOps & Cloud',
  'UI/UX Design',
  'Career & Learning',
];

const blogArticles = [
  {
    title: 'Building Scalable APIs with FastAPI & AWS',
    desc: 'Learn how to design and build high-performance, scalable backend APIs using FastAPI, PostgreSQL, and modern AWS infrastructure.',
    img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=220&fit=crop',
    category: 'Backend Engineering',
    readTime: '8 min read',
  },
  {
    title: 'Introduction to RAG Applications',
    desc: 'Understand how Retrieval-Augmented Generation works and how to build production-ready AI-powered applications using vector embeddings.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop',
    category: 'AI & Machine Learning',
    readTime: '10 min read',
  },
  {
    title: 'React vs Next.js: Which Should You Choose?',
    desc: 'A practical comparison of React and Next.js from the perspective of a full-stack team building your next high-traffic web framework.',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=220&fit=crop',
    category: 'Web Development',
    readTime: '6 min read',
  },
  {
    title: 'Deploying FastAPI with Docker & AWS',
    desc: 'Step-by-step guide to containerizing and deploying your backend APIs to production on AWS using Docker, ECS, and Nginx.',
    img: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=220&fit=crop',
    category: 'DevOps & Cloud',
    readTime: '12 min read',
  },
  {
    title: 'Building an AI Chatbot with LLMs',
    desc: 'Learn how to create a chatbot using OpenAI, LangChain, and vector stores. Covers embeddings, memory management, and prompt design.',
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=220&fit=crop',
    category: 'AI & Machine Learning',
    readTime: '9 min read',
  },
  {
    title: 'PostgreSQL Optimization Techniques',
    desc: 'Improve performance using indexing, query tuning, and database design best practices to get the most out of PostgreSQL at scale.',
    img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=220&fit=crop',
    category: 'Backend Engineering',
    readTime: '7 min read',
  },
];

const caseStudies = [
  {
    title: 'AI-Powered Crypto Intelligence Platform',
    desc: 'Built an agent-workflow to analyze crypto trends and generate insights using Python, RAG, and vector databases for real-time intelligence.',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=220&fit=crop',
    tag: 'AI + FinTech',
  },
  {
    title: 'Banking Fraud Detection System',
    desc: 'A real-time fraud detection system built using Python, FastAPI, and anomaly detection techniques to protect thousands of transactions daily.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=220&fit=crop',
    tag: 'AI + Banking',
  },
  {
    title: 'AI Document Intelligence System',
    desc: 'An intelligent document processing and search system using embeddings, semantic search systems using embeddings and detection techniques.',
    img: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=220&fit=crop',
    tag: 'AI + Enterprise',
  },
];

export default function Resources() {
  return (
    <div className="resources-page">
      {/* Hero */}
      <section className="resources-hero">
        <div className="container resources-hero-inner">
          <div className="section-label">Knowledge Base</div>
          <h1 className="section-heading">Insights, Guides & Resources</h1>
          <p className="section-sub">
            Explore expert insights, technical guides, and real-world case studies on software development, AI solutions, and modern technology.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
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
          <div className="dark-section-header-res">
            <h2>Explore by Category</h2>
          </div>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <button key={i} className="category-chip">{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles Row 1 */}
      <section className="blog-section">
        <div className="container">
          <div className="dark-section-header-res">
            <h2>Blog Articles</h2>
          </div>
          <div className="blog-grid">
            {blogArticles.slice(0, 3).map((art, i) => (
              <div key={i} className="blog-card glow-card">
                <div className="blog-card-img">
                  <img src={art.img} alt={art.title} />
                  <span className="blog-category-tag">{art.category}</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{art.title}</h3>
                  <p className="blog-card-desc">{art.desc}</p>
                  <span className="blog-read-time">{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles Row 2 */}
      <section className="blog-section alt-bg">
        <div className="container">
          <div className="dark-section-header-res">
            <h2>Blog Articles</h2>
          </div>
          <div className="blog-grid">
            {blogArticles.slice(3, 6).map((art, i) => (
              <div key={i} className="blog-card glow-card">
                <div className="blog-card-img">
                  <img src={art.img} alt={art.title} />
                  <span className="blog-category-tag">{art.category}</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{art.title}</h3>
                  <p className="blog-card-desc">{art.desc}</p>
                  <span className="blog-read-time">{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="case-studies-section" id="case-studies">
        <div className="container">
          <div className="dark-section-header-res">
            <h2>Case Studies</h2>
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
