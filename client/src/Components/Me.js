import React, { useEffect, useState } from 'react'


function Me() {

	const [user, setUser] = useState({})

	useEffect(()=> {
		fetch("/me")
		.then( (response) => response.json())
		.then( (data) => setUser(data))
	},[])

  return (
    <div>
			<h1>Username: {user?.username}</h1>
			<h1>Email: {user?.email}</h1>
		</div>
  )
}

export default Me