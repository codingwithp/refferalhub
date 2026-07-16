import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateCoach() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
  });

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{

      const res=await API.post(
        "/admin/create-coach",
        form
      );

      alert(res.data.message);

console.log(res.data.inviteLink);

      alert("Coach Created Successfully");

navigate("/superadmin");

    }

    catch(err){

      alert(err.response?.data?.message);

    }

  };

  return(

    <div className="hl-page">

      <div
        className="hl-card"
        style={{maxWidth:"700px"}}
      >

        <h1 className="hl-heading">
          Create Coach
        </h1>

        <p className="hl-subheading">
          Invite a new coach to Referral Factory
        </p>

        <form onSubmit={handleSubmit}>

          <div className="hl-field">

            <label>Name</label>

            <input
              className="hl-input"
              name="name"
              onChange={handleChange}
              required
            />

          </div>

          <div className="hl-field">

            <label>Email</label>

            <input
              className="hl-input"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />

          </div>

          <div className="hl-field">

            <label>Phone</label>

            <input
              className="hl-input"
              name="phone"
              onChange={handleChange}
              required
            />

          </div>
          <div className="hl-field">
<label>Password</label>

<input
type="password"
name="password"
className="hl-input"
onChange={handleChange}
required
/>

</div>

          <button
            className="hl-btn"
          >
            Create Coach
          </button>

        </form>

      </div>

    </div>

  )

}

export default CreateCoach;