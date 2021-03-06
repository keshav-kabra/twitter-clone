import React from 'react'
import './TweetBox.css'

import {Avatar, Button } from '@material-ui/core'

export function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox_input"> 
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png " />
                    <input  placeholder="What's happening ?" type="text" />
                    
                </div>
                <Button className="tweet_button">Tweet</Button>
            </form>
        </div>
    )
}

