import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/home/index.jsx";
import Favourites from "./pages/favourites/index.jsx";
import Details from "./pages/details/index.jsx";
import Navbar from './components/navbar/index.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/fav',
    element: <Favourites/>
  },
  {
    path: '/recipe-item/:id',
    element: <Details/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
  <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
