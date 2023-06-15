
import './App.css';
import { useState } from 'react';



function App() {

  const [result, setResult] = useState([])
  const [long, Setlong] = useState('7');
  const [lat, Setlat] = useState('38');
  async function search() {

    console.log(lat, long)
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d4a0808ec2e611c081ee645697a19d43`

    const response = await fetch(url);
    let data = await response.json()
    console.log(data)
    setResult(data)



  }


  return (
    <div className='total'>
      <form action="/action_page.php">
        <label htmlFor="lat">Latitude:</label>
        <br />
        <input type="text" id="lat" name="lat" onChange={(e) => Setlat(e.target.value)} />
        <br />
        <label htmlFor="long">Longitude:</label>
        <br />
        <input type="text" id="long" name="long" onChange={(e) => Setlong(e.target.value)} />
        <br />
        <br />
        <input type="button" defaultValue="Submit" onClick={() => search()} />
      </form>
      {
        (result.length === 0) ? (
          <div className="container" id="wrong-input">
            <h2>Please enter correct input</h2>
          </div>
        ) : (
          <>
            <div className="container" id="correct-input">
              <h1>Country: {result.sys.country}</h1>
            </div>
            <div className="container" id="city">
              <h2>City: {result.name}</h2>
            </div>
            <div className="container" id="city">
              <h4>Weather: {result.weather[0].description}</h4>
            </div>
            <div className="container" id="city">
              <h4>Temp: {result.main.temp} K</h4>
            </div>
            <div className="container" id="city">
              <h4>Humidity: {result.main.humidity} %</h4>
            </div>
            <div className="container" id="city">
              <h4>Pressure: {result.main.pressure} hPa</h4>
            </div>


          </>


        )
      }
    </div>


  );
}

export default App;
