import styles from '@/styles/Linha.module.css'
import Campo from "./Campo";

export default function Linha(props) {
    return (
        <div className={styles.linha}>
            <Campo preta={props.preta} />
            <Campo preta={!props.preta} />
            <Campo preta={props.preta} />
            <Campo preta={!props.preta} />
            <Campo preta={props.preta} />
            <Campo preta={!props.preta} />
            <Campo preta={props.preta} />
            <Campo preta={!props.preta} />
        </div>
    )
}