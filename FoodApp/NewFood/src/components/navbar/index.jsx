import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    console.log(searchParam)




  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <a href="/fav" className="">
          FoodRecipe
        </a>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam} //useContext passed us this parameter
          onChange={e => setSearchParam(e.target.value)}
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

//in this file first we defined html template, i replaced NavLink/Link with a tag, bcz it wouldnt work
//second- create context file with const and pass it here
//third- use passed context i in put (value, onChange)
//for api make submit function (handleSubmit) which we are gonna receive from useContext