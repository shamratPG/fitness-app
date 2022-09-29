import React, { useState } from 'react';
import UserBio from '../UserBio/UserBio';

const UserInfo = () => {

    const user = { name: 'Shamrat', image: '', location: 'Dhaka, Bangladesh', bio: [{ parameter: "Weight", value: 75 }, { parameter: "Height", value: 5.4 }, { parameter: "Age", value: 24 }] }

    return (
        <div>
            <div className="user-profile">
                <div className="user-img">
                    <img src="" alt="" />
                </div>
                <div className="user-details">
                    <h3>{user.name}</h3>
                    <small>{user.location}</small>
                </div>
            </div>
            <div className="user-bio">
                {
                    user.bio.map(data => <UserBio key={data.parameter} data={data}></UserBio>)
                }
            </div>
        </div>
    );
};

export default UserInfo;