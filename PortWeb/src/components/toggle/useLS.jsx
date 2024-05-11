import { useEffect, useState } from "react";

export default function useLocalStorage(key, defVal) {
  const [value, setValue] = useState(() => {
    let currVal;

    try {
      currVal = JSON.parse(localStorage.getItem(key) || String(defVal));
    } catch (e) {
      console.log(e);
      currVal = defVal;
    }

    return currVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
