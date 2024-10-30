import { useState } from 'react'
import './App.css'

function App() {

  function getLocal(){

    if(localStorage.getItem('todos')){
      return JSON.parse(localStorage.getItem('todos'));
    }
    return[];
  };

  const [todos, setTodos] = useState(getLocal());
  const [input, setInput] = useState("")


  const handleAdd = () => {

    setTodos((prevTodos)=>{
      const task = [...prevTodos, input];
      localStorage.setItem('todos', JSON.stringify(task));
      return task;
    })

  }

  return (
    <>

      <h1> Enter your items</h1>
      <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <button onClick={handleAdd}> Add</button>

      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}

      </ul>



    </>
  )
}

export default App
