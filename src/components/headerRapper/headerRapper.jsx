import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from "./headerRapper.module.css"

export default function HeaderRapper({ onSearch }) {
    const [serchVal, setSerchVal] = useState('')
    return (
        <div className={style.headerRapper}>
<<<<<<< HEAD
            <div onClick={() => { window.location.href = "/" }} className={style.logoRapper}>
=======
            <div className={style.logoRapper} onClick = {() => window.location.href = "/"}>
>>>>>>> 26370e4b0ed60abefa0f5163deff51edb1ce4dd1
                <img src="./images/logo.png" alt="logo" />
            Youtube
            </div>
            <div className={style.searchRapper}>
                <input 
                    value = {serchVal} 
                    onChange = {(e)=> {setSerchVal(e.currentTarget.value)}}
                    className={style.search}>
                
                </input>
                <button
                    onClick={() => {
                        onSearch(
                            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${serchVal}&maxResults=24&regionCode=KR&key=AIzaSyCg2DIwaT5af8y1NmV-PoXMjqk4d_3cZXg`
                        );
                    }}
                    className={style.searchButton}
                    style={{ backgroundImage: "url(/images/search.png)" }}>
                </button>
            </div>

        </div>
    )
}
