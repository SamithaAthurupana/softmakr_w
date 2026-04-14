import { Link } from 'react-router-dom';
import ClientLogos from '../components/ClientLogos';
import TechPartners from '../components/TechPartners';
import ParticleNetwork from '../components/three/ParticleNetwork';
import './Home.css';

const serviceGroups = [
  {
    heading: 'We Craft Smart Digital Solutions & AI Experiences For the Next Generation of Businesses',
    items: [
      {
        title: 'AI Customer Assistant',
        desc: 'Build intelligent conversational AI agents that handle customer queries, support tickets, and lead qualification 24/7 — reducing response time and operational costs.',
        img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=240&fit=crop',
      },
      {
        title: 'AI Omnichannel Intelligence',
        desc: 'Unify customer data across all touchpoints with AI-powered analytics. Deliver personalized experiences across web, mobile, email, and social channels seamlessly.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
      },
      {
        title: 'Custom SaaS Platforms',
        desc: 'Design and develop cloud-native SaaS platforms tailored to your business workflows, with multi-tenant architecture, robust APIs, and scalable infrastructure.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
      },
    ],
  },
  {
    heading: 'We Develop Smart Automation Solutions That Connect, Automate & Scale Your Business',
    items: [
      {
        title: 'HR Workflow Automation',
        desc: 'Streamline HR processes from onboarding to payroll with intelligent automation. Eliminate manual tasks, reduce errors, and free your HR team to focus on people, not paperwork.',
        img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=240&fit=crop',
      },
      {
        title: 'E-commerce Integration System',
        desc: 'Connect your e-commerce ecosystem — inventory, payments, shipping, and CRM — into one unified, automated platform that scales with your growing business.',
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=240&fit=crop',
      },
      {
        title: 'Data Sync & Integration Pipeline',
        desc: 'Build real-time data pipelines that sync information across your entire tech stack. From ERP to CRM to data warehouses — always consistent, always up to date.',
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=240&fit=crop',
      },
    ],
  },
  {
    heading: 'We Design Experiences Users Love Backed by Research, Strategy, and Creativity',
    items: [
      {
        title: 'UI Campaign & Product Optimization',
        desc: 'Transform your product interfaces with data-driven design decisions. We analyze user behavior, run A/B tests, and craft UI experiences that convert and retain users.',
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop',
      },
      {
        title: 'Website UX & Landing Page',
        desc: 'Design high-converting landing pages and intuitive website experiences. We combine visual storytelling with UX best practices to drive engagement and achieve your goals.',
        img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=240&fit=crop',
      },
      {
        title: 'Mobile App Experience Design',
        desc: 'Create seamless, delightful mobile experiences for iOS and Android. Our design process covers user research, prototyping, and pixel-perfect handoff to developers.',
        img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop',
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero with particle network background */}
      <section className="hero-section">
        <ParticleNetwork />
        <div className="container hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title">
            Software Development & AI Solutions That Fit Your Business
          </h1>
          <p className="hero-sub">
            We partner with enterprises, startups, and governments worldwide to develop cutting-edge technology products and Artificial Intelligence solutions that help them achieve their goals.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Request Live Demo</Link>
            <Link to="/services" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <ClientLogos />

      {/* Service Groups */}
      {serviceGroups.map((group, gi) => (
        <section key={gi} className={`service-group ${gi % 2 === 1 ? 'alt-bg' : ''}`}>
          <div className="container">
            <div className="dark-section-header">
              <h2>{group.heading}</h2>
            </div>
            <div className="card-grid-3">
              {group.items.map((item, i) => (
                <div key={i} className="service-card glow-card">
                  <div className="service-card-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h3 className="service-card-title">{item.title}</h3>
                  <p className="service-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
            {gi === 1 && (
              <div className="group-actions">
                <Link to="/services" className="btn-primary">Explore Services</Link>
                <Link to="/contact" className="btn-outline">Contact Us</Link>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Tech Partners */}
      <TechPartners />
    </div>
  );
}
