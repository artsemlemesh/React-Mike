import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem({item}){
    const [currChild, setCurrChild] = useState({});

    function toggleChildren(getCurrentLabel){
        setCurrChild({
            ...currChild,
            [getCurrentLabel]: !currChild[getCurrentLabel],
        })
    }

    console.log(currChild)

    return (<li>
        <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
        <span onClick={() => toggleChildren(item.label)}>
            {currChild[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/>}
            </span>) : null}
        </div>

        {item && item.children && item.children.length > 0 && currChild[item.label] ? ( //recursive function
            <MenuList list={item.children}/>
        ) : null}
    </li>)
}