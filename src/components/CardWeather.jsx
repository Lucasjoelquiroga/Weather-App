import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

const CardWeather = ({lat, lon}) => {
    const [weather, setweather] = useState()
    const [temperture, setTemperture] = useState()
    const [isCelsius, setIsCelsius] = useState(true)
    const [isLoading, setisLoading] = useState(true)



    useEffect(() => {
        if(lat){
            const apiKey = `c9d1adc2458be79d0f5109676289fe4b`
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
axios.get(url)
.then(res => {
    setweather(res.data)
    const temp = {
        celsius:`${Math.round(res.data.main.temp - 273.15)}°c`,
       farenheit: `${Math.round((res.data.main.temp - 273.15) * 9/ 5 + 32)} °f`
    }
    setTemperture(temp)
    setisLoading(false)
} )
.catch(err => console.log(err))
        }
    },[lat, lon])
    console.log(weather)
   

    const handleClick = () => setIsCelsius(!isCelsius)

if (isLoading) {
    return <LoadingScreen />
} else {
    return (
     <>   
    <article className="article" >
        
    <h1 className="titulo">Weather App</h1>
    <h2 className="country">{`${weather?.name} ${weather?.sys.country}`}</h2>
    <div className="contenedor-img">
    <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png
    `} alt="imagen del tirempo" />

        
       <div className="contenedor-descripcion">
        <h3 className="descripcioncion-tiempo">&#34;{weather?.weather[0].main}&#34;</h3>
        <ul className="lista">
            <li><strong><span>Wind Speed:</span></strong> {weather?.wind.speed}m/s</li>
            <li><strong><span>Clouds:</span></strong> {weather?.clouds.all} %</li>
            <li><strong><span>Pressure:</span></strong> {weather?.main.pressure} hPa</li>
        </ul>
    
    
       </div>
    </div>
    <div className="contenedor-btn">
    <h2 className="gardos">{isCelsius ? temperture?.celsius : temperture?.farenheit}</h2>
    <button className="boton" onClick={handleClick}>{isCelsius ? 'Change to °f' : 'Change to °c'} </button>
    </div>

    </article>
    </>
    )

}




}
export default CardWeather