import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login({setCurrentUser}) {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    // const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(response => {
            console.log(response)
            if(response.ok){
                response.json().then(user => {
                    setCurrentUser(user)
                    history.push(`/`)
                })
            }else {
                // response.json().then(json => setErrors(Object.entries(json.errors)))
                response.json().then(data => console.log(data))
            }
        })
       
    }

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
      }
    return (
        <> 
        <form onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='username' value={username} onChange={handleChange} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' onChange={handleChange} />
       
       
        <input type='submit' value='Log in!' />
      </form>
      {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
        </>
    )
}

export default Login