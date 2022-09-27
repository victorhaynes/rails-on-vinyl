import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/me">Account</NavLink>
        <NavLink to="/me/cart">Cart</NavLink>
        <NavLink to="/me/orders">Orders</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/login">Login</NavLink>
    </>
  )
}

export default NavBar