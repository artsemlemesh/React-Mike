import { useState, useRef, useEffect, createContext } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";
import { getStorage, ref, uploadBytes } from "firebase/storage";



const Chat = () => {


  const [chat, setChat] = useState();
  const [open, setOpen] = useState(false); //for show/hide Emoji
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    //for uploading image with the message
    file: null,
    url: "",
  });


  

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } =
    useChatStore();
  const { currentUser } = useUserStore();

  const endRef = useRef(null);
  //to scroll to the beginning of the page when the page first loads
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [text]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    // cleanup func
    return () => {
      unSub();
    };
  }, [chatId]);

  console.log(chat);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    //taken from uploading image while registering
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  // const storage = getStorage()
  // const storageRef = ref(storage, `images/`)


 

  const handleSend = async () => {
    if (text === "") return;

    let imgUrl = null;

    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }
    } catch (err) {
      console.log(err);
    }

    try {
      await updateDoc(doc(db, "chats", chatId), {
        //after this write what i want to update (push msgs into array)
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(imgUrl && { img: imgUrl }), //if no img-doesnt send, if there is-sends it
        }),
      });

      const userIDs = [currentUser.id, user.id]; //loop, in order not to repeat the same code for both user and receiver

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();
          //find the same chat we are writing
          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen =
            id === currentUser.id ? true : false; //condition, bcz its a loop and chooses btw 2 users(sender and receiver)
          userChatsData.chats[chatIndex].updatedAt = Date.now(); //put new chats on top

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    }

    setImg({
      file: null,
      url: "",
    });

    setText("");
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user?.username}</span>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />

          
        </div>
      </div>
      <div className="center">
        {chat?.messages?.map((message) => (
          <div
            className={
              message.senderId === currentUser?.id ? "message own" : "message"
            }
            key={message?.createdAt}
          >
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}

              <p>{message.text}</p>
              {/* <span>{message}</span> */}
            </div>
          </div>
        ))}


        {img.url && (
          <div className="messages own">
            <div className="texts">
              <img src={img.url} alt="" />
            </div>
          </div>
        )}

        <div ref={endRef}>
          {" "}
          {/* ref along with useEffect lets us jump to the part of the page */}
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImg}
          />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder={
            isCurrentUserBlocked || isReceiverBlocked
              ? "You can't send messages"
              : "Type a msg"
          }
          value={text} //to display emoji in input string
          onChange={(e) => setText(e.target.value)}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)} // open emoji
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />{" "}
            {/*display emoji */}
          </div>
        </div>
        <button


          className="sendButton"
          onClick={handleSend}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          Send
        </button>
      </div>
    </div>
    );
};

export default Chat;
