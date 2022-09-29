import React from 'react';
import TimeCalc from '../TimeCalc/TimeCalc';

const DetailsContainer = (props) => {
    const { exerciseTime, breakTime } = props;
    // console.log(exerciseTime)

    // const times = [{ parameter: "Exercise Time", time: 0 }, { parameter: "Break Time", time: 0 }]
    return (
        <div>
            <div className="exercise-details">
                <div className="exercise-time">
                    <h3>
                        Exercise Time
                    </h3>
                    <div className="exercise-calc">
                        <TimeCalc parameter="Exercise Time" time={exerciseTime}></TimeCalc>
                        <TimeCalc parameter="Break Time" time={breakTime}></TimeCalc>
                        {/* {
                            times.map(time => <TimeCalc key={time.parameter} data={time}></TimeCalc>)
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsContainer;