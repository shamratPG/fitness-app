import React from 'react';
import './TimeCalc.css'

const TimeCalc = (props) => {
    return (
        <div className='time-calc'>
            <h3>{props.data.parameter}</h3>
            <p>{props.data.time}sec</p>
        </div>
    );
};

export default TimeCalc;