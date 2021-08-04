import React, { Component } from "react";
import './App.css';
import Fruitfact from "./component/Fruitfact";

class App extends Component {
  state = {
    fruits: [
      { name: "Banana", fact: "I am yellow in colour" },
      { name: "Peach", fact: "I have a fuzzy skin" },
      { name: "Apple", fact: "I tend to be crunchy" },
    ],
    showFruits: true,
    showFruitMessage: "Show Me Fruit Facts",
  };

  toggleFruitFactsHandler = () => {
    const currentlyShowing = this.state.showFruits;
    this.setState({ showFruits: !currentlyShowing });

    if (currentlyShowing === true) {
      this.setState({ showFruitMessage: "Show Me Fruit Facts" });
    } else {
      this.setState({ showFruitMessage: "Fruit Facts Are Boring" });
    }
  };

  render() {
    // Here we place the contentwe wish to render conditionally
    let fruitFacts = null;
    if (this.state.showFruits) {
      fruitFacts = (
        <div className="container">
          < Fruitfact
            fruit={this.state.fruits[0].name}
            fact={this.state.fruits[0].fact}
          />

          <Fruitfact
            fruit={this.state.fruits[1].name}
            fact={this.state.fruits[1].fact}
          />

          <Fruitfact
            fruit={this.state.fruits[2].name}
            fact={this.state.fruits[2].fact}
          />
        </div>
      );
    }

    //The Return Block

    return (
      <div className="App">

        <header>
          <h1>45 Days Of React Project</h1>
          <p className='appname'>Day4 / Fruit Fact App</p>
        </header>
        

        <div className="container">
          <button onClick={this.toggleFruitFactsHandler}>
            {this.state.showFruitMessage}
          </button>
        </div>

        {fruitFacts}
      </div>
    );
  }
}

export default App;
