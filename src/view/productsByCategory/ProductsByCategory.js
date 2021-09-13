import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

/**styles */
import './ProductsByCategory.css'

/** layouts */
import Sidebar from '../../components/layouts/Sidebar'

/**components */
import Products from './products/Products'
import ProductFilters from './productFilters/ProductFilters'
import PrimarySlider from '../../components/common/primarySlider/PrimarySlider'

/**helpers */
import { useFilteredData } from '../../helpers/useFilteredData'


const ProductsByCategory = () => {
    const { category } = useParams() // product category
    const [products, setProducts] = useState(null)
    const [filterParam, setFilterParam] = useState('newest') //filter parameter

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => {
                if(res.status === 200){
                    setProducts(res.data)
                }
            })
    }, [category])

    const filteredData = useFilteredData(filterParam, products) //filter data with filter paramater

    return (
        <div className='container-fluid my-2 py-3'>
            <div className='container'>
                <p className='page-location'>
                    Home&nbsp;/&nbsp;Products&nbsp;/&nbsp;<span className='text-muted text-capitalize'>{category}</span>
                </p>
            </div>
            <div className='container'>
                <div className='row justify-content-around'>
                    <div className='col-md-7'>
                        <ProductFilters filterParam={filterParam} setFilterParam={setFilterParam}/>
                        <div className='container my-3 bg-white'>
                            <div className='row'>
                                {
                                   filteredData ?  filteredData.map((prod) => {
                                    return <Products prod={prod} key={prod.id}/>
                                 }) :
                                   products && products.map((prod) => {
                                       return <Products prod={prod} key={prod.id}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 bg-white'>
                        <div className='container'>
                            <p className='text-center mt-3'>Categories</p>
                            <Sidebar />
                            <PrimarySlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsByCategory
