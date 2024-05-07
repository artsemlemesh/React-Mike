import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function Cart(){
    const [totalCart, setTotalCart] =useState(0)


    const cartt = useSelector(state => state.cart.items)
    console.log(cartt, 'cartt' )
    console.log(totalCart, 'totalCart')

    useEffect(() => {

        if (!cartt) return;

        setTotalCart(cartt.reduce((acc, curr) => acc + curr.price, 0))
    },[cartt])


    return (
        <div>
            Cart
            {/* <h2>Cart</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name} - ${item.price}</p>
                </div>
            ))}
            <p>Total: ${totalCart}</p> */}
        </div>
    );
}