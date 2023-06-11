import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import LocationSelector, { locations } from './LocationSelector';
import Day from './Day';
import { get7DayForecast } from './api';

function App() {
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState(0);

  useEffect(() => {
    const {latitude, longitude} = locations[location];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

    setForecast(null);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setForecast(get7DayForecast(data));
      });
  }, [location]);

  return (
    <div className='app-container'>
      <Header />
      <div className='grid'>
        <div className='forecast-header'>
          <LocationSelector onLocationChange={setLocation} />
        </div>
        <div className='forecast-days'>
          {forecast === null ? "Loading..." : forecast.map(({date, temperature}) => <Day date={date} temperature={temperature} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
