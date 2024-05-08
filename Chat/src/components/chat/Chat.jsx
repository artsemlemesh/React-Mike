import { useState, useRef, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Chat = () => {
    const[chat, setChat] = useState();
  const [open, setOpen] = useState(false); //for show/hide Emoji
  const [text, setText] = useState("");

    const endRef = useRef(null)
    //to scroll to the beginning of the page when the page first loads
    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [])
    

    useEffect(()=>{
        const unSub = onSnapshot(doc(db, 'chats', '58KJwSVk9ScSJuYbMBcz'), (res)=>{
            setChat(res.data())
        } )

            // cleanup func
        return () => {
            unSub()
        }
    },[])



  console.log(chat)
  const handleEmoji = (e) => {
    setText(prev=> prev+e.emoji)
    setOpen(false)
};
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Mike Scof</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime repellat dignissimos et itaque corporis voluptatem recusandae sequi totam ab nisi, quaerat, asperiores, vitae amet eos sit architecto aliquid debitis?
                </p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className="message own">
            <div className="texts">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/COLLECTIE_TROPENMUSEUM_Een_groep_mannen_en_kinderen_poseert_bij_een_pas_geschoten_tijger_te_Malingping_in_Bantam_West-Java_TMnr_10006636.jpg"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime repellat dignissimos et itaque corporis voluptatem recusandae sequi totam ab nisi, quaerat, asperiores, vitae amet eos sit architecto aliquid debitis?
                </p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className="message">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime repellat dignissimos et itaque corporis voluptatem recusandae sequi totam ab nisi, quaerat, asperiores, vitae amet eos sit architecto aliquid debitis?
                </p>
                <span>1 min ago</span>
            </div>
        </div>
        <div className="message own">
            <div className="texts">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime repellat dignissimos et itaque corporis voluptatem recusandae sequi totam ab nisi, quaerat, asperiores, vitae amet eos sit architecto aliquid debitis?
                </p>
                <span>1 min ago</span>
            </div>
        </div>
        <div ref={endRef}> {/* ref along with useEffect lets jump to the part of the page */}

        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a msg"
          value={text}//to display emoji in input string
          onChange={(e) => setText(e.target.value)}
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
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
