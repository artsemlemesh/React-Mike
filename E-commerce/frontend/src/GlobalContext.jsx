import { createContext, useEffect, useState } from "react";
import Homeproduct from "./components/home_product";
import useLS from "./custom_hook.jsx/navbarDarkTheme";
import { useAuth0 } from "@auth0/auth0-react";





export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  // If the cart is being erased from local storage on refresh, it likely means the cart state is being initialized to an empty array on every refresh. To avoid this issue, you need to ensure that the cart state is initialized from local storage if it exists.
  const [cart, setCart] = useState(()=>{ //then after refreshing it will return currently stored value
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  });
  const [shop, setShop] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useLS('theme', 'day') //for dark theme


  //added extra
  const [newProduct, setNewProduct] = useState([])
  const [featuredProduct, setFeaturedProduct] = useState([])
  const [topProduct, setTopProduct] = useState([])
  const [trendingProduct, setTrendingProduct] = useState([])
  const [allProducts, setAllProducts] = useState([]);  
  //





 

  //also new
  useEffect(()=> {

    const fetchProducts = async () => {
        try{
            const response = await fetch('http://127.0.0.1:8000/products/')
            if(!response.ok){
                throw new Error('Network error was not ok')
            }
            const data = await response.json()
            setAllProducts(data)
            setShop(data)//returns all the products by default after loading the shop page
            

            // localStorage.setItem('cart', allProducts)
            // localStorage.getItem('cart')
            categorizeProducts(data);

            
        }catch(e){
            console.error('fetch error: ', e)
        }
    }

    const savedCart = localStorage.getItem('cart')
            if (savedCart) {
              setCart(JSON.parse(savedCart))
            }



    const categorizeProducts = (products) =>{
        setNewProduct(products.filter(product => product.type === 'new'))
        setFeaturedProduct(products.filter(product => product.type === 'featured'))
        setTopProduct(products.filter(product => product.type === 'top'))
        setTrendingProduct(products)

    }
    fetchProducts()
}, [])


useEffect(()=>{
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])


const filterCategory = (category) => {
    if(category === 'all'){
        setTrendingProduct(allProducts)

    } else {
        setTrendingProduct(allProducts.filter(product => product.type === category))
    }
}

//






  function handleTheme(){
    setTheme(theme === 'day' ? 'dark' : 'day')
  }



  const myfilter = (x) => {
    console.log("Filtering by category:", x);
    console.log("All Products:", allProducts);
    
    const category = allProducts.filter((product) => {
        console.log(`Checking product ${product.name}: category ${product.category}`);
        return product.category === x;
    });

    console.log("Filtered Products:", category);
    setShop(category);
};



  const allCategoryFilter = () => {
    setShop(allProducts);

  };

  const searchLength = (search || []).length === 0;

  const searchProduct = () => {
    if (searchLength) {
      alert("search something");
      setShop(allProducts);
    } else {
      const searchFilter = allProducts.filter((x) => {
        return x.category === search;
      });
      setShop(searchFilter);
    }
  };

  const addToCart = (product) => {
    

    const exists = cart.find((x) => {
      return x.id === product.id;
    });
    if (exists) {
      alert("this product is already in the cart");
    } else {
      const newCart = [...cart, {...product, quantity: 1}]
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
      // setCart([...cart, { ...product, quantity: 1 }]);
      alert("added to the cart");
    }
  };


  



  console.log(cart);

  return (
    <GlobalContext.Provider
      value={{
        shop,
        myfilter,
        allCategoryFilter,
        search,
        setSearch,
        searchProduct,
        addToCart,
        handleTheme,
        theme,
        setCart,
        cart,
        newProduct,
        featuredProduct,
        topProduct,
        trendingProduct,
        filterCategory,
        allProducts
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
