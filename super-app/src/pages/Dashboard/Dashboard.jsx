import React from "react";
import { Navigate } from "react-router-dom";
function Dashboard() {
  if (!localStorage.getItem("authenticated")) {
    return <Navigate to="/" />;
  }
  return <div>Dashboard</div>;
}

export default Dashboard;
