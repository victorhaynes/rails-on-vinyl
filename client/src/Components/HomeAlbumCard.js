import React from 'react'
import { Link } from 'react-router-dom'

function HomeAlbumCard({album}) {
  return (
    <div>
        <Link to={`/albums/${album.id}`}>
          <img className="albums" src={album.image_url} alt="album cover"/>
        </Link>
        <h3>{album.name}</h3>
        <h4>{album.artist.name}</h4>

    </div>
  )
}

export default HomeAlbumCard