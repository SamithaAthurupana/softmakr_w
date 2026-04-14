import { Link } from 'react-router-dom';
import TechPartners from '../components/TechPartners';
import ParticleNetwork from '../components/three/ParticleNetwork';
import WaveGrid from '../components/three/WaveGrid';
import './CustomerStories.css';

const testimonials = [
  {
    quote: "Softmakr transformed our entire customer service operation. Their AI-powered platform reduced our response time by 70% and customer satisfaction scores jumped from 62% to 91% in just three months.",
    author: 'Sarah Mitchell',
    role: 'CTO',
    company: 'Traveltic',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    tag: 'AI & Automation',
  },
  {
    quote: "Working with Softmakr on our e-commerce integration was a game-changer. They built a seamless data pipeline that connected our inventory, payments, and CRM in ways we thought would take years.",
    author: 'James Okonkwo',
    role: 'Head of Technology',
    company: 'TRUEROOT',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    tag: 'E-commerce',
  },
  {
    quote: "The LLM-powered document intelligence system they built saves our team over 20 hours per week. It extracts, classifies, and routes documents with near-perfect accuracy — something we never thought possible.",
    author: 'Amara Patel',
    role: 'Director of Operations',
    company: 'Phamasys',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    tag: 'Document AI',
  },
  {
    quote: "Our mobile app went from concept to live product in under 12 weeks. The team's attention to UX detail and backend performance was exceptional — our users love the experience.",
    author: 'Daniel Reeves',
    role: 'Founder & CEO',
    company: 'PlantCare',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    tag: 'Mobile App',
  },
  {
    quote: "Softmakr built a fraud detection system that now protects thousands of transactions daily. False positives dropped by 85% while catch rates improved dramatically. Truly impressive engineering.",
    author: 'Priya Nair',
    role: 'VP of Engineering',
    company: 'MyClinic',
    avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    tag: 'FinTech AI',
  },
  {
    quote: "The SaaS platform they built for us scaled from zero to 10,000 users in two months. Rock-solid architecture, beautiful UI, and incredible support throughout the process.",
    author: 'Kevin Osei',
    role: 'Co-founder',
    company: 'JobFinder',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    tag: 'SaaS Platform',
  },
  {
    quote: "Softmakr helped us automate our entire HR onboarding workflow. What used to take 3 days now takes 3 hours. The ROI in the first quarter alone covered the entire project cost.",
    author: 'Leila Hassan',
    role: 'Chief HR Officer',
    company: 'Tastea Tea',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    tag: 'HR Automation',
  },
  {
    quote: "They delivered a crypto intelligence platform with real-time RAG pipelines that our analysts rely on daily. The quality of work and speed of delivery was unmatched by any vendor we've tried.",
    author: 'Marcus Wei',
    role: 'Head of Product',
    company: 'Price Checker',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    tag: 'Crypto & AI',
  },
];

const Stars = ({ count }) => (
  <div className="story-stars">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="story-star">★</span>
    ))}
  </div>
);

const TestimonialCard = ({ t }) => (
  <div className="story-card glow-card">
    <div className="story-card-top">
      <Stars count={t.rating} />
      <span className="story-tag">{t.tag}</span>
    </div>
    <p className="story-quote">"{t.quote}"</p>
    <div className="story-author">
      <img src={t.avatar} alt={t.author} className="story-avatar" />
      <div>
        <strong className="story-name">{t.author}</strong>
        <span className="story-role">{t.role} · {t.company}</span>
      </div>
    </div>
  </div>
);

// Split testimonials into two rows
const rowA = testimonials.slice(0, 4);
const rowB = testimonials.slice(4);

export default function CustomerStories() {
  return (
    <div className="stories-page">

      {/* Hero */}
      <section className="stories-hero">
        <ParticleNetwork />
        <div className="container stories-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">Customer Stories</div>
          <h1 className="stories-hero-title">Real Results, Real Stories</h1>
          <p className="stories-hero-sub">
            Discover how businesses around the world have transformed their operations, accelerated growth, and unlocked new value with Softmakr.
          </p>
          <div className="stories-hero-actions">
            <Link to="/contact" className="btn-primary">Request Live Demo</Link>
            <Link to="/about" className="btn-outline">Learn About Us</Link>
          </div>
        </div>
      </section>

      {/* Auto-scrolling testimonials */}
      <section className="stories-scroll-section">
        <div className="stories-scroll-label">
          <span>What our clients say</span>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="stories-track-wrap">
          <div className="stories-track stories-track--left">
            {[...rowA, ...rowA].map((t, i) => (
              <div className="stories-track-item" key={`a-${i}`} aria-hidden={i >= rowA.length}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="stories-track-wrap" style={{ marginTop: 24 }}>
          <div className="stories-track stories-track--right">
            {[...rowB, ...rowB].map((t, i) => (
              <div className="stories-track-item" key={`b-${i}`} aria-hidden={i >= rowB.length}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="stories-stats">
        <div className="container stories-stats-grid">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '12+', label: 'Countries Served' },
            { value: '4×', label: 'Avg. ROI Reported' },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA with wave grid */}
      <section className="stories-cta">
        <WaveGrid />
        <div className="container stories-cta-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stories-cta-text">
            <h2>Ready to become our next success story?</h2>
            <p>We partner with ambitious businesses to build technology that drives real, measurable results — from day one.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Request Live Demo</Link>
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <TechPartners />
    </div>
  );
}
