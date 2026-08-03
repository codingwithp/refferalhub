import { useEffect, useState } from "react";
import API from "../services/api";
import "../Admin.css";

function ManageLeads(){

  const [leads,setLeads]=useState([]);

  useEffect(()=>{
    fetchLeads();
  },[]);

  const fetchLeads=async()=>{
    try{
      const res=await API.get("/admin/leads");
      setLeads(res.data);
    }catch(err){
      console.log(err);
    }
  };

  const deleteLead=async(id)=>{

    const confirmDelete=window.confirm(
      "Delete this lead?"
    );

    if(!confirmDelete)return;

    try{
      await API.delete(`/admin/lead/${id}`);
      fetchLeads();
    }catch(err){
      console.log(err);
    }
  };

  return(

    <div className="admin-page">

      <h1>Customer Leads</h1>

      <div className="table-wrapper">
        <table className="admin-table">

          <thead>
  <tr>
    <th>Lead Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Goal</th>
    <th>Client</th>
    <th>Coach</th>
    <th>Status</th>
    <th>Actions</th>
  </tr>
</thead>

          <tbody>
            {leads.map((lead)=>(

              <tr key={lead._id}>

                <td>{lead.leadName}</td>
                <td>{lead.leadPhone}</td>
                <td>{lead.leadEmail}</td>
                
<td>{lead.leadGoal}</td>

<td>
  {lead.clientId ? (
    <div className="coach-info">
      <span className="coach-name">
        👤 {lead.clientId.name}
      </span>
      {/* <small className="coach-code">
        {lead.clientId.email}
      </small> */}
    </div>
  ) : (
    <span className="no-coach">No Client</span>
  )}
</td>

<td>
  {lead.coachId ? (
    <div className="coach-info">
      <span className="coach-name">
        👨‍🏫 {lead.coachId.name}
      </span>
      {/* <small className="coach-code">
        {lead.coachId.coachCode}
      </small> */}
    </div>
  ) : (
    <span className="no-coach">No Coach</span>
  )}
</td>

<td>{lead.status}</td>

<td>
  <button
    className="delete-btn"
    onClick={() => deleteLead(lead._id)}
  >
    Delete
  </button>
</td>

                

              </tr>

            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default ManageLeads;