import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";
import { useState } from "react";
import { useChat } from "../chat-detail-context/passPictures";

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();



  const handleBlock = async () => {
    if(!user) return;

      const userDocRef = doc(db, 'users', currentUser.id)
    try{
      await updateDoc(userDocRef,{
        blocked: isReceiverBlocked? arrayRemove(user.id) : arrayUnion(user.id)
      })
      changeBlock()
    } catch(err){
      console.log(err)
    }


  };
  const[selected, setSelected] = useState(false)


  function handleSelection(){
    setSelected((toggle) => !toggle)
  }


  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>


        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" onClick={handleSelection} alt="" />
          </div>
          <div className="photos">

          {selected ?  (<div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b9/P.t.altaica_Tomak_Male.jpg"
                  alt=""
                />
                <span>photo_234</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>) : null}

          </div>
        </div>



        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked? 'You are Blocked' : isReceiverBlocked ? 'User blocked': 'Block User'}
        </button>
        {/* added onClick after set up zustand, signOut is a built in func */}
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};
export default Detail;
