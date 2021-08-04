import React, { Component } from "react";
import RelishRemainder1 from "./RelishRemainder1";

class Relishremainder extends Component {
  state = {
    relishStyles: [
      {
        name: "Branston Pickle",
        description: "A british pickle that is brown in colour",
      },
      {
        name: "Fruit Chutney",
        description: "A chutney, surprisingly made of fruits",
      },
      { name: "Onion Jam", description: "A sweet chutney made of onions" },
      {
        name: "Tomato Relish",
        description: "A classic made with apples and tomatoes",
      },
      { name: "Picalilli", description: "Its a yellow one that tastes weird" },
      {
        name: "Mango Chutney",
        description: "A spicy one, served with Indian currys",
      },
    ],
  };

  //DELETE RELISH EVENTHANDLER
  deleteRelishHandler = (relishIndex) => {
    //below we are copying the person state array, so we do not mutate the original data (this is best practise)
    const relishes = [...this.state.relishStyles];
    relishes.splice(relishIndex, 1);
    this.setState({ relishStyles: relishes });
  };

  render() {
    const style = {
      border: "2px solid white",
      borderRadius: "0px",
      width: "100px",
      height: "60px",
      fontSize: "30px",
    };

    let relishes = null;
    if (this.state.relishStyles.length > 0) {
      relishes = (
        <div>
          {this.state.relishStyles.map((relish, index) => {
            return (
              <RelishRemainder1
                name={relish.name}
                description={relish.description}
                click={() => {this.deleteRelishHandler(index)}}
              />
            );
          })}
        </div>
      );
    } else {
      //This code renders if the relishState IS empty

      relishes = (
        <div>
          <h1>DON'T FORGET ABOUT RELISH!</h1>
          <button style={style} onClick={() => window.location.reload()}>
            OK
          </button>
        </div>
      );
    }

    //THE RETURN BLOCK
    return (
      <div className="App">
        <h1>45 Days Of React Project</h1>
        <h2>Day 5 / Relish Remainder</h2>
        <div>{relishes}</div>
      </div>
    );
  }
}

export default Relishremainder;
