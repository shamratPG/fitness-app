import React from 'react';
import './Article.css'

const Articles = (props) => {
    const { article } = props;
    return (
        <div className='article'>
            <h2>{article.question}</h2>
            <p>{article.answer}</p>
        </div>
    );
};

export default Articles;