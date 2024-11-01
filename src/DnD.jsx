import React, {useContext} from 'react';
import './DnD.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {SearchQuery} from "./SearchQuery.jsx";

const  DnD= () => {
    const {searchQuery} = useContext(SearchQuery);
    const [dnt, setDnt] = useState(0);
    useEffect(()=>{
        const fetchDate = async () => {
            try{
                const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=a8aef7dc90914ba489f133958243110&aqi=no', {
                    params: {
                        q : searchQuery,
                        appid : 'a8aef7dc90914ba489f133958243110'
                    }
                });
                setDnt(response.data);
                console.log('hello');
            }catch(error){
                console.error("Error fetching the date and time", error);
            }

        }
        fetchDate();
    }, [searchQuery]);
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