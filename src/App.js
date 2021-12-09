import React, { useState, useEffect} from 'react'
import DisplayApis from './Components/DisplayApis'

function App () {

  const[lat, setLat] = useState('');
  const[lon, setLon] = useState('');

  useEffect(() => {

    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }

    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      
    });
    // console.log(lat, lon);
  }, []);



  return(
    <div>
      <DisplayApis lat={lat} lon={lon} />
    </div>
  )
}

export default App;