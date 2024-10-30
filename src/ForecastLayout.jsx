import React from 'react';
import ForecastBlock from "./ForecastBlock.jsx";
import './ForecastLayout.css'

const ForecastLayout = () => {
    return (
        <div>
        <div className="container">
            <ForecastBlock></ForecastBlock>
            <ForecastBlock></ForecastBlock>
            <ForecastBlock></ForecastBlock>
            <ForecastBlock></ForecastBlock>
            <ForecastBlock></ForecastBlock>
            <ForecastBlock></ForecastBlock>
            <ForecastBlock></ForecastBlock>
        </div>
        </div>
    );
};

export default ForecastLayout;