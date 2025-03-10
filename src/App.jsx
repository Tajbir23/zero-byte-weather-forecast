import { useState, useEffect } from 'react'
import WeatherDisplay from './components/WeatherDisplay'
import WeatherForm from './components/WeatherForm'
import ErrorDisplay from './components/ErrorDisplay'

function App() {
  const [city, setCity] = useState('Kurigram')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // OpenWeatherMap API details
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

  // Function to fetch weather data for a given city
  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError(null)
    
    try {
      // Fetch weather data from the API
      const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
      )
      const data = await response.json()
      
      // Check if the response is successful
      if (!response.ok || data.cod !== 200) {
        throw new Error(data.message || 'Failed to fetch weather data')
      }
      
      setWeather(data)
    } catch (err) {
      setError('An error occurred while fetching weather data')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  // Fetch weather data for the default city on initial load
  useEffect(() => {
    fetchWeather(city)
  }, [])

  // Handle form submission to search for a new city
  const handleSearch = (e) => {
    e.preventDefault()
    if (!city.trim()) {
      setError('Please enter a location')
      return
    }
    fetchWeather(city)
  }

  const getWeatherBackground = (code) => {
    if (!code) return 'from-blue-400 to-blue-600'
    if (code >= 200 && code < 300) return 'from-gray-700 to-gray-900' 
    if (code >= 300 && code < 600) return 'from-gray-600 to-blue-700' 
    if (code >= 600 && code < 700) return 'from-blue-100 to-blue-300' 
    if (code >= 700 && code < 800) return 'from-gray-400 to-gray-600' 
    if (code === 800) return 'from-blue-400 to-blue-600' 
    if (code > 800) return 'from-blue-300 to-gray-400' 
    return 'from-blue-400 to-blue-600'
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getWeatherBackground(weather?.weather[0].id)} transition-colors duration-700`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Weather Forecast</h1>
          
          {/* Weather search form */}
          <WeatherForm city={city} setCity={setCity} fetchWeather={handleSearch} loading={loading} />
        </div>

        {/* Display error messages if any */}
        <ErrorDisplay error={error} />
        
        {/* Display weather data */}
        <WeatherDisplay weather={weather} />
      </div>
    </div>
  )
}

export default App
