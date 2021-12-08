import React, { useState, useEffect } from "react";

const Weather = (props) => {

    // const[lat, setLat] = useState(0);
    // const[lon, setLon] = useState(0);

    
    let url = 'api.openweathermap.org/data/2.5/weather?lat=' + props.lat + '&lon=' + props.lon + '&appid=d2ea12a3e650523d00a03398b8056363'

    console.log(url)

    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => err)
    // setLat(props.location.lat)
    // setLon(props.location.lon)

    useEffect(() => {

    }, [])

    return(
        <div>
            
        </div>
    )
}

export default Weather;