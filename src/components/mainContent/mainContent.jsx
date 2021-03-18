import './mainContent.css';
import React from 'react';
import VideoCard from '../videoCard/videoCard';
import classNames from 'classnames';


export default function MainContent({ videos, onVideoClick, selectVideo }) {

    return (
        <div className={classNames('mainContent', { playVideo: selectVideo.id !== '' })}>
            {selectVideo.id !== '' && 
            <div>
                <iframe
                    title="video"
                    width="950"
                    height="534"
                    src={`https://www.youtube.com/embed/${selectVideo.id}`}
                    frameborder="0"
                    allowFullScreen={true}
                    allow="
                    accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture"
                ></iframe>
                <h2 className = "videoTitle">{selectVideo.snippet.title}</h2>
                <div className="channelName">{selectVideo.snippet.channelTitle}</div>
                <div className = "videoExplanation">{selectVideo.snippet.description}</div>
            </div>}
            <div className="videoArea">
                {videos.map((video) =>
                    <VideoCard onVideoClick = {onVideoClick} key={video.id} info={video}></VideoCard>)}
            </div>

        </div>
    )
}
