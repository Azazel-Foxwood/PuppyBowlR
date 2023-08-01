import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import './App.css'
import Header from './components/Header'
// import SearchBar from './components/SearchBar'


function App() {
  const [players, setPlayers] = useState([])
  return (
    <>
    {/* <AllPlayers/> */}
    <Header players={players} setPlayers={setPlayers}/>
    <div className='App'>
      <Routes>
      <Route path='/' element= {<AllPlayers players={players} setPlayers={setPlayers}/>}/>
      <Route path='/players/:id' element={<SinglePlayer/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
