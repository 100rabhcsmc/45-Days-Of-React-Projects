import React from 'react';
// import Font Awesome CSS


const TodoList = (props) => {
    
    return (
        <div className='list-style'>
            <i className="fa fa-trash-o" onClick={()=>{
                return props.onSelect(props.id);
            }}></i>
            <li>{props.text}</li>
        </div>
    )
}

export default TodoList
