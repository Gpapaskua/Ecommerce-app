import { useState, useEffect } from "react"

export const useFilteredData = ( filterParam, data) => {
    const [filteredData, setFilteredData] = useState(null)
    useEffect(() => {
        if(filterParam === 'price' && data){
            let filtered = data.sort((a, b) => a.price - b.price)
            setFilteredData(filtered)
        }
        if(filterParam === 'popular' && data){
            let filtered = data.sort((a, b) => a.rating.rate - b.rating.rate)
            setFilteredData(filtered)
        }
    }, [filterParam])
       
        return filteredData
}
