import React from 'react'

const ProductFilters = ({ setFilterParam}) => {
    return (
        <div className='container d-flex py-3 bg-white'>
        <input className="form-control mr-sm-2 border-dark" type="search" 
        placeholder="Search" aria-label="Search" />
        <select className="custom-select border-dark" title='Product Sort By'
         onChange={(e) => setFilterParam(e.target.value)}>
            <option value="price">Price</option>
            <option value="popular">Popular</option>
            <option value="mostSale">Most Sale</option>
        </select>
        <select className="custom-select border-dark mx-2" title='Product Price Range' id="inputGroupSelect01">
            <option value="1">0-50</option>
            <option value="2">50-100</option>
            <option value="3">100-150</option>
            <option value="3">100-150</option>
            <option value="3">100-150</option>
        </select>
    </div>
    )
}

export default ProductFilters
