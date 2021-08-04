import React from "react";

const OrdersItem = (props) => {
  const divstyle = {
    display: "inline-block",
    margin: "10px",
    padding: "10px",
    minWidth: "100%",
    verticalAlign: "top",
  };

  
  return (
    <div style={divstyle}>
      <li style={{color: "#3e3e49"}}>
        {props.item}: ${props.price}
      </li>
    </div>
  );
};
export default OrdersItem;
