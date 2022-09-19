import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [signUpData,setSignUpData] = useState({})

  const handleChange = () => {

  }


  return (
    <div className="App">
      <form>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange} type="text" name="username"/>
        <br/>
        <label htmlFor="email">E-Mail:</label>
        <input onChange={handleChange} type="text"name="email"/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input onChange={handleChange} type="text"name="password"/>
        <br/>
        <button>Sign Up!</button>
      </form>
    </div>
  );
}

export default App;
