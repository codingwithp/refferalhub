import { useNavigate } from "react-router-dom";
import "../App.css";

function RulesPage() {
  const navigate = useNavigate();

  return (
    <div className="rules-page">
      <div className="rules-container">
        {/* Header */}
        <div className="rules-header">
          <img
            src="/logo.jpeg"
            alt="Weight Loss Factory"
            className="rules-logo"
          />

          <h1>Referral Factory</h1>
          <p>Rules & Benefits</p>
        </div>

        {/* Reward Section */}
        <div className="rules-card">
          <h2>🎁 Referral Reward</h2>

          <div className="reward-box">
            <h3>₹500 Amazon Gift Voucher</h3>

            <p>
              Refer a friend, family member, colleague, or acquaintance to our
              Wellness Program and earn rewards when they successfully join.
            </p>
          </div>

          <h4>The voucher will be issued only after the referred person:</h4>

          <ul>
            <li>Attends the consultation/session</li>
            <li>Joins any of our wellness programs</li>
            <li>Completes the registration/payment process</li>
            <li>Remains active in the program for the required period</li>
          </ul>
        </div>

        {/* Eligibility */}
        <div className="rules-card">
          <h2>📌 Referral Eligibility Rules</h2>

          <div className="rule-block">
            <h3>1. Successful Conversion Required</h3>

            <p>
              A referral is considered successful only when the referred person
              enrolls in our wellness program.
            </p>

            <p>
              Only successful conversions qualify for referral rewards.
            </p>
          </div>

          <div className="rule-block">
            <h3>2. Duplicate Referral Policy</h3>

            <p>
              If multiple people refer the same individual, the reward will be
              issued only to the first referral recorded in our system.
            </p>

            <div className="example-box">
              <h4>Example</h4>

              <p>📅 June 1 → Person A refers Ravi</p>
              <p>📅 June 3 → Person B refers Ravi</p>

              <div className="example-result">
                ✅ Result: If Ravi joins, Person A receives the reward.
              </div>
            </div>
          </div>

          <div className="rule-block">
            <h3>3. Referral Must Be Genuine</h3>

            <ul>
              <li>Be genuinely interested in improving health and wellness</li>
              <li>Provide correct contact details</li>
              <li>Be willing to attend wellness sessions and consultations</li>
            </ul>

            <p className="warning">
              Fake, incorrect, or self-generated referrals will not qualify.
            </p>
          </div>
        </div>

        {/* Community */}
        <div className="rules-card">
          <h2>🤝 Community Participation Requirements</h2>

          <div className="community-grid">
            <div className="community-box">
              <h3>Weekly Wellness Classes</h3>

              <p>
                Attend at least <strong>2 Wellness Classes</strong> every week.
              </p>
            </div>

            <div className="community-box">
              <h3>Monthly Mega Event</h3>

              <p>
                Attend our <strong>Big Wellness Event</strong> once every month.
              </p>

              <ul>
                <li>Success stories</li>
                <li>Health education</li>
                <li>Recognition & rewards</li>
                <li>Community networking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="rules-card">
          <h2>🌟 Referral Factory Mission</h2>

          <p>
            Our goal is not just to reward referrals but to help more people:
          </p>

          <div className="mission-grid">
            <div>💪 Lose weight healthily</div>
            <div>⚖️ Gain healthy weight</div>
            <div>⚡ Improve energy levels</div>
            <div>🥗 Build healthy habits</div>
            <div>🤝 Join a supportive community</div>
          </div>
        </div>

        {/* Summary */}
        <div className="rules-card">
          <h2>📋 Reward Summary</h2>

          <table className="rules-table">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Reward / Requirement</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Successful Referral Conversion</td>
                <td>₹500 Amazon Voucher</td>
              </tr>

              <tr>
                <td>Duplicate Referral</td>
                <td>No Reward</td>
              </tr>

              <tr>
                <td>Weekly Wellness Classes</td>
                <td>Minimum 2 Classes</td>
              </tr>

              <tr>
                <td>Monthly Mega Event</td>
                <td>Mandatory Once Per Month</td>
              </tr>

              <tr>
                <td>Fake / Invalid Referral</td>
                <td>Disqualified</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="footer-message">
          💚 Help Others Get Healthy, and Get Rewarded for Making a Difference!
        </div>

        <div className="back-btn-container">
          <button
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default RulesPage;