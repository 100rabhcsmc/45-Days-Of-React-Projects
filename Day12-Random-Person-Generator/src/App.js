import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [cell, setCell] = useState("");
  const [email, setEmail] = useState("");

  const Getdata = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=100");
      console.log(res);
      setProfile(res.data.results[0].picture.large);
      setName(
         `${res.data.results[0].name.title} ${res.data.results[0].name.first}  ${res.data.results[0].name.last}`
      );
      setCell(res.data.results[0].cell);
      setEmail(res.data.results[0].email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <div className="App">
      <div className="Card">
        <img src={profile} alt="profile pictures" />
        <h3><i className="fa fa-user-o" aria-hidden="true"></i>  {name}</h3>
        <p><i className="fa fa-phone" aria-hidden="true"></i> {cell}</p>
        <h4><i className="fa fa-envelope-o" aria-hidden="true"></i> {email}</h4>
      </div>
      <button onClick={Getdata}>New Person</button>
    </div>
  );
};

export default App;
