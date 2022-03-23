function Button(props, children) {
    return (
        <button onClick={props.handleBtnClick} style={{fontSize: 20}}>
          {props.children}
        </button>
    );
}

export default Button;
