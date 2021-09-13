import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {BsFillHeartFill} from 'react-icons/bs'

const Header = () => {
    return (
        <div className='container d-flex flex-lg-row flex-column
         justify-content-lg-between justify-content-center align-items-center'>
            <h2 className='display-3 font-weight-bold my-lg-0 my-2' style={{color: '#FF6F61'}}>
                E<span className='font-weight-light' style={{color: '#000'}}>Store</span></h2>
                <form className="form-inline w-50 my-lg-0 my-2">
            <input className="form-control mr-sm-2 w-100 search-input" type="search" 
            placeholder="Search" aria-label="Search"/>
    </form>
        <div className='my-lg-0 my-2'>
        <span className='option-icons mx-2 p-2 rounded'>
                <BsFillHeartFill/> (0)</span>
            <span className='option-icons mx-2 p-2 rounded'>
                <FaShoppingCart /> (0)</span>
        </div>
        </div>
    )
}

export default Header
