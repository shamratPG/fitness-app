import React from 'react';
import './ExerciseItem.css'

const ExerciseItem = (props) => {
    const { counter } = props;
    const { name, description, duration, image } = props.data;
    const stringCutter = (str) => {
        if (str.length > 170) {
            return (str.slice(0, 170) + '...')
        }
        return str;
    }



    const exerciseInfo = stringCutter(description);

    return (
        <div className='exercise-item'>
            <div className='exercise-info'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{exerciseInfo}</p>
                <p>Time Required: <span>{duration} sec.</span></p>
            </div>
            <button onClick={() => counter(duration)}>Add to list</button>
        </div>
    );
};

export default ExerciseItem;