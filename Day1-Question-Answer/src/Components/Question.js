import React, { Component } from "react";
import './Question.css';


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Which planet in our solar system is known as the Red Planet?",
    };
  }

  handlechange = () => {
    this.setState({ name: "Mars" });
  };

  render() {
    return (
      <div className='main'>
        <h1>{this.state.name}</h1>
        <button onClick={this.handlechange} >Answer</button>
      </div>
    );
  }
}

export default Question;
