import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [longitude, setLongtitude] = useState("")
  const [latitude, setLatitude] = useState("")


  // setting category
  const [category,setCategory] = useState("")


  // console.log(location)

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      setLongtitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);


  const handleSendInfo = async() =>{
    const resp =await axios.post("https://google-map-backend-7oji.onrender.com/getinfo",{
      long:longitude,
      lati:latitude
    })
    setCategory(resp.data.category)
    console.log(resp.data.category)
  }

  useEffect(()=>{
    handleSendInfo()
  },[longitude,latitude])




  // implementing new api

  // const CLIENT_ID = 'GO4WHBFZIGBTFHKR4DXHHWQPXISNPW3XCCWJVZWJXYG3ZSSU';
  // const CLIENT_SECRET = '0EHGSLY03AM0BMQ21QWWUPWPJPEJZ2SS1OOO11SBJHGRADSE';
  // const API_URL = 'https://api.foursquare.com/v2/venues/search';


  // // Example function to search for recommended venues near a location
  // async function searchVenues(latitude, longitude) {
  //   const today = new Date();
  //   const date = today.toISOString().slice(0, 10).replace(/-/g, ''); // Format: YYYYMMDD

  //   const url = `${API_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${date}&ll=${latitude},${longitude}`;

  //   try {
  //     const response = await fetch(url);
  //     console.log(response)
  //     const data = await response.json();
  //     // Handle the data, e.g., display recommended venues
  //     console.log(data.response.groups[0].items);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // searchVenues(latitude, longitude)



  return (
    <>
      <p>
        Longitutde : {longitude}
        <br />
        Latitude : {latitude}
      </p>

      Category : {category}



    </>

  )
}

export default App
