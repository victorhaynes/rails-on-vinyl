import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom"


// the initial value of album is not working well as {}

function ProductDetail({currentUser}) {

	const params = useParams()
	const [album, setAlbum] = useState({})

	useEffect(()=> {
		fetch(`/albums-with-images/${params.id}`)
			.then(response => {
				if(response.ok) {
					response.json().then(data => setAlbum(data))
					} else {
					response.json().then(data => console.log(data.errors))
				}
		})
	},[])

	const instock_product = album?.instock_products?.find(product => parseInt(product.id) == parseInt(params.product_id));


	return (
		 <div>
			<h1>ProductDetail</h1>
			<h3>{album?.artist?.name}</h3>
			<h3>{album?.name}</h3>
			<h3>{instock_product?.format}</h3>
			<h3>{instock_product?.condition}</h3>
			<h3>{instock_product?.id}</h3>
			<h3>${instock_product?.price}</h3>
			{currentUser.seller_profile?.albums?.find((albumUploaded)=> parseInt(albumUploaded.id) === parseInt(album.id)) ? <Link to={`/albums/${album.id}/products/${instock_product.id}/edit`}>
				<h2> Edit this product</h2>
			</Link> : null}
		</div>

  )
	
}

export default ProductDetail