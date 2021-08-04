import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const InputHandler = (e) => {
    setItem(e.target.value);
  };

  const AddItem = () => {
    setNewItem((oldItem) => {
      return [...oldItem, item];
    });

    setItem("");
  };

  const deleteItem = (id) => {
    setNewItem((oldItem) => {
      return oldItem.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <div className="wrapper">
        <h1>45 Days Of React</h1>
        <h2>Todo List</h2>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Type Here.."
            autoComplete="off"
            value={item}
            onChange={InputHandler}
          />
          <button onClick={AddItem}>+</button>
        </div>

        <ul>
          {newitem.map((itemval, index) => {
            return (
              <TodoList
                text={itemval}
                key={index}
                id={index}
                onSelect={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
