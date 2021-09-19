import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUser></LoadUser>
    </div>
  );
}

function LoadUser(){
  const[users,SetUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => SetUsers(data))
  },[ ])


  return(
    <div>
      <h2>User Loader : {users.length}</h2>
      {
        users.map(user => <User name = {user.name} phone ={user.phone}></User>)
      }
    </div>
  )
  function User(props){
    return(
      <div className="user">
        <h2>Name : {props.name}</h2>
        <p>Phone Number : {props.phone}</p>
      </div>
    )
  }
}
export default App;
