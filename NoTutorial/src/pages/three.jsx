import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './pages.css'

const Three = () => {
const [hover, setHover] = useState(0)
const [rating, setRating] = useState(0)

function handleClick(getCurrIndex){
  setRating(getCurrIndex)
}

function handleMouseEnter(getCurrIndex){
  setHover(getCurrIndex)
}

function handleMouseLeave(){
  setHover(rating)
}


console.log(rating)


  return (
    <div>
      hello
      {[...Array(8)].map((item, index) => {
        index +=1
        return <FaStar
        key={index}
        className={ index <= (hover || rating) ? 'active': 'inactive'}
        onClick={()=>handleClick(index)}
        onMouseEnter={()=>handleMouseEnter(index)}
        onMouseLeave={()=>handleMouseLeave()}
        />
        
      })}
    </div>
  );
};

export default Three;
