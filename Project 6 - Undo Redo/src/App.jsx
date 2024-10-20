import { useState } from "react";



function App() {

  const [points, setPoints] = useState([])

const handleClick = (e) =>{
  const {clientX, clientY} = e;
  setPoints([...points, {x:clientX, y:clientY}]);

}
const handleUndo = () =>{
  console.log(points)
  setPoints([...points, points.pop()]);
}

  return (
  <>
    <button onClick={handleUndo}
      className="bg-slate-400 text-white rounded-lg px-2 py-1 border-black m-[30px]">Undo</button>

    <div onClick={handleClick} className="container min-w-full h-[90vh] bg-slate-800">

      {
        points && points.map((point, i)=>(
          <div key={i} className="circle" 
          style={{
            top:point.y + 'px',
            left:point.x + 'px',
          }}>
          </div>
        ))
      }
    </div>
  </>

  )
}

export default App
