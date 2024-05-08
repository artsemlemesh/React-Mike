import { collection, getDoc, query, where } from "firebase/firestore";
import "./addUser.css";
import { db } from "../../lib/firebase";
import { useState } from "react";

const AddUser = () => {
    const [user, setUser] = useState(null)

    const handleSearch = async e =>{
        e.preventDefault()
        const formData = new FormData()
        const username = formData.get('username')

        try{

            const userRef = collection(db, 'users')

            const q = query(userRef, where('username', '==', username))
            const querySnapShot = await getDoc(q)
            if(!querySnapShot.empty){
                setUser(querySnapShot.doc)
            }

        } catch(err){
            console.log(err)

        }



    }

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username"/>
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
            <img src='./avatar.png' alt=""/>
            <span>Rick grandpa</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
