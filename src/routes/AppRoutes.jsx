// rfce

import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="manage" element={<Manage />} />
    </Routes>
  );
}

export default AppRoutes;
