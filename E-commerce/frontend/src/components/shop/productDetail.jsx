import { useContext, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useOutsideClick from "./outsideClick";
import { GlobalContext } from "../../GlobalContext";



const ProductDetail = () => {
    const {showDetail, closeDetailPage, detail, addToCart, setShowDetail} = useContext(GlobalContext);

    const ref = useRef()

    useOutsideClick(ref, ()=>setShowDetail(false))
    
    return (
      <>
        {showDetail && (
          <div ref={ref} className="product_detail">
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
      </>
    );
  };
  
  export default ProductDetail;
  