import ProductCard from "./ProductCard";
import "./homePage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { AiFillEye, AiFillHeart } from "react-icons/ai";

const MyHome = () => {

  const {
    addToCart,
    theme,
    title,
    cart,
    newProduct,
    featuredProduct,
    topProduct,
    trendingProduct,
    filterCategory,
  } = useContext(GlobalContext);
  console.log(cart, "cartMyhome");

  const ProductSection = ({ products }) => (
    <div className="box">
      <div className="header">
        <h2>{title}</h2>
      </div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );

  return (
    <div className="home" data-theme={theme}>
      <div className="top-banner">
        <div className="content">
          <h3>silver aluminium</h3>
          <h2>apple watch</h2>
          <p>30% off on your first order</p>
          <Link to="/shop" className="link">
            Shop now
          </Link>
        </div>
      </div>

      <div className="trending">
        <div className="container">
          <div className="left_box">
            <div className="header">
              <div className="heading">
                <h2 onClick={() => filterCategory("all")}>trending product</h2>
              </div>
              <div className="categories">
                <h3 onClick={() => filterCategory("new")}>New</h3>
                <h3 onClick={() => filterCategory("featured")}>Featured</h3>
                <h3 onClick={() => filterCategory("top")}>Top Selling</h3>
              </div>
            </div>

            <div className="products">
              <div className="product_container">
                {trendingProduct.map((product) => (
                  <div className="product_box" key={product.id}>
                    <div className="img_box">
                      <img src={product.image} alt={product.name} />
                      <div className="icon">
                        <div className="icon_box">
                          <AiFillEye />
                        </div>
                        <div className="icon_box">
                          <AiFillHeart />
                        </div>
                      </div>
                    </div>
                    <div className="info">
                      <h3>{product.name}</h3>
                      <p>${product.price}</p>
                      <button
                        className="btn"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button>Show More</button>
            </div>
          </div>

          <div className="right_box">
            <div className="right_container">
              <div className="testimonial">
                <div className="head">
                  <h3>our testimonial</h3>
                </div>
                <div className="detail">
                  <div className="img_box">
                    <img src="image/T1.avif" alt="testimonial" />
                  </div>
                  <div className="info">
                    <h3>stephan robot</h3>
                    <h4>web designer</h4>
                    <p>
                      Duis faucibus enim vitae nunc molestie, nec facilisis arcu
                      pulvinar nullam mattis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="newsletter">
                <div className="head">
                  <h3>newsletter</h3>
                </div>
                <div className="form">
                  <p>join our mailing list</p>
                  <input type="email" placeholder="E-mail" autoComplete="off" />
                  <button>Subscribe</button>
                  <div className="icon_box">
                    <div className="icon">
                      <BiLogoFacebook />
                    </div>
                    <div className="icon">
                      <BiLogoTwitter />
                    </div>
                    <div className="icon">
                      <BiLogoInstagram />
                    </div>
                    <div className="icon">
                      <BiLogoYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banners">
        <div className="container">
          <div className="left_box">
            <div className="box">
              <img src="image/Multi-Banner-1.avif" alt="banner" />
            </div>
            <div className="box">
              <img src="image/Multi-Banner-2.avif" alt="banner" />
            </div>
          </div>
          <div className="right_box">
            <div className="top">
              <img src="image/Multi-Banner-3.webp" alt="banner" />
              <img src="image/Multi-Banner-4.avif" alt="banner" />
            </div>
            <div className="bottom">
              <img src="image/Multi-Banner-5.webp" alt="banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="product_type">
        <div className="container">
          <ProductSection
            title="New Product"
            products={newProduct}
            addToCart={addToCart}
          />
          <ProductSection
            title="Featured Product"
            products={featuredProduct}
            addToCart={addToCart}
          />
          <ProductSection
            title="Top Product"
            products={topProduct}
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default MyHome;
