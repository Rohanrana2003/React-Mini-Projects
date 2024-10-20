/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

function App() {

  const [color, setColor] = useState(null);
  const [result, setResult] = useState(null);
  const [allColors, setAllColors] = useState(null);

  function getRandomColor() {
    for (let i = 0; i < 10; i++) {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
      return randomColor;
    }
  }

  const pickColor = () =>{
    let actualColor = getRandomColor();
    setColor(actualColor);
    setAllColors([actualColor, getRandomColor(), getRandomColor()].sort(()=>0.5 - Math.random()))
  }

  useEffect(() => {
    pickColor();
  }, [])

  function handleClick(e) {
    if (e.target.innerText === color){
      setResult('Correct');
      pickColor();
    }
    else{
      setResult('Incorrect');
    }  
  }

  return (
    <div className="w-screen h-screen ">

      <div style={{ background: color }} className={`absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[30vw] h-[30vh]`}></div>

      <div className=" flex justify-center w-screen items-center flex-row gap-10 relative top-[60%]">
        {
          allColors && allColors.map((color, i) => (
            <p onClick={handleClick} key={i}
              className="bg-slate-500 text-white px-6 py-2 border-1 border-black border cursor-pointer">{color}</p>
          ))
        }
      </div>

      {result && <p className={`font-bold w-screen text-center text-3xl text-${result == 'Correct' ? 'green-400' : 'red-500'}`} >{result}</p>}

    </div>
  )
}

export default App
