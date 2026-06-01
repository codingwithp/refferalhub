import { useEffect, useState } from "react";

function ClientDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const copyLink = () => {
    const link = `${window.location.origin}/ref/${user.referralCode}`;

    navigator.clipboard.writeText(link);

    alert("Referral link copied!");
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  const referralLink =
    `${window.location.origin}/ref/${user.referralCode}`;

  return (
    <div className="container">
      <h1>Client Dashboard</h1>

      <h3>Welcome {user.name}</h3>

      <div className="card">
        <h3>Your Referral Code</h3>

        <p>{user.referralCode}</p>

        <h3>Your Referral Link</h3>

        <input
          value={referralLink}
          readOnly
          style={{ width: "100%" }}
        />

        <br />
        <br />

        <button onClick={copyLink}>
          Copy Referral Link
        </button>
      </div>
    </div>
  );
}

export default ClientDashboard;