import React from 'react'
import './videoCard.css';

export default function videoCard({info}) {
    const {thumbnails, title, channelTitle} = info;
    console.log(info)
    return (
        <div className = "videoCard">
            <img style = {{width : 304, height : 171}} src= {thumbnails.medium.url}alt="thum"/>
            <p>{title}</p>
            <p>{channelTitle}</p>
        </div>
    )
}
