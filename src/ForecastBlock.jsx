import React from 'react';
import './ForecastBlock.css'
import axios from 'axios';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types'

const  ForecastBlock= (props) => {

    const [futureCast, setFutureCast] = useState([])
        const followup = props.followup - 1;
    useEffect(()=>{
        const fetchForecast = async () => {
            try{
                const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=a8aef7dc90914ba489f133958243110&q=New York&days=7&aqi=no&alerts=no', {
                    params: {
                        appid:'a8aef7dc90914ba489f133958243110',
                        q : 'New York',
                    },
                });
                const resdata = await response.data.forecast.forecastday[followup]
                    setFutureCast(resdata);
            }catch(error){
                console.error("Error fetching the weather data", error);
            }
        }
        fetchForecast();
    }, [])
    return (
        <div>{futureCast ? (
            <div className="forecast-block">
                <h5> {futureCast.date} </h5>
                <p>Avg Temp: {futureCast.day.avgtemp_c}°C</p>
                <p>Avg Humidity: {futureCast.day.avghumidity}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )
        }
        </div>
    );
};

ForecastBlock.propTypes = {
    followup: PropTypes.number.isRequired,
}

export default ForecastBlock;