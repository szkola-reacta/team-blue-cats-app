function Card(props) {

  const styles = {
    color: "grey",
    border: "solid 1px white",
    borderRadius: "20%",
    padding: 20,
    margin: 30,
  }

  return (
    <div onClick={props.handleClick} style={styles}>
      {props.children}
    </div>
  );
}

export default Card;
