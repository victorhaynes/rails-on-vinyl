import React, { createContext, useState } from 'react'
import Albums from './Albums';
import NewAlbumForm from './NewAlbumForm';

export const AppContext = createContext(null);

function NewListing() {
	const [uploadImage, setUploadImage] = useState(AppContext)
	
  return (
		<AppContext.Provider value ={{ uploadImage, setUploadImage}}>
			<NewAlbumForm/>
			<Albums/>
		</AppContext.Provider>
  )
}

export default NewListing