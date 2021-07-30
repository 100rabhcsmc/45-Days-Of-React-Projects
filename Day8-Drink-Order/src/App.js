import React from 'react';
import './App.css';
import Bill from "./Components/Bill";
import Drink from './Components/Drink';

class App extends React.Component {
  state={
    drinks:[
      {name:'Sprite',price:1},
      {name:'Thums Up',price:2},
      {name:'Pepsi',price:1},
      {name:'Coca Cola',price:2},
      {name:'Limca',price:3}
    ],
    bill:0,
  }

  addHandler=(drinkindex)=>{
    let currentBill=this.state.bill;
    let addToBill=this.state.drinks[drinkindex].price;
    let NewBill=currentBill+addToBill;

    this.setState({bill:NewBill})
    console.log(this.state.bill)
  };
   
  payBillHandler=()=>{
    this.setState({bill:0})
  }


  render(){

    let drinks=(
      <div>
        {this.state.drinks.map((drink,index)=>{
          return<Drink
          name={drink.name}
          price={drink.price}
          click={()=>this.addHandler(index)}
          />
        })}
      </div>
    );
    return (
      <div className="App">
        <header className="App-header">
          <h1>45 Days Of react</h1>
          <p>Day8 / Drink Order</p>
          <ul>{drinks}</ul>

          <div>
          <Bill
          total={this.state.bill}    
          click={()=>this.payBillHandler()}
          />
        </div>

          
        </header>

       
       
      </div>
    );
  }
  
}

export default App;
