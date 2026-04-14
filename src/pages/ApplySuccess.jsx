import { Link } from 'react-router-dom';
import ParticleNetwork from '../components/three/ParticleNetwork';
import './Apply.css';

export default function ApplySuccess() {
  return (
    <div className="apply-page">
      <ParticleNetwork />
      <div className="container apply-success" style={{ position: 'relative', zIndex: 1 }}>
        <div className="apply-success-icon">✓</div>
        <h2>Application Submitted!</h2>
        <p>
          Thank you for applying to Softmakr. Our team will carefully review your application and CV and get back to you within 3–5 business days.
        </p>
        <Link to="/careers" className="btn-primary" style={{ marginTop: 28, display: 'inline-block' }}>
          Back to Careers
        </Link>
      </div>
    </div>
  );
}
