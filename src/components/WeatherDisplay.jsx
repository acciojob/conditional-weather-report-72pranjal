import React from 'react'

function WeatherDisplay({Data}) {
  return (
    <div>
        <h1>WeatherDisplay</h1>
        <p className={Data.temperature > 20 ? "red" : "blue"}>Temperature: {Data.temperature}</p>
        <p>Conditions: {Data.conditions}</p>
    </div>
    
  )
}

export default WeatherDisplay