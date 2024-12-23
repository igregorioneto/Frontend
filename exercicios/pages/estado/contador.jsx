import NumeroDisplay from "@/components/NumeroDisplay";
import { useState } from "react";

export default function contador() {
    const [numero, setNumero] = useState(0);

    const dec = () => setNumero(numero - 1);
    const inc = () => setNumero(numero + 1)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />
            <div>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}