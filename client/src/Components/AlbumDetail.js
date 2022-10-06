import React, {useEffect, useState} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { AlbumDetailGrid, AlbumDetailContentGrid } from '../Styles/AlbumDetailStyles'

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
    	<AlbumDetailGrid>
			<AlbumDetailContentGrid>
				<div>
					<img src={album.image_url} alt="album cover"/>
					{currentUser.admin ? <button onClick={() => deleteAlbum(album.id)}> Delete this album</button>: null}
				</div>
				<div>
					<h5>{album.artist?.name} - {album.name}</h5>
					<h6>Label: <text className = "value" >{album.label}</text></h6>
					<h6>Released: <text className = "value" >{album.release_year}</text></h6>
					<h6>Genre: <text className = "value" >{album.genre?.name}</text></h6>
					<h6>Run Time: <text className = "value" >{album.run_time}</text></h6>
				</div>
			<div>
				<h4>Tracklist</h4>
				<ul>
					{album.songs.map((song)=><li>{song.name}</li>)}
				</ul>
			</div>
			<div>
				<ul className="run-times">
					{album.songs.map((song)=><li>{song.run_time}</li>)}
				</ul>
			</div>
			</AlbumDetailContentGrid>
			<div>
				<Link to={`/albums/${album.id}/products`}>
					<button className='buy '>Buy A Copy</button>
				</Link>
				{currentUser.seller_profile?.albums?.find((albumUploaded)=> parseInt(albumUploaded.id) === parseInt(album.id)) ? <Link to={`/albums/${album.id}/edit`}>
					<button> Edit this album</button>
				</Link> : null}
			</div>
		</AlbumDetailGrid>
  )
}

export default AlbumDetail