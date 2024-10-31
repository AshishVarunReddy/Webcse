import React from 'react';
import './DnD.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
const  DnD= () => {
    const [dnt, setDnt] = React.useState(0);
    useEffect(()=>{
        const fetchDate = async () => {
            try{
                const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=a8aef7dc90914ba489f133958243110&q=New York&aqi=no', {
                    params: {
                        q : 'New York',
                        appid : 'a8aef7dc90914ba489f133958243110'
                    }
                });
                setDnt(response.data);
            }catch(error){
                console.error("Error fetching the date and time", error);
            }

        }
        fetchDate();
    }, []);
    return (
        <div id = "dnd" className="dnd">
            {
                dnt ? (
                    <div>
                        <p> {dnt.location.localtime} </p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default DnD;