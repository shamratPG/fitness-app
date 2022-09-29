import React from 'react';
import './TimeCalc.css'

const TimeCalc = (props) => {
    const { time, parameter } = props;
    return (
        <div className='time-calc'>
            <h3>{parameter}</h3>
            <p>{time} seconds</p>
        </div>
    );
};

export default TimeCalc;