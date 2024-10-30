/* eslint-disable react/prop-types */

function Items({task, index, taskList, setTaskList}) {


  const handleDelete = () =>{
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);

    // eslint-disable-next-line no-unused-vars
    setTaskList((currentTasks => currentTasks.filter(todo=> index === removeIndex)))

  }


  return (

    <div className="max-w-md rounded-xl border-[1px] border-black flex flex-col items-center justify-center  text-center text-lg">
        <p className="mt-4">{task}</p>
        <button
          className="bg-red-500 text-white rounded-lg py-1 px-2 my-4"
          onClick={handleDelete}
          > Delete</button>
    </div>

  )
}

export default Items
