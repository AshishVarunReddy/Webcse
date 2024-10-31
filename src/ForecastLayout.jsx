import React from 'react';
import ForecastBlock from "./ForecastBlock.jsx";
import './ForecastLayout.css'

const ForecastLayout = () => {
    return (
        <div>
        <div className="container">
            <ForecastBlock followup = {1}></ForecastBlock>
            <ForecastBlock followup = {2}></ForecastBlock>
            <ForecastBlock followup = {3}></ForecastBlock>
            <ForecastBlock followup = {4}></ForecastBlock>
            <ForecastBlock followup = {5}></ForecastBlock>
            <ForecastBlock followup = {6}></ForecastBlock>
            <ForecastBlock followup = {7}></ForecastBlock>
        </div>
        </div>
    );
};

export default ForecastLayout;