
import React, {useState, useEffect} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [temperature, setTemperature] = useState({ temperature: 0, conditions: "" })
  useEffect(()=> {
    const newTemperature = { temperature: 25, conditions: "Sunny" }
    setTemperature(newTemperature)
  }, [])
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weather={temperature} />
    </div>
  )
}

export default App
