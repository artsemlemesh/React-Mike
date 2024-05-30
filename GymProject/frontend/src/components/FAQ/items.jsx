import { useState } from "react";
import FAQ from "./FAQ";

const Items = () => {

    const [openIndex, setOpenIndex] = useState(null)
  const items = [
    {
      title: "one",
      content: "cont 1",
    },
    {
      title: "two",
      content: "cont 2",
    },
    {
      title: "three",
      content: "cont 3",
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
        {items.map((item, index) => (
                <FAQ 
                key={index}
                isOpen={openIndex === index} title={item.title} content={item.content}
                onClick={()=> handleItemClick(index)}/>
        ))}
        
    </div>
  )
};

export default Items;
