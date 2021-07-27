//importing files and components
import React, { Component } from 'react';
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import { SidebarElement } from './SidebarElement.js';

//importing Icons
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core';


export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <TwitterIcon className="sidebar_twitterIcon" />    
                <SidebarElement active={true} text="Home" Icon={HomeIcon}  />
                <SidebarElement active={false} text="Explore" Icon={SearchIcon} />
                <SidebarElement active={false} text="Notifications" Icon={NotificationsIcon} />
                <SidebarElement active={false} text="Messages" Icon={MailOutlineIcon} />
                <SidebarElement active={false} text="Bookmarks" Icon={BookmarkBorderIcon} />
                <SidebarElement active={false} text="List" Icon={ListAltIcon} />
                <SidebarElement active={false} text="Profile" Icon={PersonOutlineIcon} />
                <SidebarElement active={false} text="More" Icon={MoreHorizIcon} />
                <button className="tweetButton">Tweet</button>
            </div>
        );
    }
}

