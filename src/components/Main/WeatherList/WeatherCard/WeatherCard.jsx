import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({city}) => {
  console.log(city);
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

  return <article>
    <h1>{city.name}</h1>
    <p>{localTime}</p>
    <p>{city.weather?.[0]?.description|| "No description available"}</p>
    <p>Clouds: {city.clouds?.all || "N/A"}%</p>
  </article>;
};

export default WeatherCard;
