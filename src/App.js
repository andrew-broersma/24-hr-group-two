import React, {useState, useEffect} from 'react';
import DisplayApis from './Components/DisplayApis';

function App() {

  const [location, setLocation] = useState("");


  const fetchLocation = () => {

    let url = "http://ip-api.com/json/"

    fetch(url)
    .then((res) => res.json())
    .then((data) => setLocation(data))
    .catch((err) => err)

  }
  console.log(location)

  useEffect(() => {
    fetchLocation();
  }, [])

  return (
    <div >
      <DisplayApis location={location}/>
    </div>
  );
}

export default App;
