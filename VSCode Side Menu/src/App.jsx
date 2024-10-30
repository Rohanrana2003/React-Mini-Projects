
import './App.css'
import { useState } from 'react'

import explorer from './data/Folderdata'
import Main from './components/Main';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <>

    <Main  explorer={explorerData}/>
    </>
  )
}

export default App
