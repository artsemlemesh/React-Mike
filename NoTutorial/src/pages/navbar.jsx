import { NavLink, Outlet } from "react-router-dom";
import '../index.css'


const links = [
    'one', 'two', 'three'
]


const Navbar = () => {


  return (
    <>
      <nav>
        <h1 className="navb">This is my navbar</h1>
        <div className="navlinkdiv">
            
        <NavLink to={"/fav"}>Favorites</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/"}>Home</NavLink>
        </div>
        {
            links.map((item, index) => <NavLink key={index} to={`/${item}`}>
                {item}
            </NavLink>)
        }
      </nav>
    </>
  );
};

export default Navbar;
