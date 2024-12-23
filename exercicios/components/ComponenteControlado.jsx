import { useState } from "react";

function ComponenteControlado() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) =>  {
        event.preventDefault();
        alert(`Você digitou: ${inputValue}`);
    }

    return (
        <div>
            <h3>Componente Controlado</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button type="submit" >Enviar</button>
            </form>
        </div>
    )
}

export default ComponenteControlado;