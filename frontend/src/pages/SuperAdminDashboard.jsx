import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
// import AdminNavbar from "../components/AdminNavbar";
// import StatCard from "../components/StatCard";
// import QuickAction from "../components/QuickAction";

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

}
catch(err){

console.log(err);

}

};

const logout=()=>{

localStorage.removeItem("token");

navigate("/login");

};

return(

<div className="admin-page">

<div className="admin-navbar">

<div className="nav-left">

<img src="/logo.jpeg" className="nav-logo"/>

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

<h1>

Welcome 👋

</h1>

<p>

Manage coaches, clients and referrals

</p>

<div className="stats-grid">

<div className="stat-card">

<h2>{stats.coaches}</h2>

<p>Total Coaches</p>

</div>

<div className="stat-card">

<h2>{stats.clients}</h2>

<p>Total Clients</p>

</div>


{/* <div className="stat-card">

<h2>{stats.leads}</h2>

<p>Total Leads</p>

</div> */}



</div>

<h2 style={{marginTop:40}}>

Quick Actions

</h2>

<div className="quick-grid">

<button

className="quick-card"

onClick={()=>navigate("/admin/create-coach")}

>

➕ Create Coach

</button>
<button

className="quick-card"

onClick={()=>navigate("/admin/career")}

>
    

Career applications

</button>

{/* <button

className="quick-card"

onClick={()=>navigate("/admin/coaches")}

>

👨‍🏫 View Coaches

</button>

<button

className="quick-card"

onClick={()=>navigate("/admin/clients")}

>

👥 View Clients

</button>

<button

className="quick-card"

onClick={()=>navigate("/admin/leads")}

>

📋 View Leads

</button>
 */}
</div>

<div className="dashboard-card">

<h2>

Recent Coaches

</h2>

<table className="hl-table">

<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Coach Code</th>

{/* <th>Status</th> */}

</tr>

</thead>

<tbody>

{coaches.map((coach)=>(

<tr key={coach._id}>

<td>{coach.name}</td>

<td>{coach.email}</td>

<td>{coach.coachCode}</td>

{/* <td>

{coach.isActive?

<span className="scheduled">

Active

</span>

:

<span className="pending">

Pending

</span>

}

</td> */}

</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

);

}

export default SuperAdminDashboard;