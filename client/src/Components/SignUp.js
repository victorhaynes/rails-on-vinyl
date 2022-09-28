import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function SignUp({setCurrentUser}) {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        password_confirmation:""
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, email, password, password_confirmation} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            email,
            password,
            password_confirmation,
        }
       
        fetch(`/signup`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(response => {
            if(response.ok){
                response.json().then(user => {
                    setCurrentUser(user)
                    history.push(`/`)
                })
            }else {
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
         Email
         </label>
        <input type='text' name='email' value={email} onChange={handleChange} />
       
        <label>
         Password
         </label>
        <input type='password' name='password' onChange={handleChange} />
        
        <label>
         Confirm Password
         </label>
        <input type='password' name='password_confirmation' onChange={handleChange} />
        <input type='submit' value='Sign up!' />
      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default SignUp