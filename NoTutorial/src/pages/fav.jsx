import { useEffect } from "react";
import { useState } from "react";

const Fav = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function loadProducts() {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const data = await res.json();

    if (data) {
      setProducts((prevData)=> [...prevData, ...data.products]);
      console.log(products);
    }
  }

  useEffect(() => {
    loadProducts();
  }, [count]);

  return (
    <>
      <div className="load-container">
        <div className="product-container">
        {products && products.length ? products.map((product, index)=>(
          <div key={index}>
              <img src={product.thumbnail} alt="product"/>
              <p>{product.title}</p>
          </div>
        )): null}

        </div>
        <div className="button-container">
          <button onClick={()=>setCount(count+1)}>more</button>
        </div>
      </div>
    </>
  );
};

export default Fav;
