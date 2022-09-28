import React, {useState, useEffect} from 'react'
import LibraryAlbumCard from './LibraryAlbumCard'
import { v4 as uuid } from 'uuid';


function Library({allAlbums}) {

	// const [allAlbums, setAlbums] = useState([])

	// useEffect( () => {
	// 	fetch('/albums-with-images')
	// 	.then( (response) =>response.json())
	// 	.then( (data) => setAlbums(data))
	// },[])
	console.log(allAlbums)
	const renderAlbums = allAlbums?.map( (album) => <LibraryAlbumCard
	key = {uuid()}
	album = {album}/>)

	console.log(renderAlbums)
  return (
    
		<div>
			{renderAlbums}
		</div>
  )
}

export default Library