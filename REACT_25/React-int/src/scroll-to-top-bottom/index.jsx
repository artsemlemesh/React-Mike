import useFetch from "../use-fetch";
import { useRef } from "react";

export default function ScrollTotopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=1000",
    {}
  );

  const bottomRef = useRef(null) //for bottom scrolling

  const certainRef = useRef(null)

  function handleCertain(){
    certainRef.current.scrollIntoView({behavior: 'smooth'})
  }

  function handleScrollTotop(){
    window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    })
  }

  function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({behavior: 'smooth'})
  }
  //bottomRef is a reference attached to the bottom element <div ref={bottomRef}>
  //bottomRef.current gives access to the DOM node of this div


  if (error){
    return <h1>error occured</h1>
  }

  if (pending) {
    return <h1>loading please wait</h1>
  }


  return (
    <div>
      <h1>scroll to top and bottom</h1>
      <h3>top section</h3>
      <button onClick={handleScrollToBottom}>scroll to bottom</button>
            <div ref={certainRef}> certain place</div>
        
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>

        <button onClick={handleCertain}>scroll to a certain place</button>
      <button onClick= {handleScrollTotop}>scroll to top</button>
      <div ref={bottomRef}></div>
      <h3>this is the bottom of the page</h3>

    </div>
  );
}
