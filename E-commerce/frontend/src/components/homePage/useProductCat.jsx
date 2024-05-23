import { useEffect, useState } from "react"
import Homeproduct from "../home_product"
import './homePage.css'



const useProductCategory = () => {
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])
    const [trendingProduct, setTrendingProduct] = useState([])
    const [allProducts, setAllProducts] = useState([]);  


    useEffect(()=> {

        const fetchProducts = async () => {
            try{
                const response = await fetch('http://127.0.0.1:8000/products/')
                if(!response.ok){
                    throw new Error('Network error was not ok')
                }
                const data = await response.json()
                setAllProducts(data)
                categorizeProducts(data);

                
            }catch(e){
                console.error('fetch error: ', e)
            }
        }




        const categorizeProducts = (products) =>{
            setNewProduct(products.filter(product => product.type === 'new'))
            setFeaturedProduct(products.filter(product => product.type === 'featured'))
            setTopProduct(products.filter(product => product.type === 'top'))
            setTrendingProduct(products)

        }
        fetchProducts()
    }, [])

    const filterCategory = (category) => {
        if(category === 'all'){
            setTrendingProduct(allProducts)

        } else {
            setTrendingProduct(allProducts.filter(product => product.type === category))
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









// import { useEffect, useState } from "react"
// import Homeproduct from "../home_product"
// import './homePage.css'



// const useProductCategory = () => {
//     const [newProduct, setNewProduct] = useState([])
//     const [featuredProduct, setFeaturedProduct] = useState([])
//     const [topProduct, setTopProduct] = useState([])
//     const [trendingProduct, setTrendingProduct] = useState(Homeproduct)

//     useEffect(()=> {
//         const categorizeProducts = () =>{
//             setNewProduct(Homeproduct.filter(product => product.type === 'new'))
//             setFeaturedProduct(Homeproduct.filter(product => product.type === 'featured'))
//             setTopProduct(Homeproduct.filter(product => product.type === 'top'))

//         }
//         categorizeProducts()
//     }, [])

//     const filterCategory = (category) => {
//         if(category === 'all'){
//             setTrendingProduct(Homeproduct)

//         } else {
//             setTrendingProduct(Homeproduct.filter(product => product.type === category))
//         }
//     }

//     return {
//         newProduct,
//         featuredProduct,
//         topProduct,
//         trendingProduct,
//         filterCategory
//     }
// }

// export default useProductCategory