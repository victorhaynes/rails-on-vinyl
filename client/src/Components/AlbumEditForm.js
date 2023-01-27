import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AlbumEditFormStyles } from '../Styles/AlbumFormStyles';

function AlbumEditForm({setAllAlbums, mustBeLoggedIn, currentUser}) {

    useEffect(()=> {mustBeLoggedIn()})
    const params = useParams()
    const [artists, setArtists] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(()=> {
        fetch("/artists")
        .then(response => {
            if(response.ok){
                response.json().then(data => setArtists(data))
            } else {
                response.json().then(data => console.log(data.errors))
            }
        })
    }, [])

    useEffect(()=> {
        fetch("/genres")
        .then(response => {
            if(response.ok){
                response.json().then(data => setGenres(data))
            } else {
                response.json().then(data => console.log(data.errors))
            }
        })
    }, [])

    // Update Action
    function handleAlbumPatch(event){
    event.preventDefault()
    const albumPatch = new FormData();
    if (event.target.name.value){
        albumPatch.append("name", event.target.name.value)
    }
    if (event.target.release_year.value){
        albumPatch.append("release_year", event.target.release_year.value)
    }
    if (event.target.label.value){
        albumPatch.append("label", event.target.label.value)
    }
    if (event.target.artist_id.value && event.target.artist_id.value != "Select a Genre")
        {albumPatch.append("artist_id", event.target.artist_id.value)
    }
    if (event.target.genre_id.value && event.target.genre_id.value != "Select an Artist"){
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
            {currentUser.seller_profile ? <AlbumEditFormStyles>
                <h1>Edit Album:</h1>
                <form onSubmit={(event)=>handleAlbumPatch(event)}>
                    <label htmlFor="name">Album Name:</label>
                    <input type="text" name="name"/>
                    <br/>
                    <label htmlFor="genre_id">Genre:</label>
                    <br/>
                    <select name="genre_id">
                    {[{name: "Select a Genre", id: null},...genres]?.map((genre) => <option value={genre.id}>{genre.name}</option>)}
                    </select>
                    <br/>
                    <label htmlFor="artist_id">Artist:</label>
                    <br/>
                    <select name="artist_id">
                    {[{name: "Select an Artist", id: null},...artists]?.map((artist) => <option value={artist.id}>{artist.name}</option>)}
                    </select>
                    <br/>
                    <label htmlFor="image">Image:</label>
                    <input type="file"name="image"/>
                    <br/>
                    <label htmlFor="release_year">Release Year:</label>
                    <br/>
                    <input name="release_year" type="number" min="1" step="1"/>
                    <br/>
                    <label htmlFor="label">Label:</label>
                    <br/>
                    <input type="text" name="label"/>
                    <br/>
                    <button type="submit">EDIT ALBUM</button>
                </form>
             </AlbumEditFormStyles> : <h1>Only Users with Seller Profiles can edit albums.</h1>}
        </>
    )
}

export default AlbumEditForm