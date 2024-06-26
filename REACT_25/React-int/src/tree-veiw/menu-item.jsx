import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem({item}){
    const [currChild, setCurrChild] = useState({});

    function toggleChildren(getCurrentLabel){
        setCurrChild({
            ...currChild, //spread the current state to preserve other child states
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
            {/*  currChild[item.label]  - checks whether the children of the current menu item are toggled or not, if yes - execute block after ?*/}
        {item && item.children && item.children.length > 0 && currChild[item.label] ? ( //recursive function
            <MenuList list={item.children}/>
        ) : null}
    </li>)
}