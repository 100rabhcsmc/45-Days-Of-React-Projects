import React, { Component } from "react";
import Pet from "./Pet";
import "./App.css";

class App extends Component {
  state = {
    Pets: [
      { animal: 'Cat', animalname: 'Chips', owner: 'Jenny', illness: 'scurvy', date: "23/05/2015" },
      { animal: 'Fish', animalname: 'Flubber', owner: 'John', illness: 'Elephantitis', date: "23/05/2015" },
    ],
  };

  addHandle = (e) => {
    e.preventDefault();
    const Pets = [...this.state.Pets];
    const NewPets = {};

    NewPets.animal = this.NewPetsanimal.value;
    NewPets.animalname = this.NewPetsanimalname.value;
    NewPets.owner = this.NewPetsowner.value;
    NewPets.illness = this.NewPetsillness.value;

    Pets.push(NewPets);
    this.setState({ Pets: Pets });

    this.NewPetsanimal.value = null;
    this.NewPetsanimalname.value = null;
    this.NewPetsowner.value = null;
    this.NewPetsillness.value = null;
  };
  render() {

    let Pets = (
      <div>
        {this.state.Pets.map((pet) => {
          return (
            <Pet
              animal={pet.animal}
              animalname={pet.animalname}
              owner={pet.owner}
              illnesss={pet.illness}
            />
          );
        }).reverse()}
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ margin: "-15px" }}>45 days of React</h1>
          <h2 style={{ fontSize: "2rem" }}>Day Seven / Vet Log</h2>

          <form  className="form" onSubmit={(event) => this.addHandle(event)}>
            <h2 style={{ fontSize: "1.7rem",color:'#ffcccc' }}>Add Pet Records</h2>
            <select

              className="textfield"
              ref={(input) => {
                this.NewPetsanimal = input;
              }}
            >
              <option value="" disabled selected>
                Animal / Species
              </option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rodent">Rodent</option>
              <option value="Fish">Fish</option>
            </select>

            <input
              type="text"
              className="textfield"
              placeholder="Pet Name"
              ref={(input) => {
                this.NewPetsanimalname = input;
              }}
            />

            <input
              type="text"
              className="textfield"
              placeholder="Owner Name"
              ref={(input) => {
                this.NewPetsowner = input;
              }}
            />

            <input
              type="text"
              className="textfield"
              placeholder="illness"
              ref={(input) => {
                this.NewPetsillness = input;
              }}
            />

            <input
              type="submit"
              className="mainbtn"
              value="Add Pet"
              style={{ backgroundColor: "#ffcccc" }}
            />
          </form>
          <ul>{Pets}</ul>
        </header>
        
      </div>
    );
  }
}
export default App;
