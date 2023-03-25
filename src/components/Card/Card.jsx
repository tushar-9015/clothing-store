import React from 'react'
import './card.css'
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  console.log(item);
  return (
    <Link className='link' to={`/product/${item.id}`}>
     <div className='card'>
        <div className='card-image'>
            {item?.attributes.isNew && <span className='card-newSeason'>New Season</span>}
            <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2 className='card-image-title'>{item?.attributes.title}</h2>
        <div className='card-image-prices'>
            <h3 className='oldPrice'>${item.oldPrice || item?.attributes.price + 15}</h3>
            <h3>${item?.attributes.price}</h3>
        </div>
     </div>
    </Link>
  )
}

export default Card
