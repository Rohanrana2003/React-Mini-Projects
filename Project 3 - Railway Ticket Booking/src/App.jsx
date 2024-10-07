import './App.css'
import { useState } from 'react'
import { rawTrainsData } from './constants';

function App() {

  const [selectedDate, setSelectedDate] = useState('');
  const [trainData, setTrainData] = useState(rawTrainsData);
  const [selectedTrain, setSelectedTrain] = useState(null);


  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  }

  const availableTrains = trainData.filter(train => train.date === selectedDate);

  const handleBooking = (trainId, index) =>{
    setTrainData((prevData)=>
      prevData.map((train)=>{
            if(train.trainId === trainId){
              const updatedSeats = train.seats.map((seat, i)=>{
                if(i === index ){
                  return {...seat, isBooked:true}
                }
                return seat;
              })
              return {...train, seats:updatedSeats, availableSeats: train.availableSeats-1};
            }
            return train
      })
    )
  }

  return (
    <div className='w-[100%] h-[100vh] bg-[#242424] text-white p-40'>

      <h2 className='text-2xl '>Train Seat Booking System - Working solution</h2>

      {/* Date Picker */}
      <label>Select Date: </label>
      <input className='bg-[#111111] text-white' type="date" value={selectedDate} onChange={handleDateChange} />

      {
        selectedDate &&
        <div>
          Trains available on {selectedDate}:
          <br />

          <ul>
            {availableTrains.length === 0 ? (

              <p>No Trains Availabe</p>) : (

              availableTrains.map((train) => (

                <li key={train.trainId}>
                  {train.name} - Available Seats: {train.availableSeats}

                  <button onClick={() =>setSelectedTrain(train.trainId)}
                    className='bg-[#111111] p-2 rounded-lg m-2'>
                    View Seats
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      }

      {
        selectedTrain &&
        <div>
          <h2>
            Seats for Train: {" "}
            {trainData.find(train => train.trainId === selectedTrain)?.name}
          </h2>

          <div className="seat-layout flex gap-10 w-[200px] flex-wrap">
            {trainData.find(train => train.trainId === selectedTrain).
              seats.map((seat, i) => (
                <button key={i} onClick={()=>!seat.isBooked && !seat.isPWD && handleBooking(selectedTrain , i)}
                  className={`bg-slate-500 w-10 h-10 ${ seat.isBooked ? 'booked' : seat.isPWD ? 'reserved-pwd' : '.booked'}`}
                >
                  {seat.isBooked ? 'X' : seat.isPWD ? 'PWD' : 'O'}
                </button>

              ))}

          </div>

        </div>

      }


    </div>
  )
}

export default App
