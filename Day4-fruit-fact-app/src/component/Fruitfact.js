import React from "react";

const Fruitfact = (props) => {
  const outputstyle = {
    textAlign: "center",
    fontSize: "calc(10px + 2vmin)",
  };

  const divstyle = {
    width: "150px",
    height: "150px",
    border: "4px solid white",
    display: "inline-block",
    margin: "40px",
    padding: "10px",
    borderColor: "darkslategray",
  };

  return (
    <div style={divstyle}>
      <h2 style={outputstyle}>{props.fruit}</h2>
      <p>{props.fact}</p>
    </div>
  );
};

export default Fruitfact;
