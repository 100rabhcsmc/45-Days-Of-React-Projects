import React from "react";

const Colorpicker = (props) => {
  let newColor = "rgb(" + props.c1 + "," + props.c2 + "," + props.c1 + ")";

  const outputstyle = {
    textAlign: "center",
    fontSize: "calc(10px+1vmin)",
    color: "black",
    paddingTop: "6vw",
  };

  const divstyle = {
    margin: "40px auto",
    backgroundColor: newColor,
    textAlign: "center",
    width: "20vw",
    height: "20vw",
    borderRadius: "100%",
    display: "inline-block",
  };
  return (
    <div style={divstyle} onClick={props.clicked} >
      <h1 style={outputstyle}>{newColor}</h1>
    </div>
  );
};

export default Colorpicker;
