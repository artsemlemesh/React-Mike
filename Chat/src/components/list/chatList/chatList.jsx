import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false); //for changing dynamically + for -

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}//change + for - on click
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt=''/>
        <div className="texts">
            <span>Mike Scof</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=''/>
        <div className="texts">
            <span>Mike Scof</span>
            <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=''/>
        <div className="texts">
            <span>Mike Scof</span>
            <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
