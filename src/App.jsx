import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import TodayForecast from './components/TodayForecast';
import { Routes, Route } from 'react-router-dom';
import axios from "axios";
import CurrentConditions from './components/CurrentConditions';


function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [hourly, setHourly] = useState([]);
  const [inputLocation, setInputLocation] = useState('');
  
  const lat = 39.6536;
  const lon = -105.293;

  // const lat = 39.6042;
  // const lon = -105.9481;

  const fetchWeather = async() => {
    const response = await axios.get(`https://api.weather.gov/points/${lat},${lon}`); 
    // console.log(response)
    const secondResponse = await axios.get(response.data.properties.forecast); 
    const thirdResponse = await axios.get(response.data.properties.forecastHourly);
    // console.log(thirdResponse.data.properties.periods);
    setHourly(thirdResponse.data.properties.periods)
    setWeather(secondResponse.data.properties.periods);
    setCity(response.data.properties.relativeLocation.properties.city);
    setState(response.data.properties.relativeLocation.properties.state);
  };
  // console.log(weather);
  // console.log(hourly);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputLocation);
    setInputLocation('')
  }

  return (
    <div>
      <h1>What is the Weather?</h1>
      <Nav />
      <div >
        <form className='formContainer' onSubmit={handleSubmit} >
          <label >Enter Location
            <br />
          <input 
            type="text" 
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
      <CurrentConditions hourly={hourly} city={city} state={state}/>
      <button onClick={fetchWeather}>Today's Forecast</button>
      {/* <TodayForecast weather={weather} city={city} state={state} hourly={hourly} /> */}
      
    </div>
  );
};

export default App
