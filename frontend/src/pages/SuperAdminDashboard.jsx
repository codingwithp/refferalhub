
import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function SuperAdminDashboard() {

  const navigate = useNavigate();

  const [stats,setStats]=useState({
    coaches:0,
    clients:0,
    leads:0,
    rewards:0
  });

  const [coaches,setCoaches]=useState([]);

  useEffect(()=>{
    loadDashboard();
  },[]);

  const loadDashboard=async()=>{
    try{

      const dashboard=await API.get("/admin/dashboard");
      setStats(dashboard.data);

      const coachRes=await API.get("/admin/coaches");
      setCoaches(coachRes.data);

    }catch(err){
      console.log(err);
    }
  };

  const logout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  };

  return(

    <div className="admin-page">

      {/* NAVBAR */}
      <div className="admin-navbar">

        <div className="nav-left">
          <img src="/logo.jpeg" className="nav-logo" alt="logo"/>

          <div>
            <h2>Weight Loss Factory</h2>
            <p>Super Admin</p>
          </div>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

      <div className="admin-container">

        {/* HEADER */}
        <h1>Welcome 👋</h1>

        <p>
          Manage coaches, clients, leads and career applications
        </p>

        {/* STATS */}
        <div className="stats-grid">

          <div className="stat-card">
            <h2>{stats.coaches}</h2>
            <p>Total Coaches</p>
          </div>

          <div className="stat-card">
            <h2>{stats.clients}</h2>
            <p>Total Clients</p>
          </div>

          <div className="stat-card">
            <h2>{stats.leads}</h2>
            <p>Total Leads</p>
          </div>

          {/* <div className="stat-card">
            <h2>{stats.rewards}</h2>
            <p>Rewards Sent</p>
          </div> */}

        </div>

        {/* QUICK ACTIONS */}
        <h2 className="section-title">Quick Actions</h2>

        <div className="quick-grid">

          <button
            className="quick-card"
            onClick={()=>navigate("/admin/create-coach")}
          >
            ➕ Create Coach
          </button>

          <button
            className="quick-card"
            onClick={()=>navigate("/admin/coaches")}
          >
            👨‍🏫 Manage Coaches
          </button>

          <button
            className="quick-card"
            onClick={()=>navigate("/admin/clients")}
          >
            👥 Manage Clients
          </button>

          <button
            className="quick-card"
            onClick={()=>navigate("/admin/leads")}
          >
            📋 Customer Leads
          </button>

          <button
            className="quick-card"
            onClick={()=>navigate("/admin/career")}
          >
            💼 Career Applications
          </button>

        </div>

        {/* RECENT COACHES */}
        {/* <div className="dashboard-card">

          <div className="card-header">
            <h2>Recent Coaches</h2>

            <button
              className="view-all-btn"
              onClick={()=>navigate("/admin/coaches")}
            >
              View All
            </button>
          </div>

          <table className="hl-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Coach Code</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {coaches.slice(0,5).map((coach)=>(

                <tr key={coach._id}>
                  <td>{coach.name}</td>
                  <td>{coach.email}</td>
                  <td>{coach.coachCode}</td>

                  <td>
                    {coach.status === "active" ? (
                      <span className="scheduled">
                        Active
                      </span>
                    ) : (
                      <span className="pending">
                        Pending
                      </span>
                    )}
                  </td>
                </tr>

              ))}
            </tbody>

          </table>

        </div> */}

      </div>

    </div>
  );
}

export default SuperAdminDashboard;
