import { useRef } from "react";

function ComponenteNaoControlado() {
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Você digitou: ${inputRef.current.value}`);
    }

    return (
        <dev>
            <h3>Componente Não Controlado</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" ref={inputRef} />
                </label>
                <button type="submit" >Enviar</button>
            </form>
        </dev>
    )

}

export default ComponenteNaoControlado;