import React from 'react';

const WeatherForm = ({ city, setCity, fetchWeather, loading }) => {
  return (
    <form onSubmit={fetchWeather} className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        className="w-full sm:w-96 px-6 py-3 text-lg rounded-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 outline-none border-2 border-white/30 focus:border-white/70 transition-all"
      />
      <button 
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default WeatherForm; 