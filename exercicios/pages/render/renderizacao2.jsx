import listaProdutos from "@/data/listaProdutos"

export default function renderizacao() {
    const comBorda = {
        border: "1px solid #000"
    }
    const renderizarLista = () => 
            listaProdutos.map(produto => {
                return (
                    <tr key={produto.id}>
                        <td style={comBorda}>{produto.id}</td>
                        <td style={comBorda}>{produto.nome}</td>
                        <td style={comBorda}>{produto.preco}</td>
                    </tr>
                )
            })
    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th style={comBorda}>Código</th>
                        <th style={comBorda}>Nome</th>
                        <th style={comBorda}>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLista()}
                </tbody>
            </table>
        </div>
    )
}