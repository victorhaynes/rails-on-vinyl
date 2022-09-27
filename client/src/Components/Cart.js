import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Cart() {

	const [cart, setCart] = useState({})
	const [albums, setAlbums] = useState([])
	const params = useParams()

	useEffect(()=> {
		fetch(`/user-cart`)
		.then( (response) => response.json())
		.then( (data) => setCart(data))
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

  return (
    <div>
		<button onClick={createOrder}>Check Out!</button>
		{cart?.cart_details?.map( (d) => 
			<>
				<h1>album name: {albums.find( (a) => a.id == d.product.album_id)?.name}</h1>
				<img src={albums.find( (a) => a.id == d.product.album_id)?.image_url} alt ={"album cover"}/>
				<h1>format: {d.product.format}</h1>
				<h1>condition: {d.product.condition}</h1>
				<h1>price: ${d.product.price}</h1>
			</>
		)}
	</div>
  )
}

export default Cart