import React, {useEffect} from 'react'

function AlbumUpload({setAllAlbums, mustBeLoggedIn, currentUser}) {

    useEffect(()=> {mustBeLoggedIn()})
	
	function handleAlbumSubmit(event){
		event.preventDefault()
		const albumData = new FormData();

		albumData.append("name", event.target.name.value);
		albumData.append("artist_id", event.target.artist_id.value);
		albumData.append("genre_id", event.target.genre_id.value);
		albumData.append("image", event.target.image.files[0]);
		postUploadedAlbum(albumData)
        event.target.reset()
	}

    // this fetch call is required to handle updating state for the entire library array of albums
    // bc the client cannot know what the rails/activestorage generated image_url of a new upload
    // is without fetching it. we cannot just add our form content into our album library array state
    function fetchUploadedAlbumWithImage(){
        fetch("/latest-upload")
            .then(res => {
                if(res.ok){
                    res.json().then((latestUpload) => setAllAlbums((albums) => [...albums, latestUpload]))
                } else {
                    res.json().then(data => console.log(data.errors))
                }
            })
    }
	function postUploadedAlbum(albumData){
		fetch("/albums", {
			method: "POST",
			body: albumData
		})
		.then(response => {
			if(response.ok) {
				response.json().then(fetchUploadedAlbumWithImage())
				} else {
				response.json().then(data => console.log(data.errors))
			}
	})
	}


  return (
    <>
        {currentUser.seller_profile? <div className="App">
            <h1>New Album Form</h1>
            <form onSubmit={(event)=>handleAlbumSubmit(event)}>
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
                <button type="submit">POST NEW ALBUM</button>
            </form>
        </div> : <h1>Only Users with Seller Profiles an upload albums.</h1>}
    </>
  )
}

export default AlbumUpload