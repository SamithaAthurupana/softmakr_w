import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ParticleNetwork from '../components/three/ParticleNetwork';
import './Apply.css';

export default function Apply() {
  const [params] = useSearchParams();
  const positionFromQuery = params.get('position') || '';

  const [cvFile, setCvFile] = useState(null);
  const [position, setPosition] = useState(positionFromQuery);

  // The _next URL tells FormSubmit where to redirect after a successful submission.
  // It must be an absolute URL. We build it from the current origin so it works
  // both in development and in production automatically.
  const successUrl = `${window.location.origin}/careers/apply/success`;

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setCvFile(file);
  };

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
            {position && (
              <div className="apply-position-badge">
                Applying for: <strong>{position}</strong>
              </div>
            )}

            {/*
              Native HTML form POST — FormSubmit.co receives the multipart data
              (including the CV file) and emails it to the configured destination.
              No JavaScript fetch needed; the browser handles the upload natively.
            */}
            <form
              className="apply-form"
              action="https://formsubmit.co/manodya1015@gmail.com"
              method="POST"
              encType="multipart/form-data"
            >
              {/* FormSubmit hidden control fields */}
              <input type="hidden" name="_subject"  value={`New Job Application — ${position || 'Softmakr'}`} />
              <input type="hidden" name="_captcha"  value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next"     value={successUrl} />

              {/* Position */}
              <div className="apply-form-group">
                <label htmlFor="ap-position">Position Applying For *</label>
                <input
                  id="ap-position"
                  name="Position"
                  type="text"
                  value={position}
                  onChange={e => setPosition(e.target.value)}
                  placeholder="e.g. Frontend Developer (React / Next.js)"
                  required
                />
              </div>

              {/* Name + Email */}
              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label htmlFor="ap-name">Full Name *</label>
                  <input id="ap-name" name="Full Name" type="text" placeholder="Your full name" required />
                </div>
                <div className="apply-form-group">
                  <label htmlFor="ap-email">Email Address *</label>
                  <input id="ap-email" name="Email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              {/* Phone + LinkedIn */}
              <div className="apply-form-row">
                <div className="apply-form-group">
                  <label htmlFor="ap-phone">Phone Number</label>
                  <input id="ap-phone" name="Phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="apply-form-group">
                  <label htmlFor="ap-linkedin">LinkedIn Profile</label>
                  <input id="ap-linkedin" name="LinkedIn" type="url" placeholder="https://linkedin.com/in/yourname" />
                </div>
              </div>

              {/* Portfolio */}
              <div className="apply-form-group">
                <label htmlFor="ap-portfolio">Portfolio / GitHub URL</label>
                <input id="ap-portfolio" name="Portfolio" type="url" placeholder="https://yourportfolio.com" />
              </div>

              {/* Cover Letter */}
              <div className="apply-form-group">
                <label htmlFor="ap-cover">Cover Letter *</label>
                <textarea
                  id="ap-cover"
                  name="Cover Letter"
                  rows={5}
                  placeholder="Tell us why you'd be a great fit for this role and what excites you about Softmakr..."
                  required
                />
              </div>

              {/* CV Upload */}
              <div className="apply-form-group">
                <label>Upload CV / Resume *</label>
                <div className="apply-file-drop">
                  <input
                    type="file"
                    id="cv-upload"
                    name="CV"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFile}
                    className="apply-file-input"
                    required
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

              <button type="submit" className="btn-primary apply-submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
