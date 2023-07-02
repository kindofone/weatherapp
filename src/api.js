export function getCurrentWeather(apiData) {
  const temps = apiData.hourly.temperature_2m;
  const times = apiData.hourly.time;
  const currentTime = (new Date()).getTime();
  const currentIndex = times.findIndex(time => {
    console.log(time, currentTime);
    return currentTime <= time*1000;
  });
  
  return temps[currentIndex];
};

export function get7DayForecast(apiData) {
  const weekForecast = [];
  const temps = apiData.hourly.temperature_2m;
  const times = apiData.hourly.time;

  for (let i = 12; i < temps.length; i+=24) {
    weekForecast.push({
      date: times[i], 
      temperature: temps[i],
    });
  }
  
  return weekForecast;
};