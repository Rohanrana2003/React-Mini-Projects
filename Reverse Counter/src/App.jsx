import { useState } from 'react'
import './App.css'
import First from './components/First'
import Second from './components/Second'

function App() {
  const [page, setPage] = useState(false)
  
  const togglePage = ()=>{
    setPage((prev)=>!prev)

  }

  return (
    <>

    {!page ? <First toggle={togglePage} /> :  <Second/>}
      
      
      
    </>
  )
}

export default App
