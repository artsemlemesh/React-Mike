import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import "./pages.css";
import { useContext, useState } from "react";
import { GlobalCont } from "../context/context";
import Note from "../components-todo/Note";
import { useRef } from "react";

import api from '../../api'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {
  const { theme } = useContext(GlobalCont);

 
 const countRef = useRef(0)

 const handle = ()=> {
  countRef.current++
  console.log(`clicked ${countRef.current}`)
 }
 console.log('rendered')

  


  

  return (
    <div className="one" data-theme={theme}>
      <button onClick={handle}>click</button>
      <div>
        Home
        {items.map((item, index) => (
          <a key={index} href={`/item/${item}`}>
            {" "}
            {item}{" "}
          </a>
        ))}
      </div>

      <div className="notes">
       

      </div>
   
    </div>
  );
};

export default Home;
