import React from 'react';
import TimeCalc from '../TimeCalc/TimeCalc';

const DetailsContainer = () => {
    const times = [{ parameter: "Exercise Time", time: 200 }, { parameter: "Break Time", time: 200 }]
    return (
        <div>
            <div className="exercise-details">
                <div className="exercise-time">
                    <h3>
                        Exercise Time
                    </h3>
                    <div className="exercise-calc">
                        {
                            times.map(time => <TimeCalc key={time.parameter} data={time}></TimeCalc>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsContainer;