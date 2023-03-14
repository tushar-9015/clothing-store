import React from 'react'
import {MdOutlineFavorite} from 'react-icons/md'
import './Navbar.css';

function Navbar() {
  return (
    <nav className='Nav-conatiner'>
        <div className='nav-center'>
          <header className='logo-place'>
            <h1 className='logo'>Clothing</h1>
          </header>
          <div >
            <ul className='nav-items'>
              <li>Home</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>

      
    </nav>
  )
}

export default Navbar
