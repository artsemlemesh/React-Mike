import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "../../addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false); //for changing dynamically + for -
  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore(); //zustand

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
        const items = res.data().chats;

        const promises = items.map( async(item) => {
            const userDocRef = doc(db, 'users', item.receiverId)
            const userDocSnap = await getDoc(userDocRef)

            const user = userDocSnap.data()

            return {...item, user}
        })

        const chatData = await Promise.all(promises)
        setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt))//sorts in descending order based on updatedAt property
});

    //cleanup function
    return () => {
      unSub();
    };
  }, [currentUser.id]);

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
          onClick={() => setAddMode((prev) => !prev)} //change + for - on click
        />
      </div>
      {chats.map((chat) => (
        <div className="item" key={chat.chatId}>
          <img src={chat.user.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser />}{" "}
    </div>
  );
};

export default ChatList;
