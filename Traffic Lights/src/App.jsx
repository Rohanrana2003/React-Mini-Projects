import './App.css'
import { useEffect, useRef } from 'react'

function App() {

  const red1 = useRef();
  const yellow1 = useRef();
  const green1 = useRef();


  useEffect(() => {

    setRed();
    setYellow();
    setGreen();

  }, [])

  const setRed = () => {
    setInterval(() => {
      red1.current.classList.toggle('red')
    }, 4000);
  }

  const setYellow = () => {
    setInterval(() => {
      yellow1.current.classList.toggle('yellow')
    }, 500);
  }

  const setGreen = () => {
    setInterval(() => {
      green1.current.classList.toggle('green')
    }, 3000);
  }

  return (
    <>

      <div className="lights">

        <div ref={red1} className="light red"></div>

        <div ref={yellow1} className="light yellow"></div>

        <div ref={green1} className="light green"></div>

      </div>

    </>
  )
}

export default App
