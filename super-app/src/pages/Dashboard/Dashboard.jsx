import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import ProfileCard from "../../components/Profile/ProfileCard";
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
    <>
      <div className={styles.dashContainer}>
        <div className={styles.leftSection}>
          <div className={styles.cardContainer}>
            <ProfileCard />{" "}
          </div>
        </div>
        <div className={styles.rightSection}></div>
      </div>
    </>
  );
}

export default Dashboard;
