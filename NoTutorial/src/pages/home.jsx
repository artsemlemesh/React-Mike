import { NavLink } from "react-router-dom";
import Navbar from "./navbar";


const items = [
    1, 2, 3, 4, 5,6 ,7 ,8 , 9
]


const Home = () => {



  return <div>
    
    Home
        
    {items.map((item, index)=> (
        <a key={index} href={`/item/${item}`}> {item} </a>
    ))}
    {/* <a href={items.map(item=> item)}>{items}</a> */}
    
    
    </div>;
};

export default Home;
