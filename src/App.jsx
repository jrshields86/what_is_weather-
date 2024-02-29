import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import CurrentWeather from './components/CurrentWeather';
import { Routes, Route } from 'react-router-dom';
import axios from "axios";


function App() {
  const [weather, setWeather] = useState([]);
  const [city,setCity] = useState('');
  const  [state, setState] = useState('');
  
  const lat = 39.6536;
  const lon = -105.293;

  // const lat = 39.6042;
  // const lon = -105.9481;

  function updateLocation(){

  };

  const fetchWeather = async() => {
    const response = await axios.get(`https://api.weather.gov/points/${lat},${lon}`); 
    const secondResponse = await axios.get(response.data.properties.forecast) 
    setWeather(secondResponse.data.properties.periods);
    setCity(response.data.properties.relativeLocation.properties.city);
    setState(response.data.properties.relativeLocation.properties.state);
  };
  console.log(weather);
  console.log(city);
  console.log(state);

  return (
    <div>
      <h1>What is the Weather?</h1>
      <button onClick={fetchWeather}>Submit</button>
      <Nav />
      
      <CurrentWeather weather={weather} fetchWeather={fetchWeather} city={city} state={state} />
      
      {/* <Routes>
        <Route path='/' element={<Homepage/>}  />
        <Route path='/current' element={} updateLocation={updateLocation} weather={weather} />
      </Routes> */}
    </div>
  );
};

export default App
