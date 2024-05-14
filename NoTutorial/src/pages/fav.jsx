import { useEffect } from "react";
import { useState } from "react";

const Fav = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false)
  async function fetchData() {
    const request = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const result = await request.json();

    if (result && result.products && result.products.length) {
      setProducts((prevdata)=> [...prevdata, ...result.products]);
    }
    console.log(products);
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  useEffect(()=> {
    if(products.length === 40) setDisableBtn(true)
  },[products])


  return(
  <div>
    <div className="content">
      <h1>load more data func</h1>
      {products ? products.map((item, index)=>(
        <div key={index}><img src={item.thumbnail}/>
        <p>{item.title}</p></div>
      )) : null}
    </div>
    <div className="button">
      <button disabled={disableBtn} onClick={()=> setCount(count+1)}>button</button>
      {disableBtn? 'you have riched 100': null}
    </div>
  </div>)
};

export default Fav;
