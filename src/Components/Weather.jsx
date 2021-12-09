import React, { useState, useEffect } from "react";

const Weather = (props) => {


    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=d2ea12a3e650523d00a03398b8056363`

    console.log(url)

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const temp = data.main.temp;
    })
    .catch((err) => err)

    useEffect(() => {
        
    }, [])


    // const kelvintoFar = (kelvin) => {
    //     return (kelvin - 273.15) * 9/5 + 32;
    // }

const farenheit = ((temp - 273.15) * 9/5 +32)

    return(
        <div>
            <h1>{farenheit}</h1>
        </div>
    )
}

export default Weather;