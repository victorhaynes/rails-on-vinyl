import React, {useEffect, useState} from 'react'

function AlbumUpload({setAllAlbums, mustBeLoggedIn, currentUser}) {

    const [artists, setArtists] = useState([])
    const [genres, setGenres] = useState([])
    const [inputFields, setInputFields] = useState([
        {name: "" , length: null},
    ]);


    useEffect(()=> {mustBeLoggedIn()})

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

	function handleAlbumSubmit(event){
		event.preventDefault()
		const albumData = new FormData();
		albumData.append("name", event.target.name.value);
		albumData.append("artist_id", event.target.artist_id.value);
		albumData.append("genre_id", event.target.genre_id.value);
		albumData.append("image", event.target.image.files[0]);
        albumData.append("list_of_songs", JSON.stringify(inputFields))
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


    function handleChangeInput(index, event){
        const songsData = [...inputFields]
        songsData[index][event.target.name] = event.target.value
        setInputFields(songsData)
    }

    function handleAddFields(){
        setInputFields([...inputFields, {name: "", length: null}])
    }

    function handleRemoveFields(index){
        const allInputs = [...inputFields];
        allInputs.splice(index,1)
        setInputFields(allInputs)
    }

    function handleSongsSubmit(event){
        event.preventDefault()
    }

  return (
    <>
        {currentUser.seller_profile? <div className="App">
            <h1>New Album Form:</h1>
            <form onSubmit={(event)=>handleAlbumSubmit(event)}>
                <label htmlFor="name">Album Name:</label>
                <input type="text" name="name"/>
                <br/>
                <label htmlFor="genre_id">genre name</label>
                <select name="genre_id">
                {[{name: "Select a Genre", id: null},...genres]?.map((genre) => <option value={genre.id}>{genre.name}</option>)}
                </select>
                <br/>
                <label htmlFor="artist_id">artist name</label>
                <select name="artist_id">
                {[{name: "Select an Artist", id: null},...artists]?.map((artist) => <option value={artist.id}>{artist.name}</option>)}
                </select>
                <br/>
                <label htmlFor="image">Image:</label>
                <input type="file"name="image"/>
                <br/>
                <button type="submit">POST NEW ALBUM</button>
            </form>
        </div> : <h1>Only Users with Seller Profiles can upload albums.</h1>}

        { currentUser.seller_profile ?
        <div className="App">
            <h1>Add Song(s):</h1>
            <form onSubmit={handleSongsSubmit}>
                {inputFields.map((inputField, index) => (
                    <div key={index}>
                        <label htmlFor ="name">Track Name: </label>
                        <input name ="name" type="text" value={inputField.name} onChange={(event) => handleChangeInput(index, event)}/>
                        <label htmlFor ="length">Length (in seconds):</label>
                        <input name ="length" type="number" min="0" step="1" value={inputField.length} onChange={(event) => handleChangeInput(index, event)}/>
                        <button onClick={handleAddFields}>+</button><button onClick={(index) => handleRemoveFields(index)}>-</button>
                    </div>
                ))}
            <button type="submit">Submit</button>
        </form>
        </div> : <h1>Only Users with Seller Profiles can upload songs.</h1>
        }
    </>
  )
}

export default AlbumUpload