import React from 'react';
import BreakBtn from '../BreakBtn/BreakBtn';
import './BreaksContainer.css'

const BreaksContainer = (props) => {
    const { breakBtn } = props;
    const breakTimes = [10, 20, 30, 40, 50];
    return (
        <div className="breaks-container">
            <p>Add A Break</p>
            <div className="breaks">
                {
                    breakTimes.map(time => <BreakBtn key={time} value={time} breakBtn={breakBtn}></BreakBtn>)
                }
            </div>
        </div>
    );
};

export default BreaksContainer;