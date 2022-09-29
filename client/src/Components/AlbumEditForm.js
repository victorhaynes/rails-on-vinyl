import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function AlbumEditForm({setAllAlbums, mustBeLoggedIn, currentUser}) {

    useEffect(()=> {mustBeLoggedIn()})
    const params = useParams()

    // Update Action
    function handleAlbumPatch(event){
    event.preventDefault()
    const albumPatch = new FormData();
    if (event.target.name.value){
        albumPatch.append("name", event.target.name.value)
    }
    if (event.target.artist_id.value)
        {albumPatch.append("artist_id", event.target.artist_id.value)
    }
    if (event.target.genre_id.value){
        albumPatch.append("genre_id", event.target.genre_id.value)
    }
    if(event.target.image.files[0]){
        albumPatch.append("image", event.target.image.files[0])
    }
    if(event.target.name.value || event.target.artist_id.value || event.target.genre_id.value || event.target.image.files[0] ){
        patchUploadedAlbum(albumPatch)
    }
    event.target.reset()
    }

    function patchUploadedAlbum(albumPatch){
        fetch(`/albums/${params.id}`, {
            method: "PATCH",
            body: albumPatch
        })
        .then(response => {
            if(response.ok) {
                response.json().then(fetchUpdatedAlbumWithImage())
                } else {
                response.json().then(data => console.log(data.errors))
            }
    })
    }

    function fetchUpdatedAlbumWithImage(){
        fetch(`/albums-with-images/${params.id}`)
            .then(res => {
                if(res.ok){
                    res.json().then((patchedAlbum) => setAllAlbums((allAlbums) => allAlbums.map(album => {
                        if(album.id === patchedAlbum.id){
                            return patchedAlbum
                        } else {
                            return album
                        }
                    })))
                } else {
                    res.json().then(data => console.log(data.errors))
                }
            })
    }



    return (
        <>
            {currentUser.seller_profile ? <div className="App">
                <h1>Edit Album Form</h1>
                <form onSubmit={(event)=>handleAlbumPatch(event)}>
                    <label htmlFor="name">Album Name:</label>
                    <input type="text" name="name"/>
                    <br/>
                    <label htmlFor="genre_id">Genre_id:</label>
                    <input type="number"name="genre_id"/>
                    <br/>
                    <label htmlFor="artist_id">Artist_id:</label>
                    <input type="number"name="artist_id"/>
                    <br/>
                    <label htmlFor="image">Image:</label>
                    <input type="file"name="image"/>
                    <br/>
                    <button type="submit">EDIT ALBUM</button>
                </form>
            </div> : <h1>Only Users with Seller Profiles can edit albums.</h1>}
        </>
    )
}

export default AlbumEditForm