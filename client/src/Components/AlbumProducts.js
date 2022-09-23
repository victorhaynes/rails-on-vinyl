import React, {useState} from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// the initial value of album is not working well as {}

function AlbumProducts() {
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

  console.log(album)
  
  return (
    <div>
      <div>AlbumProducts</div>
      <img src={album.image_url} alt="album cover"/>
      <h1>Products</h1>
      <ul>
        {album === "" ? console.log("show first") : album.products.map((product)=>
        {
         return (
          <>
            <li>{album.artist.name} {album.name} {product.condition}</li>
            <Link to={`/albums/products/listings/${album.id}/${product.id}`}>
              <h4>Buy Now</h4>
            </Link>
          </>
          )
        })}
      </ul>
    </div>

  )
}

export default AlbumProducts