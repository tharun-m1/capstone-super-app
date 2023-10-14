import React from "react";
import styles from "./weather.module.css";
import tempicon from "../../assets/tempicon.png";
function Weather(props) {
  //   console.log("loading", typeof props.loading);
  //   console.log("DATE TIME in weather", props.date, props.time);
  return (
    <>
      <div className={styles.weatherContainer}>
        <div className={styles.dateTimeContainer}>
          <div className={styles.date}>
            {props.weatherData
              ? props.weatherData.location.localtime.split(" ")[0]
              : "loading"}
          </div>
          <div className={styles.time}>
            {props.weatherData
              ? props.weatherData.location.localtime.split(" ")[1]
              : "loading"}
          </div>
        </div>
        <div className={styles.weather}>
          <div className={styles.climate}>
            <img
              src={
                props.weatherData
                  ? props.weatherData.current.condition.icon
                  : ""
              }
              alt="weather-icon"
            />

            <div>
              {props.weatherData
                ? props.weatherData.current.condition.text
                : "loading..."}
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.temperature}>
            {props.weatherData
              ? props.weatherData.current.temp_c
              : "loading..."}{" "}
            &deg;C
            <br />
            <div style={{ fontSize: "1.1vw", marginTop: "3%" }}>
              {props.weatherData
                ? props.weatherData.current.pressure_mb
                : "loading.."}{" "}
              mbar
              <div> pressure </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.wind}>
            {props.weatherData
              ? props.weatherData.current.wind_kph
              : "loading..."}{" "}
            km/h
            <div> Wind </div>
            <br />
            {props.weatherData
              ? props.weatherData.current.humidity
              : "loading..."}
            %<div>Humidity</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
