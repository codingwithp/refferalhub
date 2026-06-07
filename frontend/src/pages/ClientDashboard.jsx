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
import "../App.css";

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
      console.error(err);
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

  const referralLink = `${window.location.origin}/ref/${user.referralCode}`;

  return (
    <div className="hl-page">
      <div className="hl-bg-orb hl-bg-orb-1"></div>
      <div className="hl-bg-orb hl-bg-orb-2"></div>
      <div className="hl-bg-orb hl-bg-orb-3"></div>

      <div
        className="hl-card"
        style={{
          maxWidth: "850px",
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
            Referral Hub Dashboard
          </p>
        </div>

        <h1 className="hl-heading">
          Welcome, {user.name}
        </h1>

        <p className="hl-subheading">
          Share your referral link and help others
          begin their wellness journey.
        </p>

        {/* Referral Code */}
        <div className="dashboard-card">
          <h3
            style={{
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            Your Referral Code
          </h3>

          <div
            style={{
              background:
                "rgba(77,184,72,0.12)",
              border:
                "1px solid rgba(77,184,72,0.3)",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              color: "#4db848",
              fontWeight: "700",
              fontSize: "22px",
              letterSpacing: "2px",
            }}
          >
            {user.referralCode}
          </div>
        </div>

        <br />

        {/* Referral Link */}
        <div className="dashboard-card">
          <h3
            style={{
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            Your Referral Link
          </h3>

          <input
            className="hl-input"
            value={referralLink}
            readOnly
          />

          <button
            className="hl-btn"
            onClick={copyLink}
            style={{ marginTop: "15px" }}
          >
            {copied
              ? "✓ Copied!"
              : "Copy Referral Link"}
          </button>
        </div>

        <br />

        {/* Guide */}
        <div className="dashboard-card">
          <h3
            style={{
              color: "#fff",
              marginBottom: "12px",
            }}
          >
            How It Works
          </h3>

          <div
            style={{
              color:
                "rgba(255,255,255,0.75)",
              lineHeight: "1.9",
            }}
          >
            <p>
              1️⃣ Share your referral link with
              friends and family.
            </p>

            <p>
              2️⃣ They book a free wellness
              consultation.
            </p>

            <p>
              3️⃣ Our coaches guide them on
              nutrition and fitness.
            </p>

            <p>
              4️⃣ Help more people start their
              wellness journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;