import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-top'>
            <div className='footer-top-item'>
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Kids</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className='footer-top-item'>
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className='footer-top-item'>
                <h1>About</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium nulla nec risus ultricies scelerisque. Pellentesque luctus turpis eu luctus molestie. Vivamus dapibus quam quis ligula pellentesque posuere. Pellentesque bibendum ultrices dolor, at pulvinar nibh aliquet at. Pellentesque consequat ligula eget tortor pellentesque, sit amet varius augue fermentum. Donec porttitor, turpis sit amet rhoncus fringilla, felis ex bibendum nibh, ut semper nulla lorem vel lectus. Aenean id orci porttitor nisi rutrum eleifend. Mauris in elit mattis, pulvinar quam ut, sollicitudin tellus.</span>
            </div>
            <div className='footer-top-item'>
                <h1>Contact</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium nulla nec risus ultricies scelerisque. Pellentesque luctus turpis eu luctus molestie. Vivamus dapibus quam quis ligula pellentesque posuere. Pellentesque bibendum ultrices dolor, at pulvinar nibh aliquet at. Pellentesque consequat ligula eget tortor pellentesque, sit amet varius augue fermentum. Donec porttitor, turpis sit amet rhoncus fringilla, felis ex bibendum nibh, ut semper nulla lorem vel lectus. Aenean id orci porttitor nisi rutrum eleifend. Mauris in elit mattis, pulvinar quam ut, sollicitudin tellus.</span>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='footer-bottom-left'>
                <span className='footer-bottom-left-logo'>ClothingStore</span>
                <span className='footer-bottom-left-copyright'>© Copyright 2023. All Rights Reserved</span>
            </div>
            <div className='footer-bottom-right'>
                <img src='/img/payment.png' alt=''/>
            </div>
        </div>
    </footer>
  )
}

export default Footer
