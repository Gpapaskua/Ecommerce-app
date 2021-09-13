import React, { useRef, useState } from 'react'

/** Styles */
import './Slider.css'

/**Icons */
import {FcPrevious, FcNext} from 'react-icons/fc'
import {FaCartPlus} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

const Slider = ({featuredProducts, productsCount}) => {
  const [translated, setTranslated] = useState(0) // 
  const [clickedSlidesCount, setClickedSlidesCout] = useState(0) // number of clicks on slider
  const slider = useRef() // Slider element
  const slide = useRef() // Slide element

  /** Handle slide changes */
  const onSlideHandler = (e) => { 
    let width = slide.current.offsetWidth; // Slide width
    if(e.target.id === 'next' && (translated >= -width * (productsCount - clickedSlidesCount))){
      slider.current.style.transform = `translate3d(${translated - width}px, 0px, 0px)`
      setClickedSlidesCout(clickedSlidesCount + 1)
      setTranslated(translated - width)
    }
    if(e.target.id === 'previous' && translated !== 0){
      slider.current.style.transform = `translate3d(${translated + width}px, 0px, 0px)`
      setTranslated(translated + width)
      setClickedSlidesCout(0)
    }
  }
  if(!featuredProducts){
    return <div className='container d-flex justify-content-center'>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
    </div>
    </div>
  }
    return (
          <div className='container-fluid position-relative bg-white py-4 my-4'>
            <div className='container d-flex justify-content-between align-items-center p-3 my-2 bg-white'>
              <p className='h2'>Featured Products</p>
              <div>
              <span role='button' id='previous' className='arrows p-2 border rounded  mx-1 c-pointer' onClick={onSlideHandler}>
                <FcPrevious/></span>
              <span role='button' id='next' className='arrows p-2 border rounded mx-1' onClick={onSlideHandler}>
                <FcNext/></span>
              </div>
            </div>
           <div className='container slider'>
             <div className='slider-images' ref={slider}>
               {
                 featuredProducts.map((prod) => {
                   return(
                    <div className="recent-image d-flex justify-content-center" key={prod.id} ref={slide}>
                      <div className='product-top'>
                        <p>{prod.title}</p>
                        <div className="ratings"> 
                            <AiFillStar className='rating-icons' />
                            <AiFillStar className='rating-icons' />
                            <AiFillStar className='rating-icons' />
                            <AiFillStar className='rating-icons' />
                            <AiFillStar className='rating-icons' />
                         </div>
                        </div>
                        <div className='product-image'>
                        <img className='img-fluid' alt='slider-item'  src={prod.image}/>
                        </div>
                     <div className='slider-preview d-flex justify-content-center align-items-center' > 
                     <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                     <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                     <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                       </div>
                       <div className='product-bottom'>
                        <p>{prod.price}$</p>
                        <button className='btn btn-buy-now btn-small'>
                          <FaCartPlus /> Buy Now</button>
                        </div>
                   </div>
                   )
                 })
               }
        </div>
        </div>
        </div>
    )
}

export default Slider
