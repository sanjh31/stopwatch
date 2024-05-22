import React, { useEffect, useRef, useState } from 'react'
import './stopwatch.css'

const Stopwatch = () => {
    const [isRunning, SetIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalref = useRef(null)

useEffect(()=>{
    if(isRunning){
        intervalref.current= setInterval(() => {
            setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
        }, 1000);
    }
    else{
        clearInterval(intervalref.current)
    }
  
    return () => clearInterval(intervalref.current);

},[isRunning])


const handleStart = ()=>{
SetIsRunning(true);
}

const handleStop = () =>{
    SetIsRunning(false);
}


const handleReset = () =>{
    SetIsRunning(false);
    setElapsedTime(0);
}
  
const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

return (
<>
<div className='stopwatchtime'>
<h1>{formatTime(elapsedTime)}</h1>
</div>

<div className='controls'>
    <div><button className='Start' onClick={handleStart}>Start</button></div>
    <div><button className='Stop' onClick={handleStop}>Stop</button></div>
    <div><button className='Reset' onClick={handleReset}>Reset</button></div>
</div>

</>

  )
}

export default Stopwatch