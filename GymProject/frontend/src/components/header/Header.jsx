import NavLinks from "./NavLinks";
import RegButton from "./RegButton";
import {FaHandshake} from 'react-icons/fa'

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <FaHandshake size={50} className="mb-4 text-yellow-500"/>
        <NavLinks />
        <RegButton />
      </div>
    </>
  );
};

export default Header;
