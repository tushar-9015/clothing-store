import React from 'react'
import './wishlist.css'
import { MdDeleteOutline, MdOutlineShoppingCartCheckout } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem, resetWishlist } from '../../redux/wishlistReducer'
import { makeRequest } from "../../makeRequest";

const Wishlist = () => {
    const dispatch = useDispatch()
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems)
  return (
    
    <div className='wishlist'>
        <h1>Products in your Wishlist</h1>
        {wishlistItems?.map((item) => (
            <div className='wishlist-item' key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
                <div className='wishlist-item-details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className='wishlist-item-price'></div> ${item.price}
                </div>
                <MdDeleteOutline className='wishlist-item-delete' onClick={() => dispatch(removeWishlistItem(item.id))} />
                <MdOutlineShoppingCartCheckout className='add-to-cart'/>
            </div>
        ))}
        <span className='reset-wishlist' onClick={()=> dispatch(resetWishlist())}> RESET WISHLIST</span>
    </div>
  )
}

export default Wishlist
