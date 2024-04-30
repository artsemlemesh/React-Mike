import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
        // ref- object that references the DOM element I want to detect clicks outside of
        //handler- function called when i clicked outside the ref element
  useEffect(() => {
    //useEffect to set up event listeners when the component mounts and remove when unmounts
    function listener(e) {//checks for clicks (because of e)
      if (!ref.current || ref.current.contains(e.target)) {//if clicked element is outside of the specified element, it calls the handler func
        return;//ignore clicks inside the specified element
      }
      //call the provided handler function when clicked outside
      handler(e);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {//remove event listeners to prevent memory leaks
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}


