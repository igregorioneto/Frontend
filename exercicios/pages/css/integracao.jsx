import styles from './integracao.module.css'

export default function integracao() {
    return (
        <div id={styles?.integracao}>
            <p className={styles?.vermelho}>Texto #01</p>
            <p className={styles?.azul}>Texto #02</p>
            <p className={styles?.branca}>Texto #03</p>
        </div>
    )
}