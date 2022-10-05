import React, {useEffect, useState} from 'react'
import HomeAlbumCard from './HomeAlbumCard'
import { v4 as uuid } from 'uuid';
import { HomeBlogGrid, HomeBlogGridSecondColumn, HomeGrid, HomeStyles, MostExpensiveCardsGrid, TrendingCardsGrid } from '../Styles/HomeStyles';
import { useHistory, Link } from 'react-router-dom';


function Home() {

	const [mostExpensiveSold, setMostExpensiveSold] = useState([])
	const [trendingAlbums, setTrendingAlbums] = useState([])
	const history = useHistory()

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


	function armandhammerNav(){
		history.push("/albums/3")
	}

	function sectorNav(){
		history.push("/albums/6")
	}

	function stvincentNav(){
		history.push("/albums/2")
	}


	return (
	<HomeStyles>
		<HomeGrid>
			<div className='blog-posts-background'>
				<div className='blog-content'>
					<HomeBlogGrid>
						<a target="_blank" rel="noopener noreferrer" className='link' href="https://github.com/victorhaynes/vinyl-on-rails">
							<img className="blog1" src={process.env.PUBLIC_URL + "/images/vinyl1.jpg"}/>
							<div className='description1'>A Vinyl Master's Collection (Github)</div>
						</a>
						<HomeBlogGridSecondColumn>
							<a target="_blank" rel="noopener noreferrer" className='link' href="https://www.linkedin.com/in/victor-haynes/">
								<img className="blog-other" src={process.env.PUBLIC_URL + "/images/recordplayer.jpg"}/>
								<div className='description2'>Movements in Indie (Linkedin)</div>
							</a>
							<a target="_blank" rel="noopener noreferrer" className='link' href="https://dev.to/victorhaynes">
								<img className="blog-other" src={process.env.PUBLIC_URL + "/images/cds.jpg"}/>
								<div className='description3'>An Industry Insider's Reflections (Blog)</div>
							</a>
							<Link to={`/albums/new`} className='route-to-sell' >
								<img className="blog-other" src={process.env.PUBLIC_URL + "/images/sell-vinyl.jpg"}/>
								<div className='description4'>Start Selling on Rails on Vinyl</div>
							</Link>
						</HomeBlogGridSecondColumn>
					</HomeBlogGrid>
				</div>
			</div>
			<div className='spotlight-background'>
					<div className="slider-frame">
						<div className="slide-images">
							<div className="img-container">
								<img src={process.env.PUBLIC_URL + "/images/armand_hammer_banner.jpg"} alt="Banner 1" onClick={armandhammerNav}/>
							</div>
							<div className="img-container">
								<img src={process.env.PUBLIC_URL + "/images/sector_banner.jpg"} alt="Banner 2" onClick={sectorNav}/>
							</div>
							<div className="img-container">
								<img src={process.env.PUBLIC_URL + "/images/strange_mercy_banner.jpg"} alt="Banner 3" onClick={stvincentNav}/>
							</div>
						</div>
					</div>
			</div>
			<div className='trending-header-background'>
				<div className='trending-header'>
					<h1>Trending Releases:</h1>
				</div>
			</div>
			<div className='trending-container-background'>
				<TrendingCardsGrid>
						{trendingAlbums?.map( (album) => <HomeAlbumCard
						key = {uuid()}
						album = {album}
						/>)}
				</TrendingCardsGrid>
			</div>
			<div className='most-expensive-background'>
				<div className='most-expensive-header'>
					<h1>Most Expensive Releases Sold:</h1>
				</div>
			</div>
			<div className='most-expensive-container'>
				<MostExpensiveCardsGrid>
						{mostExpensiveSold?.map( (album) => <HomeAlbumCard
						key = {uuid()}
						album = {album}
						/>)}
				</MostExpensiveCardsGrid>
			</div>
		</HomeGrid>
	</HomeStyles>
  )
}

export default Home