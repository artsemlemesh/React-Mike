import NavLinks from "./NavLinks";
import RegButton from "./RegButton";
import {FaHandshake} from 'react-icons/fa'
import UserProfile from "./userProfile";

const Header = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between p-4">
        <FaHandshake size={50} className="mb-4 text-yellow-500"/>
        <UserProfile/>
        <NavLinks />
        <RegButton />
      </div>
    </>
  );
};

export default Header;
