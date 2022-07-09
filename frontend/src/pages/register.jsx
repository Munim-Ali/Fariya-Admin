import React from 'react'
import {useState, useEffect} from 'react'

function Register() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {username, email, password, confirmPassword} = formData

  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <>
      <section className='heading'>
        <h1>Register</h1>
        <p>Please create your account</p>
      </section>

      <section className="register-form">
        
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" 
              className="form-control" 
              id='username'
              name='username' 
              value={username} 
              placeholder='Enter your username'
              onChange={onChange}
              />
          </div>
          <div className="form-group">
            <input type="email" 
              className="form-control" 
              id='email'
              name='email' 
              value={email} 
              placeholder='Enter your email'
              onChange={onChange}
              />
          </div>
          <div className="form-group">
            <input type="password" 
              className="form-control" 
              id='password'
              name='password' 
              value={password} 
              placeholder='Set password'
              onChange={onChange}
              />
          </div>
          <div className="form-group">
            <input type="password" 
              className="form-control" 
              id='confirmPassword'
              name='confirmPassword' 
              value={confirmPassword} 
              placeholder='Confirm Password'
              onChange={onChange}
              />
          </div>

          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register