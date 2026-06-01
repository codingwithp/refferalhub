import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      await API.post("/bookings", {
        referralCode: code,
        ...form,
      });

      alert("Consultation booked successfully");
    } catch (err) {
      alert("Booking failed");
    }
  };

  return (
    <div className="container">
      <h1>Free Herbalife Consultation</h1>

      <p>
        Get nutrition guidance, fat loss plans, and wellness coaching.
      </p>

      <form onSubmit={handleBooking} className="form">
        <input
          name="leadName"
          placeholder="Your Name"
          onChange={handleChange}
        />

        <input
          name="leadPhone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <input
          name="leadEmail"
          placeholder="Email"
          onChange={handleChange}
        />

        <textarea
          name="leadGoal"
          placeholder="Your Goal"
          onChange={handleChange}
        />

        <input type="date" name="date" onChange={handleChange} />
        <input type="time" name="time" onChange={handleChange} />

        <button type="submit">Book Consultation</button>
      </form>
    </div>
  );
}

export default ReferralLanding;