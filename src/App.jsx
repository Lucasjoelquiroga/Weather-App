import { useState, useEffect } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'

function App() {
 
  
  const [coords, setcoords] = useState()
  

  useEffect(() => {
    const success = pos => {
     
      const latlon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setcoords(latlon)
    }
    navigator.geolocation.getCurrentPosition(success)
  },[])
  


  return (
    <div className="App" >
     
      <CardWeather 
      lon ={coords?.lon}
      lat ={coords?.lat}
     
      />
    </div>
  )
}

export default App
