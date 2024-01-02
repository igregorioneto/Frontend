export default function Titulo(props) {
    return props.pequeno ? (
        <>
            <p>{props.primeiro}</p>
            <p>{props.segundo}</p>
        </>
    ) : (
        <>
            <h1>{props.primeiro}</h1>
            <h2>{props.segundo}</h2>
        </>
    )
}