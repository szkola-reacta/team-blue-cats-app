function Card(props) {

  const styles = {
    color: "grey",
    border: "solid 1px white",
    borderRadius: "20%",
    padding: 20,
    margin: 30,
  }

  return (
    <div style={styles}>
      {props.question}
    </div>
  );
}

export default Card;
