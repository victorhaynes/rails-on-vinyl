import React, {useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom"
import { ProductDetailGrid } from '../Styles/ProductsStyles'


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
		 <ProductDetailGrid>
			<div>
				<img src={album.image_url} alt="album cover"/>
				<h5 className='album-cover'>Album Cover:</h5>
			</div>
			<div>
				<h5>Artist:</h5>
				<h6>{album.artist?.name}</h6>
				<h5>Album:</h5>
				<h6>{album?.name}</h6>
				<h5>Format:</h5>
				<h6>{instock_product?.format}</h6>
			</div>
			<div>
				<h5>Condition:</h5>
				<h6>{instock_product?.condition}</h6>
				<h5>Price:</h5>
				<h6>${instock_product?.price}</h6>
			</div>
			<div>
				{currentUser.seller_profile?.albums?.find((albumUploaded)=> parseInt(albumUploaded.id) === parseInt(album.id)) ? <Link to={`/albums/${album.id}/products/${instock_product.id}/edit`}>
					<h5>Edit This Product</h5>
				</Link> : null}
			</div>
		</ProductDetailGrid>

  )
	
}

export default ProductDetail


{/* <div>
<img src={album.image_url} alt="album cover"/>
{currentUser.admin ? <button onClick={() => deleteAlbum(album.id)}> Delete this album</button>: null}
</div>
<div>
<h5>{album.artist?.name} - {album.name}</h5>
<h6>Label: <text className = "value" >{album.label}</text></h6>
<h6>Released: <text className = "value" >{album.release_year}</text></h6>
<h6>Genre: <text className = "value" >{album.genre?.name}</text></h6>
<h6>Run Time: <text className = "value" >{album.run_time}</text></h6>
</div> */}