import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      //JSON.parse converts data from API to JS readable data (takes JSON string and converts it to JS object)
      //it also performs error handling, that's why we use try catch
      currentValue = JSON.parse(
        //getItem retrieves a key, if no key, take defaultValue
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.log(e);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  //useEffect saves the value to the local storage whenever it changes
  useEffect(() => {
    //setItem stores serialized value(bcz stringify) under the specified key
    localStorage.setItem(key, JSON.stringify(value));
    // it runs whenever either of key, value(dependecies) changes
  }, [key, value]);

  return [value, setValue];
}
