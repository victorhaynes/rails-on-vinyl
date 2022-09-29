import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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

// consider having /me fetch to the carts controller user_cart action.
// In this specific app, a cart ALSO uniquely identifies users

function App() {

  const [currentUser, setCurrentUser] = useState("")
  // const [cartDetails, setCartDetails] = useState([])


  useEffect(()=> {
		fetch("/me")
		.then(response => {
      if(response.ok){
          response.json().then(user => {
              setCurrentUser(user)
          })
      }else {
          response.json().then(data => console.log(data))
      }
  })
	},[])

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
          <Cart currentUser={currentUser}/>
        </Route>
        <Route path ="/me/orders">
          <Orders/>
        </Route>
        <Route path ="/me">
          <Me currentUser={currentUser}/>
        </Route>
        <Route path ="/albums/new">
          <AlbumUpload setAllAlbums={setAllAlbums} updateAlbums={updateAlbums}/>
        </Route>
        <Route path ="/albums/:id/products/:product_id">
          <ProductDetail/>
        </Route>
        <Route path ="/albums/:id/products">
          <AlbumProducts/>
        </Route>
        <Route path ="/albums/:id/edit">
          <AlbumEditForm setAllAlbums={setAllAlbums}/>
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