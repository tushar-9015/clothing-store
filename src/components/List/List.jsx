import React from 'react'
import './list.css'
import Card from '../Card/Card'

const List = () => {
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
    <div className='list'>
      {data.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List
