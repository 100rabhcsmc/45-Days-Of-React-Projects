import React, { Component } from "react";
import "./App.css";
import Bill from "./Components/Bill";
import Items from "./Components/Items";
import Orders from "./Components/OrdersItem";

class App extends Component {
  state = {
    items: [
      { name: "Thums Up", price: 1, id: 0 },
      { name: "Pepsi", price: 2, id: 0 },
      { name: "Sprite", price: 1, id: 0 },
      { name: "Limca", price: 3, id: 0 },
      { name: "Fanta", price: 1, id: 0 },

      { name: "Sandwich", price: 1, id: 1 },
      { name: "Rice", price: 3, id: 1 },
      { name: "Pizza", price: 1, id: 1 },
      { name: "Chicken", price: 2, id: 1 },
      { name: "Fish", price: 1, id: 1 },
    ],
    bill: 0,
    revenue: 0,
    customerOrder: [],
    customerCount: 0,
  };

  addItemHandler = (index) => {
    let currentBill = this.state.bill;
    let addToBill = this.state.items[index].price;
    let NewBill = currentBill + addToBill;

    const customerOrder = [...this.state.customerOrder];
    const itemToAdd = {};

    itemToAdd.name = this.state.items[index].name;
    itemToAdd.price = this.state.items[index].price;
    customerOrder.push(itemToAdd);

    this.setState({ customerOrder: customerOrder });
    this.setState({ bill: NewBill });
  };

  payBillHandler = () => {
    alert("are you sure?");

    let revenue = this.state.revenue;
    let bill = this.state.bill;
    let newRevenue = bill + revenue;

    let customerCount = this.state.customerCount;
    let NewcustomerCount = customerCount + 1;

    this.setState({ revenue: newRevenue });
    this.setState({ customerCount: NewcustomerCount });

    this.setState({ bill: 0 });
    this.setState({ customerOrder: [] });
  };
  render() {
    let drinks = (
      <div>
        {this.state.items.map((item, index) => {
          if (item.id == 0) {
            return (
              <Items
                name={item.name}
                price={item.price}
                click={() => this.addItemHandler(index)}
              />
            );
          }
        })}
      </div>
    );

    let food = (
      <div>
        {this.state.items.map((item, index) => {
          if (item.id == 1) {
            return (
              <Items
                name={item.name}
                price={item.price}
                click={() => this.addItemHandler(index)}
              />
            );
          }
        })}
      </div>
    );

    let OrderItems = (
      <div>
        <h2>Items Selected:</h2>
        {this.state.customerOrder.map((drink, index) => {
          return <Orders item={drink.name} price={drink.price} />;
        })}
      </div>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1>45 Days Of React Project</h1>
          <h2>Day nine / Self Service Cafe</h2>
        </header>

        <div>
          <p className="revenue">
            Taking:${this.state.revenue} / customer:{this.state.customerCount}
          </p>
        </div>

        <div>
          <div className="Menu-section">
            <h1>Drinks Menu</h1>
            <ul>{drinks}</ul>
          </div>

          <div className="Menu-section">
            <h1>Food Menu</h1>
            <ul>{food}</ul>
          </div>
        </div>

        <div>
          <div className="Menu-section">
            <ul>{OrderItems}</ul>
          </div>

          <div className="Menu-section">
            <Bill total={this.state.bill} click={() => this.payBillHandler()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
