import React from 'react'
import LibraryAlbumCard from './LibraryAlbumCard'
import { v4 as uuid } from 'uuid';


function Library({allAlbums}) {

	const renderAlbums = allAlbums?.map( (album) => <LibraryAlbumCard
		key = {uuid()}
		album = {album}/>)

	return (
		
		<div>
			{renderAlbums}
		</div>
	)
}

export default Library