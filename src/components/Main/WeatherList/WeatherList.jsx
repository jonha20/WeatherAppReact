import React, {useState, useEffect} from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import "./WeatherList.css";

const WeatherList = () => {
  const [city, setValue] = useState(); // Para guardar el dato a buscar
  const [posts, setPosts] = useState([]); // Para guardar los posts

    // Llama a getLocation al montar el componente y establece la ciudad predeterminada
  useEffect(() => {
    const fetchDefaultCity = async () => {
     try {
      const res = await axios.get(`https://ipinfo.io/json?token=${import.meta.env.VITE_LOCATION}`);
      const data = await res.data;
      setValue(data.city);  
    } catch (error) {
      console.error("Error fetching location:", error);
      setValue("Madrid"); 
    }
    };
    fetchDefaultCity();
  }, []);

  // equivale a un componentDidUpdate()
  useEffect(() => {
    async function fetchData() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_KEY}`);
        const json = await res;
        
        // Guarda en el array de posts el resultado. Procesa los datos
        setPosts(json.data);
        
      }catch(e){
        console.log(e);
      }
    }
    fetchData();
  }, [city]); // componentDidUpdate


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.city.value)
    setValue(e.target.city.value) // Modificando el estado de Value
    e.target.city.value = ""; // Limpiando el input
  };

  

  return <section className="city">
  <h1>City</h1>
  <form onSubmit={handleSubmit}>
    <input name="city"/>
    <button>Buscar</button>
  </form>

  { <WeatherCard key={posts.id} city={posts} /> }
</section>
};

export default WeatherList;
