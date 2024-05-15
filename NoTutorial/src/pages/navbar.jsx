import { NavLink, Outlet } from "react-router-dom";
import "../index.css";
import StatusBar from "./two";
import { useContext, useState } from "react";
import { GlobalCont } from "../context/context";
// import useLS from "../components/navbarCustomHook";

const links = ["one", "two", "three", 'four'];

const Navbar = () => {
  const { handleTheme, theme } = useContext(GlobalCont);

  // const [theme, setTheme] = useLS('theme','day')

  // function handleTheme(){
  //   setTheme(theme === 'day'? 'dark': 'day')
  // }

  return (
    <>
      <nav>
        <h1 className="navb" data-theme={theme}>
          <div>This is my navbar</div>
          <div className="stat">
            <StatusBar />
          </div>
          <div className="btn">
            <button onClick={handleTheme}>change theme</button>
          </div>
        </h1>

        <div className="navlinkdiv">
          <NavLink to={"/fav"}>Favorites</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/weather"}>Weather</NavLink>
        </div>
        {links.map((item, index) => (
          <NavLink key={index} to={`/${item}`}>
            {item}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
