import React, { useRef, useState } from 'react'
import './RecentProducts.css'
import {FcPrevious, FcNext} from 'react-icons/fc'

const RecentProducts = () => {
  const [translated, setTranslated] = useState(0)
  const slider = useRef()
  const onNextImage = (e) => {
    if(e.target.id === 'next'){
      slider.current.style.transform = `translate3d(${translated-296}px, 0px, 0px)`
      setTranslated(translated - 296)
    }
    if(e.target.id === 'previous' && translated != 0){
      slider.current.style.transform = `translate3d(${translated+296}px, 0px, 0px)`
      setTranslated(translated + 296)
    }
    
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
             <div class="recent-image">
        <img clasName='img-fluid' style={{objectFit: 'cover'}} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
        </div>
        <div class="recent-image">
        <img clasName='img-fluid' style={{objectFit: 'cover'}} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
        </div>
        <div class="recent-image">
        <img clasName='img-fluid' style={{objectFit: 'cover'}} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
        </div>
        <div class="recent-image">
        <img clasName='img-fluid' style={{objectFit: 'cover'}} src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
        </div>
        <div class="recent-image">
        <img clasName='img-fluid' style={{objectFit: 'cover'}} src='https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7..1619540713.jpg'/>
        </div>
        </div>
        </div>
        </div>
    )
}

export default RecentProducts
