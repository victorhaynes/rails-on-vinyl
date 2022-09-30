import React, {useState, useEffect} from 'react'


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
					response.json().then(data => console.log(data))
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
		<div>
			<button onClick={createOrder}>Check Out!</button>
			{currentUser?.cart?.cart_details?.map( (d) => 
				<>
					<h1>album name: {allAlbums.find( (a) => parseInt(a.id) === parseInt(d.product.album_id))?.name}</h1>
					<img src={allAlbums.find( (a) => parseInt(a.id) === parseInt(d.product.album_id))?.image_url} alt ={"album cover"}/>
					<h1>format: {d.product.format}</h1>
					<h1>condition: {d.product.condition}</h1>
					<h1>price: ${d.product.price}</h1>
					<button onClick={() => deleteCartItem(d.id)}>Remove From Cart!</button>
				</>
			)}
		</div>
	)
}

export default Cart