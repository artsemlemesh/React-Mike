import { Link } from "react-router-dom"



const NavBar = ()=> {



    return(
        <div>
            <Link to='/create-book/'>create book</Link>
            <Link to='/'>list books</Link>
        </div>
    )


}

export default NavBar