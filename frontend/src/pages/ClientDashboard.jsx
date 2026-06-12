import { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function ClientDashboard() {
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [rewardCount, setRewardCount] = useState(0);

  const navigate = useNavigate();

  // Load user + API data once
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }

    fetchReferrals();
    fetchRewards();
  }, []);

  // Fetch referrals
  const fetchReferrals = async () => {
    try {
      const res = await API.get("/client/referrals");
      setReferrals(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch rewards
  const fetchRewards = async () => {
    try {
      const res = await API.get("/client/reward-count");
      setRewardCount(res.data.rewardCount);
    } catch (err) {
      console.log(err);
    }
  };

  // Sign out
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  // Copy referral link
  const copyLink = async () => {
    try {
      const link = `${window.location.origin}/ref/${user.referralCode}`;
      await navigator.clipboard.writeText(link);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  if (!user) {
    return (
      <div className="hl-page">
        <div className="hl-card">
          <h2 className="hl-heading">Loading...</h2>
        </div>
      </div>
    );
  }

  const referralLink = `${window.location.origin}/ref/${user.referralCode}`;

  return (
    <div className="hl-page">
      {/* Background orbs */}
      <div className="hl-bg-orb hl-bg-orb-1"></div>
      <div className="hl-bg-orb hl-bg-orb-2"></div>
      <div className="hl-bg-orb hl-bg-orb-3"></div>

      <div className="hl-card" style={{ maxWidth: "850px", width: "100%" }}>

        {/* Navbar */}
        <div className="dashboard-navbar">
          <div className="nav-logo">
            <img src="/logo.jpeg" alt="Weight Loss Factory" />

            <div>
              <h2>Weight Loss Factory</h2>
              <p>One Stop Solution For Your Health & Fitness</p>
            </div>
          </div>

          <button className="logout-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>

        {/* Welcome */}
        <h1 className="hl-heading">Welcome, {user.name}</h1>

        <p className="hl-subheading">
          Share your referral link and help others begin their wellness journey.
        </p>

        {/* Referral Code */}
        <div className="dashboard-card">
          <h3 className="dashboard-title">Your Referral Code</h3>

          <div className="referral-code-box">
            {user.referralCode}
          </div>
        </div>

        {/* Referral Link */}
        <div className="dashboard-card">
          <h3 style={{ color: "#fff", marginBottom: "12px" }}>
            Your Referral Link
          </h3>

          <input className="hl-input" value={referralLink} readOnly />

          <button className="hl-btn" onClick={copyLink} style={{ marginTop: "15px" }}>
            {copied ? "✓ Copied!" : "Copy Referral Link"}
          </button>
        </div>

        {/* Referrals Table */}
        <div className="dashboard-card">
          <h3 style={{ color: "#fff", marginBottom: "15px" }}>
            My Referrals
          </h3>

          {referrals.length === 0 ? (
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              No referrals yet.
            </p>
          ) : (
            <table className="hl-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {referrals.map((item) => (
                  <tr key={item._id}>
                    <td>{item.leadName}</td>
                    <td>{item.leadEmail}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Rewards */}
        <div className="dashboard-card">
          <h3>Referral Rewards Earned</h3>

          <div className="reward-number">
            🎁 {rewardCount}
          </div>
        </div>

        {/* Rules Button */}
        <div className="dashboard-card">
          <h3 style={{ color: "#fff", marginBottom: "12px" }}>
            How It Works
          </h3>

          <button
            className="hl-btn"
            onClick={() => navigate("/rules")}
          >
            📜 Rules & Regulations
          </button>
        </div>

      </div>
    </div>
  );
}

export default ClientDashboard;