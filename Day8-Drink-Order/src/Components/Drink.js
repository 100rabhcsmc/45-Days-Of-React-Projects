import React from 'react'

const Drink = (props) => {
    
    const divstyle={
        border:'4px solid white',
        display:'inline-block',
        margin:'10px',
        padding:'20px',
        alignItems:'center',
        width:'25%',
        
    }
    
    const outputstyle={
        textAlign:'center',
        fontSize:'calc(10px + 2vmin)',
        color:'white'
    }

    const buttonstyle={
        border:'2px solid white',
        borderRadius:'0px',
        margin:'10px'
    }
    return (
        <div style={divstyle}>
            <h3 style={outputstyle}>{props.name}</h3>
            <p>${props.price}</p>
            <button style={buttonstyle} onClick={props.click}>Order Bill</button>
        </div>
    )
}
export default Drink;