import React, { useEffect, useState } from 'react'
import './featuredProducts.css'
import Card from '../Card/Card'
import axios from 'axios'


const FeaturedProducts = ( {type} ) => {


const [data , setData] = useState([])

useEffect(()=> {
  const fetchData = async () => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL+ "/products",
      {
        headers: {
          Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
        },
      })
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
},[])
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
