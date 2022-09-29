import React from 'react';
import './UserBio.css'

const UserBio = (props) => {
    const { parameter, value } = props.data
    return (
        <div className="user-bio-item">
            <h2>{value}</h2>
            <p>{parameter}</p>
        </div>

    );
};

export default UserBio;