import React, { useEffect, useState } from 'react'
import { OrderContentGrid, OrderHeaderGrid, OrdersStyles } from '../Styles/OrdersStyles'

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
		<OrdersStyles>
			{orders?.map( (order) => 
				<OrderHeaderGrid> 
					<div>
						<text className='order-number'>Order #: {order.id}</text><text className="total">Total: ${order.order_total}</text>
					</div>
					{order.order_details?.map( (detail) => 
						<OrderContentGrid>
							<div>
								<img src={allAlbums.find( (a) => parseInt(a.id) === parseInt(detail.product.album_id))?.image_url} alt ={"album cover"}/>
							</div>
							<div>
								{/* <h1>Order#: {order.id}</h1> */}
								<text>Album: {allAlbums.find( (a) => parseInt(a.id) === parseInt(detail.product.album_id))?.name} / </text>
								<text>Format: {detail.product.format} / </text><text>{detail.product.condition}</text>
								<h5>${detail.product.price}</h5>
							</div>
						</OrderContentGrid>
						)}
				</OrderHeaderGrid>)}
		</OrdersStyles>
	)
}

export default Orders