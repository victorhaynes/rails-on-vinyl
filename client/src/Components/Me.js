import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Me({currentUser, mustBeLoggedIn}) {

	useEffect(() =>mustBeLoggedIn())


	return (
    	<div>
			<h1>Username: {currentUser?.username}</h1>
			<h1>{currentUser.seller_profile ?  "Vendor Account ✔️" : "Not a vendor account"}</h1>
			<h1>Email: {currentUser?.email}</h1>
			<Link to={`/me/cart`}>
				<h2>Go To Cart</h2>
			</Link>
			<Link to={`/me/orders`}>
				<h2>Order Histroy</h2>
			</Link>
			{currentUser.seller_profile ? <Link to={`/albums/new`}>
				<h2>List A New Album</h2>
			</Link> : null}
		</div>
	)
}

export default Me