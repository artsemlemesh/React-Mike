import { createContext } from "react";
import { Children } from "react";
import useLS from "../components/navbarCustomHook";

export const GlobalCont = createContext(null);

export default function GlobalState({ children }) {
  const [theme, setTheme] = useLS("theme", "day");

  function handleTheme() {
    setTheme(theme === "day" ? "dark" : "day");
  }

  return (
    <GlobalCont.Provider
      value={{
        handleTheme,
        theme,
      }}
    >
      {children}
    </GlobalCont.Provider>
  );
}
