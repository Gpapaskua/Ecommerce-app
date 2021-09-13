import React, {useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Sidebar = () => {
    const [categories, setCategories] = useState(null);

    const getAllCategories = useCallback(
        () => {
            axios.get('https://fakestoreapi.com/products/categories')
            .then((res) => {
                if(res.status === 200){
                    setCategories(res.data);
                }
                else{
                    console.log('Something went wrong!');
                }
            })
        },
        [],
    )
    useEffect(() => {
       getAllCategories();     
    }, [getAllCategories])
    return (
        <ul className="list-unstyled bg-white">
        {
            categories && categories.map((cat, index) => {
                return (
                    <li className=" border-bottom border-information py-3" key={index}>
                        <Link className='text-uppercase text-decoration-none ml-3'
                         to={`/products/category/${cat}`}>{cat}</Link>
                    </li>
                )
            })
        }
               
    </ul>
    )
}

export default Sidebar

