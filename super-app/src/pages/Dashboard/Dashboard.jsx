import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import ProfileCard from "../../components/Profile/ProfileCard";
import Weather from "../../components/Weather/Weather";
function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  useEffect(() => {
    // Define the API URL with your API key
    const apiUrl =
      "https://api.weatherapi.com/v1/current.json?key=357de390fc9c4db1b6d34722230710&q=Wanaparthy&aqi=yes";

    // Make the API request when the component mounts
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);
  let date;
  let time;

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
          <div className={styles.weatherContainer}>
            <Weather weatherData={weatherData} />
          </div>
        </div>
        <div className={styles.rightSection}></div>
      </div>
    </>
  );
}

export default Dashboard;
