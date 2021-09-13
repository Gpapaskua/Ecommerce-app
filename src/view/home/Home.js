import React, {useState, useCallback, useEffect} from 'react'
import axios from 'axios'
import  Offers from './sections/Offers'
import Slider from '../../components/common/Slider'
import PrimarySlider from '../../components/common/primarySlider/PrimarySlider'
import Sidebar from '../../components/layouts/Sidebar'

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState(null) // products to display
    const [productsCount, setProductsCount] = useState(0) // number of products to display
    
    /**Get feautured products*/
  const getFeatureProducts =  useCallback(() => {
    axios.get('https://fakestoreapi.com/products?limit=8')
    .then((res) => {
      if(res.status === 200){
        setFeaturedProducts(res.data)
        setProductsCount(res.data.length)
      }
    })
}, []);

  useEffect(() => { 
    getFeatureProducts()
   
  }, [getFeatureProducts])
    
    return (
        <>
            <div className='container-fluid my-4'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-3 pr-1'>
                    <Sidebar />
                  </div>
                <div className='col-md-6 ml-5'>
                    <PrimarySlider />
                </div>
              </div>
            </div>
            </div>
            <Offers />
            <Slider featuredProducts={featuredProducts} productsCount={productsCount}/>
        </>
    )
}

export default Home
