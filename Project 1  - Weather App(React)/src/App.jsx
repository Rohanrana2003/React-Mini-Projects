
import './App.css'
import {useState} from 'react'


function App() {
  const [city, setCity] = useState('');

  const handleSearch = () =>{

  }


  return (

    <div className="app h-[100vh] bg-slate-900 text-white">

      <div className="main flex flex-col justify-center p-8 items-center absolute 
            translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-[rgb(7,240,182)] min-h-28 min-w-72 rounded-2xl">

        <div className="top">

          <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}
                 className=" outline-none border-none h-11 p-7 m-8 rounded-3xl w-[300px] text-black"/>
                 
          <button className="bg-slate-900 px-5 py-2 rounded-2xl" onClick={handleSearch}>Search</button>

        </div>

        <img src="images/clear.png" alt="weather-img" 
              className='weather-img mt-[-25px]'
        />

        <h1 className='temprature text-[60px] mt-[-30px] mb-6'>26°C</h1>

        <div className="temprature-details flex justify-between items-center w-full px-10">

          <div className="humidity flex gap-2">
            <img src="images/humidity.png" alt="wind-img"
                className='h-10 mt-4 '
             />

            <div className="humidity-details flex flex-col font-semibold">
              <h1 className='text-[30px] mb-[-10px]'>79%</h1>
              <p>Humidity</p>
            </div>
            
          </div>

          <div className="wind flex gap-2">
            <img src="images/wind.png" alt="wind-img"
                className='h-10 mt-3'
             />

            <div className="wind-details flex flex-col font-semibold  ">
              <h1 className='text-[30px] mb-[-10px]'>10km/h</h1>
              <p>Wind speed</p>
            </div>
            
          </div>

        </div>


      </div>

    </div>

    
  )
}

export default App
