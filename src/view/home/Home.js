import React from 'react'
import  Header  from '../../components/layouts/Header'
import  Categories  from '../../components/layouts/Categories'
import  Offers from './sections/Offers'
import  Contact from '../home/sections/Contact'
import Slider from './slider/Slider'

const Home = () => {
    
    return (
        <div className='bg-light'>
            <Header /> 
            <Categories />
            <Offers />
            <Slider />
            <Contact /> 
        </div>
    )
}

export default Home
