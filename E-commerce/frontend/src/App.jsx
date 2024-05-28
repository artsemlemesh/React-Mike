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
  return (
    <>
      <BrowserRouter>
        <Nav />
        <MyRoute />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
