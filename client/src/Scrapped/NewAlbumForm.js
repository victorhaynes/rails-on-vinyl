import React, { useContext } from 'react'
import { AppContext } from './NewListing'


function NewAlbumForm() {
  const { uploadImage, setUploadImage } = useContext(AppContext)
	
	function handleSubmit(event){
		event.preventDefault()
		const data = new FormData();

		data.append("name", event.target.name.value);
		data.append("artist_id", event.target.artist_id.value);
		data.append("genre_id", event.target.genre_id.value);
		data.append("image", event.target.image.files[0]);
		submitToAPI(data)
	}

	function submitToAPI(data){
		fetch("/albums", {
			method: "POST",
			body: data
		})
		.then(response => {
			if(response.ok) {
				response.json().then(data => setUploadImage(data.image_url))
				} else {
				response.json().then(data => console.log(data.errors))
			}
	})
	}
	

  return (
    <div className="App">
		<h1>New Album Form</h1>
    <form onSubmit={(event)=>handleSubmit(event)}>
        <label htmlFor="name">Album Name:</label>
        <input onChange={()=>console.log("change")} type="text" name="name"/>
        <br/>
        <label htmlFor="genre_id">Genre_id:</label>
        <input onChange={()=>console.log("change")} type="number"name="genre_id"/>
        <br/>
        <label htmlFor="artist_id">Artist_id:</label>
        <input onChange={()=>console.log("change")} type="number"name="artist_id"/>
        <br/>
				<label htmlFor="image">Image:</label>
        <input onChange={()=>console.log("change")} type="file"name="image"/>
        <br/>
        <button type="submit">POST NEW ALBUM</button>
    </form>
</div>
  )
}

export default NewAlbumForm