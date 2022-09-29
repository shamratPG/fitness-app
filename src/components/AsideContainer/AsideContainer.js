import React from 'react';
import './AsideContainer.css'
import UserInfo from '../UserInfo/UserInfo';
import BreaksContainer from '../BreaksContainer/BreaksContainer';
import DetailsContainer from '../DetailsContainer/DetailsContainer';

const AsideContainer = () => {
    return (
        <div className='aside-container'>
            <UserInfo></UserInfo>
            <BreaksContainer></BreaksContainer>
            <DetailsContainer></DetailsContainer>
            <button className='toast-btn'>Activity Complete</button>
        </div>
    );
};

export default AsideContainer;