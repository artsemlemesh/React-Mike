import { useAuth0 } from "@auth0/auth0-react";
import Header from "./header";
import SearchBox from "./searchBox";
import UserMenu from "./userMenu";
import UserProfile from "./userProfile";
import Navigation from "./Navigation";
import "./nav.css";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

const Nav = () => {

  const { handleTheme, theme } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <div className="mid_header" data-theme={theme}>
        <div className="logo">
          <img src="" alt="logo" /> {/* paste logo */}
        </div>
        <SearchBox />
        {/* <button onClick={handleTheme}>hey</button> */}

        <div className="switch">
          <input
            onClick={handleTheme}
            type="checkbox"
            className="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>
        </div>

        <UserMenu />
      </div>
      <div className="last_header">
        <UserProfile />
        <Navigation />
        <div className="offer">
          <p>flat 10% over all iphone</p>
        </div>
      </div>
    </>
  );
};
export default Nav;
