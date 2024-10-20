import { useState, useEffect ,useRef } from "react"

function App() {
  const colorArray = [
    ['#9C334E', '#5607EE', '#C7DF67'],
    ['#FDFC03', '#A866FD', '#16D505'],
    ['#C90F57', '#C2F78C', '#75A2AB']
  ]
  
  const [colorIndex, setColorIndex] = useState(0);
  const [colors, setColors] = useState(colorArray[colorIndex])
  const [result, setResult] = useState(null)

  let randomColor = colors[Math.floor(Math.random()*3)];

  useEffect(() => {
    setColors(colorArray[colorIndex]);
  }, [colorIndex])
  

  const handleClick = (e)=>{
    if(e.target.innerText == randomColor){
      console.log(true);
      setResult('Correct')
    }
    else if(e.target.innerText != randomColor){
      console.log(false);
      setResult('Incorrect')
    }

    if(colorIndex < colorArray.length-1){
      setColorIndex(colorIndex + 1)
    }
  }

  return (
    <div className="w-screen h-screen ">

      <div style={{background:randomColor}} className={`absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%]  w-[30vw] h-[30vh]`}></div>

      <div className=" flex justify-center w-screen items-center flex-row gap-10 relative top-[60%]">
        {
          colors.map((color, i) => (
            <p key={i} onClick={handleClick}
              className="bg-slate-500 text-white px-6 py-2 border-1 border-black border cursor-pointer">{color}</p>
          ))
        }
      </div>

      {result && <p className="font-bold text-3xl">{result}</p>}

    </div>
  )
}

export default App
