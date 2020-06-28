import React,{useState} from 'react';
import {fetchWeather} from './api/ApiData';
import './App.css';

const App=()=>{

    const [query,setQuery]=useState("");
    const [weather,setWeather]=useState({});

    const search= async (e)=>{
        if(e.key==='Enter'){
            const data= await fetchWeather(query);

            console.log(data);
            setWeather(data);
            setQuery("");
        }
    }
    return (
        <div className="mainContainer">
            <h1 className="title">Weather app </h1>
            <h3 className="title2">by Suman Das</h3>
            <input 
            type="text"
            className="search"
            placeholder="Search"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}     
            onKeyPress={search}
            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>
                            {weather.name}
                        </span>
            <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temprature">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>

                    <div className="info">
                        
                    </div>

                </div>

            )}


        </div>
    );

}
export default App;