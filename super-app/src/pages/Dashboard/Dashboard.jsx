import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import ProfileCard from "../../components/Profile/ProfileCard";
import Weather from "../../components/Weather/Weather";
import NewsCard from "../../components/NewsCard/NewsCard";
function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);
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
  const apiKey = "48be163fc45d4f19b37b705d5af1b59a";
  const newsapiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  useEffect(() => {
    fetch(newsapiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          const articles = data.articles;
          const randomIndex = Math.floor(Math.random() * articles.length);
          setNews(articles[randomIndex]);
          // setNews(data.articles);
        } else {
          console.error("Failed to fetch news:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
        <div className={styles.rightSection}>
          <div className={styles.newsContainer}>
            <NewsCard news={news} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
