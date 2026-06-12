import { Link } from "react-router-dom";
import "../Home.css";

function Home() {
  return (
    <div className="home">

      {/* ── NAV ── */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <circle cx="12" cy="7" r="4" />
              <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
            </svg>
          </div>
          <span className="nav-logo-text">
            Weight Loss <strong>Factory</strong>
          </span>
        </div>

        <div className="nav-links">
          <a href="#how">How It Works</a>
          {/* <a href="#benefits">Rewards</a> */}
          {/* <a href="#cta">Join</a> */}
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">Log In</Link>
          <Link to="/register" className="register-btn">Join Now</Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Performance Referral Program
          </div>

          <h1>
            Give Health,
            <span className="hero-accent"> Get Rewarded</span>
          </h1>

          <p className="hero-sub">
            Empower your circle with professional weight loss guidance. For every
            friend who transforms their life, you earn exclusive rewards and credit
            toward your own performance journey.
          </p>

          <div className="hero-btns">
            <Link to="/register" className="hero-btn-primary">
              Start Referring Now
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
           
          </div>

          {/* <div className="hero-trust">
            <div className="trust-avatars">
              <span className="av av1">AK</span>
              <span className="av av2">PL</span>
              <span className="av av3">MR</span>
            </div>
            <span>Joined by <strong>2,400+</strong> members this month</span>
          </div> */}
        </div>

       <div className="brand-figure">
  <img
    src="/logo.jpeg"
    alt="Weight Loss Factory"
    className="hero-logo"
  />
</div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how" id="how">
        <div className="sec-tag">Simple Process</div>
        <h2 className="sec-title">HOW IT WORKS</h2>
        <p className="sec-sub">
          Our structured system ensures both you and your friends receive maximum
          value through every step of the transformation.
        </p>
        <div className="steps">
          <div className="step">
            <div className="step-icon step-icon-orange">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
              </svg>
            </div>
            <div className="step-num">1. SHARE</div>
            <p>Send your unique referral link to friends via WhatsApp, Email, or Social Media. It takes 10 seconds.</p>
          </div>

          <div className="step step-active">
            <div className="step-icon step-icon-green">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#2E7D4B" strokeWidth="2" strokeLinecap="round">
                <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3" />
                <path d="M8 11c-1.66 0-3-1.34-3-3S6.34 5 8 5" />
                <path d="M12 14c-3.87 0-7 1.79-7 4v1h14v-1c0-2.21-3.13-4-7-4z" />
                <path d="M17 14c2.33.47 4 1.9 4 3.6V19" />
                <path d="M7 14c-2.33.47-4 1.9-4 3.6V19" />
                <circle cx="12" cy="8" r="3" />
              </svg>
            </div>
            <div className="step-num">2. JOIN</div>
            <p>Your friends sign up for a Weight Loss Factory program using your link to become a new member.</p>
          </div>

          <div className="step">
            <div className="step-icon step-icon-orange">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="7" width="20" height="15" rx="2" /><path d="M16 3H8L2 7h20L16 3z" />
                <path d="M12 12v5M9.5 14.5l2.5 2.5 2.5-2.5" />
              </svg>
            </div>
            <div className="step-num">3. REWARD</div>
            <p>Once they begin their journey, your rewards are automatically credited to your Dashboard. Progress together.</p>
          </div>
        </div>
      </section>

      

      {/* ── CTA ── */}
      <section className="cta-section" id="cta">
        <div className="cta-inner">
          <div className="cta-pill">Get Started Today</div>
          <h2>Ready to Start Your Referral Journey?</h2>
          <p>
            Join thousands of members earning rewards while helping friends achieve
            their weight loss goals. Create your free account or log in.
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="cta-btn-primary">Create Free Account</Link>
            <Link to="/login" className="cta-btn-ghost">Log In</Link>
          </div>
          <p className="cta-note">No credit card required · Free to join</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-logo">Weight Loss <span>Factory</span></div>
        <p>© 2026 Weight Loss Factory. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </footer>

    </div>
  );
}

export default Home;
