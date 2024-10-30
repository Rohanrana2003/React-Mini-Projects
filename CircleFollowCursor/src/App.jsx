
import { useCallback, useRef } from 'react';
import './App.css'


const throttle = (fn, delay) =>{

  let timer;

  return(...args)=>{
    if(!timer){
      fn(...args)
      timer = setTimeout(() => {
        timer=null;
      }, delay);
    }
  }
}

const debounce = (fn, delay) =>{

  let timer;

  return(...args)=>{
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

function App() {
  const circleRef = useRef();

  const handleMove =(e)=>{

    let circle = circleRef.current;
    let mid = circle.getBoundingClientRect().width/2;
    
    let posX = e.clientX;
    let posY = e.clientY;

    circle.style.top  = posY - mid + "px";
    circle.style.left = posX - mid + "px";

  }

  const handleMoveChange = useCallback(throttle(handleMove,[100]))
  
  return (
    <>
    <div onMouseMove={handleMoveChange} className="container">
        <div ref={circleRef} className='circle'></div>
    </div>

    </>
  )
}

export default App
