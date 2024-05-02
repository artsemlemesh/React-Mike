import { useState, createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");

  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam }}>
      {children}
    </GlobalContext.Provider>
  );
}
// GlobalContext.Provider, this provider component accepts value prop, which is an object containing the searchParam state and setSearchParam funciton as its props
//any component that is a   DESCENDANT of "GlobalState" will have access to these [search.., set..] values through the context
