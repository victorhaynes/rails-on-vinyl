import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { NavStyle, NavGrid } from '../Styles/NavStyles'
import { TbVinyl} from 'react-icons/tb'
import { FaShoppingCart} from 'react-icons/fa'

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

    function navHome(){
        history.push("/")
    }
  
    return (
    <NavStyle>
        <NavGrid>
            <text onClick={navHome}className='logo'>Rails <TbVinyl/>n Vinyl</text>
            <NavLink exact to="/">Home</NavLink>{" "}
            <NavLink exact to="/albums">Explore</NavLink>{" "}
            <NavLink exact to="/me">Account</NavLink>{" "}
            <NavLink exact to="/me/cart"><FaShoppingCart className='cart'/></NavLink>{" "}
            {currentUser ? null : <NavLink exact to="/login">Login</NavLink>}
            {currentUser ? <text onClick={handleLogout} className="logout-button">Logout</text> : null}
            <NavLink className="signup-button" exact to="/signup">Register</NavLink>{" "}
        </NavGrid>
    </NavStyle>
  )
}

export default NavBar