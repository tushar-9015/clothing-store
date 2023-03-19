import React from 'react'
import { MdOutlineFavoriteBorder, MdOutlinePersonOutline, MdOutlineShoppingCartCheckout} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import './navbar.css';
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <nav className='nav-container'>
      <div className='nav-container-wrapper'>
        <div className='nav-container-wrapper-left'>
          <div className='nav-container-wrapper-item'>
            <Link className='link' to='/product/1'>Women</Link>
          </div>
          <div className='nav-container-wrapper-item'>
            <Link className='link' to='/product/2'>Men</Link>
          </div>
          <div className='nav-container-wrapper-item'>
            <Link className='link' to='/product/3'>Kids</Link>
          </div>
        </div>
        <div className='nav-container-wrapper-center'>
          <Link className='link' to='/'>ClothingStore</Link>
        </div>
        <div className='nav-container-wrapper-right'>
        <div className='nav-container-wrapper-item'>
          <Link className='link' to='/'>Homepage</Link>
        </div>
        <div className='nav-container-wrapper-item'>
          <Link className='link' to='/'>About</Link>
        </div>
        <div className='nav-container-wrapper-item'>
          <Link className='link' to='/'>Contact</Link>
        </div>
        <div className='nav-container-wrapper-item'>
          <Link className='link' to='/'>Store</Link>
        </div>
        <div className='nav-container-wrapper-right-icons'>
          <FaSearch />
          <MdOutlinePersonOutline />
          <MdOutlineFavoriteBorder />
          <div className='nav-container-wrapper-right-cartIcon'>
          <MdOutlineShoppingCartCheckout />
          <span>0</span>
          </div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
