import { useState, useEffect } from "react";

function currentWeather(city) {
  const [weather, setWeather] = useState({});
  const [text, setText] = useState({});

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=a6eb45a48ec04a7bb0b133146242603&q=${city}`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res["current"]);
        setText(res["condition"]);
        console.log(weather);
      });
  }, [city]);
  return weather;
}

export default currentWeather;
