import React, {useState} from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// the initial value of album is not working well as {}

function AlbumProducts({currentUser, setCurrentUser}) {
	const params = useParams()
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

  function postToUserCart(productID){
    fetch(`/cart_details`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
        product_id: productID
      })
    })
    .then(response => {
			if(response.ok) {
				response.json().then(data => {
          let copyOfUser = {...currentUser}
          copyOfUser.cart.cart_details.push(data)
          setCurrentUser(copyOfUser)
        })
				} else {
				response.json().then(data => console.log(data.errors))
			}
	})
	}
  
  
  return (
    <div>
      <div>AlbumProducts</div>
      <img src={album.image_url} alt="album cover"/>
      <h1>Products</h1>
      <ul>
        {album?.instock_products?.map((product)=>
        {
         return (
          <>
            <Link to={`/albums/${album.id}/products/${product.id}`}>
              <li>{album.artist.name} {album.name} {product.condition}</li>
            </Link>
            {currentUser?.cart?.cart_details?.find((detail) => parseInt(detail.product.id) == parseInt(product.id)) ? "in cart" : <button onClick={() => postToUserCart(product.id)}>Add to Cart</button>}
          </>
          )
        })}
      </ul>
    </div>

  )
}

export default AlbumProducts