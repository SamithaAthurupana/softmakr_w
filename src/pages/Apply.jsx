import { useState, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ParticleNetwork from '../components/three/ParticleNetwork';
import './Apply.css';

// Destination is configured server-side by FormSubmit — not shown in the UI.
const FS_ENDPOINT = 'https://formsubmit.co/ajax/manodya1015@gmail.com';

export default function Apply() {
  const [params] = useSearchParams();
  const positionFromQuery = params.get('position') || '';
  const fileInputRef = useRef();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: positionFromQuery,
    linkedin: '',
    portfolio: '',
    coverLetter: '',
  });
  const [cvFile, setCvFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setCvFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cvFile) { alert('Please attach your CV before submitting.'); return; }

    setStatus('sending');

    const data = new FormData();
    data.append('Position',      form.position);
    data.append('Full Name',     form.fullName);
    data.append('Email',         form.email);
    data.append('Phone',         form.phone || 'Not provided');
    data.append('LinkedIn',      form.linkedin || 'Not provided');
    data.append('Portfolio',     form.portfolio || 'Not provided');
    data.append('Cover Letter',  form.coverLetter);
    data.append('CV',            cvFile, cvFile.name);
    // FormSubmit hidden fields
    data.append('_subject', `New Job Application — ${form.position}`);
    data.append('_captcha', 'false');
    data.append('_template', 'table');

    try {
      const res = await fetch(FS_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="apply-page">
        <ParticleNetwork />
        <div className="container apply-success" style={{ position: 'relative', zIndex: 1 }}>
          <div className="apply-success-icon">✓</div>
          <h2>Application Submitted!</h2>
          <p>
            Thank you, <strong>{form.fullName}</strong>. We've received your application for&nbsp;
            <strong>{form.position}</strong>. Our team will review it and be in touch within 3–5 business days.
          </p>
          <Link to="/careers" className="btn-primary" style={{ marginTop: 28, display: 'inline-block' }}>
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <section className="apply-hero">
        <ParticleNetwork />
        <div className="container apply-hero-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-label">Apply Now</div>
          <h1 className="apply-hero-title">Join the Softmakr Team</h1>
          <p className="apply-hero-sub">
            Fill in your details below and attach your CV. We'll review your application and get back to you shortly.
          </p>
        </div>
      </section>

      <section className="apply-form-section">
        <div className="container">
          <div className="apply-form-wrap">
            {form.position && (
              <div className="apply-position-badge">
                Applying for: <strong>{form.position}</strong>
              </div>
            )}

            <form className="apply-form" onSubmit={handleSubmit}>
              {/* Position */}
              <div className="apply-form-group">
                <label>Position Applying For *</label>
                <input
                  name="position"
                  type="text"
                  value={form.position}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Developer (React / Next.js)"
                  required
                />
              </div>

              {/* Name + Email */}
              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label>Full Name *</label>
                  <input name="fullName" type="text" value={form.fullName} onChange={handleChange} placeholder="Your full name" required />
                </div>
                <div className="apply-form-group">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
              </div>

              {/* Phone + LinkedIn */}
              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label>Phone Number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                </div>
                <div className="apply-form-group">
                  <label>LinkedIn Profile</label>
                  <input name="linkedin" type="url" value={form.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/yourname" />
                </div>
              </div>

              {/* Portfolio */}
              <div className="apply-form-group">
                <label>Portfolio / GitHub URL</label>
                <input name="portfolio" type="url" value={form.portfolio} onChange={handleChange} placeholder="https://yourportfolio.com" />
              </div>

              {/* Cover Letter */}
              <div className="apply-form-group">
                <label>Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  rows={5}
                  value={form.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you'd be a great fit for this role and what excites you about Softmakr..."
                  required
                />
              </div>

              {/* CV Upload */}
              <div className="apply-form-group">
                <label>Upload CV / Resume *</label>
                <div className="apply-file-drop">
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFile}
                    className="apply-file-input"
                  />
                  <label htmlFor="cv-upload" className="apply-file-label">
                    {cvFile ? (
                      <span className="apply-file-chosen">
                        <span className="apply-file-icon">📄</span>
                        {cvFile.name}
                      </span>
                    ) : (
                      <span>
                        <span className="apply-file-icon">⬆</span>
                        Click to upload PDF, DOC, or DOCX
                      </span>
                    )}
                  </label>
                </div>
              </div>

              {status === 'error' && (
                <p className="apply-error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <button type="submit" className="btn-primary apply-submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Submitting…' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
