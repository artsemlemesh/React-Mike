import { useContext } from "react";
import "./App.css";
import Nav from "./components/navbar/MainNav";
import Footer from "./components/footer/footer";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import MyRoute from "./components/routes/route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { addToCart, shop, filter, allCategoryFilter } =
    useContext(GlobalContext);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <MyRoute
          shop={shop}
          filter={filter}
          allCategoryFilter={allCategoryFilter}
          addToCart={addToCart}
        />
        <Footer />
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
