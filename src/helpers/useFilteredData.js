
export const useFilteredData = ( filterParam, data) => {
        if(filterParam === 'price' && data){
            let filtered = data.sort((a, b) => a.price - b.price)
            return filtered
        }
        if(filterParam === 'popular' && data){
            let filtered = data.sort((a, b) => a.rating.rate - b.rating.rate).reverse()
            return filtered
        }
        return data
}
