import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../features/auth/authSlice";
import LoginForm from "../features/auth/LoginForm";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Membership Plans", path: "/membership-plans" },
  { name: "Class Schedule", path: "/class-schedule" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    dispatch(logoutUser());
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  Gym Logo
                </span>
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
                      ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
                      : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="relative">
            {user ? (
              <>
                <span className="text-gray-700 font-semibold">
                  Hello {user.username}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  {authStatus === "loading" ? "Logging out ..." : "Logout"}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={toggleLogin}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {authStatus === "loading" ? "Logging in ..." : "Login"}
                </button>
                {showLogin && <LoginForm />}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
