import React from 'react';
import './BreakBtn.css'
const BreakBtn = (props) => {
    return (
        <div>
            <button className='btn'><span>{props.value}</span>s</button>
        </div>
    );
};

export default BreakBtn;