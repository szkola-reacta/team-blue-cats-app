function Card(props) {

  const styles = {
    color: "grey",
    border: "solid 1px white",
    backgroundColor: "white",
    borderRadius: 40,
    padding: 20,
    margin: 30,
    width: 500,
    height: 200,
  }

  return (
    <div onClick={props.handleClick} style={styles}>
      {props.children}
    </div>
  );
}

export default Card;
