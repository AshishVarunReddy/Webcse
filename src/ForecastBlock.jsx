import React, {useContext} from 'react';
import './ForecastBlock.css'
import axios from 'axios';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import {SearchQuery} from "./SearchQuery.jsx";

const  ForecastBlock= (props) => {
    const {searchQuery} = useContext(SearchQuery);
    const [futureCast, setFutureCast] = useState([])
        const followup = (props.followup) - 1;
    useEffect(()=>{
        const fetchForecast = async () => {
            try{
                const response = await axios.get('https://api.weatherapi.com/v1/forecast.json?key=a8aef7dc90914ba489f133958243110&days=7&aqi=no&alerts=no', {
                    params: {
                        appid:'a8aef7dc90914ba489f133958243110',
                        q : searchQuery,
                    },
                });
                //large data is handled.......
                const resdata = await response.data.forecast.forecastday.slice(followup,followup+1).map(item => ({
                    date : item.date,
                    avt : item.day.avgtemp_c,
                    avh : item.day.avghumidity
                }));

                    setFutureCast(resdata);
                    console.log('done')
            }catch(error){
                console.error("Error fetching the weather data", error);
            }
        }
        fetchForecast();
    }, [searchQuery])
    return (
        <div>{futureCast ? (
            <div className="forecast-block">
                {
                    futureCast.map((it, index) => (
                        <div key = {index} className="Forecast">
                <h5> {it.date} </h5>
                <p>Avg Temp: {it.avt}°C</p>
                <p>Avg Humidity: {it.avh}</p>
                        </div>
            )
            )
        }
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