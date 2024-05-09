import { useEffect, useRef, useState } from "react";
import "./chatList.css";
import AddUser from "../../addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [input, setInput] = useState("");

  const { currentUser } = useUserStore(); //zustand
  const { chatId, changeChat } = useChatStore();

  //
  const [showContent, setShowContent] = useState(false);//for showing/hiding content when click outside the pop-up window and dynamic + and -
  //

  //
  const ref = useRef();
  //

  //define function for clicking outside the area
  function useOutsideClick(ref, handler) {
    useEffect(() => {
      function listener(e) {
        if (!ref.current || ref.current.contains(e.target)) {
          return; //ignore clicks inside the specified element
        }
        handler(e); // if outside the designated area- calls handler
      }

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        //remove after using, clean memory
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [handler, ref]);
  }

  
  useOutsideClick(ref, ()=> setShowContent(false)); //CALL THE FUNC, ALSO ADD PROPS LATER
/////


  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt)); //sorts in descending order based on updatedAt property
      }
    );

    //cleanup function
    return () => {
      unSub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    const userChats = chats.map((item) => {
      const { user, ...rest } = item; //chats are in ...rest
      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
    );

    userChats[chatIndex].isSeen = true;
    const userChatsRef = doc(db, "userchats", currentUser.id);

    try {
      await updateDoc(userChatsRef, {
        //the data i want to change next line
        chats: userChats,
      });
      //need to update messages
      changeChat(chat.chatId, chat.user);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredChats = chats.filter((c) =>
    c.user.username.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <img
          src={showContent ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setShowContent((prev) => !prev)} //change + for - on click
        />
      </div>
      {filteredChats.map((chat) => (
        <div
          className="item"
          key={chat.chatId}
          onClick={() => handleSelect(chat)}
          style={{
            backgroundColor: chat?.isSeen ? "transparent" : "#5183fe",
          }}
        >
          <img
            src={
              chat.user.blocked.includes(currentUser.id)
                ? "./avatar.png"
                : chat.user.avatar || "./avatar.png"
            }
            alt=""
          />
          <div className="texts">
            <span>
              {chat.user.blocked.includes(currentUser.id)
                ? "User"
                : chat.user.username}
            </span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {showContent && <div ref={ref}>
        <AddUser />
        </div> }
      {/* // {addMode && <AddUser />}{" "} */}
    </div>
  );
};

export default ChatList;
