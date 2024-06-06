import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Membership Plans', path: '/membership-plans' },
  { name: 'Class Schedule', path: '/class-schedule' },
  { name: 'Contact', path: '/contact' },
];
//isActive prop is part of the NavLink component's classname prop, allows conditionally apply classes 
const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Gym Logo</span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  exact={item.exact}
                  className={({ isActive }) =>
                    isActive
                      ? 'py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold'
                      : 'py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
