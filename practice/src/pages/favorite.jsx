import { useContext } from "react"
import { SmthContext } from "../App"
import Navbar from "../components/navbar"
import { Link, NavLink } from "react-router-dom"


export default function Fav(){

    const hey = useContext(SmthContext)

    console.log(hey, 'favhey')

    return (
        <div>
            {/* <Navbar/> */}
            
            <NavLink to={'/'}>
home
            </NavLink>
            <Link to={'/'}>
                main page
            </Link>
            favorite
        </div>
    )
}