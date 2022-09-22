import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

function AlbumDetail() {
  
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

	console.log(album)

  return (
    <div>
			<h1>{album.id}</h1>
			<Link to={`/albums/products/${params.id}`}>
				<img src={album.image_url} alt="album cover"/>
			</Link>
		</div>
  )
}

export default AlbumDetail