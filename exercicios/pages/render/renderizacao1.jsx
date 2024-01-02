export default function renderizacao() {
    const listaAprovados = [
        'João',
        'Maria',
        'Fernanda'
    ]

    const renderizarLista = () => 
            listaAprovados.map((nome, index) => <li key={index}>{nome}</li>)
    

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}