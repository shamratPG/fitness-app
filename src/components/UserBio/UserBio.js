import React from 'react';

const UserBio = (props) => {
    const { parameter, value } = props.data
    return (
        <div>
            <div className="">
                <h2>{value}</h2>
                <p>{parameter}</p>
            </div>
        </div>
    );
};

export default UserBio;