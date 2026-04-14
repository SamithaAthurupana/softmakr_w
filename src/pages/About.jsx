import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import './About.css';

const processSteps = [
  {
    phase: 'Planning & Requirement Analysis',
    detail: 'Defining project goals, scope, resources, and roles.',
  },
  {
    phase: 'Defining Requirements',
    detail: 'Documenting software requirements clearly to meet customer needs.',
  },
  {
    phase: 'Design',
    detail: 'Creating the system architecture, user interfaces, and database structures.',
  },
  {
    phase: 'Development (Coding)',
    detail: 'Translating design specifications into actual source code.',
  },
  {
    phase: 'Testing',
    detail: 'Running tests to identify bugs, verify performance, and ensure quality.',
  },
  {
    phase: 'Deployment',
    detail: 'Releasing the finalized software to the end-users.',
  },
  {
    phase: 'Maintenance',
    detail: 'Providing ongoing support, fixing defects, and adding enhancements.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="section-label">About Us</div>
          <h1 className="section-heading">Our vision</h1>
          <p className="about-hero-tagline">Softmakr is the visionary leader in democratizing AI.</p>
        </div>
      </section>

      {/* Who we are */}
      <section className="about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-text">
            <p>
              At Softmakr, <strong>building powerful digital solutions</strong> is our mission. We design scalable software, mobile applications, and intelligent systems that help businesses grow, automate processes, and make smarter decisions.
            </p>
            <p>
              We believe technology should be practical, accessible, and focused on solving real problems. From a passionate startup team to a growing development company, we are dedicated to delivering high-quality solutions that empower businesses and bring ideas to life.
            </p>
          </div>
          <div className="about-intro-img">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Softmakr team collaborating"
            />
          </div>
        </div>
      </section>

      {/* OUR Process */}
      <section className="our-process">
        <div className="container">
          <div className="section-label">How We Work</div>
          <h2 className="section-heading">OUR Process</h2>
          <div className="process-list">
            {processSteps.map((step, i) => (
              <div key={i} className="process-item">
                <div className="process-number">{String(i + 1).padStart(2, '0')}</div>
                <div className="process-content">
                  <strong>{step.phase}:</strong> {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="about-cta-banner">
        <div className="container about-cta-inner">
          <div className="about-cta-text">
            <h2>We build great digital products<br />and AI solutions.</h2>
            <p>
              We partner with enterprises, startups, and governments worldwide to develop cutting-edge technology products and Artificial Intelligence solutions that help them achieve their goals.
            </p>
            <div className="about-cta-btns">
              <Link to="/contact" className="btn-primary">Request Live Demo</Link>
              <Link to="/services" className="btn-outline">Learn More</Link>
            </div>
          </div>
          <div className="about-cta-img">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=560&h=380&fit=crop"
              alt="Team working on AI solutions"
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
