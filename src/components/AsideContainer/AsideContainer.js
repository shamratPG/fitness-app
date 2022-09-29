import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './AsideContainer.css'
import UserInfo from '../UserInfo/UserInfo';
import BreaksContainer from '../BreaksContainer/BreaksContainer';
import DetailsContainer from '../DetailsContainer/DetailsContainer';

const AsideContainer = (props) => {

    const notify = () => toast("Congratulation.", { position: toast.POSITION.TOP_CENTER });

    const { exerciseTime, breakBtn, breakTime } = props;
    return (
        <div className='aside-container'>
            <UserInfo></UserInfo>
            <BreaksContainer breakBtn={breakBtn}></BreaksContainer>
            <DetailsContainer exerciseTime={exerciseTime} breakTime={breakTime}></DetailsContainer>

            <div>
                <button onClick={notify} className='toast-btn'>Activity Complete</button>
                <ToastContainer />
            </div>

            {/* <button className='toast-btn'>Activity Complete</button> */}
        </div>
    );
};

export default AsideContainer;