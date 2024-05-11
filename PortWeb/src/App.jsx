import { useState } from "react";

import "./App.css";
import Sun from "./img/sun.png";
import Moon from "./img/moon.png";

import Intro from "./components/intro/intro";
// import Theme from "./components/toggle";
import useLocalStorage from "./components/toggle/useLS";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <div className = 'toggle-switch'>
            <label>
                <input type = 'checkbox'/>
                <span className = 'slider' onClick={handleToggleTheme}></span>
            </label>
            
        </div>


        <Intro />
        {/* <Theme/> */}
      </div>
    </div>
  );
}

export default App;
