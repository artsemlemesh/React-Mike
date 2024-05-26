import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import './homePage.css'
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext';



const ProductCard = ({product}) => {
    const {addToCart} = useContext(GlobalContext);

    return(
    <div className="product-cart">
        <div className="img-box">
            <img src={product.image} alt={product.name}/>
        </div>
        <div className='info'>
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
            <button className="icon-box"><AiFillEye/></button>
            <button className="icon-box"><AiFillHeart/></button>
            <button className='btn' onClick={()=> addToCart(product)}><AiOutlineShoppingCart /></button>
        </div>

    </div>
)
}
export default ProductCard