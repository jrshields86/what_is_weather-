import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import CurrentWeather from './components/CurrentWeather';
import { Routes, Route } from 'react-router-dom';
import axios from "axios";


function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [hourly, setHourly] = useState([]);
  
  const lat = 39.6536;
  const lon = -105.293;

  // const lat = 39.6042;
  // const lon = -105.9481;

  function updateLocation(){

  };

  const fetchWeather = async() => {
    const response = await axios.get(`https://api.weather.gov/points/${lat},${lon}`); 
    console.log(response)
    const secondResponse = await axios.get(response.data.properties.forecast); 
    const thirdResponse = await axios.get(response.data.properties.forecastHourly);
    console.log(thirdResponse.data.properties.periods)
    setWeather(secondResponse.data.properties.periods);
    setCity(response.data.properties.relativeLocation.properties.city);
    setState(response.data.properties.relativeLocation.properties.state);
  };
  console.log(weather);
  console.log(hourly)

  return (
    <div>
      <h1>What is the Weather?</h1>
      <Nav />
      <button onClick={fetchWeather}>Submit</button>
      
      
      <CurrentWeather weather={weather} fetchWeather={fetchWeather} city={city} state={state} />
      
      {/* <Routes>
        <Route path='/' element={<Homepage/>}  />
        <Route path='/current' element={} updateLocation={updateLocation} weather={weather} />
      </Routes> */}
    </div>
  );
};

export default App
