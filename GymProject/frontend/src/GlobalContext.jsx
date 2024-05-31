import { createContext, createRef, useRef } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    // const sections = [1, 2, 3, 4, 5]
  const sectionRefs = useRef([1, 2, 3, 4, 5].map(() => createRef()));
    // const ref = useRef()
  function scrollToSection(index) {
    let pos = sectionRefs.current[index].current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <GlobalContext.Provider value={{ scrollToSection, sectionRefs }}>
      {children}
    </GlobalContext.Provider>
  );
}
