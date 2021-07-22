import React, { Component } from 'react'
import Demo from './demo'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:[
         {namesa:'saurabh'},
         {namesa:'sachin'},
         {namesa:'aditya'}
       ]
    }
  }

  delethandler=(nameindex)=>{
    const nam=[...this.state.name]
    nam.splice(nameindex,1);
    this.setState({name:nam})
  }
  
  render() {
   let name=null;
   if(this.state.name.length>0){
     name=(
       <div>
         {this.state.name.map((innam,index)=>{
           return(<Demo
           saur={innam.namesa}
           click={()=>{this.delethandler(index)}}
           />)
         })}
       </div>
     );
   }else{
     name=(
       <div>
         <h1>hey please try again</h1>
         <button onClick={()=>window.location.reload()}>ok</button>
       </div>
     )
   }

    return (
      <div>
        {name}
      </div>
    )
  }
}

export default App;
