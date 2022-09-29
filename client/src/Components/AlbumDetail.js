import React, {useEffect, useState} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

function AlbumDetail({currentUser, setAllAlbums}) {
  
	const params = useParams()
	const [album, setAlbum] = useState({songs: []})
	const history = useHistory()

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

	function deleteAlbum(deletedAlbumID){
		fetch(`/albums/${album.id}`, {method: "DELETE"})
		.then(response => {
            if(response.ok){
                setAllAlbums( (albums) => albums.filter( (album) => album.id !== deletedAlbumID))
				history.push("/albums")
            }else {
                response.json().then(data => console.log(data))
            }
        })
	}

  return (
    	<div>
			<h1>{album.id}</h1>
				<img src={album.image_url} alt="album cover"/>
			<Link to={`/albums/${album.id}/products`}>
				Buy A Copy
			</Link>
			{currentUser.seller_profile?.albums?.find((albumUploaded)=> parseInt(albumUploaded.id) === parseInt(album.id)) ? <Link to={`/albums/${album.id}/edit`}>
				<h2> Edit this album</h2>
			</Link> : null}
			{currentUser.admin ? <button onClick={() => deleteAlbum(album.id)}> Delete this album</button>: null}
			<h1>Track List</h1>
			<h1>{album.run_time}</h1>
			<ul>
				{album.songs.map((song)=><li>{song.name} {song.length}</li>)}
			</ul>

		</div>
  )
}

export default AlbumDetail