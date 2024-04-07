import { useState } from "react";
import currentWeather from "./hooks/currentWeather";
import InputBox from "../components/Inputbox";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [condition, setCondition] = useState("");
  const [speed, setSpeed] = useState("");

  const weatherInfo = currentWeather(city);

  function getTemp() {
    setTemp(weatherInfo["temp_c"]);
  }

  function getCondition() {
    setCondition(weatherInfo["condition"]["text"]);
  }

  function getSpeed() {
    setSpeed(weatherInfo["wind_kph"]);
  }

  function getWeather() {
    getTemp();
    getCondition();
    getSpeed();
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <p className="text-3xl text-white font-mono bg-blue-600 flex justify-center shadow-lg">
        City:{city.toUpperCase()}
        <br />
        Temperature:{temp} Degrees Celsius
        <br />
        Condition: {condition}
        <br />
        Wind Speed: {speed} Km/h
      </p>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getWeather();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                cityName={city}
                onCityChange={(cityName) => {
                  setCity(cityName);
                }}
              ></InputBox>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Get weather Info in {city.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
