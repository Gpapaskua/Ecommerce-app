import React from 'react'
import { BsArrowRepeat } from 'react-icons/bs'
import { FaCcMastercard, FaTruck } from 'react-icons/fa'
import {IoIosChatbubbles} from 'react-icons/io'

const Offers = () => {
    return (
        <section className='container-fluid bg-dark my-4'>
            <article className='container d-flex justify-content-evenly py-4' style={{gap: '1rem'}}>
                <div className='d-flex text-center flex-column justify-content-center 
                align-items-center bg-white py-3'>
                    <FaCcMastercard className='display-3 offer-icons my-3'/>
                    <p className='h4 font-weight-bold'>Secure Payment</p>
                    <p>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
                <div className='d-flex text-center flex-column justify-content-center align-items-center bg-white'>
                    <FaTruck className='display-3 offer-icons my-3'/>
                    <p className='h4 font-weight-bold'>Secure Payment</p>
                    <p>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
                <div className='d-flex text-center flex-column justify-content-center align-items-center bg-white'>
                    <BsArrowRepeat className='display-3 offer-icons my-3'/>
                    <p className='h4 font-weight-bold'>Secure Payment</p>
                    <p>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
                <div className='d-flex text-center flex-column justify-content-center align-items-center bg-white'>
                    <IoIosChatbubbles className='display-3 offer-icons my-3'/>    
                    <p className='h4 font-weight-bold'>Secure Payment</p>
                    <p>Lorem ipsum dolor sit amet consectetur elit</p>
                </div>
            </article>
        </section>
    )
}

export default Offers