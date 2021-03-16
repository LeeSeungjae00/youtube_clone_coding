import React from 'react'
import style from './mainContent.module.css'
import VideoCard from '../videoCard/videoCard'

export default function MainContent({videos}) {
    
    return (
        <div className = {style.mainContent}>
            {videos.map((video) => 
                <VideoCard key = {video.id} info = {video}></VideoCard>
            )}
        </div>
    )
}
