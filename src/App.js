import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './components/Home'
import AirportDetails from './components/AirportDetails'
import './App.css'


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/airport/:id' Component={AirportDetails} />
      </Routes>
    </BrowserRouter>
  )
}

export default App