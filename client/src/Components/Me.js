import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MeGrid, MeStyles } from '../Styles/MeStyles';

function Me({currentUser, mustBeLoggedIn}) {

	useEffect(() =>mustBeLoggedIn())

	const joinedOn = new Date(currentUser?.created_at?.substring(0,10)).toUTCString().substring(0,11);

	return (
    	<MeStyles>
			<div className="bg1"></div>
			<div className="bg2"></div>
			<MeGrid>
				<img className='avatar' src={process.env.PUBLIC_URL + "/images/avatar.jpg"} alt="avatar"/>
				<h5>Username: {currentUser?.username}</h5>
				<div>
					<h6>E-mail Address:</h6>
					<h6>{currentUser?.email}</h6>
					<br/>
					<h6>Joined On:</h6>
					<h6>{joinedOn}</h6>
					<br/>
					<h6>Account Type:</h6>
					<h6>{currentUser.seller_profile ?  "Vendor Account ✔️" : "Standard (Non Vendor)"}</h6>
				</div>
				<div>
					<Link to={`/me/cart`}>
						<h6 className='profile-actions'>Go To Cart</h6>
					</Link>
					<Link to={`/me/orders`}>
						<h6 className='profile-actions'>Order Histroy</h6>
					</Link>
					{currentUser.seller_profile ? <Link to={`/albums/new`}>
						<h6 className='profile-actions'>List A New Album</h6>
					</Link> : null}
				</div>
			</MeGrid>
		</MeStyles>
	)
}

export default Me