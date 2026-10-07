import './Weather.css';

const mockWeatherData = {
  location: "Addis Ababa",
  current: {
    temperature: "24°C",
    condition: "Partly cloudy",
    icon: "⛅",
    rainProbability: "70%",
    humidity: "65%",
  },
  advice: {
    title: "Farming Advice",
    alert: "⚠️ Rain expected tomorrow.",
    recommendation: "Consider delaying fertilizer application until conditions improve.",
  },
  forecast: [
    { id: "f1", day: "Mon", date: "Oct 8", condition: "Rainy", icon: "🌧️", tempHigh: "22°C", tempLow: "15°C", rainChance: "80%" },
    { id: "f2", day: "Tue", date: "Oct 9", condition: "Sunny", icon: "☀️", tempHigh: "26°C", tempLow: "13°C", rainChance: "10%" },
    { id: "f3", day: "Wed", date: "Oct 10", condition: "Cloudy", icon: "☁️", tempHigh: "23°C", tempLow: "14°C", rainChance: "30%" },
    { id: "f4", day: "Thu", date: "Oct 11", condition: "Showers", icon: "🌦️", tempHigh: "21°C", tempLow: "15°C", rainChance: "60%" },
    { id: "f5", day: "Fri", date: "Oct 12", condition: "Sunny", icon: "☀️", tempHigh: "25°C", tempLow: "12°C", rainChance: "0%" },
    { id: "f6", day: "Sat", date: "Oct 13", condition: "Partly Cloudy", icon: "⛅", tempHigh: "24°C", tempLow: "14°C", rainChance: "20%" },
    { id: "f7", day: "Sun", date: "Oct 14", condition: "Sunny", icon: "☀️", tempHigh: "27°C", tempLow: "13°C", rainChance: "5%" },
  ],
};

export default function Weather() {
  const { location, current, advice, forecast } = mockWeatherData;

  return (
    <div className="weather-container">
      <div className="weather-header">
        <h1 className="main-title">Local Weather</h1>
        <p className="sub-title">Real-time weather insights for {location}</p>
      </div>

      <div className="weather-hero-card">
        <div className="hero-primary">
          <div className="temp-display">
            {current.icon} {current.temperature}
          </div>
          <div className="condition-text">{current.condition}</div>
        </div>

        <div className="hero-stats">
          <div className="stat-group">
            <span className="stat-label">🌧 Rain</span>
            <span className="stat-value">{current.rainProbability}</span>
          </div>
          <div className="stat-group">
            <span className="stat-label">💧 Humidity</span>
            <span className="stat-value">{current.humidity}</span>
          </div>
        </div>
      </div>

      <div className="advice-card">
        <div className="advice-header">
          <span style={{ fontSize: '22px' }}>🌾</span>
          <h2 className="advice-title">{advice.title}</h2>
        </div>
        <p className="advice-alert">{advice.alert}</p>
        <p className="advice-recommendation">{advice.recommendation}</p>
      </div>

      <div className="forecast-section">
        <h2 className="forecast-title">7-Day Forecast</h2>
        
        <div className="forecast-grid">
          {forecast.map((day) => (
            <div key={day.id} className="forecast-card">
              <p className="forecast-day">{day.day}</p>
              <span className="forecast-date">{day.date}</span>
              <span className="forecast-icon">{day.icon}</span>
              <span className="forecast-condition">{day.condition}</span>
              <div className="forecast-temps">
                <span className="temp-high">{day.tempHigh}</span>
                <span className="temp-low">{day.tempLow}</span>
              </div>
              <span className="forecast-rain">💧 {day.rainChance}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}