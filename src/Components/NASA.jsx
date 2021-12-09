import React, {useState, useEffect} from "react";

const NASA = (props) => {

    const [imgLoc, setImgLoc] = useState('');

    useEffect(() => {
    // let baseUrl = 'https://api.nasa.gov/planetary/earth/assets?'
    let key = "NtWLeBK7GzAuLtezLszttTOy3zNB4KodhFU0mWX9"
    let date = new Date();
    let urlDate = date.getFullYear()+ '-' +(date.getMonth() + 1) + '-' + date.getDate()
    // let url = `${baseUrl}lon=${Math.round(props.lon * 100) / 100}&lat=${Math.round(props.lat * 100) / 100}&date=${urlDate}&api_key=${key}`

    let possibleUrlFix = `https://api.nasa.gov/planetary/earth/imagery?lon=${Math.round(props.lon * 100) / 100}&lat=${Math.round(props.lat * 100) / 100}&date=${urlDate}&api_key=${key}`

    console.log(possibleUrlFix);


        fetch(possibleUrlFix)
        .then((res) => res.json())
        .then((data) => setImgLoc(data.url))
        .catch((err) => console.log(err))
    }, [props])

    return(
        <div id="displayAPI">
            <img src={imgLoc} alt="" style={{width: '200px', height: '200px'}}/>
        </div>
    )
}

export default NASA;