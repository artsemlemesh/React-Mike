import { useContext, useState } from "react"
import { AiFillEye, AiFillHeart, AiOutlineClose } from "react-icons/ai"
import './shop.css'
import { GlobalContext } from "../../GlobalContext"


const Shop = () => {

    const {shop, filter, allCategoryFilter, addToCart, theme} = useContext(GlobalContext)

    const [showDetail, setShowDetail] = useState(false)
    const [detail, setDetail] = useState({})


    const showDetailPage = (product) => {
        setDetail(product)
        setShowDetail(true)

    }

    const closeDetailPage = () => {
        setShowDetail(false)
    }

    return (

        <>
        {showDetail && (
        <div className="product_detail">
          <button className="close_btn" onClick={closeDetailPage}>
            <AiOutlineClose />
          </button>
          <div className="container">
            <div className="img_box">
              <img src={detail.image} alt="" />
            </div>
            <div className="info">
              <h4># {detail.cat}</h4>
              <h2>{detail.name}</h2>
              <p>{detail.description}</p>
              <h3>${detail.price}</h3>
              <button onClick={() => addToCart(detail)}>Add To Cart</button>
            </div>
          </div>
        </div>
      )}

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
                  <li onClick={() => filter('tv')}># TV</li>
                  <li onClick={() => filter('laptop')}># Laptop</li>
                  <li onClick={() => filter('watch')}># Watch</li>
                  <li onClick={() => filter('speaker')}># Speaker</li>
                  <li onClick={() => filter('electronics')}># Electronics</li>
                  <li onClick={() => filter('headphone')}># Headphone</li>
                  <li onClick={() => filter('phone')}># Phone</li>
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
                {shop.map((product) => (
                  <div className="box" key={product.id}>
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
                      <button onClick={() => addToCart(product)}>Add To Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


        </>
    )
}

export default Shop