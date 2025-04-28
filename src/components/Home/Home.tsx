import { JSX, ReactNode } from 'react';
import ListRow from './ListRow/ListRow.tsx';
import { useContext } from 'react';
import { EntriesContext } from "../../App.tsx"
import st from './home.module.css';
import {Music} from '../../App.tsx';
export default function Home() {
    let entries: Music[] = useContext(EntriesContext);
    return (<div className={st.cont}>
        <h1>Musika</h1>
        <ul className={st.rowscont}>
            {
                entries.map((e,i)=>{
                    return (
                        <ListRow key={i} author={e.author} title={e.title} cover={e.cover}></ListRow>
                    )
                })
            }
        </ul>
    </div>)
}