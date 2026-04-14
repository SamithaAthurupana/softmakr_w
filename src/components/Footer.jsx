import { Link } from 'react-router-dom';
import './Footer.css';

const footerColumns = [
  {
    heading: 'Products',
    links: [
      { label: 'LexixGPT', to: '/products/lexixgpt' },
      { label: 'Smart LMS', to: '/products/smart-lms' },
      { label: 'Smart Link', to: '/products/smart-link' },
      { label: 'Smart LRM', to: '/products/smart-lrm' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'LexixGPT 2.0', to: '/resources/lexixgpt-2' },
      { label: 'Smart LMS', to: '/resources/smart-lms' },
      { label: 'Smart Link', to: '/resources/smart-link' },
      { label: 'Smart LRM', to: '/resources/smart-lrm' },
    ],
  },
  {
    heading: 'Products',
    links: [
      { label: 'LexixGPT 3.0', to: '/products/lexixgpt-3' },
      { label: 'Smart LMS', to: '/products/smart-lms-3' },
      { label: 'Smart Link', to: '/products/smart-link-3' },
      { label: 'Smart LRM', to: '/products/smart-lrm-3' },
    ],
  },
  {
    heading: 'Products',
    links: [
      { label: 'LexixGPT 7.3', to: '/products/lexixgpt-7' },
      { label: 'Smart LMS', to: '/products/smart-lms-7' },
      { label: 'Smart Link', to: '/products/smart-link-7' },
      { label: 'Smart LRM', to: '/products/smart-lrm-7' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        {/* Left column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-badge">SOFTMAKR</span>
            {/* <span>Softmakr</span> */}
          </Link>
          <p className="footer-tagline">
            At Softmakr, we believe technology should be practical, accessible, and focused on solving real problems. We design scalable software, mobile applications, and intelligent AI solutions that truly help businesses grow, automate processes, and make smarter decisions.
          </p>
        </div>

        {/* Link columns */}
        <div className="footer-links-grid">
          {footerColumns.map((col, i) => (
            <div key={i} className="footer-col">
              <h4 className="footer-col-heading">{col.heading}</h4>
              <ul>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.to} className="footer-link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2024 <strong>Softmakr</strong>. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
