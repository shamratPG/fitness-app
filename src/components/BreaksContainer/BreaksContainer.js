import React from 'react';
import BreakBtn from '../BreakBtn/BreakBtn';
import './BreaksContainer.css'

const BreaksContainer = (props) => {
    const { breakBtn } = props;
    const breakTimes = [10, 20, 30, 40, 50];
    return (
        <div className="breaks-container">
            <h3>Add A Break</h3>
            <div className="breaks">
                {
                    breakTimes.map(time => <BreakBtn key={time} value={time} breakBtn={breakBtn}></BreakBtn>)
                }
            </div>
        </div>
    );
};

export default BreaksContainer;