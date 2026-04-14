import { useState } from 'react';
import TechPartners from '../components/TechPartners';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    industry: '',
    employees: '',
    interest: '',
    message: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left - Form */}
            <div className="contact-form-panel">
              <div className="section-label">Get In Touch</div>
              <h1 className="contact-title">Request a Live Demo</h1>
              <p className="contact-intro">
                Thank you for your interest in Softmakr. Please share your details, and our team will get in touch to discuss how we can best support your needs.
              </p>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank you!</h3>
                  <p>We've received your request. A member of our team will contact you shortly to schedule your demo.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First name</label>
                      <input name="firstName" type="text" placeholder="First name" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Last name</label>
                      <input name="lastName" type="text" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Business/Company name</label>
                    <input name="companyName" type="text" placeholder="Company name" value={form.companyName} onChange={handleChange} required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Business email address</label>
                      <input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Phone number</label>
                      <input name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Country</label>
                      <select name="country" value={form.country} onChange={handleChange} required>
                        <option value="">Select country</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Sri Lanka</option>
                        <option>India</option>
                        <option>Australia</option>
                        <option>Canada</option>
                        <option>Germany</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Industry</label>
                      <select name="industry" value={form.industry} onChange={handleChange}>
                        <option value="">Select industry</option>
                        <option>Technology</option>
                        <option>Finance & Banking</option>
                        <option>Healthcare</option>
                        <option>E-commerce & Retail</option>
                        <option>Education</option>
                        <option>Government</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Number of employees</label>
                      <select name="employees" value={form.employees} onChange={handleChange}>
                        <option value="">Select range</option>
                        <option>1–10</option>
                        <option>11–50</option>
                        <option>51–200</option>
                        <option>201–1000</option>
                        <option>1000+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>What are you interested in?</label>
                      <select name="interest" value={form.interest} onChange={handleChange}>
                        <option value="">Select interest</option>
                        <option>Custom Software</option>
                        <option>AI Solutions</option>
                        <option>Mobile Apps</option>
                        <option>UI/UX Design</option>
                        <option>Cloud & DevOps</option>
                        <option>Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Why are you looking to sign up / additional message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project or goals..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-checkbox">
                    <input type="checkbox" name="agree" id="agree" checked={form.agree} onChange={handleChange} required />
                    <label htmlFor="agree">
                      I have read and agree to the <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary form-submit-btn">Submit Request</button>
                </form>
              )}
            </div>

            {/* Right - Info panel */}
            <div className="contact-info-panel">
              <h2>Request a Live Demo</h2>
              <p>
                If you'd like to explore how Softmakr can support your business, request a personalized demo. Our team will walk you through our software solutions, AI capabilities, and real-world use cases tailored to your industry.
              </p>
              <p>
                Once you submit your request, a member of our team will contact you shortly to schedule a session.
              </p>

              <div className="contact-quote">
                <p>
                  "At Softmakr, we believe technology should solve real problems, not create complexity. Our focus is on building scalable software and intelligent AI solutions that help businesses grow, automate processes, and make smarter decisions."
                </p>
                <span>— Softmakr Team</span>
              </div>

              <div className="contact-info-items">
                <div className="info-item">
                  <div className="info-icon">✉</div>
                  <div>
                    <strong>Email Us</strong>
                    <p>hello@softmakr.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <strong>Our Office</strong>
                    <p>Colombo, Sri Lanka & Remote Worldwide</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div>
                    <strong>Response Time</strong>
                    <p>Within 24 hours on business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <TechPartners />
    </div>
  );
}
