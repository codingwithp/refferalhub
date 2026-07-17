import { Link } from "react-router-dom";
import "../Career.css";

function Career() {

  const applicants = [
    "Fresh Graduates",
    "Homemakers",
    "Working Professionals",
    "Fitness Enthusiasts",
    "Individuals looking for a Second Income",
    "Aspiring Entrepreneurs",
  ];

  const learn = [
    "Nutrition & Wellness Education",
    "Client Consultation & Customer Service",
    "Business Development",
    "Lead Generation",
    "Marketing & Branding",
    "Sales & Communication Skills",
    "Online & Offline Business Operations",
  ];

  const benefits = [
    "₹3,500 Monthly Stipend + Performance Incentives",
    "Complimentary Healthy Breakfast",
    "Lifestyle Day Seminar Pass",
    "Practical Business Training",
    "Personal Mentorship",
    "Build Your Own Customer Base",
    "Proven Online & Offline Business System",
  ];

  return (
    <div className="career-page">

      <div className="career-container">

        <h1>
          Wellness Career & Nutrition Club Franchise Program
        </h1>

        <p className="career-intro">
          Build your career while transforming lives.
          Learn a proven wellness business system,
          earn while you learn, and become an
          independent Nutrition Club Owner.
        </p>

        <section className="career-card">

          <h2>Who Can Apply?</h2>

          <div className="career-grid">
            {applicants.map((item) => (
              <div className="career-box" key={item}>
                {item}
              </div>
            ))}
          </div>

        </section>

        <section className="career-card">

          <h2>Training Details</h2>

          <div className="details">

            <div>
              <strong>Duration</strong>
              <p>3 Months (Performance Based)</p>
            </div>

            <div>
              <strong>Timing</strong>
              <p>7:30 AM – 10:30 AM</p>
            </div>

            <div>
              <strong>Mode</strong>
              <p>Offline Nutrition Club Training</p>
            </div>

          </div>

        </section>

        <section className="career-card">

          <h2>What You'll Learn</h2>

          <ul>
            {learn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

        </section>

        <section className="career-card">

          <h2>Training Benefits</h2>

          <ul>
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

        </section>

        <section className="career-card">

          <h2>Career Growth Path</h2>

          <div className="timeline">

            <div>Wellness Trainee</div>
            <span>↓</span>

            <div>Independent Wellness Coach</div>
            <span>↓</span>

            <div>25–30 Active Customers</div>
            <span>↓</span>

            <div>Nutrition Club Franchise Owner</div>
            <span>↓</span>

            <div>Business Leader</div>

          </div>

        </section>

        <section className="career-card income">

          <h2>Income Potential</h2>

          <h1>₹50,000 – ₹1,00,000+</h1>

          <p>
            Income depends on consistency,
            customer acquisition,
            leadership and business performance.
          </p>

        </section>

        <section className="career-card">

          <h2>Why Choose Us?</h2>

          <div className="career-grid">

            <div className="career-box">Proven Business Model</div>
            <div className="career-box">Marketing Support</div>
            <div className="career-box">Personal Mentorship</div>
            <div className="career-box">Customer Acquisition System</div>
            <div className="career-box">Flexible Work Options</div>
            <div className="career-box">Low Investment Business</div>

          </div>

        </section>

        <div className="apply">

          <Link
            to="/career-apply"
            className="apply-btn"
          >
            Apply Now
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Career;