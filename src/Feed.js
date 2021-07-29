import React from 'react';
import './Feed.css';
import {TweetBox} from './TweetBox';
import {Post} from './Post';

export function Feed() {
    return (
        <div className="feed">
            {/*Home*/}
            <h2 className="feed_header"> Home</h2>
            {/*tweet*/}
            <TweetBox />

            {/*posts*/}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />




        </div>
    )
}


