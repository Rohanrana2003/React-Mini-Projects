import './App.css'
import Input from './components/Input'
import Items from './components/Items'
import { useState } from 'react'


function App() {

  const [taskList, setTaskList] = useState([]);

  console.log(taskList)
  return (
    <>
      <div className='flex justify-between flex-col items-center gap-10 mt-7 mb-10'>

        <h1 className='text-3xl font-bold'>02 - Add Tasks</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>

      <div className="flex flex-col px-4 sm:grid sm:grid-cols-3 gap-4 bor sm:px-8 md:px-10">
            {taskList.map((task, index) =>
              <Items
                task={task}
                key={index}
                index = {index}
                taskList={taskList} 
                setTaskList={setTaskList}
              />
            )}
      </div>



    </>
  )

}

export default App
