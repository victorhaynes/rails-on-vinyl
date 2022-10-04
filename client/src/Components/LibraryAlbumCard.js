import React from 'react'
import { Link } from 'react-router-dom'

function LibraryAlbumCard({album}) {
  return (
    <div>
        <Link to={`/albums/${album.id}`}>
          <img className="lib-album" src={album.image_url} alt="album cover"/>
        </Link>
        <h5>{album.name}</h5>
        <h6>{album.artist.name}</h6>
    </div>
  )
}

export default LibraryAlbumCard