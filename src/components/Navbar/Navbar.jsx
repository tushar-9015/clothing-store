import React, { useState } from 'react'
import { MdOutlineFavoriteBorder, MdOutlinePersonOutline, MdOutlineShoppingCartCheckout} from 'react-icons/md'
import './navbar.css';
import {Link} from 'react-router-dom'
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { useSelector } from "react-redux";


function Navbar() {
  const [open, setOpen] = useState({cart: false, wishlist: false});
  const products = useSelector((state) => state.cart.products);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
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
        <div className='nav-container-wrapper-right-icons'>
          <MdOutlinePersonOutline />
          {/* wishlist-btn */}
          <div className='nav-container-wrapper-fav-icon' onClick={() => setOpen({cart:false, wishlist: open.wishlist ? false : true})}>
            <MdOutlineFavoriteBorder />
            {/* <span>{wishlistItems.length}</span> */}
          </div>

            {/* cart-btn */}
          <div className='nav-container-wrapper-right-cartIcon' onClick={() => setOpen({cart: open.cart ? false: true, wishlist:false})}>
          <MdOutlineShoppingCartCheckout />
          <span>{products.length}</span>
          </div>
        </div>
        </div>
      </div>
      {/* {open && <Cart />} */}
      {open.cart && <Cart /> }
      {open.wishlist && <Wishlist /> }
    </nav>
  )
}

export default Navbar
