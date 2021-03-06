import React, { useState, useEffect } from "react";
import {
    Col, 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText,
    Button 
} from 'reactstrap';

const Weather = (props) => {

    const[temp, setTemp] = useState('');
    const[tempHigh, setTempHigh] = useState('');
    const[tempLow, setTempLow] = useState('');
    const[forecast, setForecast] = useState('');
    const[far, setFar] = useState(true)


    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=d2ea12a3e650523d00a03398b8056363`
    
    useEffect(() => {
    
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

    }, [props])

const kToF = (convert) => {
    return (convert - 273.15) * 9/5 +32
}

const kToC = (convert) => {
    return convert - 273.15
}

    const tempToggle = (thl) => {
        return far ? kToF(thl) : kToC(thl)
    }

    const fSym = 'Fahrenheit'
    const cSym = 'Celsius'

    const degreeSym= () => {

        return far ? fSym : cSym
    }

//     function tempToggle()
// {
//     const toggle = document.getElementById("toggleButton");
//     if(toggle.value=="YES"){
//         toggle.value="NO";}
//     else if(toggle.value=="NO"){
//         toggle.value="YES";}
// }

/*
    if temp is F
    display C, change button value to F

    if temp is C
    display F, change button value to C

*/

    return(
        <div>
            <Col sm="4">
            <Card color="secondary">
                <CardBody>
                    <CardTitle tag="h2">Current Weather</CardTitle>
                    <CardSubtitle className="mb-2" tag="h6">
                        Temp:
                    </CardSubtitle>
                    <CardText>
                        {Math.round(tempToggle(temp))}&#176;
                    </CardText>
                    <CardSubtitle className="mb-2" tag="h6">
                        High:
                    </CardSubtitle>
                    <CardText>
                        {Math.round(tempToggle(tempHigh))}&#176;
                    </CardText>
                    <CardSubtitle className="mb-2" tag="h6">
                        Low:
                    </CardSubtitle>
                    <CardText>
                    {Math.round(tempToggle(tempLow))}&#176;
                    </CardText>
                    <CardSubtitle className="mb-2" tag="h6">
                        Forecast:
                    </CardSubtitle>
                    <CardText>
                        {forecast}
                    </CardText>
                    <div style={{alignContent: "center", display: "flex", justifyContent: "center"}}>
                        <Button onClick={(e) => {far ? setFar(false) : setFar(true)}} id="toggleButton" type="submit">{degreeSym()}</Button>
                    </div>
                </CardBody>
            </Card>
            </Col>
        </div>
    )
}

export default Weather;