import axios from "axios";

const API_KEY = "81d77265bf1c5eced1cf74c50b818719";

  


export const fetchWeather = async (query) => {
  const { data } = await axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${query}`, {
    
  });

  return data;
};







