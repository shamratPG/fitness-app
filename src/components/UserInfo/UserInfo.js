import React, { useState } from 'react';
import './UserInfo.css'
import UserBio from '../UserBio/UserBio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const UserInfo = () => {

    const user = { name: 'Shamrat Hossain', image: 'https://github.com/shamratPG/imges/blob/main/person.jpg?raw=true', location: 'Dhaka, Bangladesh', bio: [{ parameter: "Weight", value: 75 }, { parameter: "Height", value: 5.4 }, { parameter: "Age", value: 24 }] }

    return (
        <div>
            <div className="user-profile">
                <div className="user-img">
                    <img src={user.image} alt="" />
                </div>
                <div className="user-details">
                    <h3>{user.name}</h3>
                    <small><FontAwesomeIcon className='location-icon' icon={faLocationDot}></FontAwesomeIcon>{user.location}</small>
                </div>
            </div>
            <div className="bio-container">
                {
                    user.bio.map(data => <UserBio key={data.parameter} data={data}></UserBio>)
                }
            </div>
        </div>
    );
};

export default UserInfo;