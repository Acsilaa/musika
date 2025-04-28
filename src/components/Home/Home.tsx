import { JSX, ReactNode } from 'react';
import ListRow from './ListRow/ListRow.tsx';
import st from './home.module.css';

export default function Home(){
    let count : number = 5;
    let rows: ReactNode[] = [];
    for(let i = 0; i < count; i++){
        rows.push(<ListRow key={i} author='AC/DC' title='Highway to Hell' cover='music.jpg'></ListRow>);
    }
    return(<div className={st.cont}>
        <h1>Musika</h1>
        <ul className={st.rowscont}>
            {
                rows.map((e)=>e)
            }
        </ul>
    </div>)
}