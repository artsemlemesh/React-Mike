// import { useRef, useState } from "react";
// import useOutsideClick from ".";  //path to the custom hook

// export default function UseOnclickOutsideTest() {
//     const [showContent, setShowContent] = useState(false);

//     const ref = useRef()//creates a reference to a DOM element
//     //useRef is a hook that is used for a value that is not needed to be rerendered

//     //call useOutsideClick hook to hide content when clicked outside
//     useOutsideClick(ref, ()=> setShowContent(false))

//   return (
//     <div>
//       {showContent ? (
//         <div ref={ref}>
//             <h1>this is a random content</h1>
//             <p>click outside</p>
//         </div>
//       ) : (
//         <button onClick={() => setShowContent(true)}>Show content</button>
//       )}
//     </div>
//   );
// }

// //.focus() automatically focuses on an input line, for mobiles it triggers a keyboard, very helpful and useful

import { useRef, useState } from "react";

import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef(); //creates a reference to a DOM element

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>test title</h1>
          <p>click outside this area</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>show content</button>
      )}
    </div>
  );
}
