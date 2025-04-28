import st from './style.module.css';
type RequiredProps = {
    key: number,
    title: string,
    author: string,
    cover: string,
}
export default function ListRow(props:RequiredProps){

    return(
        <>
            <li className={st.element} key={props.key}>
                <img src={props.cover} />
                <div className={st.details}>
                    <p>{props.title}</p>
                    <p>{props.author}</p>
                </div>
            </li>
        </>
    )
}
