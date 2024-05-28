import { useContext } from "react";
import "./App.css";
import Nav from "./components/navbar/MainNav";
import Footer from "./components/footer/footer";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import MyRoute from "./components/routes/route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PLGUYIhhfcmQPRULxV6eXxZHMWqEEW29vQ1FdVwcjE7CevUdT4TnnWVHu15xXC7ZQ7x8CXtXtUbqj3I2zZFlqEn00fS1PbLT0')


function App() {
  return (
    <>
      <BrowserRouter>
      <Elements stripe={stripePromise}>
        <Nav />
        <MyRoute />
        <Footer />
        <ToastContainer />
        </Elements>
      </BrowserRouter>
    </>
  );
}

export default App;
