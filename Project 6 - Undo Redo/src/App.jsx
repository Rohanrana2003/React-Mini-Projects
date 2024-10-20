import { useState } from "react";



function App() {

  const [points, setPoints] = useState([])
  const [popped, setPopped] = useState([]);

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  }
  
  const handleUndo = () => {
    let newArr = [...points];
    const poppedPoint = newArr.pop();
    if (!poppedPoint) return;
    setPopped([...popped, poppedPoint]);
    setPoints(newArr);
  }

  const handleRedo = () => {
    let newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    if (!poppedPoint) return;
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  }

  return (
    <div className="bg-slate-900">
      <button onClick={handleUndo} disabled={points.length === 0}
        className="bg-slate-400 text-white rounded-lg px-2 py-1 border-black m-[30px]">Undo</button>

      <button onClick={handleRedo} disabled={popped.length === 0}
        className="bg-slate-400 text-white rounded-lg px-2 py-1 border-black m-[30px]">Redo</button>

      <div onClick={handleClick} className="container min-w-full h-[90vh]">

        {
          points && points.map((point, i) => (
            <div key={i} className="circle"
              style={{
                top: point.y + 'px',
                left: point.x + 'px',
              }}>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default App
