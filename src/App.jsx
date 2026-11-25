
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Pages
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      {/* Main Dashboard Layout */}
      <Route path="/" element={<DashboardLayout />}>
        {/* Dashboard Home */}
        <Route index element={<Home />} />

        {/* Students Page */}
        <Route path="students" element={<Students />} />

        {/* Individual Student Details */}
        <Route path="students/:id" element={<StudentDetails />} />

        {/* About Page */}
        <Route path="about" element={<About />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
