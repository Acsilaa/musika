import { useEffect, useState } from "react"
import styles from "./Player.module.css"
import {Music, PlayerContext} from '../../App.tsx';
import { useContext } from "react";

export default function Player(){
    let [active, setActive] = useState(false);
    let currentC = useContext(PlayerContext);
    const as = document.getElementById(styles.audio_source)

    useEffect(()=>{ 
        as?.setAttribute(currentC.val == null ? "" : "src","/music/"+currentC.val?.file)
    }, [currentC]);
    return(
    <>
        <audio controls id = {styles.audio}>
            <source id={styles.audio_source} type="audio/mpeg"/>
        </audio>

        <div className = {styles.player_bar}>
            <img src={currentC.val == null ? "/placeholders/placeholder.png" : "/covers/" + currentC.val.cover} id= {styles.current_playing_image}></img>
            <h1 className={styles.h1}>{currentC.val == null ? "-" : currentC.val.title}</h1>
            <div id = {styles.media_buttons}>
                <div id = {styles.previous_button} className={styles.active_font}>⏪</div>
                <div id = {styles.next_button} className={styles.active_font}>⏩</div>
                <div id = {styles.pause_button} className={styles.active_font}>⏸️</div>

                <div  className={styles.active_font} id = {styles.raise_page_button}
                    onClick={()=>{setActive(p => !p)}}>⏏</div>
            </div>
        </div>

        <div className = {styles.player_page + " " + (active ? styles.active : "")}>
            <div className={styles.active_font} onClick={()=>{setActive(p => !p)}}>▽</div>
        </div>

        
    </>
)
}