import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Orders() {
	const [orders, setOrders] = useState([])
	const [albums, setAlbums] = useState([])
	const params = useParams()

	useEffect(()=> {
		fetch(`/user-orders`)
		.then( (response) => response.json())
		.then( (data) => setOrders(data))
	},[])

	
	useEffect(()=> {
		fetch(`/albums-with-images`)
		.then( (response) => response.json())
		.then( (data) => setAlbums(data))
	},[])
	

  return (
		<div>
			{orders?.map( (order) => order.order_details?.map( (detail) => 
				<div>
					<h1>Order#: {order.id}</h1>
					<h1>album name: {albums.find( (a) => a.id == detail.product.album_id)?.name}</h1>
					<img src={albums.find( (a) => a.id == detail.product.album_id)?.image_url} alt ={"album cover"}/>
					<h3>{detail.product.format}</h3>
					<h3>{detail.product.condition}</h3>
					<h3>{detail.product.price}</h3>
				</div>
				))}
				Hello
		</div>
  )
}

export default Orders