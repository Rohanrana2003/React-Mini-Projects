/* eslint-disable react/prop-types */
import { useState } from "react"




function Input({taskList, setTaskList}) {

    const [data, setData] = useState('');

    const handleClick = (e) =>{
        e.preventDefault();
        setTaskList([...taskList, data]);
        setData("");
    }

    return (
        <div className="flex items-center gap-5">
            <input 
                className="border-cyan-600 border-[2px] rounded-md h-9 px-4 py-4 outline-none " 
                value={data} 
                type="text" 
                onChange={(e)=>setData(e.target.value)} 
                placeholder="Enter any task" />

            <button 
                className="bg-purple-500 text-white py-1.5 px-3 rounded-md"
                onClick={handleClick}> Add</button>
        </div>
    )
}

export default Input
