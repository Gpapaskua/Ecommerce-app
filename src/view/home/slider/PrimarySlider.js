import React, {useRef, useState} from 'react'
import './PrimarySlider.css'
import {FcPrevious, FcNext} from 'react-icons/fc'
 
const PrimarySlider = () => {
    const [translated, setTranslated] = useState(0)
    const slider = useRef()
    const nextArrow = useRef()
    const previousArrow = useRef()
    const onArrowsEnable = () => {
        nextArrow.current.style.display = 'block'
        previousArrow.current.style.display = 'block'
    }
    const onArrowsDisable = () => {
        nextArrow.current.style.display = 'none'
        previousArrow.current.style.display = 'none'
    }
    const onNextImage = (e) => {
        if(e.target.id === 'next'){
            slider.current.style.transform = `translate3d(${translated-550}px, 0px, 0px)`
            setTranslated(translated - 550)
          }
          if(e.target.id === 'previous' && translated !== 0){
            slider.current.style.transform = `translate3d(${translated+550}px, 0px, 0px)`
            setTranslated(translated + 550)
          }
    }
    return (
           <div className='primary-slider'  onMouseOver={onArrowsEnable} onMouseOut={onArrowsDisable}>   
            <span role='button' id='previous' ref={previousArrow}
            className='primary-arrows p-2 border rounded  mx-1 c-pointer' onClick={onNextImage}>
                <FcPrevious/></span>
              <span role='button' id='next' ref={nextArrow}
              className='primary-arrows p-2 border rounded mx-1' onClick={onNextImage}>
                <FcNext/></span>         
             <div className='slider-images' ref={slider}>
                <div className="primary-image">
                  <img className='img-fluid'  alt='slider-item' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
                </div>
              <div className="primary-image">
                <img className='img-fluid'  alt='slider-item' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
              </div>
              <div className="primary-image">
                <img className='img-fluid' alt='slider-item' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
              </div>
              <div className="primary-image">
                <img className='img-fluid' alt='slider-item' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
              </div>
              <div className="primary-image">
                <img className='img-fluid' alt='slider-item' src='https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7..1619540713.jpg'/>
              </div>
        </div>
        </div>
    )
}

export default PrimarySlider
