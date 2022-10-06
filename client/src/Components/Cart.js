import React, {useEffect} from 'react'
import { CartGrid, CartStyle } from '../Styles/CartStyles'


// Note to self: after creating an order for User X, User Y will not see that the item is sold out (i.e. have the item removed from their cart) until they refresh the page
// HOWEVER if I log in as User X, checkout, then log in as User Y the sold item will correctly be removed from my cart without any manual refreshes.
// If we need to know in 100% real time whether or not an item in a User's cart is still available we would need to fetch & set current user
// at every component. This is a design decision to hit that database less.

function Cart({mustBeLoggedIn, allAlbums, currentUser, setCurrentUser}) {
	
	useEffect(() =>mustBeLoggedIn())

	function createOrder(productID){
		fetch(`/checkout`,{
		  method:'POST',
		  headers:{'Content-Type': 'application/json'},
		  body:JSON.stringify({})
		})
		.then(response => {
				if(response.ok) {
					response.json().then(data => {
						let copyOfUser = {...currentUser}
						copyOfUser.cart.cart_details = []
						setCurrentUser(copyOfUser)
						console.log(data)
						alert(`Order Number ${data.id} Confirmed`)
					})
					} else {
					response.json().then(data => console.log(data.errors))
				}
		})
	}

	function deleteCartItem(cartDetailID){
		fetch(`/cart_details/${cartDetailID}`, {method: "DELETE"})
		.then(response => {
            if(response.ok){
                // setCartDetails( (cartDetails) => cartDetails.filter( (detail) => detail.id !== cartDetailID))
				response.json().then(data => {
					let copyOfUser = {...currentUser}
					copyOfUser.cart.cart_details = copyOfUser.cart.cart_details.filter((detail) => detail.product.id !== data.product.id)
					setCurrentUser(copyOfUser)
					// console.log(data)
			})
            } else {
                response.json().then(data => console.log(data))
            }
        })
    }

	return (
		<CartStyle>
			{currentUser?.cart?.cart_details.length >= 1 ? <h3>Your Cart Details:</h3> : <h3>No Items In Cart:</h3>} 
			{currentUser?.cart?.cart_details.length >= 1 ? <button className="place-order" onClick={createOrder}>Place Order</button> : null}
			{currentUser?.cart?.cart_details?.map( (d) => 
				<CartGrid>
					<div>
						<img src={allAlbums.find( (a) => parseInt(a.id) === parseInt(d.product.album_id))?.image_url} alt ={"album cover"}/>
					</div>
					<div>
						<text>Album: {allAlbums.find( (a) => parseInt(a.id) === parseInt(d.product.album_id))?.name} / </text>
						<text>Format:</text> <text>{d.product.format} / </text>
						<text>Condition:</text> <text>{d.product.condition}</text>
						<br/>
						<h5>Price: ${d.product.price}</h5>
						<button className="remove" onClick={() => deleteCartItem(d.id)}>Remove</button>
					</div>
					<br/>
				</CartGrid>
			)}
		</CartStyle>
	)
}

export default Cart