import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"


export default function Cart(){
    const [totalCart, setTotalCart] =useState(0)


    const cart = useSelector(state=>state.cart)

    useEffect(() => {

        if (!cart) return;

        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0))
    },[cart])

    console.log(cart, 'cart' )

    return (
        <div>
            <h2>Cart</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name} - ${item.price}</p>
                </div>
            ))}
            <p>Total: ${totalCart}</p>
        </div>
    );
}