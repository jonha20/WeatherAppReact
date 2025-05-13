import React from "react";
import "./WeatherCard.css";
import rainImage from "../../../../assets/rain.png";
import snowImage from "../../../../assets/snow.png";
import sunImage from "../../../../assets/sunny.png";
import cloudImage from "../../../../assets/clouds.png";

const WeatherCard = ({ city  }) => {
  return (
    <>
    <div>
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
      <p>{city.dt_txt}</p>
      <p>{city.weather?.[0]?.description || "No description available"}</p>
      <p>Clouds: {city.clouds?.all || "N/A"}%</p>
      </div>
    </>
  );
};

export default WeatherCard;
