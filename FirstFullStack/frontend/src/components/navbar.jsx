import { Link } from "react-router-dom"


function NavBar(){


    return <div>
        <Link to='create-note/'>create note</Link>
        <Link to='/'>notes</Link>
    </div>
}

export default NavBar