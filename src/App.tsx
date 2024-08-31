import { useState, useEffect } from "react";
import { getWeatherData } from "./api";
import WeatherInfo from "./components/WeatherInfo";
import { Form } from "react-bootstrap";

function App() {
  const [city, setCity] = useState("Tashkent");
  const [weatherData, setWeatherData] = useState<any | null>(null);

  useEffect(() => {
    getWeatherData(city).then((data) => setWeatherData(data));
  }, [city]);

  return (
    <Form className="container mt-4 shadow p-3 mb-5 bg-body-tertiary rounded w-2 h-3">
      <Form.Group>
        <Form.Label className="fs-2 mb-2">Weather App</Form.Label>
        <Form.Control
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mb-3 w-2/3"
        ></Form.Control>
        {weatherData && <WeatherInfo data={weatherData} />}
      </Form.Group>
    </Form>
  );
}

export default App;
