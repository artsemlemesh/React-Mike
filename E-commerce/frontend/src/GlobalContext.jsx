import { createContext, useState } from "react";
import Homeproduct from "./components/home_product";
import useLS from "./custom_hook.jsx/navbarDarkTheme";
import { useAuth0 } from "@auth0/auth0-react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [cart, setCart] = useState([]);
  const [shop, setShop] = useState(Homeproduct);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useLS('theme', 'day') //for dark theme



  function handleTheme(){
    setTheme(theme === 'day' ? 'dark' : 'day')
  }



  const filter = (x) => {
    const category = Homeproduct.filter((product) => {
      return product.cat === x;
    });
    setShop(category);
  };
  const allCategoryFilter = () => {
    setShop(Homeproduct);
  };

  const searchLength = (search || []).length === 0;

  const searchProduct = () => {
    if (searchLength) {
      alert("search something");
      setShop(Homeproduct);
    } else {
      const searchFilter = Homeproduct.filter((x) => {
        return x.cat === search;
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
      setCart([...cart, { ...product, quantity: 1 }]);
      alert("added to the cart");
    }
  };
  console.log(cart);

  return (
    <GlobalContext.Provider
      value={{
        shop,
        filter,
        allCategoryFilter,
        search,
        setSearch,
        searchProduct,
        addToCart,
        handleTheme,
        theme,
        setCart,
        cart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
