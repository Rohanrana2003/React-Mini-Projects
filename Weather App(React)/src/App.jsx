
import './App.css'
import { useState } from 'react'


function App() {
  const [city, setCity] = useState('');
  const [details, setDetails] = useState('');


  const fetchData = async () => {

    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + city + '&appid=22b638732b35fb9585581ab856753977#');
    const response = await data.json();
    setDetails(response);
  }
  
  return (

    <div className="app h-[100vh] bg-slate-900 text-white">

      <div className="main flex flex-col justify-center p-8 items-center absolute 
            translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-[rgb(7,240,182)] min-h-28 min-w-72 rounded-2xl">

        <div className="top flex items-center">

          <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
            className=" outline-none border-none h-11 p-7 m-4 bg-slate-900 rounded-3xl w-[300px] text-[24px] text-white" />
 
          <button className="bg-white  px-4 py-[15px] rounded-full" onClick={fetchData}>
            <img src="images/search.png" alt="search-img"  className='w-6 invert' />
          </button>

        </div>
        
        {details.message && <h1 className='font-bold text-[40px] py-10 text-slate-900'>City Not Found</h1>}
        
        { details.main   &&  <div className='details flex flex-col items-center'>

          <img src={`images/${details.weather[0].main==='Haze'? 'clear':details.weather[0].main}.png`} alt="weather-img"
            className='weather-img mt-[-25px]'
          />

          <h1 className='temprature text-[60px] mt-[-30px] mb-6 text-slate-900 font-semibold'>{Math.ceil(details.main.temp)}°C</h1>

          <h2 className='text-[40px] mt-[-30px] mb-6 text-slate-900 font-semibold'>{details.name}</h2>

          <div className="temprature-details flex justify-between gap-20 items-center w-full px-10">

            <div className="humidity flex gap-2">
              <img src="images/humidity.png" alt="wind-img"
                className='h-10 mt-4 invert'
              />

              <div className="humidity-details flex flex-col font-semibold">
                <h1 className='text-[30px] mb-[-10px] text-slate-900'>{Math.ceil(details.main.humidity)}%</h1>
                <p className='text-slate-900'>Humidity</p>
              </div>

            </div>

            <div className="wind flex gap-2">
              <img src="images/wind.png" alt="wind-img"
                className='h-10 mt-3 text-slate-900 invert'
              />

              <div className="wind-details flex flex-col font-semibold  ">
                <h1 className='text-[30px] mb-[-10px] text-slate-900'>{details.wind.speed}km/h</h1>
                <p className='text-slate-900'>Wind speed</p>
              </div>

            </div>

          </div>


        </div>
        }




      </div>

    </div>


  )
}

export default App
