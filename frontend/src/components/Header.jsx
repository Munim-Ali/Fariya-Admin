import React from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaSearch} from 'react-icons/fa'
import {Link, Links} from 'react-router-dom'

function Sidebar() {
  return (
    <header className="header">
        <div className='logo'>
            <Link to='/'><h1>Fariyalsh</h1></Link>
        </div>
        <ul>
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
        </ul>
    </header>

  )
}

export default Sidebar