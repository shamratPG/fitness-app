import React from 'react';
import './TimeCalc.css'

const TimeCalc = (props) => {
    const { time, parameter } = props;
    return (
        <div className='time-calc'>
            <h4>{parameter}</h4>
            <p>{time} seconds</p>
        </div>
    );
};

export default TimeCalc;