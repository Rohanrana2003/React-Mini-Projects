import ItemList from './ItemList'
import {useEffect, useState } from 'react';

function App() {

  const [listData, setListData] = useState([])
  const [input, setInput] = useState('');

  useEffect(()=>{

    const storedTodo = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodo)

    if(storedTodo){
      setListData(storedTodo);
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listData));
  }, [listData]);

  const handleClick = () => {
    if (input === '') {
      alert('Enter a value');
      return;
    }

    setInput('');
    setListData([...listData, input]);
  
  }

  return (
    <div className="app bg-[rgb(46,34,109)] h-[100vh] flex justify-center ">

      <div className="main  bg-white mt-[100px] px-8 py-4 h-fit max-h-[500px] pb-10 rounded-xl w-[450px]">

        <h1 className='font-bold text-3xl py-5'>ToDo List</h1>

        <div className='flex justify-center'>

          <input
            className='bg-slate-400 w-[100%] outline-none border-none rounded-3xl h-12 mb-5 px-5 relative mr-[-50px] '
            type="text" value={input} onChange={(e) => setInput(e.target.value)} />

          <button
            onClick={handleClick}
            className='bg-orange-700 text-white  h-12 px-10 rounded-full z-10'
          >Add</button>

        </div>



        <ItemList listData={listData} setListData={setListData} />

      </div>


    </div>
  )
}

export default App
