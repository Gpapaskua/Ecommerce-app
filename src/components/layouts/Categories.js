import React from 'react'
import {ImHome} from 'react-icons/im'
import {IoWomanSharp, IoMan} from 'react-icons/io5'
import {FaShoppingBag, FaPlusSquare, FaBaby} from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'
import { GiClothes } from 'react-icons/gi'
import PrimarySlider from '../../view/home/slider/PrimarySlider'

const Categories = () => {
    return (
        <div className='container-fluid bg-light'>
            <div className='container'>
            <div className='row'>
            <div className='col-md-3 pr-1'>
                <ul className="list-unstyled bg-white mt-4">
    	            <li className=" border-bottom border-information py-3">
                    <a href='/' className='d-flex align-items-center ml-4'><ImHome className='mr-2'/>Home</a>
                    </li>
    	            <li className="w-100 border-bottom border-information py-3">
                    <a href='/' className='d-flex align-items-center ml-4'><FaShoppingBag className='mr-2'/> Best Selling</a>      
                        </li>
    	            <li className="border-bottom border-information py-3">
                    <a href='/' className='d-flex align-items-center ml-4'><FaPlusSquare className='mr-2'/> New Arrivals</a>      
                        </li>
    	            <li className="border-bottom border-information py-3">
                    <a href='/' className='d-flex align-items-center ml-4'><FaBaby className='mr-2'/>Kids & Baby Clothes</a>      
                        </li>
    	            <li className="border-bottom border-information py-3">
                    <a href='/' className='d-flex align-items-center ml-4'><IoMan className='mr-2'/>Fashion & Beauty</a>      
                        </li>
    	            <li className="border-bottom border-information py-3">
                    <a href='/' className='d-flex align-items-center ml-4'><GiClothes className='mr-2'/>Men & Women Clothes</a>      
                        </li>
    	            <li className="border-bottom border-information py-3">
                    <a href='/' className='d-flex align-items-center ml-4'><BsPhone className='mr-2'/>Gadgets & Accessories</a>      
                        </li>
    	            <li className="border-bottom border-information pt-3">
                    <a href='/' className='d-flex align-items-center ml-4'><IoWomanSharp className='mr-2'/>Electronics & Accessories</a>      
                        </li>       
                </ul>
                </div>
            <div className='col-md-8'>
                <div className='container my-4'>
                <PrimarySlider />
                </div>
            </div>
            </div>
            </div>
            </div>
            
    )
}

export default Categories