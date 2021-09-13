import React, {useRef, useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import './PrimarySlider.css'
import {FcPrevious, FcNext} from 'react-icons/fc'
import { FaShoppingCart } from 'react-icons/fa'
 
const PrimarySlider = () => {
    const [translated, setTranslated] = useState(0) // slider translate value
    const [topProducts, setTopProducts] = useState(null) // products to display
    const [slideIndex, setSlideIndex] = useState(1) // index of slider item
    const slider = useRef()
    const nextArrow = useRef()
    const previousArrow = useRef()

    /**get top products from API */
    const getTopProducts =  useCallback(() => {
      axios.get('https://fakestoreapi.com/products?limit=3')
      .then((res) => {
        if(res.status === 200){
          setTopProducts(res.data)
        }
      })
  }, []);
  
    useEffect(() => { 
      getTopProducts()
     
    }, [getTopProducts])

    /** handle slide changes */
    const onSlideChangeHandler = (e) => {
      let slideWidth = slider.current.offsetWidth // get width of slide
        if(e.target.id === 'next' && slideIndex < topProducts.length){
            slider.current.style.transform = `translate3d(${translated-slideWidth}px, 0px, 0px)`
            setTranslated(translated - slideWidth)
            setSlideIndex(slideIndex + 1)
          }
          if(e.target.id === 'previous' && translated !== 0){
            slider.current.style.transform = `translate3d(${translated+slideWidth}px, 0px, 0px)`
            setTranslated(translated + slideWidth)
            setSlideIndex(slideIndex - 1)
          }
          if(e.target.id === 'next' && slideIndex === topProducts.length){
            setTranslated(0);
            setSlideIndex(1);
            slider.current.style.transform = `translate3d(0px, 0px, 0px)`
          }
    }
    return (
           <div className='primary-slider bg-white'>   
            <span role='button' id='previous' ref={previousArrow}
            className='primary-arrows p-2 rounded mx-1 c-pointer' onClick={onSlideChangeHandler}>
                <FcPrevious/></span>
              <span role='button' id='next' ref={nextArrow}
              className='primary-arrows p-2 rounded mx-1' onClick={onSlideChangeHandler}>
                <FcNext/></span>         
             <div className='slider-images' ref={slider}>
               {
                 topProducts && topProducts.map((prod) => {
                   return(
                    <div className="primary-slide" key={prod.id}>
                      <div className='primary-slide-preview'>
                        <p>{prod.title}</p>
                        <button className='btn bg-white shop-now-button'>
                          <FaShoppingCart /> Shop Now</button>
                      </div>
                      <div className='primary-image'>
                        <img className=''  alt='slider-item' src={prod.image}/>
                      </div>
                    </div>
                   )
                 })
               }
               
        </div>
        </div>
    )
}

export default PrimarySlider
