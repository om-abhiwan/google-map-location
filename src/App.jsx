import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [longitude, setLongtitude] = useState("")
  const [latitude, setLatitude] = useState("")


  // setting category
  const [category, setCategory] = useState("")
  // const [hit, setHit] = useState(0)



  // console.log(location)

  useEffect(() => {
    // Fetch geolocation data based on IP address
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        // Extract latitude and longitude from the response data
        const latitude = data.latitude;
        const longitude = data.longitude;
        console.log(latitude)
        console.log(longitude)
        // Update latitude and longitude state variables
        setLatitude(latitude);
        setLongtitude(longitude);
      })
      .catch(error => {
        console.error('Error fetching geolocation data:', error);
      });
  }, []);




  // useEffect(() => {
  //   const watchId = navigator.geolocation.watchPosition((position) => {
  //     setLongtitude(position.coords.longitude);
  //     setLatitude(position.coords.latitude);
  //   });

  //   return () => {
  //     navigator.geolocation.clearWatch(watchId);
  //   };
  // }, []);


  const handleSendInfo = async () => {

      const resp = await axios.post("https://google-map-backend-7oji.onrender.com/getinfo", {
      // const resp = await axios.post("http://localhost:3001/getinfo", {
        long: longitude,
        lati: latitude
      })
      setCategory(resp.data.category)
      setHit(resp.data.left)
      console.log(resp)
      console.log(resp.data.category)

  }

  useEffect(() => {
    handleSendInfo()
  }, [longitude, latitude])




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


    

      <h4>
        Longitutde : {longitude}
        <br />
        Latitude : {latitude}
      </h4>

      <h4>
        Category : {category}
      </h4>



    </>

  )
}

export default App
