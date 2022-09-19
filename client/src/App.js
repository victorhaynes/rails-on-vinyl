import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [signUpForm,setSignUpForm] = useState({
    username:'',
    email:'',
    password:''
  })

  const handleChange = (e) => {
    setSignUpForm({...signUpForm, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/signup", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(signUpForm)
    })
    .then(response=>response.json())
    .then(newUser=>console.log(newUser))
    .catch(error=>console.log(Object.entries(error.errors)))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} type="text" name="username"/>
        <br/>
        <label htmlFor="email">E-Mail:</label>
        <input onChange={handleChange} type="text"name="email"/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input onChange={handleChange} type="password"name="password"/>
        <br/>
        <button>Sign Up!</button>
      </form>
    </div>
  );
}

export default App;
