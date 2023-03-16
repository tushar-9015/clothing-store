import React, { useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick} from 'react-icons/ti';
import './slider.css'

const Slider = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/15792384/pexels-photo-15792384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/15728395/pexels-photo-15728395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6770031/pexels-photo-6770031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };
  return (
    <div className='slider'>
        <div className='slider-container' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt=''/>
            <img src={data[1]} alt=''/>
            <img src={data[2]} alt=''/>
        </div>
        <div className='slider-icons'>
            <div className='slider-icons-icon'>
                <TiArrowLeftThick onClick={prevSlide}/>
            </div>
            <div className='slider-icons-icon'>
                <TiArrowRightThick onClick={nextSlide}/>
            </div>
        </div>
      
    </div>
  )
}

export default Slider
