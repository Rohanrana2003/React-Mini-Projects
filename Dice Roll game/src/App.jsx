import { useState } from 'react'
import './App.css'
import First from './components/First'
import Gameplay from './components/Gameplay';

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  const togglePlay = () =>{
    setGameStarted((prev)=>!prev);
  }

  return (
    <>

    {
      gameStarted ? <Gameplay/> : <First toggle = {togglePlay}/>
    }
    
    </>
  )
}

export default App
