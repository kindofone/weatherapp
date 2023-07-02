import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import LocationSelector, { locations } from './LocationSelector';
import Day from './Day';
import { get7DayForecast, getCurrentWeather } from './api';
import Now from './Now';

function App() {
  const [rawWeatherData, setRawWeatherData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState(0);

  useEffect(() => {
    const {latitude, longitude} = locations[location];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&timeformat=unixtime&timezone=auto`;

    setForecast(null);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setRawWeatherData(data);
      });
  }, [location]);

  useEffect(() => {
    if (rawWeatherData !== null) {
      setCurrentWeather(getCurrentWeather(rawWeatherData));
      setForecast(get7DayForecast(rawWeatherData));
    } else {
      setCurrentWeather(null);
      setForecast(null);
    }
  }, [rawWeatherData]);

  return (
    <div className='app-container'>
      <Header />
      <div className='grid'>
        <div className='forecast-header'>
          <LocationSelector onLocationChange={setLocation} />
          <Now temperature={currentWeather} />
        </div>
        <div className='forecast'>
          <div className='forecast-days'>
            {forecast === null ? "Loading..." : forecast.map(({date, temperature}) => <Day date={date} temperature={temperature} />)}
          </div>
          <div className='forecast-deepdive'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
