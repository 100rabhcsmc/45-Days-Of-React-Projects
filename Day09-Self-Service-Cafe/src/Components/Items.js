import React from "react";

const Item = (props) => {
  const divstyle = {
    backgroundColor: "#ff704d",
    border: "4px solid black",
    display: "inline-block",
    margin: "3px",
    padding: "3px",
    width: "24%",
  };

  const outputstyle = {
    textAlign: "center",
    fontSize: "115%",
    color: "black",
    wordWrap: "break-word",
  };
  const btnstyle = {
    border: "1px solid black",
    borderRadius: "0px",
    width: "100%",
    backgroundColor: "#ffdd99",
  };
  return (
    <div style={divstyle}>
      <h1 style={outputstyle}>{props.name}</h1>
      <p style={{color:'#003300'}}>${props.price}</p>
      <button style={btnstyle} onClick={props.click}>
        Add Item
      </button>
    </div>
  );
};

export default Item;
