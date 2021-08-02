import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/Repeat';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';


//  export function Post({
//     displayName,
//     username, 
//     verified,
//     text,
//     avatar
//     }) {
//     return (
//         <div className="post">
//             <div className="post_avatar">
//                 <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png " />
//             </div>
//             <div className="post_body">
//                 <div className="post_header">
//                     <div className="post_headerText">
//                         <h3>
//                             Keshav Kabra
//                             <span className="post_headerTextSpecial"> @keshavkabrakk2 </span>
//                         </h3>
//                     </div>
//                 </div>
//                 <div className="post_headerDescription">
//                     <p>Text for header Description welcome to the first tweet!! Dummy text Dummy text Dummy text Dummy text Dummy text </p>
//                 </div>
//                 <div className="post_footer">
//                     <RepeatIcon fontSize='small' />
//                     <CommentIcon fontSize='small' />
//                     <FavoriteBorderIcon fontSize='small' />
//                     <ShareIcon fontSize='small' />
//                 </div>
//             </div>
               
//         </div>
//     )
// }

export function Post({
    displayName,
    username, 
    verified,
    text,
    avatar
    }) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png " />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}
                            <span className="post_headerTextSpecial"> {username} </span>
                        </h3>
                    </div>
                </div>
                <div className="post_headerDescription">
                    <p>{text} </p>
                </div>
                <div className="post_footer">
                    <RepeatIcon fontSize='small' />
                    <CommentIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <ShareIcon fontSize='small' />
                </div>
            </div>
               
        </div>
    )
}

