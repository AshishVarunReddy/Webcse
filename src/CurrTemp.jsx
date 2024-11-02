import React from 'react';
import './CurrTemp.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {useContext} from 'react';
// import SearchBar from "./SearchBar.jsx";
import {SearchQuery} from "./SearchQuery.jsx";


const CurrTemp = () => {
    const {searchQuery} = useContext(SearchQuery);
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: searchQuery,
                        appid: "e29c03b64c44d349fccfa7790d75da92",
                        units: 'metric',
                    },
                });
                setWeatherData(response.data); // Store the response data only
            } catch (error) {
                console.error("Error fetching the weather data", error);
            }
        };

        fetchWeather()
    }, [searchQuery]);



    return (
        <div>
            {weatherData ? (
                <div className = "currTemp">
                    <h2 className="headingTemp">Weather in {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Feels Like: {weatherData.main.feels_like}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            ) : (
                <p className= "currTemp">Loading weather data...</p>
            )}
        </div>
    );




}

export default CurrTemp;