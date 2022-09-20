import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  ////// Begin Sign Up Functionality
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
  ////// End Sign up Functionality

  ////// Begin Login Functionality
  const [loginForm,setLoginForm] = useState({
    username:'',
    password:''
  })

  const handleChangeLog = (e) => {
    setLoginForm({...loginForm, [e.target.name]: e.target.value})
  }

  const handleSubmitLog = (e) => {
    e.preventDefault()
    fetch("/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginForm)
    })
    .then(response=>response.json())
    .then(newUser=>console.log(newUser))
    .catch(error=>console.log(Object.entries(error.errors)))
  }

  ////// End Login Functionality

  //////



  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(response => {
      response.ok ? console.log("logged out") : console.log ("error")
    })
  }
  //////
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
      <br/>
      <form onSubmit={handleSubmitLog}>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChangeLog} type="text" name="username"/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input onChange={handleChangeLog} type="password"name="password"/>
        <br/>
        <button>Login</button>
      </form>
      <br/>
      <button onClick={handleLogout}>Logout</button>
      <br/>
      <form onSubmit={handleSubmitLog}>
        <label htmlFor="albumName">Album Name:</label>
        <input onChange={handleChangeLog} type="text" name="albumname"/>
        <br/>
        <label htmlFor="length">{"Length (Seconds)"}:</label>
        <input onChange={handleChangeLog} type="number"name="lenght"/>
        <br/>
        <button>POST NEW ALBUM</button>
      </form>
    </div>
  );
}

export default App;
