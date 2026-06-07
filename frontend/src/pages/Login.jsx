// // 
// import { useState } from "react";
// import API from "../services/api";
// import { useNavigate, Link } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/auth/login", form);

//       localStorage.setItem("token", res.data.token);

//       localStorage.setItem(
//         "user",
//         JSON.stringify(res.data.user)
//       );

//       if (res.data.user.role === "coach") {
//         navigate("/dashboard");
//       } else {
//         navigate("/client-dashboard");
//       }
//     } catch (err) {
//       console.error(err);

//       alert(
//         err?.response?.data?.message ||
//           "Invalid credentials"
//       );
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>

//       <form onSubmit={handleSubmit} className="form">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">
//           Login
//         </button>
//       </form>

//       <p>
//         No account?{" "}
//         <Link to="/register">
//           Register
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
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

// Paste the SAME styles constant from Register.jsx here

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      if (res.data.user.role === "coach") {
        navigate("/dashboard");
      } else {
        navigate("/client-dashboard");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };

  const MailIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="16"
      height="16"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  const LockIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="16"
      height="16"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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
          <div className="hl-logo-area">
            <div className="hl-logo-badge">
              <div className="hl-leaf-icon">
                🌿
              </div>

              <div className="hl-brand-text">
                <span className="hl-brand-name">
                  HERBALIFE
                </span>
                <span className="hl-brand-sub">
                  NUTRITION
                </span>
              </div>
            </div>

            <div className="hl-divider" />
            <p className="hl-tagline">
              Referral Hub — Welcome Back
            </p>
          </div>

          <h1 className="hl-heading">
            Sign In
          </h1>

          <p className="hl-subheading">
            Access your account and referrals
          </p>

          {error && (
            <div className="hl-error">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className={loading ? "hl-loading" : ""}
          >
            <div className="hl-field">
              <label className="hl-label">
                Email Address
              </label>

              <div className="hl-input-wrap">
                <span className="hl-input-icon">
                  <MailIcon />
                </span>

                <input
                  className="hl-input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="hl-field">
              <label className="hl-label">
                Password
              </label>

              <div className="hl-input-wrap">
                <span className="hl-input-icon">
                  <LockIcon />
                </span>

                <input
                  className="hl-input"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              className="hl-btn"
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Signing in..."
                : "Login →"}
            </button>
          </form>

          <p className="hl-footer">
            Don't have an account?{" "}
            <Link to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;