import { useEffect, useState } from "react";
import API from "../services/api";
import "../Career.css";

function AdminCareer() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await API.get("/career/applications");
      setApplications(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="career-admin-page">
      <div className="career-admin-container">

        <h1>Career Applications</h1>

        <p className="career-admin-subtitle">
          View everyone who has applied for the Wellness Career Program.
        </p>

        <div className="career-admin-grid">

          {applications.map((app) => (

            <div className="application-card" key={app._id}>

              <div className="application-header">

                <div className="avatar">
                  {app.fullName?.charAt(0).toUpperCase()}
                </div>

                <div>

                  <h2>{app.fullName}</h2>

                  <span className="status">
                    {app.status}
                  </span>

                </div>

              </div>

              <div className="application-details">

                <p>
                  📧 <strong>Email:</strong><br />
                  {app.email}
                </p>

                <p>
                  📞 <strong>Phone:</strong><br />
                  {app.phone}
                </p>

                <p>
                  🏙 <strong>City:</strong><br />
                  {app.city}
                </p>

                <p>
                  💼 <strong>Occupation:</strong><br />
                  {app.occupation}
                </p>

                <p>
                  🎂 <strong>Age:</strong><br />
                  {app.age}
                </p>

                <p>
                  📝 <strong>Reason:</strong><br />
                  {app.reason}
                </p>

              </div>

              <div className="application-footer">

                <button className="contact-btn">
                  Contact
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default AdminCareer;