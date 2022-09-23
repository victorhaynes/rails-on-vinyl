import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

function AlbumDetail() {
  
	const params = useParams()
	const [album, setAlbum] = useState({songs: []})
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
				<img src={album.image_url} alt="album cover"/>
			<Link to={`/albums/products/${params.id}`}>
				Buy A Copy
			</Link>
			<h1>Track List</h1>
			<h1>{album.run_time}</h1>
			<ul>
				{album.songs.map((song)=><li>{song.name} {song.length}</li>)}
			</ul>

		</div>
  )
}

export default AlbumDetail