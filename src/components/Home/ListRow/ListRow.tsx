import st from './style.module.css';
import {Music, PlayerContext} from '../../../App';
import { useContext } from 'react';
type RequiredProps = {
    music: Music,
    key: number,
}
export default function ListRow(props:RequiredProps){
    let playerC = useContext(PlayerContext);

    function changeCurrent(){
        playerC.setter(props.music);
    }
    return(
        <>
            <li className={st.element} key={props.key} onClick={changeCurrent}>
                <img src="playing.png" className={st.playing} />
                <img src={"/covers/"+props.music.cover} />
                <div className={st.details}>
                    <p>{props.music.title}</p>
                    <p>{props.music.author}</p>
                </div>
            </li>
        </>
    )
}
