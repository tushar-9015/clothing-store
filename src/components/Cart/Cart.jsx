import React from 'react'
import './cart.css'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";


const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.cart.products)

  const totalPrice = () => {
    let total = 0;
    products.forEach((item)=> (total += item.quantity*item.price));
    return total.toFixed(2);
  }

  const stripePromise = loadStripe(
    "pk_test_51MqfV5SI1VBVyFmaaXgvaUQYX3xTeXS9N3j8ZBeREoz1t0KX6C3gtqFcmVMQRA15vQwwasiozTzI9glcDnfet9Al00YIh91cJ1"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className='cart-item' key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
          <div className='cart-item-details'>
             <h1>{item.title}</h1>
             <p>{item.desc?.substring(0, 100)}</p>
             <div className='cart-item-price'>{item.quantity} x ${item.price}</div>
          </div>
          <MdDeleteOutline className='cart-item-delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className='cart-item-total'>
        <span>SUBTOTAL</span>
        <span>{totalPrice()}</span>
      </div>
      <button onClick={handlePayment} className='cart-cheackout-btn'>PROCEED TO CHECKOUT</button>
      <span className='cart-reset'onClick={()=>dispatch(resetCart())}>
        RESET CART
      </span>
    </div>
  )
}

export default Cart
