import { useState } from 'react'
import './App.css'
import axios from "axios";
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/api';
import SunriseSunset from './components/SunriseSunset';
import Forecast from './components/Forecast';


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

  return (

    <div className='headImageContainer'>
        <div id='imageDiv'>
          <img id='headImage' src='/sunrise_banner.jpg' alt='Title icon'></img>
        </div>
        <div>
          <h1 id='title'>Shields Weather Service</h1>
        </div>
      <div >
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {/* {forecast && <Forecast data={forecast} />} */}
        {/* {currentWeather && <SunriseSunset data={currentWeather} />} */}
      </div> 
    </div>
  );
};

export default App
