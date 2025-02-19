import React, { useEffect, useState } from 'react';
import Search from './Search';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('pune');
  const [weatherData, setWeatherData] = useState(null); // Initialize as null

  const weatherIcon = {
    '10d': 'https://openweathermap.org/img/wn/10d@2x.png',
    '01d': 'https://openweathermap.org/img/wn/01d@2x.png',
    '02d': 'https://openweathermap.org/img/wn/02d@2x.png',
    '03d': 'https://openweathermap.org/img/wn/03d@2x.png',
    '04d': 'https://openweathermap.org/img/wn/04d@2x.png',
    '09d': 'https://openweathermap.org/img/wn/09d@2x.png',
    '11d': 'https://openweathermap.org/img/wn/11d@2x.png',
    '13d': 'https://openweathermap.org/img/wn/13d@2x.png',
    '50d': 'https://openweathermap.org/img/wn/50d@2x.png',
  };

  const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  // Move fetchWeather function outside useEffect
  const fetchWeather = async () => {
    const WEATHER_CITY_API_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=${WEATHER_KEY}`;
    
    try {
      const response = await fetch(WEATHER_CITY_API_KEY);
      if (!response.ok) throw new Error('Failed to fetch data');

      const json = await response.json();
      console.log(json);

      const iconCode = json.weather[0].icon;
      const icon = weatherIcon[iconCode] || weatherIcon['10d']; // Default fallback

      setWeatherData({
        humidity: json.main.humidity,
        temp: Math.floor(json.main.temp),
        windSpeed: json.wind.speed,
        location: json.name,
        icon: icon,
      });
    } catch (error) {
      console.log('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [searchQuery]); //  Add searchQuery as a dependency

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-200'>
      <div className='flex justify-center bg-gradient-to-bl from-blue-600 to-blue-900 w-[250px] h-[400px] md:w-[450px] md:h-[550px] rounded-2xl shadow-2xl'>
        <div className='flex flex-col items-center'>
          {/* Pass the function reference, not call it */}
          <Search query={searchQuery} setQuery={setSearchQuery} weather={fetchWeather} />

          {weatherData ? (
            <>
              <img
                className='md:w-[150px] w-[100px] h-[100px] md:h-[150px]'
                src={weatherData.icon}
                alt='Weather Icon'
              />
              <p className='flex font-bold text-white text-[40px] md:text-[70px] justify-center'>
                {weatherData.temp}°C
              </p>
              <p className='flex text-white text-[30px] md:text-[40px] justify-center'>
                {weatherData.location}
              </p>

              <div className='flex md:mt-4 mt-3 gap-4 md:gap-7'>
                <div className='flex text-white items-center gap-2'>
                  <img
                    className='md:w-10 md:h-10 w-5 h-5'
                    src='https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/recycle-symbol-white-icon.png'
                    alt='Humidity Icon'
                  />
                  <p className='flex flex-col text-lg '>
                    {weatherData.humidity}%
                    <span className='text-xs'>Humidity</span>
                  </p>
                </div>
                <div className='flex text-white items-center gap-2'>
                  <img
                    className='md:w-11 md:h-11 w-6 h-6 rounded-4xl'
                    src='https://media.istockphoto.com/id/1368763816/vector/wind-blow-vector-icon-air-puff-symbol.jpg?s=612x612&w=0&k=20&c=0GIijczbW0qFbHtaPWS9tf-QUSYCRr627AkUp5I0jRo='
                    alt='Wind Speed Icon'
                  />
                  <p className='flex flex-col text-md '>
                    {weatherData.windSpeed} km/h
                    <span className='text-xs'>Wind Speed</span>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <p className='text-white mt-4'>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
