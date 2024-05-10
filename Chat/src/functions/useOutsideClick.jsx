import { useEffect } from "react";


export default function useOutsideClick(ref, handler) {
    useEffect(() => {
      function listener(e) {
        if (!ref.current || ref.current.contains(e.target)) {
          return; //ignore clicks inside the specified element
        }
        handler(e); // if outside the designated area- calls handler
      }

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        //remove after using, clean memory
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [handler, ref]);
  }