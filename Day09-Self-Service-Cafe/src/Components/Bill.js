import React from "react";

const Bill = (props) => {
  const outputstyle = {
    textAlign: "center",
    fontSize: "calc(10px + 4vmin)",
    color: "black",
  };

  const divstyle = {
    backgroundColor: "#b37700",
    display: "inline-block",
    margin: "10px",
    padding: "10px",
    minWidth: "40%",
  };

  const buttonstyle = {
    border: "2px solid black",
    borderRadius: "0px",
    fontSize: "20px",
    margin: "10px",
    backgroundColor: "#ffdd99",
  };

  return (
    <div style={divstyle}>
      <h3 style={outputstyle}>Total To Pay:</h3>
      <h2 style={outputstyle}>${props.total}</h2>

      <button style={buttonstyle} onClick={props.click}>
        Place Order
      </button>
    </div>
  );
};

export default Bill;
