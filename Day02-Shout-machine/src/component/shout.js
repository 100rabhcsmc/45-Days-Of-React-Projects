import React, { Component } from 'react'
import "./shout.css";

class Shout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }
    handlenamechange=(e)=>{
        this.setState({name:e.target.value})
    }
    
    render() {
        return (
            <div className='main'>
                <input
                type='text'
                 value={this.state.name}
                 onChange={this.handlenamechange}
                />
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Shout;
