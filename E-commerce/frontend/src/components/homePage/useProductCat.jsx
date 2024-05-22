import { useEffect, useState } from "react"
import Homeproduct from "../home_product"
import './homePage.css'



const useProductCategory = () => {
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)

    useEffect(()=> {
        const categorizeProducts = () =>{
            setNewProduct(Homeproduct.filter(product => product.type === 'new'))
            setFeaturedProduct(Homeproduct.filter(product => product.type === 'featured'))
            setTopProduct(Homeproduct.filter(product => product.type === 'top'))

        }
        categorizeProducts()
    }, [])

    const filterCategory = (category) => {
        if(category === 'all'){
            setTrendingProduct(Homeproduct)

        } else {
            setTrendingProduct(Homeproduct.filter(product => product.type === category))
        }
    }

    return {
        newProduct,
        featuredProduct,
        topProduct,
        trendingProduct,
        filterCategory
    }
}

export default useProductCategory