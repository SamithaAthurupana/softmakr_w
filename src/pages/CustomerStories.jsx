import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import ParticleNetwork from '../components/three/ParticleNetwork';
import WaveGrid from '../components/three/WaveGrid';
import './CustomerStories.css';

const testimonials = [
  {
    quote: "Softmakr transformed our entire customer service operation. Their AI-powered platform reduced our response time by 70% and customer satisfaction scores jumped from 62% to 91% in just three months. The team's dedication and technical depth were truly exceptional.",
    author: 'Sarah Mitchell',
    role: 'CTO, Traveltic',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote: "Working with Softmakr on our e-commerce integration was a game-changer. They built a seamless data pipeline that connected our inventory, payments, and CRM in ways we thought would take years. Delivered on time, on budget, and exceeded every expectation.",
    author: 'James Okonkwo',
    role: 'Head of Technology, TRUEROOT',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
];

export default function CustomerStories() {
  return (
    <div className="stories-page">

      {/* Hero — particle background */}
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

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card glow-card">
                <div className="testimonial-img-placeholder">
                  <img src={t.avatar} alt={t.author} />
                </div>
                <div className="testimonial-body">
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <div className="testimonial-author">
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with wave grid */}
      <section className="stories-cta">
        <WaveGrid />
        <div className="container stories-cta-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stories-cta-text">
            <h2>At Softmakr, we partner with businesses to build technology that drives real results.</h2>
            <p>What began as a small team of passionate developers has grown into a trusted partner for delivering mission-critical software applications and AI solutions.</p>
            <p>Our journey is defined by collaboration, innovation, and a commitment to delivering value in every project we take on.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Request Live Demo</Link>
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>
          </div>
          <div className="stories-cta-img">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=560&h=400&fit=crop" alt="Team collaboration" />
          </div>
        </div>
      </section>

      <ClientLogos />
      <TechPartners />
    </div>
  );
}
