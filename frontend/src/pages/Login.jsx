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

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

.hl-page{
  min-height:100vh;
  background:linear-gradient(
    135deg,
    #f7f5f2 0%,
    #fff7f2 50%,
    #fef3eb 100%
  );
  display:flex;
  align-items:center;
  justify-content:center;
  font-family:'Open Sans',sans-serif;
  position:relative;
  overflow:hidden;
  padding:2rem 1rem;
}

/* Decorative Orbs */

.hl-bg-orb{
  position:absolute;
  border-radius:50%;
  filter:blur(100px);
  opacity:.18;
  pointer-events:none;
}

.hl-bg-orb-1{
  width:500px;
  height:500px;
  background:#F26522;
  top:-120px;
  left:-120px;
}

.hl-bg-orb-2{
  width:400px;
  height:400px;
  background:#FFD6C2;
  bottom:-100px;
  right:-80px;
}

.hl-bg-orb-3{
  width:300px;
  height:300px;
  background:#E6F4EC;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}

/* Card */

.hl-card{
  width:100%;
  max-width:480px;
  background:rgba(255,255,255,.95);
  border:1px solid rgba(242,101,34,.12);
  border-radius:24px;
  padding:3rem 2.5rem;
  position:relative;
  backdrop-filter:blur(20px);
  box-shadow:0 20px 60px rgba(0,0,0,.08);
  animation:hl-fadeUp .5s ease both;
}

@keyframes hl-fadeUp{
  from{
    opacity:0;
    transform:translateY(28px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

/* Logo */

.hl-logo-area{
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  margin-bottom:2rem;
}

.hl-logo-area img{
  width:90px;
  height:90px;
  object-fit:contain;
  margin-bottom:14px;
}

.hl-brand-text{
  display:flex;
  flex-direction:column;
}

.hl-brand-name{
  font-family:'Montserrat',sans-serif;
  font-weight:800;
  font-size:28px;
  color:#F26522;
}

.hl-brand-sub{
  font-family:'Montserrat',sans-serif;
  font-size:12px;
  font-weight:700;
  color:#2E7D4B;
  letter-spacing:1px;
  margin-top:6px;
}

.hl-divider{
  width:70px;
  height:3px;
  background:#F26522;
  border-radius:999px;
  margin-top:18px;
}

.hl-tagline{
  margin-top:12px;
  font-size:13px;
  color:#666;
}

/* Headings */

.hl-heading{
  font-family:'Montserrat',sans-serif;
  font-weight:800;
  font-size:24px;
  color:#1C1C1C;
  text-align:center;
  margin-bottom:6px;
}

.hl-subheading{
  text-align:center;
  color:#555;
  font-size:14px;
  margin-bottom:1.8rem;
}

/* Fields */

.hl-field{
  margin-bottom:1rem;
}

.hl-label{
  display:block;
  font-size:12px;
  font-weight:700;
  color:#555;
  letter-spacing:.8px;
  text-transform:uppercase;
  margin-bottom:6px;
}

.hl-input-wrap{
  position:relative;
}

.hl-input-icon{
  position:absolute;
  left:14px;
  top:50%;
  transform:translateY(-50%);
  color:#F26522;
  display:flex;
  align-items:center;
}

.hl-input,
.hl-select{
  width:100%;
  padding:13px 14px 13px 42px;
  background:white;
  border:1px solid #E4E4E4;
  border-radius:10px;
  color:#1C1C1C;
  font-size:14px;
  outline:none;
  transition:.2s;
}

.hl-input::placeholder{
  color:#999;
}

.hl-input:focus,
.hl-select:focus{
  border-color:#F26522;
  background:#FFF7F2;
  box-shadow:0 0 0 4px rgba(242,101,34,.08);
}

.hl-select{
  appearance:none;
  cursor:pointer;
}

.hl-select option{
  background:white;
  color:#1C1C1C;
}

.hl-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1rem;
}

/* Button */

.hl-btn{
  width:100%;
  padding:14px;
  margin-top:.5rem;
  background:#F26522;
  color:white;
  border:none;
  border-radius:10px;
  font-family:'Montserrat',sans-serif;
  font-weight:700;
  font-size:15px;
  cursor:pointer;
  transition:.2s;
  box-shadow:0 6px 20px rgba(242,101,34,.25);
}

.hl-btn:hover{
  background:#D4541A;
  transform:translateY(-1px);
}

.hl-btn:active{
  transform:scale(.98);
}

/* Error */

.hl-error{
  background:#FFF0F0;
  border:1px solid #FCA5A5;
  color:#DC2626;
  padding:10px 14px;
  border-radius:10px;
  font-size:13px;
  margin-bottom:1rem;
  text-align:center;
}

/* Footer */

.hl-footer{
  text-align:center;
  margin-top:1.5rem;
  font-size:14px;
  color:#666;
}

.hl-footer a{
  color:#F26522;
  font-weight:700;
  text-decoration:none;
}

.hl-footer a:hover{
  text-decoration:underline;
}

.hl-loading{
  opacity:.7;
  pointer-events:none;
}

/* Mobile */

@media(max-width:520px){

  .hl-card{
    padding:2rem 1.4rem;
  }

  .hl-row{
    grid-template-columns:1fr;
  }

  .hl-brand-name{
    font-size:22px;
  }
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
  <img src="/logo.jpeg" alt="Weight Loss Factory" />

  <div className="hl-brand-text">
    <span className="hl-brand-name">
      Weight Loss Factory
    </span>

    <span className="hl-brand-sub">
      ONE STOP SOLUTION FOR YOUR HEALTH & FITNESS
    </span>
  </div>

  <div className="hl-divider"></div>

  <p className="hl-tagline">
    Personalized Wellness Consultation
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