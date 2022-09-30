import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './Components/Home';
import Library from './Components/Library';
import AlbumDetail from './Components/AlbumDetail';
import AlbumProducts from './Components/AlbumProducts';
import ProductDetail from './Components/ProductDetail';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Me from './Components/Me';
import Cart from './Components/Cart';
import Orders from './Components/Orders';
import NavBar from './Components/NavBar';
import AlbumUpload from './Components/AlbumUpload';
import AlbumEditForm from './Components/AlbumEditForm';
import ProductEditForm from './Components/ProductEditForm';


function App() {

  const [currentUser, setCurrentUser] = useState("")
  const history = useHistory()

  // Get current user
  useEffect(()=> {
		fetch("/me")
		.then(response => {
    	if(response.ok){
    		response.json().then(user => setCurrentUser(user))
      	} else {
       		response.json().then(data => console.log(data))
      	}})
	},[])

  // Function to check if you are logged in, redirect if not
  function mustBeLoggedIn(){
      fetch("/me")
      .then(response => {
        if(response.ok){
            // Do nothing, just check to see if the user is logged in
        }else {
            // Reroute to login page
            history.push("/login")
        }})
  }

  // useEffect for fetching albums /w image, fetch abstracted into a function so it can be passed to the upload form
  const [allAlbums, setAllAlbums] = useState([])

	useEffect( () => {
    fetch('/albums-with-images')
		.then( (response) =>response.json())
		.then( (data) => setAllAlbums(data))
  },[])

  function updateAlbums(updatedAlbum){setAllAlbums( (allAlbums) => {
    return allAlbums.map(album => {
     if(album.id === updatedAlbum.id){
       return updatedAlbum
     } else {
       return album
     }
    })
  })}
 
  return (
    <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
        <Route path ="/login">
          <Login setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path ="/signup">
          <SignUp setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path ="/me/cart">
          <Cart mustBeLoggedIn={mustBeLoggedIn} allAlbums={allAlbums} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path ="/me/orders">
          <Orders mustBeLoggedIn={mustBeLoggedIn} allAlbums={allAlbums}/>
        </Route>
        <Route path ="/me">
          <Me currentUser={currentUser}/>
        </Route>
        <Route path ="/albums/new">
          <AlbumUpload setAllAlbums={setAllAlbums} updateAlbums={updateAlbums} mustBeLoggedIn={mustBeLoggedIn} currentUser={currentUser}/>
        </Route>
        <Route path ="/albums/:id/products/:product_id/edit">
          <ProductEditForm mustBeLoggedIn={mustBeLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} setAllAlbums={setAllAlbums} allAlbums={allAlbums}/>
        </Route>
        <Route path ="/albums/:id/products/:product_id">
          <ProductDetail currentUser={currentUser}/>
        </Route>
        <Route path ="/albums/:id/products">
          <AlbumProducts currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path ="/albums/:id/edit">
          <AlbumEditForm setAllAlbums={setAllAlbums} mustBeLoggedIn={mustBeLoggedIn} currentUser={currentUser}/>
        </Route>
        <Route path ="/albums/:id">
          <AlbumDetail currentUser={currentUser} setAllAlbums={setAllAlbums}/>
        </Route>
        <Route path ="/albums">
          <Library allAlbums={allAlbums}/>
        </Route>
        <Route exact path ="/">
          <Home/>
        </Route>
      </Switch>
    </>  
  );
}

export default App;