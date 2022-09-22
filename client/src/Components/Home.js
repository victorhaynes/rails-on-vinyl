import React, {useEffect, useState} from 'react'
import HomeAlbumCard from './HomeAlbumCard'
import { v4 as uuid } from 'uuid';

function Home() {

	const [mostExpensiveSold, setMostExpensiveSold] = useState([])
	const [trendingAlbums, setTrendingAlbums] = useState([])

	useEffect( () => {
		fetch('/most-expensive-sold')
		.then( (response) =>response.json())
		.then( (data) => setMostExpensiveSold(data))
	},[])

	useEffect( () => {
		fetch('/trending-albums')
		.then( (response) =>response.json())
		.then( (data) => setTrendingAlbums(data))
	},[])


  return (
    <div>
        <h1>Trending:</h1>
				{trendingAlbums === [] ? <></> : trendingAlbums.map( (album) => <HomeAlbumCard
				key = {uuid()}
				album = {album}
				/>)}
        <h1>Most Expensive Releases Sold:</h1>
				{mostExpensiveSold === [] ? <></> : mostExpensiveSold.map( (album) => <HomeAlbumCard
				key = {uuid()}
				album = {album}
				/>)}
    </div>
  )
}

export default Home