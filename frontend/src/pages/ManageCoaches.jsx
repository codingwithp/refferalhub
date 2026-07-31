import { useEffect, useState } from "react";
import API from "../services/api";
import "../Admin.css";

function ManageCoaches(){
    const [form,setForm]=useState({
  name:"",
  email:"",
  phone:"",
  password:""
});
    const openEdit=(coach)=>{
  setEditingCoach(coach);

  setForm({
    name:coach.name || "",
    email:coach.email || "",
    phone:coach.phone || "",
    password:""
  });
};

  const [coaches,setCoaches]=useState([]);

  // For edit modal
  const [editingCoach,setEditingCoach]=useState(null);

 

  useEffect(()=>{
    fetchCoaches();
  },[]);

  const fetchCoaches=async()=>{
    try{
      const res=await API.get("/admin/coaches");
      setCoaches(res.data);
    }catch(err){
      console.log(err);
    }
  };

  // ================= ACTIVATE =================

  const activateCoach=async(id)=>{
    try{
      await API.put(`/admin/coach/${id}/activate`);
      fetchCoaches();
    }catch(err){
      console.log(err);
    }
  };

  // ================= DELETE =================

  const deleteCoach=async(id)=>{

    const confirmDelete=window.confirm(
      "Are you sure you want to delete this coach?"
    );

    if(!confirmDelete)return;

    try{
      await API.delete(`/admin/coach/${id}`);
      fetchCoaches();
    }catch(err){
      console.log(err);
    }
  };

  // ================= EDIT =================

  

  const saveEdit=async()=>{
    try{

      await API.put(`/admin/coach/${editingCoach._id}`,form);

      setEditingCoach(null);
      fetchCoaches();

    }catch(err){
      console.log(err);
    }
  };

  return(
    <div className="admin-page">

      <h1>Manage Coaches</h1>

      <div className="table-wrapper">
        <table className="admin-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th>Status</th> */}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {coaches.map((coach)=>(

              <tr key={coach._id}>

                <td>{coach.name}</td>
                <td>{coach.email}</td>
                <td>{coach.phone}</td>

                {/* <td>
                  <span
                    className={
                      coach.status === "active"
                        ? "status-active"
                        : "status-pending"
                    }
                  >
                    {coach.status || "pending"}
                  </span>
                </td> */}

                <td className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={()=>openEdit(coach)}
                  >
                    Edit
                  </button>

                  {/* {coach.status !== "active" && (
                    <button
                      className="activate-btn"
                      onClick={()=>activateCoach(coach._id)}
                    >
                      Activate
                    </button>
                  )} */}

                  <button
                    className="delete-btn"
                    onClick={()=>deleteCoach(coach._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}
          </tbody>

        </table>
      </div>

      {/* ================= EDIT MODAL ================= */}

      {editingCoach && (

        <div className="modal-overlay">

          <div className="edit-modal">

            <h2>Edit Coach</h2>

            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e)=>
                setForm({...form,name:e.target.value})
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e)=>
                setForm({...form,email:e.target.value})
              }
            />

            <input
              type="text"
              placeholder="Phone"
              value={form.phone}
              onChange={(e)=>
                setForm({...form,phone:e.target.value})
              }
            />
            <input
  type="text"
  placeholder="Set New Password"
  value={form.password}
  onChange={(e)=>
    setForm({...form,password:e.target.value})
  }
/>

<small style={{color:"#777"}}>
  Leave blank if you don't want to change the password
</small>

            <div className="modal-actions">

              <button
                className="save-btn"
                onClick={saveEdit}
              >
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={()=>setEditingCoach(null)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ManageCoaches;