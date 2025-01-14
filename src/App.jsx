import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const weatherData =         [
    {
      name: "Snow",
      facts: [
        "All snowflakes are different",
        "It's cold",
        "It reflects light (and can give you a sunburn #rude)"
      ]
    },
    {
      name: "Rain",
      facts: [
        "More fun than snow",
        "Better when warm outside",
        "Washed the itsy bitsy spider down the water spout",
        "If you don't get rain, you will have a drought"
      ]
    },
    {
      name: "Sunshine",
      facts: [
        "can DEFINITELY give you a sunburn"
      ]
    }
    ];
  return (
    <>
      <h1>Weather Patterns</h1>

      <div>
        <p>We love weather. Here are some of the weather patterns that have been interesting lately.</p>

        {weatherData.map(weather => <div key={weather.name}> 
          <h3>{weather.name}</h3>
          <ul>
            {weather.facts.map(f => <li>{f}</li>)}
          </ul>
        </div>)}
      </div>
    </>
  )
}

export default App
