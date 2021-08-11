import React,{useState}from "react";
import axios from 'axios';

const Weather = () =>{
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [decription, setDecription] = useState("");
  const [showMyComponent, setShowMyComponent] = useState(false);
  
  const getWeatherData = async (city, country) => {
    await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e5b5db7a2ef058017216d8fc8fd64a77`
    }).then((res) =>{
        console.log(res.data);
        setIcon(res.data.weather[0].icon);
        setTemp(res.data.main.temp-273.15);
        setMin(res.data.main.temp_min-273.15);
        setMax(res.data.main.temp_max-273.15);
        setDecription(res.data.weather[0].description);
        setShowMyComponent(true)
        setCountry(res.data.sys.country)
    }).catch((err) =>{
        console.log(err);
    });
  };
  return (
    <div className="wrapper">
       <input 
       className="city-input"
       type='text'
       placeholder="city name"
       value={city}
       onChange={(e)=>setCity(e.target.value)}
       />

       <input
       className="country-input"
       type='text'
       placeholder='country name'
       value={country}
       onChange={(e)=>setCountry(e.target.value)}
       />

       <button onClick={()=>getWeatherData(city,country)}>Get Weather</button>
       
       {showMyComponent ? 
       <div className='data'>
       <h1>{city},{country}</h1>
       <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather-icon'/>
       { temp ? <h1>{Math.floor(temp)}℃</h1>: null}
       <div className="max-min">
         <h4 className="min">Min:{Math.floor(min)}℃</h4>
         <h4 className="max">Max:{Math.floor(max)}℃</h4>
       </div>
       <h3>{decription}</h3>
       <span>Date: {new Date().toLocaleDateString()}</span>
     </div> :null}
       
    </div>
  );
};

export default Weather;
