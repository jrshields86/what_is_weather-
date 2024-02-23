import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import CurrentWeather from './components/CurrentWeather';
import { Routes, Route } from 'react-router-dom';
import axios from "axios"; 


function App() {

  useEffect(()=> {
    const fetchCurrent = async() => {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=fd7a4297251046e7af844422242802&q=Kittredge&aqi=no');
        console.log(response.data);
    };
    fetchCurrent();
  },[]);

  return (
    <div>
      <h1>What is the Weather?</h1>
      <Nav />
      <CurrentWeather />
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </div>
  );
};

export default App
