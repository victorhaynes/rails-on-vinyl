import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductEditFormStyles } from '../Styles/ProductFormStyles'

function ProductEditForm({mustBeLoggedIn, currentUser, setCurrentUser, setAllAlbums, allAlbums}) {

	useEffect(()=> {mustBeLoggedIn()})
	const params = useParams()
	const [formData, setFormData] = useState(
		{
		price: null,
		format: "Select a Format:",
		condition: "Select a Condition:",
		}
	)

	function handleChange(event){
		setFormData({...formData,
			 [event.target.name]: event.target.value})
	}

	function handleProductPatch(event){
		event.preventDefault()
		fetch(`/products/${params.product_id}`, {
			method: "PATCH",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(formData)
		})
		.then(response => {
            if(response.ok) {
                response.json().then((patchedProduct) => {
					// update a user's/seller's instock products
					const copyOfUser = {...currentUser}
					const usersUpdatedInStockProducts = copyOfUser.seller_profile.instock_products.map((instock_product) => {
						if(parseInt(instock_product.id) === parseInt(patchedProduct.id)){
							return patchedProduct
						} else {
							return instock_product
						}
					})
					copyOfUser.seller_profile.instock_products = usersUpdatedInStockProducts
					setCurrentUser(copyOfUser)
					// update an album's instock products (currently unnecessary bc a separate fetch is used for the product detail page. May be necessary when additional features or optimization comes around.)
					const copyOfAlbums = [...allAlbums]
					const updatedAlbumInStockProducts = copyOfAlbums.instock_products?.map((instock_product) => {
						if(parseInt(instock_product.id) === parseInt(patchedProduct.id)){
							return patchedProduct
						} else {
							return instock_product
						}
					})
					copyOfAlbums.instock_products = updatedAlbumInStockProducts
					setAllAlbums(copyOfAlbums)
					// // update a user's cart
					// const userCopy = {...currentUser}
					// const updatedUserCartDetails = userCopy.cart.cart_details.map((detail) => {
					// 	if(parseInt(detail.product.id) === parseInt(patchedProduct.id)){
					// 		return patchedProduct
					// 	} else {
					// 		return detail
					// 	}
					// })
					// userCopy.cart.cart_details = updatedUserCartDetails
					// setCurrentUser(copyOfUser)
				})
                } else {
                response.json().then(data => console.log(data.errors))
            }
    })
	event.target.reset()
	setFormData({price: null, format: "Select a Format:", condition: "Select a Condition:"})

	}

	return (
		<>
		{currentUser?.seller_profile ? <ProductEditFormStyles>
			<h1>Edit Product:</h1>
			<form onSubmit={(event)=> handleProductPatch(event)}>
				<label htmlFor="format">Format:</label>
				<br/>
				<select onChange={handleChange} name="format">
					<option  value="default">Select a Format:</option>
					<option  value="Vinyl">Vinyl</option>
  					<option  value="CD">CD</option>
  					<option  value="Cassette">Cassette</option>
				</select>
				<br/>
				<br/>
				<label htmlFor="condition">Condition:</label>
				<br/>
				<select name="condition" onChange={handleChange}>
					{["Select a Condition:","Mint (M)", "Near Mint (NM or M-)", "Very Good Plus (VG+)", "Very Good (VG)", "Good Plus (G+)", "Good (G)", "Fair (F)", "Poor (P)"].map((condition) => <option value={condition}>{condition}</option>)}
				</select>
				<br/>
				<br/>
				<label htmlFor="price">Price (Integer):</label>
				<br/>
				<input onChange={handleChange} type="number" min="0" step="1" name="price"/>
				<br/>
				<button type="submit">EDIT ALBUM</button>
			</form>
		</ProductEditFormStyles> : <h1>Only Users with Seller Profiles can edit albums.</h1>}
	</>
	)
}

export default ProductEditForm