import React from 'react'

const Demo = (props) => {
    return (
        <div>
           <h1>{props.saur}</h1> 
           <button onClick={props.click}>delet</button>
        </div>
    )
}

export default Demo;
