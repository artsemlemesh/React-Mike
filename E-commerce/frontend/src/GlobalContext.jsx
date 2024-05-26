import { createContext, useEffect, useState } from "react";
import useLS from "./custom_hook.jsx/navbarDarkTheme";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  // If the cart is being erased from local storage on refresh, it likely means the cart state is being initialized to an empty array on every refresh. To avoid this issue, you need to ensure that the cart state is initialized from local storage if it exists.
  const [cart, setCart] = useState(() => {
    //then after refreshing it will return currently stored value
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [shop, setShop] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useLS("theme", "day"); //for dark theme

  //added extra
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  //

  const [count, setCount] = useState(1);
  const [disableBtn, setDisableBtn] = useState(false);

  const [totCount, setTotCount] = useState(0)


  const [searchParam, setSearchParam] = useState('')
  const [filteredProd, setFilteredProd] = useState([])

  //also new
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/products/?page=${count}`
        ); //also changed here
        if (!response.ok) {
          throw new Error("Network error was not ok");
        }
        const data = await response.json();
        const newProd = data.results;
    

        setAllProducts((prevProd) =>
          removeDuplicates([...prevProd, ...newProd])
        ); //not sure whether this is necessary, nothing changes with it off

        setShop((prevData) => removeDuplicates([...prevData, ...newProd]));

        categorizeProducts(newProd);
        // console.log('total', data.totalCount)
        console.log(data.totalCount)

        setTotCount(data.totalCount)
        console.log(totCount, 'totalcount')
      } catch (e) {
        console.error("fetch error: ", e);
      }
    };

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    fetchProducts();
  }, [count]);


  //  since the number of products fetched might not always match the total number of products available in the database (due to pagination or other factors), comparing shop.length directly to totCount might not be the best approach.
  useEffect(() => {
    const percentageFetched = (shop.length / totCount) * 100;
    if (percentageFetched >= 90) {
      setDisableBtn(true);
    }
  }, [shop, totCount]);
  // , percentageFetched calculates the percentage of products fetched compared to the total count. If this percentage exceeds a certain threshold (e.g., 90%), it disables the button.
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log(totCount, 'totalcount');
  }, [totCount]);

  //created bcz returned error- two obj have the same key
  const removeDuplicates = (array) => {
    const uniqueIds = new Set();
    return array.filter((item) => {
      if (!uniqueIds.has(item.id)) {
        uniqueIds.add(item.id);
        return true;
      }
      return false;
    });
  };

  const categorizeProducts = (products) => {
    setNewProduct((prevProd) =>
      removeDuplicates([
        ...prevProd,
        ...products.filter((product) => product.type === "new"),
      ])
    );
    setFeaturedProduct((prevProd) =>
      removeDuplicates([
        ...prevProd,
        ...products.filter((product) => product.type === "featured"),
      ])
    );
    setTopProduct((prevProd) =>
      removeDuplicates([
        ...prevProd,
        ...products.filter((product) => product.type === "top"),
      ])
    );
    setTrendingProduct((prevProd) =>
      removeDuplicates([...prevProd, ...products])
    ); // Trending products include all fetched products
  };

  const filterCategory = (category) => {
    if (category === "all") {
      setTrendingProduct(allProducts);
    } else {
      setTrendingProduct(
        allProducts.filter((product) => product.type === category)
      );
    }
  };
  console.log(allProducts, 'allprod')

  function handleTheme() {
    setTheme(theme === "day" ? "dark" : "day");
  }

  const myfilter = (x) => {
    console.log("Filtering by category:", x);
    console.log("All Products:", shop);

    const category = allProducts.filter((product) => {
      console.log(
        `Checking product ${product.name}: category ${product.category}`
      );
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
      setTrendingProduct(searchFilter);
      console.log(searchFilter, 'filter')
    }
  };


  const [showDropdown, setShowDropdown] = useState(false);

//search new func
  const handleChange = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchParam(query)
    if(query.length > 1){
      
      const filteredData = 
      allProducts.filter((item) => item.category === query)
      setTrendingProduct(filteredData)
      console.log(filteredData, 'filteredData')
      console.log(shop, 'shop')

      setShowDropdown(true)
    }

  }

  console.log(trendingProduct, 'TP')
  useEffect(() => {
    console.log(shop, 'SHOP');
  }, [shop]);
  
  

  // useEffect(()=>{


    
  // }, [filteredData])




  const addToCart = (product) => {
    const exists = cart.find((x) => {
      return x.id === product.id;
    });
    if (exists) {
      alert("this product is already in the cart");
    } else {
      const newCart = [...cart, { ...product, quantity: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
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
        allProducts,
        count,
        setCount,
        disableBtn,
        handleChange,
        searchParam,
        showDropdown,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
