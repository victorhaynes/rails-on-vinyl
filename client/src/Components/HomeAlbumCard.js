import React from 'react'
import { Link } from 'react-router-dom'

function HomeAlbumCard({album}) {
  return (
    <div>
        <Link to={`/albums/${album.id}`}>
          <img className="albums" src={album.image_url} alt="album cover"/>
        </Link>
        <h4>{album.name}</h4>
        <h5>{album.artist.name}</h5>

    </div>
  )
}

export default HomeAlbumCard