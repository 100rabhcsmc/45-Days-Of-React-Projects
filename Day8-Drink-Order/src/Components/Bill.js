import React from 'react'

const Bill = (props) => {
    const outputstyle={
        textAlign:'center',
        fontSize:'calc(10px + 4vmin)',
        color:'black'
    }
    const divstyle={
        backgroundColor:'white',
        display:'inline-block',
        margin:'10px',
        padding:'10px',
        minwidth:'40%',
        
    }

    const buttonstyle={
        border:'2px solid black',
        borderRadius:'0px',
        fontSize:'20px',
        margin:'10px'
    }
    return (
        <div style={divstyle}>
            <h1 style={outputstyle}>Custmore Bill:</h1>
            <p style={outputstyle}>${props.total}</p>
            <button style={buttonstyle} onClick={props.click}>Pay Bill</button>
        </div>
    )
}
export default Bill;