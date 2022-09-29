import React from 'react';
import './AsideContainer.css'
import UserInfo from '../UserInfo/UserInfo';
import BreaksContainer from '../BreaksContainer/BreaksContainer';

const AsideContainer = () => {
    return (
        <div className='aside-container'>
            <UserInfo></UserInfo>
            <BreaksContainer></BreaksContainer>
            <div className="exercise-details">
                <div className="exercise-time">
                    <h3>
                        Exercise Time
                    </h3>
                    <p><span className="time"></span>s</p>
                </div>
            </div>
        </div>
    );
};

export default AsideContainer;