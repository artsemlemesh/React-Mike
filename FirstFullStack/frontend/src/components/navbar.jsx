import { Link } from "react-router-dom";
import '../index.css'
function NavBar() {
  return (
    <>
      <div className="header">
        <h1 className="logo">Todo</h1>
        <ul className="main-nav">
          <li>
            {" "}
            <Link to="create-note/">create note</Link>
          </li>
          <li>
            {" "}
            <Link to="/">notes</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
