import React, { useRef, useState } from 'react'
import './Slider.css'
import {FcPrevious, FcNext} from 'react-icons/fc'
import {FaCartPlus} from 'react-icons/fa'

const Slider = () => {
  const [translated, setTranslated] = useState(0)
  const slider = useRef()
  const selectedSlide = useRef()
  const onNextImage = (e) => {
    if(e.target.id === 'next'){
      slider.current.style.transform = `translate3d(${translated-296}px, 0px, 0px)`
      setTranslated(translated - 296)
    }
    if(e.target.id === 'previous' && translated !== 0){
      slider.current.style.transform = `translate3d(${translated+296}px, 0px, 0px)`
      setTranslated(translated + 296)
    }
  }
  const onImagePreviewShow = (e) => {
    e.target.getElementsByTagName('div')[0].style.visibility = 'visible'
  }
  const onImagePreviewHide = (e) => {
    e.target.style.visibility = 'hidden'
  }
    return (
          <div className='container-fluid position-relative bg-light py-4 my-4'>
            <div className='container d-flex justify-content-between align-items-center p-3 my-2 bg-white'>
              <p className='h2'>Featured Products</p>
              <div>
              <span role='button' id='previous' className='arrows p-2 border rounded  mx-1 c-pointer' onClick={onNextImage}>
                <FcPrevious/></span>
              <span role='button' id='next' className='arrows p-2 border rounded mx-1' onClick={onNextImage}>
                <FcNext/></span>
              </div>
            </div>
           <div className='container slider'>
             <div className='slider-images' ref={slider}>
                <div className="recent-image" 
                 onMouseEnter={onImagePreviewShow} onMouseLeave={onImagePreviewHide}>
                  <img className='img-fluid' alt='slider-item'  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
                  <div className='slider-preview d-flex justify-content-center align-items-center' 
                  > 
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                    </div>
                </div>
              <div className="recent-image" onMouseEnter={onImagePreviewShow} onMouseLeave={onImagePreviewHide}>
                <img className='img-fluid' alt='slider-item'  src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
                <div className='slider-preview d-flex justify-content-center align-items-center'
                >
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                    </div>
              </div>
              <div className="recent-image">
                <img className='img-fluid' alt='slider-item' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
                <div className='slider-preview d-flex justify-content-center align-items-center'>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                    </div>
              </div>
              <div className="recent-image">
                <img className='img-fluid' alt='slider-item' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
                <div className='slider-preview d-flex justify-content-center align-items-center'>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                    </div>
              </div>
              <div className="recent-image">
                <img className='img-fluid' alt='slider-item' src='https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7..1619540713.jpg'/>
                <div className='slider-preview d-flex justify-content-center align-items-center'>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                  <span className='border rounded border-color-white px-2 py-1'><FaCartPlus /></span>
                    </div>
              </div>
        </div>
        </div>
        </div>
    )
}

export default Slider
