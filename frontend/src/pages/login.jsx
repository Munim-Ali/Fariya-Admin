import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const {username,  password} = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {person, isLoading, isError, isSuccess, message} = useSelector ((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || person){
      navigate('/Dashboard')
    }

    dispatch(reset())
  }, [person, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()

    const personData = {
      username,
      password
    }

    dispatch(login(personData))
  }

  if(isLoading){
    return <Spinner />
  }
  return (
    <>
      <section className='heading'>
        <h1>Login</h1>
        <p>Please login to access dashboard</p>
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
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login