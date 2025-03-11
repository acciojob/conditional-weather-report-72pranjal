import React from 'react'

function WeatherDisplay({Data}) {
  return (
    <div>
        <h1>WeatherDisplay</h1>
        <span className={Data.temperature > 20 ? "red" : "blue"}>Temperature: {Data.temperature}</span> 
        <span>Conditions: {Data.conditions}</span>
    </div>
    
  )
}

export default WeatherDisplay