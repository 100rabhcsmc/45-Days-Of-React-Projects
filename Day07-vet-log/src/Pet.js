import React from 'react'

const Pet = (props) => {
  const outputstyle = {
    textAlign: 'center',
    fontSize: '20px',
    color: 'black'
    };
  
    const divstyle = {
    textAlign: 'center',
    fontSize: '20px',
    backgroundColor: 'white',
    minWidth: '100px',
    padding: '20px',
    margin: '10px',
    display: 'inline-block'
    };
  return (
    <div style={divstyle}>
      <ul>
        <li style={outputstyle}>Animal:{props.animal}</li>
        <li style={outputstyle}>Animalname:{props.animalname}</li>
        <li style={outputstyle}>owner:{props.owner}</li>
        <li style={outputstyle}>illness:{props.illness}</li>
      </ul>
    </div>
  )
}


export default Pet;