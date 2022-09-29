import React, { useEffect, useState } from 'react';
import './MainContainer.css'
import Header from '../Header/Header';
import ExerciseItem from '../ExerciseItem/ExerciseItem';

const MainContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('dataBase.json')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return (
        <div className='main-container'>
            <Header></Header>
            <div className='items-container'>
                {
                    items.map(item => <ExerciseItem key={item.id} data={item}></ExerciseItem>)
                }
            </div>
        </div>
    );
};

export default MainContainer;