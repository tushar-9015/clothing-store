import React, { useState } from 'react'
import './product.css'
import {TiShoppingCart} from 'react-icons/ti';
import { MdBalance, MdOutlineFavoriteBorder } from 'react-icons/md'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const Product = () => {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  )
  return (
    <div className='product'>
      {loading ? ("loading") : (
        <>
        <div className='product-left-side'>
        <div className='product-left-side-Imgs'>
        <img className='productImg' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt='' onClick={(e) => setSelectedImg("img")} />
        <img className='productImg' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt='' onClick={(e) => setSelectedImg("img2")} />  
        </div> 
      <div className='product-left-side-mainImg'>
        <img className='productMainImg' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt='' />
      </div>
      </div>
      <div className='product-right-side'>
      <h1>{data?.attributes?.title}</h1>
      <span className="price">${data?.attributes?.price}</span>
      <p>{data?.attributes?.desc}</p>
        <div className='product-right-side-productQuantity'>
          <button onClick={()=>setQuantity((prev) => prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity((prev) => prev+1)}>+</button>
        </div>
        <button className='product-right-side-productQuantity-add'
        onClick={() => 
        dispatch(
          addToCart({
            id: data.id,
            title: data.attributes.title,
            desc: data.attributes.desc,
            price: data.attributes.price,
            img: data.attributes.img.data.attributes.url,
            quantity,
          })
        )}>
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
      </>
      )}
      
    </div>
  )
}

export default Product
