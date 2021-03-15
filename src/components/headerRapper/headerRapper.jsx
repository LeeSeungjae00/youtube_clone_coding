import React from 'react'
import style from "./headerRapper.module.css"

export default function HeaderRapper() {
    return (
        <div className={style.headerRapper}>
            <div className={style.logoRapper}>
                {/* <img src="./images/logo.png" alt="logo" /> */}
            Youtube
            </div>
            <div className={style.searchRapper}>
                <input className={style.search}></input>
                <button className={style.searchButton} style = {{backgroundImage : "url(/images/search.png)"}}></button>
            </div>

        </div>
    )
}
