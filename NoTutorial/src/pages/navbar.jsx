import { NavLink, Outlet } from "react-router-dom";
import "../index.css";
import StatusBar from "./two";
import { useState } from "react";
import useLS from "../components/navbarCustomHook";

const links = ["one", "two", "three"];

const Navbar = () => {


  return (
    <>
      <nav>
        <h1 className="navb" >
          <div>This is my navbar</div>
          <div className="stat">
            <StatusBar />
          </div>
          <div className="btn">
            <button onClick={changeTheme}>change theme</button>
          </div>
        </h1>

        <div className="navlinkdiv">
          <NavLink to={"/fav"}>Favorites</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/"}>Home</NavLink>
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
