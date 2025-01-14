import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Weather Patterns</h1>

      <div>
        <p>We love weather. Here are some of the weather patterns that have been interesting lately.</p>

        <div>
          <h3>Snow</h3>
          <ul>
            <li>All snowflakes are different</li>
            <li>It's cold</li>
            <li>It reflects light (and can give you a sunburn #rude)</li>
          </ul>
        </div>

        <div>
          <h3>Rain</h3>
          <ul>
            <li>Less fun than snow</li>
            <li>Better when warm outside</li>
            <li>Washed the itsy bitsy spider down the water spout</li>
            <li>If you don't get rain, you will have a drought</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
