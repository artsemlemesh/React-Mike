import { Link } from "react-router-dom"





const NavLinks = () => {
return (
    <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <ul className="flex flex-wrap justify-center space-x-4 p-4 ">
            <li><Link to='' className="text-black hover:text-gray-400">Home</Link></li>
            <li><Link to='' className="text-black hover:text-gray-400">About</Link></li>
            <li><Link to='' className="text-black hover:text-gray-400">Vehicle Models</Link></li>
            <li><Link to='' className="text-black hover:text-gray-400">Testimonials</Link></li>
            <li><Link to='' className="text-black hover:text-gray-400">Our Team</Link></li>
            <li><Link to='' className="text-black hover:text-gray-400">Contact</Link></li>
        </ul>

    </div>

)
}


export default NavLinks