import { useEffect, useState } from "react"
import styles from "./Player.module.css"
import {Music, PlayerContext} from '../../App.tsx';
import { useContext } from "react";

export default function Player(){
    let [active, setActive] = useState(false);
    let current: Music | null = useContext(PlayerContext);
    useEffect(()=>{

    }, [current]);
    return(
    <>
        <div className = {styles.player_bar} onClick={()=>{setActive(p => !p); console.log(active)}}>
            <img src="/music.jpg" id= {styles.current_playing_image}></img>
            <h1 className={styles.h1}>Dikken Titten</h1>
            <div id = {styles.media_buttons}>
                <div id = {styles.previous_button}>⏪</div>
                <div id = {styles.pause_button}>⏸️</div>
                <div id = {styles.next_button}>⏩</div>
            </div>
        </div>

        <div className = {styles.player_page + " " + (active ? styles.active : "")}>

        </div>
    </>
)
}