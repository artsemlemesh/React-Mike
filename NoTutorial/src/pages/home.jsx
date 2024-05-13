import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
import "./pages.css";
import { useContext } from "react";
import { GlobalCont } from "../context/context";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => {

    const {theme} = useContext(GlobalCont)

  return (
    <div className="one" data-theme={theme}>
    <div >
      Home
      {items.map((item, index) => (
        <a key={index} href={`/item/${item}`}>
          {" "}
          {item}{" "}
        </a>
      ))}
      {/* <a href={items.map(item=> item)}>{items}</a> */}
    </div>
    hosd
    </div>
  );
};

export default Home;
