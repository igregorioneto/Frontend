import NumeroDisplay from "@/components/NumeroDisplay";
import { mega } from "@/functions/mega";
import { useEffect, useState } from "react";

export default function megasena() {
    const [qtde, setQtde] = useState(6);
    const [numeros, setNumeros] = useState([]);

    useEffect(() => {
        setNumeros(mega(qtde))
    }, [])
    
    function handleNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero} />
        )
    }    

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>Mega Sena</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                {handleNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde} 
                    onChange={ev => setQtde(ev.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}