import React from 'react';
import './AsideContainer.css'
import UserInfo from '../UserInfo/UserInfo';
import BreakBtn from '../BreakBtn/BreakBtn';

const AsideContainer = () => {
    const breakTimes = [10, 20, 30, 40, 50];
    return (
        <div className='aside-container'>
            <UserInfo></UserInfo>
            <div className="breaks-container">
                <h2>Add A Break</h2>
                <div className="breaks">
                    {
                        breakTimes.map(time => <BreakBtn value={time}></BreakBtn>)
                    }
                </div>
                <div className="exercise-details">
                    <div className="exercise-time">
                        <h3>
                            Exercise Time
                        </h3>
                        <p><span className="time"></span>s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideContainer;