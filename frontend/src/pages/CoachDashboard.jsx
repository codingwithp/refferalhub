// import { useEffect, useState } from "react";
// import API from "../services/api";

// function CoachDashboard() {
//   const [referrals, setReferrals] = useState([]);

//   useEffect(() => {
//     fetchPipeline();
//   }, []);

//   const fetchPipeline = async () => {
//     try {
//       const res = await API.get("/coach/pipeline");
//       setReferrals(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const updateStatus = async (id, status) => {
//     try {
//       await API.put(
//         `/coach/referrals/${id}`,
//         { status }
//       );

//       fetchPipeline();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Coach Dashboard</h1>

//       {referrals.length === 0 ? (
//         <p>No referrals yet.</p>
//       ) : (
//         <div className="grid">
//           {referrals.map((item) => (
//             <div
//               className="card"
//               key={item._id}
//             >
             

//              <p>
//   <strong>Lead Name:</strong>{" "}
//   {item.leadName}
// </p>

// <p>
//   <strong>Lead Email:</strong>{" "}
//   {item.leadEmail}
// </p>

// <p>
//   <strong>Lead Phone:</strong>{" "}
//   {item.leadPhone}
// </p>

// <hr />

// <p>
//   <strong>Referred By:</strong>{" "}
//   {item.clientName}
// </p>

// <p>
//   <strong>Referral Email:</strong>{" "}
//   {item.clientEmail}
// </p>

// <p>
//   <strong>Referral Code:</strong>{" "}
//   {item.referralCode}
// </p>

//               <p>
//                 <strong>Status:</strong>{" "}
//                 {item.status}
//               </p>

//               <select
//                 value={item.status}
//                 onChange={(e) =>
//                   updateStatus(
//                     item._id,
//                     e.target.value
//                   )
//                 }
//               >
//                 <option value="pending">
//                   Pending
//                 </option>

//                 <option value="scheduled">
//                   Scheduled
//                 </option>

//                 <option value="consulted">
//                   Consulted
//                 </option>

//                 <option value="converted">
//                   Converted
//                 </option>
//               </select>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CoachDashboard;



import { useEffect, useState } from "react";
import API from "../services/api";
import "../App.css";
import { useNavigate } from "react-router-dom";


function CoachDashboard() {
  const [referrals, setReferrals] = useState([]);
  const navigate = useNavigate();

const handleSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/");
};

  useEffect(() => {
    fetchPipeline();
  }, []);

  const fetchPipeline = async () => {
    try {
      const res = await API.get("/coach/pipeline");
      setReferrals(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/coach/referrals/${id}`, {
        status,
      });

      fetchPipeline();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hl-page">
      <div className="hl-bg-orb hl-bg-orb-1" />
      <div className="hl-bg-orb hl-bg-orb-2" />
      <div className="hl-bg-orb hl-bg-orb-3" />

      <div
        className="hl-card"
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <div
  style={{
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "15px",
  }}
>
 
</div>
       
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
 <div className="hl-logo-area">
          <div className="hl-divider" />

          
        </div>

        <h1 className="hl-heading">
          Coach Dashboard
        </h1>

        <p className="hl-subheading">
          Manage consultation bookings and referral leads
        </p>

       <div
  style={{
    textAlign: "center",
    marginBottom: "25px",
  }}
>
  <div
    style={{
      display: "inline-block",
      padding: "18px 30px",
      borderRadius: "14px",
      background: "#fff7ed",
      border: "1px solid #fdba74",
      boxShadow: "0 2px 8px rgba(249,115,22,0.12)",
    }}
  >
    <h2
      style={{
        color: "#ea580c",
        marginBottom: "6px",
        fontSize: "2rem",
        fontWeight: "700",
      }}
    >
      {referrals.length}
    </h2>

    <p
      style={{
        color: "#9a3412",
        margin: 0,
        fontWeight: "500",
      }}
    >
      Total Referrals
    </p>
  </div>
</div>

{referrals.length === 0 ? (
  <div
    style={{
      textAlign: "center",
      color: "#9a3412",
      padding: "30px",
      background: "#fff7ed",
      borderRadius: "12px",
      border: "1px solid #fdba74",
    }}
  >
    No referrals yet.
  </div>
) : (
  <div
    style={{
      overflowX: "auto",
    }}
  >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                color: "white",
              }}
            >
              <thead>
               
  <tr>
    <th className="table-head">
      Lead Name
    </th>

    <th className="table-head">
      Phone
    </th>

    <th className="table-head">
      Email
    </th>

    <th className="table-head">
      Goal
    </th>

    <th className="table-head">
      Referred By
    </th>

    <th className="table-head">
      Status
    </th>
  </tr>
</thead>
                

              <tbody>
                {referrals.map((item) => (
                 <tr key={item._id}>
  <td className="table-cell">
    {item.leadName}
  </td>

  <td className="table-cell">
    {item.leadPhone}
  </td>

  <td className="table-cell">
    {item.leadEmail}
  </td>

  <td className="table-cell">
    {item.leadGoal}
  </td>

  <td className="table-cell">
    {item.clientName}
  </td>

  <td className="table-cell">
    <select
      className="hl-select"
      value={item.status}
      onChange={(e) =>
        updateStatus(
          item._id,
          e.target.value
        )
      }
    >
      <option value="pending">
        Pending
      </option>

      <option value="scheduled">
        Scheduled
      </option>

      <option value="consulted">
        Consulted
      </option>

      <option value="converted">
        Converted
      </option>
    </select>
  </td>
</tr>
                
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoachDashboard;