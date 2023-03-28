import React, { useState } from 'react'
import { MdOutlineFavoriteBorder, MdOutlinePersonOutline, MdOutlineShoppingCartCheckout} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import './navbar.css';
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart';
import { useSelector } from "react-redux";


function Navbar() {
  const [open, setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className='nav-container'>
      <div className='nav-container-wrapper'>
        <div className='nav-container-wrapper-left'>
          <div className='nav-container-wrapper-item'>
            <Link className='link' to='/products/1'>Women</Link>
          </div>
          <div className='nav-container-wrapper-item'>
            <Link className='link' to='/products/2'>Men</Link>
          </div>
          <div className='nav-container-wrapper-item'>
            <Link className='link' to='/products/3'>Kids</Link>
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
          <div className='nav-container-wrapper-right-cartIcon' onClick={() => setOpen(!open)}>
          <MdOutlineShoppingCartCheckout />
          <span>{products.length}</span>
          </div>
        </div>
        </div>
      </div>
      {open && <Cart />}
    </nav>
  )
}

export default Navbar
