function gerarLista(final = 10) {
    const numbers = []
    for (let i = 1; i <= final; i++) {
        numbers.push(<span>{i},</span>)        
    }
    return numbers
}
export default function lista() { 

    return (
        <div>
            <div>{gerarLista()}</div>
            <div>{gerarLista(20)}</div>
            <div>{gerarLista(3)}</div>
        </div>
    )
}