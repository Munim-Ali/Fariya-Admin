import React from 'react'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import UserForm from '../components/UserForm'

function Dashboard() {
  const navigate = useNavigate()
  const {person} = useSelector((state) => state.auth)

  useEffect(() => {
    if(!person){
      navigate('/login')
    }
  }, [person, navigate])


  return (
    <>
    <div className='component-layout'>
      <section className="heading">
        <h1>Add New User</h1>
      </section>
      <UserForm />
     </div>
    </>
  )
}

export default Dashboard