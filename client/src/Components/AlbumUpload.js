import React from 'react'
import AlbumProducts from './AlbumProducts';

function AlbumUpload({setAllAlbums}) {
	
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

    // // Update Action
    // function handleAlbumPatch(event){
	// 	event.preventDefault()
	// 	const albumPatch = new FormData();

	// 	if (event.target.name.value){
    //         albumPatch.append("name", event.target.name.value)
    //     }
	// 	if (event.target.artist_id.value)
    //         {albumPatch.append("artist_id", event.target.artist_id.value)
    //     }
	// 	if (event.target.genre_id.value){
    //         albumPatch.append("genre_id", event.target.genre_id.value)
    //     }
	// 	if(event.target.image.files[0]){
    //         albumPatch.append("image", event.target.image.files[0])
    //     }

	// 	if(event.target.name.value || event.target.artist_id.value || event.target.genre_id.value || event.target.image.files[0] ){
    //         patchUploadedAlbum(albumPatch)
    //     }
        
    //     // for (const key of albumPatch.keys()) {
    //     //     console.log(key);
    //     // }

    //     // for (const value of albumPatch.values()) {
    //     //     console.log(value);
    //     // }

    //     event.target.reset()
	// }

    // function patchUploadedAlbum(albumPatch){
	// 	fetch("/albums/5", {
	// 		method: "PATCH",
	// 		body: albumPatch
	// 	})
	// 	.then(response => {
	// 		if(response.ok) {
	// 			response.json().then(fetchUpdatedAlbumWithImage())
	// 			} else {
	// 			response.json().then(data => console.log(data.errors))
	// 		}
	// })
	// }

    // function fetchUpdatedAlbumWithImage(){
    //     fetch("/albums-with-images/5")
    //         .then(res => {
    //             if(res.ok){
    //                 res.json().then((patchedAlbum) => setAllAlbums((allAlbums) => allAlbums.map(album => {
    //                     if(album.id === patchedAlbum.id){
    //                         return patchedAlbum
    //                     } else {
    //                         return album
    //                     }
    //                 })))
    //             } else {
    //                 res.json().then(data => console.log(data.errors))
    //             }
    //         })
    // }

  return (
    <>
        <div className="App">
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
        </div>

        {/* <div className="App">
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
        </div> */}
    </>
  )
}

export default AlbumUpload