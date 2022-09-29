import React, { useEffect, useState } from 'react'

function Orders({mustBeLoggedIn, allAlbums}) {
	const [orders, setOrders] = useState([])

	useEffect(()=>mustBeLoggedIn())

	useEffect(()=> {
		fetch(`/user-orders`)
		.then(response => {
			if(response.ok) {
				response.json().then( (data) => setOrders(data))
				} else {
					response.json().then(data => console.log(data))
				}
	})},[])


	return (
		<div>
			{orders?.map( (order) => order.order_details?.map( (detail) => 
				<div>
					<h1>Order#: {order.id}</h1>
					<h1>album name: {allAlbums.find( (a) => parseInt(a.id) === parseInt(detail.product.album_id))?.name}</h1>
					<img src={allAlbums.find( (a) => parseInt(a.id) === parseInt(detail.product.album_id))?.image_url} alt ={"album cover"}/>
					<h3>{detail.product.format}</h3>
					<h3>{detail.product.condition}</h3>
					<h3>{detail.product.price}</h3>
				</div>
				))}
		</div>
	)
}

export default Orders