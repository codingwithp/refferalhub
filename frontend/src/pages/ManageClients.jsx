import { useEffect, useState } from "react";
import API from "../services/api";
import "../Admin.css";

function ManageClients(){

  const [clients,setClients]=useState([]);

  const [editingClient,setEditingClient]=useState(null);

  const [form,setForm]=useState({
    name:"",
    email:"",
    phone:""
  });

  useEffect(()=>{
    fetchClients();
  },[]);

  const fetchClients=async()=>{
    try{
      const res=await API.get("/admin/clients");
      setClients(res.data);
    }catch(err){
      console.log(err);
    }
  };

  // DELETE CLIENT
  const deleteClient=async(id)=>{

    const confirmDelete=window.confirm(
      "Delete this client?"
    );

    if(!confirmDelete)return;

    try{
      await API.delete(`/admin/client/${id}`);
      fetchClients();
    }catch(err){
      console.log(err);
    }
  };

  // OPEN EDIT MODAL
  const openEdit=(client)=>{
    setEditingClient(client);

    setForm({
      name:client.name || "",
      email:client.email || "",
      phone:client.phone || ""
    });
  };

  // SAVE EDIT
  const saveEdit=async()=>{
    try{

      await API.put(
        `/admin/client/${editingClient._id}`,
        form
      );

      setEditingClient(null);
      fetchClients();

    }catch(err){
      console.log(err);
    }
  };

  return(

    <div className="admin-page">

      <h1>Manage Clients</h1>

      <div className="table-wrapper">
        <table className="admin-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Coach</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client)=>(

              <tr key={client._id}>

                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
  {client.coach ? (
    <div className="coach-info">
      <span className="coach-name">
        👨‍🏫 {client.coach.name}
      </span>

      {/* <small className="coach-code">
        {client.coach.coachCode}
      </small> */}
    </div>
  ) : (
    <span className="no-coach">Not Assigned</span>
  )}
</td>

                <td className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={()=>openEdit(client)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={()=>deleteClient(client._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}
          </tbody>

        </table>
      </div>

      {/* EDIT MODAL */}

      {editingClient && (

        <div className="modal-overlay">

          <div className="edit-modal">

            <h2>Edit Client</h2>

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

            <div className="modal-actions">

              <button
                className="save-btn"
                onClick={saveEdit}
              >
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={()=>setEditingClient(null)}
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

export default ManageClients;