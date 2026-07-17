import { useState } from "react";
import API from "../services/api";
import "../Career.css";

function CareerApply(){

const [form,setForm]=useState({

fullName:"",
phone:"",
email:"",
age:"",
city:"",
occupation:"",
reason:""

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

await API.post("/career/apply",form);

alert("Application Submitted Successfully!");

setForm({

fullName:"",
phone:"",
email:"",
age:"",
city:"",
occupation:"",
reason:""

});

}

catch(err){

alert("Something went wrong.");

}

};

return(

<div className="careerApply">

<div className="applyCard">

<h1>Apply Now</h1>

<p>
Fill the application below and our team
will contact you.
</p>

<form onSubmit={handleSubmit}>

<input
placeholder="Full Name"
name="fullName"
value={form.fullName}
onChange={handleChange}
required
/>

<input
placeholder="Phone Number"
name="phone"
value={form.phone}
onChange={handleChange}
required
/>

<input
placeholder="Email"
type="email"
name="email"
value={form.email}
onChange={handleChange}
required
/>

<input
placeholder="Age"
name="age"
value={form.age}
onChange={handleChange}
/>

<input
placeholder="City"
name="city"
value={form.city}
onChange={handleChange}
/>

<select
name="occupation"
value={form.occupation}
onChange={handleChange}
>

<option value="">
Select Occupation
</option>

<option>Student</option>

<option>Working Professional</option>

<option>Homemaker</option>

<option>Business</option>

<option>Fitness Enthusiast</option>

<option>Retired</option>

<option>Other</option>

</select>

<textarea

rows="5"

placeholder="Why do you want to join?"

name="reason"

value={form.reason}

onChange={handleChange}

/>

<button type="submit">

Submit Application

</button>

</form>

</div>

</div>

);

}

export default CareerApply;