import React from "react";
import { Navigate } from "react-router-dom";
function Dashboard() {
  // setTimeout(() => {
  //   localStorage.clear();
  // }, 5000);
  if (
    !localStorage.getItem("dashboard") &&
    !localStorage.getItem("authenticated")
  ) {
    return <Navigate to="/" />;
  } else if (
    !localStorage.getItem("dashboard") &&
    localStorage.getItem("authenticated")
  ) {
    return <Navigate to="/categories" />;
  } else if (!localStorage.getItem("authenticated")) {
    console.log("login redirect");
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
