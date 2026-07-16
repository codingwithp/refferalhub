import { useNavigate } from "react-router-dom";

function AdminNavbar() {

const navigate=useNavigate();

const logout=()=>{

localStorage.removeItem("token");

navigate("/login");

}

return(

<div className="admin-navbar">

<div className="nav-left">

<img

src="/logo.jpeg"

className="nav-logo"

alt="logo"

/>

<div>

<h2>

Weight Loss Factory

</h2>

<p>

Super Admin

</p>

</div>

</div>

<button

className="logout-btn"

onClick={logout}

>

Logout

</button>

</div>

);

}

export default AdminNavbar;