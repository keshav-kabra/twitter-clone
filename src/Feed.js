import React from 'react';
import './Feed.css';
import {TweetBox} from './TweetBox';
import {Post} from './Post';
import { render } from '@testing-library/react';

export function Feed(props) {
    const userData = [];
    props.data.forEach((user) => {
        userData.push(
            <Post displayName={user.displayName}
            username={user.username} 
            text={user.text}
            avatar={user.avatar} />
        )
    })
    return (
        <div className="feed">
            {/*Home*/}
            <h2 className="feed_header"> Home</h2>
            {/*tweet*/}
            <TweetBox />

            {/*posts*/}
            {userData}

        </div>
    )
    
}




