import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const SproutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" /><path d="M10 20c0-4.4 3.6-8 8-8" /><path d="M4 11c3.5 0 6.5 2.5 7 6" /><path d="M12 20V10" /><path d="M12 10a8 8 0 0 1 8-8 8 8 0 0 1-8 8Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const EyeIcon = ({ show }) => show ? (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
) : (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>
  </svg>
);

// Agri-Tech Node Graph Background SVG
const NetworkGraphic = () => (
  <svg className="network-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="var(--agri-green-vibrant)" strokeWidth="1" opacity="0.35">
      <line x1="80" y1="120" x2="220" y2="80" />
      <line x1="220" y1="80" x2="380" y2="160" />
      <line x1="80" y1="120" x2="160" y2="260" />
      <line x1="160" y1="260" x2="320" y2="240" />
      <line x1="380" y1="160" x2="320" y2="240" />
      <line x1="160" y1="260" x2="100" y2="400" />
      <line x1="320" y1="240" x2="380" y2="380" />
      <line x1="100" y1="400" x2="260" y2="420" />
      <line x1="260" y1="420" x2="380" y2="380" />
      <line x1="220" y1="80" x2="160" y2="260" />
      <line x1="320" y1="240" x2="260" y2="420" />
    </g>
    {/* Nodes */}
    <circle cx="80" cy="120" r="5" fill="var(--agri-green-primary)" />
    <circle cx="220" cy="80" r="7" fill="var(--agri-green-vibrant)" />
    <circle cx="380" cy="160" r="6" fill="var(--agri-green-primary)" />
    <circle cx="160" cy="260" r="8" fill="var(--agri-green-vibrant)" />
    <circle cx="320" cy="240" r="10" fill="var(--agri-green-primary)" />
    <circle cx="100" cy="400" r="6" fill="var(--agri-green-vibrant)" />
    <circle cx="260" cy="420" r="7" fill="var(--agri-green-primary)" />
    <circle cx="380" cy="380" r="5" fill="var(--agri-green-vibrant)" />
  </svg>
);

export default function Login() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Register')
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card-container">
        
        <div className="login-graphic-side">
          <NetworkGraphic />
          <div className="graphic-overlay-content">
            <span className="graphic-badge">AgriVox Intelligence</span>
            <h3>Voice-Driven Agricultural Insights</h3>
          </div>
        </div>

        <div className="login-form-side">
          <div className="login-header-tag">LOGIN</div>

          <div className="login-brand-header">
            <div className="agrivox-logo-icon">
              <SproutIcon />
            </div>
            <span className="agrivox-title">AgriVox</span>
          </div>

          <div className="login-title-group">
            <h2>Welcome Back!</h2>
            <p>Log in to your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-field">
              <label>Email</label>
              <div className="input-icon-wrapper">
                <span className="input-icon"><MailIcon /></span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label>Password</label>
              <div className="input-icon-wrapper">
                <span className="input-icon"><LockIcon /></span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <EyeIcon show={showPassword} />
                </button>
              </div>
            </div>

            <div className="form-actions-row">
              <a href="#forgot" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn-primary">LOG IN</button>
          </form>

          <div className="social-divider">
            <span>Or log in with</span>
          </div>

          <div className="social-buttons-group">
            <button className="social-btn" aria-label="Log in with Google">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
            </button>
            <button className="social-btn" aria-label="Log in with Apple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.75-.95 2.78 1.01.08 2.05-.53 2.68-1.28z"/></svg>
            </button>
            <button className="social-btn" aria-label="Log in with Microsoft">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#f25022" d="M1 1h10v10H1z"/><path fill="#00a4ef" d="M1 13h10v10H1z"/><path fill="#7fba00" d="M13 1h10v10H13z"/><path fill="#ffb900" d="M13 13h10v10H13z"/></svg>
            </button>
          </div>

          <div className="register-footer-prompt">
            Don't have an account?{' '}
            <button type="button" onClick={handleNavigate} className="register-link-btn">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}