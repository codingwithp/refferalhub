// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import API from "../services/api";

// function ReferralLanding() {
//   const { code } = useParams();

//   const [form, setForm] = useState({
//     leadName: "",
//     leadPhone: "",
//     leadEmail: "",
//     leadGoal: "",
//     date: "",
//     time: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleBooking = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post("/bookings", {
//         referralCode: code,
//         ...form,
//       });

//       alert("Consultation booked successfully");
//     } catch (err) {
//       alert("Booking failed");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Free Herbalife Consultation</h1>

//       <p>
//         Get nutrition guidance, fat loss plans, and wellness coaching.
//       </p>

//       <form onSubmit={handleBooking} className="form">
//         <input
//           name="leadName"
//           placeholder="Your Name"
//           onChange={handleChange}
//         />

//         <input
//           name="leadPhone"
//           placeholder="Phone"
//           onChange={handleChange}
//         />

//         <input
//           name="leadEmail"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <textarea
//           name="leadGoal"
//           placeholder="Your Goal"
//           onChange={handleChange}
//         />

//         <input type="date" name="date" onChange={handleChange} />
//         <input type="time" name="time" onChange={handleChange} />

//         <button type="submit">Book Consultation</button>
//       </form>
//     </div>
//   );
// }

// export default ReferralLanding;


import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";
import "../App.css";

function ReferralLanding() {
  const { code } = useParams();

  const [form, setForm] = useState({
    leadName: "",
    leadPhone: "",
    leadEmail: "",
    leadGoal: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await API.post("/bookings", {
        referralCode: code,
        ...form,
      });

      setSuccess(true);

      setForm({
        leadName: "",
        leadPhone: "",
        leadEmail: "",
        leadGoal: "",
        date: "",
        time: "",
      });
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Booking failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hl-page">
      <div className="hl-bg-orb hl-bg-orb-1"></div>
      <div className="hl-bg-orb hl-bg-orb-2"></div>
      <div className="hl-bg-orb hl-bg-orb-3"></div>

      <div
        className="hl-card hl-card-wide"
        style={{
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <div className="hl-logo-area">
          <div className="hl-logo-badge">
            <div className="hl-leaf-icon">
              <span style={{ fontSize: "24px" }}>
                🌿
              </span>
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

          <div className="hl-divider"></div>

          <p className="hl-tagline">
            Personalized Wellness Consultation
          </p>
        </div>

        <h1 className="hl-heading">
          Free Wellness Consultation
        </h1>

        <p className="hl-subheading">
          Book a one-on-one consultation and
          receive guidance on nutrition,
          weight management, fitness, and
          healthy lifestyle habits.
        </p>

        <div className="benefits">
          <div className="benefit-card">
            🎯 Weight Loss
          </div>

          <div className="benefit-card">
            💪 Weight Gain
          </div>

          <div className="benefit-card">
            ⚡ Energy & Fitness
          </div>

          <div className="benefit-card">
            🌱 Healthy Lifestyle
          </div>
        </div>

        {success && (
          <div className="success-box">
            🎉 Consultation booked
            successfully! We'll contact you
            soon.
          </div>
        )}

        {error && (
          <div className="hl-error">
            {error}
          </div>
        )}

        <form
          onSubmit={handleBooking}
          className={
            loading ? "hl-loading" : ""
          }
        >
          <div className="hl-field">
            <label className="hl-label">
              Full Name
            </label>

            <input
              className="hl-input"
              name="leadName"
              value={form.leadName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="hl-row">
            <div className="hl-field">
              <label className="hl-label">
                Phone Number
              </label>

              <input
                className="hl-input"
                name="leadPhone"
                value={form.leadPhone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                required
              />
            </div>

            <div className="hl-field">
              <label className="hl-label">
                Email Address
              </label>

              <input
                className="hl-input"
                type="email"
                name="leadEmail"
                value={form.leadEmail}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div className="hl-field">
            <label className="hl-label">
              Your Goal
            </label>

            <textarea
              className="hl-input"
              rows="4"
              name="leadGoal"
              value={form.leadGoal}
              onChange={handleChange}
              placeholder="Tell us about your goals (weight loss, weight gain, fitness, wellness...)"
            />
          </div>

          <div className="hl-row">
            <div className="hl-field">
              <label className="hl-label">
                Preferred Date
              </label>

              <input
                className="hl-input"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="hl-field">
              <label className="hl-label">
                Preferred Time
              </label>

              <input
                className="hl-input"
                type="time"
                name="time"
                value={form.time}
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
              ? "Booking Consultation..."
              : "Book Free Consultation →"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReferralLanding;