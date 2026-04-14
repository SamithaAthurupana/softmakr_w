import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import ParticleNetwork from '../components/three/ParticleNetwork';
import WaveGrid from '../components/three/WaveGrid';
import './Services.css';

const categories = [
  {
    label: 'Web, Mobile & Cloud Apps',
    items: [
      {
        title: 'LexixGPT',
        desc: 'An enterprise-grade AI assistant platform that integrates with your existing tools and knowledge base to deliver intelligent, context-aware responses for your team.',
        img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop',
      },
      {
        title: 'AI Driven LMS',
        desc: 'A next-generation learning management system powered by AI that personalizes content delivery, tracks learner progress, and adapts training paths in real time.',
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=220&fit=crop',
      },
      {
        title: 'Platform Analyzer',
        desc: 'A powerful business intelligence platform that aggregates multi-source data, applies ML models, and delivers actionable dashboards for smarter decisions.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop',
      },
    ],
  },
  {
    label: 'Artificial Intelligence',
    items: [
      {
        title: 'LexixGPT',
        desc: 'Build and deploy domain-specific large language model solutions fine-tuned on your proprietary data. From RAG pipelines to agentic workflows — we deliver production-ready AI.',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=220&fit=crop',
      },
      {
        title: 'AI Driven LMS',
        desc: 'Automate content creation, assessment generation, and student performance prediction using state-of-the-art AI models trained on educational datasets.',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=220&fit=crop',
      },
      {
        title: 'Platform Analyzer',
        desc: 'Use predictive analytics and anomaly detection to surface hidden patterns in your data. Proactively identify risks, opportunities, and performance gaps.',
        img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=220&fit=crop',
      },
    ],
  },
  {
    label: 'UX Designs',
    items: [
      {
        title: 'LexixGPT',
        desc: 'Design intuitive chat interfaces and AI-native experiences that make complex AI capabilities accessible and enjoyable for everyday users across all devices.',
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=220&fit=crop',
      },
      {
        title: 'AI Driven LMS',
        desc: 'Create engaging, learner-first UI/UX for education platforms — from interactive dashboards and progress trackers to gamified learning journeys and mobile-first designs.',
        img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=220&fit=crop',
      },
      {
        title: 'Platform Analyzer',
        desc: 'Transform complex data visualizations into clear, actionable interfaces. We design analytics dashboards that communicate insights at a glance for all stakeholders.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop',
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero">
        <ParticleNetwork />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">Our Services</div>
          <h1 className="section-heading">
            We build great digital products<br />and AI solutions.
          </h1>
          <p className="section-sub">
            We partner with enterprises, startups, and governments worldwide to develop cutting-edge technology products and Artificial Intelligence solutions that help them achieve their goals.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <Link to="/contact" className="btn-primary">Request Live Demo</Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientLogos />

      {/* What we can build */}
      <section className="what-we-build">
        <WaveGrid />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="dark-section-header-services">
            <h2>What we can build for you</h2>
          </div>

          {categories.map((cat, ci) => (
            <div key={ci} className="build-category">
              <h3 className="cat-label">{cat.label}</h3>
              <div className="card-grid-3">
                {cat.items.map((item, i) => (
                  <div key={i} className="build-card glow-card">
                    <div className="build-card-img">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <h4 className="build-card-title">{item.title}</h4>
                    <p className="build-card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Partners */}
      <TechPartners />
    </div>
  );
}
