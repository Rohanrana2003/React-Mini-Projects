import { useCallback, useState, useRef } from 'react'

import './App.css'

const throttle = (fn, delay) => {
  let timer;

  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  }
}

const debounce = (fn, delay) => {

  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

function App() {

  const [normalCount, setNormalCount] = useState(0);
  const [throttleValue, setThrottleValue] = useState(0);
  const [debounceValue, setDebounceValue] = useState(0);
  const currentDebounceValue = useRef(0);
  const currentThrottleValue = useRef(0);


  const handleChangeDebounce = () => {
    currentDebounceValue.current = currentDebounceValue.current + 1;
  }

  const handleChangeThrottle = () => {
    currentThrottleValue.current = currentThrottleValue.current + 1;

  }

  const handleNormalChange = () => {
    setNormalCount(prev => prev + 1);
    console.log(normalCount);
  }

  const handleDebounceChange = () => {
    setDebounceValue(currentDebounceValue.current);
     
  }

  const handleThrottleChange = () => {
    setThrottleValue(currentThrottleValue.current);

  }

  const handleThrottle = useCallback(throttle(handleThrottleChange, 500), []);
  const handleDebounce = useCallback(debounce(handleDebounceChange, 500), []);

  return (
    <>
      <div className='containers'>

        <div className="first-container">
          <div className="normal-gun" onClick={handleNormalChange}> Normal</div>
          <div className="bullet"></div>
          <span className='normalCount'>Kills: {normalCount}</span>
        </div>

        <div className="second-container">
          <div className="debounce-gun" onClick={() => { handleChangeDebounce(), handleDebounce() }}>Debounced</div>
          <div className="bullet"></div>
          <span className='debounceCount'>Kills: {debounceValue}</span>
        </div>

        <div className="third-container">
          <div className="throttle-gun" onClick={() => { handleChangeThrottle(), handleThrottle() }}>Throttle</div>
          <div className="bullet"></div>
          <span className='throttleCount'>Kills: {throttleValue}</span>
        </div>

      </div>
    </>
  )
}

export default App
