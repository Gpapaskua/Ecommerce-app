import React from 'react'

/**icons */
import { AiFillStar } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'

const Products = ({prod}) => {
    const rate = Math.round(prod.rating?.rate) //round rate number
    return (
        <div className='col-md-5 recent-image'>
            <div className='product-top'>
                <p>{prod.title}</p>
                <div className="ratings"> 
                {
                     
                     Array.from({length: 5}, (item, index) => {
                        return index < rate ? <span className="rating-icons green" key={index}><AiFillStar /></span>
                        : <span className="rating-icons" key={index}><AiFillStar /></span>
                     }  
                  )
                }
                </div>
                </div>
            <div className='product-image'>
                <img src={prod.image} alt='product' style={{width: '100%'}}/>
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
}

export default Products
