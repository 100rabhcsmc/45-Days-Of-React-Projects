import React, { Component } from "react";
import Thought from "./Thought";
import './App.css';
class App extends Component {
  state = {
    thoughts: [],
  };

  //DELETE THOUGHT
  deleteThoughtHandler = (thoughtIndex) => {
    //below we are copying the person state array, so we do not mutate the original data (this is best practise)
    const thoughts = [...this.state.thoughts];
    thoughts.splice(thoughtIndex, 1);
    this.setState({ thoughts: thoughts });
  };

  //ADD THOUGHT
  addThoughtHandler = (event) => {
    event.preventDefault();
    const thoughts = [...this.state.thoughts];
    const newthought = {};

    //for newthought, we assign it= to our ref'd input value
    newthought.content = this.newThought.value;

    thoughts.push(newthought);
    this.setState({ thoughts: thoughts });

    this.newThought.value = null;
  };

  render() {
    let thoughts = (
      <div>
        {this.state.thoughts
          .map((thought, index) => {
            return (
              <Thought
                thought={thought.content}
                click={() => this.deleteThoughtHandler(index)}
              />
            );
          })
          //reversing the array so the latest post shows first
          .reverse()}
      </div>
    );

    //THE RETURN BLOCK
    return (
      <div className="App">
        <header className="App-header">
          <h1>45 days of React</h1>
          <h2>Day Six / Thought Log</h2>

          <form onSubmit={(event) => this.addThoughtHandler(event)}>
            <input
              type="text"
              className="textfield"
              placeholder="Type Thought"
              ref={(input) => {
                this.newThought = input;
              }}
            />

            <input className="mainbtn" type="submit" value="Post" style={{backgroundColor:'#96e37d'}}/>
            <ul>{thoughts}</ul>
          </form>
        </header>

        
      </div>
    );
  }
}

export default App;
