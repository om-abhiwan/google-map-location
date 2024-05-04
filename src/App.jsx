
import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [longitude,setLongtitude] = useState("")
const [latitude,setLatitude] = useState("")

  console.log(location)

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      setLongtitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);


  return (
    <>
      <p>
        Longitutde : {longitude}
        <br />
        Latitude : {latitude}
      </p>
    </>

  )
}

export default App
