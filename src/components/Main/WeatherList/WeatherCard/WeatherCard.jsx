import React from "react";
import "./WeatherCard.css";
import rainImage from "../../../../assets/rain.png";
import snowImage from "../../../../assets/snow.png";
import sunImage from "../../../../assets/sunny.png";
import cloudImage from "../../../../assets/clouds.png";

const WeatherCard = ({ city }) => {
  // Convert timestamp to local time based on city's timezone offset
  const convertToLocalTime = (timestamp, timezoneOffset) => {
    const utcDate = new Date(timestamp * 900); // Convert timestamp to UTC date
    const localDate = new Date(utcDate.getTime() + timezoneOffset * 1000); // Adjust for city's timezone offset
    return localDate.toLocaleString("es-ES", {
      weekday: "long", // Show day of the week
      hour: "2-digit", // Show hour
      minute: "2-digit", // Show minutes
    });
  };

  // Use city's timezone offset (in seconds) to calculate local time
  const localTime = convertToLocalTime(city.dt, city.timezone);

  return (
    <article>
      <h1>{city.name}</h1>
      {city.weather?.[0]?.description.includes("rain") ? (
        <img src={rainImage} alt="" />
      ) : city.weather?.[0]?.description.includes("snow") ? (
        <img src={snowImage} alt="" />
      ) : city.weather?.[0]?.description.includes("sun") || city.weather?.[0]?.description.includes("clear sky") ? (
        <img src={sunImage} alt="" />
      ) : city.weather?.[0]?.description.includes("cloud") ? (
        <img src={cloudImage} alt="" />
      ) : (
        <img src={cloudImage} alt="" />
      )}
      <p>{localTime}</p>
      <p>{city.weather?.[0]?.description || "No description available"}</p>
      <p>Clouds: {city.clouds?.all || "N/A"}%</p>
    </article>
  );
};

export default WeatherCard;
