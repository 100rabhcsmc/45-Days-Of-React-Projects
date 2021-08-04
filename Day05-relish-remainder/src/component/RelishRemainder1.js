import React from "react";

const RelishRemainder1 = (props) => {
  const outputstyle = {
    textAlign: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "black",
  };

  const divstyle = {
    border: "4px solid white",
    display: "inline-block",
    margin: "60px",
    padding: "10px",
    alignItems: "center",
    maxWidth: "300px",
    backgroundColor:'#d6a829',
    
  };

  const buttonstyle = {
    border: "2px solid white",
    borderRadius: "0px",
    display: "inline-block",
    margin: "10px",
    maxWidth: "100px",
    maxHeight: "40px",
  };

  return (
    <div style={divstyle}>
      <h3 style={outputstyle}>{props.name}</h3>
      <p>{props.description}</p>

      <button style={buttonstyle} onClick={props.click}>
        Not Right Now
      </button>
    </div>
  );
};

export default RelishRemainder1;
