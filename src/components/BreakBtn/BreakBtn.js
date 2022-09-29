import React from 'react';
import './BreakBtn.css'
const BreakBtn = (props) => {
    const { breakBtn } = props;

    return (
        <div>
            <button onClick={() => breakBtn(props.value)} className='btn'><span>{props.value}</span>s</button>
        </div>
    );
};

export default BreakBtn;