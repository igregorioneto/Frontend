export default function List(props) {
  return (
    <div>
      <h1>List...</h1>
      <ul style={{listStyle: "none", padding: 0}}>
        {props.children}
      </ul>
    </div>
  );
}