import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Fav from "./pages/fav";
import About from "./pages/about";
import Detail from "./pages/detail";
import Navbar from "./pages/navbar";
import One from "./pages/one";
import Two from "./pages/two";
import Three from "./pages/three";
import WeatherApp from "./pages/weather";

const App = () => {
 

  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/item/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<WeatherApp />} />

        
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
      
    </BrowserRouter>
    </div>
  );
};

export default App;
