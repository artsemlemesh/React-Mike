import { useState } from "react";
import MenuList from "./menu-list-test";
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem({ item }) {
  const [currChild, setCurrChild] = useState({});

  function toggleChild(currLab) {
    setCurrChild({
      ...currChild,
      [currLab]: !currChild[currLab],
    });
  }

  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => toggleChild(item.label)}>
            {currChild[item.label] ? (
              <FaMinus color="#000" size={25} />
            ) : (
              <FaPlus color="#000" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      currChild[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
