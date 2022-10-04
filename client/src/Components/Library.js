import React, { useState } from 'react'
import LibraryAlbumCard from './LibraryAlbumCard'
import { v4 as uuid } from 'uuid';
import { LibraryHeaderAndContentGrid, LibraryGrid, LibraryStyles, LibraryContentGrid } from '../Styles/LibraryStyles';


function Library({allAlbums}) {

	const [ searchString, setSearchString ] = useState("")
	const [ searchFilter, setSearchFilter] = useState("")

	console.log(searchString)
	// const filteredAlbums = allAlbums?.map( (album) => <LibraryAlbumCard
	// 	key = {uuid()}
	// 	album = {album}/>)


	const filteredAlbums = allAlbums?.filter((album) => (album?.name.toLowerCase().includes(searchString.toLowerCase())) || (album?.artist.name.toLowerCase().includes(searchString.toLowerCase())) || (album?.genre.name.toLowerCase().includes(searchString.toLowerCase())))


	const renderFilteredAlbums = filteredAlbums?.map( (album) => <LibraryAlbumCard
	key = {uuid()}
	album = {album}/>)

	console.log(searchFilter)

	return (
		
		<LibraryStyles>
			<LibraryGrid>
				<div>
					<h3>Filters</h3>
					<h4>Genres</h4>
						<li onClick={() => setSearchString("Rock")}>Rock</li>
						<li onClick={() => setSearchString("Electronic")}>Electronic</li>
						<li onClick={() => setSearchString("Pop")}>Pop</li>
						<li onClick={() => setSearchString("Folk, World, & Country")}>Folk, World, & Country</li>
						<li onClick={() => setSearchString("Jazz")}>Jazz</li>
						<li onClick={() => setSearchString("Hip Hop")}>Hip Hop</li>
						<button onClick={() => setSearchString("")}>Clear</button>
				</div>
				<LibraryHeaderAndContentGrid>
					<div>
						<h3>Find Music on Rails on Vinyl</h3>
						<input onChange={(event) => setSearchString(event.target.value)}></input>
					</div>
					<LibraryContentGrid>
						{renderFilteredAlbums}
					</LibraryContentGrid>
				</LibraryHeaderAndContentGrid>
			</LibraryGrid>
		</LibraryStyles>
	)
}

export default Library