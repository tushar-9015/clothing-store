import React from 'react'
import './categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className='categories-col'>
            <div className='categories-row'>
                <img src='https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1' >Women</Link>
                </button>
            </div>
            <div className='categories-row'>
            <img src='https://images.pexels.com/photos/2351321/pexels-photo-2351321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1' >Sale</Link>
                </button>
            </div>
        </div>
            <div className='categories-col'>
                <div className='categories-row'>
                <img src='https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1' >New Season</Link>
                </button>
                </div>
            </div>
            <div className='categories-col col-l'>
                <div className='categories-row'>
                    <div className='categories-col'>
                        <div className='categories-row'>
                        <img src='https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1' >Men</Link>
                </button>
                        </div>
                    </div>
                    <div className='categories-col'>
                        <div className='categories-row'>
                        <img src='https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1' >Accessories</Link>
                </button>
                        </div>
                    </div>
                </div>
                <div className='categories-row'>
                <img src='https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                <button>
                    <Link className='link' to='/products/1' >Shoes</Link>
                </button>
                </div>
            </div>
            
        
    </div>
  )
}

export default Categories
