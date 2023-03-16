import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
     <div className='card'>
        <div className='card-image'>
            {item.isNew && <span className='card-newSeason'>New Season</span>}
            <img src={item.img} alt="" className='mainImg' />
            <img src={item.img2} alt="" className='secondImg' />
        </div>
        <h2 className='card-image-title'>{item.title}</h2>
        <div className='card-image-prices'>
            <h3 className='oldPrice'>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
        </div>
     </div>
    </Link>
  )
}

export default Card
