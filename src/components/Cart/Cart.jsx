import React from 'react'
import './cart.css'
import { MdDeleteOutline } from 'react-icons/md'

const Cart = () => {
  const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew: true,
        title: "Long Sleeve Graphic T-Shirt",
        desc: "Lorem ipsum dolor sit amet. Sed iusto nihil eum nihil odit et consequatur temporibus! Eos nihil mollitia hic tempora sunt qui perferendis modi qui asperiores consequuntur est dolorem assumenda sed mollitia illo et vero neque. Rem galisum cupiditate est assumenda dolor sed omnis iusto et possimus labore. In odio quisquam ut consectetur rerum ut dignissimos repudiandae.",
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isNew: true,
        title: "Coat",
        desc: "Lorem ipsum dolor sit amet. Sed iusto nihil eum nihil odit et consequatur temporibus! Eos nihil mollitia hic tempora sunt qui perferendis modi qui asperiores consequuntur est dolorem assumenda sed mollitia illo et vero neque. Rem galisum cupiditate est assumenda dolor sed omnis iusto et possimus labore. In odio quisquam ut consectetur rerum ut dignissimos repudiandae.",
        oldPrice: 19,
        price: 12,
    }
    ] 
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className='cart-item' key={item.id}>
          <img src={item.img} alt='' />
          <div className='cart-item-details'>
             <h1>{item.title}</h1>
             <p>{item.desc?.substring(0, 100)}</p>
             <div className='cart-item-price'>1 x ${item.price}</div>
          </div>
          <MdDeleteOutline className='cart-item-delete'/>
        </div>
      ))}
      <div className='cart-item-total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button className='cart-cheackout-btn'>PROCEED TO CHECKOUT</button>
      <span className='cart-reset'>
        RESET CART
      </span>
    </div>
  )
}

export default Cart
