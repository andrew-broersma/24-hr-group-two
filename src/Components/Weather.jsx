import React, { useState, useEffect } from "react";

const Weather = (props) => {

    const[temp, setTemp] = useState('');
    const[tempHigh, setTempHigh] = useState('');
    const[tempLow, setTempLow] = useState('');
    const[forecast, setForecast] = useState('');

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=d2ea12a3e650523d00a03398b8056363`
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setTemp(data.main.temp);
        setTempHigh(data.main.temp_max);
        setTempLow(data.main.temp_min);
        setForecast(data.weather[0].main);
    })
    .catch((err) => err)
    console.log(temp);

    useEffect(() => {
        
    }, [])



    // const kelvintoFar = (kelvin) => {
    //     return (kelvin - 273.15) * 9/5 + 32;
    // }

// const farenheit = (temp - 273.15) * 9/5 +32

    return(
        <div>
            {/* <h2>Current Temp: </h2>
            <h3>{temp}</h3>
            <h2>High: </h2>
            <h3>{tempHigh}</h3>
            <h2>Low: </h2>
            <h3>{tempLow}</h3>
            <h2>Forecast: </h2>
            <h3>{forecast}</h3> */}
            
        </div>
    )
}

export default Weather;