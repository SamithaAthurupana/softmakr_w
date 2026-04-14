import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import './CustomerStories.css';

const testimonials = [
  {
    quote:
      "Softmakr transformed our entire customer service operation. Their AI-powered platform reduced our response time by 70% and customer satisfaction scores jumped from 62% to 91% in just three months. The team's dedication and technical depth were truly exceptional.",
    author: 'Sarah Mitchell',
    role: 'CTO, Traveltic',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
  },
  {
    quote:
      "Working with Softmakr on our e-commerce integration was a game-changer. They built a seamless data pipeline that connected our inventory, payments, and CRM in ways we thought would take years. Delivered on time, on budget, and exceeded every expectation.",
    author: 'James Okonkwo',
    role: 'Head of Technology, TRUEROOT',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
];

const caseStudies = [
  {
    title: 'AI-Powered Retail Analytics for Pharmays',
    desc: 'How we helped Pharmays boost sales forecasting accuracy by 84% using ML-based demand prediction and real-time inventory intelligence built on AWS and FastAPI.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=240&fit=crop',
    tag: 'AI & Analytics',
    client: 'Pharmays',
  },
  {
    title: 'Automated HR Workflows for a 5,000-Person Enterprise',
    desc: 'We designed and deployed an end-to-end HR automation platform that reduced onboarding time by 60%, eliminated manual payroll errors, and saved 800+ hours per month.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=240&fit=crop',
    tag: 'Automation',
    client: 'Price Checker',
  },
  {
    title: 'Full-Stack LMS Rebuild for EdTech Startup',
    desc: 'Rebuilt an aging LMS from scratch using a modern React + FastAPI stack with AI-driven personalization — growing the platform to 50,000 active learners within six months.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=240&fit=crop',
    tag: 'Web Development',
    client: 'EduNext',
  },
];

export default function CustomerStories() {
  return (
    <div className="stories-page">
      {/* Hero */}
      <section className="stories-hero">
        <div className="container">
          <div className="section-label">Customer Stories</div>
          <h1 className="section-heading">Success Stories</h1>
          <p className="section-sub">What our customers say.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
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

      {/* At LexixCode CTA */}
      <section className="stories-cta">
        <div className="container stories-cta-inner">
          <div className="stories-cta-text">
            <h2>At Softmakr, we partner with businesses to build technology that drives real results.</h2>
            <p>
              What began as a small team of passionate developers has grown into a trusted partner for delivering mission-critical software applications, and AI solutions. By combining technical expertise with a deep understanding of business operations, we deliver products that make a real difference.
            </p>
            <p>
              Our journey is defined by collaboration, innovation, and a commitment to delivering value in every project we take on.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Request Live Demo</Link>
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>
          </div>
          <div className="stories-cta-img">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=560&h=400&fit=crop"
              alt="Team collaboration"
            />
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientLogos />

      {/* Tech Partners */}
      <TechPartners />
    </div>
  );
}
