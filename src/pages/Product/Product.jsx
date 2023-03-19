import React, { useState } from 'react'
import './product.css'
import {TiShoppingCart} from 'react-icons/ti';
import { MdBalance, MdOutlineFavoriteBorder } from 'react-icons/md'

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = ['https://images.pexels.com/photos/14875251/pexels-photo-14875251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1','https://images.pexels.com/photos/6937675/pexels-photo-6937675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

  return (
    <div className='product'>
      <div className='product-left-side'>
        <div className='product-left-side-Imgs'>
        <img className='productImg' src={images[0]} alt='' onClick={e => setSelectedImg(0)} />
        <img className='productImg' src={images[1]} alt='' onClick={e => setSelectedImg(1)} />  
        </div> 
      <div className='product-left-side-mainImg'>
        <img className='productMainImg' src={images[selectedImg]} alt='' />
      </div>
      </div>
      <div className='product-right-side'>
        <h1>title</h1>
        <span className='productPrice'>$300</span>
        <p>dsgfd ucnio, ghjkl fghjkl ghjklw whbedjnc hudncsi jnkm bdccdwbhnjkmlc ewbnm vbn vbnm hjksa fencwmciw uncd uhew asunaun ucudwnec ewnuwenf nuenueduwen nuwnuwn </p>
        <div className='product-right-side-productQuantity'>
          <button onClick={()=>setQuantity((prev) => prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity((prev) => prev+1)}>+</button>
        </div>
        <button className='product-right-side-productQuantity-add'>
          <TiShoppingCart/>ADD TO CART
        </button>
        <div className='product-right-side-productQuantity-link'>
          <div className='product-right-side-productQuantity-link-item'>
            <MdOutlineFavoriteBorder/>ADD TO WISH LIST
          </div>
          <div className='product-right-side-productQuantity-link-item'>
            <MdBalance/>ADD TO COMPARE
          </div>
        </div>
        <div className='product-right-side-productInfo'>
          <span>Seller: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className='product-right-side-productDetails'>
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
