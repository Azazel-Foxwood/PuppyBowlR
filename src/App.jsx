import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import './App.css'
// import SearchBar from './components/SearchBar'


function App() {
  const [players, setPlayers] = useState([])
  return (
    <>
    {/* <AllPlayers/> */}
    
    <Routes>
      <Route path='/' element= {<AllPlayers players={players} setPlayers={setPlayers}/>}/>
      <Route path='/players/:id' element={<SinglePlayer/>}/>
    </Routes>
    </>
  )
}

export default App
