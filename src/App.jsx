import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { initGA } from "./analytics";

// Dashboard pages
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./pages/dashboard/Home";
import Citas from "./pages/dashboard/Citas";
import Usuarios from "./pages/dashboard/Usuarios";
import Clientes from "./pages/dashboard/Clientes";
import Proyectos from "./pages/dashboard/Proyectos"; // 👈 nueva página


export default function App() {
  useEffect(() => {
    initGA("TU_GOOGLE_ANALYTICS_ID"); // reemplaza con tu ID
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
