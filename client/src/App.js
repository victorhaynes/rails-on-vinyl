import './App.css';
import React from 'react';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewListing from './Components/NewListing';
import Home from './Components/Home';
import Library from './Components/Library';
import AlbumDetail from './Components/AlbumDetail';
import AlbumProducts from './Components/AlbumProducts';
import ProductDetail from './Components/ProductDetail';

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
    <Switch>
      <Route path='/user-test'>
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
        </div>
      </Route>
      <Route path ="/album-testing">
        <NewListing/>
      </Route>
      <Route path ="/albums/products/listings/:id/:product_id">
        <ProductDetail/>
      </Route>
      <Route path ="/albums/products/:id">
        <AlbumProducts/>
      </Route>
      <Route path ="/albums/:id">
        <AlbumDetail/>
      </Route>
      <Route path ="/albums">
        <Library/>
      </Route>
      <Route exact path ="/">
        <Home/>
      </Route>
    </Switch>
  );
}

export default App;
