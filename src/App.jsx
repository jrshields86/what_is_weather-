import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

import Forecast from './components/Forecast';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/api';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({city: searchData.label , ...weatherResponse});
        setForecast({city: searchData.label , ...forecastResponse});
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className='container'>
      <h1>What is the Weather?</h1>
      <div >
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div> 
    </div>
  );
};

export default App
