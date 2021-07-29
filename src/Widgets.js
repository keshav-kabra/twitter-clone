import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'

export function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">    
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search" type="text" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening ??</h2>
                <TwitterTweetEmbed tweetId = {"1336614228275294208"} />

                <TwitterTimelineEmbed sourceType="profile" screenName="KeshavK50939438" options={{height : 400}} />
            </div>
        </div> 
        
    )
}

