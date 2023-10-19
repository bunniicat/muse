import React from 'react';
import axios from 'axios';
const { useState } = React;

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const apiKey = 'c4996b9d0049bdff6eeb56c81135e3e1';
  const unit = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  const weatherIcon = `http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`;

  return (
    <div className='weather_container'>
      <input className='weather_input' type='text' placeholder='Enter city' onChange={(e) => setCity(e.target.value)} />
      <button className='weather_btn' onClick={() => axios.get(url).then((res) => setWeather(res.data))}>
        Get Weather
      </button>

      {weather && (
        <div className='weather_info'>
          <h3 className='heading_3'>{weather.name}</h3>
          <p>{weather.main.temp} C°</p>
          <p style={{ textTransform: 'capitalize' }}>{weather.weather[0].description}</p>
          <img src={weatherIcon} alt='current weather' />
        </div>
      )}
    </div>
  );
};

export default Weather;
