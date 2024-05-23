import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import './homePage.css'


const ProductCard = ({product, addToCart}) => (
    <div className="product-cart">
        <div className="img-box">
            <img src={product.image} alt={product.name}/>
            <div className="icon">
                <div className="icon-box"><AiFillEye/>sdf</div>
                <div className="icon-box"><AiFillHeart/>dfg</div>
            </div>
        </div>
        <div className='info'>
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
            <button className='btn' onClick={()=> addToCart(product)}>Add to cart</button>
        </div>

    </div>
)

export default ProductCard