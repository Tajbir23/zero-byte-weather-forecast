
const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white shadow-lg transition-transform transform hover:scale-105">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">{weather.name}</h2>
          <p className="text-lg opacity-90">{weather.sys.country}</p>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm opacity-90">{new Date(weather.dt * 1000).toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center mb-8">
        <img 
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={weather.weather[0].description}
          className="w-32 h-32 md:w-48 md:h-48 object-contain animate-bounce"
        />
        <div className="text-8xl font-bold ml-0 md:ml-4 mt-4 md:mt-0">
          {Math.round(weather.main.temp)}°
        </div>
      </div>
      
      <p className="text-2xl text-center mb-8 capitalize">
        {weather.weather[0].description}
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <p className="opacity-70">Feels Like</p>
          <p className="text-2xl">{weather.main.feels_like}°C</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-70">Humidity</p>
          <p className="text-2xl">{weather.main.humidity}%</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-70">Wind Speed</p>
          <p className="text-2xl">{weather.wind.speed} m/s</p>
        </div>
        <div className="space-y-2">
          <p className="opacity-70">Pressure</p>
          <p className="text-2xl">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay; 