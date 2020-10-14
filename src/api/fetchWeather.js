import axios from "axios";

const API_KEY = "81d77265bf1c5eced1cf74c50b818719";

  


export const fetchWeather = async (query) => {
  const { data } = await axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${query}`, {
    
  });

  return data;
};

export const fetchForecast = async () => {
  const { data } = await axios.get(
    `http://api.weatherstack.com/forecast?access_key=YOUR_ACCESS_KEY&query=Accra,Tema&forecast_days=6&hourly=1`,
    {}
  );

  return data;
};





