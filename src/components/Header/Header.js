import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <h1>
                <FontAwesomeIcon className='header-icon' icon={faDumbbell} />
                Fitness Goals
            </h1>
            <h2>Choose your exercise plan</h2>
        </div>
    );
};

export default Header;