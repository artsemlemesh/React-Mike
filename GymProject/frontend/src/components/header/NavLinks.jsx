import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const getLinkClass = (isActive) =>
    isActive
      ? "text-blue-500 font-semibold no-underline decoration-2 underline-offset-4"
      : "text-gray-800 hover:text-gray-600 no-underline font-medium";

  return (
    <>
      <div className="flex justify-between border-b border-gray-300 bg-white p-4 shadow-md">
  <div className="flex space-x-4">
    <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
      About
    </NavLink>
    <NavLink to="/home" className={({ isActive }) => getLinkClass(isActive)}>
      Home
    </NavLink>
    <NavLink to="/sdf" className={({ isActive }) => getLinkClass(isActive)}>
      Contact
    </NavLink>
  </div>
</div>
    </>
  );
};

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex ">
        <div className="hidden justify-between md:flex">
          <Nav />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <div
        className={`md:hidden transition-transform transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ease-in-out duration-300`}
      >
        {isOpen && (
          <div className="flex flex-col items-center basis-full mt-2">
            <Nav />
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;
