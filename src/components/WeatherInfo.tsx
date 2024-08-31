import React from "react";

type WeatherInfoProps = {
  data: any;
};

const WeatherInfo: React.FC<WeatherInfoProps> = ({ data }) => {
  return (
    <div className="text-center d-flex">
      <div className="col-6">
        <p className="mb-2 fs-6">
          Temperature: {Math.round(data.main.temp_max)} °C
        </p>
        <p className="mb-2 fs-6">Humidity: {data.main.humidity}%</p>
        <p className="mb-2 fs-6">Speed: {data.wind.speed} km/s</p>
        <p className="mb-2 fs-6">Visibility: {data.visibility} km/s</p>
      </div>

      <div className="col-6">
        <p className="mb-2 fs-6">Country code: {data.sys.country}</p>
        <p className="mb-2 fs-6">Chance of rain: {data.clouds.all}%</p>
        <p className="mb-2 fs-6">Pressure: {data.clouds.all} h.Pa</p>
        <p className="mb-2 fs-6">Location address: {data.name}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
