import React from 'react'
import {SidebarData} from './SidebarData'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      {SidebarData.map((item, index) =>{
        return(
          <li key={index} className={item.cName}>
            <Link to={item.link}>
              <p className='sidebar-title'>{item.title}</p>
            </Link>
          </li>
        )
      })}
    </div>
  )
}

export default Sidebar