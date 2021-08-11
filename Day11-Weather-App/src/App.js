import React from "react";
import "./App.css";
import Weather from "./Components/Weather";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

const App = () => {
  return (
    <div className="App">
      <Weather />
    </div>
  );
};

export default App;
