import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Cart from "./pages/cart.jsx";
import Header from "./components/header/index.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
    </Provider>
);
