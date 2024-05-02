import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam } = useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <a href="/fav" className="">
          FoodRecipe
        </a>
      </h2>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <a href={"/"} className="text-black hover:text-gray-700 duration-300">
            Home
          </a>
        </li>
        <li>
          <a
            href={"/fav"}
            className="text-black hover:text-gray-700 duration-300"
          >Favourites</a>
        </li>
      </ul>
    </nav>
  );
}