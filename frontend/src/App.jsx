import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rules from "./pages/Rules";
import Register from "./pages/Register";
import ReferralLanding from "./pages/ReferralLanding";
import CoachDashboard from "./pages/CoachDashboard";
import ClientDashboard from "./pages/ClientDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ref/:code" element={<ReferralLanding />} />
      <Route path="/dashboard" element={<CoachDashboard />} />
      <Route path="/rules" element={<Rules />} />
      <Route
  path="/client-dashboard"
  element={<ClientDashboard />}
/>
    </Routes>
  );
}

export default App;