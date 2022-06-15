import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedArticle = ({ storyId }) => {
    const [ story, setStory ] = useState();
    const [ statusMessage, setStatusMessage ] = useState('Loading');
    useEffect(() => {
        const fetchStory = async () => {
            setStatusMessage('Loading')
            try {   
                let { data } = await axios.get(`https://futureproof-news.herokuapp.com/articles/${storyId}`);
                setStory(data);
                setStatusMessage('');
            } catch (err) {
                console.warn(err);
                setStatusMessage(`Oops there\'s been an issue! ${err.message}`)
            }
        }
        fetchStory()
    }, [storyId])

    return ( 
        <article aria-label="featured story" id="feature">
            <>
            <h3>{ statusMessage ? statusMessage : story.headline }</h3>
            <p>
                {!statusMessage && story.body }
            </p>
            </>
        </article>
    )
}

export default FeaturedArticle;