import React from 'react'
import './videoCard.css';

export default function videoCard({info}) {
    const {thumbnails, title, channelTitle} = info;
    return (
        <div onClick = {()=> {console.log(info)}} className = "videoCard">
            <img style = {{width : 304, height : 171}} src= {thumbnails.medium.url}alt="thum"/>
            <p style = {{width : 304}}>{title}</p>
            <p style = {{widtj : 304}}>{channelTitle}</p>
        </div>
    )
}
