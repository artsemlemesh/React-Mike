import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //to handle image upload
      const imgUrl = await upload(avatar.file);

      //this is for a user
      await setDoc(doc(db, "users", res.user.uid), {
        //pass variables to the db
        username, // username: username since its the same we only write it once
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [], //id of blacked users are stored in this array
      });

      //this is for loading chats of a logged in user
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      //if registration is successful it sends a success msg
      toast.success("Account created");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const google = () => {
    console.log("hey google");
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <GoogleLogin clientId="26362118492-g10uh0lndtaen3gakn4mgpe7npr7vnen.apps.googleusercontent.com"/>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button disabled={loading}>{loading ? "Loading" : "Sign in"}</button>
          <div className="icon" onClick={google}>
            {/* Google */}
            <img  src="./google.png" alt="hey" />
          </div>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="avatar" />
            Upload an image:
          </label>
          <input
            type="file"
            id="file"
            name="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button disabled={loading}> {loading ? "Loading" : "Sign up"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
