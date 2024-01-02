import Estilo from "@/components/Estilo";

export default function utilizandoEstilo() {
    return (
        <div>
            <Estilo numero={13} color="yellow" direita />
            <Estilo numero={-13} color="yellow" direita />
        </div>
    )
}