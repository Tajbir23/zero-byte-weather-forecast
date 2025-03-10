# Weather Forecast App

This is a responsive web application that integrates with the OpenWeatherMap API to display current weather conditions for a specified location. By default, it shows the weather for Kurigram, and users can search for other cities to view detailed weather information.

## Features

- **Default Weather Display**: Shows weather information for Kurigram on initial load.
- **City Search**: Allows users to search for weather data by city name.
- **Responsive Design**: Adapts to various screen sizes for optimal viewing on all devices.
- **Dynamic Animations**: Includes animations for a more engaging user experience.

## Live Demo

Check out the live application [here](https://zero-byte-weather-app-tajbir.web.app/).

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd weather-forecast-app
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

### Environment Setup

Create a `.env` file in the root of your project and add your OpenWeatherMap API key:

```plaintext
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### Running the Application

To start the application, run:

```bash
npm start
```

This will start the development server and open the application in your default web browser.

### Usage

- **Search for a City**: Enter a city name in the input field and click "Search" to get the weather data.
- **View Weather Details**: The application displays temperature, humidity, wind speed, and more.

### Note

This application is for demonstration purposes and uses a free API key, which may have limitations on the number of requests.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data.
- [React](https://reactjs.org/) for the front-end framework.
- [Tailwind CSS](https://tailwindcss.com/) for styling and responsive design.