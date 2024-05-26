import { AiOutlineSearch } from "react-icons/ai";
import "./nav.css";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

const SearchBox = () => {
  const { searchParam, handleChange } = useContext(GlobalContext);

  return (
    <div className="search_box">
      <input
        type="text"
        value={searchParam}
        placeholder="search"
        onChange={handleChange}
        // showDropdown={showDropdown}
      />

      {/* {showDropdown && trendingProduct.map((item) => (
  <div>{item.name}</div>))} */}
      {/* for dropdown but no need */}

      {/* <button onClick={searchProduct}>
            <AiOutlineSearch/>
        </button> */}
    </div>
  );
};

export default SearchBox;
