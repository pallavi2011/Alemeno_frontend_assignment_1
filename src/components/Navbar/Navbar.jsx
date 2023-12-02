import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav__title'>
            <h1>Student Management</h1>
        </div>
            
        
        <ul className='nav__list'>
            <li className='nav__list-item'><a href="/">Courses</a></li>
            <li className='nav__list-item'><a href="/dashboard">Student Dashboard</a></li>
        </ul>
        
    </div>
  )
}

export default Navbar