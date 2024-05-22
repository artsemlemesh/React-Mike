import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import './nav.css'
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";

// const {search, setSearch, searchProduct, isAuthenticated, loginWithRedirect, logout } = useContext(GlobalContext)


const UserMenu = ({isAuthenticated, loginWithRedirect, logout}) => (
  <div className="user">
    <div className="icon">{isAuthenticated ? <CiLogout /> : <FiLogIn />}</div>
    <div className="btn">
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </div>
  </div>
);

export default UserMenu