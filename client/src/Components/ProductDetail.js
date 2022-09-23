import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"

function ProductDetail() {

	const params = useParams()
	// const [album, setAlbum] = useState(
	// 	{
	// 		name: "",
	// 		artist: {
	// 			name: ""
	// 		},
	// 		products: [
	// 			{
	// 				format: ""
	// 			}
	// 		]
	// 	}
	// 	)

	const [album, setAlbum] = useState("")

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

	// const product = album === "" ? null : album.products.find((obj)=>obj.id === params.product_id)
	// console.log(product)

	let product = album === "" ? null : album.products.find(product => parseInt(product.id) == parseInt(params.product_id));
	console.log(product)

	return (
		 <div>
			<h1>ProductDetail</h1>
			{album === "" ? <></> :  (
					<>
						<h3>{album.artist.name}</h3>
						<h3>{album.name}</h3>
						<h3>{product.format}</h3>
						<h3>{product.condition}</h3>
						<h3>{product.id}</h3>
						<h3>${product.price}</h3>
					</>
				)
				}
		</div>
  )
	
}

export default ProductDetail