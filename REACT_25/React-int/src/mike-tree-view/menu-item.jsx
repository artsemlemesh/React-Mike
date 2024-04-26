import { useState } from "react"
import MenuListNew from "./menu-list"
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItemNew({item}) {
    const [currChild, setCurrChild] = useState({});



    function toggleChildren(getCurrentLabel){
        setCurrChild({
            ...currChild, //copies the current state
            [getCurrentLabel]: !currChild[getCurrentLabel], // toggles current label to true/false(show/hide)
        })
    }

    return (
        <li>
            <div className="menu-item">
                
                <p>{item.label}</p>  {/* displays the tab's name */}
                {item && item.children && item.children.length ? (
                    <span onClick={()=> toggleChildren(item.label)}> {/* click, calls function that toggles current label */}
                        {currChild[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color='#fff' size={25}/>} {/* dynamic + and - */}
                    </span>
                ) : null}
            </div>

            {item && item.children && item.children.length > 0 && currChild[item.label] ? ( // if there are children and currChild[item.label] is true, then MenuListNew calls again to display labels down the tree
                <MenuListNew list={item.children} />    //recursive funciton
            ) : null}
        </li>
    )
}