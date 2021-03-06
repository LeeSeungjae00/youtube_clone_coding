import React from 'react'
import './videoCard.css';

export default function videoCard({info , onVideoClick}) {
    const {thumbnails, title, channelTitle} = info.snippet;
    return (
        <div onClick = {()=> {onVideoClick(info)}} className = "videoCard">
            <img className = "thumbnails" style = {{width : 304, height : 171}} src= {thumbnails.medium.url}alt="thum"/>
            <p className = "title">{title}</p>
            <p className = "channelTitle">{channelTitle}</p>
        </div>
    )
}
