import { useRef } from "react";

export default function Appp() {
  const reference = useRef()
  
    const data = [
    {
      label: "first card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "second card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "third card",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "fourth card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "fifth card",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
  ];

  function scrollToP(){
    let position = reference.current.getBoundingClientRect().top

    window.scrollTo({
        top: position,
        behavior: 'smooth'
    })
  }

  return (
    <>
      <h1>scroll to certain section</h1>
      <button onClick={scrollToP}>Scroll</button>
      {data.map((item, index) => (
        <div ref={index === 3 ? reference : null} style={item.style}>
          <h1>{item.label}</h1>
        </div>
      ))}
    </>
  );
}
