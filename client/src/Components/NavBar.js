import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function NavBar({currentUser, setCurrentUser}){
    
    const history = useHistory()

    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(response => {
            if(response.ok){
                setCurrentUser("")
                history.push("/")
            }else {
                response.json().then(data => console.log(data))
            }
        })
    }
  
    return (
    <>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/me">Account</NavLink>{" "}
        <NavLink to="/me/cart">Cart</NavLink>{" "}
        <NavLink to="/me/orders">Orders</NavLink>{" "}
        <NavLink to="/signup">Signup</NavLink>{" "}
        <NavLink to="/albums">Library</NavLink>{" "}
        {currentUser ? null : <NavLink to="/login">Login</NavLink>}
        {currentUser ? <button onClick={handleLogout}>Logout</button> : null}
    </>
  )
}

export default NavBar