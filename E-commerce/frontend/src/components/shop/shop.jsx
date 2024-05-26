import { useContext, useState } from "react";
import { AiFillEye, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import "./shop.css";
import { GlobalContext } from "../../GlobalContext";
import ProductDetail from "./productDetail";

const Shop = () => {
  const {
    shop,
    myfilter,
    allCategoryFilter,
    addToCart,
    theme,
    showDetailPage,
  } = useContext(GlobalContext);

  return (
    <>
      <ProductDetail />

      <div className="shop" data-theme={theme}>
        <h2># Shop</h2>
        <p>Home . Shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>All Categories</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={allCategoryFilter}># All</li>
                  <li onClick={() => myfilter("tv")}># TV</li>
                  <li onClick={() => myfilter("laptop")}># Laptop</li>
                  <li onClick={() => myfilter("watch")}># Watch</li>
                  <li onClick={() => myfilter("speaker")}># Speaker</li>
                  <li onClick={() => myfilter("electronics")}># Electronics</li>
                  <li onClick={() => myfilter("headphones")}># Headphones</li>
                  <li onClick={() => myfilter("phone")}># Phone</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img_box">
                <img src="image/shop_left.avif" alt="" />
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src="image/shop_top.webp" alt="" />
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_container">
                {shop.map((product, index) => (
                  <div className="box" key={index}>
                    <div className="img_box">
                      <img src={product.image} alt="" />
                      <div className="icon">
                        <AiFillHeart />
                        <AiFillEye onClick={() => showDetailPage(product)} />
                      </div>
                    </div>
                    <div className="detail">
                      <h3>{product.name}</h3>
                      <p>${product.price}</p>
                      <button onClick={() => addToCart(product)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
