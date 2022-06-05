import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d" ;
  const[data,setData] = useState({});
  const [inputCity,setInpuCity] = useState("");
  const getWeather = (cityName) =>{
     if(!cityName) return
      const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
      axios.get(apiURL).then((res)=>{
        console.log("response",res.data)
        setData(res.data)
      }).catch((err)=>{
        console.log("err", err)
      })
  }
  const handleInputChange =(e)=>{
    console.log(e.target.value);
     setInpuCity(e.target.value);
  }
  const handleSearch = ()=>{
    getWeather(inputCity);
  
  } 
  useEffect(()=>{
    getWeather('mumbai')
  },[])
  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 nt-4">
          <input type="text" value={inputCity} className="form-control" onChange={handleInputChange}/>
          <button className="btn btn-primary" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">
          <img className="weatherIcon" src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" alt="img" width={"100px"} height={"100px"} />
          <h5 className="weatherCity">{data?.name}</h5>
          <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)} °C</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
