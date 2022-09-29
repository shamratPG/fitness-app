import React, { useEffect, useState } from 'react';
import './MainContainer.css'
import Header from '../Header/Header';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import Article from '../Article/Article';

const MainContainer = (props) => {
    //GETTING CART ITEMS
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('dataBase.json')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])

    //GETTING QUESTION ANSWERS
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('questionAns.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    return (
        <div className='main-container'>
            <Header></Header>
            <div className='items-container'>
                {
                    items.map(item => <ExerciseItem key={item.id} data={item} counter={props.counter}></ExerciseItem>)
                }
            </div>
            <div className="articles">
                {
                    articles.map(article => <Article key={article.id} article={article}></Article>)
                }
            </div>
        </div>
    );
};

export default MainContainer;