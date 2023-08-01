import {Routes, Route} from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import './App.css'

function App() {
  return (
    <>
    {/* <AllPlayers/> */}
    <Routes>
      <Route path='/' element= {<AllPlayers/>}/>
      <Route path='/players/:id' element={<SinglePlayer/>}/>
    </Routes>
    </>
  )
}

export default App
