import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'



// refactor to use currentUser and "/me" instead of cartDetails and "/user-cart"

function Cart() {

	const [cartDetails, setCartDetails] = useState([])
	const [albums, setAlbums] = useState([])

	// fetch a user's cart information, immediately drill into it's .cart_details association
	useEffect(()=> {
		fetch(`/user-cart`)
		.then( (response) => response.json())
		.then( (data) => setCartDetails(data.cart_details))
	},[])

	useEffect(()=> {
		fetch(`/albums-with-images`)
		.then( (response) => response.json())
		.then( (data) => setAlbums(data))
	},[])

	function createOrder(productID){
		fetch(`/confirm-order`,{
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
		console.log(cartDetailID)
		fetch(`/cart_details/${cartDetailID}`, {method: "DELETE"})
		.then(response => {
            if(response.ok){
                setCartDetails( (cartDetails) => cartDetails.filter( (detail) => detail.id !== cartDetailID))
            }else {
                response.json().then(data => console.log(data))
            }
        })
    }

  return (
    <div>
		<button onClick={createOrder}>Check Out!</button>
		{cartDetails?.map( (d) => 
			<>
				<h1>album name: {albums.find( (a) => a.id == d.product.album_id)?.name}</h1>
				<img src={albums.find( (a) => a.id == d.product.album_id)?.image_url} alt ={"album cover"}/>
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