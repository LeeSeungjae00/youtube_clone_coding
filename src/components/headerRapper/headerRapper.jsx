import React, { useRef } from 'react'
import style from "./headerRapper.module.css"

export default function HeaderRapper({onSearch}) {
    const inputRef = useRef();
    return (
        <div className={style.headerRapper}>
            <div className={style.logoRapper}>
                <img src="./images/logo.png" alt="logo" />
            Youtube
            </div>
            <div className={style.searchRapper}>
                <input ref = {inputRef} className={style.search}></input>
                <button 
                    onClick = {() => {onSearch(
                        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputRef.current.value}&maxResults=24&regionCode=KR&key=AIzaSyCg2DIwaT5af8y1NmV-PoXMjqk4d_3cZXg`
                    )}} 
                    className={style.searchButton} 
                    style = {{backgroundImage : "url(/images/search.png)"}}>
                </button>
            </div>

        </div>
    )
}
