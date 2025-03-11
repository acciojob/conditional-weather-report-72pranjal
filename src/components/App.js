
import React, {useEffect} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const Data = { temperature: 25, conditions: "Sunny" }
  useEffect(()=> {

  }, [])
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay Data={Data} />
    </div>
  )
}

export default App
