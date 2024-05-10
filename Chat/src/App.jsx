import { createContext, useEffect, useState } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";
import useLocalStorage from "./components/localStorage/useLocalStorage";
import "./index.css";








const App = () => {
































  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    //cleanup funciton, improves performance, gets removed after being used
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  if (isLoading) return <div className="loading">Loading...</div>;




  return (
    <div className="container" data-theme={theme}>

      {currentUser ? (
        <>
          <button onClick={handleToggleTheme}></button>
          {/* <button>sdf</button> */}

        

          <List />
            {chatId && <Chat  />}
            {chatId && <Detail  />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
