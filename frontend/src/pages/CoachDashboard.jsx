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

function CoachDashboard() {
  const [referrals, setReferrals] = useState([]);

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
      await API.put(
        `/coach/referrals/${id}`,
        { status }
      );

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
            Coach Management Dashboard
          </p>
        </div>

        <h1 className="hl-heading">
          Coach Dashboard
        </h1>

        <p className="hl-subheading">
          Manage consultations and referral leads
        </p>

        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-value">
              {referrals.length}
            </div>

            <p>Total Referrals</p>
          </div>
        </div>

        {referrals.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              color: "white",
              marginTop: "20px",
            }}
          >
            No referrals yet.
          </div>
        ) : (
          <div
            style={{
              overflowX: "auto",
              marginTop: "20px",
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
                    Referred By
                  </th>

                  <th className="table-head">
                    Referral Code
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
                      {item.clientName}
                    </td>

                    <td className="table-cell">
                      {item.referralCode}
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