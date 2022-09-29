import React from 'react';
import './AsideContainer.css'
import UserInfo from '../UserInfo/UserInfo';
import BreaksContainer from '../BreaksContainer/BreaksContainer';
import DetailsContainer from '../DetailsContainer/DetailsContainer';

const AsideContainer = (props) => {
    const { exerciseTime, breakBtn, breakTime } = props;
    return (
        <div className='aside-container'>
            <UserInfo></UserInfo>
            <BreaksContainer breakBtn={breakBtn}></BreaksContainer>
            <DetailsContainer exerciseTime={exerciseTime} breakTime={breakTime}></DetailsContainer>
            <button className='toast-btn'>Activity Complete</button>
        </div>
    );
};

export default AsideContainer;