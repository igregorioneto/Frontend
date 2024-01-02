export default function lista1() {
    const numbers = []
    for (let i = 1; i <= 10; i++) {
        numbers.push(<span>{i},</span>)        
    }

    return (
        <div>{numbers}</div>
    )
}