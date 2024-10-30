/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [value, setValue] = useState('Start');
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time + 10 )
      }, 10);
    }
    else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time])


  const handleStart = () => {

    if (isRunning) {
      setIsRunning(false);
      setValue("Start");

    } else {
      setIsRunning(true)
      setValue("Stop");

    }
  }

  const handleReset = () => {
    setTime(0);
    setIsRunning(false)
  }
  return (
    <>
      <div className="container">

        <h1>01-Stopwatch</h1>


        <h2>
          <span>{("0" + Math.floor((time / 60000) % 60))}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60))}:</span>
          <span>{"0" + ((time / 10) % 100)}</span>
        </h2>

        <div className='btn'>
          <button onClick={handleStart} >{value}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
