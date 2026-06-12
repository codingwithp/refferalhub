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
import "../App.css";
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
      {/* Logo */}
<div className="hl-logo-area">
  <img
    src="/logo.jpeg"
    alt="Weight Loss Factory"
    style={{
      width: "90px",
      height: "90px",
      objectFit: "contain",
      marginBottom: "16px",
    }}
  />

  <div className="hl-brand-text" style={{ textAlign: "center" }}>
    <span
      style={{
        fontFamily: "Montserrat",
        fontWeight: 800,
        fontSize: "28px",
        color: "#F26522",
      }}
    >
      Weight Loss Factory
    </span>

    <span
      style={{
        fontSize: "13px",
        color: "#2E7D4B",
        marginTop: "6px",
        letterSpacing: "1px",
        fontWeight: 600,
      }}
    >
      ONE STOP SOLUTION FOR YOUR HEALTH & FITNESS
    </span>
  </div>

  <div
    style={{
      width: "70px",
      height: "3px",
      background: "#F26522",
      borderRadius: "20px",
      marginTop: "18px",
    }}
  />

  <p
    style={{
      marginTop: "12px",
      color: "rgba(255,255,255,0.65)",
      fontSize: "13px",
    }}
  >
    Personalized Wellness Consultation
  </p>
</div>

          <h1 className="hl-heading">Create your account</h1>
         

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
