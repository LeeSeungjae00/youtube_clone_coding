import React from 'react'
import style from './mainContent.module.css'

export default function MainContent({videos}) {
    return (
        <div className = {style.mainContent}>
            {console.log(videos[0])}
        </div>
    )
}
