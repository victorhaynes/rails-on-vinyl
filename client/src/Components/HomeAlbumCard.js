import React from 'react'
import { Link } from 'react-router-dom'

function HomeAlbumCard({album}) {
  return (
    <div>
        <h2>Album ID: {album.id}</h2>
        <h2>Name: {album.name}</h2>
        <Link to={`/albums/${album.id}`}>
          <img src={album.image_url} alt="album cover"/>
        </Link>
    </div>
  )
}

export default HomeAlbumCard