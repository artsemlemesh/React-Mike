import NavLinks from "./NavLinks"
import RegButton from "./RegButton"


const Header = () => {


    return(
        <>
        <h1>headerr</h1>
        <div className="flex items-center justify-between p-4">
        <img src="" alt="logo"/>
        <NavLinks/>  
        <RegButton/>
            </div>
        </>
    )
}

export default Header