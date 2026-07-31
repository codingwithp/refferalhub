import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReferralHome from "./pages/ReferralHome";
import Login from "./pages/Login";
import Rules from "./pages/Rules";
import Register from "./pages/Register";
import ReferralLanding from "./pages/ReferralLanding";
import CoachDashboard from "./pages/CoachDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import CreateCoach from "./pages/CreateCoach";
import Career from "./pages/Career";
import CareerApply from "./pages/CarrerApply";
import AdminCareer from "./pages/AdminCareer";
import ManageCoaches from "./pages/ManageCoaches";
import ManageClients from "./pages/ManageClients";
import ManageLeads from "./pages/ManageLeads";
function App() {
  return (
    <Routes>
      <Route

path="/superadmin"

element={<SuperAdminDashboard/>}

/>
<Route
path="/career-apply"
element={<CareerApply/>}
/>
<Route
path="/admin/career"
element={<AdminCareer/>}
/>
      <Route path="/career" element={<Career />} />
<Route path="/" element={<Home />} />
      <Route path="/referral" element={<ReferralHome />} />
      <Route path="/login" element={<Login />} />
      <Route
path="/register/:coachCode"
element={<Register />}
/>
      <Route path="/ref/:code" element={<ReferralLanding />} />
      <Route path="/dashboard" element={<CoachDashboard />} />
      <Route path="/rules" element={<Rules />} />
      <Route
  path="/client-dashboard"
  element={<ClientDashboard />}
/>
      <Route
        path="/admin/create-coach"
        element={<CreateCoach />}
      />
      <Route path="/admin/coaches" element={<ManageCoaches />} />

<Route path="/admin/clients" element={<ManageClients />} />

<Route path="/admin/leads" element={<ManageLeads />} />

<Route path="/admin/career" element={<AdminCareer />} />
    </Routes>

    
  );
}

export default App;