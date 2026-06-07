// import { useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "client",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/auth/register", form);

//       localStorage.setItem("token", res.data.token);

//       alert("Registered Successfully");
//       navigate("/");
//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Herbalife Referral Hub</h2>

//       <form onSubmit={handleSubmit} className="form">
//         <input
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <input
//           name="phone"
//           placeholder="Phone"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <select name="role" onChange={handleChange}>
//           <option value="client">Client</option>
//           <option value="coach">Coach</option>
//         </select>

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;

import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .hl-page {
    min-height: 100vh;
    background: #0f1a0f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans', sans-serif;
    position: relative;
    overflow: hidden;
    padding: 2rem 1rem;
  }

  .hl-bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.18;
    pointer-events: none;
  }
  .hl-bg-orb-1 {
    width: 500px; height: 500px;
    background: #4db848;
    top: -120px; left: -120px;
  }
  .hl-bg-orb-2 {
    width: 400px; height: 400px;
    background: #2d7a29;
    bottom: -100px; right: -80px;
  }
  .hl-bg-orb-3 {
    width: 300px; height: 300px;
    background: #1a4a17;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }

  .hl-card {
    width: 100%;
    max-width: 460px;
    background: rgba(255,255,255,0.035);
    border: 1px solid rgba(77,184,72,0.2);
    border-radius: 24px;
    padding: 3rem 2.5rem 2.5rem;
    position: relative;
    backdrop-filter: blur(20px);
    animation: hl-fadeUp 0.5s ease both;
  }

  @keyframes hl-fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .hl-logo-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .hl-logo-badge {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  .hl-leaf-icon {
    width: 52px; height: 52px;
    border: 2.5px solid #4db848;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }

  .hl-leaf-icon svg {
    width: 26px; height: 26px;
  }

  .hl-brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  .hl-brand-name {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 22px;
    color: #fff;
    letter-spacing: 0.5px;
  }

  .hl-brand-sub {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 13px;
    color: #4db848;
    letter-spacing: 3px;
  }

  .hl-divider {
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #4db848, transparent);
    margin: 0 auto;
  }

  .hl-tagline {
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    margin-top: 10px;
    letter-spacing: 0.3px;
  }

  .hl-heading {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    margin-bottom: 6px;
    text-align: center;
  }

  .hl-subheading {
    font-size: 13px;
    color: rgba(255,255,255,0.45);
    text-align: center;
    margin-bottom: 1.8rem;
  }

  .hl-field {
    margin-bottom: 1rem;
  }

  .hl-label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .hl-input-wrap {
    position: relative;
  }

  .hl-input-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(77,184,72,0.6);
    display: flex;
    align-items: center;
  }

  .hl-input {
    width: 100%;
    padding: 12px 14px 12px 42px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
  }

  .hl-input::placeholder { color: rgba(255,255,255,0.25); }

  .hl-input:focus {
    border-color: #4db848;
    background: rgba(77,184,72,0.07);
  }

  .hl-select {
    width: 100%;
    padding: 12px 14px 12px 42px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    appearance: none;
    cursor: pointer;
  }

  .hl-select:focus {
    border-color: #4db848;
    background: rgba(77,184,72,0.07);
  }

  .hl-select option { background: #1a2e1a; color: #fff; }

  .hl-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .hl-btn {
    width: 100%;
    padding: 14px;
    margin-top: 0.5rem;
    background: #4db848;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    position: relative;
    overflow: hidden;
  }

  .hl-btn:hover { background: #3da83a; }
  .hl-btn:active { transform: scale(0.98); }

  .hl-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0.12), transparent);
    pointer-events: none;
  }

  .hl-footer {
    text-align: center;
    margin-top: 1.4rem;
    font-size: 13px;
    color: rgba(255,255,255,0.35);
  }

  .hl-footer a {
    color: #4db848;
    text-decoration: none;
    font-weight: 600;
  }
  .hl-footer a:hover { text-decoration: underline; }

  .hl-error {
    background: rgba(220,50,50,0.12);
    border: 1px solid rgba(220,50,50,0.35);
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    color: #f87171;
    margin-bottom: 1rem;
    text-align: center;
  }

  .hl-loading { opacity: 0.7; pointer-events: none; }

  @media (max-width: 520px) {
    .hl-card { padding: 2.2rem 1.4rem 2rem; }
    .hl-row { grid-template-columns: 1fr; }
  }
`;

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/auth/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
  const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
  const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.18l3-.01a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
  const LockIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  );
  const RoleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="hl-page">
        <div className="hl-bg-orb hl-bg-orb-1" />
        <div className="hl-bg-orb hl-bg-orb-2" />
        <div className="hl-bg-orb hl-bg-orb-3" />

        <div className="hl-card">
          {/* Logo */}
          <div className="hl-logo-area">
            <div className="hl-logo-badge">
              <div className="hl-leaf-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6C20 6 8 14 8 24C8 30.627 13.373 36 20 36C26.627 36 32 30.627 32 24C32 14 20 6 20 6Z" fill="#4db848" opacity="0.15"/>
                  <path d="M20 10C20 10 11 17 11 25C11 29.971 15.029 34 20 34C24.971 34 29 29.971 29 25C29 17 20 10 20 10Z" fill="#4db848" opacity="0.3"/>
                  <path d="M20 34L20 18M20 18L14 24M20 18L26 24" stroke="#4db848" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="20" r="19" stroke="#4db848" strokeWidth="1.5" opacity="0.5"/>
                </svg>
              </div>
              <div className="hl-brand-text">
                <span className="hl-brand-name">HERBALIFE</span>
                <span className="hl-brand-sub">NUTRITION</span>
              </div>
            </div>
            <div className="hl-divider" />
            <p className="hl-tagline">Referral Hub — Grow your wellness network</p>
          </div>

          <h1 className="hl-heading">Create your account</h1>
          <p className="hl-subheading">Join as a client or coach today</p>

          {error && <div className="hl-error">{error}</div>}

          <form onSubmit={handleSubmit} className={loading ? "hl-loading" : ""}>
            <div className="hl-field">
              <label className="hl-label">Full Name</label>
              <div className="hl-input-wrap">
                <span className="hl-input-icon"><UserIcon /></span>
                <input className="hl-input" name="name" placeholder="Your full name" onChange={handleChange} required />
              </div>
            </div>

            <div className="hl-field">
              <label className="hl-label">Email Address</label>
              <div className="hl-input-wrap">
                <span className="hl-input-icon"><MailIcon /></span>
                <input className="hl-input"  value={form.email} name="email" type="email" placeholder="you@example.com" onChange={handleChange} required />
              </div>
            </div>

            <div className="hl-row">
              <div className="hl-field">
                <label className="hl-label">Phone</label>
                <div className="hl-input-wrap">
                  <span className="hl-input-icon"><PhoneIcon /></span>
                  <input className="hl-input" name="phone" placeholder="+91 00000 00000" onChange={handleChange} />
                </div>
              </div>

              
            </div>

            <div className="hl-field">
              <label className="hl-label">Password</label>
              <div className="hl-input-wrap">
                <span className="hl-input-icon"><LockIcon /></span>
                <input className="hl-input" name="password" type="password" placeholder="Create a strong password" onChange={handleChange} required />
              </div>
            </div>

            <button className="hl-btn" type="submit" disabled={loading}>
              {loading ? "Creating account…" : "Create Account →"}
            </button>
          </form>

          <p className="hl-footer">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
