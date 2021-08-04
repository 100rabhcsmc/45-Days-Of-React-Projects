import React from "react";

const Thought = (props) => {
  return (
    <div>
      <li>
        {props.thought} 
      </li>
      <button className="btn" onClick={props.click}>
        Delete Thought
      </button>
    </div>
  );
};

export default Thought;
