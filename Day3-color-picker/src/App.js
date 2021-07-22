import React, { Component } from "react";
import "./App.css";
import Colorpicker from "./component/colorpicker";

class App extends Component {
  state = {
    color1: 138,
    color2: 131,
    color3: 198,
  };

  colorCreator = () => {
    return Math.floor(Math.random() * 250) + 1;
  };

  updatecolorHandler = (e) => {
    this.setState({
      color1: this.colorCreator(),
      color2: this.colorCreator(),
      color3: this.colorCreator(),
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">45 Days Of React Project</h1>
        <h2>Day 3 / Random Color picker</h2>

        <div>
          <Colorpicker
            clicked={this.updatecolorHandler}
            c1={this.state.color1.toString()}
            c2={this.state.color2.toString()}
            c3={this.state.color3.toString()}
          />
        </div>
      </div>
    );
  }
}

export default App;
