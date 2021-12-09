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
      console.log(position)
    });
  }, []);

  

  return(
    <div>
      <DisplayApis lat={lat} lon={lon} />
    </div>
  )
}

export default App;



// import React, {useState, useEffect} from 'react';
// import DisplayApis from './Components/DisplayApis';


// function App() {

//   const [location, setLocation] = useState("");
//   const[lat, setLat] = useState(0);
//   const[lon, setLon] = useState(0);

//   useEffect(() => {  
//   const fetchLocation = () => {



//     let url = "http://ip-api.com/json/"

//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       setLocation(data);
//       setLat(data.lat);
//       setLon(data.lon);
//     })
//     .catch((err) => err)
    
//   }
  
//   console.log(location)
//   console.log(lat)
//   console.log(lon)
  
  
//     fetchLocation();
//   }, [setLon])

//   return (
//     <div >
//       <DisplayApis location={location} lat={lat} lon={lon} />
//     </div>
//   );
// }

// export default App;
