import React from 'react'
import './featuredProducts.css'
import Card from '../Card/Card'

const FeaturedProducts = ( {type} ) => {

const data = [
{
    id: 1,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew: true,
    title: "Long Sleeve Graphic T-Shirt",
    oldPrice: 19,
    price: 12,
},
{
    id: 2,
    img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew: true,
    title: "Coat",
    oldPrice: 19,
    price: 12,
}
]
  return (
    <div className='featuredProducts'>
      <div className='featuredProducts-top'>
        <h1 className='featuredProducts-top-type'>{type} products</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
      </div>
      <div className='featuredProducts-bottom'>
        {data.map(item => (
            <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
