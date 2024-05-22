import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './Components/StopwatchComponent/Stopwatch'
import DigitalWatch from './Components/StopwatchComponent/DigitalWatchComponent/DigitalWatch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < DigitalWatch/>
  < Stopwatch/>

    </>
  )
}

export default App
