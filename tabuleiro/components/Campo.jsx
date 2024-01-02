import styles from '@/styles/Campo.module.css'
export default function Campo(props) {
    return (
        <div 
            style={{ backgroundColor: props.preta ? '#000': '#fff' }}
            className={styles.campo}>
        </div>
    )
}