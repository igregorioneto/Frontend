import ComponenteControlado from "@/components/ComponenteControlado";
import ComponenteNaoControlado from "@/components/ComponenteNaoControlado";
import { useState } from "react";

export default function formulario() {
    const [value, setValue] = useState("");

    function alterarInput() {
        setValue(value + "!")
    }

    return (
        <dev style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <span>Componente Controlado</span>
            <span>{value}</span>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={alterarInput}>Alterar</button>
            <ComponenteControlado />
            <ComponenteNaoControlado />
        </dev>
    )
}