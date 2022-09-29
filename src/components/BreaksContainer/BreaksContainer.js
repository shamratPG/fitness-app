import React from 'react';
import BreakBtn from '../BreakBtn/BreakBtn';
import './BreaksContainer.css'

const BreaksContainer = () => {

    const breakTimes = [10, 20, 30, 40, 50];
    return (
        <div className="breaks-container">
            <h3>Add A Break</h3>
            <div className="breaks">
                {
                    breakTimes.map(time => <BreakBtn value={time}></BreakBtn>)
                }
            </div>
        </div>
    );
};

export default BreaksContainer;