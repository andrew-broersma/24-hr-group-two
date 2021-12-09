import React, {useState, useEffect} from "react";

const NASA = (props) => {

    const [imgLoc, setImgLoc] = useState('');

    useEffect(() => {
    let baseUrl = 'https://api.nasa.gov/planetary/earth/assets?'
    let key = "NtWLeBK7GzAuLtezLszttTOy3zNB4KodhFU0mWX9"
    let url = `${baseUrl}lon=${props.lon}&lat=${props.lat}&date=2020-12-20&api_key=${key}`
    // console.log(url);


        fetch(url)
        .then((res) => res.json())
        .then((data) => setImgLoc(data.url))
        .catch((err) => console.log(err))
    }, [props])

const NASA = () => {

    return(
        <div id="displayAPI">
            <img src={imgLoc} alt="" style={{width: '200px', height: '200px'}}/>
        </div>
    )
}

export default NASA;