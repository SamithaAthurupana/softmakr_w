import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import './Careers.css';

const positions = [
  {
    title: 'Backend Developer (Python / FastAPI)',
    desc: 'Design and build scalable backend systems for modern web and AI-powered applications. Work with Python, FastAPI, PostgreSQL, Docker, and cloud services.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'Frontend Developer (React / Next.js)',
    desc: 'Create responsive, modern user interfaces for web platforms and customer-facing applications. Collaborate closely with designers and backend engineers.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Full Stack Developer',
    desc: 'Own end-to-end product features across frontend and backend. Ideal for developers who enjoy building versatile digital products with modern frameworks.',
    tags: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'AI Engineer / LLM Developer',
    desc: 'Design and build intelligent applications using LLMs, RAG pipelines, vector databases, and AI workflows for real-world use cases.',
    tags: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
  },
];

export default function Careers() {
  return (
    <div className="careers-page">
      {/* Hero */}
      <section className="careers-hero">
        <div className="container">
          <div className="section-label">Join Our Team</div>
          <h1 className="section-heading">We build great digital products<br />and AI solutions.</h1>
          <p className="section-sub">
            Join our team of engineers, designers, and innovators building modern software, AI solutions, and digital products for ambitious businesses worldwide.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <Link to="/about" className="btn-outline">Learn About Us</Link>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientLogos />

      {/* Open Positions */}
      <section className="positions-section">
        <div className="container">
          <div className="dark-section-header-careers">
            <h2>Open Positions</h2>
          </div>

          <div className="positions-list">
            {positions.map((pos, i) => (
              <div key={i} className="position-card">
                <div className="position-info">
                  <h3 className="position-title">{pos.title}</h3>
                  <p className="position-desc">{pos.desc}</p>
                  <div className="position-tags">
                    {pos.tags.map((tag, j) => (
                      <span key={j} className="position-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="position-action">
                  <Link to="/contact" className="btn-primary apply-btn">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="why-join">
        <div className="container">
          <div className="why-join-grid">
            <div className="why-join-text">
              <div className="section-label">Why Softmakr</div>
              <h2 className="section-heading">Build the future with a team that cares.</h2>
              <p className="section-sub">
                We're a remote-friendly, diverse team of builders who are passionate about solving real problems with technology. We offer competitive salaries, flexible hours, and meaningful work that makes an impact.
              </p>
              <ul className="perks-list">
                <li>Remote-first, async-friendly culture</li>
                <li>Competitive salary and equity packages</li>
                <li>Learning & development budget</li>
                <li>Work on cutting-edge AI projects</li>
                <li>Health coverage and wellness benefits</li>
                <li>Annual team retreats</li>
              </ul>
            </div>
            <div className="why-join-img">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=560&h=400&fit=crop"
                alt="Softmakr team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <TechPartners />
    </div>
  );
}
