import React from 'react'

function Home_AlbumCard({album}) {
  return (
    <div>
        <h2>Album ID: {album.id}</h2>
        <h2>Name: {album.name}</h2>
        <img src={album.image_url} alt="album cover"/>
    </div>
  )
}

export default Home_AlbumCard