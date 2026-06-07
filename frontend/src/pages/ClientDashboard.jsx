// import { useEffect, useState } from "react";

// function ClientDashboard() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = JSON.parse(
//       localStorage.getItem("user")
//     );

//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const copyLink = () => {
//     const link = `${window.location.origin}/ref/${user.referralCode}`;

//     navigator.clipboard.writeText(link);

//     alert("Referral link copied!");
//   };

//   if (!user) {
//     return <h2>Loading...</h2>;
//   }

//   const referralLink =
//     `${window.location.origin}/ref/${user.referralCode}`;

//   return (
//     <div className="container">
//       <h1>Client Dashboard</h1>

//       <h3>Welcome {user.name}</h3>

//       <div className="card">
//         <h3>Your Referral Code</h3>

//         <p>{user.referralCode}</p>

//         <h3>Your Referral Link</h3>

//         <input
//           value={referralLink}
//           readOnly
//           style={{ width: "100%" }}
//         />

//         <br />
//         <br />

//         <button onClick={copyLink}>
//           Copy Referral Link
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ClientDashboard;


import { useEffect, useState } from "react";

function ClientDashboard() {
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const copyLink = async () => {
    try {
      const link = `${window.location.origin}/ref/${user.referralCode}`;

      await navigator.clipboard.writeText(link);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
    return (
      <div className="hl-page">
        <div className="hl-card">
          <h2 className="hl-heading">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  const referralLink =
    `${window.location.origin}/ref/${user.referralCode}`;

  return (
    <div className="hl-page">
      <div className="hl-bg-orb hl-bg-orb-1" />
      <div className="hl-bg-orb hl-bg-orb-2" />
      <div className="hl-bg-orb hl-bg-orb-3" />

      <div
        className="hl-card"
        style={{
          maxWidth: "900px",
          width: "100%",
        }}
      >
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
            Referral Hub Dashboard
          </p>
        </div>

        <h1 className="hl-heading">
          Welcome, {user.name}
        </h1>

        <p className="hl-subheading">
          Share your referral link and help
          others begin their wellness journey.
        </p>

        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-value">
              {user.referralCode}
            </div>

            <p>Your Referral Code</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h3
            style={{
              color: "white",
              marginBottom: "15px",
            }}
          >
            Your Referral Link
          </h3>

          <input
            className="hl-input"
            value={referralLink}
            readOnly
          />

          <br />
          <br />

          <button
            className="hl-btn"
            onClick={copyLink}
          >
            {copied
              ? "✓ Copied!"
              : "Copy Referral Link"}
          </button>
        </div>

        <br />

        <div className="dashboard-card">
          <h3
            style={{
              color: "white",
              marginBottom: "10px",
            }}
          >
            How It Works
          </h3>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              lineHeight: "1.7",
            }}
          >
            1. Share your referral link.
            <br />
            2. Friends book a free consultation.
            <br />
            3. Coaches connect with them.
            <br />
            4. Grow your wellness network.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;