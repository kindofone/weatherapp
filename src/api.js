export function get7DayForecast(apiData) {
  const weekForecast = [];
  const temps = apiData.hourly.temperature_2m;
  const times = apiData.hourly.time;

  for (let i = 12; i < temps.length; i+=24) {
    weekForecast.push({
      date: times[i].replace("T12:00",""), 
      temperature: temps[i],
    });
  }
  
  return weekForecast;
};