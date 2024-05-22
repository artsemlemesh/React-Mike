import { useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import './cart.css'


const Cart = () => {

const {cart, setCart, theme} = useContext(GlobalContext)


console.log(cart, 'cartCart')

 

  const increaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      removeProduct(product);
    }
  };


  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id))
  }

  const totalPrice = cart.reduce((acc, item) => acc + (item.quantity * Number(item.price)), 0)


  return (
    <div className="cart" data-theme={theme}>
        <h3>Your cart</h3>
        {cart.length === 0 ? (
            <div className="empty_cart">
                <h2>Your shopping card is empty</h2>
                <Link to='/shop'>
                    <button>Shop Now</button>
                </Link>
            </div>
            
        ):(<>
            <div className='container'>
            {cart.map((item) => (
              <div key={item.id} className='box'>
                <div className='img_box'>
                  <img src={item.image} alt={item.Name} />
                </div>
                <div className='detail'>
                  <div className='info'>
                    <h4>{item.cat}</h4>
                    <h3>{item.Name}</h3>
                    <p>Price: ${Number(item.price).toFixed(2)}</p>
                    <p>Total: ${(Number(item.price) * item.quantity ).toFixed(2)}</p>
                  </div>
                  <div className='quantity'>
                    <button onClick={() => increaseQuantity(item)}>+</button>
                    <input type='number' readOnly value={item.quantity} />
                    <button onClick={() => decreaseQuantity(item)}>-</button>
                  </div>
                  <div className='icon'>
                    <button onClick={() => removeProduct(item)}>
                      <AiOutlineClose />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='bottom'>
            <div className='total'>
              <h4>Sub Total: ${totalPrice.toFixed(2)}</h4>
            </div>
            <button>Checkout</button>
          </div>
        </>)}
    </div>


  )
};

export default Cart