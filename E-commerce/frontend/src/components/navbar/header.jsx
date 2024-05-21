import { MdLocalShipping } from "react-icons/md";
import './nav.css'

const Header = () => (
  <div className="header">
    <div className="top_header">
      <div className="icon">
        <MdLocalShipping />
      </div>
      <div className="info">
        <p>Free Shipping after 1000$</p>
      </div>
    </div>
  </div>
);

export default Header;
