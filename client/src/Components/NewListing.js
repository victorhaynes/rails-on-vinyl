import React, { createContext, useState } from 'react'
import LastAlbum from './LastAlbum';
import NewAlbumForm from './NewAlbumForm';

export const AppContext = createContext(null);

function NewListing() {
	const [uploadImage, setUploadImage] = useState(AppContext)
	
  return (
		<AppContext.Provider value ={{ uploadImage, setUploadImage}}>
			<NewAlbumForm/>
			<LastAlbum/>
		</AppContext.Provider>
  )
}

export default NewListing