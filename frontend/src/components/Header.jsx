import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser,} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import Sidebar from './Siderbar/Sidebar'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {person} = useSelector((state) => state.auth)

    const onLogout = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')

    }

  return (
    <header className="header">
        <div className='logo'>
            <Link to='/'><h1>Fariyalsh</h1></Link>
        </div>
        <ul>
            {person ? (
                <>
                    <li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt />Logout
                        </button>
                    </li>
                    <Sidebar />
                 </>
                 
                 
            ) : (
            <>
                <li>
                    <Link to="/">
                        <FaSignInAlt />Login
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        <FaUser />Register
                    </Link>
                </li>
            </>
            )}
            
        </ul>
    </header>

  )
}

export default Header