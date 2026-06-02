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
    <div className="container">
      <h1>Coach Dashboard</h1>

      {referrals.length === 0 ? (
        <p>No referrals yet.</p>
      ) : (
        <div className="grid">
          {referrals.map((item) => (
            <div
              className="card"
              key={item._id}
            >
             

             <p>
  <strong>Lead Name:</strong>{" "}
  {item.leadName}
</p>

<p>
  <strong>Lead Email:</strong>{" "}
  {item.leadEmail}
</p>

<p>
  <strong>Lead Phone:</strong>{" "}
  {item.leadPhone}
</p>

<hr />

<p>
  <strong>Referred By:</strong>{" "}
  {item.clientName}
</p>

<p>
  <strong>Referral Email:</strong>{" "}
  {item.clientEmail}
</p>

<p>
  <strong>Referral Code:</strong>{" "}
  {item.referralCode}
</p>

              <p>
                <strong>Status:</strong>{" "}
                {item.status}
              </p>

              <select
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoachDashboard;