import React, {useState} from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ProductsGrid, ProductsPageHeader, ProductsStyles } from '../Styles/ProductsStyles'


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
    <ProductsStyles>
      <ProductsGrid>
        <ProductsPageHeader>
          <div>
            <img src={album.image_url} alt="album cover"/>
          </div>
          <div>
              <h5>{album.artist?.name} - {album.name}</h5>
              <h6>Label: <text className = "value" >{album.label}</text></h6>
              <h6>Released: <text className = "value" >{album.release_year}</text></h6>
              <h6>Genre: <text className = "value" >{album.genre?.name}</text></h6>
              <h6>Run Time: <text className = "value" >{album.run_time}</text></h6>
          </div>
          <div>
              <h5>Release Details</h5>
              <Link to={`/albums/${album.id}`}>
                <button className='release '>View Release Page</button>
              </Link>
          </div>
        </ProductsPageHeader>
        <h4>Products</h4>
        {album.instock_products?.length > 1  ? null : <h6>No Products In Stock</h6>}
        <ul>
          {album?.instock_products?.map((instock_product)=>
          {
          return (
            <>
              <Link to={`/albums/${album?.id}/products/${instock_product?.id}`}>
                <li className='product'>{album.artist.name} - {album.name} ({instock_product.format})</li>
              </Link>
              <p>Condition: {instock_product.condition}</p>
              <div className='price'>Price: ${instock_product.price} USD</div>
              {currentUser?.cart?.cart_details?.find((detail) => parseInt(detail.product?.id) == parseInt(instock_product?.id)) ? <button className='in-cart'>In Cart</button> : <button className="add-to-cart" onClick={() => postToUserCart(instock_product?.id)}>Add to Cart</button>}
              {currentUser?.seller_profile?.products?.find((product) => parseInt(product?.id) == parseInt(instock_product?.id)) ? <Link to={`/albums/${album.id}/products/${instock_product.id}`}><button className='edit-product'>Edit this product</button></Link> : null}
            </>
            )
          })}
        </ul>
      </ProductsGrid>
    </ProductsStyles>
  )
}

export default AlbumProducts


{/* <Link to={`/albums/${album?.id}/products/${instock_product?.id}`}>
<li>{album.artist.name} {album.name} {instock_product.condition}</li>
</Link> */}