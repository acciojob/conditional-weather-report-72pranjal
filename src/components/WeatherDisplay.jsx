import React from 'react'

function WeatherDisplay({weather}) {
  const { temperature, conditions } = weather;
  const tempStyle = {
    color: temperature > 20 ? "red" : "blue",
    fontSize: "24px",
    fontWeight: "bold",
  }
  return (
    <div>
        <p style={tempStyle}>Temperature: {temperature}</p>
        <p>Conditions: {conditions}</p>
    </div>
    
  )
}

export default WeatherDisplay