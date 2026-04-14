import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/customer-stories', label: 'Customer Stories' },
    { to: '/careers', label: 'Careers' },
    { to: '/resources', label: 'Resources' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <span className="logo-badge">SOFTMAKR</span>
          {/* <span className="logo-text">Softmakr</span> */}
        </Link>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary navbar-cta" onClick={() => setMenuOpen(false)}>
          Request Live Demo
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
