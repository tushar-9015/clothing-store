import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './products.css'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null)
  return (
    <div className='products'>
      <div className='products-left-side'>
        <div className='products-left-side-filterItem'> 
        <h2>Product Categories</h2>
          <div className='products-left-side-filterItem-inputItem'>
            <input type='checkbox' id='1' value={1}></input>
            <label htmlFor='1'>hat</label>
          </div>
          <div className='checkbox'>
            <input type='checkbox' id='2' value={2}></input>
            <label htmlFor=''>shoes</label>
          </div>
        </div>
        <div className='products-left-side-filterItem'>
          <h2>Filter by price</h2>
          <div className='products-left-side-filterItem-inputItem'>
          <span>0</span>
          <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
          <span>{maxPrice}</span>
        </div>
        </div>
        <div className='products-left-side-filterItem'>
          <h2>Sort by</h2>
          <div className='products-left-side-filterItem-inputItem'>
            <input type='radio' id='asc' value='asc' name='price' onChange={(e) => setSort('asc')}/>
            <label htmlFor='asc'>Price (Lowest first) </label>
          </div>
          <div className='products-left-side-filterItem-inputItem'>
            <input type='radio' id='desc' value='desc' name='price' onChange={(e) => setSort('desc')}></input>
            <label htmlFor='desc'>Price (Highest first) </label>
          </div>
          </div>
        </div>
        <div className='products-right-side'>
          <img 
          className='products-right-side-catImg'
          src='https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''/>
          <List catId={catId} maxPrice={maxPrice} sort={sort}/>
        </div>
    
    </div>
  )
}

export default Products
