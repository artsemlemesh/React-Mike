import { useState } from "react"
import MenuListNew from "./menu-list"


export default function MenuItemNew({item}) {
    const [currChild, setCurrChild] = useState({});



    function toggleChildren(getCurrentLabel){
        setCurrChild({
            ...currChild,
            [getCurrentLabel]: !currChild[getCurrentLabel],
        })
    }

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>
                {item && item.children && item.children.length ? (
                    <span onClick={()=> toggleChildren(item.label)}>
                        {}
                    </span>
                ) : null}
            </div>

            {item && item.children && item.children.length > 0 && currChild[item.label] ? (
                <MenuListNew list={item.children} />
            ) : null}
        </li>
    )
}