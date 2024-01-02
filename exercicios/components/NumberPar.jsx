export default function NumberPar(props) {
  const numberEven = props.number % 2 === 0
  return numberEven ? <span>{props.number}</span>:null
}