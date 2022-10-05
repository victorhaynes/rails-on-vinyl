import React, { useState } from 'react'
import LibraryAlbumCard from './LibraryAlbumCard'
import { v4 as uuid } from 'uuid';
import { LibraryHeaderAndContentGrid, LibraryGrid, LibraryStyles, LibraryContentGrid } from '../Styles/LibraryStyles';
import { BiSearch} from 'react-icons/bi'


function Library({allAlbums}) {

	const [ searchString, setSearchString ] = useState("")

	const filteredAlbums = allAlbums?.filter((album) => (album?.name.toLowerCase().includes(searchString.toLowerCase())) || (album?.artist.name.toLowerCase().includes(searchString.toLowerCase())) || (album?.genre.name.toLowerCase().includes(searchString.toLowerCase())) || (searchString).includes((album?.release_year).toString()))

	console.log(allAlbums[0])
	const renderFilteredAlbums = filteredAlbums?.map( (album) => <LibraryAlbumCard
	key = {uuid()}
	album = {album}/>)


	const sixties = Array.from([0, 1, 2, 3, 4, 5 , 6, 7, 8 , 9], x => x + 1960).toString()
	const seventies = Array.from([0, 1, 2, 3, 4, 5 , 6, 7, 8 , 9], x => x + 1970).toString()
	const eighties = Array.from([0, 1, 2, 3, 4, 5 , 6, 7, 8 , 9], x => x + 1980).toString()
	const ninties = Array.from([0, 1, 2, 3, 4, 5 , 6, 7, 8 , 9], x => x + 1990).toString()
	const twoThousands = Array.from([0, 1, 2, 3, 4, 5 , 6, 7, 8 , 9], x => x + 2000).toString()
	const twentyTens = Array.from([0, 1, 2, 3, 4, 5 , 6, 7, 8 , 9], x => x + 2010).toString()
	const twentyTwenties = Array.from([0, 1, 2, 3, 4, 5 , 6, 7, 8 , 9], x => x + 2020).toString()



	return (
		
		<LibraryStyles>
			<LibraryGrid>
				<div>
					<h4>Genres:</h4>
						<p onClick={() => setSearchString("Rock")}>Rock</p>
						<p onClick={() => setSearchString("Electronic")}>Electronic</p>
						<p onClick={() => setSearchString("Pop")}>Pop</p>
						<p onClick={() => setSearchString("Folk, World & Country")}>Folk, World & Country</p>
						<p onClick={() => setSearchString("Jazz")}>Jazz</p>
						<p onClick={() => setSearchString("Hip Hop")}>Hip Hop</p>
						<button className='clear' onClick={() => setSearchString("")}>Clear</button>
						<br/>
						<br/>
						<br/>
					<h4>Decades:</h4>
						<p onClick={() => setSearchString(twentyTwenties)}>2020</p>
						<p onClick={() => setSearchString(twentyTens)}>2010</p>
						<p onClick={() => setSearchString(twoThousands)}>2000</p>
						<p onClick={() => setSearchString(ninties)}>1990</p>
						<p onClick={() => setSearchString(eighties)}>1980</p>
						<p onClick={() => setSearchString(seventies)}>1970</p>
						<p onClick={() => setSearchString(sixties)}>1960</p>
						<button className="clear" onClick={() => setSearchString("")}>Clear</button>
				</div>
				<LibraryHeaderAndContentGrid>
					<div>
						<h3>Find Music on Rails on Vinyl</h3>
						<BiSearch size={20}/>
						<br/>
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