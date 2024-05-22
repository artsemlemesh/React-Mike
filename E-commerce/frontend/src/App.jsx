import { useContext } from "react";
import "./App.css";
import Nav from "./components/navbar/MainNav";
import Footer from "./components/footer/footer";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import MyRoute from "./components/routes/route";
function App() {
  const { search, setSearch, searchProduct, addToCart, shop, filter, allCategoryFilter } =
    useContext(GlobalContext);

  return (
    <>
      <BrowserRouter>
        <Nav
          // search={search}
          // setSearch={setSearch}
          // searchproduct={searchProduct}
        />
        <MyRoute shop={shop} filter={filter} allCategoryFilter={allCategoryFilter} addToCart={addToCart} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
