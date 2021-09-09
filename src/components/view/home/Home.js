import React from 'react'
import  Navbar  from '../../layouts/Navbar'
import  Header  from '../../layouts/Header'
import  Categories  from '../../layouts/Categories'
import  Offers from '../home/sections/Offers'
import  RecentProducts from '../home/sections/RecentProducts'
import  Contact from '../home/sections/Contact'

const Home = () => {
    
    return (
        <div className='bg-light'>
            <Header /> 
            <Categories />
            <Offers />
            <RecentProducts />
            <Contact /> 
        </div>
    )
}

export default Home
